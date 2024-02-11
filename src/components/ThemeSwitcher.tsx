import React from 'react';
import Button from './Button';
import useTheme from '../hooks/useTheme';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='absolute top-4 right-4'>
      <Button className='min-w-0' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme}
      </Button>
    </div>
  );
}
