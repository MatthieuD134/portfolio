import { THEMES } from '@src/common/constants';
import { useEffect, useState } from 'react';

const ThemeSelector = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button
      onClick={() =>
        theme === THEMES.LIGHT
          ? handleChangeTheme(THEMES.DARK)
          : handleChangeTheme(THEMES.LIGHT)
      }
    >
      change theme
    </button>
  );
};

export default ThemeSelector;
