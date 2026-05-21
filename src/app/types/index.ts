import { ReactNode, Dispatch, SetStateAction } from "react";

/* ---------------------------------------------------- */
/* Components Props types                               */
/* ---------------------------------------------------- */

/**
 * Type for React children
 */
export type ReactChildrenProp = {
  children: ReactNode;
};

/**
 * Props for the Card component
 */
export type CardProps = ChallengeData & {};

/**
 * Props for the Difficulty component
 */
export type DifficultyProps = {
  difficulty: ChallengeDifficulty;
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
/* Context Provider related types                       */
/* ---------------------------------------------------- */

/**
 * Type for the ChallengeContext
 * @property challenges          - list of challenges state
 * @property setChallenges       - challenges state setter
 * @property challengesFilter    - list of filters state
 * @property addFilter           - adds new filter to the filters state
 * @property removeFilter        - removes filter from the filters state
 * @property clearFilters        - clears the filters state
 */
export type ChallengeContextType = {
  challenges: ChallengeData[];
  setChallenges: Dispatch<SetStateAction<ChallengeData[]>>;
  challengesFilter: ChallengeDifficulty[];
  addFilter: (filterToAdd: ChallengeDifficulty) => void;
  removeFilter: (filterToRemove: ChallengeDifficulty) => void;
  clearFilters: () => void;
};

/**
 * Type for the ThemeContextContext
 * @property  isDarkTheme -  is the dark mode theme active
 * @property  toggle      -  toggles the dark theme state
 */
export type ThemeContextType = {
  isDarkTheme: boolean;
  toggle: () => void;
};

/* ---------------------------------------------------- */
/* Other component related types                        */
/* ---------------------------------------------------- */

/**
 * Type for the challenge data
 * @property imageSrc        - URL of image displayed at the top
 * @property imageAlt        - alt text for the image
 * @property cardTitle       - title of the card
 * @property cardDescription - description of the card
 * @property demoLink        - link URL for the "Live Demo" button
 * @property codeLink        - link URL for the "View Code" button
 * @property difficulty      - challenge difficulty
 */
export type ChallengeData = {
  imageSrc: string;
  imageAlt: string;
  cardTitle: string;
  cardDescription: string;
  demoLink: string;
  codeLink: string;
  difficulty: ChallengeDifficulty;
};

/**
 * Type for the challenge difficulty
 */
export type ChallengeDifficulty =
  | "newbie"
  | "junior"
  | "intermediate"
  | "advanced";

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
