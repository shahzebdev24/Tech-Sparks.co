'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'outline' | 'glossy' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  href?: string;
}

function isInternalHref(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className = '',
  disabled,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

  const variants: Record<string, string> = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.03] glossy-button',
    secondary:
      'bg-white dark:bg-white/5 text-gray-700 dark:text-[var(--text-primary)] border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 shadow-lg dark:shadow-none',
    dark: 'bg-white dark:bg-[var(--surface-elevated)] text-gray-900 dark:text-[var(--text-primary)] shadow-xl hover:shadow-2xl hover:scale-[1.03] metallic-shine',
    ghost:
      'bg-transparent text-indigo-500 hover:bg-black/5 dark:hover:bg-white/5 hover:text-[var(--text-primary)]',
    outline:
      'bg-white dark:bg-transparent text-gray-700 dark:text-[var(--text-primary)] border-2 border-gray-200 dark:border-[var(--border)] hover:border-indigo-500 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-[var(--text-primary)]',
    glossy: 'glossy-button bg-indigo-600 text-white',
    glass: 'bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-[var(--border)] text-gray-700 dark:text-[var(--text-primary)] hover:bg-white dark:hover:bg-white/10 metallic-shine',
  };

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-2xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    if (isInternalHref(href)) {
      return (
        <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
