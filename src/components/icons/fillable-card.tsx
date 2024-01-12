import React from 'react';
import { IconProps } from '../../types';

export function FillableCardOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5485)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.51172 16.6465H12.0117V15.1465H3.01172V6.14648H20.5117V8.14648H22.0117V4.64648H1.51172V16.6465ZM12.0117 8.14648H19.0117V9.64648H12.0117V8.14648ZM16.5117 11.6465H12.0117V13.1465H16.5117V11.6465ZM4.51172 10.5467L7.01172 13.0467L10.6117 9.44668L9.51172 8.34668L7.01172 10.9467L5.61172 9.44668L4.51172 10.5467ZM21.0117 13.5465L13.9117 20.6465H12.5117V19.2465L19.6117 12.1465L21.0117 13.5465ZM20.2812 11.4326L21.6954 10.0184L23.1096 11.4326L21.6954 12.8468L20.2812 11.4326Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5485'>
          <rect width='24' height='24' fill='white' transform='translate(0.511719 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function FillableCardFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5494)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M22.5117 8.34648V4.64648H2.01172V16.6465H14.2117L22.5117 8.34648ZM10.5117 9.34648L7.01172 12.8465L4.51172 10.4465L5.51172 9.54648L7.01172 11.0465L9.51172 8.44648L10.5117 9.34648ZM16.0117 13.0465H12.5117V11.7465H16.0117V13.0465ZM18.5117 9.54648H12.5117V8.24648H18.5117V9.54648ZM20.1117 12.1465L13.0117 19.2465V20.6465H14.4117L21.5117 13.5465L20.1117 12.1465ZM23.6125 11.4464L22.2125 12.8464L20.8125 11.4464L22.2125 10.0464L23.6125 11.4464Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5494'>
          <rect width='24' height='24' fill='white' transform='translate(0.511719 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
