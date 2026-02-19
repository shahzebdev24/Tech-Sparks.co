'use client';

import React from 'react';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Badge, Button, Heading } from '@/components/ui';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  variant?: 'preview' | 'full';
  className?: string;
  delay?: number;
}

export function ProjectCard({ project, variant = 'preview', className = '', delay = 0 }: ProjectCardProps) {
  const isFull = variant === 'full';
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const { isDark } = useSafeTheme();

  return (
    <motion.div
      className={`group relative ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div
        className="relative p-6 rounded-[2.5rem] dark:bg-white/[0.05] border border-gray-200 dark:border-transparent shadow-2xl backdrop-blur-md overflow-hidden flex flex-col hover:bg-gray-50 dark:hover:bg-white/[0.08] hover:border-gray-300 dark:hover:border-transparent transition-all duration-500"
        style={!isDark ? { backgroundColor: '#ffffff' } : undefined}
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] rounded-[1.75rem] overflow-hidden mb-8 border border-gray-200 dark:border-transparent bg-gray-100 dark:bg-white/5">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-white/5 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
            </div>
          )}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-700 group-hover:scale-103 ${isLoading ? 'scale-110 blur-xl opacity-0' : 'scale-100 blur-0 opacity-100'}`}
            onLoadingComplete={() => setIsLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--section-bg)]/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge 
              variant="primary" 
              size="sm" 
              style={{ backgroundColor: '#4f46e5', color: '#ffffff', borderColor: '#4338ca' }}
              className="font-bold tracking-widest px-3 py-1 shadow-lg"
            >
              {isFull && project.impact ? project.impact : 'Case Study'}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-indigo-400">
              {project.category}
            </span>
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-[var(--border)] flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 text-[var(--text-primary)] group-hover:rotate-45 transition-transform" />
            </div>
          </div>

          <Heading level={4} className="text-2xl font-bold text-[var(--text-primary)] mb-4 leading-tight group-hover:text-indigo-500 transition-colors">
            {project.title}
          </Heading>
          
          <div className="relative flex-1 mb-6">
            <p className={`text-[var(--text-secondary)] text-sm lg:text-base font-medium leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-3' : ''}`}>
              {project.description}
            </p>
            {project.description.length > 120 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-indigo-400 hover:text-indigo-300 text-xs font-bold uppercase tracking-widest transition-colors active:scale-95"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-[var(--text-secondary)] text-[10px] font-bold tracking-widest uppercase rounded-lg border border-gray-200 dark:border-[var(--border)] hover:bg-gray-200 dark:hover:bg-white/20 hover:border-gray-300 dark:hover:border-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {(() => {
            const isExternal = project.link?.startsWith('http');
            return (
              <a
                href={project.link || '/portfolio'}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="w-full inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 transform active:scale-[0.97] cursor-pointer select-none bg-white dark:bg-transparent text-gray-700 dark:text-[var(--text-primary)] border-2 border-gray-200 dark:border-[var(--border)] hover:border-indigo-500 px-6 py-3 text-base rounded-xl metallic-shine hover:bg-gray-50 dark:hover:bg-white/10 shadow-lg dark:shadow-none"
              >
                {isExternal ? 'Visit Live Project' : 'View on portfolio'} <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            );
          })()}
        </div>
      </div>
    </motion.div>
  );
}
