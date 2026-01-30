"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface SpecialThemeContextType {
  isWinter: boolean;
}

const SpecialThemeContext = createContext<SpecialThemeContextType | undefined>(
  undefined
);

interface SpecialThemeProviderProps {
  children: ReactNode;
}

export function SpecialThemeProvider({ children }: SpecialThemeProviderProps) {
  const currentMonth = new Date().getMonth();
  const isWinter = currentMonth === 11;

  const value: SpecialThemeContextType = {
    isWinter,
  };

  return (
    <SpecialThemeContext.Provider value={value}>
      {children}
    </SpecialThemeContext.Provider>
  );
}

export function useSpecialTheme(): SpecialThemeContextType {
  const context = useContext(SpecialThemeContext);
  if (context === undefined) {
    throw new Error(
      "useSpecialTheme must be used within a SpecialThemeProvider"
    );
  }
  return context;
}