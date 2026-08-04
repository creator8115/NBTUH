import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { GuidePreviewMock } from "@/components/guide-preview-mock";
import { NotifyForm } from "@/components/notify-form";
import { guides, getGuideBySlug } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.tagline,
  };
}

export default async function GuideDetailPage({
  params,
}: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <a
            href="/guides/"
            className="text-sm text-ink/50 transition-colors hover:text-ink"
          >
            &larr; Working Guides
          </a>
          <Eyebrow className="mt-6">{guide.category}</Eyebrow>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-medium text-ink sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/65">{guide.tagline}</p>
          <div className="mt-6 flex items-center gap-3 text-sm font-medium text-ink/50">
            <span>{guide.timeEstimate}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{guide.difficulty}</span>
          </div>
          <div className="mt-8 max-w-sm">
            {guide.gumroadUrl ? (
              <Button href={guide.gumroadUrl}>Open on Gumroad</Button>
            ) : (
              <NotifyForm guideTitle={guide.title} guideSlug={guide.slug} />
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">
                  The problem
                </h2>
                <p className="mt-3 text-ink/70">{guide.problem}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">
                  Who it&apos;s for
                </h2>
                <p className="mt-3 text-ink/70">{guide.whoItsFor}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">
                  What you&apos;ll complete
                </h2>
                <p className="mt-3 text-ink/70">{guide.whatYoullComplete}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">
                  Frequently asked questions
                </h2>
                <div className="mt-4 flex flex-col divide-y divide-line">
                  {guide.faqs.map((faq) => (
                    <div key={faq.question} className="py-4">
                      <p className="font-semibold text-ink">{faq.question}</p>
                      <p className="mt-1.5 text-sm text-ink/65">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-8">
              <GuidePreviewMock title={guide.title} />
              <div className="rounded-md border border-line bg-parchment-2 p-6">
                <p className="text-sm font-semibold text-ink">
                  What you&apos;ll leave with
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {guide.whatYoullLeaveWith.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink/70">
                      <span className="text-brass">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  {guide.gumroadUrl ? (
                    <Button href={guide.gumroadUrl} className="w-full">
                      Open on Gumroad
                    </Button>
                  ) : (
                    <NotifyForm
                      guideTitle={guide.title}
                      guideSlug={guide.slug}
                    />
                  )}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
