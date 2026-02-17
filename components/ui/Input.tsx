'use client';

import React from 'react';

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

  const stateStyles = error
    ? 'border-red-500 focus:ring-red-500/10 focus:border-red-500'
    : success
      ? 'border-emerald-500 focus:ring-emerald-500/10 focus:border-emerald-500'
      : 'border-white/30 focus:ring-indigo-500/10 focus:border-indigo-400';

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
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={`w-full bg-white/[0.08] backdrop-blur-sm border rounded-2xl py-4 ${
            icon ? 'pl-11 pr-5' : 'px-5'
          } text-[15px] font-medium transition-all duration-300 focus:outline-none focus:ring-4 dark-scrollbar ${stateStyles} ${className}`}
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
        <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500">
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
    ? 'border-red-500 focus:ring-red-500/10 focus:border-red-500'
    : success
      ? 'border-emerald-500 focus:ring-emerald-500/10 focus:border-emerald-500'
      : 'border-white/30 focus:ring-indigo-500/10 focus:border-indigo-400';

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
              charCount >= (props.maxLength * 0.9) ? 'text-amber-500' : 'text-gray-500'
            }`}>
              {charCount} / {props.maxLength}
            </span>
          </div>
        )}
      </div>
      <div className="relative">
        <textarea
          id={inputId}
          className={`w-full bg-white/[0.08] backdrop-blur-sm border rounded-2xl py-4 px-5 text-[15px] font-medium transition-all duration-300 focus:outline-none focus:ring-4 resize-none no-scrollbar ${stateStyles} ${className}`}
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
        <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
