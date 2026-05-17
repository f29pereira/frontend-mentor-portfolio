import clsx from "clsx";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import { getTechnologiesList } from "@/app/data/data";
/**
 * Renders the list of technologies, used for the challenges, divided into the following categories:
 * - framework
 * - markup and styling
 * - programming language
 * - libraries
 * - state management
 * - testing Frameworks and libraries
 * - accessibility
 * - version control and CI/CD
 * - design
 */
export default function TechnologiesList() {
  const technologiesList = getTechnologiesList();

  return (
    <div className={clsx("mt-8", "md:mt-10")}>
      {technologiesList.map((technology, index: number) => (
        <div className={clsx("mb-10", "sm:mb-12", "lg:mb-14")} key={index}>
          {/*Technology category*/}
          <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
            {technology.category}
          </h3>

          {/*Technology list*/}
          <div
            className={clsx(
              "grid grid-cols-1 gap-4",
              "lg:grid-cols-2 lg:gap-y-4.5",
              "2xl:grid-cols-3",
            )}
          >
            {technology.technologies.map((item, index: number) => (
              <TechnologyCard
                key={index}
                iconName={item.iconName}
                name={item.name}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
