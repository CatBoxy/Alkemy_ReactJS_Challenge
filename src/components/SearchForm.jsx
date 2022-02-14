import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import Loader from './Loader';

export default function SearchForm({ getDishes, setIsLoading }) {

  function handleSubmit(values) {
    setIsLoading(true);
    getDishes(values);
  }

  return (
    <>
      <Formik
        initialValues={{
          dish: '',
          vegan: false,
        }}
        validationSchema={Yup.object({
          dish: Yup.string()
            .min(2, 'Must be at least 2 characters long')
            .required('Required'),
        })}
        onSubmit={async (values) => {
          handleSubmit(values);
        }}
      >

        <Form>
          <TextInput
            label="Your Dish"
            name="dish"
            type="text"
            placeholder="Your Dish"
          />
          <label>
            <Field
              name="vegan"
              type="checkbox"
            />
              Only vegan
          </label>
          <button type="submit" >Submit</button>
        </Form>

      </Formik>
    </>
  );
}
