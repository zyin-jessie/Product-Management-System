import React from 'react'
import Link from 'next/link'

const signupForm = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div>
            Signup
            <p>Already have an account? <Link href="/auth/login">Login</Link></p>
        </div>
    </div>
    )
}

export default signupForm
