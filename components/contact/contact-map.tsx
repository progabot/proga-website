"use client"

import { useEffect, useState } from "react"
import { fetchContactMapData } from "@/lib/api"

interface MapData {
  embedUrl: string
}

export default function ContactMap() {
  const [data, setData] = useState<MapData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const mapData = await fetchContactMapData()
        setData(mapData)
      } catch (err) {
        setError("Failed to load map data")
        console.error(err)
      }
    }

    loadData()
  }, [])

  if (error) {
    return (
      <div>
        <p className="text-red-500">Error: {error}</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="bg-muted rounded-lg overflow-hidden h-[300px] animate-pulse">
        <div className="h-full w-full bg-muted-foreground/20"></div>
      </div>
    )
  }

  return (
    <div className="bg-muted rounded-lg overflow-hidden h-[300px]">
      <iframe
        src={data.embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      ></iframe>
    </div>
  )
}
