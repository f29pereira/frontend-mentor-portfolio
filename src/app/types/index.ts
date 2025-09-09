/**
 * Props for the Card component
 */
export type CardProps = {
  //URL of image displayed at the top
  imageSrc: string;

  //Alt text for the image
  imageAlt: string;

  //Title of the card
  title: string;

  //Description of the card
  desctiption: string;

  //Link URL for the "Live Demo"
  demoLink: string;

  //Link URL for the "View Code"
  codeLink: string;
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
