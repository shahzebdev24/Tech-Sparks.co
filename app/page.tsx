import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import WhyChoose from "@/components/sections/why-choose/WhyChoose";
import Process from "@/components/sections/process/Process";
import Projects from "@/components/sections/projects/Projects";
import TechStack from "@/components/sections/tech-stack/TechStack";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Pricing from "@/components/sections/pricing/Pricing";
import Stats from "@/components/sections/stats/Stats";
import Contact from "@/components/sections/contact/Contact";
import Team from "@/components/sections/team/Team";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <Team />
      <Projects />
      <TechStack />
      <Testimonials />
      <Pricing />
      <Stats />
      <Contact />
    </div>
  );
}
