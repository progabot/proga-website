"use client";

import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "./notion-page-renderer.css";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { scrollToContainer } from "../../utils/scroll-to-container";
import { createRoot } from "react-dom/client";

const Code = dynamic(
  () => import("react-notion-x/build/third-party/code").then((m) => m.Code),
  { ssr: false },
);
const Collection = dynamic(
  () =>
    import("react-notion-x/build/third-party/collection").then(
      (m) => m.Collection,
    ),
  { ssr: false },
);

interface NotionPageRendererProps {
  recordMap: any;
  afterContent?: React.ReactNode;
}

const mapPageUrl = (pageId: string) => {
  const id = pageId.replaceAll("-", "");
  return `https://www.notion.so/${id}`;
};

export default function NotionPageRenderer({
  recordMap,
  afterContent,
}: NotionPageRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!afterContent || !containerRef.current) return;
    const inner = containerRef.current.querySelector(
      ".notion-page-content-inner",
    );
    if (inner && !inner.querySelector(".after-content")) {
      const div = document.createElement("div");
      div.className = "after-content ";
      inner.appendChild(div);

      const root = createRoot(div);
      root.render(afterContent);
    }
  }, [afterContent]);

  if (!recordMap) return null;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      if (
        (link.closest(".notion-table-of-contents") ||
          link.classList.contains("notion-hash-link")) &&
        link.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const href = link.getAttribute("href")!;
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          scrollToContainer(element, 50);
          window.history.replaceState(null, "", href);
        }
        return;
      }

      if (link.href && link.href.startsWith("https://www.notion.so/")) {
        e.preventDefault();
        window.open(link.href, "_blank", "noopener,noreferrer");
      }
    };
    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div ref={containerRef}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        components={{
          Code,
          Collection,
        }}
        showTableOfContents={true}
        mapPageUrl={mapPageUrl}
      />
    </div>
  );
}
