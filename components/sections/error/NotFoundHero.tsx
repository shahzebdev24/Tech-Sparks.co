'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Container, Heading, Text, GradientText, Button, ImmersiveSpacePattern, AntigravitySparks } from '@/components/ui';

export function NotFoundHero() {
  return (
    <div className="fixed inset-0 z-[100] bg-[var(--color-darker-bg)] flex items-center justify-center overflow-hidden">
      <ImmersiveSpacePattern />
      <AntigravitySparks />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 md:mb-8 relative inline-flex">
            <span className="text-7xl md:text-9xl font-black text-white/[0.1] tracking-tighter select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            </div>
          </div>

          {/* Minimal Content Appearance */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading level={1} className="text-4xl md:text-5xl lg:text-7xl font-bold !text-white mb-6 leading-tight tracking-tight px-4">
              Beyond the{' '}
              <GradientText variant="indigo-purple-pink">
                Horizon
              </GradientText>
            </Heading>
            
            <Text variant="large" className="text-gray-400 mb-8 md:mb-12 max-w-[280px] xs:max-w-md mx-auto leading-relaxed text-base md:text-lg px-4">
              You've drifted into uncharted territory. The page you're looking for doesn't exist in this coordinate system.
            </Text>

            <Link href="/" passHref legacyBehavior>
              <Button 
                variant="primary" 
                size="lg"
                className="px-8 md:px-12 rounded-xl md:rounded-2xl shadow-xl shadow-indigo-500/20 group text-sm md:text-base"
                icon={<Home className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />}
              >
                Return to Mission Control
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
