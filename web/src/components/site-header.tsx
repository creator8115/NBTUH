"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-parchment/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Nobody Taught Us <em className="font-normal italic text-forest">How</em>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/#snapshot"
            className="rounded-sm bg-forest px-5 py-2.5 text-sm font-semibold text-parchment transition-colors hover:bg-forest-deep"
          >
            Start Your Snapshot
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-line md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-4 sm:px-8">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#snapshot"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-sm bg-forest px-5 py-3 text-center text-sm font-semibold text-parchment"
              >
                Start Your Snapshot
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
