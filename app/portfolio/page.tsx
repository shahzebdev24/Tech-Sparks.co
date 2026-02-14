'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Badge, Card, Button } from '@/components/ui';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Global Logistics Dashboard',
    category: 'SaaS Platform',
    image: '/saas_dashboard_mockup_1770396419360.png',
    description: 'A comprehensive supply chain management system with real-time tracking and predictive analytics.',
    tags: ['Next.js', 'PostgreSQL', 'Real-time Analytics'],
    impact: '30% Faster Deliveries',
  },
  {
    title: 'Health-Tech Patient Portal',
    category: 'Healthcare',
    image: '/healthcare_portal_mockup_1770396434998.png',
    description: 'Secure, HIPAA-compliant platform for patient management and telehealth consultations.',
    tags: ['Security', 'React', 'Telehealth'],
    impact: 'HIPAA Compliant',
  },
  {
    title: 'Enterprise ERP Solution',
    category: 'Enterprise Software',
    image: '/financial_dashboard_mockup_1770396481122.png',
    description: 'Integrated business process management for finance, HR, and inventory control.',
    tags: ['Custom ERP', 'FinTech', 'Reporting'],
    impact: 'Streamlined Ops',
  },
  {
    title: 'Real Estate Marketplace',
    category: 'Prop-Tech',
    image: '/real_estate_mockup_1770396452154.png',
    description: 'Property search and listing platform with advanced filtering and agent management.',
    tags: ['Search Engine', 'Maps', 'User Accounts'],
    impact: 'Coming Soon',
  },
  {
    title: 'Learning Management System',
    category: 'Ed-Tech',
    image: '/learning_management_mockup_1770396465519.png',
    description: 'Internal training platform for a global manufacturing company.',
    tags: ['LMS', 'Video Content', 'Certifications'],
    impact: 'Coming Soon',
  },
  {
    title: 'E-Commerce Storefront',
    category: 'Retail',
    image: '/ecommerce_project_mockup_1770396393410.png',
    description: 'Modern, headless e-commerce experience for a luxury apparel brand.',
    tags: ['Shopify Headless', 'Performance', 'UX'],
    impact: 'Coming Soon',
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--color-darker-bg)] min-h-screen">
      <Section bg="dark-hex" spacing="lg">
        <Container>
          <div className="max-w-3xl mb-16 lg:mb-20">
            <Badge variant="glass" className="mb-4">Our Work</Badge>
            <Heading level={1} className="!text-white mb-8 tracking-tighter">Case studies of engineering excellence</Heading>
            <Text className="text-gray-400 text-lg font-medium leading-relaxed">
              Each project is a testament to our commitment to quality, strategy, 
              and measurable growth. We build digital products that matter.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card variant="dark" padding="none" className="flex flex-col h-full border-white/5 group hover:border-white/10 transition-all duration-500 overflow-hidden glossy-card">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge variant="glass" className="shadow-lg">
                        {project.impact}
                      </Badge>
                    </div>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-darker-bg)] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  </div>
                  <div className="p-8 sm:p-10 flex flex-col flex-1 relative z-10">
                    <span className="block text-xs font-black tracking-[0.3em] uppercase text-indigo-400 mb-2">
                       {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 text-[10px] font-black tracking-widest uppercase text-gray-500 rounded-lg border border-white/10 group-hover:text-gray-300 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`} fullWidth className="border-white/10 text-white hover:bg-white/10 metallic-shine">
                      Explore Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
