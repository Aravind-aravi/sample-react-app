import React from 'react'
import {useFormik} from 'formik'

export const Youtube = () => {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            degree:''
        },
        onSubmit=values=>{
            console.log("form",values);
        }
    })
    console.log("data",formik.values );
    return (
        <div>
            <form onSubmit={formik.handleChange}>
            <label htmlFor="name">Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}></input><br/>
            <label htmlFor="email">Email</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}></input><br/>
            <label htmlFor="degree">degree</label>
            <input type='text' id='degree' name='degree' onChange={formik.handleChange} value={formik.values.degree}></input><br/>
            <button type='submit'>submit</button>
            </form>
        </div>
    )
}
