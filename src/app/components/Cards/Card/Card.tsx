import type { CardProps } from "@/app/types";
import Image from "next/image";
import LinkButton from "../../LinkButton/LinkButton";
import Technology from "../../Technology/Technology";
import { FiExternalLink, FaGithub } from "@/app/utils/icons";

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
  technologies,
  cardDescription,
  demoLink,
  codeLink,
}: CardProps) {
  return (
    <div
      className="flex flex-col items-center overflow-hidden bg-white border-2 border-stone-300 
      rounded-lg shadow-lg hover:shadow-xl duration-700 w-85 h-140 
      md:w-100 md:h-150 
      lg:w-110 lg:h-165"
    >
      {/*Card Image*/}
      <div className="relative w-full flex-[1] overflow-hidden border-b-2 border-b-stone-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover hover:scale-105 duration-700"
        />
      </div>

      {/*Card Body*/}
      <div className="h-[20rem] flex flex-col items-center p-4 overflow-hidden md:h-[22rem] lg:h-[22rem]">
        <header className="mb-8">
          {/*Card Title*/}
          <h2 className="text-xl font-bold md:text-xl lg:text-2xl">
            {cardTitle}
          </h2>
        </header>

        <p className="text-center h-20 mb-4 lg:text-lg">{cardDescription}</p>

        {/*Technologies list*/}
        <div className="flex flex-wrap justify-center gap-4 w-[16.5rem] h-16 mb-4 md:mb-16">
          {technologies.map((tech, index) => (
            <div key={index}>
              <Technology name={tech} />
            </div>
          ))}
        </div>

        {/*Card Buttons*/}
        <div className="flex gap-8 mb-4">
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
                <FaGithub className="text-xl" />
                <span className="font-bold">Repo</span>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
