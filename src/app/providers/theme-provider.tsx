"use client";
import {createContext, useContext, useEffect, useState, ReactNode} from 'react';

export type Theme = "light" | "dark" | "extra";

type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used with a valid ThemeProvider");
    }
    return context;
}

export function ThemeProvider({ children }: {children:ReactNode}) {
    const [theme, setThemeState] = useState<Theme>("light");

    const setTheme = (themeValue: Theme) => {
        setThemeState(themeValue)
        localStorage.setItem("theme", themeValue);
    };

    useEffect(()=> {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "extra") {
            setThemeState(savedTheme as Theme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove("light", "extra", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}