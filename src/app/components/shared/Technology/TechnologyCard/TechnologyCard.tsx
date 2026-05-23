import clsx from "clsx";
import type { TechnologyCardProps } from "@/app/types";
import TechnologyIcon from "../TechnologyIcon/TechnologyIcon";
import { FiExternalLink } from "@/app/utils/icons";

/**
 * Renders a technology card with:
 * - icon
 * - description
 * - link
 *
 * Props are defined in {@link TechnologyCardProps}.
 */
export default function TechnologyCard({
  iconName,
  name,
  description,
  link,
}: TechnologyCardProps) {
  return (
    <div
      className={clsx(
        "flex items-stretch gap-4 max-w-[35rem] overflow-hidden",
        "bg-white border-2 border-stone-300 rounded-3xl shadow-lg",
        "hover:shadow-xl duration-700",
        "dark:bg-dark-card-bg dark:border-dark-card-border",
      )}
    >
      {/*Icon*/}
      <div className={clsx("flex items-center pl-4", "lg:py-8")}>
        <TechnologyIcon name={iconName} />
      </div>

      <div className={clsx("flex-1 flex flex-col justify-center gap-1 py-2")}>
        {/*Title*/}
        <h4
          className={clsx(
            "block text-center text-xl font-bold",
            "dark:text-dark-title",
          )}
        >
          {name}
        </h4>
        {/*Description*/}
        <span className={clsx("block text-center", "dark:text-dark-card-text")}>
          {description}
        </span>
      </div>

      <a
        className={clsx(
          "flex items-center p-4",
          "bg-indigo-600 hover:bg-indigo-500 text-xl text-white",
          "dark:bg-indigo-500 dark:hover:bg-indigo-400",
        )}
        href={link}
        target="_blank"
      >
        <FiExternalLink />
      </a>
    </div>
  );
}
