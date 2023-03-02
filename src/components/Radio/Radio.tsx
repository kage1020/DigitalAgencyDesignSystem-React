import React, { useState } from 'react'
import { twMerge as tm } from 'tailwind-merge'
import type { RadioProps } from 'types'

const Radio = ({
  className,
  variant = 'normal',
  name,
  label,
  options,
  value,
  required = false,
  disabled = false,
  helperText = '',
  errorText = '',
}: RadioProps) => {
  const [val, setVal] = useState(value ?? '')

  return (
    <div className={tm('text-sumi-900 dark:text-white', className)}>
      <div className='flex items-center'>
        <span
          className={tm(
            'mr-2 text-sm font-medium',
            val === '' && 'text-sun-800 dark:text-sun-500',
            disabled && 'text-sumi-500 dark:text-sumi-600'
          )}
        >
          {label}
        </span>
        {required && <span className='text-xs text-sun-800 dark:text-sun-500'>必須</span>}
        {!required && <span className='text-xs text-sumi-500 dark:text-sumi-600'>任意</span>}
      </div>
      <div className='grid gap-y-4 my-2'>
        {options.map((o) => (
          <label
            key={o}
            className={tm(
              'flex items-center',
              'rounded-lg outline outline-2 outline-offset-4',
              'outline-transparent',
              'focus-within:outline-wood-500',
              variant === 'normal' && ['p-2'],
              variant === 'tile' && [
                'p-4 border',
                'border-sumi-900 bg-white ',
                'dark:border-white dark:bg-sumi-900',
                val === o && ['border-2', 'border-sea-600', 'dark:border-sea-300'],
                required && val === '' && ['border-2', 'border-sun-800', 'border-sun-500'],
                disabled && ['border-sumi-300 text-sumi-500 bg-sumi-100', 'dark:text-sumi-600'],
              ]
            )}
          >
            <input
              className={tm(
                'mr-4 accent-sea-600 w-6 h-6',
                'outline-none',
                'peer',
                'dark:accent-sea-300',
                'invalid:accent-sun-800',
                'dark:invalid:accent-sun-500'
              )}
              type='radio'
              name={name}
              value={o}
              checked={val === o}
              required={required}
              disabled={disabled}
              onChange={(e) => {
                setVal(e.target.value)
              }}
            />
            <span
              className={tm(
                'w-full',
                variant === 'normal' && [
                  'peer-checked:text-sea-600',
                  'peer-invalid:text-sun-800',
                  'peer-disabled:text-sumi-500',
                  'dark:peer-checked:text-sea-300',
                  'dark:peer-invalid:text-sun-500',
                  'dark:peer-disabled:text-sumi-600',
                ]
              )}
            >
              {o}
            </span>
          </label>
        ))}
      </div>
      {helperText && (
        <span
          className={tm(
            'block text-xs mb-2 text-sumi-700 dark:text-sumi-400',
            disabled && 'text-sumi-500 dark:text-sumi-600'
          )}
        >
          {helperText}
        </span>
      )}
      {errorText && (
        <span className='block text-xs text-sun-800 dark:text-sun-500'>{errorText}</span>
      )}
    </div>
  )
}

export default Radio
