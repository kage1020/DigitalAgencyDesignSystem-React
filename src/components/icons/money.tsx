import React from 'react';
import { IconProps } from '../../types';

export function MoneyOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid='money-outlined'
    >
      <g clipPath='url(#clip0_115_5671)'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M2.51172 12.1465C2.51172 17.6465 7.01172 22.1465 12.5117 22.1465C18.0117 22.1465 22.5117 17.6465 22.5117 12.1465C22.5117 6.64648 18.0117 2.14648 12.5117 2.14648C7.01172 2.14648 2.51172 6.64648 2.51172 12.1465ZM4.01172 12.1465C4.01172 7.44648 7.81172 3.64648 12.5117 3.64648C17.2117 3.64648 21.0117 7.44648 21.0117 12.1465C21.0117 16.8465 17.2117 20.6465 12.5117 20.6465C7.81172 20.6465 4.01172 16.8465 4.01172 12.1465ZM12.5133 11.8465L15.2133 7.14648H16.9133L14.1133 12.1465H16.5133V13.1465H13.2133V14.6465H16.5133V15.6465H13.2133V18.1465H11.7133V15.6465H8.51328V14.6465H11.7133V13.1465H8.51328V12.1465H10.9133L8.11328 7.14648H9.81328L12.5133 11.8465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5671'>
          <rect width='24' height='24' fill='white' transform='translate(0.511719 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function MoneyFilled({ className, size = 24, color }: IconProps) {
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
      data-testid='money-filled'
    >
      <g clipPath='url(#clip0_115_5676)'>
        <path
          d='M12.5117 2.14648C7.01172 2.14648 2.51172 6.64648 2.51172 12.1465C2.51172 17.6465 7.01172 22.1465 12.5117 22.1465C18.0117 22.1465 22.5117 17.6465 22.5117 12.1465C22.5117 6.64648 18.0117 2.14648 12.5117 2.14648ZM16.5117 11.7465V12.7465H13.2117V14.5465H16.5117V15.5465H13.2117V18.1465H11.9117V15.5465H8.51172V14.5465H11.8117V12.7465H8.51172V11.7465H11.1117L8.31172 7.14648H9.81172L12.5117 11.5465L15.2117 7.14648H16.7117L13.9117 11.7465H16.5117Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5676'>
          <rect width='24' height='24' fill='white' transform='translate(0.511719 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
