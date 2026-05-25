import ChallengeProvider from "../components/context/ChallengeProvider/ChallengeProvider";
import Challenge from "../components/sections/Challenge/Challenge";

/**
 *  Renders the challenges page
 */
export default function ChallengesPage() {
  return (
    <ChallengeProvider>
      <Challenge />
    </ChallengeProvider>
  );
}
