"use client";

import React, { createContext, useContext, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface ThemeContextType {
  primary: string;
  secondary: string;
  fontColor: string;
  textColor: string;
  companyImg: string | undefined;
  companyImgWidth: number;
  companyImgHeight: number;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeValuesWrapper({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  const themeValues = useMemo(() => ({
    primary: searchParams.get('primaryColor') || "#3b82f6",
    secondary: searchParams.get('secondaryColor') || "#1f2937",
    fontColor: searchParams.get('fontColor') || "#ffffff",
    textColor: searchParams.get('textColor') || "#171717",
    companyImg: searchParams.get('companyImg') || "/no-preview.png",
    companyImgWidth: Number(searchParams.get('companyImgWidth')) || 150,
    companyImgHeight: Number(searchParams.get('companyImgHeight')) || 50,
  }), [searchParams]);

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}> 
      <ThemeValuesWrapper>
        {children}
      </ThemeValuesWrapper>
    </Suspense>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  return context;
}