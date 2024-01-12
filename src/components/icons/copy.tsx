import React from 'react';
import { IconProps } from '../../types';

export function CopyOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5254)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.55566 18.1465H20.0557V2.64648H7.55566V18.1465ZM18.5557 16.6465H9.05566V4.14648H18.5557V16.6465ZM4.05566 21.6467H15.8557V20.1467H5.55566V6.84668H4.05566V21.6467Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5254'>
          <rect width='24' height='24' fill='white' transform='translate(0.0556641 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CopyFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5259)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.55566 2.64648H20.0557V18.1465H7.55566V2.64648ZM5.55566 20.1467H15.8557V21.6467H4.05566V6.84668H5.55566V20.1467Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5259'>
          <rect width='24' height='24' fill='white' transform='translate(0.0556641 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
