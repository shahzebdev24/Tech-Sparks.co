'use client';

import React from 'react';
import {
  StandardGradientOrbs,
  PurpleDominantOrbs,
  IndigoDominantOrbs,
  MeshPattern,
  RadialGradientCenter,
  HexagonPattern,
  BlueprintPattern,
  TopographicPattern,
  IsometricPattern,
  ArchitecturalPulse,
  DotPattern,
  PerspectivePattern,
  CircuitPattern,
  DigitalWavePattern,
  LuminescentFluidPattern,
  ConstellationPattern,
  BackgroundSparkles,
} from './BackgroundPatterns';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: 
    | 'white' 
    | 'gray' 
    | 'dark' 
    | 'dark-gradient' 
    | 'dark-gradient-1' 
    | 'dark-gradient-2' 
    | 'dark-gradient-3' 
    | 'dark-mesh' 
    | 'dark-radial' 
    | 'dark-hex' 
    | 'dark-blueprint' 
    | 'dark-topo' 
    | 'dark-isometric' 
    | 'dark-pulse' 
    | 'dark-dots' 
    | 'dark-cross' 
    | 'dark-circuit' 
    | 'dark-ripple'
    | 'dark-pricing'
    | 'dark-constellation'
    | 'none';
  spacing?: 'sm' | 'md' | 'lg' | 'none';
}

export default function Section({
  children,
  id,
  className = '',
  bg = 'white',
  spacing = 'lg',
}: SectionProps) {
  const backgrounds: Record<string, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-[var(--color-darker-bg)] text-white relative',
    'dark-gradient': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-gradient-1': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-gradient-2': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-gradient-3': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-mesh': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-radial': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-hex': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-blueprint': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-topo': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-isometric': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-pulse': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-dots': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-cross': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-circuit': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-ripple': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-pricing': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    'dark-constellation': 'bg-[var(--color-darker-bg)] text-white relative overflow-hidden',
    none: '',
  };

  const spacings: Record<string, string> = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-24',
    lg: 'py-24 lg:py-32',
    none: '',
  };

  const isDark = bg.startsWith('dark');

  // Select background pattern based on bg prop
  const renderBackgroundPattern = () => {
    if (!isDark) return null;
    
    switch (bg) {
      case 'dark-hex':
        return <HexagonPattern />;
      case 'dark-blueprint':
        return <BlueprintPattern />;
      case 'dark-topo':
        return <TopographicPattern />;
      case 'dark-isometric':
        return <IsometricPattern />;
      case 'dark-pulse':
        return <ArchitecturalPulse />;
      case 'dark-dots':
        return <DotPattern />;
      case 'dark-cross':
        return <PerspectivePattern />;
      case 'dark-circuit':
        return <CircuitPattern />;
      case 'dark-ripple':
        return <DigitalWavePattern />;
      case 'dark-pricing':
        return <LuminescentFluidPattern />;
      case 'dark-constellation':
        return <ConstellationPattern />;
      case 'dark-gradient-2':
        return <PurpleDominantOrbs />;
      case 'dark-gradient-3':
        return <IndigoDominantOrbs />;
      case 'dark-mesh':
        return <MeshPattern />;
      case 'dark-radial':
        return <RadialGradientCenter />;
      case 'dark-gradient':
      case 'dark-gradient-1':
        return <StandardGradientOrbs />;
      case 'dark':
      default:
        // For 'dark' background, add dense grid pattern and sparkles as default
        return (
          <>
            <BackgroundSparkles />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>
          </>
        );
    }
  };

  return (
    <section id={id} className={`relative overflow-hidden ${backgrounds[bg]} ${spacings[spacing]} ${className}`}>
      {/* Background patterns & orbs for dark mode */}
      {renderBackgroundPattern()}

      {/* Transitional fades for dark mode */}
      {isDark && (
        <>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[var(--color-darker-bg)]/50 to-transparent z-10" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[var(--color-darker-bg)]/50 to-transparent z-10" />
        </>
      )}

      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
}
