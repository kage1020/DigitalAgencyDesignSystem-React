import React from 'react';
import { IconProps } from '../../types';

export function EApplicationOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5463)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.9248 20.1465V4.14648H22.9248V20.1465H2.9248ZM10.3248 7.14648C10.7248 7.14648 11.0248 6.84648 11.0248 6.34648C11.0248 5.94648 10.8248 5.54648 10.3248 5.54648C9.8248 5.54648 9.52481 5.94648 9.52481 6.34648C9.52481 6.84648 9.9248 7.14648 10.3248 7.14648ZM7.8248 7.14648C8.2248 7.14648 8.5248 6.84648 8.5248 6.34648C8.5248 5.94648 8.3248 5.54648 7.8248 5.54648C7.3248 5.54648 7.0248 5.94648 7.0248 6.34648C7.0248 6.84648 7.4248 7.14648 7.8248 7.14648ZM5.3248 7.14648C5.7248 7.14648 6.0248 6.84648 6.0248 6.34648C6.0248 5.94648 5.8248 5.54648 5.3248 5.54648C4.8248 5.54648 4.5248 5.94648 4.5248 6.34648C4.5248 6.84648 4.9248 7.14648 5.3248 7.14648ZM4.4248 18.6465H21.4248V8.64648H4.4248V18.6465ZM16.4256 11.9467L12.2256 15.9467L9.22559 13.2467L10.3256 12.1467L12.2256 13.8467L15.4256 10.8467L16.4256 11.9467Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5463'>
          <rect width='24' height='24' fill='white' transform='translate(0.924805 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function EApplicationFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5468)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.9248 4.14648H22.9248V8.64648H2.9248V4.14648ZM4.5248 6.34648C4.5248 6.84648 4.8248 7.14648 5.3248 7.14648C5.7248 7.14648 6.0248 6.84648 6.1248 6.34648C6.1248 5.84648 5.8248 5.54648 5.3248 5.54648C4.8248 5.54648 4.5248 5.94648 4.5248 6.34648ZM7.0248 6.34648C7.0248 6.84648 7.3248 7.14648 7.8248 7.14648C8.2248 7.14648 8.5248 6.84648 8.6248 6.34648C8.6248 5.84648 8.3248 5.54648 7.8248 5.54648C7.3248 5.54648 7.0248 5.94648 7.0248 6.34648ZM9.52481 6.34648C9.52481 6.84648 9.8248 7.14648 10.3248 7.14648C10.7248 7.14648 11.0248 6.84648 11.1248 6.34648C11.1248 5.84648 10.8248 5.54648 10.3248 5.54648C9.8248 5.54648 9.52481 5.94648 9.52481 6.34648ZM22.9248 20.1465H2.9248V9.64648H22.9248V20.1465ZM15.4248 12.1465L12.2248 15.1465L10.3248 13.3465L9.3248 14.4465L12.2248 17.1465L16.4248 13.2465L15.4248 12.1465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5468'>
          <rect width='24' height='24' fill='white' transform='translate(0.924805 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
