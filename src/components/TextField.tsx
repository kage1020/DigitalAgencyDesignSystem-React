import React from 'react';
import { TextFieldProps } from '../types';
import { cn } from '../libs/util';

export default function TextField({
  className,
  label,
  value,
  supportText,
  errorText,
  required = false,
  ...props
}: TextFieldProps) {
  return (
    <div className={cn(className)}>
      <label className='block'>
        {label && (
          <p className='text-label-1 mb-1'>
            {label}
            {required && <span className='text-red-800 ml-1'>必須</span>}
          </p>
        )}
        <input
          className={
            'px-2 py-[12px] w-full border border-grey-900 bg-white rounded-sm text-base-l focus:outline-2 focus:outline-offset-4 focus:outline-yellow-700 invalid:border-red-800 disabled:border-grey-420 disabled:bg-grey-50'
          }
          required={required}
          {...props}
        />
      </label>
      {supportText && <p>{supportText}</p>}
      {errorText && <p className='text-red-800'>{errorText}</p>}
    </div>
  );
}
