import type {
  ChallengeData,
  ChallengeDifficulty,
  TechnologyData,
} from "../types";

/**
 * Returns the list of challenges
 */
export const getChallengesList = (): ChallengeData[] => {
  return [
    {
      imageSrc: "images/cards/multistep_form.png",
      imageAlt: "Multi-step form Challenge",
      cardTitle: "Multi-step form",
      cardDescription: "Multi-step form for a gaming subscription.",
      demoLink: "https://f29pereira.github.io/multi-step-form/",
      codeLink: "https://github.com/f29pereira/multi-step-form",
      difficulty: "advanced",
    },
    {
      imageSrc: "images/cards/sneakers.png",
      imageAlt: "Sneakers Challenge",
      cardTitle: "Sneakers",
      cardDescription:
        "E-commerce product page with product info and user shopping cart.",
      demoLink: "https://f29pereira.github.io/sneakers/",
      codeLink: "https://github.com/f29pereira/sneakers",
      difficulty: "intermediate",
    },
    {
      imageSrc: "images/cards/shortly.png",
      imageAlt: "Shortly Challenge",
      cardTitle: "Shortly",
      cardDescription: "URL shortening landing page using the Clean URI API.",
      demoLink: "https://f29pereira.github.io/shortly/",
      codeLink: "https://github.com/f29pereira/shortly",
      difficulty: "intermediate",
    },
    {
      imageSrc: "images/cards/weather_now.png",
      imageAlt: "Weather App challenge Challenge",
      cardTitle: "Weather Now",
      cardDescription:
        "App with search functionality, unit conversion, and forecasts using the Open-Meteo API.",
      demoLink: "https://f29pereira.github.io/weather-app/",
      codeLink: "https://github.com/f29pereira/weather-app",
      difficulty: "intermediate",
    },
    {
      imageSrc: "images/cards/conference_ticket_generator.png",
      imageAlt: "Conference Ticket Generator Challenge",
      cardTitle: "Conference Ticket Generator",
      cardDescription:
        "Form with validation that generates a styled conference ticket.",
      demoLink: "https://f29pereira.github.io/conference-ticket-generator/",
      codeLink: "https://github.com/f29pereira/conference-ticket-generator",
      difficulty: "junior",
    },
    {
      imageSrc: "images/cards/fylo.png",
      imageAlt: "Fylo Landing Page Challenge",
      cardTitle: "Fylo landing page",
      cardDescription:
        "A dark-themed landing page design for Fylo, a cloud storage service.",
      demoLink: "https://f29pereira.github.io/fylo/",
      codeLink: "https://github.com/f29pereira/fylo",
      difficulty: "junior",
    },
    {
      imageSrc: "images/cards/bento_grid.png",
      imageAlt: "Bento Grid Challenge",
      cardTitle: "Bento Grid",
      cardDescription: "Responsive bento-style grid layout.",
      demoLink: "https://f29pereira.github.io/bento-grid/",
      codeLink: "https://github.com/f29pereira/bento-grid",
      difficulty: "junior",
    },
    {
      imageSrc: "images/cards/result_summary.png",
      imageAlt: "Result Summary Challenge",
      cardTitle: "Result Summary component",
      cardDescription:
        "Result summary card component displaying user's test results.",
      demoLink: "https://f29pereira.github.io/results-summary-component/",
      codeLink: "https://github.com/f29pereira/results-summary-component",
      difficulty: "newbie",
    },
    {
      imageSrc: "images/cards/order_summary.png",
      imageAlt: "Order Summary Challenge",
      cardTitle: "Order Summary component",
      cardDescription:
        "Order summary card component for music subscription plan.",
      demoLink: "https://f29pereira.github.io/order-summary/",
      codeLink: "https://github.com/f29pereira/order-summary",
      difficulty: "newbie",
    },
  ];
};

/**
 * Returns the list of technologies
 */
export const getTechnologiesList = (): TechnologyData[] => {
  return [
    {
      category: "Framework",
      technologies: [
        {
          iconName: "nextjs",
          name: "Next.js",
          description:
            "React framework for building full-stack web applications",
          link: "https://nextjs.org/",
        },
      ],
    },
    {
      category: "Markup and Styling",
      technologies: [
        {
          iconName: "html",
          name: "HTML",
          description:
            "Markup language for documents displayed in a web browser",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          iconName: "css",
          name: "CSS",
          description:
            "Specifies the presentation/styling of a document written in a markup language",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          iconName: "tailwind_css",
          name: "Tailwind CSS",
          description:
            "CSS framework allows to build custom designs without leaving the HTML",
          link: "https://tailwindcss.com/",
        },
      ],
    },
    {
      category: "Programming Language",
      technologies: [
        {
          iconName: "typescript",
          name: "Typescript",
          description:
            "Strongly typed PL that builds on JavaScript, giving better tooling at any scale",
          link: "https://www.typescriptlang.org/",
        },
      ],
    },
    {
      category: "Runtime",
      technologies: [
        {
          iconName: "nodejs",
          name: "Node.js",
          description:
            "Cross-platform JS runtime environment that lets developers create servers, web apps, command line tools and scripts",
          link: "https://nodejs.org/en",
        },
      ],
    },
    {
      category: "Libraries",
      technologies: [
        {
          iconName: "react",
          name: "React",
          description: "JavaScript library for web and native UIs",
          link: "https://react.dev/",
        },
        {
          iconName: "react_hook_form",
          name: "React Hook Form",
          description:
            "Helps build performant, flexible and extensible forms with easy-to-use validation",
          link: "https://react-hook-form.com/",
        },
        {
          iconName: "clsx",
          name: "Clsx",
          description:
            "Utility for constructing className strings conditionally",
          link: "https://www.npmjs.com/package/clsx",
        },
        {
          iconName: "focus_trap_react",
          name: "focus-trap-react",
          description: "React component that traps focus",
          link: "https://www.npmjs.com/package/focus-trap-react",
        },
        {
          iconName: "react_icons",
          name: "React Icons",
          description: "Bundles popular icon sets as React components",
          link: "https://react-icons.github.io/react-icons/",
        },
        {
          iconName: "hero_icons",
          name: "Hero Icons",
          description: "SVG icons by the makers of Tailwind CSS",
          link: "https://heroicons.com/",
        },
      ],
    },
    {
      category: "State Management",
      technologies: [
        {
          iconName: "redux_toolkit",
          name: "Redux Toolkit",
          description:
            "manage global app state with Redux, with less boilerplate.",
          link: "https://redux-toolkit.js.org/",
        },
      ],
    },
    {
      category: "Developer Tools",
      technologies: [
        {
          iconName: "react_dev_tools",
          name: "React Developer Tools",
          description:
            "Extension for inspecting the React component tree and debugging props and state",
          link: "https://react.dev/learn/react-developer-tools",
        },
        {
          iconName: "redux_dev_tools",
          name: "Redux Developer Tools",
          description:
            "Extension for tracking Redux state changes and replaying actions during debugging",
          link: "https://github.com/reduxjs/redux-devtools",
        },
        {
          iconName: "lighthouse",
          name: "Lighthouse",
          description:
            "Creates audits for performance, accessibility, progressive web apps, SEO, and more. ",
          link: "https://developer.chrome.com/docs/lighthouse",
        },
      ],
    },
    {
      category: "Testing Frameworks and Libraries",
      technologies: [
        {
          iconName: "jest",
          name: "Jest",
          description: "JavaScript testing framework",
          link: "http://jestjs.io/",
        },
        {
          iconName: "react_testing_library",
          name: "React Testing Library",
          description: "React components testing library",
          link: "https://testing-library.com/",
        },
        {
          iconName: "playwright",
          name: "Playwright",
          description: "Automation library for E2E testing",
          link: "https://playwright.dev/",
        },
      ],
    },
    {
      category: "Accessibility",
      technologies: [
        {
          iconName: "nvda",
          name: "NVDA",
          description: "Open-source screen reader for Windows",
          link: "https://www.nvaccess.org/",
        },
      ],
    },
    {
      category: "Version control and CI/CD",
      technologies: [
        {
          iconName: "git_hub",
          name: "Git Hub",
          description:
            "Version control system for tracking code changes and managing project history",
          link: "https://github.com/",
        },
        {
          iconName: "git_hub_actions",
          name: "Git Hub Actions",
          description:
            "CI/CD platform built into GitHub that automates workflows on every push or pull request",
          link: "https://github.com/features/actions",
        },
      ],
    },
    {
      category: "Design",
      technologies: [
        {
          iconName: "figma",
          name: "Figma",
          description:
            "UI design and prototyping tool used to create wireframes, mockups, and design systems collaboratively",
          link: "https://www.figma.com/",
        },
      ],
    },
  ];
};

/**
 * Returns the list of filters
 */
export const getFilterList = (): ChallengeDifficulty[] => {
  return ["newbie", "junior", "intermediate", "advanced"];
};
