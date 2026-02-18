'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    iconColor: 'text-blue-400',
    bgGradient: 'from-blue-500/10',
    logos: [
      { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    techs: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Redis'],
    span: 'lg:col-span-1 lg:row-span-1',
    color: 'from-purple-600/20 to-pink-600/20',
    iconColor: 'text-purple-400',
    bgGradient: 'from-purple-500/10',
    logos: [
      { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ]
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    techs: ['AWS', 'Docker', 'Vercel', 'Netlify', 'Terraform'],
    span: 'lg:col-span-1 lg:row-span-1',
    color: 'from-emerald-600/20 to-cyan-600/20',
    iconColor: 'text-emerald-400',
    bgGradient: 'from-emerald-500/10',
    logos: [
      { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    ]
  },
  {
    category: 'Design & Tools',
    icon: Palette,
    techs: ['Figma', 'Adobe Suite', 'Linear', 'GitHub', 'Framer'],
    span: 'lg:col-span-2 lg:row-span-1',
    color: 'from-orange-600/20 to-yellow-600/20',
    iconColor: 'text-orange-400',
    bgGradient: 'from-orange-500/10',
    logos: [
      { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ]
  },
];

export default function TechStack() {
  return (
    <Section id="tech-stack" bg="none" spacing="none" className="relative overflow-hidden bg-[var(--color-darker-bg)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://images.pexels.com/photos/254770/pexels-photo-254770.jpeg"
          alt="Tech Stack Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95" />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Content with proper padding */}
      <div className="relative py-24 lg:py-32 z-10">
        <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <div className="space-y-10">
            <div>
              <Badge variant="glass" dot animated className="mb-6 px-4 py-1.5 text-indigo-300">
                Our Tech Stack
              </Badge>
              <Heading level={2} className="text-4xl lg:text-6xl font-black !text-white mb-6 leading-[1.05] tracking-tight">
                Modern tools for{' '}
                <GradientText variant="indigo-purple-pink">
                  modern problems
                </GradientText>
              </Heading>
              <Text variant="large" className="text-gray-400 max-w-xl leading-relaxed">
                We leverage the most stable and scalable technologies to ensure 
                your application is performant today and future-proof tomorrow.
              </Text>
            </div>
            
            {/* Featured Tech Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden group hover:bg-white/[0.1] hover:border-white/20 transition-all duration-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Monitor className="w-7 h-7 text-indigo-400" />
                  </div>
                  <Text variant="caption" className="text-indigo-400/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Primary Framework</Text>
                  <h4 className="text-white font-black text-2xl tracking-tight">Next.js 15+</h4>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden group hover:bg-white/[0.1] hover:border-white/20 transition-all duration-500"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-7 h-7 text-purple-400" />
                  </div>
                  <Text variant="caption" className="text-purple-400/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Infrastructure</Text>
                  <h4 className="text-white font-black text-2xl tracking-tight">AWS & Cloud</h4>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Enhanced Tech Stack Cards - Mobile Responsive */}
          <div className="grid grid-cols-1 gap-5">
            {stacks.map((stack, idx) => (
              <motion.div
                key={stack.category}
                className="relative flex flex-col p-6 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden group hover:border-white/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                {/* Enhanced Visual Decoration with Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
                
                {/* Shimmer Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                
                {/* Mobile: Vertical Layout, Desktop: Horizontal */}
                <div className="relative z-10 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:gap-5">
                  {/* Header Row - Icon and Logos */}
                  <div className="flex items-center justify-between sm:contents">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stack.color} border border-white/10 flex items-center justify-center transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                        <stack.icon className={`w-7 h-7 ${stack.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                      </div>
                    </div>

                    {/* Technology Logos - Mobile: Right side, Desktop: Far right */}
                    <div className="flex-shrink-0 flex items-center gap-2 sm:order-3">
                      {stack.logos.map((logo, logoIdx) => (
                        <motion.div
                          key={logo.name}
                          className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 p-2 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 + logoIdx * 0.1 }}
                          title={logo.name}
                        >
                          <Image
                            src={logo.url}
                            alt={logo.name}
                            width={44}
                            height={44}
                            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                          />
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-30 blur-md -z-10 transition-opacity`} />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 min-w-0 sm:order-2">
                    {/* Category Title */}
                    <h4 className="text-[10px] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 uppercase tracking-[0.25em] mb-2.5">
                      {stack.category}
                    </h4>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2">
                      {stack.techs.map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          className="px-2.5 py-1 bg-white/[0.05] text-gray-300 text-[10px] font-bold tracking-wide rounded-lg border border-white/5 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/10 transition-all shadow-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </Container>
      </div>
    </Section>
  );
}
