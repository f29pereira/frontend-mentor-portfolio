import clsx from "clsx";
import CardList from "../../shared/Cards/CardList/CardList";
import { cardList } from "@/app/data/data";

/**
 * Renders the Challenge section with:
 * - title
 * - description
 * - list of challenges
 */
export default function Challenge() {
  return (
    <section className={clsx("mb-20", "sm:mb-32")}>
      {/*Title*/}
      <h2
        className={clsx(
          "mb-4 text-2xl font-bold text-indigo-950",
          "lg:text-3xl xl:mb-8",
        )}
      >
        Challenges
      </h2>

      {/*Description*/}
      <p>
        This is a collection of coding challenges I&apos;ve completed from{" "}
        <a
          className={clsx(
            "underline text-blue-950 hover:text-cyan-500",
            "after:content-['_↗']",
          )}
          href="https://www.frontendmentor.io/home"
          target="_blank"
        >
          Frontend Mentor
        </a>
      </p>

      {/*List of challenges*/}
      <div className={clsx("flex justify-center mt-8", "xl:mt-16")}>
        <CardList cardList={cardList} />
      </div>
    </section>
  );
}
