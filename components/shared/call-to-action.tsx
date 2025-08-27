import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CallToActionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function CallToAction({ title, description, buttonText, buttonLink }: CallToActionProps) {
  return (
    <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-light opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">{title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-foreground/80">{description}</p>
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
