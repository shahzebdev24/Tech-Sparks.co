'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container, Button } from '@/components/ui';

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/portfolio' },
  // { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 py-4 ${
          isScrolled 
            ? 'bg-[var(--color-darker-bg)]/80 backdrop-blur-xl border-b border-white/10 shadow-lg' 
            : 'bg-[var(--color-darker-bg)]/40 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo - Placeholder with font-based logo for now */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center p-1.5 overflow-hidden">
                <img src="/techsparkslogo.png" alt="S" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                TECH SPARKS
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-bold tracking-wide transition-colors ${
                    isScrolled ? 'text-white/80 hover:text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button size="sm" href="/contact" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right" className="metallic-shine">
                Start Project
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden flex">
            {/* Left Drawer Panel */}
            <motion.div 
              className="w-[85%] max-w-[320px] bg-[var(--color-darker-bg)] h-full flex flex-col p-6 shadow-2xl overflow-y-auto"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between mb-8 shrink-0">
                <Link href="/" className="group flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center p-1.5 overflow-hidden">
                  <img src="/techsparkslogo.png" alt="S" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-black tracking-tighter text-white uppercase">TECH SPARKS</span>
                </Link>
                <button 
                  className="p-2 bg-white/10 text-white rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col mb-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="py-5 text-xl font-semibold text-white/90 border-b border-white/5 last:border-0 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400/60 mb-6 font-mono">
                  Software Development Agency — Karachi
                </p>
                <Button size="lg" fullWidth href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Start Project
                </Button>
              </div>
            </motion.div>

            {/* Right Blur Strip */}
            <motion.div 
              className="flex-1 backdrop-blur-md bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
