import CardList from "../../Cards/CardList/CardList";
import { cardList } from "@/app/data/data";

/**
 * Renders the Challenge section with:
 * - title
 * - description
 * - list of challenges
 */
export default function Challenge() {
  return (
    <section className="mb-8">
      {/*Title*/}
      <h2 className="font-bold text-indigo-950 text-2xl mb-4 lg:text-3xl xl:mb-8">
        Challenges
      </h2>

      {/*Description*/}
      <p>
        This is a collection of coding challenges I&apos;ve completed from{" "}
        <a
          className="underline text-blue-950 hover:text-cyan-500 after:content-['_↗']"
          href="https://www.frontendmentor.io/home"
          target="_blank"
        >
          Frontend Mentor
        </a>
      </p>

      {/*List of challenges*/}
      <div className="flex justify-center mt-8 xl:mt-16">
        <CardList cardList={cardList} />
      </div>
    </section>
  );
}
