'use client';

import React from 'react';
import { useSafeTheme } from '@/hooks/useSafeTheme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelClassName?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  fullWidth?: boolean;
  showCharacterCount?: boolean;
}

export function Input({
  label,
  labelClassName = '',
  helperText,
  error,
  success,
  icon,
  fullWidth = true,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  const { isDark } = useSafeTheme();
  const stateStyles = error
    ? 'border-red-500 focus:ring-0 focus:border-red-500'
    : success
      ? 'border-emerald-500 focus:ring-0 focus:border-emerald-500'
      : 'focus:ring-0 focus:border-indigo-400';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      <div className="flex justify-between items-center mb-3">
        {label && (
          <label
            htmlFor={inputId}
            className={`block text-sm font-black uppercase tracking-[0.25em] text-indigo-400/80 ${labelClassName} mb-0`}
          >
            {label}
            {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
      </div>
      <div className="relative rounded-2xl">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={`w-full bg-black/5 dark:bg-white/[0.08] backdrop-blur-sm border dark:border-white/30 rounded-2xl py-4 ${
            icon ? 'pl-11 pr-5' : 'px-5'
          } text-[15px] font-medium text-[var(--text-primary)] transition-all duration-300 focus:outline-none focus:ring-0 dark-scrollbar ${stateStyles} ${className}`}
          style={
            !isDark && !error && !success
              ? { ...props.style, borderColor: '#6b7280', outline: 'none', boxShadow: 'none' }
              : { ...props.style }
          }
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-red-500 font-medium" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-2 text-sm text-[var(--text-tertiary)]">
          {helperText}
        </p>
      )}
    </div>
  );
}

export function Textarea({
  label,
  labelClassName = '',
  helperText,
  error,
  success,
  fullWidth = true,
  showCharacterCount = false,
  className = '',
  id,
  ...props
}: TextareaProps) {
  const [charCount, setCharCount] = React.useState(0);
  const inputId = id || (label && typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : 'textarea');
  const { isDark } = useSafeTheme();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    if (props.onChange) props.onChange(e);
  };

  // Set initial count if defaultValue or value is provided
  React.useEffect(() => {
    const val = props.value || props.defaultValue;
    if (val && typeof val === 'string') {
      setCharCount(val.length);
    }
  }, [props.value, props.defaultValue]);

  const stateStyles = error
    ? 'border-red-500 focus:ring-0 focus:border-red-500'
    : success
      ? 'border-emerald-500 focus:ring-0 focus:border-emerald-500'
      : 'focus:ring-0 focus:border-indigo-400';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      <div className="flex justify-between items-center mb-3">
        {label && (
          <label
            htmlFor={inputId}
            className={`block text-sm font-black uppercase tracking-[0.25em] text-indigo-400/80 ${labelClassName} mb-0`}
          >
            {label}
            {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        {showCharacterCount && props.maxLength && (
          <div className="flex items-center">
            <span className={`text-[10px] font-bold uppercase tracking-wider ${
              charCount >= (props.maxLength * 0.9) ? 'text-amber-500' : 'text-[var(--text-tertiary)]'
            }`}>
              {charCount} / {props.maxLength}
            </span>
          </div>
        )}
      </div>
      <div className="relative rounded-2xl">
        <textarea
          id={inputId}
          className={`w-full bg-black/5 dark:bg-white/[0.08] backdrop-blur-sm border dark:border-white/30 rounded-2xl py-4 px-5 text-[15px] font-medium text-[var(--text-primary)] transition-all duration-300 focus:outline-none focus:ring-0 resize-none no-scrollbar ${stateStyles} ${className}`}
          style={
            !isDark && !error && !success
              ? { ...props.style, borderColor: '#6b7280', outline: 'none', boxShadow: 'none' }
              : { ...props.style }
          }
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
          onChange={handleChange}
        />
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-red-500 font-medium" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-2 text-sm text-[var(--text-tertiary)]">
          {helperText}
        </p>
      )}
    </div>
  );
}
