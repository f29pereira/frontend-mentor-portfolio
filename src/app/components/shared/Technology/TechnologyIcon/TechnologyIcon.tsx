import type { TechnologyProps } from "@/app/types";
import { getIcon } from "./TechnologyIcon.util";

/**
 * Renders technology icon with associated color
 *
 * Props are defined in {@link TechnologyProps}.
 */
export default function TechnologyIcon({ name }: TechnologyProps) {
  return (
    <div
      className="font-extrabold text-sm"
      style={{ color: `var(--color-${name})` }}
    >
      <span className="text-4xl md:text-4xl 2xl:text-5xl">{getIcon(name)}</span>
    </div>
  );
}
