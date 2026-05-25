"use client"; // Client Component
import clsx from "clsx";
import { FaSun, FaMoon } from "@/app/utils/icons";
import useTheme from "../../customHooks/useTheme";

/**
 * Renders the theme toggle button
 *
 * - If dark theme is active: renders sun icon
 * - If light theme is active: renders moon icon
 */
export default function ThemeToggleButton() {
  const { isDarkTheme, toggle } = useTheme();

  return (
    <button
      className={clsx(
        isDarkTheme
          ? "text-dark-title md:hover:text-gray-400"
          : "text-nav-btn md:hover:text-nav-btn-hover",
        "md:cursor-pointer",
      )}
      onClick={toggle}
      aria-label={`Change to ${isDarkTheme ? "light" : "dark"} theme`}
    >
      {isDarkTheme ? (
        <FaSun className={clsx("stroke-current")} aria-hidden="true" />
      ) : (
        <FaMoon className={clsx("stroke-current")} aria-hidden="true" />
      )}
    </button>
  );
}
