"use client";

import { useCallback, useEffect } from "react";

export function useSectionLink(id: string) {
  const sectionLink = useCallback(() => {
    const el = document.getElementById(id);
    if (el) {
      const HEADER_HEIGHT = 100;
      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });

      const newUrl = `${window.location.origin}${window.location.pathname}#${id}`;
      window.history.pushState(null, "", `#${id}`);
      navigator.clipboard?.writeText(newUrl).catch(() => {});
    }
  }, [id]);

  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      window.scrollTo(0, 0);

      const timer = setTimeout(() => {
        sectionLink();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [id, sectionLink]);

  return sectionLink;
}
