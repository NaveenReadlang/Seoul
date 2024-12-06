import React from 'react';
import { Formik, Form, Field } from 'formik';

const FormikBasic = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikBasic;