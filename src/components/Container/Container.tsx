import React from 'react'
import { twMerge as tm } from 'tailwind-merge'
import type { ContainerProps } from 'types'

const Container = ({ className, row = false, children }: ContainerProps) => {
  return (
    <div
      className={tm(
        'flex justify-center items-center flex-wrap p-4 w-full rounded-lg my-4 gap-4 overflow-x-auto',
        row ? 'flex-row' : 'flex-col',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
