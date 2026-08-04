import { AssessmentFlow } from "@/components/assessment/assessment-flow";
import { GuideCard } from "@/components/guide-card";
import { ArticleCard } from "@/components/article-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { featuredGuides } from "@/data/guides";
import { articles } from "@/data/articles";

const steps = [
  {
    number: "01",
    title: "Recognize where you're stuck.",
    description:
      "Take the Business Snapshot. It takes about a minute and identifies where the friction actually is.",
  },
  {
    number: "02",
    title: "Work through a practical guide.",
    description:
      "Each Working Guide is a short, focused session built around one specific decision, not a course.",
  },
  {
    number: "03",
    title: "Implement it with confidence.",
    description:
      "You leave with an actual answer, a number, a script, a plan, not just more information.",
  },
];

export default function Home() {
  return (
    <>
      <section id="snapshot" className="py-20 sm:py-28">
        <Container>
          <AssessmentFlow />
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Working Guides</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">
                Start where it actually hurts.
              </h2>
            </div>
            <Button href="/guides/" variant="ghost">
              All Working Guides &rarr;
            </Button>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-parchment-2 py-20 sm:py-28">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Latest Thinking</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">
                Not a blog. A working library.
              </h2>
            </div>
            <Button href="/thinking/" variant="ghost">
              All Thinking &rarr;
            </Button>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">
              How Nobody Taught Us How Works
            </Eyebrow>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-display text-lg italic text-brass">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line-dark bg-forest-deep py-20 text-parchment sm:py-28">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-display text-2xl font-medium sm:text-3xl">
              Practical lessons for the responsibilities nobody prepared you
              for.
            </h2>
            <div className="mt-8">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
