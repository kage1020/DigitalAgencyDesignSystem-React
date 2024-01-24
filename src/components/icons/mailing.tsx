import React from 'react';
import { IconProps } from '../../types';

export function MailingOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid='mailing-outlined'
    >
      <g clipPath='url(#clip0_115_5551)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.4902 2.64648C19.0902 2.74648 21.9902 5.74648 21.9902 9.34648V17.1465H12.9902V22.1465H10.9902V17.1465H8.59023H1.99023V9.04648C1.99023 5.54648 4.89023 2.64648 8.49023 2.64648H15.4902ZM3.49023 9.04648V15.6465H8.59023V9.34648C8.59023 7.24648 9.49023 5.34648 10.9902 4.14648H8.39023C5.69023 4.14648 3.49023 6.34648 3.49023 9.04648ZM11.0902 15.6465H20.3902V9.34648C20.3902 6.44648 18.0902 4.14648 15.1902 4.14648C12.2902 4.14648 9.99023 6.44648 9.99023 9.34648V15.6465H11.0902ZM12.291 9.54639H18.591V11.0464H12.291V9.54639Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5551'>
          <rect width='24' height='24' fill='white' transform='translate(-0.00976562 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function MailingFilled({ className, size = 24, color }: IconProps) {
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
      data-testid='mailing-filled'
    >
      <g clipPath='url(#clip0_115_5556)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.39023 2.64648H11.4902C9.49023 4.04648 8.19023 6.34648 8.19023 8.84648V16.6465H1.99023V9.04648C1.99023 5.54648 4.89023 2.64648 8.39023 2.64648ZM12.9918 22.1465H10.9918V16.5465H9.5918V8.84648C9.5918 5.54648 12.2918 2.74648 15.5918 2.64648H15.7918C19.1918 2.64648 21.9918 5.34648 21.9918 8.84648V9.34648V16.6465H12.9918V22.1465ZM12.4918 10.9465H18.9918V9.64648H12.4918V10.9465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5556'>
          <rect width='24' height='24' fill='white' transform='translate(-0.00976562 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
