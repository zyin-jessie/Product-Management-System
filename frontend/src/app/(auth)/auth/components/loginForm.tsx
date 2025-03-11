'use client'
import React from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { LuTrash2 } from 'react-icons/lu'

const LoginForm = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='shadow-lg p-5 py-10 rounded-md'>
            <div className='text-center'>
                <p className='text-2xl font-semibold text-[#333]'>Login</p>
                <p className='text-muted-foreground'>don't have an account? <Link href="/auth/signup">Signup</Link></p>
            </div>

            <form action="#" method="POST">
                <input type="text" placeholder='Email' className='text-field' />
                <input type="text" placeholder='Password' className='text-field' />

                <Link className='w-full bg-primary' href="#" onClick={() => toast.success("Logged in!")}>Login</Link>

            </form>
        </div>
    </div>
  )
}

export default LoginForm
