"use client"

import { useEffect, useState } from "react"
import { fetchTeamHeroData } from "@/lib/api"
import { motion } from "framer-motion"
import Image from "next/image"

interface TeamHeroData {
  title: string
  description: string
  imageUrl?: string // Add this line
  stats: Array<{
    value: string
    label: string
  }>
}

export default function TeamHero() {
  const [data, setData] = useState<TeamHeroData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const heroData = await fetchTeamHeroData()
        setData(heroData)
      } catch (err) {
        setError("Failed to load team hero data")
        console.error(err)
      }
    }

    loadData()
  }, [])

  if (error) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="text-red-500 text-center">Error: {error}</p>
        </div>
      </section>
    )
  }

  if (!data) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="h-8 w-1/2 bg-muted-foreground/20 rounded animate-pulse mx-auto"></div>
            <div className="h-4 w-full bg-muted-foreground/20 rounded animate-pulse mx-auto mt-4"></div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="h-8 w-16 bg-muted-foreground/20 rounded animate-pulse mx-auto"></div>
                  <div className="h-4 w-24 bg-muted-foreground/20 rounded animate-pulse mx-auto mt-2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{data.description}</p>

            {data.imageUrl && (
              <div className="mt-8 mb-8 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src={data.imageUrl || "/placeholder.svg"}
                  alt="ProgaTech Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="grid grid-cols-3 gap-6 mt-8">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
