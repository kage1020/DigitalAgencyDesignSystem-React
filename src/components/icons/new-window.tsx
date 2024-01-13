import React from 'react';
import { IconProps } from '../../types';

export function NewWindowOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5339)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.88086 19.6465H19.8809V13.1465H21.3809V21.1465H3.38086V3.14648H11.3809V4.64648H4.88086V19.6465ZM14.3809 4.64648V3.14648H21.3809V10.1465H19.8809V5.74648L10.8809 14.6465L9.88086 13.6465L18.7809 4.64648H14.3809Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5339'>
          <rect width='24' height='24' fill='white' transform='translate(0.380859 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function NewWindowFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5344)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.18164 19.3463H19.5816V12.9463H21.5816V21.3463H3.18164V2.94629H11.5816V4.94629H5.18164V19.3463ZM14.0824 4.94629V2.94629H21.5824V10.4463H19.5824V6.34629L10.8824 15.0463L9.48242 13.6463L18.1824 4.94629H14.0824Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5344'>
          <rect width='24' height='24' fill='white' transform='translate(0.380859 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
