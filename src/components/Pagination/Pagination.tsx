import React from 'react'
import CircleButton from 'components/Button/Circle'
import type { PaginationProps } from 'types'

const Pagination = ({ count, page, onChange }: PaginationProps) => {
  return (
    <div className='flex justify-center items-center gap-6'>
      <div className={page > 0 ? 'flex justify-center items-center gap-6' : 'hidden'}>
        <CircleButton
          variant='first'
          onClick={() => {
            onChange(0)
          }}
        />
        <CircleButton
          variant='prev'
          onClick={() => {
            onChange(page - 1)
          }}
        />
      </div>
      <div className='hidden tablet:flex justify-center items-center gap-6'>
        <div className={page + 1 > 4 ? 'block' : 'hidden'}>&middot;&middot;&middot;</div>
        <div className='flex justify-center items-center flex-row-reverse gap-6'>
          {Array(Math.min(3, page))
            .fill(0)
            .map((_, i) => (
              <CircleButton
                key={i}
                variant='text'
                text={page - i}
                onClick={() => {
                  onChange(page - i - 1)
                }}
              />
            ))}
        </div>
      </div>
      <div className='text-sumi-900 dark:text-white'>
        <span>{page + 1}</span>
        <span>/</span>
        <span>{count}</span>
      </div>
      <div className='hidden tablet:flex justify-center items-center gap-6'>
        <div className='flex justify-center items-center gap-6'>
          {Array(Math.min(3, count - page - 1))
            .fill(0)
            .map((_, i) => (
              <CircleButton
                key={i}
                variant='text'
                text={page + i + 2}
                onClick={() => {
                  onChange(page + i + 1)
                }}
              />
            ))}
        </div>
        <div className={page + 4 >= count ? 'hidden' : 'block'}>&middot;&middot;&middot;</div>
      </div>
      <div className={page === count - 1 ? 'hidden' : 'flex justify-center items-center gap-6'}>
        <CircleButton
          variant='next'
          onClick={() => {
            onChange(page + 1)
          }}
        />
        <CircleButton
          variant='last'
          onClick={() => {
            onChange(count - 1)
          }}
        />
      </div>
    </div>
  )
}

export default Pagination
