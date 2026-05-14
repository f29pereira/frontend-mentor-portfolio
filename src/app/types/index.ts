import { ReactNode } from "react";

/**
 * Union of valid technology names
 */
export type TechnologyName =
  | "api"
  | "css"
  | "figma"
  | "git_hub"
  | "git_hub_actions"
  | "hero_icons"
  | "html"
  | "jest"
  | "nextjs"
  | "nvda"
  | "playwright"
  | "react"
  | "react_icons"
  | "react_testing_library"
  | "redux_toolkit"
  | "tailwind_css"
  | "typescript";

/**
 * Props for the Card component
 * @property imageSrc        - URL of image displayed at the top
 * @property imageAlt        - alt text for the image
 * @property cardTitle       - title of the card
 * @property cardDescription - description of the card
 * @property technologies    - technologies used
 * @property demoLink        - link URL for the "Live Demo" button
 * @property codeLink        - link URL for the "View Code" button
 */
export type CardProps = {
  imageSrc: string;
  imageAlt: string;
  cardTitle: string;
  cardDescription: string;
  technologies: TechnologyName[];
  demoLink: string;
  codeLink: string;
};

/**
 * Props for the CardList component
 * @property cardList - list of Card components
 */
export type CardListProps = {
  cardList: CardProps[];
};

/**
 * Props for the TechnologyCard component
 * @property icon        - icon representing the technology
 * @property name        - name
 * @property description - description of the purpose of the technology
 * @property link        - technology website
 */
export type TechnologyCardProps = {
  icon: ReactNode;
  name: string;
  description: string;
  link: string;
};

/**
 * Props for the LinkButton component
 * @property link        - link URL
 * @property description - button description
 */
export type LinkButtonProps = {
  link: string;
  description: ReactNode;
};

/**
 * Props for the Technology component
 * @property name - technology name
 */
export type TechnologyProps = {
  name: TechnologyName;
};
