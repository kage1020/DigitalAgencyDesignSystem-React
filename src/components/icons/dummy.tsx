import React from 'react';
import { IconProps } from '../../types';

export function DummyOutlined({ className, size = 24, color = 'currentColor' }: IconProps) {
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
      <mask
        id='mask0_17903_18266'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_17903_18266)'>
        <path
          d='M4.55382 20.5C4.31409 20.4397 4.09358 20.3089 3.8923 20.1077C3.69103 19.9064 3.56027 19.6859 3.5 19.4461L19.4461 3.5C19.7064 3.57052 19.9294 3.70128 20.1153 3.8923C20.3012 4.08333 20.4346 4.30384 20.5153 4.55383L4.55382 20.5ZM3.5 14.1134V12.0058L12.0057 3.5H14.1134L3.5 14.1134ZM3.5 6.67303V5.3077C3.5 4.80257 3.675 4.375 4.025 4.025C4.375 3.675 4.80257 3.5 5.3077 3.5H6.67302L3.5 6.67303ZM17.3269 20.5L20.5 17.3269V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6922 20.5H17.3269ZM9.88655 20.5L20.5 9.88655V11.9942L11.9942 20.5H9.88655Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
}
