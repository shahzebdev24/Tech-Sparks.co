'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Container, ProjectCard, Button, GradientText, SectionHeader } from '@/components/ui';
import { projects } from '@/content/projects';

export default function Projects() {
  // Only show the first 3 projects for the home section
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section id="projects" bg="none" spacing="none" className="relative overflow-hidden bg-[var(--color-darker-bg)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/portfolio.jpg"
          alt="Projects Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95" />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content with proper padding */}
      <div className="relative py-24 lg:py-32 z-10">
        <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20">
          <SectionHeader
            badge="Our Portfolio"
            title={<>Engineering solutions that <GradientText variant="indigo-purple">fuel growth</GradientText></>}
            description="Explore our recent projects where technical precision meets strategic design to deliver high-impact digital products."
            headingLevel={2}
            align="left"
            maxWidth="md"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Button variant="outline" href="/portfolio" className="border-white/20 text-white hover:bg-white/10 metallic-shine">
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
          <Button variant="outline" href="/portfolio" fullWidth className="border-white/20 text-white">View All Projects</Button>
        </div>
        </Container>
      </div>
    </Section>
  );
}

