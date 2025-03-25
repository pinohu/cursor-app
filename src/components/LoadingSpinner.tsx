import { cn } from '@/utils/cn'

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className={cn(
          "animate-spin rounded-full",
          "h-32 w-32",
          "border-t-2 border-b-2",
          "border-primary",
          className
        )}
      />
    </div>
  )
} 