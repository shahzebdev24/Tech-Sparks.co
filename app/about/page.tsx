'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Award, Users } from 'lucide-react';
import { Section, Container, Heading, Text, Badge, Card, Button } from '@/components/ui';

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-darker-bg)] min-h-screen">
      {/* Hero Section */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="glass" className="mb-6">Our Story</Badge>
            <Heading level={1} className="!text-white mb-8 tracking-tighter">
              Engineering software that{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">measurably accelerates</span> growth
            </Heading>
            <Text className="text-gray-300 text-xl font-medium leading-relaxed mb-12">
              Tech Sparks was founded on a simple belief: modern businesses 
              deserve more than just code. They deserve a strategic partner 
              who understands their goals and builds the technology to reach them.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <div className="text-center mb-16 lg:mb-20">
            <Badge variant="glass" className="mb-4">Our DNA</Badge>
            <Heading level={2} className="!text-white mb-6">The principles that guide us</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Quality Over Quantity',
                desc: 'We focus on building a few things exceptionally well rather than many things average.',
              },
              {
                icon: Award,
                title: 'Technical Precision',
                desc: 'Our engineering standards are non-negotiable. Clean, secure, and scalable always.',
              },
              {
                icon: Heart,
                title: 'Genuine Partnership',
                desc: 'We win when our clients win. We act as an extension of your own internal team.',
              },
              {
                icon: Users,
                title: 'Human-Centric',
                desc: 'We build for humans. Every line of code and every pixel serves the end-user.',
              },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card variant="dark" className="h-full border-white/5 hover:border-white/10 transition-all duration-500 glossy-card group">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors uppercase tracking-widest text-[10px]">{value.title}</h3>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">
                    {value.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team/Karachi Section */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <Badge variant="glass" className="mb-4">Global Reach, Local Base</Badge>
              <Heading level={2} className="!text-white mb-8">Based in Karachi, delivering for the world</Heading>
              <Text className="text-gray-300 text-lg font-medium leading-relaxed mb-6">
                From our engineering hub in Pakistan, we deliver world-class 
                software solutions to startups and enterprises across the globe.
              </Text>
              <Text className="text-gray-300 mb-10 leading-relaxed">
                Our team consists of passionate engineers, designers, and 
                strategists who share a common goal: building technology that 
                makes a difference.
              </Text>
              <div className="flex flex-wrap gap-8">
                <div className="p-6 rounded-[2rem] bg-white/12 backdrop-blur-md border border-white/15 metallic-shine">
                  <div className="text-3xl font-black text-white mb-1">2024</div>
                  <p className="text-gray-300 font-bold text-[10px] uppercase tracking-[0.2em]">Founded</p>
                </div>
                <div className="p-6 rounded-[2rem] bg-white/12 backdrop-blur-md border border-white/15 metallic-shine">
                  <div className="text-3xl font-black text-white mb-1">Premium</div>
                  <p className="text-gray-300 font-bold text-[10px] uppercase tracking-[0.2em]">Standards</p>
                </div>
                <div className="p-6 rounded-[2rem] bg-white/12 backdrop-blur-md border border-white/15 metallic-shine">
                  <div className="text-3xl font-black text-white mb-1">Growth</div>
                  <p className="text-gray-300 font-bold text-[10px] uppercase tracking-[0.2em]">Obsessed</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative bg-white/12 backdrop-blur-md rounded-[3rem] aspect-video flex items-center justify-center border border-white/15 shadow-2xl glossy-card">
              <Text className="font-bold text-gray-300 italic text-center px-8">Authentic studio photos & team gallery coming soon</Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <div className="bg-gradient-to-br from-indigo-900/40 via-[var(--color-darker-bg)] to-purple-950/30 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden border border-white/5 glossy-card">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />
            <div className="relative z-10">
              <Heading level={2} className="!text-white mb-6">Ready to scale your next idea?</Heading>
              <Text className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-medium">
                Join the ambitious businesses that trust Tech Sparks to drive 
                their technological growth.
              </Text>
              <Button size="lg" variant="primary" href="/contact" className="glossy-button">
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
