"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdlndqo";

export function NewsletterForm() {
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

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        aria-label="Email address"
        className="flex-1 rounded-sm border border-line-dark bg-transparent px-4 py-3 text-sm text-parchment placeholder:text-parchment/40 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
      />
      <Button type="submit" disabled={status === "sending"}>
        {status === "success" ? "Subscribed" : "Subscribe"}
      </Button>
      {status === "error" && (
        <p className="text-xs text-red-300 sm:absolute sm:mt-12">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
