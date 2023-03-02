import React, { useState } from 'react'
import Badge from 'components/Badge/Badge'
import {
  MdHome,
  MdOutlineHome,
  MdSearch,
  MdNotifications,
  MdNotificationsNone,
  MdFace,
  MdOutlineFace,
} from 'react-icons/md'
import { twMerge as tm } from 'tailwind-merge'

const blocks = [
  {
    id: 'home',
    label: 'ホーム',
    icons: {
      filled: MdHome,
      outlined: MdOutlineHome,
    },
  },
  {
    id: 'search',
    label: 'みつける',
    icons: {
      filled: MdSearch,
      outlined: MdSearch,
    },
  },
  {
    id: 'notifications',
    label: 'お知らせ',
    icons: {
      filled: MdNotifications,
      outlined: MdNotificationsNone,
    },
  },
  {
    id: 'me',
    label: 'わたし',
    icons: {
      filled: MdFace,
      outlined: MdOutlineFace,
    },
  },
]

export const DotBadgeNavigation = ({ className }: { className?: string }) => {
  const [selected, setSelected] = useState(blocks[0].id)

  return (
    <nav
      className={tm(
        'flex justify-center items-center p-2 border-t w-[375px]',
        'bg-white border-sumi-300',
        'dark:bg-sumi-900 dark:border-sumi-700',
        className
      )}
    >
      {blocks.map((b) => (
        <button
          key={b.id}
          type='button'
          className={tm(
            'w-full px-4 outline-wood-500',
            b.id === selected ? 'text-sea-600 dark:text-sea-300' : 'text-sumi-900 dark:text-white'
          )}
          onClick={() => {
            setSelected(b.id)
          }}
        >
          <Badge variant='dot'>
            <div
              className={tm(
                'py-1 rounded-2xl w-full flex justify-center items-center',
                b.id === selected && 'bg-sea-50 dark:bg-sea-50/10'
              )}
            >
              {b.id === selected ? <b.icons.filled size={24} /> : <b.icons.outlined size={24} />}
            </div>
          </Badge>
          <span className='font-noto font-bold text-xs text-center tracking-wide py-1 whitespace-nowrap'>
            {b.label}
          </span>
        </button>
      ))}
    </nav>
  )
}

export const CountBadgeNavigation = ({ className }: { className?: string }) => {
  const [selected, setSelected] = useState(blocks[0].id)

  return (
    <nav
      className={tm(
        'flex justify-center items-center p-2 border-t w-[375px]',
        'bg-white border-sumi-300',
        'dark:bg-sumi-900 dark:border-sumi-700',
        className
      )}
    >
      {blocks.map((b) => (
        <button
          key={b.id}
          type='button'
          className={tm(
            'w-full px-4 outline-wood-500',
            b.id === selected ? 'text-sea-600 dark:text-sea-300' : 'text-sumi-900 dark:text-white'
          )}
          onClick={() => {
            setSelected(b.id)
          }}
        >
          <Badge variant='count' count={1}>
            <div
              className={tm(
                'py-1 rounded-2xl w-full flex justify-center items-center',
                b.id === selected && 'bg-sea-50 dark:bg-sea-50/10'
              )}
            >
              {b.id === selected ? <b.icons.filled size={24} /> : <b.icons.outlined size={24} />}
            </div>
          </Badge>
          <span className='font-noto font-bold text-xs text-center tracking-wide py-1 whitespace-nowrap'>
            {b.label}
          </span>
        </button>
      ))}
    </nav>
  )
}
