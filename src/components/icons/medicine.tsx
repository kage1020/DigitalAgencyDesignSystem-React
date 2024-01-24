import React from 'react';
import { IconProps } from '../../types';

export function MedicineOutlined({ className, size = 24, color }: IconProps) {
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
      data-testid='medicine-outlined'
    >
      <g clipPath='url(#clip0_115_5713)'>
        <path
          d='M20.0525 4.34648C18.9525 3.24648 17.4525 2.64648 15.8525 2.64648C14.2525 2.64648 12.8525 3.24648 11.6525 4.34648L4.45254 11.5465C2.15254 13.8465 2.15254 17.5465 4.45254 19.8465C5.55254 20.9465 7.05254 21.5465 8.65254 21.5465C10.1525 21.5465 11.6525 20.9465 12.8525 19.8465L20.0525 12.6465C21.1525 11.5465 21.7525 10.0465 21.7525 8.44648C21.7525 6.94648 21.1525 5.44648 20.0525 4.34648ZM11.7525 18.8465C10.0525 20.5465 7.25254 20.5465 5.55254 18.8465C3.85254 17.1465 3.85254 14.3465 5.55254 12.6465L8.65254 9.54648L14.8525 15.7465L11.7525 18.8465ZM18.9525 11.6465L15.8525 14.7465L9.65254 8.54648L12.7525 5.44648C13.6525 4.64648 14.7525 4.14648 15.8525 4.14648C17.0525 4.14648 18.1525 4.64648 18.9525 5.44648C19.7525 6.24648 20.2525 7.34648 20.2525 8.54648C20.2525 9.64648 19.7525 10.7465 18.9525 11.6465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5713'>
          <rect width='24' height='24' fill='white' transform='translate(0.250977 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function MedicineFilled({ className, size = 24, color }: IconProps) {
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
      data-testid='medicine-filled'
    >
      <g clipPath='url(#clip0_115_5716)'>
        <path
          d='M20.2502 4.14668C19.0502 2.94668 17.5502 2.34668 15.9502 2.34668C14.3502 2.34668 12.7502 2.94668 11.6502 4.14668L4.2502 11.4467C3.0502 12.6467 2.4502 14.1467 2.4502 15.7467C2.4502 17.3467 3.0502 18.9467 4.2502 20.0467C5.4502 21.2467 6.9502 21.8467 8.5502 21.8467C10.1502 21.8467 11.7502 21.2467 12.8502 20.0467L20.0502 12.8467C21.2502 11.6467 21.8502 10.1467 21.8502 8.54668C21.9502 6.84668 21.3502 5.34668 20.2502 4.14668ZM19.9502 8.54668C19.9502 9.64668 19.5502 10.6467 18.7502 11.4467L15.8502 14.3467L10.0502 8.54668L12.9502 5.64668C13.7502 4.84668 14.7502 4.44668 15.8502 4.44668C16.9502 4.44668 17.9502 4.84668 18.7502 5.64668C19.5502 6.44668 19.9502 7.44668 19.9502 8.54668Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5716'>
          <rect width='24' height='24' fill='white' transform='translate(0.250977 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
