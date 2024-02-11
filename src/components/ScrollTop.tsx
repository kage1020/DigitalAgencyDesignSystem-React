import React from 'react';
import { MdArrowUpward } from './icons';
import { ScrollTopButtonProps } from '../types';
import { cn } from '../libs/util';

export default function ScrollTopButton({ className, ...props }: ScrollTopButtonProps) {
  return (
    <button
      className={cn(
        'p-2 rounded-full border border-blue-900 bg-white text-blue-900 hover:border-blue-1000 hover:bg-blue-200 hover:text-blue-1000 active:border-blue-1200 active:bg-blue-300 active:text-blue-1200 focus:outline-2 focus:outline-offset-4 disabled:border-yellow-700 dark:bg-transparent dark:text-blue-200 dark:border-blue-200 dark:hover:border-blue-300 dark:hover:bg-blue-200/20 dark:active:border-blue-300 dark:active:bg-blue-300/20',
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
