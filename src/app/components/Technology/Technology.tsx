import type { TechnologyProps } from "@/app/types";

/**
 * Renders technology name with associated color
 *
 * Props are defined in {@link TechnologyProps}.
 */
export default function Technology({ name }: TechnologyProps) {
  /**
   * Formats the technology name
   */
  const formatName = (techName: string) => {
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
      {formatName(name)}
    </div>
  );
}
