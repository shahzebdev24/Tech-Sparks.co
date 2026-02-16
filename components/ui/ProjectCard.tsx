'use client';

import React from 'react';
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
  
  return (
    <motion.div
      className={`group relative h-full ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative h-full p-6 rounded-[2.5rem] bg-white/[0.05] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-[16/10] rounded-[1.75rem] overflow-hidden mb-8 border border-white/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1B]/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge variant="glass" size="sm" className="bg-[#0A0A1B]/60 backdrop-blur-xl border-white/10 text-white font-bold tracking-widest px-3 py-1">
              {isFull && project.impact ? project.impact : 'Case Study'}
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

          <Heading level={4} className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-indigo-300 transition-colors">
            {project.title}
          </Heading>
          
          <p className="text-gray-400 text-sm lg:text-base font-medium leading-relaxed mb-8 flex-1">
            {project.description}
          </p>

          <div className={`flex flex-wrap gap-2 ${isFull ? 'mb-8' : 'mt-auto'}`}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/[0.03] text-gray-300 text-[10px] font-bold tracking-widest uppercase rounded-lg border border-white/10 group-hover:border-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {isFull && (
             <Button 
               variant="outline" 
               href={project.link || '/portfolio'}
               fullWidth 
               className="mt-auto border-white/10 text-white hover:bg-white/10 metallic-shine rounded-xl"
             >
               View on portfolio <ArrowUpRight className="ml-2 w-4 h-4" />
             </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
