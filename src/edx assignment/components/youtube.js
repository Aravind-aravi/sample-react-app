import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const initialValues = {
    name: '',
    email: '',
    degree: ''

}
const onSubmit = values => {
    console.log("form", values);
}

const validate = values => {

    let errors = {}

    if (!values.name) {
        errors.name = 'Required'

    }

    if (!values.email) {
        errors.email = 'Required'

    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.degree) {
        errors.degree = 'Required'

    }
    return errors
}



export const Youtube = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log("form error", formik.touched);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}></input><br />
                     {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type='email' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input><br />
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="degree">degree</label>
                    <input type='text' id='degree' name='degree' onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.degree}></input><br />
                   {formik.touched.degree && formik.errors.degree ? <div className="error">{formik.errors.degree}</div> : null}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
