"use client";

import { useMemo, useState, useCallback } from "react";
import Link from "next/link";
import type { AnswerKey, CategoryMeta, TriviaQuestion } from "@/lib/types";
import { WwLogo } from "./WwLogo";
import "@/styles/quiz.css";

const LETTERS: AnswerKey[] = ["A", "B", "C", "D"];

const THEME_BG: Record<CategoryMeta["quizTheme"], string> = {
  launchpad: "/backgrounds/launchpad.svg",
  orbit: "/backgrounds/orbit.svg",
  lunar: "/backgrounds/lunar.svg",
  solar: "/backgrounds/solar.svg",
};

const THEME_ART: Record<CategoryMeta["quizTheme"], string> = {
  launchpad: "/categories/early-manned.svg",
  orbit: "/categories/modern.svg",
  lunar: "/categories/moon.svg",
  solar: "/categories/solar.svg",
};

type Props = {
  category: CategoryMeta;
  questions: TriviaQuestion[];
};

export function QuizScreen({ category, questions }: Props) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<AnswerKey | null>(null);
  const [done, setDone] = useState(false);

  const total = questions.length;
  const current = questions[index];

  const bg = THEME_BG[category.quizTheme];
  const art = THEME_ART[category.quizTheme];

  const advance = useCallback(() => {
    setSelected(null);
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
  }, [index, total]);

  const onPick = (letter: AnswerKey) => {
    if (selected || done) return;
    setSelected(letter);
    if (letter === current.correct) {
      setScore((s) => s + 1);
    }
    window.setTimeout(advance, 900);
  };

  const feedback = useMemo(() => {
    if (!selected) return null;
    return selected === current.correct ? "Correct" : "Incorrect";
  }, [selected, current]);

  if (done) {
    return (
      <main
        className="quiz app-shell"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="quiz-frame-top" />
        <div className="quiz-header">
          <WwLogo className="quiz-logo" size={72} variant="frame" />
        </div>
        <div className="results">
          <h2>{category.title}</h2>
          <p>
            Score: {score} / {total}
          </p>
          <div className="results-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setIndex(0);
                setScore(0);
                setSelected(null);
                setDone(false);
              }}
            >
              Play Again
            </button>
            <Link href="/" className="btn-ghost">
              Main Menu
            </Link>
          </div>
        </div>
        <div className="quiz-frame-bottom" />
      </main>
    );
  }

  return (
    <main className="quiz app-shell" style={{ backgroundImage: `url(${bg})` }}>
      <div className="quiz-frame-top" />
      <div className="quiz-header">
        <div className="quiz-progress">
          {category.title}: Question {index + 1} of {total}
        </div>
        <WwLogo className="quiz-logo" size={72} variant="frame" />
      </div>

      <div className="quiz-body">
        <h1 className="quiz-question">{current.question}</h1>

        <div className="answer-rail metal-brush" role="list">
          {LETTERS.map((letter) => {
            const isSelected = selected === letter;
            const isCorrect = selected && letter === current.correct;
            const isWrong = isSelected && letter !== current.correct;
            return (
              <button
                key={letter}
                type="button"
                className={[
                  "answer-btn",
                  isCorrect ? "is-correct" : "",
                  isWrong ? "is-wrong" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => onPick(letter)}
                disabled={Boolean(selected)}
                role="listitem"
                aria-label={`${letter}: ${current.choices[letter]}`}
              >
                <span className="answer-letter">{letter}</span>
                <span className="answer-text">{current.choices[letter]}</span>
              </button>
            );
          })}
        </div>

        <div
          className="quiz-art"
          style={{ backgroundImage: `url(${art})` }}
          aria-hidden
        />
      </div>

      {feedback && (
        <div
          className={`quiz-feedback ${feedback === "Correct" ? "ok" : "bad"}`}
          aria-live="polite"
        >
          {feedback}
        </div>
      )}

      <div className="main-menu-wrap">
        <Link href="/" className="main-menu metal-brush" aria-label="Main Menu">
          <span className="main-menu-inner">
            Main
            <br />
            Menu
          </span>
        </Link>
      </div>

      <div className="quiz-frame-bottom" />
    </main>
  );
}
