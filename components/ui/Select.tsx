'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  labelClassName?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  fullWidth?: boolean;
  options: { value: string; label: string }[];
}

export function Select({
  label,
  labelClassName = '',
  helperText,
  error,
  success,
  fullWidth = true,
  className = '',
  id,
  options,
  ...props
}: SelectProps) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

  const stateStyles = error
    ? 'border-red-500 focus:ring-red-500/10 focus:border-red-500'
    : success
      ? 'border-emerald-500 focus:ring-emerald-500/10 focus:border-emerald-500'
      : 'border-white/10 focus:ring-indigo-500/10 focus:border-indigo-400';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label
          htmlFor={selectId}
          className={`block text-sm font-semibold text-gray-300 mb-2 ${labelClassName}`}
        >
          {label}
          {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={`w-full bg-white/[0.03] border rounded-2xl py-4 pl-5 pr-12 text-[15px] font-medium transition-all duration-300 focus:outline-none focus:ring-4 appearance-none cursor-pointer ${stateStyles} ${className} text-white`}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
          }
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-gray-900 text-white">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
      {error && (
        <p id={`${selectId}-error`} className="mt-2 text-sm text-red-500 font-medium" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${selectId}-helper`} className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
