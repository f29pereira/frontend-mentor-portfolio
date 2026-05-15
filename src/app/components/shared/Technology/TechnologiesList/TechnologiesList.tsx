import clsx from "clsx";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import TechnologyIcon from "../TechnologyIcon";

/**
 * Renders the list of technologies, used for the challenges, divided into the following categories:
 * - framework
 * - markup and styling
 * - programming language
 * - libraries
 * - state management
 * - testing Frameworks and libraries
 * - accessibility
 * - version control and CI/CD
 * - design
 */
export default function TechnologiesList() {
  return (
    <div className={clsx("mt-8", "md:mt-10")}>
      {/*Framework*/}
      <div className="mb-8">
        <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
          Framework
        </h3>

        <div
          className={clsx(
            "grid grid-cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-y-4.5",
            "2xl:grid-cols-3",
          )}
        >
          <TechnologyCard
            icon={<TechnologyIcon name="nextjs" />}
            name="Next.js"
            description="React framework for building full-stack web applications"
            link="https://nextjs.org/"
          />
        </div>
      </div>

      {/*Markup and Styling*/}
      <div className="mb-8">
        <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
          Markup and Styling
        </h3>

        <div
          className={clsx(
            "grid grid-cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-y-4.5",
            "2xl:grid-cols-3",
          )}
        >
          <TechnologyCard
            icon={<TechnologyIcon name="html" />}
            name="HTML"
            description="Markup language for documents displayed in a web browser"
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
          />

          <TechnologyCard
            icon={<TechnologyIcon name="css" />}
            name="CSS"
            description="Specifies the presentation/styling of a document written in a markup language"
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />

          <TechnologyCard
            icon={<TechnologyIcon name="tailwind_css" />}
            name="Tailwind CSS"
            description="CSS framework allows to build custom designs without leaving the HTML"
            link="https://tailwindcss.com/"
          />
        </div>
      </div>

      {/*Programming Language*/}
      <div className="mb-8">
        <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
          Programming Language
        </h3>

        <div
          className={clsx(
            "grid grid-cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-y-4.5",
            "2xl:grid-cols-3",
          )}
        >
          <TechnologyCard
            icon={<TechnologyIcon name="typescript" />}
            name="Typescript"
            description="Strongly typed PL that builds on JavaScript, giving better tooling at any scale"
            link="https://www.typescriptlang.org/"
          />
        </div>
      </div>

      {/*Libraries*/}
      <div className="mb-8">
        <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
          Libraries
        </h3>

        <div
          className={clsx(
            "grid grid-cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-y-4.5",
            "2xl:grid-cols-3",
          )}
        >
          <TechnologyCard
            icon={<TechnologyIcon name="react" />}
            name="React"
            description="JavaScript library for web and native UIs"
            link="https://react.dev/"
          />

          <TechnologyCard
            icon={<TechnologyIcon name="react_icons" />}
            name="React Icons"
            description="Bundles popular icon sets as React components"
            link="https://react-icons.github.io/react-icons/"
          />

          <TechnologyCard
            icon={<TechnologyIcon name="hero_icons" />}
            name="Hero Icons"
            description="SVG icons"
            link="https://heroicons.com/"
          />
        </div>
      </div>

      {/*State Management*/}
      <div className="mb-8">
        <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
          State Management
        </h3>

        <div
          className={clsx(
            "grid grid-cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-y-4.5",
            "2xl:grid-cols-3",
          )}
        >
          <TechnologyCard
            icon={<TechnologyIcon name="redux_toolkit" />}
            name="Redux Toolkit"
            description="manage global app state with Redux, with less boilerplate."
            link="https://redux-toolkit.js.org/"
          />
        </div>
      </div>

      {/*Testing Frameworks and Libraries*/}
      <div className="mb-8">
        <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
          Testing Frameworks and Libraries
        </h3>

        <div
          className={clsx(
            "grid grid-cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-y-4.5",
            "2xl:grid-cols-3",
          )}
        >
          <TechnologyCard
            icon={<TechnologyIcon name="jest" />}
            name="Jest"
            description="JavaScript testing framework"
            link="http://jestjs.io/"
          />

          <TechnologyCard
            icon={<TechnologyIcon name="react_testing_library" />}
            name="React Testing Library"
            description="React components testing library"
            link="https://testing-library.com/"
          />

          {/*TO DO - user-event*/}

          <TechnologyCard
            icon={<TechnologyIcon name="playwright" />}
            name="Playwright"
            description="Automation library for E2E testing"
            link="https://playwright.dev/"
          />
        </div>
      </div>

      {/*Accessibility*/}
      <div className="mb-8">
        <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
          Accessibility
        </h3>

        <div
          className={clsx(
            "grid grid-cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-y-4.5",
            "2xl:grid-cols-3",
          )}
        >
          <TechnologyCard
            icon={<TechnologyIcon name="nvda" />}
            name="NVDA"
            description="Open-source screen reader for Windows"
            link="https://www.nvaccess.org/"
          />
        </div>
      </div>

      {/*Version control and CI/CD*/}
      <div className="mb-8">
        <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
          Version control and CI/CD
        </h3>

        <div
          className={clsx(
            "grid grid-cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-y-4.5",
            "2xl:grid-cols-3",
          )}
        >
          <TechnologyCard
            icon={<TechnologyIcon name="git_hub" />}
            name="Git Hub"
            description="Version control system for tracking code changes and managing project history"
            link="https://github.com/"
          />

          <TechnologyCard
            icon={<TechnologyIcon name="git_hub_actions" />}
            name="Git Hub Actions"
            description="CI/CD platform built into GitHub that automates workflows on every push or pull request"
            link="https://github.com/features/actions"
          />
        </div>
      </div>

      {/*Design*/}
      <div className="mb-8">
        <h3 className={clsx("mb-4 text-slate-800 font-bold text-xl")}>
          Design
        </h3>

        <div
          className={clsx(
            "grid grid-cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-y-4.5",
            "2xl:grid-cols-3",
          )}
        >
          <TechnologyCard
            icon={<TechnologyIcon name="figma" />}
            name="Figma"
            description="UI design and prototyping tool used to create wireframes, mockups, and design systems collaboratively"
            link="https://www.figma.com/"
          />
        </div>
      </div>
    </div>
  );
}
