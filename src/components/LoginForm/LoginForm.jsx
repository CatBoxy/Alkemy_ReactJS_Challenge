import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../TextInput/TextInput';
import { useSession } from '../../context/SessionProvider';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginForm() {
  const { signIn } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  function handleSubmit(values) {

    signIn(values, () => {
      navigate(from, { replace: true });
    });
  }
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
          handleSubmit(values);
        }}
      >
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
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
