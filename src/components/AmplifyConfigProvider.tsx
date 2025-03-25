'use client'

import { Amplify } from 'aws-amplify'
import config from '@/amplifyconfiguration.json'
import { Authenticator } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'

export function AmplifyConfigProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check local storage first
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
      if (savedTheme) {
        setTheme(savedTheme)
        return
      }

      // Fall back to system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      setTheme(mediaQuery.matches ? 'dark' : 'light')

      const handler = (e: MediaQueryListEvent) => {
        const newTheme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
      }
      
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }
  }, [])

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  Amplify.configure(config, { ssr: true })
  
  return (
    <Authenticator.Provider>
      {children}
    </Authenticator.Provider>
  )
} 