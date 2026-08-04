"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdlndqo";

export function NotifyForm({
  guideTitle,
  guideSlug,
}: {
  guideTitle: string;
  guideSlug: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-sm border border-line bg-parchment px-4 py-3 text-sm text-ink/70">
        You&apos;re on the list. We&apos;ll email you when this guide is
        ready.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <p className="text-sm font-medium text-ink/70">
        This guide isn&apos;t live yet. Get an email the day it is.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input type="hidden" name="guide" value={guideTitle} />
        <input type="hidden" name="guideSlug" value={guideSlug} />
        <input type="hidden" name="_subject" value={`Notify: ${guideTitle}`} />
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          aria-label="Email address"
          className="flex-1 rounded-sm border border-line bg-parchment px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-sm bg-forest px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-forest-deep disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Notify Me"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-700">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
