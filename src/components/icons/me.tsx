import React from 'react';
import { IconProps } from '../../types';

export function MeOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5856)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.8604 6.64648C15.8604 4.94648 14.5604 3.64648 12.8604 3.64648C11.1604 3.64648 9.86035 4.94648 9.86035 6.64648C9.86035 8.34648 11.1604 9.64648 12.8604 9.64648C14.5604 9.64648 15.8604 8.34648 15.8604 6.64648ZM8.36035 6.64648C8.36035 4.14648 10.3604 2.14648 12.8604 2.14648C15.3604 2.14648 17.3604 4.14648 17.3604 6.64648C17.3604 9.14648 15.3604 11.1465 12.8604 11.1465C10.3604 11.1465 8.36035 9.14648 8.36035 6.64648ZM20.3604 22.1466H21.8604H21.9604V20.9466C21.9604 16.7466 18.4604 13.2466 14.1604 13.2466H11.6604C7.36035 13.2466 3.86035 16.6466 3.86035 20.9466V22.1466H5.46035V20.9466C5.46035 17.5466 8.26035 14.7466 11.6604 14.7466H14.1604C17.5604 14.7466 20.3604 17.5466 20.3604 20.9466V22.1466Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5856'>
          <rect width='24' height='24' fill='white' transform='translate(0.860352 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function MeFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5861)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M17.3604 6.64648C17.3604 9.13177 15.3456 11.1465 12.8604 11.1465C10.3751 11.1465 8.36035 9.13177 8.36035 6.64648C8.36035 4.1612 10.3751 2.14648 12.8604 2.14648C15.3456 2.14648 17.3604 4.1612 17.3604 6.64648ZM14.0604 13.2462C18.3604 13.2462 21.8604 16.6462 21.8604 20.9462V22.1462H3.86035V20.9462C3.86035 16.6462 7.36035 13.1462 11.5604 13.2462H14.0604Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5861'>
          <rect width='24' height='24' fill='white' transform='translate(0.860352 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
