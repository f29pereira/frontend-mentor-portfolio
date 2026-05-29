import { redirect } from "next/navigation";

/**
 * Renders the about me page
 */
export default function Home() {
  redirect("/aboutMe");
}
