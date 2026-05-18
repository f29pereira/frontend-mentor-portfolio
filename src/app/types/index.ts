import { ReactNode } from "react";

/* ---------------------------------------------------- */
/* Components Props types                               */
/* ---------------------------------------------------- */

/**
 * Props for the Card component
 */
export type CardProps = CardData & {};

/**
 * Props for the CardList component
 * @property cardList - list of Card components
 */
export type CardListProps = {
  cardList: CardProps[];
};

/**
 * Props for the TechnologyCard component
 * @property iconName    - icon representing the technology
 * @property name        - name
 * @property description - description of the purpose of the technology
 * @property link        - technology website
 */
export type TechnologyCardProps = {
  iconName: TechnologyName;
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

/* ---------------------------------------------------- */
/* Other component related types                        */
/* ---------------------------------------------------- */

/**
 * Props for the Card component
 * @property imageSrc        - URL of image displayed at the top
 * @property imageAlt        - alt text for the image
 * @property cardTitle       - title of the card
 * @property cardDescription - description of the card
 * @property demoLink        - link URL for the "Live Demo" button
 * @property codeLink        - link URL for the "View Code" button
 */
export type CardData = {
  imageSrc: string;
  imageAlt: string;
  cardTitle: string;
  cardDescription: string;
  demoLink: string;
  codeLink: string;
};

/**
 * Union of valid technology names
 */
export type TechnologyName =
  | "api"
  | "css"
  | "clsx"
  | "figma"
  | "focus_trap_react"
  | "git_hub"
  | "git_hub_actions"
  | "hero_icons"
  | "html"
  | "jest"
  | "lighthouse"
  | "nextjs"
  | "nodejs"
  | "nvda"
  | "playwright"
  | "react"
  | "react_dev_tools"
  | "react_icons"
  | "react_testing_library"
  | "redux_dev_tools"
  | "redux_toolkit"
  | "tailwind_css"
  | "typescript";

/**
 * Union of valid technology category names
 */
export type TechnologyCategory =
  | "Framework"
  | "Markup and Styling"
  | "Programming Language"
  | "Runtime"
  | "Libraries"
  | "State Management"
  | "Developer Tools"
  | "Testing Frameworks and Libraries"
  | "Accessibility"
  | "Version control and CI/CD"
  | "Design";

/**
 * Type for the technology data
 * @property category     - technology category
 * @property technologies - technologies list
 */
export type TechnologyData = {
  category: TechnologyCategory;
  technologies: TechnologyCardProps[];
};
