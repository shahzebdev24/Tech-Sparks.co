'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Card, Button, Badge, Text, Heading } from '@/components/ui';
import { PricingPlan } from '@/types';

interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
  align?: 'center' | 'left';
  delay?: number;
}

export function PricingCard({ plan, className = '', align = 'center', delay = 0 }: PricingCardProps) {
  const isCenter = align === 'center';
  const isHighlighted = plan.highlighted || plan.popular;

  const defaultHref = plan.ctaText === 'Contact Sales' || plan.ctaText === 'Get a Quote' || plan.ctaText === 'Contact Us' 
    ? '/contact' 
    : '/pricing';

  const href = plan.ctaHref || defaultHref;

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="h-full"
    >
    <Card 
        variant={plan.variant === 'glass' || plan.variant === 'primary' || isHighlighted ? 'glass' : 'dark'} 
        overflowHidden={false}
        className={`flex flex-col h-full border-[var(--border)] transition-all duration-500 group relative !overflow-visible ${
            isHighlighted ? 'scale-105 z-10 border-indigo-500/30' : 'hover:border-[var(--border)]'
        } ${isCenter ? 'items-center text-center p-10' : 'p-8 lg:p-10'} ${className}`}
    >
        {isHighlighted && (
            <div className={`absolute -top-4 z-50 ${isCenter ? 'left-1/2 -translate-x-1/2' : 'right-8'}`}>
                <Badge variant="primary" className="shadow-lg shadow-indigo-500/20">Most Popular</Badge>
            </div>
        )}
        
        <Heading level={5} className={`text-[var(--text-primary)] font-bold mb-4 group-hover:text-indigo-500 transition-colors uppercase tracking-widest text-[10px] ${isCenter ? 'mb-6' : ''}`}>
            {plan.name}
        </Heading>

        <div className={`mb-2 transition-transform duration-500 group-hover:scale-105 ${isCenter ? 'group-hover:scale-110' : 'flex items-baseline gap-2'}`}>
            <span className="text-4xl lg:text-5xl font-black text-[var(--text-primary)]">
                {plan.price}
            </span>
            {!isCenter && plan.price !== 'Custom' && (
                 <span className="text-indigo-300 font-bold self-end text-xs uppercase tracking-widest mb-1">/start</span>
            )}
        </div>
        
        {plan.subtext && (
             <p className="text-indigo-200 text-xs font-black uppercase tracking-[0.2em] mb-10">
                {plan.subtext}
            </p>
        )}

        {plan.description && (
            <Text className={`!text-[var(--text-primary)]/80 text-sm font-semibold leading-relaxed mb-8 ${isCenter ? '' : 'text-left'}`}>
                {plan.description}
            </Text>
        )}

        <div className={`space-y-4 mb-12 w-full ${!isCenter ? 'flex-1 border-t border-[var(--border)] pt-8' : ''}`}>
            {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center flex-shrink-0 shadow-sm shadow-indigo-500/20">
                        <Check className="w-3 h-3 text-indigo-300" />
                    </div>
                    <span className="text-[var(--text-secondary)] text-sm font-semibold leading-tight text-left">{feature}</span>
                </div>
            ))}
        </div>

        <div className="mt-auto w-full">
            <Button 
                variant={isHighlighted ? 'primary' : 'outline'} 
                fullWidth 
                href={href}
                className={isHighlighted ? 'glossy-button' : 'bg-white dark:bg-transparent border-gray-200 dark:border-[var(--border)] text-gray-700 dark:text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-white/5 shadow-lg dark:shadow-none'}
                icon={!isCenter ? <ArrowRight className="w-4 h-4" /> : undefined}
                iconPosition="right"
            >
                {plan.ctaText}
            </Button>
        </div>
    </Card>
    </motion.div>
  );
}
