import clsx from "clsx";
import type { MobileNavProps } from "@/app/types";
import { FocusTrap } from "focus-trap-react";
import Link from "next/link";
import { IoClose } from "@/app/utils/icons";

/**
 * Renders the mobile navigation pop-up with:
 * - Close button
 * Page Navigation links:
 * - About me
 * - Challenges
 * - Technologies
 *
 * Props are defined in {@link MobileNavProps}.
 */
export default function MobileNav({ handleToggle }: MobileNavProps) {
  return (
    <FocusTrap>
      <div
        className={clsx("fixed z-50 w-screen h-screen inset-0 bg-gray-900/60")}
        role="dialog"
      >
        <nav
          className={clsx(
            "h-full w-3/4 p-8 bg-slate-100",
            "sm:p-10",
            "dark:bg-dark-app-bg",
          )}
        >
          {/*Close Button*/}
          <button
            className={clsx(
              "mb-10 text-nav-btn",
              "sm:mb-12",
              "md:mb-14 md:cursor-pointer md:hover:text-nav-btn-hover",
              "dark:text-white",
            )}
            aria-label="Close navigation"
            onClick={handleToggle}
          >
            <IoClose
              className={clsx(
                "text-2xl text-nav-icon",
                "md:text-3xl",
                "stroke-current",
              )}
            />
          </button>

          {/*Page navigation links*/}
          <ul>
            <li className={clsx("mb-8", "sm:mb-10 md:mb-12")}>
              <Link
                className={clsx(
                  "font-bold text-gray-900",
                  "md:hover:text-gray-800",
                  "dark:text-dark-inline-link dark:hover:text-dark-inline-link-hover",
                )}
                href={"/"}
                onClick={handleToggle}
              >
                About Me
              </Link>
            </li>
            <li className={clsx("mb-8", "sm:mb-10 md:mb-12")}>
              <Link
                className={clsx(
                  "font-bold text-gray-900",
                  "md:hover:text-gray-800",
                  "dark:text-dark-inline-link dark:hover:text-dark-inline-link-hover",
                )}
                href={"/challenges"}
                onClick={handleToggle}
              >
                Challenges
              </Link>
            </li>
            <li>
              <Link
                className={clsx(
                  "font-bold text-gray-900",
                  "md:hover:text-gray-800",
                  "dark:text-dark-inline-link dark:hover:text-dark-inline-link-hover",
                )}
                href={"/technologies"}
                onClick={handleToggle}
              >
                Technologies
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </FocusTrap>
  );
}
