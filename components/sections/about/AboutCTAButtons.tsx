'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui';

export default function AboutCTAButtons() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <Button
        href="/contact"
        variant="primary"
        size="lg"
        className="group relative overflow-hidden"
      >
        <span className="relative z-10">Start Your Project</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
      <Button
        href="/portfolio"
        variant="outline"
        size="lg"
        style={!isDark ? { backgroundColor: '#ffffff', color: '#000000' } : undefined}
        className="border-gray-200 dark:border-white/20 hover:border-gray-300 dark:hover:border-white/40 dark:bg-transparent dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white shadow-lg dark:shadow-none"
      >
        View Our Work
      </Button>
    </div>
  );
}
