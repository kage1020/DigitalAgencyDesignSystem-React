import React from 'react';
import { IconProps } from '../../types';

export function CompleteOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5265)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.99023 12.1465C1.99023 17.6465 6.49023 22.1465 11.9902 22.1465C17.4902 22.1465 21.9902 17.6465 21.9902 12.1465C21.9902 6.64648 17.4902 2.14648 11.9902 2.14648C6.49023 2.14648 1.99023 6.64648 1.99023 12.1465ZM3.49023 12.1465C3.49023 7.44648 7.29023 3.64648 11.9902 3.64648C16.6902 3.64648 20.4902 7.44648 20.4902 12.1465C20.4902 16.8465 16.6902 20.6465 11.9902 20.6465C7.29023 20.6465 3.49023 16.8465 3.49023 12.1465ZM7.18945 12.1465L11.1895 16.1465L17.1895 10.1465L16.0895 9.14648L11.1895 14.0465L8.28945 11.0465L7.18945 12.1465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5265'>
          <rect width='24' height='24' fill='white' transform='translate(-0.00976562 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CompleteFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5270)'>
        <path
          d='M11.9902 2.14648C6.49023 2.14648 1.99023 6.64648 1.99023 12.1465C1.99023 17.6465 6.49023 22.1465 11.9902 22.1465C17.4902 22.1465 21.9902 17.6465 21.9902 12.1465C21.9902 6.64648 17.4902 2.14648 11.9902 2.14648ZM11.1902 16.1465L7.19023 12.1465L8.29023 11.0465L11.2902 14.0465L16.0902 9.14648L17.1902 10.2465L11.1902 16.1465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5270'>
          <rect width='24' height='24' fill='white' transform='translate(-0.00976562 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
