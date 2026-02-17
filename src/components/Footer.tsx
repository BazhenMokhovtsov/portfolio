import type { SiteContent } from "@/lib/content";

export function Footer({ content }: { content: SiteContent }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 py-10 dark:border-white/15">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-sm text-black/60 dark:text-white/60 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {content.name}
        </p>
        <p>
          <a
            className="hover:underline"
            href={content.contacts.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {" · "}
          <a
            className="hover:underline"
            href={content.contacts.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
