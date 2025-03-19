'use client'
import React from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useFormik } from 'formik'
import Image from 'next/image'
import { signInSchema } from '@/lib/validationSchema'
import { useRouter } from 'next/navigation'

interface values {
    email: string,
    password: string
}
const LoginForm = () => {

    const router = useRouter();

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
        email: "",
        password: ""
    },
    validationSchema: signInSchema,
    onSubmit: async (values: values, { resetForm }: { resetForm: () => void }) => {
        console.log(values);
        toast.success("Logged In");
        resetForm()
        setTimeout(() => {
            router.push("/dashboard")
        }, 3000);
    }
    });
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

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
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
                    <p className='text-3xl font-semibold text-[#333]'>Sign In</p>
                    <p className='text-gray-500 text-sm'>Don&rsquo;t have an account? <Link href="/auth/signup" className='text-gray-800'>Signup</Link></p>
                </div>

                <div className='flex flex-col gap-y-3'>
                    <div>
                        <input type="text" id="FirstName" value={values.email} onChange={handleChange} onBlur={handleBlur}  placeholder='Email' name="email" className={`text-field ${errors.email && touched.email ? "border-2 border-danger focus:outline-none" : ""}`} />
                        {errors.email && touched.email && <p className='error-text'>{errors.email}</p>}
                    </div>
                    <div>
                        <input type="password" id="FirstName" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Password' name="password" className={`text-field ${errors.password && touched.password ? "border-2 border-danger focus:outline-none" : ""}`}/>
                        {errors.password && touched.password && <p className='error-text'>{errors.password}</p>}
                    </div>
                </div>

                <div className="hover:text-blue-600 text-right hover:underline underline-offset-4 transition-all text-sm">Forgot password?</div>

                <div className="col-span-6 text-sm">
                    <span>By using this service, you understood and agree to the ClickCart Online Services </span>
                    <Link href="#" className='text-blue-600'>Terms of Use</Link>
                    <span className="mx-[5px]">and</span>
                    <a href="#" className="text-blue-600">Privacy Statement</a>
                    <span>.</span>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button className="w-full rounded-md bg-blue-600 px-12 py-3 font-medium text-white 600 cursor-pointer">
                    Login
                    </button>
                </div>
            </form>
        </div>
        </main>
    </section>
  )
}

export default LoginForm
