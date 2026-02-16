'use client';

import React from 'react';
import { Badge, Heading, Text } from '@/components/ui';

const maxWidthClasses: Record<string, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-3xl',
  lg: 'max-w-4xl',
  xl: 'max-w-5xl',
  full: '',
};

interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  description?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: 'left' | 'center';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  headingLevel = 2,
  align = 'left',
  maxWidth = 'full',
  className = '',
}: SectionHeaderProps) {
  const wrapperClass = [
    maxWidthClasses[maxWidth],
    align === 'center' ? 'mx-auto text-center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      <Badge variant="glass" className={align === 'center' ? 'mb-4' : 'mb-6'}>
        {badge}
      </Badge>
      <Heading
        level={headingLevel}
        className={`!text-white ${headingLevel === 1 ? 'mb-8 tracking-tighter' : 'mb-6'} ${align === 'center' ? '' : ''}`}
      >
        {title}
      </Heading>
      {description && (
        <Text
          className={`text-gray-400 text-lg font-medium leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : ''} ${headingLevel === 1 ? '!text-gray-300 !mb-12' : '!mb-0'}`}
        >
          {description}
        </Text>
      )}
    </div>
  );
}
