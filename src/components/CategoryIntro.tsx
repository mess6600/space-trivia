"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { CategoryMeta } from "@/lib/types";
import { WwLogo } from "./WwLogo";
import "@/styles/intro.css";

export function CategoryIntro({ category }: { category: CategoryMeta }) {
  const router = useRouter();

  const go = useCallback(() => {
    router.push(`/category/${category.id}/quiz`);
  }, [router, category.id]);

  useEffect(() => {
    const t = window.setTimeout(go, 2800);
    return () => window.clearTimeout(t);
  }, [go]);

  return (
    <main
      className="intro app-shell"
      style={{ backgroundImage: "url(/backgrounds/nebula.svg)" }}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") go();
      }}
      role="button"
      tabIndex={0}
      aria-label={`Continue to ${category.title} quiz`}
    >
      <div className="intro-frame-top" />
      <div className="intro-logo">
        <WwLogo size={88} variant="frame" />
      </div>

      <div className="intro-card-wrap">
        <svg className="intro-connector" viewBox="0 0 120 80" aria-hidden>
          <path
            d="M118 28 H70 L48 50 H8"
            fill="none"
            stroke="#efeee8"
            strokeWidth="4"
            strokeLinecap="square"
          />
          <rect x="0" y="44" width="14" height="14" fill="#efeee8" />
        </svg>
        <div className="intro-card">
          <h1>{category.title}</h1>
        </div>
      </div>

      <p className="intro-hint">Touch to continue</p>
      <div className="intro-frame-bottom" />
    </main>
  );
}
