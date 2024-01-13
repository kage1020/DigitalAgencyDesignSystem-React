import React from 'react';
import { IconProps } from '../../types';

export function AddOutlined({ className, size = 24, color }: IconProps) {
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
      <g clipPath='url(#clip0_115_5368)'>
        <path
          d='M21.1211 11.3465H12.8211V3.14648H11.3211V11.3465H3.12109V12.8465H11.3211V21.1465H12.8211V12.8465H21.1211V11.3465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5368'>
          <rect width='24' height='24' fill='white' transform='translate(0.121094 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AddFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5371)'>
        <path
          d='M13.1219 11.1463V2.94629H11.1219V11.1463H2.92188V13.1463H11.1219V21.3463H13.1219V13.1463H21.3219V11.1463H13.1219Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5371'>
          <rect width='24' height='24' fill='white' transform='translate(0.121094 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
