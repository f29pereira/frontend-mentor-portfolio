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
    <button className={clsx("cursor-pointer")} onClick={toggle}>
      {isDarkTheme ? (
        <FaSun className="text-white" />
      ) : (
        <FaMoon className="text-black hover:text-slate-600" />
      )}
    </button>
  );
}
