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
    const iconClassName =
      "text-2xl text-indigo-600 lg:text-3xl 3xl:text-4xl dark:text-dark-inline-link";

    switch (name) {
      case "gmail":
        return <SiGmail className={iconClassName} />;
      case "linkedin":
        return <FaLinkedin className={iconClassName} />;
      case "git hub":
        return <IoLogoGithub className={iconClassName} />;
      case "frontend mentor":
        return <SiFrontendmentor className={iconClassName} />;
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
