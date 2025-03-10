import React from 'react'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='shadow-lg p-5 py-10 rounded-md'>
            <div className='text-center'>
                <p className='text-2xl font-semibold text-[#333]'>Login</p>
                <p>don't have an account? <Link href="/auth/signup">Signup</Link></p>
            </div>

            <form action="#">
                <input type="text" className='w-full px-5 rounded-md' />
            </form>
        </div>
    </div>
  )
}

export default LoginForm
