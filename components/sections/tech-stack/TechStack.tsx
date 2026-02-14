'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Badge } from '@/components/ui';

const stacks = [
  {
    category: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'DevOps & Cloud',
    techs: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Netlify'],
  },
  {
    category: 'Design & Tools',
    techs: ['Figma', 'Adobe Suite', 'Git / GitHub', 'Linear', 'Slack'],
  },
];

export default function TechStack() {
  return (
    <Section id="tech-stack" bg="dark-circuit" spacing="md">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="dark" className="mb-4">Our Tech Stack</Badge>
            <Heading level={2} className="text-white mb-6">
              Modern tools for{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">modern problems</span>
            </Heading>
            <Text className="text-gray-300 text-lg mb-8">
              We leverage the most stable and scalable technologies to ensure 
              your application is performant today and future-proof tomorrow.
            </Text>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-4 bg-white/12 backdrop-blur-md border border-white/15 rounded-2xl shadow-sm metallic-shine">
                <p className="text-gray-300 text-xs font-black uppercase tracking-widest mb-1">Primary Framework</p>
                <p className="text-white font-bold">Next.js 15+ & React 19</p>
              </div>
              <div className="px-6 py-4 bg-white/12 backdrop-blur-md border border-white/15 rounded-2xl shadow-sm metallic-shine">
                <p className="text-gray-300 text-xs font-black uppercase tracking-widest mb-1">Infrastructure</p>
                <p className="text-white font-bold">AWS & Vercel AI Cloud</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stacks.map((stack, idx) => (
              <motion.div
                key={stack.category}
                className="bg-white/12 backdrop-blur-md p-8 rounded-4xl border border-white/15 shadow-sm hover:border-white/20 transition-all group glossy-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-[0.2em] mb-6 group-hover:text-indigo-400 transition-colors">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/10 text-white/90 text-sm font-bold rounded-lg border border-white/10 group-hover:bg-white/15 group-hover:text-white transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
