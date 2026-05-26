import clsx from "clsx";
import type { DifficultyProps } from "@/app/types";
import { getDifficultyBgColor } from "./Difficulty.utils";
import { getCapitalizedFirstLetter } from "@/app/utils/utils";

/**
 * Renders the challenge difficulty banner
 */
export default function Difficulty({ difficulty }: DifficultyProps) {
  const difficultyBg = getDifficultyBgColor(difficulty);

  const difficultyName = getCapitalizedFirstLetter(difficulty);

  return (
    <div
      className={clsx(
        difficultyBg,
        "max-w-[5rem] py-1 px-1.5 rounded-full",
        "sm:max-w-full sm:py-2 sm:px-3",
      )}
    >
      <span className="sr-only">Difficulty type:</span>
      <span
        className={clsx(
          "block truncate text-center text-xs text-white font-bold",
          "sm:text-sm",
        )}
      >
        {difficultyName}
      </span>
    </div>
  );
}
