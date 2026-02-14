'use client';

import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, Zap, BarChart3, Clock, ArrowUpRight } from 'lucide-react';
import { Section, Container, Heading, Text, Card, Badge } from '@/components/ui';

const reasons = [
  {
    icon: Target,
    title: 'Integrated Strategy',
    description: "We don't just write code. We align technology with your business objectives from day one.",
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Users,
    title: 'Partnership Model',
    description: 'We act as your extended team, not just a service provider. Your success is our primary metric.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ShieldCheck,
    title: 'Technical Excellence',
    description: 'Our engineering standards ensure secure, scalable, and high-performance applications.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Clock,
    title: 'Agile Delivery',
    description: 'Transparent workflows and frequent updates keep you in control of the timeline and budget.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Growth',
    description: 'We build features that provide actionable insights to help you scale your business faster.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Global Quality',
    description: 'International standards of design and code delivery, accessible from our hub in Karachi.',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function WhyChoose() {
  return (
    <Section id="why-choose" bg="dark-topo" className="overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Content */}
          <div className="lg:w-5/12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge variant="glass" dot animated className="mb-6 px-4 py-1.5 text-indigo-300">
                Our Value Proposition
              </Badge>
              
              <Heading level={2} className="text-5xl lg:text-6xl font-bold !text-white mb-8 leading-[1.1]">
                Why ambitious businesses{' '}
                <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  choose Tech Sparks
                </span>
              </Heading>
              
              <Text className="text-gray-400 text-xl mb-12 max-w-xl leading-relaxed">
                We bridge the gap between complex business challenges and elegant 
                digital solutions. Our approach combines precision engineering 
                with strategic design to deliver measurable competitive advantages.
              </Text>

              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[200px] p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl metallic-shine">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-4xl font-bold text-white">100%</h4>
                    <div className="p-2 rounded-full bg-indigo-500/10 text-indigo-400">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-gray-400 font-semibold text-xs uppercase tracking-[0.2em]">Transparent Pricing</p>
                </div>

                <div className="flex-1 min-w-[200px] p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl metallic-shine">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-4xl font-bold text-white">Agile</h4>
                    <div className="p-2 rounded-full bg-purple-500/10 text-purple-400">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-gray-400 font-semibold text-xs uppercase tracking-[0.2em]">Delivery Model</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index % 2 !== 0 ? 'md:mt-12' : ''}
              >
                <div className="relative h-full">
                  <Card 
                    variant="glass" 
                    padding="lg" 
                    className="h-full relative overflow-hidden bg-white/[0.03] border-white/5 transition-all duration-500 rounded-[2rem]"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} p-[1px] mb-6`}>
                      <div className="w-full h-full rounded-[0.9rem] bg-[#0A0A1B] flex items-center justify-center">
                        <reason.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {reason.title}
                    </h3>
                    
                    <p className="text-gray-400 text-base font-medium leading-relaxed">
                      {reason.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
