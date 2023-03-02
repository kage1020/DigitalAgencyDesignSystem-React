import React, { useState } from 'react'
import { twMerge as tm } from 'tailwind-merge'
import type { TextAreaProps } from 'types'

const TextArea = ({
  className,
  name,
  label,
  placeholder = '',
  value = '',
  required = false,
  disabled = false,
  helperText = '',
  errorText = '',
}: TextAreaProps) => {
  const [val, setVal] = useState(value)
  // const [count, setCount] = useState(0)

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
      <textarea
        className='
          block px-4 py-3 my-2 font-noto
          border border-solid rounded-lg
          outline outline-2 outline-offset-4
          bg-white border-sumi-900 outline-transparent
          placeholder:text-sumi-600
          focus:outline-wood-500
          invalid:border-sun-800 invalid:border-2
          disabled:bg-sumi-100
          dark:bg-sumi-900 dark:border-white
          dark:placeholder:text-sumi-500
          dark:invalid:border-sun-500
          dark:disabled:bg-sumi-800'
        name={name}
        placeholder={placeholder}
        value={val}
        required={required}
        disabled={disabled}
        onChange={(e) => {
          setVal(e.target.value)
        }}
      ></textarea>
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

export default TextArea
