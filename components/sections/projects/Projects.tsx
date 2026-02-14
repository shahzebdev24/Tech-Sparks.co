'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Section, Container, Heading, Text, Badge, Button } from '@/components/ui';

const projects = [
  {
    title: 'Global Logistics Dashboard',
    category: 'SaaS Platform',
    image: '/saas_dashboard_mockup_1770396419360.png',
    description: 'A comprehensive supply chain management system with real-time tracking and predictive analytics.',
    tags: ['Next.js', 'PostgreSQL', 'Real-time Analytics'],
    link: '/portfolio',
  },
  {
    title: 'Health-Tech Patient Portal',
    category: 'Healthcare',
    image: '/healthcare_portal_mockup_1770396434998.png',
    description: 'Secure, HIPAA-compliant platform for patient management and telehealth consultations.',
    tags: ['Security', 'React', 'Telehealth'],
    link: '/portfolio',
  },
  {
    title: 'Enterprise ERP Solution',
    category: 'Enterprise Software',
    image: '/financial_dashboard_mockup_1770396481122.png',
    description: 'Integrated business process management for finance, HR, and inventory control.',
    tags: ['Custom ERP', 'FinTech', 'Reporting'],
    link: '/portfolio',
  },
];

export default function Projects() {
  return (
    <Section id="projects" bg="dark-hex">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <Badge variant="dark" className="mb-4">Our Portfolio</Badge>
            <Heading level={2} className="!text-white mb-6">
              Engineering solutions that{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">fuel growth</span>
            </Heading>
            <Text className="text-gray-300 text-lg font-medium leading-relaxed">
              Explore our recent projects where technical precision meets 
              strategic design to deliver high-impact digital products.
            </Text>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Button variant="outline" href="/portfolio" className="border-white/20 text-white hover:bg-white/10 metallic-shine">
              View All Projects
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-full p-6 rounded-[2.5rem] bg-white/[0.05] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-[16/10] rounded-[1.75rem] overflow-hidden mb-8 border border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1B]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="glass" size="sm" className="bg-[#0A0A1B]/60 backdrop-blur-xl border-white/10 text-white font-bold tracking-widest px-3 py-1">
                      Case Study
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-black tracking-[0.25em] uppercase text-indigo-400">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm lg:text-base font-medium leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/[0.03] text-gray-300 text-[10px] font-bold tracking-widest uppercase rounded-lg border border-white/10 group-hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" href="/portfolio" fullWidth className="border-white/20 text-white">View All Projects</Button>
        </div>
      </Container>
    </Section>
  );
}
