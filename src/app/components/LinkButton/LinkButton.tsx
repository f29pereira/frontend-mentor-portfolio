import type { LinkButtonProps } from "@/app/types";
import Link from "next/link";

/**
 * Renders Link component styled like a button
 * Always opens link in a new tab.
 *
 * Props are defined in {@link LinkButtonProps}.
 */
export default function LinkButton({ link, description }: LinkButtonProps) {
  return (
    <Link
      className="bg-blue-600 py-3 px-6 rounded-xl text-sm hover:bg-blue-500 md:text-base "
      target="_blank"
      href={link}
    >
      <span className="flex justify-center items-center gap-2 text-white">
        {description}
      </span>
    </Link>
  );
}
