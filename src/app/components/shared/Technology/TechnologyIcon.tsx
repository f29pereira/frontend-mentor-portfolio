import type { TechnologyProps } from "@/app/types";
import {
  RiNextjsFill,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  SiTailwindcss,
  SiTypescript,
  AiOutlineApi,
  SiJest,
  SiTestinglibrary,
  TbBrandRedux,
  SiGithubactions,
  IoLogoGithub,
} from "@/app/utils/icons";
import { ReactNode } from "react";
import Figma from "../../ui/Icons/Figma/Figma";
import HeroIcons from "../../ui/Icons/HeroIcons/HeroIcons";
import NVDA from "../../ui/Icons/NVDA/NVDA";
import Playwright from "../../ui/Icons/Playwright/Playwright";
import ReactIcons from "../../ui/Icons/ReactIcons/ReactIcons";

/**
 * Renders technology icon with associated color
 *
 * Props are defined in {@link TechnologyProps}.
 */
export default function TechnologyIcon({ name }: TechnologyProps) {
  /**
   * Gets the technology icon
   */
  const getIcon = (techName: string): ReactNode | string => {
    switch (techName) {
      case "api":
        return <AiOutlineApi />;
      case "css":
        return <FaCss3Alt />;
      case "figma":
        return <Figma />;
      case "git_hub":
        return <IoLogoGithub />;
      case "git_hub_actions":
        return <SiGithubactions />;
      case "hero_icons":
        return <HeroIcons />;
      case "html":
        return <FaHtml5 />;
      case "jest":
        return <SiJest />;
      case "nextjs":
        return <RiNextjsFill />;
      case "nvda":
        return <NVDA />;
      case "playwright":
        return <Playwright />;
      case "react":
        return <FaReact />;
      case "react_icons":
        return <ReactIcons />;
      case "react_testing_library":
        return <SiTestinglibrary />;
      case "redux_toolkit":
        return <TbBrandRedux />;
      case "tailwind_css":
        return <SiTailwindcss />;
      case "typescript":
        return <SiTypescript />;
      default:
        return techName;
    }
  };

  return (
    <div
      className="font-extrabold text-sm"
      style={{ color: `var(--color-${name})` }}
    >
      <span className="text-4xl md:text-4xl 2xl:text-5xl">{getIcon(name)}</span>
    </div>
  );
}
