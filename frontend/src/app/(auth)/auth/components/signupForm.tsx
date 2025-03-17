'use client'
import React from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useFormik } from 'formik'
import { useState } from 'react'
import axios from '@/lib/axios'
import { Button } from '@/components/ui/button'
import { signUpSchema } from '@/lib/validationSchema'

const signupForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: signUpSchema,
        onSubmit: async (values, { resetForm } : { resetForm: () => void }) => {
            console.log(values)
            resetForm()
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
            try {
                const response = await axios.post("/api/signup", values);
                toast.success("Signed up!")
                console.log(response);
            }catch (error) {
                console.log(error);
                toast.error("Server Error!")
            }
        }
    })

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='shadow-lg p-5 py-10 rounded-md'>
                <div className='text-center'>
                    <p className='text-2xl font-semibold mb-3'>Signup</p>
                    <p>Already have an account? <Link href="/auth/login">Login</Link></p>
                </div>

                <form method="POST" onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-y-2'>
                        <input type="text" className={`text-field ${errors.name && touched.name ? "error-input" : ""}`} placeholder='Full Name' name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}/>
                        {errors.name && touched.name && <p className='error-text'>{errors.name}</p>}

                        <input type="text" className={`text-field ${errors.email && touched.email ? "error-input" : ""}`} placeholder='Email' name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} />
                        {errors.email && touched.email && <p className='error-text'>{errors.email}</p>}

                        <input type="password" className={`text-field ${errors.password && touched.password ? "error-input" : ""}`} placeholder='Password' name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} />
                        {errors.password && touched.password && <p className='error-text'>{errors.password}</p>}
                    </div>

                    <Button type='submit' className='submit-btn mt-2' disabled={isLoading as boolean}>Signup</Button>

                </form>
            </div>
        </div>
    )
}

export default signupForm
