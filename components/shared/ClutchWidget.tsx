"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    CLUTCHCO?: {
      Init: () => void;
      loaded: boolean;
      items: any[];
    };
  }
}

export default function ClutchWidgetWrapper() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && widgetRef.current && window.CLUTCHCO?.Init) {
      window.CLUTCHCO.Init();
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted && widgetRef.current) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            const iframe = widgetRef.current?.querySelector("iframe");
            if (iframe) {
              iframe.style.width = "200px";
              iframe.style.maxWidth = "200px";
              iframe.style.minWidth = "200px";
              iframe.style.display = "block";
              iframe.style.margin = "0";
              iframe.style.padding = "0";
              iframe.style.border = "none";
            }
          }
        });
      });

      observer.observe(widgetRef.current, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    }
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div
        style={{
          height: "45px",
          width: "200px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #e0e0e0",
          color: "#999",
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Loading Clutch Reviews...
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.CLUTCHCO?.Init) {
            window.CLUTCHCO.Init();
          }
        }}
        onError={(e) => {
          console.error("Failed to load Clutch widget script", e);
        }}
      />

      <div
        ref={widgetRef}
        className="clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="2"
        data-height="45"
        data-width="200"
        data-nofollow="false"
        data-expandifr="true"
        data-scale="100"
        data-clutchcompany-id="2281469"
        style={{
          width: "200px",
          maxWidth: "200px",
          overflow: "hidden",
          display: "inline-block",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      />
    </>
  );
}
