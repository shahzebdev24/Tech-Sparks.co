'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Badge, GradientText } from '@/components/ui';
import { 
  Layout, 
  Server, 
  Cloud, 
  Palette, 
  ShieldCheck, 
  Zap,
  Monitor
} from 'lucide-react';

const stacks = [
  {
    category: 'Frontend',
    icon: Layout,
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    span: 'lg:col-span-2 lg:row-span-1',
    color: 'from-blue-600/20 to-indigo-600/20',
  },
  {
    category: 'Backend',
    icon: Server,
    techs: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Redis'],
    span: 'lg:col-span-1 lg:row-span-1',
    color: 'from-purple-600/20 to-pink-600/20',
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    techs: ['AWS', 'Docker', 'Vercel', 'Netlify', 'Terraform'],
    span: 'lg:col-span-1 lg:row-span-1',
    color: 'from-emerald-600/20 to-cyan-600/20',
  },
  {
    category: 'Design & Tools',
    icon: Palette,
    techs: ['Figma', 'Adobe Suite', 'Linear', 'GitHub', 'Framer'],
    span: 'lg:col-span-2 lg:row-span-1',
    color: 'from-orange-600/20 to-yellow-600/20',
  },
];

export default function TechStack() {
  return (
    <Section id="tech-stack" bg="dark-topo" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Side: Content */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <Badge variant="glass" dot animated className="mb-6 px-4 py-1.5 text-indigo-300">
                Our Tech Stack
              </Badge>
              <Heading level={2} className="text-4xl lg:text-7xl font-bold !text-white mb-8 leading-[1.05] tracking-tight">
                Modern tools for{' '}
                <GradientText variant="indigo-purple-pink">
                  modern problems
                </GradientText>
              </Heading>
              <Text variant="large" className="text-gray-400 max-w-xl">
                We leverage the most stable and scalable technologies to ensure 
                your application is performant today and future-proof tomorrow.
              </Text>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden group hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 shadow-indigo-500/5">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Monitor className="w-7 h-7 text-indigo-400" />
                  </div>
                  <Text variant="caption" className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Primary Framework</Text>
                  <h4 className="text-white font-bold text-2xl tracking-tight">Next.js 15+</h4>
                </div>
              </div>
              <div className="relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden group hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 shadow-purple-500/5">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-7 h-7 text-purple-400" />
                  </div>
                  <Text variant="caption" className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Infrastructure</Text>
                  <h4 className="text-white font-bold text-2xl tracking-tight">AWS & Cloud</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Bento Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stacks.map((stack, idx) => (
              <motion.div
                key={stack.category}
                className={`relative flex flex-col p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden group hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 ${stack.span}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Visual Decoration */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${stack.color} rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10">
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <stack.icon className="w-7 h-7 text-white/90" />
                    </div>
                    <Zap className="w-5 h-5 text-white/5 group-hover:text-amber-400/30 transition-colors" />
                  </div>

                  <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-8">
                    {stack.category}
                  </h4>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {stack.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-white/[0.03] text-gray-300 text-[10px] font-bold tracking-[0.1em] uppercase rounded-lg border border-white/5 group-hover:bg-white/10 group-hover:text-white transition-all shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
