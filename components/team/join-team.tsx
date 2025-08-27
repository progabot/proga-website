"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { fetchOpenPositionsData } from "@/lib/api"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Position {
  id: string
  title: string
  department: string
  location: string
  type: string
}

export default function JoinTeam() {
  const [positions, setPositions] = useState<Position[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const positionsData = await fetchOpenPositionsData()
        setPositions(positionsData)
      } catch (err) {
        setError("Failed to load open positions data")
        console.error(err)
      }
    }

    loadData()
  }, [])

  if (error) {
    return (
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <p className="text-red-500 text-center">Error: {error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're always looking for talented individuals to join our growing team. Check out our open positions below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {positions.length === 0 ? (
            <div className="bg-background rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">No Open Positions</h3>
              <p className="text-muted-foreground mb-6">
                We don't have any open positions at the moment, but we're always interested in meeting talented people.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {positions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {position.department}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                        {position.location}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild size="sm" className="shrink-0">
                    <Link href={`/careers/${position.id}`}>
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
