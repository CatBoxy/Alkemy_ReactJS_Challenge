import React from 'react';
import { useField } from 'formik';
import { Input, InputWrapper } from './styles';

export default function TextInput({ label, ...props }) {

  const [ field, meta ] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <InputWrapper>
        <Input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </InputWrapper>
    </>
  );
}
