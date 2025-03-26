'use client'

import { Authenticator } from '@aws-amplify/ui-react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Authenticator
        initialState="signIn"
        signUpAttributes={['email']}
      >
        {({ signOut }) => (
          <div>
            <h1>You are already signed in</h1>
            <button
              onClick={signOut}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        )}
      </Authenticator>
    </div>
  )
} 