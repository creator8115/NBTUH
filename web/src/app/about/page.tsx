import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jasmine Clark built Nobody Taught Us How from a career that moved through public and private finance, a competitive teaching fellowship, and a decade of building business relationships from scratch.",
};

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-medium text-ink">
          Nobody Taught Us How wasn&apos;t built on theory.
        </h1>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start">
          <Image
            src="/images/founder.jpg"
            alt="Jasmine Clark, founder of Nobody Taught Us How"
            width={112}
            height={112}
            className="h-28 w-28 flex-shrink-0 rounded-full border-2 border-line object-cover"
          />
          <div>
            <p className="font-display text-lg font-medium text-ink">
              Jasmine Clark
            </p>
            <p className="mt-3 text-ink/70">
              It&apos;s built on an MBA, a finance career that moved from the
              public sector into private finance, time inside a Chicago
              unicorn startup, and a track record that includes a Teach For
              America fellowship and business relationships built from
              scratch across three relocations.
            </p>
            <ul className="mt-4 flex flex-col gap-1.5 border-t border-line pt-4 text-sm text-ink/70">
              <li>
                2026 Side Hustle Honors Industry Honoree, Future of Work &amp;
                Business Services
              </li>
              <li>
                2026 Side Hustle Honors Community Choice, Second Act
                Entrepreneur
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 text-ink/75">
          <p>
            Along the way, that same practice of building relationships from
            zero, city to city, grew into an organic following of more than
            10,000 people across platforms, and turned into real, paying
            clients, not just an audience.
          </p>
          <p>
            Nobody Taught Us How exists because the decisions that actually
            determine whether a business works, pricing, follow-up,
            marketing, hiring, focus, the numbers, rarely come with a case
            study attached. Most business owners are smart enough to run the
            business. They were just never taught how to work through the
            specific decisions that don&apos;t have an obvious right answer.
          </p>
          <p>
            The Working Guides are built from that gap: practical, short, and
            built around one decision at a time, instead of a course that
            asks for months before it gives you anything back.
          </p>
        </div>

        <div className="mt-12">
          <Button href="/#snapshot">Take the Business Snapshot</Button>
        </div>
      </Container>
    </section>
  );
}
