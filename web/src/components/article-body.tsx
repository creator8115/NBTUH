import type { ArticleBlock } from "@/data/articles";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-4 font-display text-xl font-medium text-ink"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="my-4 border-l-2 border-brass py-1 pl-6 font-display text-xl italic leading-snug text-ink"
            >
              {block.text}
            </blockquote>
          );
        }
        return (
          <p key={i} className="text-[17px] leading-[1.7] text-ink/80">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
