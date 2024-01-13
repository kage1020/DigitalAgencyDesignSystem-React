import React from 'react';
import { IconProps } from '../../types';

export function TaxOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5648)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.6416 22.1465C7.1416 22.1465 2.6416 17.6465 2.6416 12.1465C2.6416 6.64648 7.1416 2.14648 12.6416 2.14648C18.1416 2.14648 22.6416 6.64648 22.6416 12.1465C22.6416 17.6465 18.1416 22.1465 12.6416 22.1465ZM12.6416 3.64648C7.9416 3.64648 4.1416 7.44648 4.1416 12.1465C4.1416 16.8465 7.9416 20.6465 12.6416 20.6465C17.3416 20.6465 21.1416 16.8465 21.1416 12.1465C21.1416 7.44648 17.3416 3.64648 12.6416 3.64648ZM9.9416 8.64648H5.6416V9.64648H7.3416V15.6465H8.3416V9.64648H9.9416V8.64648ZM13.4424 13.6465H10.7424L10.0424 15.6465H8.94238L11.5424 8.64648H12.6424L15.1424 14.9465L16.5424 12.0465L14.8424 8.64648H15.9424L17.1424 11.1465L18.2424 8.64648H19.3424L17.6424 12.0465L19.3424 15.6465H18.2424L17.0424 13.0465L15.8424 15.6465H14.2424L13.4424 13.6465ZM13.1424 12.6465L12.1424 10.0465L11.1424 12.6465H13.1424Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5648'>
          <rect width='24' height='24' fill='white' transform='translate(0.641602 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function TaxFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5654)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M22.6416 12.1465C22.6416 17.6465 18.1416 22.1465 12.6416 22.1465C7.1416 22.1465 2.6416 17.6465 2.6416 12.1465C2.6416 6.64648 7.1416 2.14648 12.6416 2.14648C18.1416 2.14648 22.6416 6.64648 22.6416 12.1465ZM15.0416 15.0465L12.6416 8.64648V8.74648H11.5416L8.9416 15.7465H10.0416L10.7416 13.7465H13.4416L14.2416 15.7465H15.8416L17.0416 13.1465L18.2416 15.7465H19.3416L17.6416 12.1465L19.3416 8.74648H18.2416L17.0416 11.2465L15.8416 8.74648H14.7416L16.4416 12.1465L15.0416 15.0465ZM9.9416 8.64648H5.6416V9.64648H7.3416V15.6465H8.3416V9.64648H9.9416V8.64648ZM11.1416 12.6464L12.1416 10.0464L13.1416 12.6464H11.1416Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5654'>
          <rect width='24' height='24' fill='white' transform='translate(0.641602 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
