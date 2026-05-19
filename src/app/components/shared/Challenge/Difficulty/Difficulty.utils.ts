import { ChallengeDifficulty } from "@/app/types";

/**
 * Returns the Taiwind background color class for the difficulty banner
 * @param difficulty difficulty type
 */
export const getDifficultyBgColor = (difficulty: ChallengeDifficulty) => {
  switch (difficulty) {
    case "newbie":
      return "bg-blue-500";
    case "junior":
      return "bg-green-500";
    case "intermediate":
      return "bg-yellow-500";
    case "advanced":
      return "bg-orange-500";
    default:
      return "";
  }
};
