'use client'

import { useEffect } from 'react'
import { cn } from '@/utils/cn'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className={cn(
        "rounded-lg shadow-lg p-6 max-w-md w-full",
        "bg-background border border-border"
      )}>
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <p className="text-foreground mb-4">{error.message}</p>
        <button
          onClick={reset}
          className={cn(
            "px-4 py-2 rounded transition-colors",
            "bg-primary text-primary-foreground",
            "hover:bg-primary/90"
          )}
        >
          Try again
        </button>
      </div>
    </div>
  )
} 