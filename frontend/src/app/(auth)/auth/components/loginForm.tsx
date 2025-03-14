'use client'
import React from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useFormik } from 'formik'

interface values {
    email: string,
    password: string
}
const LoginForm = () => {

    const { values, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
        email: "",
        password: ""
    },
    onSubmit: async (values: values) => {
        console.log(values);
    }
});
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='shadow-lg p-5 py-10 rounded-md'>
            <div className='text-center'>
                <p className='text-2xl font-semibold mb-3'>Login</p>
                <p>Don&rsquo;t have an account? <Link href="/auth/signup">Signup</Link></p>
            </div>

            <form method="POST" onSubmit={handleSubmit}>
                <div className='flex flex-col gap-y-2'>
                    <input type="text" placeholder='Email' className='text-field' name='email'
                    value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    <input type="text" placeholder='Password' className='text-field' name='password'
                    value={values.password} onChange={handleChange} onBlur={handleBlur} />
                </div>
                <button type='submit' className='submit-btn mt-2' onClick={() => toast.success("Logged in!")}>Login</button>

            </form>
        </div>
    </div>
  )
}

export default LoginForm
