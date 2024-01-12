import React from 'react';
import { IconProps } from '../../types';

export function ArrowUpOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
  if (size % 8 !== 0) {
    console.warn(`The size prop (${size}) should be a multiple of 8.`);
  }

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={{ color: color }}
      viewBox='0 0 25 25'
      fill='none'
    >
      <path
        d='M4.86035 16.6464L3.86035 15.6464L12.8604 6.54639L21.8604 15.6464L20.8604 16.6464L12.8604 8.74639L4.86035 16.6464Z'
        fill='currentColor'
      />
    </svg>
  );
}

export function ArrowUpFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
  if (size % 8 !== 0) {
    console.warn(`The size prop (${size}) should be a multiple of 8.`);
  }

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={{ color: color }}
      viewBox='0 0 25 25'
      fill='none'
    >
      <g clipPath='url(#clip0_115_5399)'>
        <path
          d='M12.8619 6.24658L3.46191 15.6466L4.86191 17.0466L12.8619 9.04658L20.8619 17.0466L22.2619 15.6466L12.8619 6.24658Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5399'>
          <rect width='24' height='24' fill='white' transform='translate(0.860352 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
