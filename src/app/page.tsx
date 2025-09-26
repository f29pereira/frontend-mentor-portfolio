import CardList from "./components/Cards/CardList/CardList";
import { cardList } from "./data/data";

export default function Home() {
  return (
    <>
      {/*Intro Section*/}
      <section className="mb-4 lg:mb-10">
        <p className="text-center text-lg lg:text-xl">
          A collection of coding challenges I`ve completed from
          <a
            className="mx-2 underline text-blue-950 hover:text-cyan-500"
            href="https://www.frontendmentor.io/home"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </p>
      </section>

      {/*Challenge Cards Section*/}
      <section className="flex justify-center">
        <CardList cardList={cardList} />
      </section>
    </>
  );
}
