'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      value={{ dark: 'dark', light: 'light' }}
      defaultTheme="dark"
      enableSystem
      storageKey="techsparks-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
