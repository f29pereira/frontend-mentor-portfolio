import clsx from "clsx";
import type { FooterLinkProps, FooterLinksName } from "@/app/types";
import {
  FaLinkedin,
  SiGmail,
  IoLogoGithub,
  SiFrontendmentor,
} from "@/app/utils/icons";

/**
 * Renders the a footer link that opens a new tab when clicked
 */
export default function FooterLinks({ url, name }: FooterLinkProps) {
  /**
   * Returns the message (used by aria-label) for a given link name
   */
  const getLinkMessage = (name: FooterLinksName) => {
    switch (name) {
      case "gmail":
        return "Send an email to Filipe Pereira";
      case "linkedin":
      case "git hub":
      case "frontend mentor":
        return `Go to Filipe Pereira's ${name} profile (opens in new tab)`;
    }
  };

  /**
   * Returns the icon for a given link name
   * @param name link name
   */
  const getLinkIcon = (name: FooterLinksName) => {
    const size = "text-2xl lg:text-3xl 3xl:text-4xl";
    const lightTheme = "text-indigo-600 hover:text-indigo-500";
    const darkTheme =
      "dark:text-dark-inline-link dark:hover:text-dark-inline-link-hover";

    switch (name) {
      case "gmail":
        return <SiGmail className={clsx(size, lightTheme, darkTheme)} />;
      case "linkedin":
        return <FaLinkedin className={clsx(size, lightTheme, darkTheme)} />;
      case "git hub":
        return <IoLogoGithub className={clsx(size, lightTheme, darkTheme)} />;
      case "frontend mentor":
        return (
          <SiFrontendmentor className={clsx(size, lightTheme, darkTheme)} />
        );
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      aria-label={getLinkMessage(name)}
      rel="noopener noreferrer"
    >
      {getLinkIcon(name)}
    </a>
  );
}
