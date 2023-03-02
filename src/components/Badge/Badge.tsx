import React from 'react'
import { twMerge as tm } from 'tailwind-merge'
import type { BadgeProps } from 'types'

const Badge = <T extends 'dot' | 'count'>(props: BadgeProps<T>) => {
  return (
    <div className={tm('relative w-full grid place-items-center', props.className)}>
      {props.variant === 'dot' && (
        <div className='w-2 h-2 rounded-full bg-sun-800 dark:bg-sun-500/90 absolute right-[10%] top-0'></div>
      )}
      {props.variant === 'count' && (
        <div
          className='
            w-4 h-4 rounded-full
            font-noto font-medium text-[10px] text-center
            absolute right-0 top-0
            bg-sun-800 dark:bg-sun-500/90 text-white'
        >
          {props.count}
        </div>
      )}
      {props.children}
    </div>
  )
}

export default Badge
