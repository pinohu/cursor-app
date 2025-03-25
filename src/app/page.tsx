'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from 'aws-amplify/auth'
import { cn } from '@/utils/cn'

export default function HomePage() {
  const router = useRouter()
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      setIsLoading(true)
      const user = await getCurrentUser()
      if (user) {
        router.replace('/dashboard')
      } else {
        router.replace('/login')
      }
    } catch (error) {
      setError(error instanceof Error ? error : new Error('Failed to check user status'))
      router.replace('/login')
    } finally {
      setIsLoading(false)
    }
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error.message}</div>
      </div>
    )
  }

  if (!isLoading) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={cn(
        "animate-spin rounded-full h-32 w-32",
        "border-t-2 border-b-2 border-blue-500"
      )}></div>
    </div>
  )
} 