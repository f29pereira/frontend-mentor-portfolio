"use client"; // Client Component
import { useContext } from "react";
import { ChallengeContext } from "@/app/components/context/ChallengeProvider/ChallengeProvider";

/**
 * Custom Hook: allows access to the ChallengeContext
 */
export function useChallenge() {
  const context = useContext(ChallengeContext);

  if (!context) {
    throw new Error("useChallenge must be used inside a ChallengeProvider");
  }

  return context;
}
