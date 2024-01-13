import React from 'react';
import { IconProps } from '../../types';

export function SealCertificateOutlined({
  className,
  size = 24,
  color = 'currentColor',
}: IconProps) {
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
      <g clipPath='url(#clip0_115_5429)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.751 4.5708H1.75098V20.5708H22.751V7.5708L19.751 4.5708ZM3.25098 19.0708V6.0708H18.751V8.5708H21.251V19.0708H3.25098ZM7.75098 13.0708C8.85555 13.0708 9.75098 12.1754 9.75098 11.0708C9.75098 9.96623 8.85555 9.0708 7.75098 9.0708C6.64641 9.0708 5.75098 9.96623 5.75098 11.0708C5.75098 12.1754 6.64641 13.0708 7.75098 13.0708ZM11.751 8.5708H17.251V10.0708H11.751V8.5708ZM18.851 15.0708H5.75098V16.5708H18.851V15.0708ZM11.751 11.7705H18.851V13.2705H11.751V11.7705Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5429'>
          <rect width='24' height='24' fill='white' transform='translate(0.250977 0.570801)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SealCertificateFilled({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <g clipPath='url(#clip0_115_5437)'>
        <path
          d='M19.251 5.0708H2.25098V20.0708H22.251V8.0708C21.051 6.8708 20.451 6.2708 19.251 5.0708ZM11.751 8.6708H16.751V9.9708H11.751V8.6708ZM7.65098 8.6708C8.65098 8.6708 9.45098 9.4708 9.45098 10.5708C9.45098 11.5708 8.65098 12.3708 7.65098 12.3708C6.65098 12.3708 5.75098 11.5708 5.75098 10.5708C5.75098 9.4708 6.55098 8.6708 7.65098 8.6708ZM18.351 16.4708H5.75098V15.1708H18.351V16.4708ZM18.351 13.1708H11.751V11.8708H18.351V13.1708ZM18.251 9.0708V6.5708L20.751 9.0708H18.251Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5437'>
          <rect width='24' height='24' fill='white' transform='translate(0.250977 0.570801)' />
        </clipPath>
      </defs>
    </svg>
  );
}
