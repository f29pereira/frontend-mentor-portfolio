import styles from "./Nav.module.css";

/**
 * Renders Navigation Bar
 */
export default function Nav() {
  return (
    <nav
      className={`${styles.nav} bg-blue-800 h-20 flex justify-center items-center`}
    >
      <ul className="text-center text-white text-xl md:text-2xl lg:text-3xl">
        <li>Frontend Mentor Challenges</li>
      </ul>
    </nav>
  );
}
