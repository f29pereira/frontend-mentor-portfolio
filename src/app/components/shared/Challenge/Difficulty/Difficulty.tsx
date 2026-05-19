import clsx from "clsx";
import { DifficultyProps } from "@/app/types";
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
      className={clsx(difficultyBg, "py-1 px-2 rounded-full", "sm:py-2 px-3")}
    >
      <span className={clsx("text-xs text-white font-bold", "sm:text-sm")}>
        {difficultyName}
      </span>
    </div>
  );
}
