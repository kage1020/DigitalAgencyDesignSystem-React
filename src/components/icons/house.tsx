import React from 'react';
import { IconProps } from '../../types';

export function HouseOutlined({ className, size = 24, color }: IconProps) {
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
      <g clipPath='url(#clip0_115_5743)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.1855 2.14648L23.1855 10.8465L22.2855 12.0465L20.6855 10.7465V21.6465H19.1855V9.54648L12.1855 4.14648L5.18555 9.54648V21.6465H3.68555V10.7465L2.08555 12.0465L1.18555 10.8465L12.1855 2.14648ZM16.6855 10.6465V19.6465H7.68555V10.6465H16.6855ZM11.3855 15.9465H9.18555V18.1465H11.3855V15.9465ZM12.9855 15.9465V18.1465H15.1855V15.9465H12.9855ZM12.9855 14.4465H15.1855V12.1465H12.9855V14.4465ZM11.4855 14.3465V12.1465H9.18555V14.3465H11.4855Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5743'>
          <rect width='24' height='24' fill='white' transform='translate(0.185547 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function HouseFilled({ className, size = 24, color }: IconProps) {
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
      <g clipPath='url(#clip0_115_5748)'>
        <path
          d='M1.18555 10.8465L2.08555 12.0465L4.18555 10.3465V21.6465H20.1855V10.3465L22.2855 12.0465L23.1855 10.8465L12.1855 2.14648L1.18555 10.8465ZM11.1855 18.6465H8.68555V16.1465H11.1855V18.6465ZM11.1855 14.1465H8.68555V11.6465H11.1855V14.1465ZM13.1855 11.6465H15.6855V14.1465H13.1855V11.6465ZM13.1855 16.1465H15.6855V18.6465H13.1855V16.1465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5748'>
          <rect width='24' height='24' fill='white' transform='translate(0.185547 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
