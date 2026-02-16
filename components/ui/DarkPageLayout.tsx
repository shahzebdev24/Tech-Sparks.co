import React from 'react';

interface DarkPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function DarkPageLayout({ children, className = '' }: DarkPageLayoutProps) {
  return (
    <div className={`bg-[var(--color-darker-bg)] min-h-screen ${className}`}>
      {children}
    </div>
  );
}

export default DarkPageLayout;
