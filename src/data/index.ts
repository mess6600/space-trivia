import type { CategoryId, TriviaQuestion } from "@/lib/types";
import early from "./early-manned.json";
import modern from "./modern-spaceflight.json";
import moon from "./to-the-moon.json";
import solar from "./solar-system.json";

export const QUESTIONS: Record<CategoryId, TriviaQuestion[]> = {
  "early-manned": early as TriviaQuestion[],
  "modern-spaceflight": modern as TriviaQuestion[],
  "to-the-moon": moon as TriviaQuestion[],
  "solar-system": solar as TriviaQuestion[],
};

export function getQuestions(id: CategoryId): TriviaQuestion[] {
  return QUESTIONS[id];
}
