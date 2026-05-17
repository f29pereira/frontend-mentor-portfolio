import clsx from "clsx";
import styles from "./Nav.module.css";

/**
 * Renders Navigation Bar
 */
export default function Nav() {
  return (
    <nav
      className={clsx(
        "px-4 pt-8",
        styles.nav,
        "sm:px-10",
        "md:px-12 md:pt-12",
        "lg:px-14 xl:px-16 2xl:px-20",
        "3xl:px-40",
      )}
    >
      <ul className={clsx("border-b-2 border-stone-300 text-center")}>
        <li
          className={clsx(
            "mb-8 text-2xl text-blue-800 leading-10 tracking-wider",
            "sm:text-3xl",
            "md:mb-12",
            "lg:text-4xl",
          )}
        >
          Filipe Pereira - Frontend Mentor Challenges
        </li>
      </ul>
    </nav>
  );
}
