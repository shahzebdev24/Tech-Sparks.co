'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Users, ShieldCheck, Zap, BarChart3, Clock, ArrowUpRight } from 'lucide-react';
import { Section, Container, Heading, Text, Card, Badge, GradientText } from '@/components/ui';

const reasons = [
  {
    icon: Target,
    title: 'Integrated Strategy',
    description: "We don't just write code. We align technology with your business objectives from day one.",
    color: 'from-blue-500 to-indigo-500',
    image: '/strategy.jpg'
  },
  {
    icon: Users,
    title: 'Partnership Model',
    description: 'We act as your extended team, not just a service provider. Your success is our primary metric.',
    color: 'from-purple-500 to-pink-500',
    image: '/partnership.jpeg'
  },
  {
    icon: ShieldCheck,
    title: 'Technical Excellence',
    description: 'Our engineering standards ensure secure, scalable, and high-performance applications.',
    color: 'from-emerald-500 to-teal-500',
    image: '/technichalexcellence.jpg'
  },
  {
    icon: Clock,
    title: 'Agile Delivery',
    description: 'Transparent workflows and frequent updates keep you in control of the timeline and budget.',
    color: 'from-orange-500 to-amber-500',
    image: '/agiledelivery.jpeg'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Growth',
    description: 'We build features that provide actionable insights to help you scale your business faster.',
    color: 'from-indigo-500 to-purple-500',
    image: '/datadriven.jpeg'
  },
  {
    icon: Zap,
    title: 'Global Quality',
    description: 'International standards of design and code delivery, accessible from our hub in Karachi.',
    color: 'from-cyan-500 to-blue-500',
    image: '/globalequality.jpeg'
  },
];

export default function WhyChoose() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <Section id="why-choose" bg="none" spacing="none" className="relative overflow-hidden bg-[#050510]">
      {/* Background Cinematic Elements - Fully filling the section area */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/serviceambition.jpg"
          alt="Why Choose Background"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050510] via-transparent to-indigo-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(79,70,229,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)] bg-black/70" />
      </div>

      <div className="relative z-10 py-24 lg:py-40">
        <Container>
          {/* Top Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mx-auto">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-indigo-300 text-xs font-bold tracking-widest uppercase">Our Value Proposition</span>
              </div>
              
              <Heading level={2} className="text-5xl lg:text-7xl font-extrabold !text-white leading-[1.05] tracking-tight">
                Why ambitious businesses{' '}
                <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  choose Tech Sparks
                </span>
              </Heading>
              
              <Text className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                We bridge the gap between complex business challenges and elegant 
                digital solutions. Our approach combines precision engineering 
                with strategic design to deliver measurable competitive advantages.
              </Text>
            </motion.div>
          </div>

          {/* Bottom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="h-full"
              >
                <div 
                  className="group relative h-full flex flex-col cursor-pointer"
                  onClick={() => setActiveCard(activeCard === index ? null : index)}
                >
                  {/* Subtle Glow behind each card */}
                  <div className={`absolute -inset-2 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl ${activeCard === index ? 'opacity-10' : ''}`} />
                  
                  <Card 
                    variant="glass" 
                    padding="none"
                    className={`flex-1 flex flex-col bg-[#0D0D1F]/60 border-white/5 transition-all duration-500 rounded-[2.5rem] shadow-2xl backdrop-blur-3xl overflow-hidden relative ${activeCard === index ? 'border-white/10 bg-[#12122b]/70' : 'group-hover:border-white/10 group-hover:bg-[#12122b]/70'}`}
                  >
                    {/* Top Image Section */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={reason.image}
                        alt={reason.title}
                        fill
                        className={`object-cover transition-all duration-700 ${activeCard === index ? 'blur-md scale-110' : 'group-hover:blur-md group-hover:scale-110'}`}
                        priority={index < 3}
                      />
                      {/* Dark overlay for text readability and theme consistency */}
                      <div className={`absolute inset-0 bg-black/30 transition-colors duration-500 ${activeCard === index ? 'bg-black/50' : 'group-hover:bg-black/50'}`} />
                      
                      {/* Hover Overlay Content - Brand Focused (Slides from top) */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 z-20 pointer-events-none ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <div className={`text-center transform transition-all duration-700 ease-out ${activeCard === index ? 'translate-y-0' : '-translate-y-12 group-hover:translate-y-0'}`}>
                          <span className="block text-indigo-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Our Core Value</span>
                          <span className="text-white text-2xl font-black tracking-tighter uppercase leading-none px-4">
                            {reason.title}
                          </span>
                          <div className={`mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r ${reason.color}`} />
                        </div>
                      </div>

                      {/* Top Accent Line (moved inside card for better alignment with image) */}
                      <div className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${reason.color} shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
                    </div>

                    <div className="p-8 lg:p-10 flex-1 flex flex-col relative">
                      {/* Icon Container with Vertical Accent Line */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-gradient-to-b ${reason.color}`} />
                          <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-500 ${activeCard === index ? 'scale-110 bg-white/10' : 'group-hover:scale-110 group-hover:bg-white/10'}`}>
                            <reason.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <Heading level={4} className={`text-white text-2xl font-bold mb-4 tracking-tight transition-colors ${activeCard === index ? 'text-indigo-300' : 'group-hover:text-indigo-300'}`}>
                        {reason.title}
                      </Heading>
                      
                      <p className="text-gray-400 text-lg leading-relaxed font-medium flex-1">
                        {reason.description}
                      </p>

                      {/* Decorative reflection */}
                      <div className={`absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-3xl transition-colors duration-700 ${activeCard === index ? 'bg-indigo-500/10' : 'group-hover:bg-indigo-500/10'}`} />
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}
