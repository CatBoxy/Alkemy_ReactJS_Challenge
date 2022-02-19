import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextInput from '../TextInput/TextInput';
import { Styles } from './styles';
import { Button } from 'react-bootstrap';

export default function SearchForm({ getDishes, setIsLoading, isLoading }) {

  function handleSubmit(values) {
    setIsLoading(true);
    getDishes(values);
  }

  return (
    <>
      <Styles>
        <Formik
          initialValues={{
            dish: '',
            vegan: false,
          }}
          validationSchema={Yup.object({
            dish: Yup.string()
              .min(3, 'Este campo debe contener mas de 2 caracteres')
              .required('Este campo debe contener mas de 2 caracteres'),
          })}
          onSubmit={async (values) => {
            handleSubmit(values);
          }}
        >

          <Form className="form">
            <div>
              <TextInput
                name="dish"
                type="text"
                placeholder="Su Plato"
              />
              <div className='button-checkBox'>
                <label className='checkBox'>
                  <Field
                    name="vegan"
                    type="checkbox"
                  />
              Solo Vegano
                </label>
                <Button className="button" type="submit" disabled={isLoading} >Buscar</Button>
              </div>
            </div>
          </Form>

        </Formik>
      </Styles>
    </>
  );
}
