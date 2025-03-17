'use client'
import React from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useFormik } from 'formik'
import { useState } from 'react'
import axios from '@/lib/axios'
import { Button } from '@/components/ui/button'

const signupForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        }, onSubmit: async (values, { resetForm } : { resetForm: () => void }) => {
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
                        <input type="text"
                        className='text-field'
                        placeholder='Username'
                        name="name"
                        value={values.name}
                        onChange={handleChange}/>

                        <input type="text"
                        className='text-field'
                        placeholder='Email'
                        name="email"
                        value={values.email}
                        onChange={handleChange} />

                        <input type="text"
                        className='text-field'
                        placeholder='Password'
                        name="password"
                        value={values.password}
                        onChange={handleChange} />
                    </div>

                    <Button className='submit-btn mt-2' disabled={isLoading as boolean}>Signup</Button>

                </form>
            </div>
        </div>
    )
}

export default signupForm
