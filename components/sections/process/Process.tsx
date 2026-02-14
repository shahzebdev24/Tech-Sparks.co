'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, RefreshCw, ArrowRight } from 'lucide-react';
import { Section, Container, Heading, Text, Badge } from '@/components/ui';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, user needs, and market landscape to build a roadmap for success.',
    color: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-500/20',
  },
  {
    icon: PenTool,
    title: 'Strategic Design',
    description: 'Crafting intuitive user experiences and high-impact visual identities that resonate with your target audience.',
    color: 'from-indigo-500 to-purple-600',
    shadow: 'shadow-indigo-500/20',
  },
  {
    icon: Code2,
    title: 'Agile Development',
    description: 'Building robust, scalable applications with clean code and regular milestone updates.',
    color: 'from-purple-500 to-pink-600',
    shadow: 'shadow-purple-500/20',
  },
  {
    icon: Rocket,
    title: 'Deployment & Launch',
    description: 'Thorough testing and seamless deployment to high-performance infrastructure.',
    color: 'from-pink-500 to-rose-600',
    shadow: 'shadow-pink-500/20',
  },
  {
    icon: RefreshCw,
    title: 'Growth & Support',
    description: 'Post-launch optimization and ongoing support to ensure your product continues to scale.',
    color: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/20',
  },
];

export default function Process() {
  return (
    <Section id="process" bg="dark-isometric" className="relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="glass" dot animated className="mb-6 px-4 py-1.5 text-indigo-300">
            Our Methodology
          </Badge>
          <Heading level={2} className="text-4xl lg:text-6xl font-bold !text-white mb-8 leading-tight">
            How we turn ideas into{' '}
            <span className="block lg:inline bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              scalable products
            </span>
          </Heading>
          <Text className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Our proven five-step process ensures transparency, quality, and 
            strategic alignment every step of the way.
          </Text>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) with animated pulse */}
          <div className="absolute top-[52px] left-0 w-full h-[2px] hidden lg:block overflow-hidden">
            <div className="w-full h-full bg-white/5 absolute inset-0" />
            <motion.div 
              className="h-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent w-1/3"
              animate={{ x: ['-100%', '300%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative group h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                {/* Connection Arrows (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:hidden text-white/10">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}

                <div className="flex flex-col items-center h-full">
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    {/* Background glow for the icon */}
                    <div className="absolute inset-0 bg-white/5 opacity-10 blur-2xl rounded-3xl -z-10" />
                    
                    <div className="w-24 h-24 lg:w-24 lg:h-24 rounded-[2rem] bg-white/5 border border-white/10 p-[1px] shadow-2xl metallic-shine ring-1 ring-white/5">
                      <div className="w-full h-full rounded-[1.9rem] bg-[#0A0A1B] flex items-center justify-center relative overflow-hidden">
                        {/* Subtle number background */}
                        <span className="absolute -bottom-2 -left-2 text-6xl font-black text-white/[0.03] select-none">
                          {index + 1}
                        </span>
                        <step.icon className="w-10 h-10 text-white relative z-10" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3 mb-6">
                    <span className="text-[10px] font-bold text-indigo-400 font-mono tracking-[0.2em] bg-indigo-500/10 px-3 py-1 rounded-full uppercase">
                      Step 0{index + 1}
                    </span>
                    <div className="min-h-[60px] flex items-center justify-center text-center">
                      <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-base font-medium leading-relaxed text-center max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
