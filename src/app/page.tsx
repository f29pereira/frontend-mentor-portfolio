import { CardProps } from "./types";
import CardList from "./components/Cards/CardList/CardList";

export default function Home() {
  //List of Card components
  const cardList: CardProps[] = [
    {
      imageSrc: "images/fylo_landing_page.png",
      imageAlt: "Fylo Landing Page Challenge",
      cardTitle: "Fylo landing page",
      technologies: ["nextjs", "react", "typescript", "html", "css"],
      cardDescription:
        "A dark-themed landing page design for Fylo, a cloud storage service.",
      demoLink: "https://f29pereira.github.io/fylo/",
      codeLink: "https://github.com/f29pereira/fylo",
    },
    {
      imageSrc: "images/bento_grid.png",
      imageAlt: "Bento Grid Challenge",
      cardTitle: "Bento Grid",
      technologies: ["nextjs", "react", "html", "css"],
      cardDescription: "Bento style grid layout.",
      demoLink: "https://f29pereira.github.io/bento-grid/",
      codeLink: "https://github.com/f29pereira/bento-grid",
    },
    {
      imageSrc: "images/order_summary.png",
      imageAlt: "Order Summary Challenge",
      cardTitle: "Order Summary",
      technologies: ["nextjs", "react", "typescript", "html", "css"],
      cardDescription:
        "Order summary card component for music subscription plan.",
      demoLink: "https://f29pereira.github.io/order-summary/",
      codeLink: "https://github.com/f29pereira/order-summary",
    },
  ];

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
