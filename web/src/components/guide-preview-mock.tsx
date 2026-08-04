export function GuidePreviewMock({ title }: { title: string }) {
  return (
    <div
      className="relative aspect-[4/5] w-full rounded-md border border-line bg-parchment-2 p-6"
      aria-hidden="true"
    >
      <div className="flex items-baseline justify-between border-b border-line pb-3">
        <span className="font-display text-sm font-medium italic text-brass">
          Nobody Taught Us How
        </span>
      </div>
      <p className="mt-4 font-display text-lg font-medium leading-snug text-ink">
        {title}
      </p>
      <div className="mt-6 flex flex-col gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="h-2 w-1/4 rounded-full bg-brass/40" />
            <div className="h-2 w-full rounded-full bg-ink/10" />
            <div className="h-2 w-5/6 rounded-full bg-ink/10" />
          </div>
        ))}
      </div>
      <span className="absolute bottom-4 right-6 text-[10px] font-medium uppercase tracking-wide text-ink/30">
        Preview
      </span>
    </div>
  );
}
