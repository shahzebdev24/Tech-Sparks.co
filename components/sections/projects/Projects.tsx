'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Badge, ProjectCard, Button, GradientText, SectionHeader } from '@/components/ui';
import { projects } from '@/content/projects';

export default function Projects() {
  // Only show the first 3 projects for the home section
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section id="projects" bg="dark-hex">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              variant="preview" 
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" href="/portfolio" fullWidth className="border-white/20 text-white">View All Projects</Button>
        </div>
      </Container>
    </Section>
  );
}

