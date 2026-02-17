import type { GithubRepo } from "@/lib/github";

export function ProjectCard({ repo }: { repo: GithubRepo }) {
  const subtitle = repo.description ?? "";
  const meta = [repo.language, `${repo.stargazers_count}★`, `${repo.forks_count} forks`]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/15 dark:bg-black">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            <a
              className="hover:underline"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repo.name}
            </a>
          </h3>
          {subtitle ? (
            <p className="mt-1 text-sm leading-6 text-black/70 dark:text-white/70">
              {subtitle}
            </p>
          ) : null}
          {meta ? (
            <p className="mt-3 text-xs text-black/60 dark:text-white/60">{meta}</p>
          ) : null}
        </div>
        {repo.homepage ? (
          <a
            className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            href={repo.homepage}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        ) : null}
      </div>
    </article>
  );
}
