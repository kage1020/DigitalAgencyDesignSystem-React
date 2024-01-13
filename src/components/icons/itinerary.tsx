import React from 'react';
import { IconProps } from '../../types';

export function ItineraryOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5520)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.4776 19.5087L10.0809 20.3467C9.68086 20.6467 9.38086 21.1467 9.38086 21.6467H15.3809C15.3809 21.1467 15.0809 20.6467 14.6809 20.3467L13.2924 19.5136C13.4885 17.247 13.6828 14.7197 13.7809 13.3466L22.3809 16.1466V14.6466C22.3809 14.1466 22.0809 13.6466 21.6809 13.3466L13.9809 8.74658V6.44658C13.9809 5.04658 13.5809 3.84658 13.1809 3.14658C12.7809 2.44658 12.0809 2.44658 11.5809 3.14658C11.1809 3.84658 10.7809 5.04658 10.7809 6.44658V8.74658L3.08086 13.3466C2.68086 13.6466 2.38086 14.1466 2.38086 14.6466V16.1466L10.9809 13.2466C11.0803 14.6389 11.2787 17.2181 11.4776 19.5087Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5520'>
          <rect width='24' height='24' fill='white' transform='translate(0.380859 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ItineraryFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5525)'>
        <path
          d='M15.5826 21.8467C15.6826 21.1467 15.3826 20.4467 14.7826 20.0467L13.5826 19.2467C13.7826 17.1467 13.9826 14.9467 14.0826 13.4467L22.6826 16.3467C22.6826 15.1467 22.7826 13.6467 21.9826 13.1467C20.7826 12.4467 14.2826 8.54668 14.2826 8.54668C14.5826 4.34668 13.4826 2.34668 12.4826 2.34668C11.3826 2.34668 10.3826 4.34668 10.6826 8.54668C10.6826 8.54668 4.18261 12.4467 2.98261 13.1467C2.08261 13.6467 2.28261 15.1467 2.28261 16.3467L10.8826 13.4467C10.9826 14.9467 11.1826 17.1467 11.3826 19.2467L9.98261 20.1467C9.38261 20.4467 9.08261 21.1467 9.18261 21.8467H15.5826Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5525'>
          <rect width='24' height='24' fill='white' transform='translate(0.380859 0.146484)' />
        </clipPath>
      </defs>
    </svg>
  );
}
