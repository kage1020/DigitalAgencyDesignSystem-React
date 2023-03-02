import React from 'react'
import { twMerge as tm } from 'tailwind-merge'
import {
  MdArrowUpward,
  MdNavigateBefore,
  MdFirstPage,
  MdLastPage,
  MdNavigateNext,
} from 'react-icons/md'
import type { CircleButtonProps, CircleButtonVariant } from 'types'

const CircleButton = <T extends CircleButtonVariant>(props: CircleButtonProps<T>) => {
  return (
    <button
      className={tm(
        'flex justify-center items-center w-14 h-14',
        'rounded-full border',
        'outline outline-2 outline-offset-4',
        'bg-white border-sea-600 text-sea-600 outline-transparent',
        'hover:bg-sea-50 hover:border-sea-darken-600 hover:text-sea-darken-600',
        'active:bg-sea-50 active:border-sea-darken-600 active:text-sea-darken-600',
        'focus:bg-white focus:outline-wood-500',

        'dark:bg-sumi-900 dark:border-sea-300 dark:text-sea-300',
        'dark:hover:bg-sea-50/10 dark:hover:border-sea-darken-300 dark:hover:text-sea-darken-300',
        'dark:active:bg-sea-50/10 dark:active:border-sea-darken-300 dark:active:text-sea-darken-300',
        props.variant !== 'text' && [
          'disabled:border-transparent disabled:bg-transparent',
          'dark:disabled:border-transparent dark:disabled:bg-transparent',
        ],
        props.variant === 'text' && [
          'disabled:border-transparent disabled:bg-sumi-500',
          'dark:disabled:border-transparent dark:disabled:bg-sumi-600',
        ],
        props.className
      )}
      type='button'
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <span className='sr-only'>{props.alt}</span>
      {!props.disabled && props.variant === 'first' && <MdFirstPage size={24} />}
      {!props.disabled && props.variant === 'prev' && <MdNavigateBefore size={24} />}
      {!props.disabled && props.variant === 'next' && <MdNavigateNext size={24} />}
      {!props.disabled && props.variant === 'last' && <MdLastPage size={24} />}
      {!props.disabled && props.variant === 'top' && <MdArrowUpward size={24} />}
      {props.disabled && props.variant !== 'text' && (
        <span className='text-sumi-900 dark:text-white'>なし</span>
      )}
      {props.variant === 'text' && (
        <span className={tm(props.disabled && 'text-white')}>{props.text}</span>
      )}
    </button>
  )
}

export default CircleButton
