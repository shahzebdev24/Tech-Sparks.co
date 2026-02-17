

import { Section, Container, Heading, Text, Badge, ProjectCard, GradientText, SectionHeader, DarkPageLayout } from '@/components/ui';
import { projects } from '@/content/projects';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Portfolio',
  description: 'Explore our real-world projects — from enterprise SaaS platforms like Vonza to legal-tech solutions and learning management systems. See how Tech Sparks delivers high-impact digital products.',
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

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {[0, 1, 2].map((colIndex) => (
              <div key={colIndex} className="flex-1 flex flex-col gap-10 w-full">
                {projects.filter((_, i) => i % 3 === colIndex).map((project, index) => (
                  <ProjectCard 
                    key={project.title}
                    project={project} 
                    variant="full" 
                    delay={index * 0.1}
                  />
                ))}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </DarkPageLayout>
  );
}

