import { createContext, useContext, useState, type ReactNode } from 'react';

import { STORAGE_KEY, THEME_MODE } from '../constants/app.constant';
import { LocalStorageHandler } from '../utils/storageHandle';

type ThemeModeType = (typeof THEME_MODE)[keyof typeof THEME_MODE];

interface ThemeContextValue {
  theme: ThemeModeType;
  updateTheme: (mode: ThemeModeType) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeModeType>(() => {
    const localTheme = LocalStorageHandler.getStorage(STORAGE_KEY.THEME);
    return localTheme ? localTheme : THEME_MODE.LIGHT;
  });
  const isDark = theme === THEME_MODE.DARK;

  const updateTheme = (val: ThemeModeType) => {
    const newTheme =
      val === THEME_MODE.DARK ? THEME_MODE.DARK : THEME_MODE.LIGHT;

    LocalStorageHandler.setStorage(STORAGE_KEY.THEME, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, isDark: isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within an ThemeProvider');
  return ctx;
};
