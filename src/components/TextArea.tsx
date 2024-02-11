import React, { useState } from 'react';
import { TextAreaProps } from '../types';
import { cn } from '../libs/util';

export default function TextField({
  className,
  label,
  value,
  supportText,
  errorText,
  required = false,
  maxLength = 100,
  ...props
}: TextAreaProps) {
  const [count, setCount] = useState(0);

  return (
    <div className={cn(className)}>
      <label className='block'>
        {label && (
          <p className='text-label-1 mb-1'>
            {label}
            {required && <span className='text-red-800 ml-1'>必須</span>}
          </p>
        )}
        <textarea
          className={
            'px-2 py-[12px] w-full border border-grey-900 bg-white rounded-sm text-base-l focus:outline-2 focus:outline-offset-4 focus:outline-yellow-700 invalid:border-red-800 disabled:border-grey-420 disabled:bg-grey-50'
          }
          required={required}
          onChange={(e) => setCount(e.target.value.length)}
          {...props}
        />
      </label>
      <p className='text-right'>
        {count}/{maxLength}
      </p>
      {supportText && <p>{supportText}</p>}
      {errorText && <p className='text-red-800'>{errorText}</p>}
    </div>
  );
}
