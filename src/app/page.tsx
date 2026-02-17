import { ContactCard } from "@/components/ContactCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { contentByLang, normalizeLang } from "@/lib/content";
import { getRepos } from "@/lib/github";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const lang = normalizeLang(params.lang);
  const content = contentByLang[lang];

  const repos = await getRepos();

  const featuredRepo = repos.find((r) => r.name.toLowerCase() === "to-show");
  const topRepos = repos
    .filter((r) => r.id !== featuredRepo?.id)
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      <Header content={content} lang={lang} />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="grid gap-8 rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/15 dark:bg-black md:p-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-sm font-medium text-black/60 dark:text-white/60">
                {content.role} · {content.location}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                {content.hero.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-black/70 dark:text-white/70">
                {content.hero.subheadline}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/85"
                  href={`/?lang=${lang}#projects`}
                >
                  {content.hero.ctaProjects}
                </a>
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-5 text-sm font-medium hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                  href={`/?lang=${lang}#contact`}
                >
                  {content.hero.ctaContact}
                </a>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-2xl border border-black/10 bg-zinc-50 p-5 dark:border-white/15 dark:bg-white/5">
                <p className="text-xs text-black/60 dark:text-white/60">{content.name}</p>
                <p className="mt-2 text-sm leading-6 text-black/80 dark:text-white/80">
                  {content.about.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 grid gap-12">
          <Section id="featured" title={content.featured.title}>
            <div className="grid gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black md:p-8">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/60 dark:text-white/60">
                    {content.featured.name}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
                    {content.featured.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-sm font-medium text-white hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/85"
                    href={featuredRepo?.html_url ?? "https://github.com/BazhenMokhovtsov/To-Show"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content.featured.repoCta}
                  </a>
                  {featuredRepo?.homepage ? (
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 px-4 text-sm font-medium hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                      href={featuredRepo.homepage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content.featured.liveCta}
                    </a>
                  ) : null}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-black/60 dark:text-white/60">
                  {content.featured.highlightsTitle}
                </p>
                <ul className="mt-2 grid gap-2 text-sm text-black/70 dark:text-white/70 md:grid-cols-2">
                  {content.featured.highlights.map((h) => (
                    <li key={h} className="rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 dark:border-white/15 dark:bg-white/5">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {featuredRepo?.description ? (
                <p className="text-xs text-black/60 dark:text-white/60">
                  GitHub: {featuredRepo.description}
                </p>
              ) : null}
            </div>
          </Section>

          <Section id="projects" title={content.projects.title} subtitle={content.projects.subtitle}>
            <div className="grid gap-4 md:grid-cols-2">
              {topRepos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
            <div className="mt-6">
              <a
                className="text-sm font-medium hover:underline"
                href={content.contacts.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                {content.contacts.githubUrl}
              </a>
            </div>
          </Section>

          <Section
            id="experience"
            title={content.experience.title}
            subtitle={content.experience.subtitle}
          >
            <div className="grid gap-4 rounded-2xl border border-black/10 bg-white p-5 text-sm text-black/70 dark:border-white/15 dark:bg-black dark:text-white/70">
              <p className="leading-6">{content.experience.summary}</p>
              <p className="leading-6">{content.experience.pitch}</p>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-black/60 dark:text-white/60">
                  {content.experience.bulletsTitle}
                </p>
                <ul className="mt-2 list-disc pl-5 leading-6">
                  {content.experience.bullets.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-black/60 dark:text-white/60">
                  {content.experience.expertiseTitle}
                </p>
                <ul className="mt-2 list-disc pl-5 leading-6">
                  {content.experience.expertise.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-black/60 dark:text-white/60">
                  {content.experience.servicesTitle}
                </p>
                <ul className="mt-2 list-disc pl-5 leading-6">
                  {content.experience.services.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="tech" title={content.tech.title} subtitle={content.tech.subtitle}>
            <div className="grid gap-4 md:grid-cols-2">
              {content.skills.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-black"
                >
                  <p className="text-sm font-semibold tracking-tight">
                    {group.category}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 dark:border-white/15 dark:bg-black dark:text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" title={content.contact.title} subtitle={content.contact.subtitle}>
            <ContactCard content={content} />
          </Section>
        </div>
      </main>

      <Footer content={content} />
    </div>
  );
}
