"use client"; // Client Component
import { createContext, useState } from "react";
import type {
  ChallengeContextType,
  ChallengeData,
  ReactChildrenProp,
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

  return (
    <ChallengeContext value={{ challenges, setChallenges }}>
      {children}
    </ChallengeContext>
  );
}
