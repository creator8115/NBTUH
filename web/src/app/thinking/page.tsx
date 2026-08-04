import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Short, specific writing on the business decisions that don't come with a playbook.",
};

export default function ThinkingPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Latest Thinking</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink">
            Not a blog. A working library.
          </h1>
          <p className="mt-4 text-ink/70">
            Short, specific writing on the decisions that don&apos;t come
            with a playbook. Every piece connects to a Working Guide.
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
