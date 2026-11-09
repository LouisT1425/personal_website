// ---------- Textes FR / EN ----------
const translations = {
  "fr": {
    "meta.title": "Louis Thin | Data Analyst",
    "meta.description": "Portfolio et CV de Louis Thin, ingénieur diplômé en IA et génie logiciel, à la recherche d'un poste de data analyst ou de business analyst en Île-de-France.",
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.resume": "CV",
    "nav.music": "Musique",
    "nav.contact": "Contact",
    "a11y.navToggle": "Basculer la navigation",
    "a11y.themeToggle": "Basculer le mode sombre",
    "a11y.copyEmailLabel": "Copier l'adresse e-mail",
    "a11y.copyEmailTitle": "Cliquer pour copier dans le presse-papier",
    "a11y.dyslexiaToggle": "Basculer le mode dyslexie",
    "a11y.dyslexiaToggleTitle": "Activer un affichage plus lisible (police et espacement adaptés)",
    "toast.emailCopied": "Adresse copiée dans le presse-papier.",
    "toast.emailCopyError": "Impossible de copier l'adresse e-mail.",
    "hero.bio": "Ingénieur diplômé en IA et génie logiciel. Chez Safran Aircraft Engines, j'ai défini les KPI et construit le rapport Power BI qui ont fait passer le taux de validation de 33 % à 50 %. Je cherche un poste de data analyst ou de business analyst en Île-de-France.",
    "hero.cta1": "Voir mes projets",
    "hero.cta2": "Télécharger mon CV",
    "projects.title": "Projets",
    "projects.offline": "Le site n'est plus disponible",
    "projects.source": "Code source",
    "project1.desc": "Pipeline ELT sur les données World Bank Open Data (PostgreSQL, dbt, Airflow), exposé par une API FastAPI et un front React. Il répond à quatre questions : pays les plus émetteurs, comparaison entre pays, secteurs les plus émetteurs, émissions par habitant.",
    "resume.title": "CV",
    "resume.aboutHeading": "À propos",
    "resume.aboutText": "Ingénieur diplômé de Polytech Dijon, spécialisation intelligence artificielle et génie logiciel. J'aime partir d'une question métier, trouver les bonnes données et en sortir des indicateurs que les équipes utilisent vraiment.",
    "resume.skillsHeading": "Compétences",
    "resume.downloadBtn": "Télécharger le CV (PDF)",
    "resume.experienceHeading": "Expérience",
    "resume.engagementHeading": "Engagement",
    "resume.educationHeading": "Formation",
    "job1.title": "Stage de fin d'études, analyse de données",
    "job1.company": "Safran Aircraft Engines",
    "job1.dates": "Février 2026 - Août 2026",
    "job1.desc": [
      "Analyse de 800 dossiers (chacun une mise à jour de manuel de maintenance) et définition des KPI de suivi : taux de validation passé de 33 % à 50 %.",
      "Rapport Power BI de 8 pages (modèle en étoile, DAX) pour les managers, les COPIL et les audits qualité : Pareto, filtres par moteur, personne, manuel et action, suivi des actions métier relié à l'outil de ticketing.",
      "Collecte quotidienne de 3 sources (SQLite, CSV/XLSX, API REST ; environ 800 lignes × 15 colonnes) automatisée en Python (pandas), lancée par le Planificateur de tâches Windows sur une machine virtuelle et historisée dans SQLite. Elle a contribué à réduire d'environ 20 % la charge de travail de l'équipe."
    ],
    "job2.title": "Stage international, Computer Vision et analyse de données",
    "job2.company": "KMUTNB, Bangkok, Thaïlande",
    "job2.dates": "Avril 2025 - Août 2025",
    "job2.desc": [
      "Évaluation de modèles YOLOv11 sur deux cas agricoles, le suivi de plants de riz (250 images, 2 classes) et la détection d'animaux (vache, cheval, cochon, chien, chèvre), avec précision, rappel, mAP et matrices de confusion.",
      "Graphiques et tableaux de synthèse en Python, présentés lors de points mensuels avec les équipes métier.",
      "Comparaison de plusieurs modèles et configurations selon la qualité de détection et le coût d'inférence, pour un robot rizicole et une caméra fixe en pâturage."
    ],
    "gala.title": "Responsable musique",
    "gala.company": "Gala Polytech Dijon",
    "gala.dates": "Juillet 2025 - Février 2026",
    "gala.desc": [
      "Pilotage d'un gala de 4 h devant plus de 300 spectateurs : équipe de 6, 40 musiciens, budget de 30 000 €, prestataires son et lumière."
    ],
    "edu1.degree": "Diplôme d'ingénieur, Intelligence Artificielle et Génie Logiciel",
    "edu1.school": "Polytech Dijon",
    "music.title": "Musique",
    "music.intro": "Le reste du temps, j'écris et j'enregistre sous le nom Louis Thin. Mes morceaux sont aussi sur Deezer, Apple Music et d'autres plateformes.",
    "contact.title": "Contact",
    "contact.text": "Pour un poste, une question ou un échange, le plus simple est de m'écrire.",
    "footer.text": "Site écrit à la main en HTML, CSS et JavaScript.",
    "footer.backTop": "Haut de page"
  },
  "en": {
    "meta.title": "Louis Thin | Data Analyst",
    "meta.description": "Portfolio and résumé of Louis Thin, engineering graduate in AI and software engineering, looking for a data analyst or business analyst role in the Paris region.",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.resume": "Résumé",
    "nav.music": "Music",
    "nav.contact": "Contact",
    "a11y.navToggle": "Toggle navigation",
    "a11y.themeToggle": "Toggle dark mode",
    "a11y.copyEmailLabel": "Copy email address",
    "a11y.copyEmailTitle": "Click to copy to clipboard",
    "a11y.dyslexiaToggle": "Toggle dyslexia-friendly mode",
    "a11y.dyslexiaToggleTitle": "Turn on a more readable layout (adapted font and spacing)",
    "toast.emailCopied": "Address copied to clipboard.",
    "toast.emailCopyError": "Couldn't copy the email address.",
    "hero.bio": "Engineering graduate in AI and software engineering. At Safran Aircraft Engines, I defined the KPIs and built the Power BI report that took the validation rate from 33% to 50%. I'm looking for a data analyst or business analyst role in the Paris region.",
    "hero.cta1": "See my projects",
    "hero.cta2": "Download my résumé",
    "projects.title": "Projects",
    "projects.offline": "The site is no longer available",
    "projects.source": "Source code",
    "project1.desc": "ELT pipeline on World Bank Open Data (PostgreSQL, dbt, Airflow), served by a FastAPI API and a React front end. It answers four questions: top emitting countries, country comparison, top emitting sectors, emissions per capita.",
    "resume.title": "Résumé",
    "resume.aboutHeading": "About",
    "resume.aboutText": "Engineering graduate from Polytech Dijon, specializing in artificial intelligence and software engineering. I like starting from a business question, finding the right data and turning it into indicators that teams actually use.",
    "resume.skillsHeading": "Skills",
    "resume.downloadBtn": "Download résumé (PDF)",
    "resume.experienceHeading": "Experience",
    "resume.engagementHeading": "Involvement",
    "resume.educationHeading": "Education",
    "job1.title": "Final-year internship, data analysis",
    "job1.company": "Safran Aircraft Engines",
    "job1.dates": "February 2026 - August 2026",
    "job1.desc": [
      "Analyzed 800 files (each a maintenance manual update) and defined the tracking KPIs: validation rate up from 33% to 50%.",
      "8-page Power BI report (star schema, DAX) for managers, steering committees and quality audits: Pareto charts, filters by engine, person, manual and action, and business action tracking linked to the ticketing tool.",
      "Daily collection of 3 sources (SQLite, CSV/XLSX, REST API; about 800 rows × 15 columns) automated in Python (pandas), run by Windows Task Scheduler on a virtual machine and stored in SQLite. It helped cut the team's workload by about 20%."
    ],
    "job2.title": "International internship, computer vision and data analysis",
    "job2.company": "KMUTNB, Bangkok, Thailand",
    "job2.dates": "April 2025 - August 2025",
    "job2.desc": [
      "Evaluated YOLOv11 models on two agricultural use cases, rice plant tracking (250 images, 2 classes) and animal detection (cow, horse, pig, dog, goat), using precision, recall, mAP and confusion matrices.",
      "Charts and summary tables in Python, presented in monthly meetings with the business teams.",
      "Compared several models and configurations on detection quality and inference cost, for a rice-field robot and a fixed pasture camera."
    ],
    "gala.title": "Music lead",
    "gala.company": "Polytech Dijon gala",
    "gala.dates": "July 2025 - February 2026",
    "gala.desc": [
      "Ran a 4-hour gala for 300+ attendees: team of 6, 40 musicians, €30,000 budget, sound and lighting contractors."
    ],
    "edu1.degree": "Engineering degree, Artificial Intelligence and Software Engineering",
    "edu1.school": "Polytech Dijon",
    "music.title": "Music",
    "music.intro": "The rest of the time, I write and record under the name Louis Thin. My tracks are also on Deezer, Apple Music and other platforms.",
    "contact.title": "Contact",
    "contact.text": "For a role, a question or just a chat, the easiest way is to email me.",
    "footer.text": "Hand-written in HTML, CSS and JavaScript.",
    "footer.backTop": "Back to top"
  }
};

const langToggle = document.getElementById("langToggle");
const EMAIL = "thin.louis1425@hotmail.com";
const toast = document.getElementById("toast");

function currentLang() {
  return document.documentElement.getAttribute("lang") === "en" ? "en" : "fr";
}

document.querySelectorAll(".copy-email").forEach(link => {
    link.addEventListener("click", async e => {
        e.preventDefault();

        try {
            await navigator.clipboard.writeText(
                link.dataset.email || EMAIL
            );

            toast.textContent = translations[currentLang()]["toast.emailCopied"];
            toast.classList.add("show");

            clearTimeout(toast._timeout);
            toast._timeout = setTimeout(() => {
                toast.classList.remove("show");
            }, 2200);

        } catch {
            alert(translations[currentLang()]["toast.emailCopyError"]);
        }
    });
});

function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;
    if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else if (Array.isArray(value)) {
      el.replaceChildren(
        ...value.map((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          return li;
        })
      );
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    const value = dict[key];
    if (value !== undefined) el.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    const value = dict[key];
    if (value !== undefined) el.title = value;
  });

  const isFr = lang === "fr";
  langToggle.textContent = isFr ? "EN" : "FR";
  langToggle.setAttribute("aria-label", isFr ? "Switch to English" : "Passer en français");

  localStorage.setItem("lang", lang);
}

const storedLang = localStorage.getItem("lang");
const initialLang = storedLang === "en" ? "en" : "fr";
applyLanguage(initialLang);

const LANG_FADE_MS = 160;

langToggle.addEventListener("click", () => {
  const next = currentLang() === "fr" ? "en" : "fr";
  document.body.classList.add("lang-fade");
  window.setTimeout(() => {
    applyLanguage(next);
    document.body.classList.remove("lang-fade");
  }, LANG_FADE_MS);
});

// ---------- UI transition helper (theme + dyslexia mode) ----------
const root = document.documentElement;
const UI_FADE_MS = 320;

function withUiTransition(mutate) {
  root.classList.add("ui-transition");
  mutate();
  clearTimeout(root._uiFadeTimeout);
  root._uiFadeTimeout = window.setTimeout(() => {
    root.classList.remove("ui-transition");
  }, UI_FADE_MS);
}

// ---------- Theme toggle ----------
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("theme");
if (storedTheme) root.setAttribute("data-theme", storedTheme);

themeToggle.addEventListener("click", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";

  withUiTransition(() => {
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
});

// ---------- Dyslexia-friendly mode ----------
const dyslexiaToggle = document.getElementById("dyslexiaToggle");
const storedDyslexia = localStorage.getItem("dyslexia") === "true";
if (storedDyslexia) {
  root.setAttribute("data-dyslexic", "true");
  dyslexiaToggle.classList.add("active");
  dyslexiaToggle.setAttribute("aria-pressed", "true");
}

dyslexiaToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-dyslexic") !== "true";

  withUiTransition(() => {
    if (next) {
      root.setAttribute("data-dyslexic", "true");
    } else {
      root.removeAttribute("data-dyslexic");
    }
    dyslexiaToggle.classList.toggle("active", next);
    dyslexiaToggle.setAttribute("aria-pressed", String(next));
    localStorage.setItem("dyslexia", String(next));
  });
});

// ---------- Mobile nav ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll("main section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinkEls.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((section) => sectionObserver.observe(section));

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
