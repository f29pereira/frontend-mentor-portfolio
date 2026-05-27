"use client"; // Client Component
import { createContext, useState, useEffect } from "react";
import type { ThemeContextType, ReactChildrenProp } from "@/app/types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

/**
 * Provides the context ThemeContext to be able to toggle the app theme
 */
export default function ThemeProvider({ children }: ReactChildrenProp) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  /**
   * Toggles the class dark to the html tag
   */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  /**
   * Toggles the dark theme
   */
  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext value={{ isDarkTheme: isDarkTheme, toggle: toggleDarkTheme }}>
      {children}
    </ThemeContext>
  );
}
