"use client"; // Client Component
import { createContext, useState } from "react";
import type {
  ChallengeContextType,
  CardData,
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
  const [challenges, setChallenges] = useState<CardData[]>(getChallengesList());

  return (
    <ChallengeContext value={{ challenges, setChallenges }}>
      {children}
    </ChallengeContext>
  );
}
