import { notFound } from "next/navigation";
import { CategoryIntro } from "@/components/CategoryIntro";
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

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const category = getCategory(id);
  if (!category) notFound();
  return <CategoryIntro category={category} />;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const category = getCategory(id as CategoryId);
  return {
    title: category ? `${category.title} | Space Trivia` : "Space Trivia",
  };
}
