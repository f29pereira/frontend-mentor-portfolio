import clsx from "clsx";
import FooterLink from "../../shared/FooterLink/FooterLink";

/**
 * Renders the footer with social Links
 */
export default function Footer() {
  return (
    <footer
      className={clsx(
        "bg-white min-h-20 text-white p-12",
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
        <h2 className="sr-only">Social Links</h2>

        {/*Social links*/}
        <div className={clsx("flex flex-row gap-14", "lg:gap-20")}>
          <FooterLink url="mailto:f29.pereira@gmail.com" name="gmail" />

          <FooterLink
            url="https://www.linkedin.com/in/filipe-pereira-b757471b9"
            name="linkedin"
          />

          <FooterLink url="https://github.com/f29pereira" name="git hub" />

          <FooterLink
            url="https://www.frontendmentor.io/profile/f29pereira"
            name="frontend mentor"
          />
        </div>
      </div>
    </footer>
  );
}
