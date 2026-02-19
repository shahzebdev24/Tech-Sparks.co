'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * Returns useTheme() plus isDark derived from the actual DOM so it always matches
 * Tailwind's dark: selector (html.dark). Fixes mismatch where next-themes state
 * and the html class get out of sync (e.g. isDark true but html has class "light").
 */
function getDomIsDark(): boolean {
  if (typeof document === 'undefined') return true;
  return document.documentElement.classList.contains('dark');
}

export function useSafeTheme() {
  const theme = useTheme();
  const resolvedTheme = theme.resolvedTheme ?? 'dark';
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(getDomIsDark());
    const observer = new MutationObserver(() => setIsDark(getDomIsDark()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return {
    ...theme,
    resolvedTheme,
    isDark,
  };
}
