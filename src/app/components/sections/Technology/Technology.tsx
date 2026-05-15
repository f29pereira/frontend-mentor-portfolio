import clsx from "clsx";
import TechnologiesList from "../../shared/Technology/TechnologiesList/TechnologiesList";

/**
 * Renders the technology section with:
 * - title
 * - description
 * - list of technologies used for the challenges
 */
export default function Technology() {
  return (
    <section>
      {/*Title*/}
      <h2
        className={clsx(
          "mb-4 text-indigo-950 font-bold text-2xl",
          "lg:text-3xl xl:mb-8",
        )}
      >
        Technologies
      </h2>

      {/*Description*/}
      <p className={clsx("mt-8", "md:mt-10")}>
        These are the technologies I used across my Frontend Mentor challenges:
      </p>

      <div className={clsx("flex justify-center mt-8", "md:mt-10")}>
        <TechnologiesList />
      </div>
    </section>
  );
}
