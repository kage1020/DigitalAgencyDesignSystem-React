import React from 'react';
import { IconProps } from '../../types';

export function ImmunizationOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5706)'>
        <path
          d='M21.8164 12.2465L17.5164 7.94648L18.8164 6.64648L20.1164 7.94648L21.5164 6.54648L17.8164 2.84648L16.4164 4.24648L17.7164 5.54648L16.4164 6.84648L12.1164 2.64648L11.0164 3.74648L12.3164 5.04648L3.31641 14.2465L6.21641 17.1465L2.81641 20.5465L3.91641 21.6465L7.31641 18.2465L10.2164 21.1465L19.4164 11.9465L20.7164 13.2465L21.8164 12.2465ZM10.2164 19.0465L5.51641 14.3465L7.51641 12.3465L10.2164 15.0465L11.3164 13.9465L8.61641 11.2465L10.6164 9.24648L13.3164 11.9465L14.4164 10.8465L11.6164 8.14648L13.6164 6.14648L18.3164 10.8465L10.2164 19.0465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5706'>
          <rect width='24' height='24' fill='white' transform='translate(0.316406 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ImmunizationFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5709)'>
        <path
          d='M18.9164 6.64648L20.2164 7.94648L21.6164 6.54648L17.9164 2.84648L16.5164 4.24648L17.8164 5.54648L16.5164 6.84648L12.2164 2.64648L11.2164 3.74648L12.5164 5.04648L10.4164 7.14648L14.2164 10.8465L13.3164 11.8465L9.51641 8.04648L7.41641 10.2465L11.1164 13.9465L10.2164 14.8465L6.51641 11.1465L3.31641 14.2465L6.21641 17.1465L2.81641 20.5465L3.91641 21.6465L7.31641 18.2465L10.2164 21.1465L19.4164 11.9465L20.7164 13.2465L21.8164 12.2465L17.5164 7.94648L18.9164 6.64648Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5709'>
          <rect width='24' height='24' fill='white' transform='translate(0.316406 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
