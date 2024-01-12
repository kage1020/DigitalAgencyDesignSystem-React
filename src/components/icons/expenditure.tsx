import React from 'react';
import { IconProps } from '../../types';

export function ExpenditureOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5612)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.4902 7.14648H20.1902C21.1902 7.14648 21.9902 7.94648 22.0902 8.84648V15.5465V18.9465C22.0902 19.9465 21.2902 20.7465 20.2902 20.7465H3.79023C2.79023 20.7465 1.99023 19.9465 1.99023 18.9465V5.44648C1.99023 4.44648 2.79023 3.64648 3.69023 3.64648H17.6902C18.6902 3.64648 19.4902 4.44648 19.4902 5.44648V7.14648ZM17.6902 5.14648H3.49023V19.1465H20.4902V8.64648H5.99023V7.14648H17.9902V5.14648H17.6902ZM11.9895 13.0465L13.5895 10.1465H14.7895L13.0895 13.1465H14.4895V14.1465H12.4895V15.1465H14.4895V16.1465H12.4895V17.6465H11.4895V16.1465H9.48945V15.1465H11.4895V14.1465H9.48945V13.1465H10.8895L9.18945 10.1465H10.3895L11.9895 13.0465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5612'>
          <rect width='24' height='24' fill='white' transform='translate(-0.00976562 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ExpenditureFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5617)'>
        <path
          d='M5.99023 8.14648V6.64648H19.4902V5.44648C19.4902 4.44648 18.6902 3.64648 17.6902 3.64648H3.69023C2.79023 3.64648 1.99023 4.44648 1.99023 5.44648V18.9465C1.99023 19.9465 2.79023 20.7465 3.79023 20.7465H20.2902C21.2902 20.7465 22.0902 19.9465 22.0902 18.9465V9.94648C22.0902 8.94648 21.2902 8.14648 20.2902 8.14648H5.99023ZM14.4902 13.6465V14.6465H12.4902V15.6465H14.4902V16.6465H12.4902V18.1465H11.4902V16.6465H9.49023V15.6465H11.4902V14.6465H9.49023V13.6465H10.8902L9.19023 10.6465H10.2902L11.8902 13.5465L13.4902 10.6465H14.5902L12.8902 13.6465H14.4902Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5617'>
          <rect width='24' height='24' fill='white' transform='translate(-0.00976562 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
