import clsx from "clsx";
import type { CardListProps, CardProps } from "@/app/types";
import Card from "../../../shared/Cards/Card/Card";

/**
 * Renders a grid of Card components
 *
 * Props are defined in {@link CardListProps}.
 */
export default function CardList({ cardList }: CardListProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-8 w-full",
        "lg:grid-cols-2 lg:gap-y-8",
        "2xl:grid-cols-3 2xl:gap-y-10",
      )}
    >
      {cardList.map((card: CardProps, index) => (
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
  );
}
