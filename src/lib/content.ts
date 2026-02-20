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
    projects?: string;
    tech: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaProjects?: string;
    ctaContact: string;
  };
  about: {
    title: string;
    body: string;
  };
  featured: {
    title: string;
    name: string;
    description: string;
    roleTitle?: string;
    role?: string;
    highlightsTitle: string;
    highlights: string[];
    repoCta?: string;
    liveCta?: string;
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
      tech: "Tech",
      contact: "Contact",
    },
    hero: {
      headline: "Building production-ready backend systems",
      subheadline:
        "I specialize in scalable Django applications with async processing, monitoring, and deployment automation.",
      ctaContact: "Contact",
    },
    about: {
      title: "About",
      body: "I'm a backend developer focused on production-grade Django applications. My work emphasizes async processing, monitoring, and deployment automation for scalable SaaS solutions.",
    },
    featured: {
      title: "Featured project",
      name: "Menu Generator",
      description:
        "Production-ready meal planning SaaS with async task processing, real-time caching, and comprehensive monitoring. Handles complex menu generation algorithms with PostgreSQL optimization and Redis-based session management.",
      roleTitle: "My Role",
      role: "Backend Developer — architected complete Django REST API with async task processing, implemented Redis caching strategies, and set up production deployment with comprehensive monitoring stack.",
      highlightsTitle: "Backend Architecture & Production Features",
      highlights: [
        "Django + DRF with PostgreSQL, Redis caching, and Celery async workers",
        "Docker Compose production stack: Nginx + Gunicorn + SSL (Certbot)",
        "Advanced Celery setup: dedicated queues, Beat scheduler, worker optimization",
        "Performance testing with Locust, monitoring via Prometheus + Grafana",
        "Production CI/CD: GitHub Actions, automated health checks, backup workflows",
        "REST API design with async task patterns, Redis session management",
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "Based on LinkedIn.",
      summary:
        "I build scalable, maintainable backend solutions with Python, Django and REST APIs, plus modern deployment pipelines using Docker, Docker Compose and CI/CD (GitHub Actions).",
      pitch:
        "Python/Django Backend Engineer — I deliver clean, tested, production-ready backend solutions including Docker deployment and automated CI/CD pipelines.",
      bulletsTitle: "Production Achievements",
      bullets: [
        "Built production SaaS handling 100+ concurrent users with 99.9% uptime",
        "Reduced menu generation time from 45s to 8s through algorithm optimization",
        "Implemented Redis caching reducing database load by 60%",
        "Designed PostgreSQL schema with 15+ optimized tables and proper indexing",
        "Built REST API with 25+ endpoints handling complex filtering and async processing",
        "Set up comprehensive monitoring (Prometheus + Grafana) reducing incident response time by 70%",
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
      subtitle: "For fastest response, use email or LinkedIn.",
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
      tech: "Technologien",
      contact: "Kontakt",
    },
    hero: {
      headline: "Zuverlässige Back-End-Systeme entwickeln",
      subheadline:
        "Ich spezialisiere mich auf skalierbare Django-Anwendungen mit asynchroner Verarbeitung, Überwachung und Automatisierung der Bereitstellung.",
      ctaContact: "Kontakt",
    },
    about: {
      title: "Über mich",
      body: "Ich bin ein Back-End-Entwickler, der sich auf die Entwicklung von Produktions-Grade-Django-Anwendungen konzentriert. Meine Arbeit betont asynchrone Verarbeitung, Überwachung und Automatisierung der Bereitstellung für skalierbare SaaS-Lösungen.",
    },
    featured: {
      title: "Herausragendes Projekt",
      name: "Menu Generator",
      description:
        "Ein Produktions-Grade-Meal-Planning-SaaS mit asynchroner Aufgabenverarbeitung, Echtzeit-Caching und umfassender Überwachung. Behandelt komplexe Menü-Generierungs-Algorithmen mit PostgreSQL-Optimierung und Redis-basierter Sitzungsverwaltung.",
      roleTitle: "Meine Rolle",
      role: "Backend Developer — komplette Django REST API mit async Aufgabenverarbeitung architetkiert, Redis-Caching-Strategien implementiert und Production Deployment mit umfassendem Monitoring-Stack eingerichtet.",
      highlightsTitle: "Back-End-Architektur & Produktions-Features",
      highlights: [
        "Django + DRF mit PostgreSQL, Redis-Caching und Celery-Async-Workern",
        "Docker Compose-Produktions-Stack: Nginx + Gunicorn + SSL (Certbot)",
        "Erweiterte Celery-Konfiguration: dedizierte Warteschlangen, Beat-Scheduler, Worker-Optimierung",
        "Leistungstests mit Locust, Überwachung via Prometheus + Grafana",
        "Produktions-CD/CI: GitHub Actions, automatisierte Gesundheitsprüfungen, Backup-Workflows",
        "REST-API-Design mit asynchronen Aufgabenmustern, Redis-Sitzungsverwaltung",
      ],
    },
    experience: {
      title: "Erfahrung",
      subtitle: "Basierend auf LinkedIn.",
      summary:
        "Ich entwickle skalierbare und wartbare Back-End-Lösungen mit Python, Django und REST-APIs sowie moderne Bereitstellungs-Pipelines mit Docker, Docker Compose und CI/CD (GitHub Actions). Erfahrung in PostgreSQL-Datenbanken, Linux-Server-Umgebungen, Überwachung (Grafana) und produktivem Deployment sorgt für stabile, reproduzierbare Ergebnisse.",
      pitch:
        "Python/Django Backend Engineer – ich liefere saubere, getestete und produktionsreife Backend-Lösungen inkl. Docker-Deployment und automatisierten CI/CD-Pipelines.",
      bulletsTitle: "Produktions-Erfolge",
      bullets: [
        "Produktions-SaaS mit 100+ gleichzeitigen Nutzern und 99,9% Uptime entwickelt",
        "Menü-Generierungszeit von 45s auf 8s durch Algorithmus-Optimierung reduziert",
        "Redis-Caching implementiert, das die Datenbanklast um 60% reduziert",
        "PostgreSQL-Schema mit 15+ optimierten Tabellen und korrektem Indexing entworfen",
        "REST-API mit 25+ Endpunkten für komplexe Filterung und asynchrone Verarbeitung entwickelt",
        "Umfassendes Monitoring (Prometheus + Grafana) eingerichtet, Reaktionszeit um 70% verkürzt",
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
      subtitle: "Am schnellsten erreichst du mich per E-Mail oder LinkedIn.",
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
