

import { Section, Container, Heading, Text, Badge, ProjectCard } from '@/components/ui';
import { projects } from '@/content/projects';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Portfolio',
  description: 'Explore our case studies and recent projects. High-impact digital products built for growth and scale.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--color-darker-bg)] min-h-screen">
      <Section bg="dark-hex" spacing="lg">
        <Container>
          <div className="max-w-3xl mb-16 lg:mb-20">
            <Badge variant="glass" className="mb-4">Our Work</Badge>
            <Heading level={1} className="!text-white mb-8 tracking-tighter">
              Case studies of{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                engineering excellence
              </span>
            </Heading>
            <Text className="text-gray-400 text-lg font-medium leading-relaxed">
              Each project is a testament to our commitment to quality, strategy, 
              and measurable growth. We build digital products that matter.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                variant="full" 
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

