import clsx from "clsx";
import AboutMeLinks from "../../shared/AboutMeLinks/AboutMeLinks";

/**
 * Renders the About me section with:
 * - title
 * - about me text
 * - download CV link
 */
export default function AboutMe() {
  return (
    <section className={clsx("mb-20", "sm:mb-32")}>
      {/*Title*/}
      <h1
        className={clsx(
          "mb-8 text-3xl font-bold text-indigo-950",
          "lg:text-4xl xl:mb-8",
          "dark:text-dark-title",
        )}
      >
        About me
      </h1>

      {/*Text*/}
      <p className={clsx("mb-4", "dark:text-dark-text")}>
        Hello, my name is Filipe Pereira and I&apos;m a{" "}
        <strong className="dark:font-extrabold">software developer</strong> with{" "}
        <strong className="dark:font-extrabold">3 years of experience</strong>.
        I had the opportunity to develop and maintain various applications using
        JavaScript, Spring Framework, SQL, and other technologies.
      </p>
      <p className={clsx("mb-4", "dark:text-dark-text")}>
        During my <strong className="dark:font-extrabold">internship</strong>, I
        worked as a <strong className="dark:font-extrabold">full-stack</strong>{" "}
        developer using the Laravel Framework, HTML, CSS, Bootstrap, Adminlte
        and phpMyAdmin.
      </p>
      <p className={clsx("mb-4", "dark:text-dark-text")}>
        I value <strong className="dark:font-extrabold">teamwork</strong> and
        continuous learning, always motivated to share knowledge.
      </p>
      <p className={clsx("dark:text-dark-text")}>
        Currently, my main goal is to specialize in{" "}
        <strong className="dark:font-extrabold">web development</strong>,
        focusing on React. I recently obtained certifications in React, React
        Router, Next.js, TypeScript, and Tailwind CSS, and I&apos;ve been
        developing personal projects to consolidate and apply the knowledge
        I&apos;ve acquired.
      </p>

      <div className={clsx("mt-16", "sm:mt-18 lg:mt-20 xl:mt-22 3xl:mt-24")}>
        <AboutMeLinks />
      </div>
    </section>
  );
}
