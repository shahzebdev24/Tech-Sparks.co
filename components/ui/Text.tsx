'use client';

import React from 'react';

interface TextProps {
  variant?: 'body' | 'large' | 'small' | 'caption';
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export default function Text({
  variant = 'body',
  children,
  className = '',
  as = 'p',
}: TextProps) {
  const Tag = as;

  const styles: Record<string, string> = {
    large: 'text-lg sm:text-xl text-[var(--text-secondary)] font-medium leading-relaxed',
    body: 'text-base text-[var(--text-secondary)] font-medium leading-relaxed',
    small: 'text-sm text-[var(--text-secondary)] font-medium leading-relaxed',
    caption: 'text-xs font-black tracking-[0.2em] uppercase text-indigo-600',
  };

  return (
    <Tag className={`${styles[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
