import React from 'react';
import { IconProps } from '../../types';

export function CertificationWithSealOutlined({
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
      style={{ color: color }}
      viewBox='0 0 25 25'
      fill='none'
    >
      <g clipPath='url(#clip0_115_5405)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M17.0809 2.5708H4.38086V22.5708H20.3809V5.7708L17.0809 2.5708ZM5.88086 21.0708V4.0708H16.3809V6.5708H18.8809V21.0708H5.88086ZM16.8809 8.0708H7.88086V9.5708H16.8809V8.0708ZM7.88086 11.0708H16.8809V12.5708H7.88086V11.0708ZM12.3809 14.0708H7.88086V15.5708H12.3809V14.0708ZM17.3809 17.5708C17.3809 18.6754 16.4854 19.5708 15.3809 19.5708C14.2763 19.5708 13.3809 18.6754 13.3809 17.5708C13.3809 16.4662 14.2763 15.5708 15.3809 15.5708C16.4854 15.5708 17.3809 16.4662 17.3809 17.5708Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5405'>
          <rect width='24' height='24' fill='white' transform='translate(0.380859 0.570801)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CertificationWithSealFilled({
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
      style={{ color: color }}
      viewBox='0 0 25 25'
      fill='none'
    >
      <g clipPath='url(#clip0_115_5413)'>
        <path
          d='M17.0809 2.5708H4.38086V22.5708H20.3809V5.7708L17.0809 2.5708ZM11.8809 16.1708H7.38086V14.8708H11.8809V16.1708ZM15.3809 20.5708C14.2809 20.5708 13.3809 19.6708 13.3809 18.5708C13.3809 17.4708 14.2809 16.5708 15.3809 16.5708C16.4809 16.5708 17.3809 17.4708 17.3809 18.5708C17.3809 19.6708 16.4809 20.5708 15.3809 20.5708ZM17.3809 13.2708H7.38086V11.9708H17.3809V13.2708ZM17.3809 10.1708H7.38086V8.8708H17.3809V10.1708ZM16.2809 6.8708V3.8708L19.2809 6.8708H16.2809Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_115_5413'>
          <rect width='24' height='24' fill='white' transform='translate(0.380859 0.570801)' />
        </clipPath>
      </defs>
    </svg>
  );
}
