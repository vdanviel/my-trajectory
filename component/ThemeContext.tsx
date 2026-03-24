"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

interface ThemeContextType {
  primary: string;
  secondary: string;
  fontColor: string;
  textColor: string;
  companyImg: string | null;
  companyImgWidth: string;
  companyImgHeight: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  const themeValues = useMemo(() => ({
    primary: searchParams.get('primaryColor') || "#3b82f6",
    secondary: searchParams.get('secondaryColor') || "#1f2937",
    fontColor: searchParams.get('fontColor') || "#ffffff",
    textColor: searchParams.get('textColor') || "#171717",
    companyImg: searchParams.get('companyImg') || "/no-preview.png" as string,
    companyImgWidth: searchParams.get('companyImgWidth') || 150,
    companyImgHeight: searchParams.get('companyImgHeight') || 50,
  }), [searchParams]);

  return (
    <ThemeContext.Provider value={themeValues}>
        {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}