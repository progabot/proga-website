"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { fetchFeaturesData } from "@/lib/api"
import { motion } from "framer-motion"
import { Box, Container, Typography, Grid, Card, CardContent, CircularProgress, Alert } from "@mui/material"
import { PAGE_CONTAINER_MAX_WIDTH } from "@/utils/page-container"

interface Feature {
  id: string
  title: string
  description: string
  icon: string
  imageUrl: string
}

export default function Features() {
  const [features, setFeatures] = useState<Feature[]>([])
  const [error, setError] = useState<string | null>(null)
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchFeaturesData()
        setFeatures(data)
        if (data.length > 0) {
          setActiveFeature(data[0].id)
        }
      } catch (err) {
        setError("Failed to load features data")
        console.error(err)
      }
    }

    loadData()
  }, [])

  if (error) {
    return (
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Alert severity="error" sx={{ textAlign: "center" }}>
            Error: {error}
          </Alert>
        </Container>
      </Box>
    )
  }

  if (features.length === 0) {
    return (
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
          <Grid container spacing={4}>
            {[1, 2, 3].map((i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card sx={{ p: 3, borderRadius: 2 }}>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <CircularProgress size={24} />
                    </Box>
                    <Box sx={{ height: 24, backgroundColor: "#f0f0f0", borderRadius: 1, mb: 1 }} />
                    <Box sx={{ height: 16, backgroundColor: "#f0f0f0", borderRadius: 1, mb: 1 }} />
                    <Box sx={{ height: 16, width: "66%", backgroundColor: "#f0f0f0", borderRadius: 1 }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    )
  }

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth={PAGE_CONTAINER_MAX_WIDTH}>
        <Box sx={{ textAlign: "center", maxWidth: "48rem", mx: "auto", mb: 8 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, fontWeight: 700, mb: 2 }}>
            Innovative Solutions
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem", color: "#666", lineHeight: 1.6 }}>
            Our cutting-edge technology solutions help businesses transform and thrive in the digital age.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {features.map((feature) => (
                <motion.div key={feature.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      backgroundColor: activeFeature === feature.id ? "#f8bbd9" : "#fff",
                      color: activeFeature === feature.id ? "#000" : "inherit",
                      boxShadow: activeFeature === feature.id ? 3 : 1,
                      "&:hover": {
                        backgroundColor: activeFeature === feature.id ? "#f8bbd9" : "#f5f5f5",
                      },
                    }}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                      <Box
                        sx={{
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          backgroundColor: activeFeature === feature.id ? "#fff" : "#f8bbd9",
                          color: activeFeature === feature.id ? "#f8bbd9" : "#000",
                        }}
                      >
                        <Typography variant="h6" sx={{ fontSize: "1.25rem" }}>
                          {feature.icon}
                        </Typography>
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="h6" sx={{ fontSize: "1.125rem", fontWeight: 500, mb: 0.5 }}>
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: activeFeature === feature.id ? "rgba(0,0,0,0.8)" : "#666",
                            lineHeight: 1.5,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ position: "relative", height: 400, borderRadius: 3, overflow: "hidden" }}>
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  style={{ position: "absolute", inset: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeFeature === feature.id ? 1 : 0,
                    scale: activeFeature === feature.id ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={feature.imageUrl || "/placeholder.svg?height=400&width=600"}
                    alt={feature.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
