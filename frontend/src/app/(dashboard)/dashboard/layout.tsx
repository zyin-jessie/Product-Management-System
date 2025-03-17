import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Dashboard'
}

const page = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default page;
