'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function AboutValuesBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="section-bg-wrapper absolute inset-0 w-full h-full z-0">
      <Image
        src="/valuegradient.jpeg"
        alt="Values Background"
        fill
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95"
        style={{ opacity: isDark ? 1 : 0, pointerEvents: isDark ? undefined : 'none' }}
      />
      <div
        className="absolute inset-0 bg-black/65"
        style={{ opacity: isDark ? 1 : 0, pointerEvents: isDark ? undefined : 'none' }}
      />
      {!isDark && <div className="absolute inset-0 bg-black/40 pointer-events-none" />}
    </div>
  );
}
