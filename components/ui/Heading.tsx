'use client';

import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function Heading({
  level = 2,
  children,
  className = '',
  gradient = false,
}: HeadingProps) {
  const levels: Record<number, string> = {
    1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
    2: 'text-3xl sm:text-4xl lg:text-5xl',
    3: 'text-xl sm:text-2xl lg:text-3xl',
    4: 'text-lg sm:text-xl lg:text-2xl',
    5: 'text-base sm:text-lg',
    6: 'text-sm sm:text-base',
  };

  const Tag = `h${level}` as any;
  const baseStyles = 'font-extrabold tracking-normal leading-[1.15]';

  const gradientStyles = gradient 
    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent' 
    : '';

  return (
    <Tag className={`${baseStyles} ${levels[level]} ${gradientStyles} ${className}`}>
      {children}
    </Tag>
  );
}
