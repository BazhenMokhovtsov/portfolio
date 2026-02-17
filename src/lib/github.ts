export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
};

const GH_USER = "BazhenMokhovtsov";

export async function getRepos(): Promise<GithubRepo[]> {
  const url = `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`;

  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch GitHub repos: ${res.status}`);
  }

  const repos = (await res.json()) as GithubRepo[];

  return repos
    .filter((r) => !r.private)
    .filter((r) => r.name !== GH_USER)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
}

export type LanguageStats = Record<string, number>;

export async function getRepoLanguages(languagesUrl: string): Promise<LanguageStats> {
  const res = await fetch(languagesUrl, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    return {};
  }

  return (await res.json()) as LanguageStats;
}

export async function getTopLanguages(): Promise<LanguageStats> {
  const reposUrl = `https://api.github.com/users/${GH_USER}/repos?per_page=30&sort=updated`;
  const res = await fetch(reposUrl, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    return {};
  }

  const repos = (await res.json()) as Array<{ languages_url: string; private: boolean }>;

  const stats: LanguageStats = {};

  for (const repo of repos) {
    if (repo.private) continue;
    const lang = await getRepoLanguages(repo.languages_url);
    for (const [k, v] of Object.entries(lang)) {
      stats[k] = (stats[k] ?? 0) + v;
    }
  }

  return stats;
}
