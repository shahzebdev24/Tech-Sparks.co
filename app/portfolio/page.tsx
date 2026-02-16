

import { Section, Container, Heading, Text, Badge, ProjectCard, GradientText, SectionHeader, DarkPageLayout } from '@/components/ui';
import { projects } from '@/content/projects';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Portfolio',
  description: 'Explore our case studies and recent projects. High-impact digital products built for growth and scale.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <DarkPageLayout>
      <Section bg="dark-hex" spacing="lg">
        <Container>
          <SectionHeader
            badge="Our Work"
            title={<>Case studies of <GradientText variant="indigo-purple-pink">engineering excellence</GradientText></>}
            description="Each project is a testament to our commitment to quality, strategy, and measurable growth. We build digital products that matter."
            headingLevel={1}
            align="left"
            maxWidth="lg"
            className="mb-16 lg:mb-20"
          />

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
    </DarkPageLayout>
  );
}

