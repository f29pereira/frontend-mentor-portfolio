"use client"; // Client Component
import clsx from "clsx";
import { Fragment } from "react";
import { useChallenge } from "@/app/components/customHooks/useChallenge";
import { getFilterList } from "@/app/data/data";
import type { ChallengeDifficulty } from "@/app/types";
import { getCapitalizedFirstLetter } from "@/app/utils/utils";

/**
 * Renders the challenge filter pop-up with:
 * - title
 * - difficulty checkboxes
 */
export default function FilterPopUp() {
  const { challengesFilter, addFilter, removeFilter } = useChallenge();

  const filterList = getFilterList();

  /**
   * Adds or removes filter to the challenges list
   */
  const handleOnChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value as ChallengeDifficulty;

    if (e.target.checked) {
      addFilter(filter);
    } else {
      removeFilter(filter);
    }
  };

  /**
   * Checks if the checkbox is selected
   */
  const isFilterChecked = (filter: ChallengeDifficulty): boolean => {
    return challengesFilter.includes(filter);
  };

  return (
    <div
      className={clsx(
        "px-3 py-5 bg-white border-2 border-stone-300 rounded-3xl",
        "dark:bg-dark-card-bg dark:border-dark-card-border",
      )}
    >
      <header className={clsx("mb-4")}>
        <h2 className={clsx("text-center font-bold", "dark:text-dark-title")}>
          Difficulty
        </h2>
      </header>

      <div
        className={clsx("grid grid-cols-[1fr_auto] gap-x-2 gap-y-4", "sm:px-4")}
      >
        {filterList.map((filter) => (
          <Fragment key={filter}>
            {/*Checkbox label*/}
            <label
              htmlFor={filter}
              className={clsx("text-sm", "sm:text-base", "dark:text-dark-text")}
            >
              {getCapitalizedFirstLetter(filter)}
            </label>
            {/*Checkbox input*/}
            <input
              className="accent-indigo-600 cursor-pointer"
              type="checkbox"
              id={filter}
              value={filter}
              onChange={handleOnChangeFilter}
              checked={isFilterChecked(filter)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
