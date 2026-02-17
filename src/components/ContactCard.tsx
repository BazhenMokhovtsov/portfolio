import type { SiteContent } from "@/lib/content";

export function ContactCard({ content }: { content: SiteContent }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-black">
      <div className="flex flex-col gap-2 sm:flex-row">
        <a
          className="inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-sm font-medium text-white hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/85"
          href={`mailto:${content.contacts.email}`}
        >
          {content.contact.emailCta}
        </a>
        <a
          className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 px-4 text-sm font-medium hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          href={content.contacts.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          {content.contact.linkedinCta}
        </a>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div>
          <p className="text-xs text-black/60 dark:text-white/60">
            {content.contact.emailLabel}
          </p>
          <a className="text-sm font-medium hover:underline" href={`mailto:${content.contacts.email}`}>
            {content.contacts.email}
          </a>
        </div>
        <div>
          <p className="text-xs text-black/60 dark:text-white/60">
            {content.contact.githubLabel}
          </p>
          <a
            className="text-sm font-medium hover:underline"
            href={content.contacts.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            {content.contacts.githubUrl}
          </a>
        </div>
        <div>
          <p className="text-xs text-black/60 dark:text-white/60">
            {content.contact.linkedinLabel}
          </p>
          <a
            className="text-sm font-medium hover:underline"
            href={content.contacts.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            {content.contacts.linkedinUrl}
          </a>
        </div>
      </div>
    </div>
  );
}
