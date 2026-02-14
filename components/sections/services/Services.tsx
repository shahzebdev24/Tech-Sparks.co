'use client';

import { motion } from 'framer-motion';
import { Globe, Code2, Palette, ShoppingCart, Server, Smartphone } from 'lucide-react';
import { Container, Section, Card, Heading, Text, Badge } from '@/components/ui';

const services = [
  {
    icon: Globe,
    title: 'Custom Web Applications',
    description: 'Purpose-built web applications tailored to your workflows, users, and growth goals.',
    tags: ['React', 'Next.js', 'TypeScript'],
    gradient: 'from-blue-500/10 to-indigo-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    border: 'hover:border-blue-200',
  },
  {
    icon: Code2,
    title: 'SaaS Platforms',
    description: 'Multi-tenant platforms with user management, billing, and analytics — built for scale.',
    tags: ['Multi-tenant', 'Stripe', 'Auth'],
    gradient: 'from-indigo-500/10 to-purple-500/10',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-500',
    border: 'hover:border-indigo-200',
  },
  {
    icon: Palette,
    title: 'Strategic UI/UX Design',
    description: 'Research-backed interfaces that increase conversions, reduce support tickets, and delight users.',
    tags: ['Figma', 'Prototyping', 'Research'],
    gradient: 'from-purple-500/10 to-pink-500/10',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    border: 'hover:border-purple-200',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Fast, conversion-optimized online stores with payment processing and inventory management.',
    tags: ['Shopify', 'Payments', 'Analytics'],
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    border: 'hover:border-emerald-200',
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    description: 'Scalable server architecture and APIs that keep your application fast and reliable as you grow.',
    tags: ['Node.js', 'PostgreSQL', 'REST'],
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
    border: 'hover:border-amber-200',
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: 'The performance of a native app with the reach of the web. Offline-capable and lightning fast.',
    tags: ['PWA', 'Offline', 'Push'],
    gradient: 'from-rose-500/10 to-pink-500/10',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-500',
    border: 'hover:border-rose-200',
  },
];

export default function Services() {
  return (
    <Section id="services" bg="dark-ripple" spacing="lg">
      <Container>
        {/* Section header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="dark" className="mb-4">
            What We Build
          </Badge>
          <Heading level={2} className="!text-white mb-6">
            Custom-built digital solutions{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              designed around your goals
            </span>
          </Heading>
          <Text className="text-gray-300 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            From web applications to SaaS platforms — every solution is engineered 
            to solve real business problems and drive measurable growth.
          </Text>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card 
                variant="glass" 
                className="glossy-card group h-full"
                padding="lg"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 metallic-shine`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-[15px] leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white/90 text-xs font-semibold rounded-lg border border-white/15 group-hover:bg-white/15 group-hover:border-white/25 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
