import React from 'react';
import { IconProps } from '../../types';

export function HealthOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
  if (size % 8 !== 0) {
    console.warn(`The size prop (${size}) should be a multiple of 8.`);
  }

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={color ? { color: color } : undefined}
      viewBox='0 0 25 25'
      fill='none'
    >
      <g clipPath='url(#clip0_115_5720)'>
        <path
          d='M16.9248 2.14648C15.4248 2.14648 14.0248 2.74648 12.9248 3.74648C11.8248 2.74648 10.4248 2.14648 8.9248 2.14648C5.6248 2.14648 2.9248 4.84648 2.9248 8.14648C2.9248 15.8465 12.1248 21.6465 12.5248 21.9465L12.9248 22.1465L13.3248 21.9465C13.7248 21.7465 22.9248 15.9465 22.9248 8.14648C22.9248 4.84648 20.2248 2.14648 16.9248 2.14648ZM12.9248 20.3465C11.2248 19.1465 4.4248 14.1465 4.4248 8.14648C4.4248 5.64648 6.4248 3.64648 8.9248 3.64648C10.2248 3.64648 11.5248 4.24648 12.3248 5.24648L12.9248 5.94648L13.5248 5.24648C14.4248 4.24648 15.6248 3.64648 16.9248 3.64648C19.4248 3.64648 21.4248 5.64648 21.4248 8.14648C21.4248 14.1465 14.6248 19.1465 12.9248 20.3465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5720'>
          <rect width='24' height='24' fill='white' transform='translate(0.924805 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function HealthFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
  if (size % 8 !== 0) {
    console.warn(`The size prop (${size}) should be a multiple of 8.`);
  }

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={color ? { color: color } : undefined}
      viewBox='0 0 25 25'
      fill='none'
    >
      <g clipPath='url(#clip0_115_5725)'>
        <path
          d='M12.9248 3.74648C14.0248 2.74648 15.4248 2.14648 16.9248 2.14648C20.2248 2.14648 22.9248 4.84648 22.9248 8.14648C22.9248 15.9465 13.7248 21.7465 13.3248 21.9465L12.9248 22.1465L12.5248 21.9465C12.1248 21.6465 2.9248 15.8465 2.9248 8.14648C2.9248 4.84648 5.6248 2.14648 8.9248 2.14648C10.4248 2.14648 11.8248 2.74648 12.9248 3.74648Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5725'>
          <rect width='24' height='24' fill='white' transform='translate(0.924805 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
