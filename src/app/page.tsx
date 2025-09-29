import { GameWorld } from "@/components/game-world";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <GameWorld />
    </div>
  );
}