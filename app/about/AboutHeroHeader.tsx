'use client';

import { useSafeTheme } from '@/hooks/useSafeTheme';
import { SectionHeader, GradientText } from '@/components/ui';

export default function AboutHeroHeader() {
  const { isDark } = useSafeTheme();

  return (
    <div className={!isDark ? '[&_.text-indigo-600]:!text-white [&_.text-indigo-300]:!text-white [&_h1]:!text-white [&_p]:!text-white/90' : ''}>
      <SectionHeader
        badge="Our Story"
        title={<>Engineering software that <GradientText variant="indigo-purple">measurably accelerates</GradientText> growth</>}
        description="Tech Sparks was founded on a simple belief: modern businesses deserve more than just code. They deserve a strategic partner who understands their goals and builds the technology to reach them."
        headingLevel={1}
        align="center"
        maxWidth="xl"
      />
    </div>
  );
}
