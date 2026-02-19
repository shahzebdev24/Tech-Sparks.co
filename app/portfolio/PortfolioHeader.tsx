'use client';

import { useSafeTheme } from '@/hooks/useSafeTheme';
import { SectionHeader, GradientText } from '@/components/ui';

export default function PortfolioHeader() {
  const { isDark } = useSafeTheme();

  return (
    <div className={!isDark ? '[&_.text-indigo-600]:!text-white [&_.text-indigo-300]:!text-white [&_h1]:!text-white [&_p]:!text-white/90' : ''}>
      <SectionHeader
        badge="Our Work"
        title={<>Case studies of <GradientText variant="indigo-purple-pink">engineering excellence</GradientText></>}
        description="Each project is a testament to our commitment to quality, strategy, and measurable growth. We build digital products that matter."
        headingLevel={1}
        align="left"
        maxWidth="lg"
        className="mb-16 lg:mb-20"
      />
    </div>
  );
}
