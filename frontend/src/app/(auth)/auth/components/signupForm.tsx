'use client'
import React from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useFormik } from 'formik'
import { useState } from 'react'
import axios from '@/lib/axios'
import Image from 'next/image'
import { signUpSchema } from '@/lib/validationSchema'

const SignupForm = () => {
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
        <section className="bg-white lg:grid lg:min-h-screen lg:grid-cols-12">
            <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <Image alt="" src="/gas-station.png" width={1000} height={1000} className="absolute inset-0 h-full w-full object-cover "/>
                <div className="hidden lg:relative lg:block lg:p-12">
                    <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        Product Management System
                    </h2>

                    <p className="mt-4 leading-relaxed text-white/90">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit nemo qui excepturi, facilis aliquid enim suscipit necessitatibus ipsam cumque quia debitis illo nulla praesentium doloremque iusto accusantium in vero.
                    </p>
                </div>
            </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 w-full">
            <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block lg:hidden">
                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        Product Management System
                    </h1>
                    <p className="mt-4 leading-relaxed text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum architecto repellat, aliquid laudantium illo quo praesentium ex quam vel exercitationem velit delectus quis id harum! Inventore praesentium voluptatem corporis fugiat!
                    </p>
                </div>

                <form method='POST' onSubmit={handleSubmit} className="flex flex-col gap-4 w-md">

                    <div className='flex flex-col gap-y-1 mb-5'>
                        <p className='text-3xl font-semibold text-[#333]'>Sign Up</p>
                        <p className='text-gray-500 text-sm'>Already have an account? <Link href="/auth/login" className='text-gray-800'>Sign In</Link></p>
                    </div>

                    <div className='flex flex-col gap-y-3'>
                        <div>
                            <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur}  placeholder='Full Name' name="name" className={`text-field ${errors.name && touched.name ? "border-2 border-danger focus:outline-none" : ""}`} />
                            {errors.name && touched.name && <p className='error-text'>{errors.name}</p>}
                        </div>
                        <div>
                            <input type="text" value={values.email} onChange={handleChange} onBlur={handleBlur}  placeholder='Email' name="email" className={`text-field ${errors.email && touched.email ? "border-2 border-danger focus:outline-none" : ""}`} />
                            {errors.email && touched.email && <p className='error-text'>{errors.email}</p>}
                        </div>
                        <div>
                            <input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Password' name="password" className={`text-field ${errors.password && touched.password ? "border-2 border-danger focus:outline-none" : ""}`}/>
                            {errors.password && touched.password && <p className='error-text'>{errors.password}</p>}
                        </div>
                    </div>

                    {/* <div className="col-span-6 text-sm">
                        <span>By using this service, you understood and agree to the ClickCart Online Services </span>
                        <Link href="#" className='text-blue-600'>Terms of Use</Link>
                        <span className="mx-[5px]">and</span>
                        <a href="#" className="text-blue-600">Privacy Statement</a>
                        <span>.</span>
                    </div> */}

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button className="w-full rounded-md bg-blue-600 px-12 py-3 font-medium text-white 600 cursor-pointer">
                        Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </main>
    </section>
    )
}

export default SignupForm

        {/* <div className='h-screen flex items-center justify-center'>
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
        </div> */}
