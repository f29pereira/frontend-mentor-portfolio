import clsx from "clsx";
import styles from "./Nav.module.css";
import { FaCode } from "@/app/utils/icons";

/**
 * Renders Navigation Bar
 */
export default function Nav() {
  return (
    <nav
      className={clsx(
        styles.nav,
        "flex justify-center items-center h-26 bg-blue-800",
      )}
    >
      <ul className={clsx("text-center text-white")}>
        <div className={clsx("flex justify-center items-center gap-4")}>
          <FaCode className={clsx("text-3xl", "sm:text-4xl")} />
          <li className={clsx("text-xl", "sm:text-2xl", "lg:text-3xl")}>
            Frontend Mentor Challenges
          </li>
        </div>
      </ul>
    </nav>
  );
}
