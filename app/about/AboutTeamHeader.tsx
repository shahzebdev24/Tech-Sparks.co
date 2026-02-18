'use client';

import { useTheme } from 'next-themes';
import { SectionHeader, Text, GradientText } from '@/components/ui';

export default function AboutTeamHeader() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className={!isDark ? '[&_.text-indigo-600]:!text-gray-900 [&_.text-indigo-300]:!text-gray-900 [&_h2]:!text-gray-900 [&_p]:!text-gray-800' : ''}>
      <SectionHeader
        badge="Global Reach, Local Base"
        title={<>Based in Karachi, <GradientText variant="indigo-purple">delivering for the world</GradientText></>}
        description="From our engineering hub in Pakistan, we deliver world-class software solutions to startups and enterprises across the globe."
        headingLevel={2}
        align="left"
      />
      <Text className={`mb-10 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
        Our team consists of passionate engineers, designers, and
        strategists who share a common goal: building technology that
        makes a difference.
      </Text>
    </div>
  );
}
