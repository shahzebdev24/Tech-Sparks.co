'use client';

import React from 'react';

const variantClasses: Record<string, string> = {
  'indigo-purple': 'bg-gradient-to-r from-indigo-400 to-purple-400',
  'indigo-purple-pink': 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400',
  'indigo-indigo': 'bg-gradient-to-r from-indigo-400 to-indigo-500',
  'indigo-via-purple-indigo': 'bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400',
};

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'indigo-purple' | 'indigo-purple-pink' | 'indigo-indigo' | 'indigo-via-purple-indigo';
  className?: string;
}

export function GradientText({
  children,
  variant = 'indigo-purple',
  className = '',
}: GradientTextProps) {
  const gradientClass = variantClasses[variant] || variantClasses['indigo-purple'];
  return (
    <span className={`${gradientClass} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
