"use client"; // Client Component
import { createContext, useState, useEffect } from "react";
import type { ThemeContextType, ReactChildrenProp } from "@/app/types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

enum Theme {
  Light = "light",
  Dark = "dark",
}

/**
 * Provides the context ThemeContext to be able to toggle the app theme
 */
export default function ThemeProvider({ children }: ReactChildrenProp) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);

  /**
   * Creates localstorage for the dark theme if no localstorage is present
   */
  useEffect(() => {
    const appTheme = localStorage.getItem("app_theme");

    if (appTheme) {
      setIsDarkTheme(appTheme === Theme.Dark);
    } else {
      // Default theme
      localStorage.setItem("app_theme", Theme.Dark);
      setIsDarkTheme(true);
    }
  }, []);

  /**
   * Toggles the class dark to the html tag and updates the localstorage
   */
  useEffect(() => {
    if (isDarkTheme === null) {
      return;
    }
    document.documentElement.classList.toggle("dark", isDarkTheme);
    localStorage.setItem("app_theme", getTheme(isDarkTheme));
  }, [isDarkTheme]);

  /**
   * Returns the string corresponding to the app theme
   * @param isDarkTheme isDarkTheme state
   */
  const getTheme = (isDarkTheme: boolean): string => {
    return isDarkTheme ? Theme.Dark : Theme.Light;
  };

  /**
   * Toggles the dark theme
   */
  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext
      value={{ isDarkTheme: isDarkTheme ?? true, toggle: toggleDarkTheme }}
    >
      {children}
    </ThemeContext>
  );
}
