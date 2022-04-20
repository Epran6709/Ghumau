import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormV = () => {
  return (
    <>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          pwd: "",
          cpwd: "",
        }}
        validationSchema={Yup.object({
          fname: Yup.string()
            .required("First name is required")
            .max(20, "First name cannot be more than 20 characters")
            .min(2, "First name must be more than 2 characters"),

          lname: Yup.string()
            .required("Last name is required")
            .max(20, "Last name cannot be more than 20 characters")
            .min(2, "Last name must be more than 2 characters"),

          email: Yup.string()
            .required("email is required")
            .email("invalid email"),

          pwd: Yup.string()
            .matches(
              /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^]){8,}/,
              "password must be at least 8 characters"
            )
            .required("password required"),

          cpwd: Yup.string()
            .required("c password required")
            .oneOf([Yup.ref("pwd"), null], "Password does not match"),
        })}
      >
        <div className="col-md-6 m-auto mt-5 shadow-lg p-3">
          <Form>
            <div className="mb-3">
              <label htmlFor="fname">First Name</label>
              <Field Type="text" name="fname" className="form-control"></Field>
              <ErrorMessage name="fname">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="mb-3">
              <label htmlFor="lname">Last Name</label>
              <Field Type="text" name="lname" className="form-control"></Field>
              <ErrorMessage name="lname">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <Field Type="email" name="email" className="form-control"></Field>
              <ErrorMessage name="email">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="mb-3">
              <label htmlFor="pwd">Password</label>
              <Field
                Type="password"
                name="pwd"
                className="form-control"
              ></Field>
              <ErrorMessage name="pwd">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="mb-3">
              <label htmlFor="cpwd">ConfirmPassword</label>
              <Field
                Type="password"
                name="cpwd"
                className="form-control"
              ></Field>
              <ErrorMessage name="cpwd">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="mb-3">
              <button className="btn btn-primary form-control">Register</button>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default FormV;