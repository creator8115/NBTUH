import Link from "next/link";
import type { Article } from "@/data/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/thinking/${article.slug}/`}
      className="group flex flex-col transition-opacity hover:opacity-80"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brass">
        {article.category}
      </span>
      <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-ink/65">{article.dek}</p>
      <span className="mt-4 text-xs font-medium text-ink/50">
        {article.readTime}
      </span>
    </Link>
  );
}
