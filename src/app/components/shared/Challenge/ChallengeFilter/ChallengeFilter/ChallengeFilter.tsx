import clsx from "clsx";
import ClearFilterButton from "../ClearFilterButton/ClearFilterButton";
import FilterButton from "../FilterButton/FilterButton";

/**
 * Renders the buttons for the challenges filter: clear filters and challenge filter pop-up
 */
export default function ChallengeFilter() {
  return (
    <div
      className={clsx(
        "relative flex justify-between items-center mt-12 mb-8",
        "lg:justify-end gap-8",
      )}
    >
      <ClearFilterButton />
      <FilterButton />
    </div>
  );
}
