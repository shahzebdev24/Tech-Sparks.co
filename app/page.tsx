import Hero from '@/components/sections/hero/Hero';
import Services from '@/components/sections/services/Services';
import WhyChoose from '@/components/sections/why-choose/WhyChoose';
import Process from '@/components/sections/process/Process';
import Projects from '@/components/sections/projects/Projects';
import TechStack from '@/components/sections/tech-stack/TechStack';
import Testimonials from '@/components/sections/testimonials/Testimonials';
import Stats from '@/components/sections/stats/Stats';
// import Team from '@/components/sections/team/Team'; // Commented out due to stock photos/unverified content
import Contact from '@/components/sections/contact/Contact';

import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  description:
    'We partner with startups, SMBs, and enterprises to design and build custom web applications, SaaS platforms, and digital products that drive real, measurable results. Based in Karachi, delivering globally.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <Projects />
      <TechStack />
      <Testimonials />
      <Stats />
      {/* <Team /> */}
      <Contact />
    </>
  );
}
