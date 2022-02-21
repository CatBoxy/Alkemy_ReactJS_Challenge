import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../TextInput/TextInput';
import { useSession } from '../../context/SessionProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { Styles } from './styles';
import { Button, Spinner } from 'react-bootstrap';

export default function LoginForm() {
  const { logIn, loginError, setLoginError, isLoading } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  function handleSubmit(values) {
    logIn(values, () => {
      navigate(from, { replace: true });
    });
  }

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
      <Styles>
        <h1 className='title'>Log in</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Email invalido')
              .required('Requerido'),
            password: Yup.string()
              .min(2, 'Debe contener al menos 2 caracteres')
              .required('Requerido'),
          })}
          onSubmit={async (values) => {
            await handleSubmit(values);
          }}
        >

          <Form className="form">
            <TextInput
              name="email"
              type="email"
              placeholder="Email"
            />
            <TextInput
              name="password"
              type="password"
              placeholder="Contraseña"
            />
            <Button className="button" type="submit" disabled={isLoading}>Enviar</Button>
            {isLoading && <Spinner animation="border" variant="warning" style={{ marginTop: '1rem' }}/>}
          </Form>

        </Formik>
      </Styles>
    </>
  );
}
