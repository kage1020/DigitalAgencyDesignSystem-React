import React from 'react';
import { IconProps } from '../../types';

export function SearchOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid='search-outlined'
    >
      <g clipPath='url(#clip0_115_5361)'>
        <path
          d='M21.251 20.6465L15.251 14.6465C16.451 13.3465 17.151 11.5465 17.151 9.64648C17.251 5.54648 13.851 2.14648 9.75098 2.14648C5.65098 2.14648 2.25098 5.54648 2.25098 9.64648C2.25098 13.7465 5.55098 17.1465 9.75098 17.1465C11.451 17.1465 12.951 16.5465 14.251 15.6465L20.251 21.6465L21.251 20.6465ZM3.75098 9.64648C3.75098 6.34648 6.45098 3.64648 9.75098 3.64648C13.051 3.64648 15.751 6.34648 15.751 9.64648C15.751 12.9465 13.051 15.6465 9.75098 15.6465C6.45098 15.6465 3.75098 12.9465 3.75098 9.64648Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5361'>
          <rect width='24' height='24' fill='white' transform='translate(0.250977 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SearchFilled({ className, size = 24, color }: IconProps) {
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
      data-testid='search-filled'
    >
      <g clipPath='url(#clip0_115_5364)'>
        <path
          d='M15.6502 14.6467C16.8502 13.2467 17.4502 11.4467 17.4502 9.64668C17.4502 5.34668 13.9502 1.84668 9.6502 1.84668C5.35019 1.84668 1.9502 5.34668 1.9502 9.64668C1.9502 13.9467 5.4502 17.4467 9.7502 17.4467C11.3502 17.4467 12.8502 16.9467 14.1502 16.0467L20.1502 22.0467L21.5502 20.6467L15.6502 14.6467ZM15.4502 9.64668C15.4502 12.8467 12.8502 15.4467 9.6502 15.4467C6.4502 15.4467 3.8502 12.8467 3.8502 9.64668C3.8502 6.44668 6.4502 3.84668 9.6502 3.84668C12.8502 3.84668 15.4502 6.44668 15.4502 9.64668Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5364'>
          <rect width='24' height='24' fill='white' transform='translate(0.250977 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
