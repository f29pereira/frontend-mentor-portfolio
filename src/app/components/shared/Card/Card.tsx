import clsx from "clsx";
import type { CardProps } from "@/app/types";
import Image from "next/image";
import { FiExternalLink, IoLogoGithub } from "@/app/utils/icons";
import Difficulty from "../Challenge/Difficulty/Difficulty";
import LinkButton from "../../ui/LinkButton/LinkButton";

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
          <h3
            className={clsx(
              "my-4 max-w-[12.5rem] text-center text-xl font-bold",
              "sm:max-w-[15rem] xl:max-w-[18rem] 2xl:max-w-[15rem] 3xl:max-w-full",
              "dark:text-dark-title",
            )}
          >
            {cardTitle}
          </h3>

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
          <LinkButton
            link={demoLink}
            description={
              <>
                <FiExternalLink className={clsx("text-xl", "md:text-2xl")} />
                <span className="font-bold">Demo</span>
              </>
            }
          />
          <LinkButton
            link={codeLink}
            description={
              <>
                <IoLogoGithub className={clsx("text-xl", "md:text-2xl")} />
                <span className="font-bold">Repo</span>
              </>
            }
          />
        </div>
      </div>
    </article>
  );
}
