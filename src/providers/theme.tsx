import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeContext } from '../hooks/useTheme';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localTheme === 'dark' || (!localTheme && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const setAndStoreTheme = (theme: 'light' | 'dark') => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setAndStoreTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
