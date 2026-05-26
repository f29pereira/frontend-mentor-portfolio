import clsx from "clsx";
import type { CardProps } from "@/app/types";
import Image from "next/image";
import { FiGlobe, IoLogoGithub } from "@/app/utils/icons";
import Difficulty from "../Challenge/Difficulty/Difficulty";
import ExternalLinkButton from "../../ui/LinkButton/ExternalLinkButton/ExternalLinkButton";

/**
 * Renders a card component with:
 * - Image
 * - Title and description
 * - "Live Demo" and "View Code" LinkButton components
 *
 * Props are defined in {@link CardProps}.
 */
export default function Card({
  imageSrc,
  imageAlt,
  cardTitle,
  cardDescription,
  demoLink,
  codeLink,
  difficulty,
}: CardProps) {
  const linkStyle = clsx(
    "block py-2 px-5 text-white bg-indigo-600",
    "md:hover:bg-indigo-500",
    "dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400",
  );

  return (
    <article
      className={clsx(
        "flex flex-col px-3.5 py-7",
        "bg-white border-2 border-stone-300 rounded-3xl shadow-lg",
        "hover:shadow-xl duration-700",
        "sm:px-5 sm:pb-10 md:px-7 md:pb-14 lg:px-3.5",
        "dark:bg-dark-card-bg dark:border-dark-card-border dark:hover:shadow-none",
      )}
    >
      {/*Card Image*/}
      <div
        className={clsx(
          "relative h-60 overflow-hidden",
          "border-1 border-stone-300 rounded-3xl",
          "sm:h-[25rem]",
          "dark:border-dark-card-border",
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={clsx(
            "rounded-3xl object-fill hover:scale-105 duration-700",
          )}
        />
      </div>

      {/*Card Body*/}
      <div className="flex-1 flex flex-col">
        <div
          className={clsx(
            "relative flex justify-center items-center my-4",
            "sm:my-6",
          )}
        >
          {/*Card Title*/}
          <h2
            className={clsx(
              "my-4 max-w-[12.5rem] text-center text-xl font-bold",
              "sm:max-w-[15rem] xl:max-w-[18rem] 2xl:max-w-[15rem] 3xl:max-w-full",
              "dark:text-dark-title",
            )}
          >
            {cardTitle}
          </h2>

          <div className="absolute right-0">
            <Difficulty difficulty={difficulty} />
          </div>
        </div>

        <p
          className={clsx(
            "mb-10 text-center",
            "sm:mb-14",
            "lg:max-w-[20rem] lg:mx-auto xl:max-w-[30rem] 3xl:max-w-[25em]",
            "dark:text-dark-card-text",
          )}
        >
          {cardDescription}
        </p>

        {/*Card Buttons*/}
        <div className={clsx("flex justify-center gap-8 mt-auto", "sm:gap-12")}>
          <ExternalLinkButton
            styles={linkStyle}
            link={demoLink}
            goToText={`${cardTitle} app`}
            icon={
              <FiGlobe
                className={clsx("text-xl", "md:text-2xl")}
                aria-hidden="true"
              />
            }
            description="App"
          />
          <ExternalLinkButton
            styles={linkStyle}
            link={codeLink}
            goToText={`${cardTitle} GitHub repository`}
            icon={
              <IoLogoGithub
                className={clsx("text-xl", "md:text-2xl")}
                aria-hidden="true"
              />
            }
            description="Repo"
          />
        </div>
      </div>
    </article>
  );
}
