import { createContext, useContext } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

export default function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
}
