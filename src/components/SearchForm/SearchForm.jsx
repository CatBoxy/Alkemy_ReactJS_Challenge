import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextInput from '../TextInput/TextInput';
import Loader from '../Loader';
import { Styles } from './styles';
import { Button } from 'react-bootstrap';

export default function SearchForm({ getDishes, setIsLoading }) {

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
              .min(2, 'Debe contener al menos 2 caracteres')
              .required('Requerido'),
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
                <Button className="button" type="submit" >Buscar</Button>
              </div>
            </div>
          </Form>

        </Formik>
      </Styles>
    </>
  );
}
