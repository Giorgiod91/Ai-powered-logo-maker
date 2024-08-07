import Link from "next/link";
import MythicPlusForm from "./components/AiLogoMaker";
import AiLogoMaker from "./components/AiLogoMaker";
import LandingPage from "./components/LandingPage";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="h-screen">
        <LandingPage />
      </section>
    </main>
  );
}
