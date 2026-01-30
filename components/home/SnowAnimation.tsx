"use client";

import { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useSpecialTheme } from "@/contexts/special-theme-context";

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  opacity: number;
  delay: number;
  rotationDuration: number;
}

export default function SnowAnimation() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { isWinter } = useSpecialTheme();

  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const updateContainerHeight = () => {
      const snowContainer = document.querySelector('.snow-container');
      let headerHeight = 0;

      const header = document.querySelector('header');
      
      if (header) {
        headerHeight = (header as HTMLElement).offsetHeight;
      }
      
      if (snowContainer) {
        setContainerHeight((snowContainer as HTMLElement).offsetHeight + headerHeight);
      } else {
        // Fallback to 100vh
        setContainerHeight(window.innerHeight);
      }
    };

    // Initial calculation with delay to ensure DOM is ready
    setTimeout(updateContainerHeight, 100);

    // Update on window resize
    window.addEventListener('resize', updateContainerHeight);
    
    // Update on content changes (with a small delay to ensure DOM is updated)
    const observer = new MutationObserver(() => {
      setTimeout(updateContainerHeight, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', updateContainerHeight);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (containerHeight === 0) return; // Wait for height to be calculated
    
    // Calculate base duration based on container height (scale from viewport height baseline)
    const baseDuration = (containerHeight / window.innerHeight) * 10; // 10s base for 100vh
    
    // Generate snowflakes with random properties
    const flakes: Snowflake[] = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      animationDuration: baseDuration + Math.random() * 3, // Base duration + 0-3s variation
      size: Math.random() * 5 + 2, // 2-7px
      opacity: Math.random() * 0.6 + 0.4, // 0.4-1
      delay: Math.random() * 20, // 0-10 seconds delay
      rotationDuration: Math.random() * 5 + 3,
    }));
    setSnowflakes(flakes);
  }, [containerHeight]);


  if (!isWinter || !isDesktop) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${containerHeight}px`,
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {snowflakes.map((flake) => (
        <Box
          key={flake.id}
          sx={{
            position: "absolute",
            top: "-100px",
            left: `${flake.left}%`,
            fontSize: `${flake.size * 3}px`,
            opacity: flake.opacity,
            animation: `fall-${flake.id} ${flake.animationDuration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
            [`@keyframes fall-${flake.id}`]: {
              "0%": {
                transform: "translateY(0) translateX(0) rotate(0deg)",
              },
              "100%": {
                transform: `translateY(${containerHeight + 200}px) translateX(${
                  Math.sin(flake.id) * 50
                }px) rotate(${
                  360 * (flake.animationDuration / flake.rotationDuration)
                }deg)`,
              },
            },
          }}
        >
          ❄️
        </Box>
      ))}
    </Box>
  );
}
