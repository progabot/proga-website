import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-muted py-12 md:py-24", className)}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
        {description && <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">{description}</p>}
      </div>
    </div>
  )
}
