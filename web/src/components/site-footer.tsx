import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-dark bg-forest-deep text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <Link href="/" className="font-display text-lg font-medium">
              Nobody Taught Us <em className="font-normal italic text-brass-light">How</em>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-parchment-2/70">
              Practical guidance for the responsibilities nobody prepared you
              for.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-4" aria-label="Footer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-parchment-2/80 transition-colors hover:text-brass-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-dark pt-6 text-xs text-parchment-2/55 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}.</span>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="transition-colors hover:text-brass-light"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
