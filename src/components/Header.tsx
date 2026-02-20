import Link from "next/link";

import type { SiteContent } from "@/lib/content";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Header({ content, lang }: { content: SiteContent; lang: string }) {
  const hrefWithLang = (hash: string) => `/?lang=${lang}${hash}`;

  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/15 dark:bg-black/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <div className="min-w-0">
          <Link
            href={`/?lang=${lang}`}
            className="truncate text-sm font-semibold tracking-tight"
          >
            {content.name}
          </Link>
          <p className="truncate text-xs text-black/60 dark:text-white/60">
            {content.role} · {content.location}
          </p>
        </div>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          <a className="hover:underline" href={hrefWithLang("#tech")}>
            {content.nav.tech}
          </a>
          <a className="hover:underline" href={hrefWithLang("#contact")}>
            {content.nav.contact}
          </a>
          <a className="hover:underline" href={`/?lang=${lang}`}>
            Back to top
          </a>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
