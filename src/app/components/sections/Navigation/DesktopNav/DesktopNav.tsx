import clsx from "clsx";
import Link from "next/link";

/**
 * Renders the desktop page navigation with page navigation links:
 * - About me
 * - Challenges
 * - Technologies
 */
export default function DesktopNav() {
  return (
    <ul
      className={clsx("hidden", "lg:flex lg:items-center lg:gap-4", "xl:gap-8")}
    >
      <li>
        <Link
          className={clsx(
            "font-bold text-nav-link hover:text-nav-link-hover",
            "dark:text-dark-inline-link dark:hover:text-dark-inline-link-hover",
          )}
          href={"/"}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          className={clsx(
            "font-bold text-nav-link hover:text-nav-link-hover",
            "dark:text-dark-inline-link dark:hover:text-dark-inline-link-hover",
          )}
          href={"/challenges"}
        >
          Challenges
        </Link>
      </li>
      <li>
        <Link
          className={clsx(
            "font-bold text-nav-link hover:text-nav-link-hover",
            "dark:text-dark-inline-link dark:hover:text-dark-inline-link-hover",
          )}
          href={"/technologies"}
        >
          Technologies
        </Link>
      </li>
    </ul>
  );
}
