import React from 'react'
import Input from 'components/Input/Input'
import { twMerge as tm } from 'tailwind-merge'
import type { TextFieldProps } from 'types'

const TextField = ({
  className,
  name,
  type = 'text',
  label,
  placeholder = 'プレイスホルダー',
  value = '',
  required = false,
  disabled = false,
  helperText = '',
  errorText = '',
}: TextFieldProps) => {
  return (
    <label className={tm('text-sumi-900 dark:text-white', className)}>
      <div className='flex items-center'>
        <span
          className={tm(
            'mr-2 text-sm font-medium',
            errorText && 'text-sun-800 dark:text-sun-500',
            disabled && 'text-sumi-500 dark:text-sumi-600'
          )}
        >
          {label}
        </span>
        {required && <span className='text-xs text-sun-800 dark:text-sun-500'>必須</span>}
        {!required && <span className='text-xs text-sumi-500 dark:text-sumi-600'>任意</span>}
      </div>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
      />
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
    </label>
  )
}

export default TextField
