import React from 'react';
import { cn } from '../libs';
import { ButtonProps } from '../types';

export default function Button({
  className,
  size = 'large',
  variant = 'primary',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-sm focus:outline-offset-4 focus:outline-yellow-700 text-xxs-mobile',
        size === 'x-small' && 'min-w-[72px] h-7 py-[7px] px-1 text-xxxs my-1',
        size === 'small' && 'min-w-20 h-9 py-[6px] px-[12px] my-0.5',
        size === 'medium' && 'min-w-24 h-12 py-[12px] px-2',
        size === 'large' && 'min-w-[136px] h-14 p-2',
        variant === 'primary' &&
          'bg-blue-900 text-white hover:bg-blue-1000 active:bg-blue-1100 focus:outline-2 disabled:bg-black/30',
        variant === 'secondary' &&
          'bg-white text-blue-900 border border-blue-900 hover:border-blue-1000 hover:bg-blue-200 active:border-blue-1200 active:bg-blue-300 disabled:border-grey-420 disabled:text-grey-420',
        variant === 'tertiary' &&
          'text-blue-900 underline hover:bg-blue-200 active:bg-blue-300 disabled:text-grey-420',
        className
      )}
      type={type}
      {...props}
      data-testid='button'
    >
      {children}
    </button>
  );
}
