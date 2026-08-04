import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GuideCard } from "@/components/guide-card";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Working Guides",
  description:
    "Short, practical working sessions for the business decisions that don't come with instructions.",
};

export default function GuidesPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Working Guides</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink">
            A premium library, not a course catalog.
          </h1>
          <p className="mt-4 text-ink/70">
            Each guide is a short, focused working session built around one
            specific decision. Not sure where to start?{" "}
            <a href="/#snapshot" className="text-forest underline">
              Take the Business Snapshot
            </a>
            .
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </Container>
    </section>
  );
}
