"use client"

import { useEffect, useState, useRef } from "react"
import { fetchTimelineData } from "@/lib/api"
import { motion, useInView } from "framer-motion"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

export default function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([])
  const [error, setError] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    const loadData = async () => {
      try {
        const timelineData = await fetchTimelineData()
        console.log("Timeline data loaded:", timelineData)
        if (Array.isArray(timelineData) && timelineData.length > 0) {
          setEvents(timelineData)
        } else {
          console.error("Timeline data is empty or not an array:", timelineData)
          setError("No timeline data available")
        }
      } catch (err) {
        setError("Failed to load timeline data")
        console.error("Error loading timeline data:", err)
      }
    }

    loadData()
  }, [])

  if (error) {
    return (
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-red-500 text-center">Error: {error}</p>
        </div>
      </section>
    )
  }
console.log(events)
  if (events.length === 0) {
    return (
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="h-8 w-48 bg-muted-foreground/20 rounded animate-pulse mx-auto"></div>
            <div className="h-4 w-full bg-muted-foreground/20 rounded animate-pulse mx-auto mt-4"></div>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-muted-foreground/20 animate-pulse shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded-lg animate-pulse">
                  <div className="h-5 w-16 bg-muted-foreground/20 rounded"></div>
                  <div className="h-4 w-full bg-muted-foreground/20 rounded mt-2"></div>
                  <div className="h-4 w-2/3 bg-muted-foreground/20 rounded mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From our humble beginnings to where we are today, explore the key milestones that have shaped our company.
          </p>
        </div>

        {events.length > 0 ? (
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-primary/50">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-primary text-primary-foreground shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {event.year.slice(-2)}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-primary">{event.year}</div>
                  <div className="text-xl font-semibold">{event.title}</div>
                  <div className="text-muted-foreground">{event.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-lg">No journey milestones found. Please check the API connection.</p>
          </div>
        )}
      </div>
    </section>
  )
}
