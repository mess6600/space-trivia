export type CategoryId =
  | "early-manned"
  | "modern-spaceflight"
  | "to-the-moon"
  | "solar-system";

export type AnswerKey = "A" | "B" | "C" | "D";

export interface TriviaQuestion {
  id: string;
  question: string;
  choices: Record<AnswerKey, string>;
  correct: AnswerKey;
}

export interface CategoryMeta {
  id: CategoryId;
  title: string;
  shortTitle: string;
  homeImage: string;
  quizTheme: "launchpad" | "orbit" | "lunar" | "solar";
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "early-manned",
    title: "Early Manned Spaceflights",
    shortTitle: "Early Manned",
    homeImage: "/categories/early-manned.svg",
    quizTheme: "launchpad",
  },
  {
    id: "modern-spaceflight",
    title: "Modern Spaceflight",
    shortTitle: "Modern Spaceflight",
    homeImage: "/categories/modern.svg",
    quizTheme: "orbit",
  },
  {
    id: "to-the-moon",
    title: "To The Moon",
    shortTitle: "To The Moon",
    homeImage: "/categories/moon.svg",
    quizTheme: "lunar",
  },
  {
    id: "solar-system",
    title: "Our Solar System And Beyond",
    shortTitle: "Solar System",
    homeImage: "/categories/solar.svg",
    quizTheme: "solar",
  },
];

export function getCategory(id: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
