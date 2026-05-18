import clsx from "clsx";
import type { CardProps } from "@/app/types";
import Image from "next/image";
import LinkButton from "../../ui/LinkButton/LinkButton";
import { FiExternalLink, IoLogoGithub } from "@/app/utils/icons";

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
}: CardProps) {
  return (
    <article
      className={clsx(
        "flex flex-col px-3.5 py-5",
        "bg-white border-2 border-stone-300 rounded-3xl shadow-lg",
        "hover:shadow-xl duration-700",
      )}
    >
      {/*Card Image*/}
      <div
        className={clsx(
          "relative h-60 overflow-hidden",
          "border-1 border-stone-300 rounded-3xl",
          "sm:h-[25rem]",
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
        {/*Card Title*/}
        <h3 className={clsx("my-4 text-center font-bold text-xl", "sm:my-6")}>
          {cardTitle}
        </h3>

        <p className={clsx("mb-8 text-center", "sm:mb-10")}>
          {cardDescription}
        </p>

        {/*Card Buttons*/}
        <div className={clsx("flex justify-center gap-8 mt-auto")}>
          <LinkButton
            link={demoLink}
            description={
              <>
                <FiExternalLink className="text-xl" />
                <span className="font-bold">Demo</span>
              </>
            }
          />
          <LinkButton
            link={codeLink}
            description={
              <>
                <IoLogoGithub className="text-xl" />
                <span className="font-bold">Repo</span>
              </>
            }
          />
        </div>
      </div>
    </article>
  );
}
