import React, { useState } from 'react'
import { twMerge as tm } from 'tailwind-merge'
import type { InputProps } from 'types'

const Input = ({
  className,
  name,
  type = 'text',
  placeholder = 'プレイスホルダー',
  value = '',
  required = false,
  disabled = false,
}: InputProps) => {
  const [val, setVal] = useState(value)
  return (
    <input
      className={tm(
        'block px-4 py-3 my-2 font-noto',
        'border border-solid rounded-lg',
        'outline outline-2 outline-offset-4',
        'bg-white border-sumi-900 outline-transparent text-sumi-900',
        'placeholder:text-sumi-600',
        'focus:outline-wood-500',
        'invalid:border-sun-800 invalid:border-2',
        'disabled:bg-sumi-100',
        'dark:bg-sumi-900 dark:border-white dark:text-white',
        'dark:placeholder:text-sumi-500',
        'dark:invalid:border-sun-500',
        'dark:disabled:bg-sumi-800',
        className
      )}
      name={name}
      type={type}
      value={val}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onChange={(e) => {
        setVal(e.target.value)
      }}
    />
  )
}

export default Input
