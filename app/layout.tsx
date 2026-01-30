import type React from "react";
import { Inter } from "next/font/google";
import { MuiThemeProvider } from "@/components/mui-theme-provider";
import { SpecialThemeProvider } from "@/contexts/special-theme-context";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";
import LocaleWrapper from "@/components/providers/locale-wrapper";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proga Tech | Empowering your ideas",
  description:
    "Expert web development services & custom digital solutions by Proga Tech. View our portfolio & transform your business today. Get free consultation!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} style={{ backgroundColor: "#ffffff" }}>
        <LocaleWrapper>
          <MuiThemeProvider>
            <SpecialThemeProvider>
              <ScrollToTop />
              <Header />
              <main
                style={{
                  minHeight: "calc(100vh - 80px)",
                  backgroundColor: "#ffffff",
                  maxWidth: "100vw",
                  overflowX: "clip",
                }}
              >
                {children}
              </main>
              <Footer />
              {gtmId && <GoogleTagManager gtmId={gtmId} />}
            </SpecialThemeProvider>
          </MuiThemeProvider>
        </LocaleWrapper>
      </body>
    </html>
  );
}
