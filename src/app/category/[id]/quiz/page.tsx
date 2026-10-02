import { notFound } from "next/navigation";
import { QuizScreen } from "@/components/QuizScreen";
import { getQuestions } from "@/data";
import { getCategory, type CategoryId } from "@/lib/types";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return [
    { id: "early-manned" },
    { id: "modern-spaceflight" },
    { id: "to-the-moon" },
    { id: "solar-system" },
  ];
}

export default async function QuizPage({ params }: Props) {
  const { id } = await params;
  const category = getCategory(id);
  if (!category) notFound();
  const questions = getQuestions(category.id);
  return <QuizScreen category={category} questions={questions} />;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const category = getCategory(id as CategoryId);
  return {
    title: category ? `${category.title} Quiz | Space Trivia` : "Space Trivia",
  };
}
