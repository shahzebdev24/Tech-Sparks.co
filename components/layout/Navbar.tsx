'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { Container, Button } from '@/components/ui';

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme, isDark } = useSafeTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 20);
      
      // Clear active section if at the very top (Hero)
      if (scrollPos < 300) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll spy (Home page sections)
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px', // More precise triggering near the top of the viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Only update if the section is truly entering from the bottom or top
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Elements to observe
    const sections = ['services', 'why-choose', 'process', 'projects', 'testimonials', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [pathname]); // Re-run when pathname changes to find new elements

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.split('#')[1];
      if (sectionId === 'services') {
        return pathname === '/' && ['services', 'why-choose', 'process'].includes(activeSection);
      }
      return pathname === '/' && activeSection === sectionId;
    }
    return pathname === href;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 py-4 ${
          isDark
            ? isScrolled 
              ? 'bg-[var(--nav-bg)]/90 backdrop-blur-xl border-b border-[var(--nav-border)] shadow-lg' 
              : 'bg-[var(--nav-bg)]/70 backdrop-blur-md border-b border-[var(--nav-border)]'
            : isScrolled
              ? 'bg-white border-b border-[var(--nav-border)] shadow-lg'
              : 'bg-white border-b border-[var(--nav-border)]'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center p-1.5 overflow-hidden">
                <img src="/techsparkslogo.png" alt="S" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tighter text-[var(--nav-text)] uppercase">
                TECH SPARKS
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-xl flex items-center gap-2 ${
                      active 
                        ? 'text-indigo-600 bg-indigo-50 border border-indigo-200/90 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-[inset_0_0_20px_rgba(129,140,248,0.1)] dark:text-indigo-400' 
                        : 'text-[var(--nav-text)]/80 hover:text-[var(--nav-text)] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {active && (
                      <motion.span 
                        layoutId="active-dot"
                        className="w-1 h-1 rounded-full bg-indigo-400"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
              <div className="ml-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setTheme((resolvedTheme ?? 'dark') === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-xl bg-black/5 dark:bg-white/10 text-[var(--nav-text)] hover:opacity-80 transition-opacity"
                  aria-label={(resolvedTheme ?? 'dark') === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                  title={(resolvedTheme ?? 'dark') === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                >
                  {(resolvedTheme ?? 'dark') === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <Button 
                  size="sm" 
                  href="/contact" 
                  icon={<ArrowRight className="w-4 h-4" />} 
                  iconPosition="right" 
                  className={`metallic-shine ${pathname === '/contact' ? 'ring-2 ring-indigo-500/50 shadow-[0_0_20px_rgba(129,140,248,0.3)]' : ''}`}
                >
                  Start Project
                </Button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 rounded-xl bg-black/5 dark:bg-white/10 text-[var(--nav-text)] hover:opacity-80 transition-colors"
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
              className="w-[85%] max-w-[320px] bg-[var(--nav-bg)] h-full flex flex-col p-6 shadow-2xl overflow-y-auto"
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
                  <span className="text-xl font-black tracking-tighter text-[var(--nav-text)] uppercase">TECH SPARKS</span>
                </Link>
                <button 
                  className="p-2 bg-black/5 dark:bg-white/10 text-[var(--nav-text)] rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col mb-8">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className={`py-5 text-xl font-semibold border-b border-[var(--nav-border)] last:border-0 transition-colors flex items-center gap-3 ${
                        active ? 'text-indigo-500' : 'text-[var(--nav-text)]/90 hover:text-[var(--nav-text)]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {active && <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />}
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500/70 mb-6 font-mono">
                  Software Development Agency — Karachi
                </p>
                <button
                  type="button"
                  onClick={() => setTheme((resolvedTheme ?? 'dark') === 'dark' ? 'light' : 'dark')}
                  className="w-full mb-4 p-3 rounded-xl bg-black/5 dark:bg-white/10 text-[var(--nav-text)] flex items-center justify-center gap-2 font-bold"
                  aria-label={(resolvedTheme ?? 'dark') === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                >
                  {(resolvedTheme ?? 'dark') === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  {(resolvedTheme ?? 'dark') === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
                <Button size="lg" fullWidth href="/contact" onClick={() => setMobileMenuOpen(false)} className={pathname === '/contact' ? 'ring-2 ring-indigo-500/50' : ''}>
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
