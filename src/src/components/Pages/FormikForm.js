import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";




const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Z]+$/, "first letter must be capital") 
    .required('required'),

  email: Yup.string()
    .email("Invalid email format")
    .required('required'),

  password: Yup.string()
    .min(6, "Password must be at least 4 characters")
    .required('required'),

});

const FormikForm = () => {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });

  

  return (
    <formik>
    <center>
      <form onSubmit={formik.handleSubmit}>
        
        <div className="formapp">
          
          <h2>Sign Up</h2>
          
          <div className="formikIn">
            
            <label htmlFor="name"><b>Name</b></label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              autoComplete="off"
            />

            {formik.touched.name && formik.errors.name ? ( 
              <div>{formik.errors.name}</div>
            ) : null}
          </div>
          <br />

          <div className="formikIn">
            <label htmlFor="email"><b>Email</b></label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              
            />

            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <br />
          <div className="formikIn">
            <label htmlFor="password"><b>Password</b></label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              autoComplete="off"
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <br />
          <div id='formik-button'>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </center>
    </formik>
  );
};

export default FormikForm;
