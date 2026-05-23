import clsx from "clsx";
import {
  FaLinkedin,
  SiGmail,
  IoLogoGithub,
  SiFrontendmentor,
} from "@/app/utils/icons";

/**
 * Renders the footer with email and account links
 */
export default function Footer() {
  return (
    <footer
      className={clsx(
        "bg-blue-800 min-h-20 text-white p-12",
        "lg:p-20",
        "dark:bg-slate-950",
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-center gap-12",
          "lg:flex-row lg:justify-center lg:gap-20",
        )}
      >
        {/*Email*/}
        <div className={clsx("flex justify-center items-center gap-4")}>
          <SiGmail className={clsx("text-xl", "dark:text-dark-inline-link")} />
          <span
            className={clsx(
              "text-sm lg:text-base",
              "dark:text-dark-inline-link",
            )}
          >
            f29.pereira@gmail.com
          </span>
        </div>

        {/*Account links*/}
        <div className={clsx("flex flex-row gap-12 text-4xl", "lg:gap-20")}>
          <a
            href="https://www.linkedin.com/in/filipe-pereira-b757471b9"
            target="_blank"
          >
            <FaLinkedin className="dark:text-dark-inline-link" />
          </a>
          <a href="https://github.com/f29pereira" target="_blank">
            <IoLogoGithub className="dark:text-dark-inline-link" />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/f29pereira"
            target="_blank"
          >
            <SiFrontendmentor className="dark:text-dark-inline-link" />
          </a>
        </div>
      </div>
    </footer>
  );
}
