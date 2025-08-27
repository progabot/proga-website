import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
}

// Make the loading spinner more visible
export function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className={cn("flex justify-center items-center my-4", className)}>
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  )
}
