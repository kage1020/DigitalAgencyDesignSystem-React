import React from 'react';
import { cn } from '../libs';
import { NotificationBadgeProps } from '../types';

export default function NotificationBadge({
  variant = 'count',
  count = 0,
  className,
  children,
}: NotificationBadgeProps) {
  return (
    <div className={cn('relative w-fit', className)} data-testid='notification-badge'>
      {variant === 'dot' && count !== 0 && (
        <div
          className='absolute top-[8%] right-[8%] w-2 h-2 bg-red-800 rounded-full'
          data-testid='badge-dot'
        ></div>
      )}
      {variant === 'count' && count !== 0 && (
        <div
          className='absolute top-0 right-0 w-4 h-4 bg-red-800 rounded-full text-xxxs-mobile text-white text-center'
          data-testid='badge-count'
        >
          {count}
        </div>
      )}
      {children}
    </div>
  );
}
