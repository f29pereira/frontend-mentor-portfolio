/**
 * Union of valid technology names
 */
export type TechnologyName = "nextjs" | "react" | "typescript" | "html" | "css";

/**
 * Props for the Card component
 */
export type CardProps = {
  //URL of image displayed at the top
  imageSrc: string;

  //Alt text for the image
  imageAlt: string;

  //Title of the card
  cardTitle: string;

  //Description of the card
  cardDescription: string;

  //Technologies used
  technologies: TechnologyName[];

  //Link URL for the "Live Demo"
  demoLink: string;

  //Link URL for the "View Code"
  codeLink: string;
};

/**
 * Props for the CardList component
 */
export type CardListProps = {
  cardList: CardProps[];
};

/**
 * Props for the LinkButton component
 */
export type LinkButtonProps = {
  //Link URL
  link: string;
  //Link description
  description: string;
};

/**
 * Props for the Technology component
 */
export type TechnologyProps = {
  //Technology name
  name: TechnologyName;
};
