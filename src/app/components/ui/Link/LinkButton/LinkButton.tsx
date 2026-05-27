import clsx from "clsx";
import type { LinkButtonProps } from "@/app/types";
import Link from "next/link";
import { FiArrowUpRight } from "@/app/utils/icons";

/**
 * Renders a route link (using the Next.js Link component) styled like a pill button
 *
 * Props are defined in {@link LinkButtonProps}.
 */
export default function LinkButton({
  anchorStyle,
  containerStyle,
  link,
  ariaLabel,
  description,
}: LinkButtonProps) {
  return (
    <Link
      className={clsx("rounded-full cursor-pointer", anchorStyle)}
      href={link}
      aria-label={ariaLabel}
    >
      <div className={clsx("flex justify-center items-center", containerStyle)}>
        <FiArrowUpRight
          className={clsx("text-2xl", "md:text-3xl", "xl:text-4xl")}
          aria-hidden="true"
        />
        <span className="font-bold">{description}</span>
      </div>
    </Link>
  );
}
