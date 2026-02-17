export type Lang = "en" | "de";

export type SiteContent = {
  name: string;
  role: string;
  location: string;
  contacts: {
    email: string;
    githubUrl: string;
    linkedinUrl: string;
  };
  skills: Array<{
    category: string;
    items: string[];
  }>;
  nav: {
    projects: string;
    tech: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    title: string;
    body: string;
  };
  projects: {
    title: string;
    subtitle: string;
  };
  featured: {
    title: string;
    name: string;
    description: string;
    highlightsTitle: string;
    highlights: string[];
    repoCta: string;
    liveCta: string;
  };
  experience: {
    title: string;
    subtitle: string;
    summary: string;
    pitch: string;
    bulletsTitle: string;
    bullets: string[];
    expertiseTitle: string;
    expertise: string[];
    servicesTitle: string;
    services: string[];
  };
  tech: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    emailCta: string;
    linkedinCta: string;
  };
};

export const contentByLang: Record<Lang, SiteContent> = {
  en: {
    name: "Bazhen Mokhovtsov",
    role: "Back-end developer",
    location: "Germany",
    contacts: {
      email: "BazhenMokhovtsov@gmail.com",
      githubUrl: "https://github.com/BazhenMokhovtsov",
      linkedinUrl:
        "https://www.linkedin.com/in/mokhovtsov-bazhen-7b598a2b7/",
    },
    skills: [
      {
        category: "Backend & APIs",
        items: [
          "Python",
          "Django",
          "Django REST Framework",
          "REST API design",
          "API integrations",
          "Unit tests",
        ],
      },
      {
        category: "DevOps & Deployment",
        items: [
          "Docker",
          "Docker Compose",
          "CI/CD (GitHub Actions)",
          "Container-based deployments",
          "Linux server administration",
          "Production deployments",
        ],
      },
      {
        category: "Databases",
        items: [
          "PostgreSQL",
          "Database design",
          "Migrations",
          "Backups & restore",
        ],
      },
      {
        category: "Monitoring & Infrastructure",
        items: [
          "Grafana",
          "Basic monitoring",
          "Logging (basic knowledge)",
          "Nginx (basic knowledge)",
        ],
      },
      {
        category: "Tools & Workflow",
        items: [
          "Git (GitHub)",
          "Code quality & linting (flake8)",
          "Debugging",
          "Structured project work",
        ],
      },
    ],
    nav: {
      projects: "Projects",
      tech: "Tech",
      contact: "Contact",
    },
    hero: {
      headline: "Building reliable back-end systems",
      subheadline:
        "I focus on pragmatic engineering: clean APIs, data modeling, and maintainable services.",
      ctaProjects: "View projects",
      ctaContact: "Contact",
    },
    about: {
      title: "About",
      body: "I’m a back-end developer based in Germany. Here you can find my selected GitHub projects and the technologies I use.",
    },
    projects: {
      title: "Projects",
      subtitle: "Auto-generated from GitHub (sorted by last update).",
    },
    featured: {
      title: "Featured project",
      name: "To-Show",
      description:
        "A meal planning web app: users can add recipes, browse existing ones, and generate meal plans for a selected time period. Data is stored per user account.",
      highlightsTitle: "What it demonstrates",
      highlights: [
        "Backend-first approach (Python / Django)",
        "REST APIs and integrations",
        "PostgreSQL data modeling",
        "Docker / Docker Compose deployment workflow",
      ],
      repoCta: "View repository",
      liveCta: "Live demo",
    },
    experience: {
      title: "Experience",
      subtitle: "Based on LinkedIn.",
      summary:
        "I build scalable, maintainable backend solutions with Python, Django and REST APIs, plus modern deployment pipelines using Docker, Docker Compose and CI/CD (GitHub Actions).",
      pitch:
        "Python/Django Backend Engineer — I deliver clean, tested, production-ready backend solutions including Docker deployment and automated CI/CD pipelines.",
      bulletsTitle: "Delivery & CI/CD",
      bullets: [
        "CI tests in GitHub Actions with Postgres + Redis services, migrations and Django test suites.",
        "Build & publish Docker images to GHCR with version tags.",
        "SSH-based production deploy: pull images + restart via Docker Compose.",
        "Production stack: Django (Gunicorn) + Postgres + Redis + Celery workers/Beat behind Nginx.",
        "Observability: Prometheus + Grafana + Flower for Celery monitoring.",
        "Operational safety: pre-deploy SSH verification, post-deploy health checks, and release backups (dumpdata).",
      ],
      expertiseTitle: "Expertise",
      expertise: [
        "REST APIs",
        "PostgreSQL",
        "Linux deployments",
        "Monitoring (Grafana)",
      ],
      servicesTitle: "I can help with",
      services: [
        "REST API development and backend architecture",
        "Docker-based containerization and infrastructure setup",
        "CI/CD workflow setup and optimization",
        "Deployment on Linux servers and production support",
        "Database design, migrations and backups",
      ],
    },
    tech: {
      title: "Tech stack",
      subtitle: "Curated list of relevant skills.",
    },
    contact: {
      title: "Contact",
      subtitle:
        "For fastest response, use email or LinkedIn. You can also find all my code on GitHub.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      emailCta: "Email me",
      linkedinCta: "Message on LinkedIn",
    },
  },
  de: {
    name: "Bazhen Mokhovtsov",
    role: "Back-end Developer",
    location: "Deutschland",
    contacts: {
      email: "BazhenMokhovtsov@gmail.com",
      githubUrl: "https://github.com/BazhenMokhovtsov",
      linkedinUrl:
        "https://www.linkedin.com/in/mokhovtsov-bazhen-7b598a2b7/",
    },
    skills: [
      {
        category: "Backend & APIs",
        items: [
          "Python",
          "Django",
          "Django REST Framework",
          "REST API Design",
          "API-Integrationen",
          "Unit-Tests",
        ],
      },
      {
        category: "DevOps & Deployment",
        items: [
          "Docker",
          "Docker Compose",
          "CI/CD (GitHub Actions)",
          "Container-basierte Deployments",
          "Linux Server Administration",
          "Produktions-Deployments",
        ],
      },
      {
        category: "Datenbanken",
        items: [
          "PostgreSQL",
          "Datenbank-Design",
          "Migrationen",
          "Backups & Restore",
        ],
      },
      {
        category: "Monitoring & Infrastruktur",
        items: [
          "Grafana",
          "Basis-Monitoring",
          "Logging (Grundkenntnisse)",
          "Nginx (Grundkenntnisse)",
        ],
      },
      {
        category: "Tools & Workflow",
        items: [
          "Git (GitHub)",
          "Code-Qualität & Linting (flake8)",
          "Debugging",
          "Strukturierte Projektarbeit",
        ],
      },
    ],
    nav: {
      projects: "Projekte",
      tech: "Technologien",
      contact: "Kontakt",
    },
    hero: {
      headline: "Zuverlässige Back-End-Systeme entwickeln",
      subheadline:
        "Mein Fokus: pragmatisches Engineering — saubere APIs, Datenmodellierung und wartbare Services.",
      ctaProjects: "Projekte ansehen",
      ctaContact: "Kontakt",
    },
    about: {
      title: "Über mich",
      body: "Ich bin ein Back-End-Developer in Deutschland. Hier findest du ausgewählte GitHub-Projekte und die Technologien, die ich nutze.",
    },
    projects: {
      title: "Projekte",
      subtitle: "Automatisch aus GitHub generiert (sortiert nach letztem Update).",
    },
    featured: {
      title: "Top-Projekt",
      name: "To-Show",
      description:
        "Eine Meal-Planning-Web-App: Nutzer können eigene Rezepte hinzufügen, vorhandene durchsuchen und Essenspläne für einen Zeitraum (z. B. eine Woche) generieren. Alle Daten werden pro Benutzerkonto gespeichert.",
      highlightsTitle: "Was es zeigt",
      highlights: [
        "Backend-first Ansatz (Python / Django)",
        "REST APIs und Integrationen",
        "PostgreSQL Datenmodellierung",
        "Docker / Docker Compose Deployment-Workflow",
      ],
      repoCta: "Repository ansehen",
      liveCta: "Live-Demo",
    },
    experience: {
      title: "Erfahrung",
      subtitle: "Basierend auf LinkedIn.",
      summary:
        "Ich entwickle skalierbare und wartbare Backend-Lösungen mit Python, Django und REST-APIs sowie moderne Deployment-Pipelines mit Docker, Docker Compose und CI/CD (GitHub Actions). Erfahrung in PostgreSQL-Datenbanken, Linux-Server-Umgebungen, Monitoring (Grafana) und produktivem Deployment sorgt für stabile, reproduzierbare Ergebnisse.",
      pitch:
        "Python/Django Backend Engineer – ich liefere saubere, getestete und produktionsreife Backend-Lösungen inkl. Docker-Deployment und automatisierten CI/CD-Pipelines.",
      bulletsTitle: "Delivery & CI/CD",
      bullets: [
        "CI-Tests in GitHub Actions mit Postgres + Redis Services, Migrationen und Django Test-Suites.",
        "Build & Publish: Docker Images in GHCR mit Version-Tags.",
        "SSH-basiertes Production Deploy: Images pullen + Restart via Docker Compose.",
        "Production Stack: Django (Gunicorn) + Postgres + Redis + Celery Worker/Beat hinter Nginx.",
        "Observability: Prometheus + Grafana + Flower für Celery Monitoring.",
        "Betriebssicherheit: SSH-Verifikation vor Deploy, Post-Deploy Health Checks und Release-Backups (dumpdata).",
      ],
      expertiseTitle: "Expertise",
      expertise: [
        "REST APIs",
        "PostgreSQL",
        "Linux-Deployments",
        "Monitoring (Grafana)",
      ],
      servicesTitle: "Ich biete",
      services: [
        "Entwicklung von REST-APIs und Backend-Architekturen",
        "Docker-basierte Containerisierung und Infrastruktur-Setup",
        "Aufbau und Optimierung von CI/CD-Workflows",
        "Deployment auf Linux-Servern und produktive Begleitung",
        "Datenbank-Design, Migrationen und Backups",
      ],
    },
    tech: {
      title: "Tech-Stack",
      subtitle: "Kuratierte Liste relevanter Skills.",
    },
    contact: {
      title: "Kontakt",
      subtitle:
        "Am schnellsten erreichst du mich per E-Mail oder LinkedIn. Auf GitHub findest du meinen Code.",
      emailLabel: "E-Mail",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      emailCta: "E-Mail senden",
      linkedinCta: "LinkedIn Nachricht",
    },
  },
};

export function normalizeLang(input: unknown): Lang {
  return input === "de" ? "de" : "en";
}
