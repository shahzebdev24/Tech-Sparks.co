'use client';

import { useSafeTheme } from '@/hooks/useSafeTheme';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Container, ProjectCard, Button, GradientText, SectionHeader } from '@/components/ui';
import { projects } from '@/content/projects';

export default function Projects() {
  const { isDark } = useSafeTheme();
  // Only show the first 3 projects for the home section
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section id="projects" bg="none" spacing="none" className="relative overflow-hidden bg-[var(--section-bg)]">
      {/* Background - same image; gradient + black overlay only in dark */}
      <div className="section-bg-wrapper absolute inset-0 w-full h-full z-0">
        <Image
          src="/portfolio.jpg"
          alt="Projects Background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--section-bg)] via-transparent to-[var(--section-bg)] opacity-95"
          style={{ opacity: isDark ? 1 : 0, pointerEvents: isDark ? undefined : 'none' }}
        />
        <div
          className="absolute inset-0 bg-black/75"
          style={{ opacity: isDark ? 1 : 0, pointerEvents: isDark ? undefined : 'none' }}
        />
        {/* Light theme: subtle dark overlay */}
        {!isDark && <div className="absolute inset-0 bg-black/40 pointer-events-none" />}
      </div>

      {/* Content with proper padding */}
      <div className="relative py-24 lg:py-32 z-10">
        <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20">
          <div className={!isDark ? '[&_h2]:!text-white [&_p]:!text-white/90 [&_.text-indigo-600:not(span)]:!text-white [&_.text-indigo-300:not(span)]:!text-white' : ''}>
            <SectionHeader
              badge="Our Portfolio"
              title={<>Engineering solutions that <GradientText variant="indigo-purple">fuel growth</GradientText></>}
              description="Explore our recent projects where technical precision meets strategic design to deliver high-impact digital products."
              headingLevel={2}
              align="left"
              maxWidth="md"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Button
              variant="outline"
              href="/portfolio"
              style={!isDark ? { backgroundColor: '#ffffff', color: '#000000' } : undefined}
              className="border-gray-200 dark:border-[var(--nav-border)] hover:bg-gray-50 dark:hover:bg-white/10 shadow-lg dark:shadow-none metallic-shine dark:bg-transparent dark:text-[var(--text-primary)]"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className="break-inside-avoid mb-10 last:mb-0">
              <ProjectCard 
                project={project} 
                variant="preview" 
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button
            variant="outline"
            href="/portfolio"
            fullWidth
            style={!isDark ? { backgroundColor: '#ffffff', color: '#000000' } : undefined}
            className="border-gray-200 dark:border-[var(--nav-border)] hover:bg-gray-50 dark:hover:bg-white/10 shadow-lg dark:shadow-none dark:bg-transparent dark:text-[var(--text-primary)]"
          >
            View All Projects
          </Button>
        </div>
        </Container>
      </div>
    </Section>
  );
}

