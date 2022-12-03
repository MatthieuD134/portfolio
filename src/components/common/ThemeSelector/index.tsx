import { THEMES } from '@src/common/constants';
import styles from './index.module.scss';

import LightModeLogo from '@src/common/icons/lightMode.svg';
import DarkModeLogo from '@src/common/icons/darkMode.svg';
import { useThemeContext } from '@src/modules/ThemeProvider';

const ThemeSelector = () => {
  const { theme, setTheme } = useThemeContext();

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
  };

  return (
    <button
      onClick={() =>
        theme === THEMES.LIGHT
          ? handleChangeTheme(THEMES.DARK)
          : handleChangeTheme(THEMES.LIGHT)
      }
      className={styles.themeSwitcher}
    >
      <div className={styles.background}>
        <span
          className={`${styles.iconSelector} ${
            theme === THEMES.LIGHT ? styles.left : styles.right
          }`}
        />
        <div className={styles.iconContainer}>
          <LightModeLogo
            className={`${styles.icon} ${
              theme === THEMES.DARK ? styles.lightIcon : styles.darkIcon
            }`}
          />
        </div>

        <div className={styles.iconContainer}>
          <DarkModeLogo className={`${styles.icon} ${styles.darkIcon}`} />
        </div>
      </div>
    </button>
  );
};

export default ThemeSelector;
