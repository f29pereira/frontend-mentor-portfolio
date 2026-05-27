import clsx from "clsx";
import type { ExternalLinkProps } from "@/app/types";

/**
 * Renders a link that opens in a new tab
 *
 * Props are defined in {@link ExternalLinkProps}.
 */
export default function ExternalLink({
  anchorStyle,
  containerStyle,
  link,
  goToText,
  icon,
  description,
}: ExternalLinkProps) {
  return (
    <a
      className={clsx("cursor-pointer", anchorStyle)}
      href={link}
      aria-label={`Go to ${goToText} (opens in new tab)`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={clsx("flex justify-center items-center", containerStyle)}>
        {icon}
        <span className="font-bold">{description}</span>
      </div>
    </a>
  );
}
