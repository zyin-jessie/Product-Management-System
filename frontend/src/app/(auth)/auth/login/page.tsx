import { Metadata } from 'next'
import LoginForm from '@/app/(auth)/auth/components/loginForm'

export const metadata: Metadata = {
    title: "Login"
}

const page = () => {
  return (
    <LoginForm />
  )
}

export default page
