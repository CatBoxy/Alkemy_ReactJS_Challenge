import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import { useSession } from '../context/SessionProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import Loader from './Loader';
import swal from 'sweetalert';

export default function LoginForm() {
  const { signIn, loginError, setLoginError } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  function handleSubmit(values) {

    signIn(values, () => {
      navigate(from, { replace: true });
    });
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    if (loginError) {
      swal('Ooops! Las credenciales son invalidas')
        .then(() => {
          setLoginError(false);
        });
    }
  }, [ loginError ]);

  return (
    <>
      <h1>Log in</h1>
      <h2>Debes loggearte para ingresar al sitio</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(2, 'Must be at least 2 characters long')
            .required('Required'),
        })}
        onSubmit={async (values) => {
          await sleep(2000);
          handleSubmit(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="Email"
            />
            <TextInput
              label="Password"
              name="password"
              type="text"
              placeholder="Password"
            />
            {isSubmitting ? <Loader/> : <button type="submit" >Submit</button>}
            {/* <button type="submit" disabled={isSubmitting}>Submit</button> */}
          </Form>
        )}
      </Formik>
    </>
  );
}
