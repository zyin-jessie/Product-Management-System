'use client'
import React from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'

const signupForm = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='shadow-lg p-5 py-10 rounded-md'>
            <div className='text-center'>
                <p className='text-2xl font-semibold mb-3'>Signup</p>
                <p>Already have an account? <Link href="/auth/login">Login</Link></p>
            </div>

            <form action="#" method="POST">
                <div className='flex flex-col gap-y-2'>
                    <input type="text" placeholder='Username' className='text-field' />
                    <input type="text" placeholder='Email' className='text-field' />
                    <input type="text" placeholder='Password' className='text-field' />
                </div>

                <Link className='submit-btn mt-2' href="#" onClick={() => toast.success("Signed up!")}>Signup</Link>

            </form>
        </div>
    </div>
    )
}

export default signupForm
