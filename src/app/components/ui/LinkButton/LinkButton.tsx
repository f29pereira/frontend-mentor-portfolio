import clsx from "clsx";
import type { LinkButtonProps } from "@/app/types";

/**
 * Renders a link styled like a pill button
 * Always opens the link in a new tab.
 *
 * Props are defined in {@link LinkButtonProps}.
 */
export default function LinkButton({ link, description }: LinkButtonProps) {
  return (
    <a
      className={clsx(
        "py-3 px-6 rounded-full text-sm bg-indigo-600",
        "hover:bg-indigo-500",
        "sm:text-base",
      )}
      target="_blank"
      href={link}
    >
      <span
        className={clsx(
          "flex justify-center items-center gap-2 text-white",
          "md:gap-4",
        )}
      >
        {description}
      </span>
    </a>
  );
}
