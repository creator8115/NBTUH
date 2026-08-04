import Link from "next/link";
import type { Guide } from "@/data/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}/`}
      className="group flex flex-col border-t-2 border-forest pt-5 transition-opacity hover:opacity-80"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/50">
        {guide.category}
      </span>
      <h3 className="mt-2 font-display text-xl font-medium text-ink">
        {guide.title}
      </h3>
      <p className="mt-2 text-sm text-ink/65">{guide.tagline}</p>
      <div className="mt-4 flex items-center gap-3 text-xs font-medium text-ink/50">
        <span>{guide.timeEstimate}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{guide.difficulty}</span>
      </div>
      <span className="mt-4 text-sm font-semibold text-forest group-hover:text-brass">
        Open Guide &rarr;
      </span>
    </Link>
  );
}
