

import { Section, Container, ProjectCard, DarkPageLayout } from '@/components/ui';
import { projects } from '@/content/projects';
import PortfolioBackground from './PortfolioBackground';
import PortfolioHeader from './PortfolioHeader';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Portfolio',
  description: 'Explore our real-world projects — from enterprise SaaS platforms like Vonza to legal-tech solutions and learning management systems. See how Tech Sparks delivers high-impact digital products.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <DarkPageLayout>
      <Section bg="none" spacing="none" className="relative overflow-hidden bg-[var(--section-bg)] dark:bg-[var(--color-darker-bg)]">
        <PortfolioBackground />

        {/* Content with proper padding */}
        <div className="relative py-24 lg:py-32 z-10">
          <Container>
          <PortfolioHeader />

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
        </div>
      </Section>
    </DarkPageLayout>
  );
}

