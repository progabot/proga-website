"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when pathname changes
    console.log("Pathname changed, scrolling to top:", pathname)
    setTimeout(() => {
        console.log("Executing scroll to top now.")
      window.scrollTo(0, 0)
    }, 1000);
  }, [pathname])

  return null
}
