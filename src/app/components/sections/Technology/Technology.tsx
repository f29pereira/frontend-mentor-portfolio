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
      <h2 className="text-indigo-950 font-bold text-2xl mb-4 lg:text-3xl xl:mb-8">
        Technologies
      </h2>

      {/*Description*/}
      <p className="mt-8 md:mt-10">
        These are the technologies I used across my Frontend Mentor challenges:
      </p>

      <div className="mt-8 md:mt-10">
        <TechnologiesList />
      </div>
    </section>
  );
}
