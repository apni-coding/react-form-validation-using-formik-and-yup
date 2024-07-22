import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import CommonInput from './CommonInput';

const initialValues = {
    firstName:''
};

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    id: Yup.string().required('ID is required'),
    phoneNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required')
});

// const validationSchema = Yup.object({
//     firstName: Yup.string()
//         .matches(/^[A-Za-z]+$/, 'First name can only contain letters')
//         .required('First name is required'),
//     lastName: Yup.string()
//         .matches(/^[A-Za-z]+$/, 'Last name can only contain letters')
//         .required('Last name is required'),
//     email: Yup.string()
//         .email('Invalid email address')
//         .required('Email is required'),
//     id: Yup.string()
//         .required('ID is required'),
//     phoneNumber: Yup.string()
//         .matches(/^\d{10}$/, 'Phone number must be 10 digits')
//         .required('Phone number is required'),
//     password: Yup.string()
//         .min(8, 'Password must be at least 8 characters')
//         .required('Password is required'),
//     confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm password is required')
// });

export default function Register() {

    const handleSubmit = (values, {resetForm})=>{
        console.log(values)
        resetForm()
    }

  return (
    <div className='registration-form-container'>
        <h2>Register Form</h2>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {
                ({resetForm, errors, touched})=>(
                    <>
                        <Form className='registration-form'>
                            {/* <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field 
                                    name='firstName'
                                >
                                    {
                                        ({field})=>(
                                            <>
                                              <div className="input-wrapper">
                                                <input type="text" className={`form-control ${touched.firstName && errors.firstName ? 'is-invalid'  :''}`} {...field}/>
                                                {touched.firstName && errors.firstName ? <span className='error-icon'>*</span>:''}
                                              </div>
                                            </>
                                        )
                                    }
                                </Field>
                                <ErrorMessage name='firstName' component={'div'} className='error-message' />
                            </div> */}
                            
                            <CommonInput label='First Name' name='firstName' type='text' />
                            <CommonInput label="Last Name" name="lastName" type="text" />
                            <CommonInput label="Email" name="email" type="email" />
                            <CommonInput label="ID" name="id" type="text" />
                            <CommonInput label="Phone Number" name="phoneNumber" type="text" />
                            <CommonInput label="Password" name="password" type="password" />
                            <CommonInput label="Confirm Password" name="confirmPassword" type="password" />
                            <div className="form-buttons">
                                <button className="btn btn-primary" type='submit'>Register</button>
                                <button type="button" onClick={resetForm} className="btn btn-secondary">Reset</button>
                            </div>
                        </Form>
                    </>
                )
            }
        </Formik>
    </div>
  )
}
