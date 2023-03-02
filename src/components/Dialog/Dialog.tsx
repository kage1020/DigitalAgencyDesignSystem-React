import React from 'react'
import Button from 'components/Button/Button'
import { twMerge as tm } from 'tailwind-merge'
import type { DialogProps } from 'types'

const Dialog = ({ className, dialogRef, onClose }: DialogProps) => {
  return (
    <dialog
      className={tm(
        'w-screen max-w-[100vw] p-0 max-h-screen justify-center items-center',
        'bg-transparent backdrop:bg-sumi-900/60 overflow-y-scroll overscroll-contain ',
        'open:flex',
        'after:content-[""] after:inset-0 after:flex after:w-[1px] after:h-[calc(100vh+1px)]',
        className
      )}
      ref={dialogRef}
    >
      <div className='w-full max-w-5xl mx-6 tablet:mx-10 p-4 tablet:px-16 tablet:py-10 bg-white rounded-lg'>
        <div className='grid grid-cols-12 gap-2'>
          <p className='col-span-12 font-bold text-2xl mb-4'>ダイアログのタイトル</p>
          <p className='col-span-12 mb-6 tablet:mb-10'>ダイアログの補助テキストが入ります。</p>
          <div className='col-span-12'>
            <Button className='w-full' variant='primary' onClick={onClose}>
              OK
            </Button>
          </div>
          <div className='col-span-12'>
            <Button className='w-full' variant='tertiary' onClick={onClose}>
              閉じる
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default Dialog
