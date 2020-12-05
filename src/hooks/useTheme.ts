import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../contexts/theme';

export default function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  return context;
}