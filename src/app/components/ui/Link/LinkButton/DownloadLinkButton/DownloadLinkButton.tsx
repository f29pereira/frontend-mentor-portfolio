import clsx from "clsx";
import type { DownloadLinkButtonProps } from "@/app/types";
import { FaFileDownload } from "@/app/utils/icons";

/**
 * Renders a download link styled like a pill button
 *
 * Props are defined in {@link DownloadLinkButtonProps}.
 */
export default function DownloadLinkButton({
  anchorStyle,
  containerStyle,
  link,
  ariaLabel,
  description,
}: DownloadLinkButtonProps) {
  return (
    <a
      className={clsx("rounded-full cursor-pointer", anchorStyle)}
      href={link}
      aria-label={ariaLabel}
      download
    >
      <div className={clsx("flex justify-center items-center", containerStyle)}>
        <FaFileDownload
          className={clsx("text-xl", "md:text-2xl", "xl:text-3xl")}
          aria-hidden="true"
        />
        <span className="font-bold">{description}</span>
      </div>
    </a>
  );
}
