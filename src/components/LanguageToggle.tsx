"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import type { Lang } from "@/lib/content";
import { normalizeLang } from "@/lib/content";

export function LanguageToggle() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const current = normalizeLang(searchParams.get("lang"));

  const createHref = (lang: Lang) => {
    const next = new URLSearchParams(searchParams.toString());
    next.set("lang", lang);
    return `${pathname}?${next.toString()}`;
  };

  const pill = (active: boolean) =>
    active
      ? "rounded-full bg-black px-3 py-1 text-sm font-medium text-white dark:bg-white dark:text-black"
      : "rounded-full border border-black/10 px-3 py-1 text-sm font-medium text-black hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10";

  return (
    <div className="flex items-center gap-2">
      <Link href={createHref("en")} className={pill(current === "en")}>EN</Link>
      <Link href={createHref("de")} className={pill(current === "de")}>DE</Link>
    </div>
  );
}
