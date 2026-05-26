import clsx from "clsx";
import type { ExternalLinkButtonProps } from "@/app/types";

/**
 * Renders a link (opens in a new tab) styled like a pill button
 *
 * Props are defined in {@link ExternalLinkButtonProps}.
 */
export default function ExternalLinkButton({
  styles,
  link,
  goToText,
  icon,
  description,
}: ExternalLinkButtonProps) {
  return (
    <a
      className={clsx("rounded-full cursor-pointer", "sm:text-base", styles)}
      href={link}
      aria-label={`Go to ${goToText} (opens in new tab)`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={clsx("flex justify-center items-center gap-2", "md:gap-4")}
      >
        {icon}
        <span className="font-bold">{description}</span>
      </div>
    </a>
  );
}
