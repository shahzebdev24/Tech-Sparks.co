'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Heart, Award, Users } from 'lucide-react';
import { Card, Heading } from '@/components/ui';

export default function AboutValues() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const values = [
    {
      icon: Target,
      title: 'Quality Over Quantity',
      desc: 'We focus on building a few things exceptionally well rather than many things average.',
      color: 'from-blue-500 to-indigo-500',
      image: '/qualityoverquantity.jpeg'
    },
    {
      icon: Award,
      title: 'Technical Precision',
      desc: 'Our engineering standards are non-negotiable. Clean, secure, and scalable always.',
      color: 'from-emerald-500 to-teal-500',
      image: '/technichalprecision.jpeg'
    },
    {
      icon: Heart,
      title: 'Genuine Partnership',
      desc: 'We win when our clients win. We act as an extension of your own internal team.',
      color: 'from-purple-500 to-pink-500',
      image: '/partnership.jpeg'
    },
    {
      icon: Users,
      title: 'Human-Centric',
      desc: 'We build for humans. Every line of code and every pixel serves the end-user.',
      color: 'from-orange-500 to-amber-500',
      image: '/globalequality.jpeg'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {values.map((value, idx) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
          className="h-full"
        >
          <div 
            className="group relative h-full flex flex-col cursor-pointer"
            onClick={() => setActiveCard(activeCard === idx ? null : idx)}
          >
            {/* Subtle Glow behind each card */}
            <div className={`absolute -inset-2 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl ${activeCard === idx ? 'opacity-10' : ''}`} />
            
            <Card 
              variant="glass" 
              padding="none"
              className={`flex-1 flex flex-col bg-[#0D0D1F]/60 border-white/5 transition-all duration-500 rounded-[2.5rem] shadow-2xl backdrop-blur-3xl overflow-hidden relative ${activeCard === idx ? 'border-white/10 bg-[#12122b]/70' : 'group-hover:border-white/10 group-hover:bg-[#12122b]/70'}`}
            >
              {/* Top Image Section */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className={`object-cover transition-all duration-700 ${activeCard === idx ? 'blur-md scale-110' : 'group-hover:blur-md group-hover:scale-110'}`}
                  priority={idx < 2}
                />
                {/* Dark overlay for text readability and theme consistency */}
                <div className={`absolute inset-0 bg-black/30 transition-colors duration-500 ${activeCard === idx ? 'bg-black/50' : 'group-hover:bg-black/50'}`} />
                
                {/* Hover Overlay Content - Brand Focused (Slides from top) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 z-20 pointer-events-none ${activeCard === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <div className={`text-center transform transition-all duration-700 ease-out ${activeCard === idx ? 'translate-y-0' : '-translate-y-12 group-hover:translate-y-0'}`}>
                    <span className="block text-indigo-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Our Core Value</span>
                    <span className="text-white text-2xl font-black tracking-tighter uppercase leading-none px-4">
                      {value.title}
                    </span>
                    <div className={`mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r ${value.color}`} />
                  </div>
                </div>

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${value.color} shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
              </div>

              <div className="p-6 lg:p-8 flex-1 flex flex-col relative">
                {/* Icon Container with Vertical Accent Line */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-gradient-to-b ${value.color}`} />
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-500 ${activeCard === idx ? 'scale-110 bg-white/10' : 'group-hover:scale-110 group-hover:bg-white/10'}`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <Heading level={4} className={`text-white text-xl font-bold mb-3 tracking-tight transition-colors ${activeCard === idx ? 'text-indigo-300' : 'group-hover:text-indigo-300'}`}>
                  {value.title}
                </Heading>
                
                <p className="text-gray-400 text-base leading-relaxed font-medium flex-1">
                  {value.desc}
                </p>

                {/* Decorative reflection */}
                <div className={`absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-3xl transition-colors duration-700 ${activeCard === idx ? 'bg-indigo-500/10' : 'group-hover:bg-indigo-500/10'}`} />
              </div>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
