"use client"; // Client Component
import clsx from "clsx";
import { useChallenge } from "@/app/components/customHooks/useChallenge";
import { FaFilterCircleXmark } from "@/app/utils/icons";

/**
 * Renders the clear challenges filter button
 */
export default function ClearFilterButton() {
  const { challengesFilter, clearFilters } = useChallenge();

  return (
    <>
      {challengesFilter.length === 0 ? (
        <div className="w"></div>
      ) : (
        <button
          className={clsx("px-4 py-2", "cursor-pointer")}
          onClick={clearFilters}
        >
          <div
            className={clsx(
              "flex justify-center items-center gap-2",
              "text-red-700 hover:text-red-600",
              "sm:gap-4",
            )}
          >
            <FaFilterCircleXmark className="text-xl" />
            <span>Clear filters</span>
          </div>
        </button>
      )}
    </>
  );
}
