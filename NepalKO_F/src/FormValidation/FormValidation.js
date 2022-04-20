import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const FormValidation = () => {
    return (
        <>
            <Formik 
                initialValues={{
                    fname:'',
                    lname:'',
                    email:'',
                    pass:'',
                    cpass:''
                }}

                validationSchema = {Yup.object({
                    fname:Yup.string()
                    .required('First name is required')
                    .max(20,'First name cannot be more than 20 characters')
                    .min(2,'First name must be more than 2 characters'), 

                    lname:Yup.string()
                    .required('Last name is required')
                    .max(20,'Last name cannot be more than 20 characters')
                    .min(2,'Last name must be more than 2 characters'), 

                    email:Yup.string()
                    .required('Email is required')
                    .email('Invalid email'),

                    pass:Yup.string()
                    .matches(/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]){8,}/,'Password must be at least 8 characters.')
                    .required('Password cannot be empty'),

                    cpass:Yup.string()
                    .required('Required field')
                    .oneOf([Yup.ref('pass'),null],'Password and Confirm Password does not match.')
                    // .oneOf([Yup.ref(password),null],"error")
                })

                }
            
            
            >
                <div className="col-md-6 m-auto mt-5 shadow-lg p-3">
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="fname">First Name:</label>
                            <Field Type="text" name="fname" className="form-control"></Field>
                            <ErrorMessage name="fname">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lname">Last Name:</label>
                            <Field Type="text" name="lname" className="form-control"></Field>
                            <ErrorMessage name="lname">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email:</label>
                            <Field Type="email" name="email" className="form-control"></Field>
                            <ErrorMessage name="email">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass">Password:</label>
                            <Field Type="password" name="pass" className="form-control"></Field>
                            <ErrorMessage name="pass">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpass">Confirm Password:</label>
                            <Field Type="password" name="cpass" className="form-control"></Field>
                            <ErrorMessage name="cpass">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary form-control">Register</button>
                        </div>


                    </Form>

                </div>






            </Formik>


        </>
    )
}

export default FormValidation
