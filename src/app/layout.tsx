import './globals.css'
import { Inter } from 'next/font/google'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { AmplifyConfigProvider } from '@/components/AmplifyConfigProvider'

const inter = Inter({ subsets: ['latin'] })

// Move Amplify configuration to a client component
export const metadata = {
  title: 'My App',
  description: 'A modern web application with authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AmplifyConfigProvider>
          {children}
        </AmplifyConfigProvider>
      </body>
    </html>
  )
} 