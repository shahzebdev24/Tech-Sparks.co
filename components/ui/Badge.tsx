'use client';

import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'dark' | 'glass';
  size?: 'sm' | 'md';
  dot?: boolean;
  animated?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export default function Badge({
  variant = 'primary',
  size = 'md',
  dot = false,
  animated = false,
  icon,
  className = '',
  children,
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-2 font-semibold tracking-wide select-none';

  const variants: Record<string, string> = {
    primary: 'bg-white text-indigo-600 border border-indigo-100 shadow-sm',
    secondary: 'bg-purple-50 text-purple-600 border border-purple-100',
    success: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    warning: 'bg-amber-50 text-amber-600 border border-amber-100',
    error: 'bg-red-50 text-red-600 border border-red-100',
    info: 'bg-blue-50 text-blue-600 border border-blue-100',
    dark: 'bg-gray-900 text-gray-300 border border-gray-700',
    glass: 'bg-white/5 text-indigo-300 border border-white/10 backdrop-blur-md metallic-shine',
  };

  const sizes: Record<string, string> = {
    sm: 'px-2.5 py-1 text-xs rounded-lg',
    md: 'px-4 py-2 text-sm rounded-full',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {dot && (
        <span className="relative flex h-2 w-2">
          {animated && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                variant === 'primary'
                  ? 'bg-indigo-400'
                  : variant === 'success'
                    ? 'bg-emerald-400'
                    : variant === 'dark'
                      ? 'bg-gray-400'
                      : 'bg-indigo-400'
              }`}
            />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              variant === 'primary'
                ? 'bg-indigo-500'
                : variant === 'success'
                  ? 'bg-emerald-500'
                  : variant === 'dark'
                    ? 'bg-gray-400'
                    : 'bg-indigo-500'
            }`}
          />
        </span>
      )}
      {icon}
      {children}
    </span>
  );
}
