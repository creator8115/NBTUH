import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ArticleBody } from "@/components/article-body";
import { articles, getArticleBySlug } from "@/data/articles";
import { getGuideBySlug } from "@/data/guides";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/thinking/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
  };
}

export default async function ArticleDetailPage({
  params,
}: PageProps<"/thinking/[slug]">) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedGuide = getGuideBySlug(article.relatedGuideSlug);

  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <a
          href="/thinking/"
          className="text-sm text-ink/50 transition-colors hover:text-ink"
        >
          &larr; Thinking
        </a>
        <Eyebrow className="mt-6">{article.category}</Eyebrow>
        <h1 className="mt-2 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 text-sm font-medium text-ink/50">
          {article.readTime}
        </p>

        <div className="mt-10">
          <ArticleBody blocks={article.body} />
        </div>

        {relatedGuide && (
          <div className="mt-16 rounded-md border border-line border-t-4 border-t-forest bg-parchment-2 p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/50">
              Related Working Guide
            </span>
            <h2 className="mt-2 font-display text-2xl font-medium text-ink">
              {relatedGuide.title}
            </h2>
            <p className="mt-2 text-sm text-ink/65">{relatedGuide.tagline}</p>
            <div className="mt-6">
              <Button href={`/guides/${relatedGuide.slug}/`} variant="secondary">
                Open Guide &rarr;
              </Button>
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
