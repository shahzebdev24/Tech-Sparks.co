'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container, Button } from '@/components/ui';

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              S
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[60] bg-[var(--color-darker-bg)] p-6 lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between mb-12">
              <Link href="/" className="group flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-xl">
                  S
                </div>
                <span className="text-xl font-black tracking-tighter text-white">TECH SPARKS</span>
              </Link>
              <button 
                className="p-2 bg-white/10 text-white rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6 mb-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-3xl font-extrabold text-white hover:text-indigo-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Button size="lg" fullWidth href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Start Your Project
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
