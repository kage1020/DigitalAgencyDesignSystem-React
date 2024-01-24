import React from 'react';
import { IconProps } from '../../types';

export function AttentionOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid='attention-outlined'
    >
      <g clipPath='url(#clip0_115_5285)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.9248 22.1465C7.4248 22.1465 2.9248 17.6465 2.9248 12.1465C2.9248 6.64648 7.4248 2.14648 12.9248 2.14648C18.4248 2.14648 22.9248 6.64648 22.9248 12.1465C22.9248 17.6465 18.4248 22.1465 12.9248 22.1465ZM12.9248 3.64648C8.2248 3.64648 4.4248 7.44648 4.4248 12.1465C4.4248 16.8465 8.2248 20.6465 12.9248 20.6465C17.6248 20.6465 21.4248 16.8465 21.4248 12.1465C21.4248 7.44648 17.6248 3.64648 12.9248 3.64648ZM12.9248 17.6465C13.4771 17.6465 13.9248 17.1988 13.9248 16.6465C13.9248 16.0942 13.4771 15.6465 12.9248 15.6465C12.3725 15.6465 11.9248 16.0942 11.9248 16.6465C11.9248 17.1988 12.3725 17.6465 12.9248 17.6465ZM12.2256 6.64648H13.7256V14.1465H12.2256V6.64648Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5285'>
          <rect width='24' height='24' fill='white' transform='translate(0.924805 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AttentionFilled({ className, size = 24, color }: IconProps) {
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
      data-testid='attention-filled'
    >
      <g clipPath='url(#clip0_115_5291)'>
        <path
          d='M12.9248 22.1465C18.4248 22.1465 22.9248 17.6465 22.9248 12.1465C22.9248 6.64648 18.4248 2.14648 12.9248 2.14648C7.4248 2.14648 2.9248 6.64648 2.9248 12.1465C2.9248 17.6465 7.4248 22.1465 12.9248 22.1465ZM12.2248 6.64648H13.7248V14.1465H12.2248V6.64648ZM12.9248 15.6465C13.5248 15.6465 13.9248 16.0465 13.9248 16.6465C13.9248 17.2465 13.5248 17.6465 12.9248 17.6465C12.3248 17.6465 11.9248 17.2465 11.9248 16.6465C11.9248 16.0465 12.3248 15.6465 12.9248 15.6465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5291'>
          <rect width='24' height='24' fill='white' transform='translate(0.924805 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
