import type { CardProps } from "../types";

//List of Card components data
export const cardList: CardProps[] = [
  {
    imageSrc: "images/weather_now.png",
    imageAlt: "Weather App challenge Challenge",
    cardTitle: "Weather Now",
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "html",
      "css",
      "figma",
      "api",
    ],
    cardDescription:
      "App with search functionality, unit conversion, and forecasts using the Open-Meteo API.",
    demoLink: "https://f29pereira.github.io/weather-app/",
    codeLink: "https://github.com/f29pereira/weather-app",
  },
  {
    imageSrc: "images/conference_ticket_generator.png",
    imageAlt: "Conference Ticket Generator Challenge",
    cardTitle: "Conference Ticket Generator",
    technologies: ["nextjs", "react", "typescript", "html", "css"],
    cardDescription:
      "Form with validation that generates a styled conference ticket.",
    demoLink: "https://f29pereira.github.io/conference-ticket-generator/",
    codeLink: "https://github.com/f29pereira/conference-ticket-generator",
  },
  {
    imageSrc: "images/fylo_landing_page.png",
    imageAlt: "Fylo Landing Page Challenge",
    cardTitle: "Fylo landing page",
    technologies: ["nextjs", "react", "typescript", "html", "css"],
    cardDescription:
      "A dark-themed landing page design for Fylo, a cloud storage service.",
    demoLink: "https://f29pereira.github.io/fylo/",
    codeLink: "https://github.com/f29pereira/fylo",
  },
  {
    imageSrc: "images/bento_grid.png",
    imageAlt: "Bento Grid Challenge",
    cardTitle: "Bento Grid",
    technologies: ["nextjs", "react", "html", "css"],
    cardDescription: "Bento-style grid layout.",
    demoLink: "https://f29pereira.github.io/bento-grid/",
    codeLink: "https://github.com/f29pereira/bento-grid",
  },
  {
    imageSrc: "images/order_summary.png",
    imageAlt: "Order Summary Challenge",
    cardTitle: "Order Summary",
    technologies: ["nextjs", "react", "typescript", "html", "css"],
    cardDescription:
      "Order summary card component for music subscription plan.",
    demoLink: "https://f29pereira.github.io/order-summary/",
    codeLink: "https://github.com/f29pereira/order-summary",
  },
];
