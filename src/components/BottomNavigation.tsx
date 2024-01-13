import React, { Fragment, useEffect, useRef, useState } from 'react';
import { BottomNavigationProps } from '../types';
import { cn } from '../libs';
import {
  HistoryFilled,
  HistoryOutlined,
  HouseFilled,
  HouseOutlined,
  HealthFilled,
  HealthOutlined,
  MeFilled,
  MeOutlined,
  MenuFilled,
  MenuOutlined,
  NotificationFilled,
  NotificationOutlined,
  SearchFilled,
  SearchOutlined,
} from './icons';

type NavigationName = 'home' | 'search' | 'notification' | 'me';

const items = [
  {
    name: 'home',
    inactive: HouseOutlined,
    active: HouseFilled,
    label: 'ホーム',
    onClick: () => console.log('home'),
    href: '/',
  },
  {
    name: 'search',
    inactive: SearchOutlined,
    active: SearchFilled,
    label: 'みつける',
    onClick: () => console.log('search'),
    href: '/search',
  },
  {
    name: 'notification',
    inactive: NotificationOutlined,
    active: NotificationFilled,
    label: 'お知らせ',
    onClick: () => console.log('notification'),
    href: '/notification',
  },
  {
    name: 'me',
    inactive: MeOutlined,
    active: MeFilled,
    label: 'わたし',
    onClick: () => console.log('me clicked'),
    href: '/me',
  },
];

export default function BottomNavigation({
  className,
  active,
  ...props
}: BottomNavigationProps<NavigationName>) {
  useEffect(() => {
    // if pathname matches to href property, set active to name
    if (!active && items.some((item) => item.href === window.location.pathname)) {
      active = items.find((item) => item.href === window.location.pathname)!.name as NavigationName;
    }
  }, []);

  return (
    <nav className={cn('flex px-1 items-start self-stretch bg-white', className)} {...props}>
      {items.map((item) => (
        <Fragment key={item.label}>
          {item.onClick && (
            <button
              className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px]'
              type='button'
              onClick={item.onClick}
            >
              <div className='flex flex-col justify-center items-center'>
                {active === item.name && <item.active className='text-blue-900' />}
                {active !== item.name && <item.inactive />}
              </div>
              <span
                className={cn(
                  'text-center text-label-m',
                  active === item.name && 'font-b text-blue-1000'
                )}
              >
                {item.label}
              </span>
            </button>
          )}
          {!item.onClick && (
            <a
              className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px]'
              href={item.href}
            >
              <div className='flex flex-col justify-center items-center'>
                {active === item.name && <item.active className='text-blue-900' />}
                {active !== item.name && <item.inactive />}
              </div>
              <span
                className={cn(
                  'text-center text-label-m',
                  active === item.name && 'font-b text-blue-1000'
                )}
              >
                {item.label}
              </span>
            </a>
          )}
        </Fragment>
      ))}
    </nav>
  );
}

const manyItems = [
  ...items,
  {
    name: 'history',
    inactive: HistoryOutlined,
    active: HistoryFilled,
    label: '履歴',
    onClick: () => console.log('history'),
    href: '/history',
  },
  {
    name: 'like',
    inactive: HealthOutlined,
    active: HealthFilled,
    label: 'スキ',
    onClick: () => console.log('like'),
    href: '/like',
  },
];

type ManyNavigationName = NavigationName | 'history' | 'like';

export function BottomNavigationWithDrawer({
  className,
  active,
  ...props
}: BottomNavigationProps<ManyNavigationName>) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    // if pathname matches to href property, set active to name
    if (!active && manyItems.some((item) => item.href === window.location.pathname)) {
      active = manyItems.find((item) => item.href === window.location.pathname)!
        .name as NavigationName;
    }
  }, []);

  return (
    <nav
      className={cn('flex px-1 items-start self-stretch bg-white relative z-0', className)}
      {...props}
    >
      {manyItems.slice(0, 4).map((item) => (
        <Fragment key={item.label}>
          {item.onClick && (
            <button
              className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px]'
              type='button'
              onClick={item.onClick}
            >
              <div className='flex flex-col justify-center items-center'>
                {active === item.name && <item.active className='text-blue-900' />}
                {active !== item.name && <item.inactive />}
              </div>
              <span
                className={cn(
                  'text-center text-label-m',
                  active === item.name && 'font-b text-blue-1000'
                )}
              >
                {item.label}
              </span>
            </button>
          )}
          {!item.onClick && (
            <a
              className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px]'
              href={item.href}
            >
              <div className='flex flex-col justify-center items-center'>
                {active === item.name && <item.active className='text-blue-900' />}
                {active !== item.name && <item.inactive />}
              </div>
              <span
                className={cn(
                  'text-center text-label-m',
                  active === item.name && 'font-b text-blue-1000'
                )}
              >
                {item.label}
              </span>
            </a>
          )}
        </Fragment>
      ))}
      <button
        className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px]'
        type='button'
        // onClick={() => dialogRef.current?.showModal()}
        onClick={() => setOpen(true)}
      >
        <div className='flex flex-col justify-center items-center'>
          <MenuOutlined />
        </div>
        <span className='text-center text-label-m'>その他</span>
      </button>
      <div
        className={cn(
          'fixed inset-0 opacity-0 bg-black/30 rounded grid place-items-center transition duration-400',
          !open && '-z-10',
          open && 'z-0 opacity-100'
        )}
        onClick={() => setOpen(false)}
      >
        <div
          className={cn('bg-white m-8 p-8', !open && 'hidden', open && 'block')}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setOpen(false)}>close</button>
        </div>
      </div>
      {/* <dialog
        className='block fixed h-0 -z-1 inset-0 opacity-0 -translate-y-full transition duration-1000 backdrop:bg-black/30 backdrop:opacity-0 backdrop:transition open:h-auto open:opacity-100 open:translate-y-0 backdrop:open:opacity-100'
        ref={dialogRef}
        onClick={(e) => {
          if (e.target instanceof HTMLDialogElement) dialogRef.current?.close();
        }}
      >
        <div className='bg-white m-8'>
          <button onClick={() => dialogRef.current?.close()}>close</button>
        </div>
      </dialog> */}
    </nav>
  );
}
