import {createContext,useContext} from "react";

export const ThemeContext = createContext({
    themeMode: 'light', // default theme mode
    darkTheme: () => {}, // function to toggle to dark theme
    lightTheme: () => {}, // function to toggle to light theme
});

export const ThemeProvider =ThemeContext.Provider;

export default function useTheme () {
    return useContext(ThemeContext);
}