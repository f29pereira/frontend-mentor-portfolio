import type { CardListProps, CardProps } from "@/app/types";
import Card from "../Card/Card";

/**
 * Renders a grid of Card components
 *
 * Props are defined in {@link CardListProps}.
 */
export default function CardList({ cardList }: CardListProps) {
  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
      {cardList.map((card: CardProps, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          cardTitle={card.cardTitle}
          technologies={card.technologies}
          cardDescription={card.cardDescription}
          demoLink={card.demoLink}
          codeLink={card.codeLink}
        />
      ))}
    </div>
  );
}
