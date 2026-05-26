import clsx from "clsx";
import ChallengesList from "../../shared/Challenge/ChallengesList/ChallengesList";

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
      <h1
        className={clsx(
          "mb-4 text-2xl font-bold text-indigo-950",
          "lg:text-3xl xl:mb-8",
          "dark:text-dark-title",
        )}
      >
        Challenges
      </h1>

      {/*Description*/}
      <p className={clsx("mb-2", "dark:text-dark-text")}>
        This is a collection of coding challenges I&apos;ve completed from{" "}
        <a
          className={clsx(
            "underline text-blue-950 hover:text-cyan-500",
            "after:content-['_↗']",
            "dark:text-dark-inline-link",
          )}
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Frontend Mentor page (opens in new tab)"
        >
          <span aria-hidden="true">Frontend Mentor</span>
        </a>
        . In these challenges I focused on building{" "}
        <strong className="dark:font-extrabold">mobile-first</strong>,{" "}
        <strong className="dark:font-extrabold">accessible</strong> and{" "}
        <strong className="dark:font-extrabold">responsive layouts</strong>.
      </p>

      {/*List of challenges*/}
      <div className={clsx("mt-8", "xl:mt-16")}>
        <ChallengesList />
      </div>
    </section>
  );
}
