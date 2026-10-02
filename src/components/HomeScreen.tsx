"use client";

import Link from "next/link";
import { CATEGORIES } from "@/lib/types";
import { WwLogo } from "./WwLogo";
import { CornerBracket } from "./CornerBracket";
import "@/styles/home.css";

export function HomeScreen() {
  return (
    <main className="home app-shell">
      <div className="home-grid">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="cat-tile"
            aria-label={`Start ${cat.title}`}
          >
            <CornerBracket className="cat-tile-bracket" />
            <div className="cat-tile-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cat.homeImage} alt="" />
            </div>
            <div className="cat-tile-label">{cat.title}</div>
          </Link>
        ))}
        <div className="home-center" aria-hidden>
          <WwLogo size={108} variant="home" />
        </div>
      </div>
      <p className="home-prompt">Touch the screen to begin</p>
    </main>
  );
}
