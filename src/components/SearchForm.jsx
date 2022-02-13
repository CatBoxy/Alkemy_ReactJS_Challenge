import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import Loader from './Loader';

export default function SearchForm({ getDishes }) {

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function handleSubmit(values) {
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
          await sleep(2000);
          handleSubmit(values);
        }}
      >
        {({ isSubmitting }) => (
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
            {isSubmitting ? <Loader/> : <button type="submit" >Submit</button>}
          </Form>
        )}
      </Formik>
    </>
  );
}
