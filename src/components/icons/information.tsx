import React from 'react';
import { IconProps } from '../../types';

export function InformationOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5295)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.251 22.1465C6.75098 22.1465 2.25098 17.6465 2.25098 12.1465C2.25098 6.64648 6.75098 2.14648 12.251 2.14648C17.751 2.14648 22.251 6.64648 22.251 12.1465C22.251 17.6465 17.751 22.1465 12.251 22.1465ZM12.251 3.64648C7.55098 3.64648 3.75098 7.44648 3.75098 12.1465C3.75098 16.8465 7.55098 20.6465 12.251 20.6465C16.951 20.6465 20.751 16.8465 20.751 12.1465C20.751 7.44648 16.951 3.64648 12.251 3.64648ZM11.251 7.14648C11.251 6.84648 11.351 6.64648 11.551 6.44648C11.751 6.24648 11.951 6.14648 12.251 6.14648C12.551 6.14648 12.751 6.24648 12.951 6.44648C13.151 6.64648 13.251 6.84648 13.251 7.14648C13.251 7.44648 13.151 7.64648 12.951 7.84648C12.751 8.04648 12.551 8.14648 12.251 8.14648C11.951 8.14648 11.751 8.04648 11.551 7.84648C11.351 7.64648 11.251 7.44648 11.251 7.14648ZM11.4502 9.64648H12.9502V18.1465H11.4502V9.64648Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5295'>
          <rect width='24' height='24' fill='white' transform='translate(0.250977 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function InformationFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5301)'>
        <path
          d='M12.251 22.1465C17.751 22.1465 22.251 17.6465 22.251 12.1465C22.251 6.64648 17.751 2.14648 12.251 2.14648C6.75098 2.14648 2.25098 6.64648 2.25098 12.1465C2.25098 17.6465 6.75098 22.1465 12.251 22.1465ZM12.951 18.1465H11.451V9.64648H12.951V18.1465ZM11.551 6.44648C11.751 6.24648 11.951 6.14648 12.251 6.14648C12.551 6.14648 12.751 6.24648 12.951 6.44648C13.151 6.64648 13.251 6.84648 13.251 7.14648C13.251 7.44648 13.151 7.64648 12.951 7.84648C12.751 8.04648 12.551 8.14648 12.251 8.14648C11.951 8.14648 11.751 8.04648 11.551 7.84648C11.351 7.64648 11.251 7.44648 11.251 7.14648C11.251 6.84648 11.351 6.64648 11.551 6.44648Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5301'>
          <rect width='24' height='24' fill='white' transform='translate(0.250977 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
