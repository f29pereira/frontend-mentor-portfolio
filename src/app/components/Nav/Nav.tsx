import styles from "./Nav.module.css";
import { FaCode } from "@/app/utils/icons";

/**
 * Renders Navigation Bar
 */
export default function Nav() {
  return (
    <nav
      className={`${styles.nav} bg-blue-800 h-26 flex justify-center items-center`}
    >
      <ul className="text-center text-white">
        <div className="flex justify-center items-center gap-4">
          <FaCode className="text-2xl lg:text-4xl" />
          <li className="text-xl md:text-2xl lg:text-3xl">
            Frontend Mentor Challenges
          </li>
        </div>
      </ul>
    </nav>
  );
}
