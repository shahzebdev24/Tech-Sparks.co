'use client';

import React from 'react';

interface CardProps {
  variant?: 'default' | 'elevated' | 'glass' | 'dark' | 'gradient';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  overflowHidden?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function Card({
  variant = 'default',
  hover = true,
  padding = 'lg',
  rounded = '3xl',
  overflowHidden = true,
  className = '',
  style,
  children,
}: CardProps) {
  const baseStyles = `relative ${overflowHidden ? 'overflow-hidden' : 'overflow-visible'} transition-all duration-500`;

  const variants: Record<string, string> = {
    default: 'bg-[var(--surface)] border border-[var(--border)]',
    elevated: 'bg-[var(--surface)] border border-[var(--border)] shadow-lg',
    glass: 'bg-black/5 dark:bg-white/12 backdrop-blur-md border border-black/10 dark:border-white/15 text-[var(--text-primary)]',
    dark: 'bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)]',
    gradient: 'bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100/50',
    glossy: 'glossy-card',
  };

  const hoverStyles = hover
    ? 'hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(118,75,162,0.15)]'
    : '';

  const paddings: Record<string, string> = {
    none: '',
    sm: 'p-4 sm:p-6',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  };

  const roundedSizes: Record<string, string> = {
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-[1.75rem]',
    '2xl': 'rounded-[2rem]',
    '3xl': 'rounded-[2.5rem]',
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${paddings[padding]} ${roundedSizes[rounded]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
