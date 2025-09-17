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
      className="flex flex-col items-center overflow-hidden bg-white border-2 border-stone-300 rounded-lg w-80 h-130 
      md:w-100 md:h-150"
    >
      {/*Card Image*/}
      <div className="relative w-full flex-[1]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="h-[18.75rem] flex flex-col items-center p-4">
        <header className="mb-8">
          {/*Card Title*/}
          <h2 className="text-xl font-bold md:text-xl lg:text-2xl">
            {cardTitle}
          </h2>
        </header>

        <p className="text-center h-12 mb-8 lg:text-lg">{cardDescription}</p>

        {/*Technologies list*/}
        <div className="flex flex-wrap gap-4 mb-12">
          {technologies.map((tech, index) => (
            <div key={index}>
              <Technology name={tech} />
            </div>
          ))}
        </div>

        {/*Card Buttons*/}
        <div className="flex gap-8">
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
