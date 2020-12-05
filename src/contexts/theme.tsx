import { createContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children }:Props) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return localStorage.getItem('@devpira:theme') as Theme || 'dark';
  });

  function toggleTheme() {
    setTheme(oldState => {
      return oldState === 'light' ? 'dark' : 'light';
    });
  }

  useEffect(() => {
    localStorage.setItem('@devpira:theme', theme);
  }, [theme]);

  return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>)
}