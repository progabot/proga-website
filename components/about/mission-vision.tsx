"use client"

import { useEffect, useState } from "react"
import { fetchMissionVisionData } from "@/lib/api"
import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

interface MissionVisionData {
  mission: {
    title: string
    description: string
  }
  vision: {
    title: string
    description: string
  }
}

export default function MissionVision() {
  const [data, setData] = useState<MissionVisionData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const mvData = await fetchMissionVisionData()
        setData(mvData)
      } catch (err) {
        setError("Failed to load mission and vision data")
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

  if (!data) {
    return (
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl bg-background animate-pulse">
              <div className="h-8 w-1/2 bg-muted-foreground/20 rounded"></div>
              <div className="h-4 w-full bg-muted-foreground/20 rounded mt-4"></div>
              <div className="h-4 w-full bg-muted-foreground/20 rounded mt-2"></div>
            </div>
            <div className="p-8 rounded-xl bg-background animate-pulse">
              <div className="h-8 w-1/2 bg-muted-foreground/20 rounded"></div>
              <div className="h-4 w-full bg-muted-foreground/20 rounded mt-4"></div>
              <div className="h-4 w-full bg-muted-foreground/20 rounded mt-2"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl bg-background shadow-sm"
          >
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">{data.mission.title}</h3>
            </div>
            <p className="text-muted-foreground">{data.mission.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-xl bg-background shadow-sm"
          >
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">{data.vision.title}</h3>
            </div>
            <p className="text-muted-foreground">{data.vision.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
