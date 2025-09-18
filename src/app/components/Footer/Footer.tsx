import {
  FaLinkedin,
  SiGmail,
  FaGithub,
  SiFrontendmentor,
} from "@/app/utils/icons";

/**
 * Renders the footer with email and account links
 */
export default function Footer() {
  return (
    <footer className="bg-blue-800 min-h-20 text-white p-12 lg:p-20">
      <div
        className="flex flex-col items-center gap-12 
                      lg:flex-row lg:justify-center lg:gap-20"
      >
        {/*Email*/}
        <div className="flex justify-center items-center gap-4">
          <SiGmail className="text-xl" />
          <span className="text-sm lg:text-base">f29.pereira@gmail.com</span>
        </div>

        {/*Account links*/}
        <div className="flex flex-row gap-12 text-4xl lg:gap-20">
          <a href="https://www.frontendmentor.io/home" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/f29pereira" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/f29pereira"
            target="_blank"
          >
            <SiFrontendmentor />
          </a>
        </div>
      </div>
    </footer>
  );
}
