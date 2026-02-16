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
      : 'border-white/10 focus:ring-indigo-500/10 focus:border-indigo-400';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-semibold text-gray-300 mb-2 ${labelClassName}`}
        >
          {label}
          {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={`w-full bg-white/[0.03] border rounded-2xl py-4 ${
            icon ? 'pl-11 pr-5' : 'px-5'
          } text-[15px] font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${stateStyles} ${className}`}
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
  className = '',
  id,
  ...props
}: TextareaProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  const stateStyles = error
    ? 'border-red-500 focus:ring-red-500/10 focus:border-red-500'
    : success
      ? 'border-emerald-500 focus:ring-emerald-500/10 focus:border-emerald-500'
      : 'border-white/10 focus:ring-indigo-500/10 focus:border-indigo-400';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-semibold text-gray-300 mb-2 ${labelClassName}`}
        >
          {label}
          {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        className={`w-full bg-white/[0.03] border rounded-2xl py-4 px-5 text-[15px] font-medium transition-all duration-300 focus:outline-none focus:ring-4 resize-none ${stateStyles} ${className}`}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={
          error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
        }
        {...props}
      />
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
