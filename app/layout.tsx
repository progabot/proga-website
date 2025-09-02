import type React from "react";
import { Inter } from "next/font/google";
import { MuiThemeProvider } from "@/components/mui-theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proga Tech | Progressive software empowering your ideas",
  description:
    "Proga Tech transforms businesses with creative web development solutions. Client testimonials, portfolio projects, and full-cycle development services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MuiThemeProvider>
          <ScrollToTop />
          <Header />
          <main
            style={{
              minHeight: "calc(100vh - 80px)",
              backgroundColor: "#ffffff",
            }}
          >
            {children}
          </main>
          <Footer />
        </MuiThemeProvider>
      </body>
    </html>
  );
}
