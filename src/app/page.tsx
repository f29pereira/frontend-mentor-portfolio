import AboutMe from "./components/sections/AboutMe/AboutMe";
import Challenge from "./components/sections/Challenge/Challenge";
import Technology from "./components/sections/Technology/Technology";

/**
 * Renders the sections:
 * - About Me
 * - Challenges
 * - Technologies
 */
export default function Home() {
  return (
    <>
      <AboutMe />

      <Challenge />

      <Technology />
    </>
  );
}
