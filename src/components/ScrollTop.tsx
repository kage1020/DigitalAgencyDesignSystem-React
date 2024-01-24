import React from 'react';
import { cn } from '../libs';
import { MdArrowUpward } from './icons';
import { ScrollTopButtonProps } from '../types';

export default function ScrollTopButton({ className, ...props }: ScrollTopButtonProps) {
  return (
    <button
      className={cn(
        'p-2 rounded-full border border-blue-900 bg-white text-blue-900 hover:border-blue-1000 hover:bg-blue-200 hover:text-blue-1000 active:border-blue-1200 active:bg-blue-300 active:text-blue-1200 focus:outline-2 focus:outline-offset-4 disabled:border-yellow-700',
        className
      )}
      type='button'
      {...props}
      data-testid='scroll-top-button'
    >
      <MdArrowUpward />
    </button>
  );
}
