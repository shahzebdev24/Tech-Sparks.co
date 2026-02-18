'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

/** Background pattern components for section backgrounds and hero. */

const HERO_GRID_KEYFRAMES = `
@keyframes hero-line-right { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
@keyframes hero-line-left  { from { transform: translateX(100%); }  to { transform: translateX(-100%); } }
@keyframes hero-line-down  { from { transform: translateY(-100%); } to { transform: translateY(100%); } }
@keyframes hero-line-up    { from { transform: translateY(100%); }  to { transform: translateY(-100%); } }
`;

const HERO_H_LR_TOPS = [64, 320, 576, 832] as const;
const HERO_H_RL_TOPS = [192, 448, 704] as const;
const HERO_V_TB_LEFTS = [128, 448, 832, 1216] as const;
const HERO_V_BT_LEFTS = [256, 640, 1024, 1408] as const;

/** Sparkle light effect: small streaks across the screen. */
export function BackgroundSparkles() {
  const horizontal = useMemo(
    () =>
      [...Array(8)].map((_, i) => ({
        key: `sparkle-h-${i}`,
        width: `${Math.random() * 600 + 400}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    []
  );
  const vertical = useMemo(
    () =>
      [...Array(8)].map((_, i) => ({
        key: `sparkle-v-${i}`,
        height: `${Math.random() * 600 + 400}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {horizontal.map(({ key, width, top, left }) => (
        <motion.div
          key={key}
          className="absolute h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"
          style={{ width, top, left }}
          initial={{ x: '-100%', opacity: 0 }}
        />
      ))}
      {vertical.map(({ key, height, left, top }) => (
        <motion.div
          key={key}
          className="absolute w-px bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"
          style={{ height, left, top }}
          initial={{ y: '-100%', opacity: 0 }}
        />
      ))}
    </div>
  );
}

/** Ambient glint pulse: subtle light along an SVG path. */
interface AmbientGlintPulseProps {
  path: string;
  duration?: number;
  delay?: number;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export function AmbientGlintPulse({
  path,
  duration = 8,
  delay = 0,
  color = 'rgba(165, 180, 252, 0.4)',
  size = 60,
  strokeWidth = 3,
}: AmbientGlintPulseProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-[3]">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <radialGradient id={`glint-grad-${delay}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" />
            <stop offset="30%" stopColor={color} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d={path}
          stroke={`url(#glint-grad-${delay})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: `1 ${size + 1000}`, strokeDashoffset: 1000, opacity: 0 }}
          filter="url(#soft-glow)"
        />
      </svg>
    </div>
  );
}

/** Moving grid lines as subtle glints (used by blueprint/mesh-style patterns). */
export function MovingGridLines({ spacing = 64 }: { spacing?: number }) {
  const beamPaths = useMemo(
    () => [
      `M 0 ${spacing * 4} L 1000 ${spacing * 4}`,
      `M 0 ${spacing * 10} L 1000 ${spacing * 10}`,
      `M ${spacing * 6} 0 L ${spacing * 6} 1000`,
      `M ${spacing * 14} 0 L ${spacing * 14} 1000`,
    ],
    [spacing]
  );
  return (
    <>
      {beamPaths.map((path, i) => (
        <AmbientGlintPulse
          key={`glint-grid-${i}`}
          path={path}
          duration={10 + i * 2}
          delay={i * 3}
          size={100}
          color="rgba(165, 180, 252, 0.3)"
        />
      ))}
    </>
  );
}

/**
 * Hero grid lines: GPU-optimized moving pulses for the hero (route /).
 * Uses CSS keyframes (compositor) instead of JS to avoid lag.
 */
export function HeroGridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <style dangerouslySetInnerHTML={{ __html: HERO_GRID_KEYFRAMES }} />
      {HERO_H_LR_TOPS.map((top, i) => (
        <div
          key={`h-lr-${top}`}
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent will-change-transform"
          style={{ top: `${top}px`, animation: `hero-line-right ${3 + (i % 3)}s linear ${i * 2}s infinite` }}
        />
      ))}
      {HERO_H_RL_TOPS.map((top, i) => (
        <div
          key={`h-rl-${top}`}
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent will-change-transform"
          style={{ top: `${top}px`, animation: `hero-line-left ${4 + (i % 4)}s linear ${i * 2.5}s infinite` }}
        />
      ))}
      {HERO_V_TB_LEFTS.map((left, i) => (
        <div
          key={`v-tb-${left}`}
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/50 to-transparent will-change-transform"
          style={{ left: `${left}px`, animation: `hero-line-down ${5 + (i % 3)}s linear ${i * 1.5}s infinite` }}
        />
      ))}
      {HERO_V_BT_LEFTS.map((left, i) => (
        <div
          key={`v-bt-${left}`}
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent will-change-transform"
          style={{ left: `${left}px`, animation: `hero-line-up ${4 + (i % 4)}s linear ${i * 2.2}s infinite` }}
        />
      ))}
    </div>
  );
}

const HEX_PATHS = [
  'M 0 50 L 28 66 L 56 50 L 56 16 L 28 0 L 0 16 Z',
  'M 0 150 L 1000 150',
  'M 0 350 L 500 650 L 1000 350',
];

export function HexagonPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {HEX_PATHS.map((path, i) => (
        <AmbientGlintPulse 
          key={`hex-glint-${i}`} 
          path={path} 
          duration={10 + i * 2} 
          delay={i * 3}
          color="rgba(99, 102, 241, 0.2)"
          size={120}
        />
      ))}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundColor: 'transparent',
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66ZM28 63L53 48L53 18L28 3L3 18L3 48L28 63Z' fill='%236366f1' fill-opacity='1'/%3E%3C/svg%3E")
          `,
          backgroundSize: '56px 100px'
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--section-bg)] via-transparent to-[var(--section-bg)] opacity-60" />
    </div>
  );
}

export function BlueprintPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <BackgroundSparkles />
      <MovingGridLines spacing={100} />
      {/* Heavy grid lines every 100px */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.08)_2px,transparent_2px)] bg-[size:100px_100px]" />
      {/* Light grid lines every 20px */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-transparent to-transparent opacity-80" />
    </div>
  );
}

const TOPO_PATHS = [
  'M -100 200 C 200 50, 500 350, 1100 250',
  'M -100 550 C 350 450, 750 650, 1100 550',
  'M -100 850 C 450 750, 850 950, 1100 850',
];

export function TopographicPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {TOPO_PATHS.map((path, i) => (
        <AmbientGlintPulse 
          key={`topo-glint-${i}`} 
          path={path} 
          duration={12 + i * 3} 
          delay={i * 4}
          color="rgba(129, 140, 248, 0.25)"
          size={120}
        />
      ))}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='none' stroke='%236366f1' stroke-width='1.5'%3E%3Cpath d='M0 100 Q 100 50 200 100 T 400 100'/%3E%3Cpath d='M0 150 Q 100 100 200 150 T 400 150'/%3E%3Cpath d='M0 200 Q 100 150 200 200 T 400 200'/%3E%3Cpath d='M0 250 Q 100 200 200 250 T 400 250'/%3E%3Cpath d='M0 300 Q 100 250 200 300 T 400 300'/%3E%3Cpath d='M0 50 Q 50 100 100 50 T 200 50 T 300 100 T 400 50'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '800px 800px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[150px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--section-bg)] via-transparent to-[var(--section-bg)]" />
    </div>
  );
}

const ISO_PATHS = [
  'M 0 0 L 1000 600',
  'M 0 500 L 900 0',
  'M 1000 500 L 100 1000',
];

export function IsometricPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {ISO_PATHS.map((path, i) => (
        <AmbientGlintPulse 
          key={`iso-glint-${i}`} 
          path={path} 
          duration={9 + i * 2} 
          delay={i * 3}
          color="rgba(165, 180, 252, 0.25)"
          size={150}
        />
      ))}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1),
            linear-gradient(150deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1),
            linear-gradient(60deg, rgba(99,102,241,0.5) 25%, transparent 25.5%, transparent 75%, rgba(99,102,241,0.5) 75%, rgba(99,102,241,0.5))
          `,
          backgroundSize: '80px 140px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--section-bg)] via-transparent to-transparent opacity-90" />
    </div>
  );
}

export function ArchitecturalPulse() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <BackgroundSparkles />
      <MovingGridLines spacing={80} />
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.2) 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--section-bg)] via-transparent to-[var(--section-bg)]" />
    </div>
  );
}

const DOT_PATHS = [
  'M 100 200 Q 300 100 500 200',
  'M 800 600 Q 600 700 400 600',
  'M 200 800 Q 400 900 600 800',
];

export function DotPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {DOT_PATHS.map((path, i) => (
        <AmbientGlintPulse 
          key={`dot-glint-${i}`} 
          path={path} 
          duration={15 + i * 5} 
          delay={i * 2}
          color="rgba(165, 180, 252, 0.4)"
          size={140}
        />
      ))}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-500/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-500/15 rounded-full blur-[120px]" />
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--section-bg)] via-transparent to-[var(--section-bg)] opacity-40" />
    </div>
  );
}

const PERSP_PATHS = [
  'M 500 1000 L 0 0',
  'M 500 1000 L 250 0',
  'M 500 1000 L 500 0',
  'M 500 1000 L 750 0',
  'M 500 1000 L 1000 0',
];

export function PerspectivePattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {PERSP_PATHS.map((path, i) => (
        <AmbientGlintPulse 
          key={`persp-glint-${i}`} 
          path={path} 
          duration={7 + i} 
          delay={i * 1.5}
          color="rgba(196, 181, 253, 0.3)"
          size={180}
        />
      ))}

      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/15 rounded-full blur-[120px]" />
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-[0.12]">
        <g stroke="currentColor" strokeWidth="1" className="text-purple-400">
          <line x1="500" y1="1000" x2="0" y2="0" />
          <line x1="500" y1="1000" x2="200" y2="0" />
          <line x1="500" y1="1000" x2="400" y2="0" />
          <line x1="500" y1="1000" x2="600" y2="0" />
          <line x1="500" y1="1000" x2="800" y2="0" />
          <line x1="500" y1="1000" x2="1000" y2="0" />
          {[0, 100, 250, 450, 700].map((y) => (
            <line key={y} x1="0" y1={y} x2="1000" y2={y} />
          ))}
        </g>
      </svg>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--section-bg)] via-transparent to-[var(--section-bg)] opacity-50" />
    </div>
  );
}

const CIRCUIT_PATHS = [
  'M 0 160 L 320 160 L 320 0',
  'M 320 1000 L 320 640 L 1000 640',
  'M 0 400 L 640 400 L 640 1000',
  'M 1000 160 L 640 160 L 640 0',
];

export function CircuitPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {CIRCUIT_PATHS.map((path, i) => (
        <AmbientGlintPulse 
          key={`circuit-glint-${i}`} 
          path={path} 
          duration={12 + i * 2} 
          delay={i * 3}
          color="rgba(34, 211, 238, 0.4)"
          size={140}
        />
      ))}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 left-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--section-bg)] via-transparent to-[var(--section-bg)] opacity-30" />
    </div>
  );
}

export function PurpleDominantOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <BackgroundSparkles />
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/12 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/8 rounded-full blur-[80px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(196,181,253,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
    </div>
  );
}

export function IndigoDominantOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <BackgroundSparkles />
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/12 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/8 rounded-full blur-[80px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(165,180,252,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(165,180,252,0.07)_1px,transparent_1px)] bg-[size:56px_56px]" />
    </div>
  );
}

export function MeshPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <BackgroundSparkles />
      <MovingGridLines spacing={64} />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(196,181,253,0.1) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(165,180,252,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
    </div>
  );
}

export function RadialGradientCenter() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <BackgroundSparkles />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05)_1px, transparent_1px),
            linear-gradient(90deg, rgba(255,255,255,0.05)_1px, transparent_1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(circle, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 100%)',
        }}
      />
    </div>
  );
}

export function DigitalWavePattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[var(--section-bg)]">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] opacity-60" />
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,170.7C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
            fill="url(#wave-grad-1)"
            fillOpacity="1"
            initial={{ x: -50 }}
          />
          <motion.path
            d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,197.3C672,171,768,149,864,160C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
            fill="url(#wave-grad-2)"
            fillOpacity="1"
            initial={{ x: 0 }}
            style={{ mixBlendMode: 'overlay' }}
          />
          <defs>
            <linearGradient id="wave-grad-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(79, 70, 229, 0.1)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0" y1="0" x2="1" y2="0">
               <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {[...Array(15)].map((_, i) => (
        <motion.div
           key={`digi-particle-${i}`}
           className="absolute w-1 h-1 bg-white rounded-full opacity-30"
           initial={{ 
             x: Math.random() * 1000, 
             y: Math.random() * 800 + 200, 
             scale: 0 
           }}
        />
      ))}
    </div>
  );
}

export function LuminescentFluidPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[var(--section-bg)]">
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-indigo-800/30 rounded-full blur-[180px] opacity-60"
        initial={{ scale: 1, x: 0, y: 0 }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-purple-800/25 rounded-full blur-[160px] opacity-50"
        initial={{ scale: 1, x: 0, y: 0 }}
      />
      <motion.div
        className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-slate-800/30 rounded-full blur-[140px] mix-blend-screen opacity-40"
        initial={{ scale: 1, opacity: 0.3 }}
      />
    </div>
  );
}

const CONSTELLATION_CONNECTIONS = [
  'M 100 200 L 300 150',
  'M 300 150 L 500 300',
  'M 500 300 L 400 600',
  'M 700 200 L 900 400',
  'M 900 400 L 800 700',
  'M 200 800 L 400 600',
  'M 400 600 L 600 800',
];

export function ConstellationPattern() {
  const stars = useMemo(
    () =>
      [...Array(20)].map(() => ({
        cx: Math.random() * 1000,
        cy: Math.random() * 1000,
        r: Math.random() * 2 + 1,
        delay: Math.random() * 5,
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[var(--section-bg)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/30 rounded-full blur-[120px]" />
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-20">
        {CONSTELLATION_CONNECTIONS.map((d, i) => (
          <motion.path
            key={`const-line-${i}`}
            d={d}
            stroke="white"
            strokeWidth="1"
            initial={{ pathLength: 1, opacity: 0.5 }}
          />
        ))}
      </svg>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {stars.map((star, i) => (
          <motion.circle
            key={`star-${i}`}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="white"
            initial={{ opacity: 0.8, scale: 1 }}
          />
        ))}
      </svg>
    </div>
  );
}

export function StandardGradientOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <BackgroundSparkles />
      <MovingGridLines spacing={64} />
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
    </div>
  );
}

/** Static deep-space background for 404 / error pages. */
export function ImmersiveSpacePattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-[0.12]">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="w-full h-full overflow-visible">
          <g stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1">
            <line x1="500" y1="1000" x2="0" y2="0" />
            <line x1="500" y1="1000" x2="250" y2="0" />
            <line x1="500" y1="1000" x2="500" y2="0" />
            <line x1="500" y1="1000" x2="750" y2="0" />
            <line x1="500" y1="1000" x2="1000" y2="0" />
            {[0, 100, 250, 450, 700].map((y) => (
              <line key={y} x1="0" y1={y} x2="1000" y2={y} />
            ))}
          </g>
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--section-bg)_100%)] opacity-80" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[var(--section-bg)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[var(--section-bg)] to-transparent" />
    </div>
  );
}
