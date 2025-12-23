"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface LocaleContextType {
  isUserInUkraine: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  countryCode: string | null;
}

export function LocaleProvider({ children, countryCode }: LocaleProviderProps) {
  const isUserInUkraine = countryCode === "UA";

  const value = {
    isUserInUkraine,
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
