import { headers } from "next/headers";
import { LocaleProvider } from "@/contexts/locale-context";
import { ReactNode } from "react";

interface LocaleWrapperProps {
  children: ReactNode;
}

/*
  Note: The implementation is specific to Vercel platform.
  The header "x-vercel-ip-country" is added by Vercel to identify the country of the request origin.
  For other platforms, a different method to obtain the country code might be needed.
*/
export default async function LocaleWrapper({ children }: LocaleWrapperProps) {
  const countryCode = (await headers()).get("x-vercel-ip-country");

  return <LocaleProvider countryCode={countryCode}>{children}</LocaleProvider>;
}
