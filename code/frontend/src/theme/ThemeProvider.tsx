import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as FluentThemeProvider } from '@fluentui/react';
import { darkThemeInstance, lightThemeInstance, initializeTheme } from './theme';

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: true,
    toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Initialize theme on mount
        initializeTheme(isDarkMode);
    }, []);

    useEffect(() => {
        // Update theme when isDarkMode changes
        initializeTheme(isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <FluentThemeProvider theme={isDarkMode ? darkThemeInstance : lightThemeInstance}>
                {children}
            </FluentThemeProvider>
        </ThemeContext.Provider>
    );
};
