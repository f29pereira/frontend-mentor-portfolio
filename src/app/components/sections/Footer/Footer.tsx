import clsx from "clsx";
import FooterLink from "../../shared/FooterLink/FooterLink";

/**
 * Renders the footer with social Links
 */
export default function Footer() {
  return (
    <footer
      className={clsx(
        "bg-white min-h-20 text-white py-14",
        "md:py-16 lg:py-20 xl:py-24 3xl:py-30",
        "dark:bg-slate-950",
      )}
    >
      <div
        className={clsx(
          "flex justify-center items-center gap-12",
          "sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28",
        )}
      >
        <h2 className="sr-only">Social Links</h2>

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
    </footer>
  );
}
