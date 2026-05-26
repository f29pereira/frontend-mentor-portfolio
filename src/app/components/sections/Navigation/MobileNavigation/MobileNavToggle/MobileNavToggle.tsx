"use client"; // Client Component
import clsx from "clsx";
import { GiHamburgerMenu } from "@/app/utils/icons";
import useToggle from "@/app/components/customHooks/useToggle";
import { useOnEscape } from "@/app/components/customHooks/useOnEscape";
import MobileNav from "../MobileNav/MobileNav";

/**
 * Renders when mobile navigation pop-up is:
 *
 * closed: a button with hamburger icon
 *
 * open: the MobileNav component with the navigation links
 */
export default function MobileNavToggle() {
  const { isToggled, toggle } = useToggle(false);

  useOnEscape(isToggled, toggle);

  return (
    <>
      {!isToggled ? (
        <button
          className={clsx(
            "text-nav-btn cursor-pointer text-nav-link",
            "md:cursor-pointer md:hover:text-nav-link-hover",
            "dark:text-dark-title",
          )}
          aria-label={isToggled ? "" : "Open Navigation"}
          aria-expanded={isToggled}
          onClick={toggle}
        >
          <GiHamburgerMenu
            className={clsx("text-xl stroke-current")}
            aria-hidden="true"
          />
        </button>
      ) : (
        <MobileNav handleToggle={toggle} />
      )}
    </>
  );
}
