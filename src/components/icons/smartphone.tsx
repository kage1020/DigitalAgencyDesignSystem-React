import React from 'react';
import { IconProps } from '../../types';

export function SmartphoneOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5563)'>
        <path
          d='M17.3211 2.14648H6.82109C5.92109 2.14648 5.12109 2.94648 5.12109 3.94648V20.4465C5.12109 21.4465 5.92109 22.2465 6.92109 22.2465H17.4211C18.4211 22.2465 19.2211 21.4465 19.2211 20.4465V3.94648C19.1211 2.94648 18.3211 2.14648 17.3211 2.14648ZM12.7211 20.6465C12.5211 20.7465 12.3211 20.8465 12.1211 20.8465C11.9211 20.8465 11.6211 20.7465 11.5211 20.6465C11.3211 20.4465 11.1211 20.2465 11.1211 19.8465C11.1211 19.2465 11.5211 18.8465 12.1211 18.8465C12.7211 18.8465 13.1211 19.2465 13.1211 19.8465C13.1211 20.2465 13.0211 20.4465 12.7211 20.6465ZM17.6211 17.6465H6.62109V4.14648H17.6211V17.6465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5563'>
          <rect width='24' height='24' fill='white' transform='translate(0.121094 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SmartphoneFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5566)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.82109 2.14648H17.3211C18.3211 2.14648 19.1211 2.94648 19.2211 3.94648V20.4465C19.2211 21.4465 18.4211 22.2465 17.4211 22.2465H6.92109C5.92109 22.2465 5.12109 21.4465 5.12109 20.4465V3.94648C5.12109 2.94648 5.92109 2.14648 6.82109 2.14648ZM12.1211 20.8465C12.3211 20.8465 12.5211 20.7465 12.7211 20.6465C13.0211 20.4465 13.1211 20.2465 13.1211 19.8465C13.1211 19.2465 12.7211 18.8465 12.1211 18.8465C11.5211 18.8465 11.1211 19.2465 11.1211 19.8465C11.1211 20.2465 11.3211 20.4465 11.5211 20.6465C11.6211 20.7465 11.9211 20.8465 12.1211 20.8465ZM6.62109 17.6465H17.6211V4.14648H6.62109V17.6465ZM7.62109 5.14648H16.6211V16.6465H7.62109V5.14648Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5566'>
          <rect width='24' height='24' fill='white' transform='translate(0.121094 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
