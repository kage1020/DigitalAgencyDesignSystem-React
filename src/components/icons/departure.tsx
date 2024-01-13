import React from 'react';
import { IconProps } from '../../types';

export function DepartureOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5529)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.1164 4.94668C19.9164 4.84668 20.7164 4.94668 21.5164 5.14668C22.3423 5.42199 22.3261 5.86574 22.3178 6.09149C22.3171 6.11173 22.3164 6.13022 22.3164 6.14668C22.1623 6.53191 21.5927 6.91715 21.2936 7.11944C21.2045 7.1797 21.1394 7.22373 21.1164 7.24668L7.91641 13.3467C7.41641 13.5467 6.71641 13.7467 6.11641 13.7467C5.41641 13.7467 4.71641 13.5467 4.11641 12.9467L2.31641 11.1467L3.71641 10.4467L5.81641 11.4467L9.31641 9.64668L5.71641 5.14668L7.71641 4.34668L13.1164 7.64668C14.4164 6.94668 16.5164 5.84668 16.9164 5.64668C17.8164 5.24668 18.3164 5.04668 19.1164 4.94668ZM2.31641 19.6465H15.3164V21.1465H2.31641V19.6465Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5529'>
          <rect width='24' height='24' fill='white' transform='translate(0.316406 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function DepartureFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5534)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.1164 4.74639C20.0164 4.64639 20.8164 4.74639 21.6164 4.94639C22.7164 5.24639 22.5164 6.04639 22.5164 5.94639C22.4227 6.60256 21.626 6.99512 21.1971 7.20644C21.1685 7.22056 21.1415 7.23386 21.1164 7.24639L7.91641 13.3464C7.31641 13.6464 6.61641 13.7464 6.01641 13.7464C5.11641 13.7464 4.31641 13.5464 3.81641 12.9464L1.81641 10.9464L3.71641 10.1464L5.81641 11.1464L8.91641 9.54639L5.31641 5.04639L7.71641 4.04639L13.1164 7.44639C14.2164 6.8464 16.4163 5.74643 16.8164 5.5464L16.8164 5.54639C17.8164 5.04639 18.2164 4.84639 19.1164 4.74639ZM2.01562 19.3467H15.5156V21.3467H2.01562V19.3467Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5534'>
          <rect width='24' height='24' fill='white' transform='translate(0.316406 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
