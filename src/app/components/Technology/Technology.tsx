import type { TechnologyProps } from "@/app/types";
import {
  RiNextjsFill,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  SiTypescript,
} from "@/app/utils/icons";
import { ReactNode } from "react";

/**
 * Renders technology name with associated color
 *
 * Props are defined in {@link TechnologyProps}.
 */
export default function Technology({ name }: TechnologyProps) {
  /**
   * Sets technology icon
   */
  const getIcon = (techName: string): ReactNode => {
    switch (techName) {
      case "nextjs":
        return <RiNextjsFill />;
      case "react":
        return <FaReact />;
      case "typescript":
        return <SiTypescript />;
      case "html":
        return <FaHtml5 />;
      case "css":
        return <FaCss3Alt />;
      default:
        return techName;
    }
  };

  /**
   * Formats technology name
   */
  const formatName = (techName: string): string => {
    switch (techName) {
      case "nextjs":
        return "NextJS";
      case "typescript":
        return "TypeScript";
      case "html":
        return "HTML";
      case "css":
        return "CSS";
      default:
        return techName[0].toUpperCase() + techName.slice(1);
    }
  };

  return (
    <div
      className="font-extrabold text-sm"
      style={{ color: `var(--color-${name})` }}
    >
      <span className="text-3xl md:text-4xl" title={formatName(name)}>
        {getIcon(name)}
      </span>
    </div>
  );
}
