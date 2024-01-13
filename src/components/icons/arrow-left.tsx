import React from 'react';
import { IconProps } from '../../types';

export function ArrowLeftOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5382)'>
        <path
          d='M14.4887 21.1465L5.38867 12.1465L14.4887 3.14648L15.4887 4.14648L7.58867 12.1465L15.4887 20.1465L14.4887 21.1465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5382'>
          <rect width='24' height='24' fill='white' transform='translate(-0.00976562 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ArrowLeftFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5385)'>
        <path
          d='M7.8918 12.1466L15.8918 4.14658L14.4918 2.74658L5.0918 12.1466L14.4918 21.5466L15.8918 20.1466L7.8918 12.1466Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5385'>
          <rect width='24' height='24' fill='white' transform='translate(-0.00976562 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
