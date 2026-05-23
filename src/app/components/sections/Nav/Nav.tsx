import clsx from "clsx";
import styles from "./Nav.module.css";
import ThemeToggleButton from "../../shared/ThemeToggleButton/ThemeToggleButton";

/**
 * Renders Navigation Bar with:
 * - title
 * - app theme toggle button
 */
export default function Nav() {
  return (
    <nav
      className={clsx(
        "px-4 py-8",
        styles.nav,
        "sm:px-10",
        "md:px-12 md:pt-12",
        "lg:px-14 xl:px-16 2xl:px-20",
        "3xl:px-40",
      )}
    >
      <div className={clsx("flex items-center")}>
        <span className={clsx("text-lg text-black tracking-wider")}>
          Challenges Portfolio
        </span>

        <ul className={clsx("ml-auto text-lg")}>
          <ThemeToggleButton />
        </ul>
      </div>

      <div className={clsx("mt-6 border-b-2 border-stone-300")}></div>
    </nav>
  );
}
