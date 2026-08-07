import { ReactNode } from "react";
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
  IoLibrary,
  MdExtension,
  FaNode,
  SiReacthookform,
  IoLogoVercel,
  SiGithubpages,
} from "@/app/utils/icons";
import Figma from "@/app/components/ui/Icons/Figma/Figma";
import HeroIcons from "@/app/components/ui/Icons/HeroIcons/HeroIcons";
import Lighthouse from "@/app/components/ui/Icons/Lighthouse/Lighthouse";
import NVDA from "@/app/components/ui/Icons/NVDA/NVDA";
import Playwright from "@/app/components/ui/Icons/Playwright/Playwright";
import ReactIcons from "@/app/components/ui/Icons/ReactIcons/ReactIcons";
import { TechnologyName } from "@/app/types";

/**
 * Gets the technology icon
 * @param techName - icon name
 */
export const getIcon = (techName: TechnologyName): ReactNode | string => {
  switch (techName) {
    case "api":
      return <AiOutlineApi />;
    case "css":
      return <FaCss3Alt />;
    case "figma":
      return <Figma />;
    case "git_hub":
      return <IoLogoGithub />;
    case "git_hub_pages":
      return <SiGithubpages />;
    case "git_hub_actions":
      return <SiGithubactions />;
    case "hero_icons":
      return <HeroIcons />;
    case "html":
      return <FaHtml5 />;
    case "jest":
      return <SiJest />;
    case "lighthouse":
      return <Lighthouse />;
    case "nextjs":
      return <RiNextjsFill />;
    case "nodejs":
      return <FaNode />;
    case "nvda":
      return <NVDA />;
    case "playwright":
      return <Playwright />;
    case "react":
      return <FaReact />;
    case "react_dev_tools":
    case "redux_dev_tools":
      return <MdExtension />;
    case "react_hook_form":
      return <SiReacthookform />;
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
    case "clsx":
    case "focus_trap_react":
      return <IoLibrary />;
    case "vercel":
      return <IoLogoVercel />;
    default:
      return techName;
  }
};
