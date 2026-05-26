import clsx from "clsx";
import styles from "./Nav.module.css";
import MobileNavToggle from "../MobileNavigation/MobileNavToggle/MobileNavToggle";
import DesktopNav from "../DesktopNav/DesktopNav";
import ThemeToggleButton from "../../../shared/ThemeToggleButton/ThemeToggleButton";

/**
 * Renders desktop/mobile main navigation with:
 * - title
 * - page Navigation links: About me, Challenges and Technologies
 * - app theme toggle button
 */
export default function Nav() {
  return (
    <nav
      className={clsx(
        "px-4 py-8",
        "sm:px-10",
        "md:px-12 md:pt-12",
        "lg:px-14 xl:px-16",
        "2xl:px-20 2xl:pt-14",
        "3xl:px-40",
      )}
    >
      <div className={clsx("flex items-center")}>
        <div className={clsx("flex items-center gap-4 mr-10")}>
          <div className="lg:hidden">
            <MobileNavToggle />
          </div>

          <span
            className={clsx(
              "text-sm text-indigo-600 tracking-wider",
              styles.nav,
              "sm:text-xl md:text-2xl",
              "dark:text-dark-title",
            )}
          >
            Filipe Pereira - FM Challenges
          </span>
        </div>

        <DesktopNav />

        <div className={clsx("ml-auto text-lg", "md:text-xl xl:text-2xl")}>
          <ThemeToggleButton />
        </div>
      </div>

      {/*Line border*/}
      <div
        className={clsx(
          "mt-6 border-b-2 border-stone-300",
          "md:mt-8 lg:mt-10 xl:mt-12",
        )}
      ></div>
    </nav>
  );
}
