import React, { Fragment, useEffect } from 'react';
import {
  HistoryFilled,
  HistoryOutlined,
  HouseFilled,
  HouseOutlined,
  HealthFilled,
  HealthOutlined,
  MeFilled,
  MeOutlined,
  MenuOutlined,
  NotificationFilled,
  NotificationOutlined,
  SearchFilled,
  SearchOutlined,
} from './icons';
import Drawer from './Drawer';
import useDrawer from '../hooks/useDrawer';
import NotificationBadge from './NotificationBadge';
import { BottomNavigationProps } from '../types';
import { cn } from '../libs/util';

type NavigationName = 'home' | 'search' | 'notification' | 'me';

const items = [
  {
    name: 'home',
    inactive: HouseOutlined,
    active: HouseFilled,
    label: 'ホーム',
    onClick: () => console.log('home'),
    href: '/',
    notifications: 0,
  },
  {
    name: 'search',
    inactive: SearchOutlined,
    active: SearchFilled,
    label: 'みつける',
    onClick: () => console.log('search'),
    href: '/search',
    notifications: 1,
  },
  {
    name: 'notification',
    inactive: NotificationOutlined,
    active: NotificationFilled,
    label: 'お知らせ',
    onClick: () => console.log('notification'),
    href: '/notification',
    notifications: 2,
  },
  {
    name: 'me',
    inactive: MeOutlined,
    active: MeFilled,
    label: 'わたし',
    onClick: () => console.log('me clicked'),
    href: '/me',
    notifications: 3,
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
    <nav
      className={cn(
        'flex px-1 items-start self-stretch bg-white border-t-2 border-grey-200',
        className
      )}
      {...props}
      data-testid='bottom-navigation'
    >
      {items.map((item) => (
        <Fragment key={item.label}>
          {item.onClick && (
            <button
              className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px] min-h-[44px] min-w-[44px]'
              type='button'
              onClick={item.onClick}
              data-testid={item.name}
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
              className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px] min-h-[44px] min-w-[44px]'
              href={item.href}
              data-testid={item.name}
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
  const { setOpen } = useDrawer();

  useEffect(() => {
    // if pathname matches to href property, set active to name
    if (!active && manyItems.some((item) => item.href === window.location.pathname)) {
      active = manyItems.find((item) => item.href === window.location.pathname)!
        .name as NavigationName;
    }
  }, []);

  return (
    <nav
      className={cn(
        'flex px-1 items-start self-stretch bg-white relative border-t-2 border-grey-200',
        className
      )}
      {...props}
      data-testid='bottom-navigation'
    >
      {manyItems.slice(0, 4).map((item) => (
        <Fragment key={item.label}>
          {item.onClick && (
            <button
              className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px] min-h-[44px] min-w-[44px]'
              type='button'
              onClick={item.onClick}
              data-testid={item.name}
            >
              <NotificationBadge count={1}>
                <div
                  className={cn(
                    'flex flex-col justify-center items-center w-14 h-8 rounded-md',
                    active === item.name && 'bg-blue-50'
                  )}
                >
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
              </NotificationBadge>
            </button>
          )}
          {!item.onClick && (
            <a
              className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px] min-h-[44px] min-w-[44px]'
              href={item.href}
              data-testid={item.name}
            >
              <NotificationBadge>
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
              </NotificationBadge>
            </a>
          )}
        </Fragment>
      ))}
      <button
        className='flex flex-col justify-center items-center flex-grow pt-1 pb-[12px] min-h-[44px] min-w-[44px]'
        type='button'
        onClick={() => setOpen(true)}
        data-testid='others'
      >
        <div>
          <div className='flex flex-col justify-center items-center w-14 h-8'>
            <MenuOutlined />
          </div>
          <span className='text-center text-label-m'>その他</span>
        </div>
      </button>
      <Drawer direction='right'>
        <Drawer.Overlay />
        <Drawer.Content>
          <div>
            {manyItems.slice(4).map((item) => (
              <Fragment key={item.label}>
                {item.onClick && (
                  <button
                    className='flex justify-center place-items-center flex-grow gap-x-2 pt-1 pb-[12px]'
                    type='button'
                    onClick={item.onClick}
                    data-testid={item.name}
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
                    className='flex justify-center items-center flex-grow pt-1 pb-[12px]'
                    href={item.href}
                    data-testid={item.name}
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
          </div>
        </Drawer.Content>
      </Drawer>
    </nav>
  );
}
