import React from 'react';
import styles from './ThemeToggle.module.css';
import { Stack } from '@fluentui/react';
import InfinityLogo from '../../assets/InfinityLogo';
import { WeatherSunnyRegular, WeatherMoonRegular } from '@fluentui/react-icons';

interface ThemeToggleProps {
    onToggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggleTheme }) => {
    return (
        <Stack horizontal verticalAlign="center" className={styles.container}>
            <a
                href="https://infinite.ai"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoContainer}
            >
                <InfinityLogo size={109} />
            </a>
            <button
                className={styles.toggleButton}
                onClick={onToggleTheme}
                aria-label="Toggle theme"
            >
                <WeatherSunnyRegular className={styles.themeIcon} />
                <WeatherMoonRegular className={styles.themeIcon} />
            </button>
        </Stack>
    );
};
