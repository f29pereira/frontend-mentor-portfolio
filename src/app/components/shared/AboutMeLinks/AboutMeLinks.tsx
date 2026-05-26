import clsx from "clsx";
import LinkButton from "../../ui/LinkButton/LinkButton";
import DownloadLinkButton from "../../ui/LinkButton/DownloadLinkButton/DownloadLinkButton";

/**
 * Renders the "Download my CV" and "Go to challenges" links
 */
export default function AboutMeLinks() {
  const sharedStyle = clsx(
    "block max-w-[300px] px-8 py-4 text-large text-white",
    "md:px-10 md:py-6",
    "lg:text-xl",
    "xl:max-w-[350px]",
  );

  const downloadCVStyle = clsx(
    sharedStyle,
    "bg-rose-600 shadow-lg shadow-rose-500/50",
    "md:hover:bg-rose-500",
    "dark:bg-rose-500 dark:shadow-none dark:hover:bg-rose-400",
  );

  const challengesStyle = clsx(
    sharedStyle,
    "bg-indigo-600 shadow-lg shadow-indigo-500/50",
    "md:hover:bg-indigo-500",
    "dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400",
  );

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center gap-16",
        "sm:flex-row",
        "lg:gap-20 xl:gap-24 2xl:gap-30 3xl:gap-40",
      )}
    >
      <DownloadLinkButton
        styles={downloadCVStyle}
        link="cv/CV_Filipe_Pereira.pdf"
        ariaLabel="Download my CV as PDF"
        description="Download my CV"
      />

      <LinkButton
        styles={challengesStyle}
        link="/challenges"
        ariaLabel="Go to challenges page"
        description="Go to challenges"
      />
    </div>
  );
}
