"use client"; // Client Component
import { createContext, useState } from "react";
import type {
  ChallengeContextType,
  ChallengeData,
  ReactChildrenProp,
  ChallengeDifficulty,
} from "@/app/types";
import { getChallengesList } from "@/app/data/data";

export const ChallengeContext = createContext<ChallengeContextType | undefined>(
  undefined,
);

/**
 * Provides context: ChallengeContext
 */
export default function ChallengeProvider({ children }: ReactChildrenProp) {
  const [challenges, setChallenges] =
    useState<ChallengeData[]>(getChallengesList());

  const [challengesFilter, setChallengesFilter] = useState<
    ChallengeDifficulty[]
  >([]);

  /**
   * Adds a new filter to the challengesFilter state
   * @param newFilter new filter to be added to challengesFilter
   */
  const addFilter = (filterToAdd: ChallengeDifficulty) => {
    if (!challengesFilter.includes(filterToAdd)) {
      setChallengesFilter((prev) => [...prev, filterToAdd]);
    }
  };

  /**
   * Removes a filter from the challengesFilter state
   * @param filterToRemove filter to remove from challengesFilter
   */
  const removeFilter = (filterToRemove: ChallengeDifficulty) => {
    setChallengesFilter((prev) =>
      prev.filter((filter) => filter !== filterToRemove),
    );
  };

  /**
   * Clears the challengesFilter state
   */
  const clearFilters = () => {
    setChallengesFilter([]);
  };

  return (
    <ChallengeContext
      value={{
        challenges,
        setChallenges,
        challengesFilter,
        addFilter,
        removeFilter,
        clearFilters,
      }}
    >
      {children}
    </ChallengeContext>
  );
}
