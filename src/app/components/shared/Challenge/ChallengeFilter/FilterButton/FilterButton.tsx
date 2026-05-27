"use client"; // Client Component
import clsx from "clsx";
import { useState } from "react";
import { FaFilter, IoIosArrowDown, IoIosArrowUp } from "@/app/utils/icons";
import FilterPopUp from "../FilterPopUp/FilterPopUp";

/**
 * Renders the challenge filter button and pop-up when opened
 */
export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the challenge filter pop-up
   */
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={clsx("ml-auto", "lg:ml-0")}>
      <button
        className={clsx(
          "relative",
          "bg-white border-2 border-stone-300 cursor-pointer rounded-full",
          "hover:bg-slate-100",
          "dark:bg-dark-card-bg dark:border-dark-card-border dark:hover:bg-gray-700",
        )}
        onClick={toggle}
        aria-label="Challenge Filter"
      >
        <div
          className={clsx(
            "flex justify-center items-center gap-2 px-4 py-2",
            "sm:gap-4",
          )}
        >
          <FaFilter
            className={clsx("text-indigo-600", "dark:text-dark-title")}
          />

          {isOpen ? (
            <IoIosArrowDown
              className={clsx(
                "text-xl text-indigo-600",
                "dark:text-dark-title",
              )}
            />
          ) : (
            <IoIosArrowUp
              className={clsx(
                "text-xl text-indigo-600",
                "dark:text-dark-title",
              )}
            />
          )}
        </div>
      </button>

      {isOpen ? (
        <div className={clsx("absolute z-10 top-11 right-0.5")}>
          <FilterPopUp />
        </div>
      ) : null}
    </div>
  );
}
