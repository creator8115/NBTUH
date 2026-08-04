import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "For the decisions a self-serve guide isn't built for, reach out directly.",
};

export default function WorkWithUsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <Eyebrow>Work With Us</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-medium text-ink">
          Most decisions fit a Working Guide. Some don&apos;t.
        </h1>
        <p className="mt-6 text-lg text-ink/70">
          The Working Guides are built for the decisions that follow a
          pattern common enough to write down once and reuse. If what
          you&apos;re facing is more specific than that, tell us what it is.
        </p>
        <p className="mt-4 text-ink/70">
          Send a plain description of the decision you&apos;re circling.
          We&apos;ll reply and let you know honestly whether it&apos;s
          something we can help with directly.
        </p>

        <div className="mt-10">
          <Button href={`mailto:${siteConfig.contactEmail}`}>
            Email {siteConfig.contactEmail}
          </Button>
        </div>
      </Container>
    </section>
  );
}
