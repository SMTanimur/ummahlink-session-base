
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import { cn } from '../../lib';



export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'warning' | 'super' | 'danger';
  outline?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      size = 'md',
      variant = 'primary',
      outline,
      fullWidth,
      icon,
      children,
      ...rest
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={cn(
          {
            'bg-brand-600 hover:bg-brand-700 border-brand-600 focus:ring-brand-400/50 border text-white':
              !outline && variant === 'primary',
            'border border-gray-600 bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400/50':
              !outline && variant === 'secondary',
            'border border-yellow-600 bg-yellow-500 text-white hover:bg-yellow-400 focus:ring-yellow-400/50':
              !outline && variant === 'warning',
            'border border-pink-600 bg-pink-500 text-white hover:bg-pink-400 focus:ring-pink-400/50':
              !outline && variant === 'super',
            'border border-red-600 bg-red-500 text-white hover:bg-red-400 focus:ring-red-400/50':
              !outline && variant === 'danger',
            'border-brand-500 text-brand hover:bg-brand-100 focus:ring-brand-400/50 border':
              outline && variant === 'primary',
            'lt-text-gray-500 border border-gray-500 hover:bg-gray-100 focus:ring-gray-400/50':
              outline && variant === 'secondary',
            'border border-yellow-500 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-400/50':
              outline && variant === 'warning',
            'border border-pink-500 text-pink-500 hover:bg-pink-100 focus:ring-pink-400/50':
              outline && variant === 'super',
            'border border-red-500 text-red-500 hover:bg-red-100 focus:ring-red-400/50':
              outline && variant === 'danger',
            'px-3 py-0.5 text-sm': size === 'xs',
            'px-3 py-1.5': size === 'sm',
            'px-4 py-2.5': size === 'md',
            'px-6 py-3': size === 'lg',
            
            'inline-flex items-center space-x-1.5': icon && children,
          },
          'rounded-lg font-bold shadow-sm outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50',
          fullWidth && 'w-full',
          className
        )}
        type={rest.type}
        {...rest}
      >
        {icon ? icon : null}
        <div>{children}</div>
      </button>
    );
  }
);