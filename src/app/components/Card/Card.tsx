import type { CardProps } from "@/app/types";
import Image from "next/image";
import LinkButton from "../LinkButton/LinkButton";

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
  title,
  desctiption,
  demoLink,
  codeLink,
}: CardProps) {
  return (
    <div
      className="flex flex-col items-center overflow-hidden bg-white border-2 border-stone-300 rounded-lg w-80 h-130 
      md:w-100 md:h-150"
    >
      <div className="relative w-full flex-[2]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="flex-[1] flex flex-col items-center p-4">
        <header className="mb-4">
          <h2 className="text-lg font-bold md:text-xl lg:mb-8">{title}</h2>
        </header>
        <p className="text-center text-sm mb-6 lg:mb-10">{desctiption}</p>
        <div className="flex gap-8">
          <LinkButton link={demoLink} description="Live Demo" />
          <LinkButton link={codeLink} description="View Code" />
        </div>
      </div>
    </div>
  );
}
