import React from 'react'
import { twMerge as tm } from 'tailwind-merge'
import type { ButtonProps } from 'types'

const Button = ({
  className,
  variant = 'primary',
  disabled = false,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={tm(
        'flex justify-center items-center p-4',
        'font-noto font-bold leading-6 tracking-wider',
        'rounded-lg border',
        'outline outline-2 outline-offset-4',
        variant === 'primary' && [
          'bg-sea-600 border-transparent text-white outline-transparent',
          'hover:bg-sea-darken-600',
          'active:bg-sea-darken-600',
          'focus:bg-sea-600 focus:outline-wood-500',
          'disabled:bg-sumi-500',
          'dark:bg-sea-300',
          'dark:hover:bg-sea-darken-300',
          'dark:active:bg-sea-darken-300',
          'dark:focus:bg-sea-300',
          'dark:disabled:bg-sumi-500',
        ],
        variant === 'secondary' && [
          'border-sea-600 text-sea-600 outline-transparent',
          'hover:bg-sea-50 hover:border-sea-darken-600 hover:text-sea-darken-600',
          'active:bg-sea-50 active:border-sea-darken-600 active:text-sea-darken-600',
          'focus:bg-transparent focus:outline-wood-500',
          'disabled:border-sumi-500 disabled:text-sumi-500 disabled:bg-transparent',
          'dark:border-sea-300 dark:text-sea-300',
          'dark:hover:border-sea-darken-300 dark:hover:text-sea-darken-300 dark:hover:bg-sea-50/10',
          'dark:active:border-sea-darken-300 dark:active:text-sea-darken-300',
          'dark:disabled:border-sumi-500 dark:disabled:text-sumi-500',
        ],
        variant === 'tertiary' && [
          'underline',
          'border-transparent text-sea-600 outline-transparent',
          'hover:text-sea-darken-600',
          'active:text-sea-darken-600',
          'focus:outline-wood-500',
          'disabled:text-sumi-500',
          'dark:text-sea-300',
          'dark:hover:text-sea-darken-300',
          'dark:active:text-sea-darken-300',
          'dark:disabled:text-sumi-500',
        ],
        className
      )}
      type='button'
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
