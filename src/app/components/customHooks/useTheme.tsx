"use client"; // Client Component
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeProvider/ThemeProvider";

/**
 * Custom Hook: allows access to the ThemeContext
 */
export default function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }

  return context;
}
