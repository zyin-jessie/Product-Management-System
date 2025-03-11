import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/hooks/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Management System"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} select-none`}>
        <ThemeProvider
            attribute="class" defaultTheme="system"
            enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
