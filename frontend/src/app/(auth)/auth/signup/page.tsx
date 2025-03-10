import { Metadata } from 'next'
import SignupForm from '@/app/(auth)/auth/components/signupForm'

export const metadata: Metadata = {
    title: "Signup"
}
const page = () => {
  return (
    <SignupForm />
  )
}

export default page
