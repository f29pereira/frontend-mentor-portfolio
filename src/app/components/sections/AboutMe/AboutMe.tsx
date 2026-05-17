import clsx from "clsx";
import { FaFileDownload } from "@/app/utils/icons";

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
          "mb-4 text-3xl font-bold text-indigo-950",
          "lg:text-4xl xl:mb-8",
        )}
      >
        About me
      </h1>

      {/*Text*/}
      <p className="mb-2">
        Hello, my name is Filipe Pereira and I&apos;m a{" "}
        <strong>software developer</strong> with{" "}
        <strong>3 years of experience</strong>. I had the opportunity to develop
        and maintain various applications using JavaScript, Spring Framework,
        SQL, and other technologies.
      </p>
      <p className="mb-2">
        During my <strong>internship</strong>, I worked as a{" "}
        <strong>full-stack</strong> developer using the Laravel Framework, HTML,
        CSS, Bootstrap, Adminlte and phpMyAdmin.
      </p>
      <p className="mb-2">
        I value <strong>teamwork</strong> and continuous learning, always
        motivated to share knowledge.
      </p>
      <p>
        Currently, my main goal is to specialize in{" "}
        <strong>web development</strong>, focusing on React. I recently obtained
        certifications in React, React Router, Next.js, TypeScript, and Tailwind
        CSS, and I&apos;ve been developing personal projects to consolidate and
        apply the knowledge I&apos;ve acquired.
      </p>

      {/*Download CV link*/}
      <div
        className={clsx(
          "flex justify-center items-center mt-8",
          "sm:mt-12",
          "xl:mt-16",
          "3xl:mt-20",
        )}
      >
        <a
          className={clsx(
            "block px-8 py-4",
            "bg-indigo-600 shadow-lg shadow-indigo-500/50",
            "text-center text-white font-bold",
            "cursor-pointer rounded-full",
            "md:px-10 md:py-6 md:hover:bg-indigo-500",
          )}
          aria-label="Dowload my CV as PDF"
          href="cv/CV_Filipe_Pereira.pdf"
          target="_blank"
          download
        >
          <div
            className={clsx(
              "flex justify-center items-center gap-4",
              "lg:gap-6",
            )}
          >
            <FaFileDownload
              className={clsx("text-xl", "md:text-2xl", "xl:text-3xl")}
            />
            <span className={clsx("md:text-lg", "lg:text-xl", "xl:text-xl")}>
              Download my CV
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
