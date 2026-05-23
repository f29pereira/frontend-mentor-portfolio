"use client"; // Client Component
import clsx from "clsx";
import type { CardProps } from "@/app/types";
import Card from "../../Card/Card";
import { useChallenge } from "@/app/components/customHooks/useChallenge";
import ChallengeFilter from "../ChallengeFilter/ChallengeFilter/ChallengeFilter";

/**
 * Renders a list of project challenges
 *
 * If the list is empty renders a message
 *
 * Props are defined in {@link CardListProps}.
 */
export default function ChallengesList() {
  const { challenges, challengesFilter } = useChallenge();

  const filteredChallenges =
    challengesFilter.length === 0
      ? challenges
      : challenges.filter((challenge) =>
          challengesFilter.includes(challenge.difficulty),
        );

  return (
    <>
      <ChallengeFilter />

      {filteredChallenges.length === 0 ? (
        <div className="mt-8 text-center">
          <p className="text-dark-text">
            No challenges for the current filter.
          </p>
        </div>
      ) : (
        <div
          className={clsx(
            "relative grid grid-cols-1 gap-8 w-full",
            "lg:grid-cols-2 lg:gap-y-8",
            "2xl:grid-cols-3 2xl:gap-y-10",
          )}
        >
          {filteredChallenges.map((card: CardProps) => (
            <Card
              key={card.cardTitle}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              cardTitle={card.cardTitle}
              cardDescription={card.cardDescription}
              demoLink={card.demoLink}
              codeLink={card.codeLink}
              difficulty={card.difficulty}
            />
          ))}
        </div>
      )}
    </>
  );
}
