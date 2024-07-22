import { ErrorMessage, useField } from 'formik'
import React from 'react'

export default function CommonInput({label, ...props}) {
    const [field, meta]  = useField(props)
    console.log(field, meta)
  return (
    <>
      <div className="form-group">
        <label htmlFor={props.name}>{label}</label>

        <div className="input-wrapper">
            <input type={props.type} className={`form-control ${meta.touched && meta.error ? 'is-invalid'  :''}`}
             {...props}
             {...field}
             />
            {meta.touched && meta.error ? <span className='error-icon'>*</span>:''}
        </div>
        <ErrorMessage name={props.name} component={'div'} className='error-message' />
      </div>
    </>
  )
}
