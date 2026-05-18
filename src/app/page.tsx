import AboutMe from "./components/sections/AboutMe/AboutMe";
import ChallengeProvider from "./context/ChallengeProvider/ChallengeProvider";
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

      <ChallengeProvider>
        <Challenge />
      </ChallengeProvider>

      <Technology />
    </>
  );
}
