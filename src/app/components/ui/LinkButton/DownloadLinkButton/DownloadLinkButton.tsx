import clsx from "clsx";
import type { DownloadLinkButtonProps } from "@/app/types";
import { FaFileDownload } from "@/app/utils/icons";

/**
 * Renders a download link styled like a pill button
 *
 * Props are defined in {@link DownloadLinkButtonProps}.
 */
export default function DownloadLinkButton({
  styles,
  link,
  ariaLabel,
  description,
}: DownloadLinkButtonProps) {
  return (
    <a
      className={clsx("rounded-full cursor-pointer", styles)}
      href={link}
      aria-label={ariaLabel}
      download
    >
      <div
        className={clsx("flex justify-center items-center gap-4", "md:gap-6")}
      >
        <FaFileDownload
          className={clsx("text-xl", "md:text-2xl", "xl:text-3xl")}
          aria-hidden="true"
        />
        <span className="font-bold">{description}</span>
      </div>
    </a>
  );
}
