import Link from "next/link";
import MythicPlusForm from "./components/AiLogoMaker";
import AiLogoMaker from "./components/AiLogoMaker";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-5xl">Mythic Plus Dungeon Guides Ai</h1>
      <AiLogoMaker />
    </main>
  );
}
