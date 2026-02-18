'use client';

import React from 'react';
import { useTheme } from 'next-themes';

interface StatCardProps {
  value: string | number;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = '' }: StatCardProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div
      style={!isDark ? { backgroundColor: '#ffffff' } : undefined}
      className={`p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] dark:bg-white/12 backdrop-blur-md border border-gray-200 dark:border-white/15 shadow-lg dark:shadow-none metallic-shine ${className}`}
    >
      <div className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-1">
        {value}
      </div>
      <p className="text-[var(--text-secondary)] font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">
        {label}
      </p>
    </div>
  );
}

export default StatCard;
