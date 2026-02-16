import React from 'react';

interface StatCardProps {
  value: string | number;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div 
      className={`p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-white/12 backdrop-blur-md border border-white/15 metallic-shine ${className}`}
    >
      <div className="text-2xl sm:text-3xl font-black text-white mb-1">
        {value}
      </div>
      <p className="text-gray-300 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">
        {label}
      </p>
    </div>
  );
}

export default StatCard;
