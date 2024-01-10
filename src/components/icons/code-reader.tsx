import React from 'react';
import { IconProps } from '../../types';

export function CodeReaderOutlinedIcon({
  className,
  size = 24,
  color = 'currentColor',
}: IconProps) {
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
      <g clipPath='url(#clip0_115_5799)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.62109 7.64648H4.12109V4.14648H7.62109V2.64648H2.62109V7.64648ZM2.62109 21.6465H7.62109V20.1465H4.12109V16.6465H2.62109V21.6465ZM21.6211 21.6465H16.6211V20.1465H20.1211V16.6465H21.6211V21.6465ZM20.1211 7.64648H21.6211V2.64648H16.6211V4.14648H20.1211V7.64648ZM9.62109 7.64648V9.64648H7.62109V7.64648H9.62109ZM11.1211 6.14648H6.12109V11.1465H11.1211V6.14648ZM16.6211 9.64648V7.64648H14.6211V9.64648H16.6211ZM13.1211 6.14648H18.1211V11.1465H13.1211V6.14648ZM9.62109 14.6465V16.6465H7.62109V14.6465H9.62109ZM11.1211 13.1465H6.12109V18.1465H11.1211V13.1465ZM13.1211 13.1465H18.1211V18.1465H13.1211V13.1465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5799'>
          <rect width='24' height='24' fill='white' transform='translate(0.121094 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CodeReaderFilledIcon({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5810)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.12109 21.1465V3.14648H21.1211V21.1465H3.12109ZM6.12109 18.1465H11.1211V13.1465H6.12109V18.1465ZM6.12109 11.1465H11.1211V6.14648H6.12109V11.1465ZM18.1211 6.14648H13.1211V11.1465H18.1211V6.14648ZM13.1211 18.1465H18.1211V13.1465H13.1211V18.1465ZM14.3203 7.34668H16.8203V9.84668H14.3203V7.34668ZM7.32031 14.3467H9.82031V16.8467H7.32031V14.3467ZM9.82031 7.34668H7.32031V9.84668H9.82031V7.34668Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5810'>
          <rect width='24' height='24' fill='white' transform='translate(0.121094 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
