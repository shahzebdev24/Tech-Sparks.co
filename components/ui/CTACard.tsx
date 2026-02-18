import React from 'react';
import { Heading, Text, Button } from '@/components/ui';

interface CTACardProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'gradient' | 'card';
  className?: string;
}

export function CTACard({ 
  title, 
  description, 
  buttonText, 
  buttonHref, 
  variant = 'gradient',
  className = '' 
}: CTACardProps) {
  if (variant === 'gradient') {
    return (
      <div 
        className={`bg-gradient-to-br from-indigo-900/40 via-[var(--section-bg)] to-purple-950/30 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden border border-[var(--border)] glossy-card ${className}`}
      >
        {/* Decorative blur orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />
        
        <div className="relative z-10">
          <Heading level={2} className="!text-[var(--text-primary)] mb-6">
            {title}
          </Heading>
          <Text className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto font-medium">
            {description}
          </Text>
          <Button size="lg" variant="primary" href={buttonHref} className="glossy-button">
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }

  // variant === 'card'
  return (
    <div 
      className={`p-8 sm:p-12 bg-black/[0.02] dark:bg-white/[0.02] rounded-[3rem] border border-[var(--border)] text-center glossy-card relative overflow-hidden ${className}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
      
      <Heading level={3} className="!text-[var(--text-primary)] mb-4">
        {title}
      </Heading>
      <Text className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto font-medium">
        {description}
      </Text>
      <Button 
        variant="outline" 
        href={buttonHref} 
        className="border-gray-200 dark:border-[var(--border)] text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-white/10 metallic-shine"
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default CTACard;
