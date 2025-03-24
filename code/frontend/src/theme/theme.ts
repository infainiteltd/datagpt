import { createTheme, Theme, loadTheme, IPartialTheme } from '@fluentui/react';

// Custom dark theme
export const darkTheme: IPartialTheme = {
    palette: {
        themePrimary: '#91d7ff',
        themeLighterAlt: '#060809',
        themeLighter: '#182024',
        themeLight: '#2c3b44',
        themeTertiary: '#587788',
        themeSecondary: '#81b0c8',
        themeDarkAlt: '#9bdbff',
        themeDark: '#a9e0ff',
        themeDarker: '#bfe7ff',
        neutralLighterAlt: '#2b2b2b',
        neutralLighter: '#333333',
        neutralLight: '#414141',
        neutralQuaternaryAlt: '#4a4a4a',
        neutralQuaternary: '#515151',
        neutralTertiaryAlt: '#6f6f6f',
        neutralTertiary: '#c8c8c8',
        neutralSecondary: '#d0d0d0',
        neutralPrimaryAlt: '#dadada',
        neutralPrimary: '#ffffff',
        neutralDark: '#f4f4f4',
        black: '#f8f8f8',
        white: '#222222',
    },
    semanticColors: {
        bodyBackground: '#222222',
        bodyText: '#ffffff',
        inputBackground: '#333333',
        inputText: '#ffffff',
        disabledBackground: '#333333',
        disabledText: '#666666',
    }
};

// Custom light theme
export const lightTheme: IPartialTheme = {
    palette: {
        themePrimary: '#0078d4',
        themeLighterAlt: '#f3f9fd',
        themeLighter: '#d0e7f8',
        themeLight: '#a9d3f2',
        themeTertiary: '#5ca9e5',
        themeSecondary: '#1a86d9',
        themeDarkAlt: '#006cbe',
        themeDark: '#005ba1',
        themeDarker: '#004377',
        neutralLighterAlt: '#faf9f8',
        neutralLighter: '#f3f2f1',
        neutralLight: '#edebe9',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c6c4',
        neutralTertiary: '#a19f9d',
        neutralSecondary: '#605e5c',
        neutralPrimaryAlt: '#3b3a39',
        neutralPrimary: '#323130',
        neutralDark: '#201f1e',
        black: '#000000',
        white: '#ffffff',
    },
    semanticColors: {
        bodyBackground: '#ffffff',
        bodyText: '#323130',
        inputBackground: '#ffffff',
        inputText: '#323130',
        disabledBackground: '#f3f2f1',
        disabledText: '#a19f9d',
    }
};

// Create the theme instances
export const darkThemeInstance = createTheme(darkTheme);
export const lightThemeInstance = createTheme(lightTheme);

// Initialize theme state if it doesn't exist
if (!window.__themeState__) {
    window.__themeState__ = {
        theme: 'light'
    };
}

// Function to initialize theme
export const initializeTheme = (isDark: boolean = true) => {
    window.__themeState__.theme = isDark ? 'dark' : 'light';
    loadTheme(isDark ? darkThemeInstance : lightThemeInstance);
};

// Get current theme type
export const getThemeType = (): 'dark' | 'light' => {
    return window.__themeState__.theme;
};
