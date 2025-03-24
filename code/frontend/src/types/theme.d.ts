interface ThemeState {
    theme: 'light' | 'dark';
}

interface Window {
    __themeState__: ThemeState;
}
