"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { fetchTeamMembersData } from "@/lib/api"
import { motion, useInView } from "framer-motion"
import { Linkedin, Twitter, Github } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  imageUrl: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export default function TeamGrid() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [error, setError] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    const loadData = async () => {
      try {
        const teamData = await fetchTeamMembersData()
        console.log("Team data loaded:", teamData)
        if (Array.isArray(teamData) && teamData.length > 0) {
          setMembers(teamData)
        } else {
          console.error("Team data is empty or not an array:", teamData)
        }
      } catch (err) {
        setError("Failed to load team members data")
        console.error("Error loading team data:", err)
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

  if (members.length === 0) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-muted rounded-lg overflow-hidden animate-pulse">
                <div className="aspect-[3/4] bg-muted-foreground/20"></div>
                <div className="p-4">
                  <div className="h-6 w-2/3 bg-muted-foreground/20 rounded"></div>
                  <div className="h-4 w-1/2 bg-muted-foreground/20 rounded mt-2"></div>
                  <div className="h-4 w-full bg-muted-foreground/20 rounded mt-4"></div>
                  <div className="h-4 w-full bg-muted-foreground/20 rounded mt-1"></div>
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
        {members.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-muted rounded-lg overflow-hidden shadow-sm group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.imageUrl || "/placeholder.svg?height=400&width=300"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.title}</p>
                  <p className="mt-2 text-muted-foreground text-sm">{member.bio}</p>

                  <div className="flex mt-4 space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-lg">No team members found. Please check the API connection.</p>
          </div>
        )}
      </div>
    </section>
  )
}
