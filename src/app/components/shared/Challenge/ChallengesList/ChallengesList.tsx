"use client"; // Client Component
import clsx from "clsx";
import type { CardProps } from "@/app/types";
import Card from "../../Card/Card";
import ChallengeFilterButton from "../../ChallengeFilter/ChallengeFilterButton/ChallengeFilterButton";
import { useChallenge } from "@/app/components/customHooks/useChallenge";

/**
 * Renders a list of project challenges
 *
 * Props are defined in {@link CardListProps}.
 */
export default function CardList() {
  const { challenges } = useChallenge();

  return (
    <>
      <div className="flex justify-end mb-4">
        <ChallengeFilterButton />
      </div>

      <div
        className={clsx(
          "relative grid grid-cols-1 gap-8 w-full",
          "lg:grid-cols-2 lg:gap-y-8",
          "2xl:grid-cols-3 2xl:gap-y-10",
        )}
      >
        {challenges.map((card: CardProps, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            cardTitle={card.cardTitle}
            cardDescription={card.cardDescription}
            demoLink={card.demoLink}
            codeLink={card.codeLink}
          />
        ))}
      </div>
    </>
  );
}
