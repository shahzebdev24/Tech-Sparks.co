'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { Globe, Code2, Palette, ShoppingCart, Server, Smartphone } from 'lucide-react';
import { Container, Section, Card, Heading, Text, Badge, GradientText } from '@/components/ui';

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
    image: '/customweb.jpg',
  },
/*
  {
    icon: Code2,
    title: 'SaaS Platforms',
    description: 'Multi-tenant platforms with user management, billing, and analytics — built for scale.',
    tags: ['Multi-tenant', 'Stripe', 'Auth'],
    gradient: 'from-indigo-500/10 to-purple-500/10',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-500',
    border: 'hover:border-indigo-200',
    image: '/saasplatforms.png',
  },
*/
  {
    icon: Palette,
    title: 'Strategic UI/UX Design',
    description: 'Research-backed interfaces that increase conversions, reduce support tickets, and delight users.',
    tags: ['Figma', 'Prototyping', 'Research'],
    gradient: 'from-purple-500/10 to-pink-500/10',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    border: 'hover:border-purple-200',
    image: '/strategicuiuxdesigns.jpg',
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
    image: '/ecommercesolutions.jpg',
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
    image: '/backendapi.jpg',
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
    image: '/progressivewebapp.avif',
  },
];

export default function Services() {
  const { isDark } = useSafeTheme();

  return (
    <Section id="services" bg="none" spacing="none" className="relative overflow-hidden bg-[var(--section-bg)] text-[var(--text-primary)]">
      {/* Background Image - light: Pexels image, no overlay; dark: /services.jpg with overlays */}
      <div className="section-bg-wrapper absolute inset-0 w-full h-full">
        <Image
          src={isDark ? '/services.jpg' : '/serviceslight.jpeg'}
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--section-bg)] via-transparent to-[var(--section-bg)]"
          style={{ opacity: isDark ? 0.95 : 0, pointerEvents: isDark ? undefined : 'none' }}
        />
        <div
          className="absolute inset-0 bg-black/70"
          style={{ opacity: isDark ? 1 : 0, pointerEvents: isDark ? undefined : 'none' }}
        />
        {/* Light theme: subtle dark overlay */}
        {!isDark && <div className="absolute inset-0 bg-black/20 pointer-events-none" />}
      </div>

      {/* Content with proper padding */}
      <div className="relative py-24 lg:py-32">
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
            <Heading level={2} className="!text-[var(--text-primary)] mb-6">
              Custom-built digital solutions{' '}
              <GradientText variant="indigo-purple">
                designed around your goals
              </GradientText>
            </Heading>
            <Text className={`${isDark ? 'text-[var(--text-secondary)]' : 'text-black'} text-lg max-w-2xl mx-auto font-medium leading-relaxed`}>
              From web applications to SaaS platforms — every solution is engineered 
              to solve real business problems and drive measurable growth.
            </Text>
          </motion.div>

          {/* Alternating Services Sections */}
          <div className="mt-20 space-y-10 lg:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-6">
                    <div className={`inline-flex p-4 rounded-2xl ${isDark ? service.iconBg : 'bg-white'} ${service.iconColor} border ${isDark ? 'border-white/10' : 'border-gray-200'} metallic-shine shadow-sm`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                      <Heading level={2} className="text-[var(--text-primary)] text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                        {service.title}
                      </Heading>
                      <p className={`${isDark ? 'text-[var(--text-secondary)]' : 'text-black'} text-xl leading-relaxed max-w-xl font-medium`}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags / Capabilities */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[var(--text-secondary)] text-sm font-semibold italic shadow-sm dark:shadow-none backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl opacity-30" />
                  <div className="relative border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] backdrop-blur-sm shadow-xl dark:shadow-2xl rounded-2xl overflow-hidden">
                    {/* Actual Image - Subtle rounding */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1000}
                      height={750}
                      className="w-full h-auto block rounded-2xl"
                      priority={index < 2}
                    />
                    
                    {/* Subtle overlay - dark mode only so light mode shows original image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-0 dark:opacity-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}
