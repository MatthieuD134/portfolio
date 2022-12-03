import { THEMES } from '@src/common/constants';
import {
  useState,
  createContext,
  ReactNode,
  useContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';

interface ThemeContextInterface {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const INITIAL_THEME_CONTEXT_STATE = {
  theme: THEMES.LIGHT,
} as ThemeContextInterface;

const ThemeContext = createContext<ThemeContextInterface>(
  INITIAL_THEME_CONTEXT_STATE
);

interface ThemeProviderProps {
  children?: ReactNode;
}
// context provider
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(THEMES.LIGHT);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);

  return theme;
};

export const useSetTheme = () => {
  const { setTheme } = useContext(ThemeContext);

  return setTheme;
};
