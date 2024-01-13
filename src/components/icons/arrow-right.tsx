import React from 'react';
import { IconProps } from '../../types';

export function ArrowRightOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5375)'>
        <path
          d='M9.05566 21.1465L8.05566 20.1465L16.0557 12.1465L8.05566 4.14648L9.05566 3.14648L18.1557 12.1465L9.05566 21.1465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5375'>
          <rect width='24' height='24' fill='white' transform='translate(0.0556641 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ArrowRightFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5378)'>
        <path
          d='M9.05723 2.74658L7.65723 4.14658L15.6572 12.1466L7.65723 20.1466L9.05723 21.5466L18.4572 12.1466L9.05723 2.74658Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5378'>
          <rect width='24' height='24' fill='white' transform='translate(0.0556641 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
