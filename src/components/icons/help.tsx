import React from 'react';
import { IconProps } from '../../types';

export function HelpOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid='help-outlined'
    >
      <g clipPath='url(#clip0_115_5305)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.8604 22.1465C7.36035 22.1465 2.86035 17.6465 2.86035 12.1465C2.86035 6.64648 7.36035 2.14648 12.8604 2.14648C18.3604 2.14648 22.8604 6.64648 22.8604 12.1465C22.8604 17.6465 18.3604 22.1465 12.8604 22.1465ZM12.8604 3.64648C8.16035 3.64648 4.36035 7.44648 4.36035 12.1465C4.36035 16.8465 8.16035 20.6465 12.8604 20.6465C17.5604 20.6465 21.3604 16.8465 21.3604 12.1465C21.3604 7.44648 17.5604 3.64648 12.8604 3.64648ZM12.8604 17.6465C13.4126 17.6465 13.8604 17.1988 13.8604 16.6465C13.8604 16.0942 13.4126 15.6465 12.8604 15.6465C12.3081 15.6465 11.8604 16.0942 11.8604 16.6465C11.8604 17.1988 12.3081 17.6465 12.8604 17.6465ZM12.1604 14.1466H13.6604C13.5604 13.1466 13.9604 12.1466 14.6604 11.4466C16.7604 9.7466 15.9604 6.4466 13.2604 6.1466C11.5604 5.8466 9.86035 7.2466 9.86035 9.0466H11.3604C11.3604 7.4466 13.8604 7.1466 14.3604 8.5466C14.4604 8.9466 14.5604 9.6466 13.7604 10.3466C12.6604 11.3466 12.0604 12.6466 12.1604 14.1466Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5305'>
          <rect width='24' height='24' fill='white' transform='translate(0.860352 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function HelpFilled({ className, size = 24, color }: IconProps) {
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
      data-testid='help-filled'
    >
      <g clipPath='url(#clip0_115_5311)'>
        <path
          d='M12.8604 2.14648C7.36035 2.14648 2.86035 6.64648 2.86035 12.1465C2.86035 17.6465 7.36035 22.1465 12.8604 22.1465C18.3604 22.1465 22.8604 17.6465 22.8604 12.1465C22.8604 6.64648 18.3604 2.14648 12.8604 2.14648ZM12.8604 17.6465C12.2604 17.6465 11.8604 17.2465 11.8604 16.6465C11.8604 16.0465 12.2604 15.6465 12.8604 15.6465C13.4604 15.6465 13.8604 16.0465 13.8604 16.6465C13.8604 17.2465 13.4604 17.6465 12.8604 17.6465ZM14.7604 11.4465C13.9604 12.1465 13.5604 13.1465 13.6604 14.1465H12.1604C12.0604 12.6465 12.6604 11.3465 13.7604 10.3465C14.5604 9.64648 14.4604 8.94648 14.3604 8.54648C13.8604 7.14648 11.3604 7.44648 11.3604 9.04648H9.86035C9.86035 7.24648 11.5604 5.84648 13.2604 6.14648C15.9604 6.54648 16.7604 9.84648 14.7604 11.4465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5311'>
          <rect width='24' height='24' fill='white' transform='translate(0.860352 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
