import type { Lang } from './languages';

export type { Lang };

export type PipelineStage = { num: string; title: string; body: string };
export type AiActArticle = { code: string; label: string; desc: string };
export type Metric = {
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  superscript?: boolean;
  color?: 'cyan' | 'violet' | 'text';
  label: string;
};
export type TimelineItem = { date: string; title: string; org: string; body: string; current?: boolean };
export type WritingPost = { status: string; title: string; body: string };
export type Project = { date: string; title: string; description: string; tags: string[]; url: string };
export type StackCategory = { title: string; lines: string[][] };
export type LanguageSkill = { flag: string; level: string };
export type FocusArea = { title: string; body: string };

export type Dictionary = {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    research: string;
    experience: string;
    publications: string;
    writing: string;
    contact: string;
    langSearchPlaceholder: string;
    langSearchNoResults: string;
    themeToggleLabel: string;
    menuToggleLabel: string;
  };
  hero: {
    kicker: string;
    h1Pre: string;
    h1Accent: string;
    h1Post: string;
    sub: string;
    ctaResearch: string;
    ctaCV: string;
    caption: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    visionLine: string;
    facts: { dt: string; dd: string }[];
  };
  research: {
    label: string;
    title: string;
    subtitle: string;
    h3: string;
    tagline: string;
    p1: string;
    p2: string;
    tags: string[];
    viewRepo: string;
    readMethodology: string;
    pipeline: PipelineStage[];
    aiAct: {
      title: string;
      body: string;
      articles: AiActArticle[];
    };
  };
  metrics: {
    label: string;
    title: string;
    items: Metric[];
  };
  experience: {
    label: string;
    title: string;
    currentLabel: string;
    items: TimelineItem[];
  };
  publications: {
    label: string;
    title: string;
    subtitle: string;
    status: string;
    entryTitle: string;
    authors: string;
    journal: string;
    description: string;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    items: Project[];
  };
  techStack: {
    label: string;
    title: string;
    subtitle: string;
    categories: StackCategory[];
    languagesTitle: string;
    languages: LanguageSkill[];
  };
  areasOfFocus: {
    label: string;
    title: string;
    items: FocusArea[];
  };
  writing: {
    label: string;
    title: string;
    subtitle: string;
    posts: WritingPost[];
  };
  contact: {
    title: string;
    directLabel: string;
    elsewhereLabel: string;
    email: string;
    github: string;
    linkedin: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
};

const en: Dictionary = {
  htmlLang: 'en',
  meta: {
    title: 'Clément Longeac — AI Research, Clinical NLP & Biomedical AI',
    description:
      'Clinical NLP & biomedical AI researcher at ESIEE Paris, building toward a PhD in AI for biomedical research.',
  },
  nav: {
    about: 'About',
    research: 'Research',
    experience: 'Experience',
    publications: 'Publications',
    writing: 'Writing',
    contact: 'Contact',
    langSearchPlaceholder: 'Search a language…',
    langSearchNoResults: 'No matching language',
    themeToggleLabel: 'Toggle theme',
    menuToggleLabel: 'Toggle menu',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Extracting biomarkers from clinical text ',
    h1Accent: 'without waking the GPU',
    h1Post: '.',
    sub: "I'm Clément Longeac. I'm working on DEMNE, a routing framework that decides — per entity type — whether a regex, a CRF, a transformer, or an LLM is the honest tool for the job. First result: 93.7% of clinical entities extracted without a GPU, F1 = 0.941 on 300 AP-HP notes.",
    ctaResearch: 'See the research',
    ctaCV: 'Download CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, live schematic',
  },
  about: {
    label: '01 — About',
    title: 'From tutoring math to modeling tumor markers',
    p1: "I'm a fourth-year student at ESIEE Paris, specializing in Data Science & AI, and enrolled in the school's Tremplin Recherche track — a program built for students heading toward doctoral research rather than a standard industry placement.",
    p2: 'My work centers on making unstructured clinical text usable for research: extracting the biomarkers, staging information, and treatment details buried in French oncology reports, where general-purpose NLP tools consistently fail on domain vocabulary and document structure.',
    p3: "Alongside my studies I tutor mathematics and physics-chemistry through Complétude, and I'm preparing applications for a CIFRE industrial PhD in biomedical AI at Sorbonne University.",
    visionLine:
      "Longer term, the same discipline — pulling reliable structure out of messy, high-stakes text — is what draws me to AI safety research: building and evaluating world models through AMI Labs and the Anthropic Fellows Program. (Draft line — replace with your own wording.)",
    facts: [
      { dt: 'Institution', dd: 'ESIEE Paris' },
      { dt: 'Program', dd: 'Data Science & AI (DSIA)' },
      { dt: 'Track', dd: 'Tremplin Recherche' },
      { dt: 'Next step', dd: 'PhD, biomedical AI — Sorbonne' },
      { dt: 'Languages', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Research',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'A hybrid named-entity recognition pipeline for French oncology clinical text.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Clinical NER · French oncology corpora',
    p1: "Off-the-shelf NER models struggle badly on French clinical text: dense abbreviations, inconsistent formatting across hospital systems, and biomarker terminology that barely appears in general training data. DEMNE tackles this with a staged pipeline rather than a single model — each stage handles what it's actually good at, and only escalates to a heavier model when it has to.",
    p2: 'The system is fine-tuned on DrBERT-7GB across three distinct French oncology corpora, and targets seven priority biomarker entity types used in treatment-relevant reporting.',
    tags: ['Clinical NLP', 'CRF', 'Transformers', 'DrBERT-7GB', 'French oncology'],
    viewRepo: 'View repository',
    readMethodology: 'Read the methodology',
    pipeline: [
      {
        num: '01',
        title: 'Rule-based pass',
        body: 'Regex and lexicon matching catch high-confidence, low-ambiguity entities cheaply — dates, dosages, standard biomarker abbreviations.',
      },
      {
        num: '02',
        title: 'CRF layer',
        body: 'A conditional random field models sequential structure the rules miss, using local context to resolve ambiguous spans.',
      },
      {
        num: '03',
        title: 'Transformer extraction',
        body: 'DrBERT-7BG, fine-tuned across three oncology corpora, handles the entities that need real semantic and domain understanding.',
      },
      {
        num: '04',
        title: 'LLM arbitration',
        body: 'Remaining conflicts and edge cases are routed to an LLM pass for final disambiguation before output.',
      },
    ],
    aiAct: {
      title: 'Regulatory alignment — EU AI Act',
      body: "Clinical entity extraction over patient records sits squarely inside the EU AI Act's high-risk category. DEMNE's staged design keeps Articles 12 and 14 in mind from the start, not bolted on after the fact.",
      articles: [
        {
          code: 'Art. 12',
          label: 'Record-keeping',
          desc: 'Every extraction decision is traceable to the stage (rules, CRF, transformer, or LLM) and confidence score that produced it, enabling automatic audit logging.',
        },
        {
          code: 'Art. 14',
          label: 'Human oversight',
          desc: 'LLM arbitration outputs are flagged for clinician review rather than silently accepted, keeping a human in the loop on ambiguous cases.',
        },
      ],
    },
  },
  metrics: {
    label: 'Results',
    title: 'What the staged approach buys',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'Mean F1 — external validation' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'GPU-free extraction' },
      { value: 300, suffix: '', color: 'text', label: 'AP-HP clinical notes validated' },
    ],
  },
  experience: {
    label: '03 — Experience',
    title: 'Where the work has happened so far',
    currentLabel: 'Ongoing',
    items: [
      {
        current: true, date: '2025 — Present',
        title: 'Research Assistant, Tremplin Recherche',
        org: 'ESIEE Paris',
        body: 'Developing DEMNE, a hybrid clinical NER pipeline for French oncology text, as the core project of the Tremplin Recherche track ahead of PhD applications.',
      },
      {
        current: true, date: '2026 — Present',
        title: 'Founder & Product Lead, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Building a platform that gives brain-injury patients and occupational therapists a structured way to compare cognitive-compensation tools. Started as a Python/Streamlit prototype at the SN@SU hackathon (Sorbonne Université, with Flor Sanchez-Luizard, occupational therapist at UEROS L\'ADAPT Île-de-France); now scoping a production rebuild (FastAPI, PostgreSQL, Next.js) with HDS/RGPD-compliant hosting and a semantic search engine for clinical tool matching.',
      },
      {
        date: '2024 — 2027',
        title: 'Engineering Student — Data Science & AI',
        org: 'ESIEE Paris',
        body: "Fourth-year student in ESIEE Paris's five-year engineering program, specializing in Data Science & AI (DSIA).",
      },
      {
        date: '2025',
        title: 'Engineering Intern, GRADES Division',
        org: 'Synchrotron SOLEIL',
        body: 'Developed autopkgtests using OpenCL for AMD GPU compatibility (pyopencl, nabu, ufo-filters, pyvkfft) across Debian/ROCm infrastructure on GitLab Salsa.',
      },
      {
        date: '2022 — Present',
        title: 'STEM Tutor',
        org: 'Complétude',
        body: 'Teaching mathematics and physics-chemistry to about ten students, from primary school through terminale, alongside my engineering studies.',
      },
    ],
  },
  publications: {
    label: '04 — Publications',
    title: 'Publications & research',
    subtitle: 'The written record of the DEMNE work, as it moves toward submission.',
    status: 'In preparation',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. et al.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description:
      'Manuscript detailing the DEMNE cascade framework, the five corpus-characterization metrics used for paradigm selection, and the grid-search calibration results across three French oncology corpora.',
  },
  projects: {
    label: '05 — Selected Projects',
    title: 'Selected Projects',
    subtitle: 'Beyond DEMNE — tools built end to end for a hackathon and coursework.',
    items: [
      {
        date: 'June 2026',
        title: 'NeuroStep',
        description:
          'A digital catalog of cognitive-compensation tools and apps for people with brain injuries and tumors — communication aids, memory, and planning support. Built for the SN@SU hackathon, with a Streamlit interface over a JSON-based store.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Dec. 2025',
        title: 'Air Quality Dashboard',
        description:
          'An interactive dashboard reconstructing 15 years of background air pollution across France (2000–2015) from INERIS/Zenodo data — SQLite storage, Plotly charts, and a Leaflet heatmap. Built with teammate William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Technical Stack',
    title: 'Technical Stack',
    subtitle: 'Tools grouped by how they matter to the work above — not a generic list.',
    categories: [
      {
        title: 'Clinical NLP & Biomedical AI',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Systems & Infrastructure',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Research Tooling',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Languages',
    languages: [
      { flag: '🇫🇷', level: 'Native' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Intermediate' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'In progress' },
    ],
  },
  areasOfFocus: {
    label: '07 — Areas of Focus',
    title: 'Areas of Focus',
    items: [
      {
        title: 'Clinical Named Entity Recognition',
        body: 'Extracting biomarkers, staging, and treatment data from unstructured French oncology text. Where general-purpose NLP breaks and domain adaptation begins.',
      },
      {
        title: 'Frugal & Interpretable AI',
        body: 'Designing systems that route to the least opaque tier meeting performance thresholds. Compliance with the EU AI Act as a design constraint, not an afterthought.',
      },
      {
        title: 'Multimodal Biomedical Reasoning',
        body: 'Long-term direction: unifying clinical text, imaging, and genomics into models that reason across modalities. The world-models direction applied to medicine.',
      },
      {
        title: 'Pedagogy of Complex Systems',
        body: 'Teaching mathematics and physics-chemistry to about ten students at Complétude, from primary school through terminale. Making dense concepts learnable is a research skill, not a side gig.',
      },
    ],
  },
  writing: {
    label: '08 — Writing',
    title: 'Notes from the research',
    subtitle: 'Longer write-ups on the methods, dead ends, and decisions behind the work above.',
    posts: [
      {
        status: 'Draft — coming soon',
        title: 'Why French clinical NER breaks general-purpose models',
        body: 'A walkthrough of where standard NER pipelines fail on French oncology reports, and what that implies for how DEMNE is structured.',
      },
      {
        status: 'Draft — coming soon',
        title: 'Staged extraction vs. a single large model',
        body: 'The case for routing entities through rules, a CRF, and a fine-tuned transformer before ever calling an LLM — and what it costs to get wrong.',
      },
    ],
  },
  contact: {
    title: "Let's talk about clinical NLP, biomedical AI, or a PhD collaboration.",
    directLabel: 'Direct',
    elsewhereLabel: 'Elsewhere',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Built with a hybrid pipeline of its own',
  },
};

const fr: Dictionary = {
  htmlLang: 'fr',
  meta: {
    title: 'Clément Longeac — NLP clinique & IA biomédicale',
    description:
      'Recherche en NLP clinique et IA biomédicale à ESIEE Paris, en route vers un doctorat en IA biomédicale.',
  },
  nav: {
    about: 'À propos',
    research: 'Recherche',
    experience: 'Expérience',
    publications: 'Publications',
    writing: 'Écrits',
    contact: 'Contact',
    langSearchPlaceholder: 'Rechercher une langue…',
    langSearchNoResults: 'Aucune langue trouvée',
    themeToggleLabel: 'Changer de thème',
    menuToggleLabel: 'Ouvrir le menu',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Extraire des biomarqueurs depuis du texte clinique ',
    h1Accent: 'sans réveiller le GPU',
    h1Post: '.',
    sub: "Je suis Clément Longeac. Je travaille sur DEMNE, un framework de routage qui décide — pour chaque type d'entité — si une regex, un CRF, un transformer ou un LLM est l'outil honnête pour la tâche. Premier résultat : 93,7 % des entités cliniques extraites sans GPU, F1 = 0,941 sur 300 notes AP-HP.",
    ctaResearch: 'Voir la recherche',
    ctaCV: 'Télécharger le CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, schéma en direct',
  },
  about: {
    label: '01 — À propos',
    title: 'Du soutien scolaire en maths à la modélisation de biomarqueurs tumoraux',
    p1: "Je suis étudiant en quatrième année à ESIEE Paris, spécialisation Data Science & IA, inscrit dans le parcours Tremplin Recherche de l'école — un programme conçu pour les étudiants visant une thèse plutôt qu'un stage classique en entreprise.",
    p2: "Mon travail consiste à rendre exploitable le texte clinique non structuré : extraire les biomarqueurs, les informations de stadification et les détails de traitement enfouis dans les comptes rendus d'oncologie français, là où les outils NLP génériques échouent systématiquement face au vocabulaire et à la structure documentaire du domaine.",
    p3: "En parallèle de mes études, je donne des cours de mathématiques et de physique-chimie via Complétude, et je prépare des candidatures pour une thèse CIFRE en IA biomédicale à Sorbonne Université.",
    visionLine:
      "À plus long terme, cette même discipline — extraire une structure fiable d'un texte désordonné et à fort enjeu — est ce qui m'attire vers la recherche en sûreté de l'IA : construire et évaluer des world models via AMI Labs et le programme Anthropic Fellows. (Phrase provisoire — à remplacer par ta formulation définitive.)",
    facts: [
      { dt: 'Établissement', dd: 'ESIEE Paris' },
      { dt: 'Programme', dd: 'Data Science & IA (DSIA)' },
      { dt: 'Parcours', dd: 'Tremplin Recherche' },
      { dt: 'Prochaine étape', dd: 'Doctorat, IA biomédicale — Sorbonne' },
      { dt: 'Langues', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Recherche',
    title: 'DEMNE / DuraXeLL',
    subtitle: "Un pipeline hybride de reconnaissance d'entités nommées pour le texte clinique oncologique français.",
    h3: "Determination of Extraction Methods for Named Entities",
    tagline: 'NER clinique · corpus d\'oncologie français',
    p1: "Les modèles NER génériques échouent nettement sur le texte clinique français : abréviations denses, mise en forme incohérente selon les établissements, et terminologie de biomarqueurs quasi absente des corpus d'entraînement généraux. DEMNE répond à ça par un pipeline en étages plutôt qu'un modèle unique — chaque étage traite ce qu'il fait le mieux, et n'escalade vers un modèle plus lourd que si nécessaire.",
    p2: "Le système est affiné sur DrBERT-7GB à travers trois corpus d'oncologie français distincts, et cible sept types d'entités biomarqueurs prioritaires utilisés dans les comptes rendus à visée thérapeutique.",
    tags: ['NLP clinique', 'CRF', 'Transformers', 'DrBERT-7GB', 'Oncologie française'],
    viewRepo: 'Voir le dépôt',
    readMethodology: 'Lire la méthodologie',
    pipeline: [
      {
        num: '01',
        title: 'Passe à base de règles',
        body: "Le pattern matching (regex, lexiques) capte à faible coût les entités à haute confiance et faible ambiguïté — dates, dosages, abréviations standard de biomarqueurs.",
      },
      {
        num: '02',
        title: 'Couche CRF',
        body: "Un champ aléatoire conditionnel modélise la structure séquentielle que les règles manquent, en utilisant le contexte local pour résoudre les segments ambigus.",
      },
      {
        num: '03',
        title: 'Extraction par transformer',
        body: "DrBERT-7GB, affiné sur trois corpus d'oncologie, traite les entités qui exigent une réelle compréhension sémantique et de domaine.",
      },
      {
        num: '04',
        title: 'Arbitrage par LLM',
        body: "Les conflits résiduels et cas limites sont routés vers une passe LLM pour la désambiguïsation finale avant la sortie.",
      },
    ],
    aiAct: {
      title: 'Conformité réglementaire — EU AI Act',
      body: "L'extraction d'entités cliniques sur des dossiers patients relève directement de la catégorie « haut risque » de l'EU AI Act. La conception en étages de DEMNE intègre les articles 12 et 14 dès le départ, pas après coup.",
      articles: [
        {
          code: 'Art. 12',
          label: 'Tenue de registres',
          desc: "Chaque décision d'extraction est traçable jusqu'à l'étage (règles, CRF, transformer ou LLM) et au score de confiance qui l'a produite, ce qui permet une journalisation automatique pour l'audit.",
        },
        {
          code: 'Art. 14',
          label: 'Contrôle humain',
          desc: "Les sorties de l'arbitrage LLM sont signalées pour relecture clinicienne plutôt qu'acceptées silencieusement, gardant un humain dans la boucle sur les cas ambigus.",
        },
      ],
    },
  },
  metrics: {
    label: 'Résultats',
    title: "Ce qu'apporte l'approche en étages",
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'F1 moyen — validation externe' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'Extraction sans GPU' },
      { value: 300, suffix: '', color: 'text', label: 'Notes cliniques AP-HP validées' },
    ],
  },
  experience: {
    label: '03 — Expérience',
    title: "Où le travail s'est déroulé jusqu'ici",
    currentLabel: 'En cours',
    items: [
      {
        current: true, date: '2025 — Présent',
        title: 'Assistant de recherche, Tremplin Recherche',
        org: 'ESIEE Paris',
        body: "Développement de DEMNE, un pipeline hybride de NER clinique pour le texte d'oncologie français, projet central du parcours Tremplin Recherche en vue des candidatures de thèse.",
      },
      {
        current: true, date: '2026 — Présent',
        title: 'Fondateur & Product Lead, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: "Construction d'une plateforme donnant aux patients cérébrolésés et à leurs ergothérapeutes un moyen structuré de comparer les outils numériques de compensation cognitive. Né en prototype Python/Streamlit au hackathon SN@SU (Sorbonne Université, avec Flor Sanchez-Luizard, ergothérapeute à l'UEROS L'ADAPT Île-de-France) ; en cadrage vers une refonte de production (FastAPI, PostgreSQL, Next.js) avec hébergement conforme HDS/RGPD et moteur de recherche sémantique pour l'appariement clinique.",
      },
      {
        date: '2024 — 2027',
        title: 'Étudiant ingénieur — Data Science & IA',
        org: 'ESIEE Paris',
        body: "Étudiant en quatrième année du cursus ingénieur en cinq ans d'ESIEE Paris, spécialisation Data Science & IA (DSIA).",
      },
      {
        date: '2025',
        title: 'Stagiaire ingénieur, division GRADES',
        org: 'Synchrotron SOLEIL',
        body: "Développement d'autopkgtests en OpenCL pour la compatibilité GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) sur l'infrastructure Debian/ROCm via GitLab Salsa.",
      },
      {
        date: '2022 — Présent',
        title: 'Tuteur scientifique',
        org: 'Complétude',
        body: "Cours de mathématiques et de physique-chimie à une dizaine d'élèves, du primaire jusqu'à la terminale, en parallèle de mes études d'ingénieur.",
      },
    ],
  },
  publications: {
    label: '04 — Publications',
    title: 'Publications & recherche',
    subtitle: "Le suivi écrit du travail sur DEMNE, à mesure qu'il avance vers la soumission.",
    status: 'En préparation',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. et al.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description:
      "Manuscrit détaillant le framework en cascade DEMNE, les cinq métriques de caractérisation de corpus utilisées pour la sélection de paradigme, et les résultats de calibration par recherche en grille sur trois corpus d'oncologie français.",
  },
  projects: {
    label: '05 — Projets sélectionnés',
    title: 'Projets sélectionnés',
    subtitle:
      "Au-delà de DEMNE — des outils construits de bout en bout pour un hackathon et des projets de cours.",
    items: [
      {
        date: 'Juin 2026',
        title: 'NeuroStep',
        description:
          "Un catalogue numérique d'outils et d'applications de compensation cognitive pour les personnes cérébrolésées ou atteintes de tumeurs — aide à la communication, mémoire, planification. Réalisé pour le hackathon SN@SU, avec une interface Streamlit reposant sur un stockage JSON.",
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Déc. 2025',
        title: "Tableau de bord qualité de l'air",
        description:
          "Un tableau de bord interactif reconstituant 15 ans de pollution atmosphérique de fond en France (2000–2015) à partir des données INERIS/Zenodo — stockage SQLite, graphiques Plotly et carte de chaleur Leaflet. Réalisé avec mon coéquipier William Zee.",
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Stack technique',
    title: 'Stack technique',
    subtitle:
      "Des outils regroupés selon leur pertinence pour le travail ci-dessus — pas une liste générique.",
    categories: [
      {
        title: 'NLP clinique & IA biomédicale',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Systèmes & Infrastructure',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Outils de recherche',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Langues',
    languages: [
      { flag: '🇫🇷', level: 'Langue maternelle' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Intermédiaire' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: "En cours d'apprentissage" },
    ],
  },
  areasOfFocus: {
    label: '07 — Axes de recherche',
    title: 'Axes de recherche',
    items: [
      {
        title: "Reconnaissance d'entités nommées cliniques",
        body: "Extraction de biomarqueurs, du stade et des données de traitement à partir de comptes rendus d'oncologie française non structurés. Là où le NLP généraliste échoue et où l'adaptation au domaine commence.",
      },
      {
        title: 'IA frugale et interprétable',
        body: "Concevoir des systèmes qui privilégient le niveau le moins opaque satisfaisant les seuils de performance. La conformité à l'AI Act européen comme contrainte de conception, pas comme réflexion après coup.",
      },
      {
        title: 'Raisonnement biomédical multimodal',
        body: "Direction à long terme : unifier texte clinique, imagerie et génomique dans des modèles capables de raisonner à travers les modalités. L'approche des world models appliquée à la médecine.",
      },
      {
        title: 'Pédagogie des systèmes complexes',
        body: "Enseignement des mathématiques et de la physique-chimie à une dizaine d'élèves chez Complétude, du primaire jusqu'à la terminale. Rendre des concepts denses accessibles est une compétence de recherche, pas un à-côté.",
      },
    ],
  },
  writing: {
    label: '08 — Écrits',
    title: 'Notes de recherche',
    subtitle: "Des articles plus longs sur les méthodes, les impasses et les décisions derrière le travail ci-dessus.",
    posts: [
      {
        status: 'Brouillon — à venir',
        title: 'Pourquoi le NER clinique français casse les modèles génériques',
        body: "Un état des lieux des points où les pipelines NER standards échouent sur les comptes rendus d'oncologie français, et ce que ça implique pour la structure de DEMNE.",
      },
      {
        status: 'Brouillon — à venir',
        title: 'Extraction en étages vs un seul grand modèle',
        body: "L'argumentaire pour router les entités à travers des règles, un CRF puis un transformer affiné avant tout appel à un LLM — et ce que ça coûte de se tromper.",
      },
    ],
  },
  contact: {
    title: 'Parlons NLP clinique, IA biomédicale, ou collaboration doctorale.',
    directLabel: 'Direct',
    elsewhereLabel: 'Ailleurs',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Construit avec son propre pipeline hybride',
  },
};

const es: Dictionary = {
  htmlLang: 'es',
  meta: {
    title: 'Clément Longeac — NLP clínico e IA biomédica',
    description:
      'Investigación en PLN clínico e IA biomédica en ESIEE Paris, rumbo a un doctorado en IA biomédica.',
  },
  nav: {
    about: 'Sobre mí',
    research: 'Investigación',
    experience: 'Experiencia',
    publications: 'Publicaciones',
    writing: 'Artículos',
    contact: 'Contacto',
    langSearchPlaceholder: 'Buscar un idioma…',
    langSearchNoResults: 'Ningún idioma encontrado',
    themeToggleLabel: 'Cambiar de tema',
    menuToggleLabel: 'Abrir el menú',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Extrayendo biomarcadores de texto clínico ',
    h1Accent: 'sin despertar la GPU',
    h1Post: '.',
    sub: 'Soy Clément Longeac. Estoy trabajando en DEMNE, un framework de enrutamiento que decide — para cada tipo de entidad — si una expresión regular, un CRF, un transformer o un LLM es la herramienta honesta para la tarea. Primer resultado: 93,7 % de las entidades clínicas extraídas sin GPU, F1 = 0,941 sobre 300 notas de AP-HP.',
    ctaResearch: 'Ver la investigación',
    ctaCV: 'Descargar el CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, esquema en vivo',
  },
  about: {
    label: '01 — Sobre mí',
    title: 'De dar clases de matemáticas a modelar biomarcadores tumorales',
    p1: 'Soy estudiante de cuarto año en ESIEE Paris, especialización Data Science & IA, inscrito en el itinerario Tremplin Recherche de la escuela — un programa pensado para estudiantes que se dirigen hacia un doctorado en lugar de unas prácticas industriales estándar.',
    p2: 'Mi trabajo se centra en hacer utilizable el texto clínico no estructurado: extraer los biomarcadores, la información de estadificación y los detalles de tratamiento ocultos en informes de oncología franceses, donde las herramientas de PLN genéricas fallan sistemáticamente ante el vocabulario y la estructura documental del dominio.',
    p3: 'Además de mis estudios, doy clases de matemáticas y física-química a través de Complétude, y preparo solicitudes para un doctorado industrial CIFRE en IA biomédica en la Universidad de la Sorbona.',
    visionLine:
      'A más largo plazo, esa misma disciplina — extraer una estructura fiable de un texto desordenado y de alto riesgo — es lo que me atrae hacia la investigación en seguridad de la IA: construir y evaluar world models a través de AMI Labs y el programa Anthropic Fellows. (Frase provisional — reemplázala por tu redacción definitiva.)',
    facts: [
      { dt: 'Institución', dd: 'ESIEE Paris' },
      { dt: 'Programa', dd: 'Data Science & IA (DSIA)' },
      { dt: 'Itinerario', dd: 'Tremplin Recherche' },
      { dt: 'Siguiente paso', dd: 'Doctorado, IA biomédica — Sorbona' },
      { dt: 'Idiomas', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Investigación',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Un pipeline híbrido de reconocimiento de entidades nombradas para texto clínico oncológico en francés.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER clínico · corpus de oncología en francés',
    p1: 'Los modelos NER genéricos fallan claramente en el texto clínico francés: abreviaturas densas, formato incoherente entre hospitales y terminología de biomarcadores casi ausente de los datos de entrenamiento generales. DEMNE aborda esto con un pipeline por etapas en lugar de un modelo único — cada etapa hace lo que mejor sabe hacer, y solo escala a un modelo más pesado cuando es necesario.',
    p2: 'El sistema está afinado sobre DrBERT-7GB en tres corpus de oncología franceses distintos, y se centra en siete tipos de entidades biomarcadoras prioritarias usadas en informes relevantes para el tratamiento.',
    tags: ['PLN clínico', 'CRF', 'Transformers', 'DrBERT-7GB', 'Oncología francesa'],
    viewRepo: 'Ver el repositorio',
    readMethodology: 'Leer la metodología',
    pipeline: [
      { num: '01', title: 'Paso basado en reglas', body: 'El emparejamiento de patrones (regex, léxicos) capta a bajo coste las entidades de alta confianza y baja ambigüedad — fechas, dosis, abreviaturas estándar de biomarcadores.' },
      { num: '02', title: 'Capa CRF', body: 'Un campo aleatorio condicional modela la estructura secuencial que las reglas pasan por alto, usando el contexto local para resolver segmentos ambiguos.' },
      { num: '03', title: 'Extracción por transformer', body: 'DrBERT-7GB, afinado en tres corpus de oncología, se encarga de las entidades que requieren una comprensión semántica y de dominio real.' },
      { num: '04', title: 'Arbitraje por LLM', body: 'Los conflictos restantes y los casos límite se enrutan a una pasada de LLM para la desambiguación final antes de la salida.' },
    ],
    aiAct: {
      title: 'Alineación regulatoria — EU AI Act',
      body: 'La extracción de entidades clínicas sobre historiales de pacientes entra de lleno en la categoría de alto riesgo de la EU AI Act. El diseño por etapas de DEMNE tiene en cuenta los artículos 12 y 14 desde el inicio, no como un añadido posterior.',
      articles: [
        { code: 'Art. 12', label: 'Registro de actividad', desc: 'Cada decisión de extracción es trazable hasta la etapa (reglas, CRF, transformer o LLM) y la puntuación de confianza que la produjo, permitiendo un registro automático para auditoría.' },
        { code: 'Art. 14', label: 'Supervisión humana', desc: 'Las salidas del arbitraje por LLM se marcan para revisión clínica en lugar de aceptarse silenciosamente, manteniendo a un humano en el bucle en los casos ambiguos.' },
      ],
    },
  },
  metrics: {
    label: 'Resultados',
    title: 'Lo que aporta el enfoque por etapas',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'F1 medio — validación externa' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'Extracción sin GPU' },
      { value: 300, suffix: '', color: 'text', label: 'Notas clínicas de AP-HP validadas' },
    ],
  },
  experience: {
    label: '03 — Experiencia',
    title: 'Dónde ha ocurrido el trabajo hasta ahora',
    currentLabel: 'En curso',
    items: [
      { current: true, date: '2025 — Presente', title: 'Asistente de investigación, Tremplin Recherche', org: 'ESIEE Paris', body: 'Desarrollo de DEMNE, un pipeline híbrido de NER clínico para texto de oncología francés, como proyecto central del itinerario Tremplin Recherche de cara a las solicitudes de doctorado.' },
      { current: true, date: '2026 — Presente', title: 'Fundador y Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Construcción de una plataforma que da a pacientes con daño cerebral y a sus terapeutas ocupacionales una forma estructurada de comparar herramientas digitales de compensación cognitiva. Nacido como prototipo Python/Streamlit en el hackathon SN@SU (Sorbona, con Flor Sanchez-Luizard, terapeuta ocupacional en UEROS L\'ADAPT Île-de-France); actualmente en fase de definición de una reconstrucción de producción (FastAPI, PostgreSQL, Next.js) con alojamiento conforme a HDS/RGPD y un motor de búsqueda semántica para el emparejamiento clínico.' },
      { date: '2024 — 2027', title: 'Estudiante de ingeniería — Data Science & IA', org: 'ESIEE Paris', body: 'Estudiante de cuarto año del programa de ingeniería de cinco años de ESIEE Paris, especialización Data Science & IA (DSIA).' },
      { date: '2025', title: 'Becario de ingeniería, división GRADES', org: 'Synchrotron SOLEIL', body: 'Desarrollo de autopkgtests en OpenCL para la compatibilidad de GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) en la infraestructura Debian/ROCm vía GitLab Salsa.' },
      { date: '2022 — Presente', title: 'Tutor de ciencias', org: 'Complétude', body: 'Clases de matemáticas y física-química a una decena de estudiantes, desde primaria hasta el último año de secundaria, junto a mis estudios de ingeniería.' },
    ],
  },
  publications: {
    label: '04 — Publicaciones',
    title: 'Publicaciones e investigación',
    subtitle: 'El registro escrito del trabajo de DEMNE, a medida que avanza hacia su presentación.',
    status: 'En preparación',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. et al.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Manuscrito que detalla el framework en cascada DEMNE, las cinco métricas de caracterización de corpus usadas para la selección de paradigma, y los resultados de calibración de la búsqueda en cuadrícula en tres corpus de oncología franceses.',
  },
  projects: {
    label: '05 — Proyectos seleccionados',
    title: 'Proyectos seleccionados',
    subtitle:
      'Más allá de DEMNE — herramientas construidas de principio a fin para un hackathon y trabajos de curso.',
    items: [
      {
        date: 'Junio 2026',
        title: 'NeuroStep',
        description:
          'Un catálogo digital de herramientas y aplicaciones de compensación cognitiva para personas con daño cerebral o tumores — ayuda a la comunicación, memoria y planificación. Creado para el hackathon SN@SU, con una interfaz Streamlit sobre un almacenamiento en JSON.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Dic. 2025',
        title: 'Panel de calidad del aire',
        description:
          'Un panel interactivo que reconstruye 15 años de contaminación atmosférica de fondo en Francia (2000–2015) a partir de datos de INERIS/Zenodo — almacenamiento en SQLite, gráficos con Plotly y mapa de calor con Leaflet. Creado con mi compañero William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Stack técnico',
    title: 'Stack técnico',
    subtitle:
      'Herramientas agrupadas según su relevancia para el trabajo anterior — no una lista genérica.',
    categories: [
      {
        title: 'PLN clínico e IA biomédica',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Sistemas e infraestructura',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Herramientas de investigación',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { flag: '🇫🇷', level: 'Nativo' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Intermedio' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'En progreso' },
    ],
  },
  areasOfFocus: {
    label: '07 — Áreas de enfoque',
    title: 'Áreas de enfoque',
    items: [
      {
        title: 'Reconocimiento de entidades nombradas clínicas',
        body: 'Extracción de biomarcadores, estadificación y datos de tratamiento a partir de textos oncológicos franceses no estructurados. Donde el NLP genérico falla y comienza la adaptación de dominio.',
      },
      {
        title: 'IA frugal e interpretable',
        body: 'Diseñar sistemas que recurren al nivel menos opaco que cumpla los umbrales de rendimiento. El cumplimiento de la Ley de IA de la UE como restricción de diseño, no como una idea de último momento.',
      },
      {
        title: 'Razonamiento biomédico multimodal',
        body: 'Dirección a largo plazo: unificar texto clínico, imágenes y genómica en modelos que razonen entre modalidades. El enfoque de los world models aplicado a la medicina.',
      },
      {
        title: 'Pedagogía de sistemas complejos',
        body: 'Enseñanza de matemáticas y física-química a una decena de estudiantes en Complétude, desde primaria hasta el último año de secundaria. Hacer que conceptos densos sean comprensibles es una habilidad de investigación, no un pasatiempo.',
      },
    ],
  },
  writing: {
    label: '08 — Artículos',
    title: 'Notas de la investigación',
    subtitle: 'Artículos más extensos sobre los métodos, callejones sin salida y decisiones detrás del trabajo anterior.',
    posts: [
      { status: 'Borrador — próximamente', title: 'Por qué el NER clínico francés rompe los modelos genéricos', body: 'Un recorrido por los puntos donde los pipelines NER estándar fallan en los informes de oncología franceses, y lo que eso implica para la estructura de DEMNE.' },
      { status: 'Borrador — próximamente', title: 'Extracción por etapas frente a un único modelo grande', body: 'El argumento para enrutar entidades a través de reglas, un CRF y un transformer afinado antes de llamar a un LLM — y lo que cuesta equivocarse.' },
    ],
  },
  contact: {
    title: 'Hablemos de PLN clínico, IA biomédica, o una colaboración doctoral.',
    directLabel: 'Directo',
    elsewhereLabel: 'En otros lugares',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Construido con su propio pipeline híbrido',
  },
};

const de: Dictionary = {
  htmlLang: 'de',
  meta: {
    title: 'Clément Longeac — klinisches NLP & biomedizinische KI',
    description:
      'Forschung zu klinischem NLP und biomedizinischer KI an der ESIEE Paris, auf dem Weg zur Promotion.',
  },
  nav: {
    about: 'Über mich',
    research: 'Forschung',
    experience: 'Erfahrung',
    publications: 'Publikationen',
    writing: 'Beiträge',
    contact: 'Kontakt',
    langSearchPlaceholder: 'Sprache suchen…',
    langSearchNoResults: 'Keine Sprache gefunden',
    themeToggleLabel: 'Design umschalten',
    menuToggleLabel: 'Menü öffnen',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Biomarker aus klinischem Text extrahieren ',
    h1Accent: 'ohne die GPU zu wecken',
    h1Post: '.',
    sub: 'Ich bin Clément Longeac. Ich arbeite an DEMNE, einem Routing-Framework, das für jeden Entitätstyp entscheidet, ob eine Regex, ein CRF, ein Transformer oder ein LLM das ehrliche Werkzeug für die Aufgabe ist. Erstes Ergebnis: 93,7 % der klinischen Entitäten ohne GPU extrahiert, F1 = 0,941 bei 300 AP-HP-Notizen.',
    ctaResearch: 'Zur Forschung',
    ctaCV: 'Lebenslauf herunterladen',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, Live-Schema',
  },
  about: {
    label: '01 — Über mich',
    title: 'Von Mathe-Nachhilfe zur Modellierung von Tumormarkern',
    p1: 'Ich bin Student im vierten Jahr an der ESIEE Paris, Schwerpunkt Data Science & KI, eingeschrieben im Tremplin-Recherche-Programm der Schule — einem Programm für Studierende, die eine Promotion anstreben statt eines klassischen Industriepraktikums.',
    p2: 'Meine Arbeit dreht sich darum, unstrukturierten klinischen Text für die Forschung nutzbar zu machen: Extraktion von Biomarkern, Staging-Informationen und Behandlungsdetails aus französischen Onkologieberichten, wo generische NLP-Tools an domänenspezifischem Vokabular und Dokumentstruktur systematisch scheitern.',
    p3: 'Neben dem Studium unterrichte ich Mathematik und Physik-Chemie bei Complétude und bereite Bewerbungen für eine CIFRE-Industriepromotion in biomedizinischer KI an der Sorbonne-Universität vor.',
    visionLine:
      'Langfristig ist es genau diese Disziplin — verlässliche Struktur aus unordentlichem, hochriskantem Text zu ziehen —, die mich zur KI-Sicherheitsforschung zieht: den Aufbau und die Evaluierung von World Models über AMI Labs und das Anthropic Fellows Program. (Entwurfszeile — durch deine endgültige Formulierung ersetzen.)',
    facts: [
      { dt: 'Institution', dd: 'ESIEE Paris' },
      { dt: 'Programm', dd: 'Data Science & KI (DSIA)' },
      { dt: 'Schwerpunkt', dd: 'Tremplin Recherche' },
      { dt: 'Nächster Schritt', dd: 'Promotion, biomedizinische KI — Sorbonne' },
      { dt: 'Sprachen', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Forschung',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Eine hybride Named-Entity-Recognition-Pipeline für französischen onkologischen klinischen Text.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Klinisches NER · französische Onkologie-Korpora',
    p1: 'Standard-NER-Modelle scheitern deutlich an französischem klinischem Text: dichte Abkürzungen, uneinheitliche Formatierung zwischen Krankenhaussystemen und Biomarker-Terminologie, die in allgemeinen Trainingsdaten kaum vorkommt. DEMNE begegnet dem mit einer gestuften Pipeline statt einem einzelnen Modell — jede Stufe übernimmt, was sie am besten kann, und eskaliert nur bei Bedarf zu einem schwereren Modell.',
    p2: 'Das System ist auf DrBERT-7GB über drei verschiedene französische Onkologie-Korpora feinabgestimmt und zielt auf sieben prioritäre Biomarker-Entitätstypen ab, die in behandlungsrelevanten Berichten verwendet werden.',
    tags: ['Klinisches NLP', 'CRF', 'Transformers', 'DrBERT-7GB', 'Französische Onkologie'],
    viewRepo: 'Repository ansehen',
    readMethodology: 'Methodik lesen',
    pipeline: [
      { num: '01', title: 'Regelbasierter Durchlauf', body: 'Regex- und Lexikon-Abgleich erfasst kostengünstig hochsichere, eindeutige Entitäten — Daten, Dosierungen, Standard-Biomarker-Abkürzungen.' },
      { num: '02', title: 'CRF-Schicht', body: 'Ein Conditional Random Field modelliert die sequenzielle Struktur, die die Regeln übersehen, und nutzt lokalen Kontext zur Auflösung mehrdeutiger Abschnitte.' },
      { num: '03', title: 'Transformer-Extraktion', body: 'DrBERT-7GB, feinabgestimmt über drei Onkologie-Korpora, übernimmt die Entitäten, die echtes semantisches und Domänenverständnis erfordern.' },
      { num: '04', title: 'LLM-Arbitrierung', body: 'Verbleibende Konflikte und Grenzfälle werden vor der Ausgabe zur endgültigen Disambiguierung an einen LLM-Durchlauf weitergeleitet.' },
    ],
    aiAct: {
      title: 'Regulatorische Ausrichtung — EU AI Act',
      body: 'Die klinische Entitätsextraktion aus Patientenakten fällt eindeutig in die Hochrisikokategorie des EU AI Act. Das gestufte Design von DEMNE berücksichtigt Artikel 12 und 14 von Anfang an, nicht nachträglich.',
      articles: [
        { code: 'Art. 12', label: 'Aufzeichnungspflichten', desc: 'Jede Extraktionsentscheidung ist bis zur Stufe (Regeln, CRF, Transformer oder LLM) und dem Konfidenzwert zurückverfolgbar, was eine automatische Audit-Protokollierung ermöglicht.' },
        { code: 'Art. 14', label: 'Menschliche Aufsicht', desc: 'Ausgaben der LLM-Arbitrierung werden zur klinischen Überprüfung markiert statt stillschweigend akzeptiert, sodass bei mehrdeutigen Fällen ein Mensch eingebunden bleibt.' },
      ],
    },
  },
  metrics: {
    label: 'Ergebnisse',
    title: 'Was der gestufte Ansatz bringt',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'Mittlerer F1 — externe Validierung' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'GPU-freie Extraktion' },
      { value: 300, suffix: '', color: 'text', label: 'Validierte AP-HP-Klinikberichte' },
    ],
  },
  experience: {
    label: '03 — Erfahrung',
    title: 'Wo die Arbeit bisher stattgefunden hat',
    currentLabel: 'Laufend',
    items: [
      { current: true, date: '2025 — Heute', title: 'Forschungsassistent, Tremplin Recherche', org: 'ESIEE Paris', body: 'Entwicklung von DEMNE, einer hybriden klinischen NER-Pipeline für französischen Onkologie-Text, als Kernprojekt des Tremplin-Recherche-Programms vor den Promotionsbewerbungen.' },
      { current: true, date: '2026 — Heute', title: 'Gründer & Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Aufbau einer Plattform, die hirnverletzten Patienten und ihren Ergotherapeuten eine strukturierte Möglichkeit gibt, digitale Werkzeuge zur kognitiven Kompensation zu vergleichen. Entstanden als Python/Streamlit-Prototyp beim SN@SU-Hackathon (Sorbonne-Universität, mit Flor Sanchez-Luizard, Ergotherapeutin bei UEROS L\'ADAPT Île-de-France); derzeit in der Planungsphase für einen Produktions-Relaunch (FastAPI, PostgreSQL, Next.js) mit HDS/RGPD-konformem Hosting und einer semantischen Suchmaschine für klinisches Matching.' },
      { date: '2024 — 2027', title: 'Ingenieurstudent — Data Science & KI', org: 'ESIEE Paris', body: 'Student im vierten Jahr des fünfjährigen Ingenieurstudiengangs der ESIEE Paris, Schwerpunkt Data Science & KI (DSIA).' },
      { date: '2025', title: 'Ingenieurpraktikant, GRADES-Abteilung', org: 'Synchrotron SOLEIL', body: 'Entwicklung von Autopkgtests in OpenCL für AMD-GPU-Kompatibilität (pyopencl, nabu, ufo-filters, pyvkfft) auf Debian/ROCm-Infrastruktur über GitLab Salsa.' },
      { date: '2022 — Heute', title: 'MINT-Nachhilfelehrer', org: 'Complétude', body: 'Unterricht in Mathematik und Physik-Chemie für etwa zehn Schüler, von der Grundschule bis zum Abitur, parallel zu meinem Ingenieurstudium.' },
    ],
  },
  publications: {
    label: '04 — Publikationen',
    title: 'Publikationen & Forschung',
    subtitle: 'Die schriftliche Dokumentation der DEMNE-Arbeit auf dem Weg zur Einreichung.',
    status: 'In Vorbereitung',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. et al.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Manuskript zum DEMNE-Kaskadenframework, den fünf Korpus-Charakterisierungsmetriken zur Paradigmenauswahl und den Kalibrierungsergebnissen der Grid-Search über drei französische Onkologie-Korpora.',
  },
  projects: {
    label: '05 — Ausgewählte Projekte',
    title: 'Ausgewählte Projekte',
    subtitle:
      'Jenseits von DEMNE — Tools, die für einen Hackathon und Studienprojekte von Grund auf entwickelt wurden.',
    items: [
      {
        date: 'Juni 2026',
        title: 'NeuroStep',
        description:
          'Ein digitaler Katalog kognitiver Hilfsmittel und Apps für Menschen mit Hirnverletzungen und Tumoren — Kommunikationshilfen, Gedächtnis- und Planungsunterstützung. Entwickelt für den SN@SU-Hackathon, mit einer Streamlit-Oberfläche über einem JSON-basierten Speicher.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Dez. 2025',
        title: 'Luftqualitäts-Dashboard',
        description:
          'Ein interaktives Dashboard, das 15 Jahre Hintergrund-Luftverschmutzung in Frankreich (2000–2015) anhand von INERIS-/Zenodo-Daten rekonstruiert — SQLite-Speicherung, Plotly-Diagramme und eine Leaflet-Heatmap. Entwickelt mit meinem Teamkollegen William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Technischer Stack',
    title: 'Technischer Stack',
    subtitle: 'Werkzeuge gruppiert nach ihrer Relevanz für die obige Arbeit — keine generische Liste.',
    categories: [
      {
        title: 'Klinisches NLP & biomedizinische KI',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Systeme & Infrastruktur',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Forschungswerkzeuge',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Sprachen',
    languages: [
      { flag: '🇫🇷', level: 'Muttersprache' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Mittelstufe' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'Im Aufbau' },
    ],
  },
  areasOfFocus: {
    label: '07 — Schwerpunkte',
    title: 'Schwerpunkte',
    items: [
      {
        title: 'Klinische Named Entity Recognition',
        body: 'Extraktion von Biomarkern, Staging- und Behandlungsdaten aus unstrukturierten französischen Onkologietexten. Dort, wo allgemeines NLP versagt und Domänenanpassung beginnt.',
      },
      {
        title: 'Frugale & interpretierbare KI',
        body: 'Entwicklung von Systemen, die auf die am wenigsten intransparente Stufe zurückgreifen, die die Leistungsschwellen erfüllt. Die Einhaltung des EU AI Act als Designvorgabe, nicht als nachträglicher Gedanke.',
      },
      {
        title: 'Multimodales biomedizinisches Reasoning',
        body: 'Langfristige Richtung: klinischen Text, Bildgebung und Genomik in Modellen vereinen, die über Modalitäten hinweg schlussfolgern. Der World-Models-Ansatz, angewandt auf die Medizin.',
      },
      {
        title: 'Didaktik komplexer Systeme',
        body: 'Unterricht in Mathematik und Physik-Chemie für etwa zehn Schüler bei Complétude, von der Grundschule bis zum Abitur. Dichte Konzepte lernbar zu machen ist eine Forschungsfähigkeit, kein Nebenjob.',
      },
    ],
  },
  writing: {
    label: '08 — Beiträge',
    title: 'Notizen aus der Forschung',
    subtitle: 'Längere Beiträge zu Methoden, Sackgassen und Entscheidungen hinter der obigen Arbeit.',
    posts: [
      { status: 'Entwurf — demnächst', title: 'Warum französisches klinisches NER generische Modelle scheitern lässt', body: 'Ein Überblick darüber, wo Standard-NER-Pipelines bei französischen Onkologieberichten versagen, und was das für die Struktur von DEMNE bedeutet.' },
      { status: 'Entwurf — demnächst', title: 'Gestufte Extraktion vs. ein einzelnes großes Modell', body: 'Das Argument dafür, Entitäten durch Regeln, ein CRF und einen feinabgestimmten Transformer zu leiten, bevor überhaupt ein LLM aufgerufen wird — und was ein Fehler dabei kostet.' },
    ],
  },
  contact: {
    title: 'Lass uns über klinisches NLP, biomedizinische KI oder eine Promotionskooperation sprechen.',
    directLabel: 'Direkt',
    elsewhereLabel: 'Anderswo',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Gebaut mit einer eigenen hybriden Pipeline',
  },
};

const it: Dictionary = {
  htmlLang: 'it',
  meta: {
    title: 'Clément Longeac — NLP clinico e IA biomedica',
    description:
      'Ricerca in NLP clinico e IA biomedica a ESIEE Paris, verso un dottorato in IA biomedica.',
  },
  nav: {
    about: 'Chi sono',
    research: 'Ricerca',
    experience: 'Esperienza',
    publications: 'Pubblicazioni',
    writing: 'Articoli',
    contact: 'Contatti',
    langSearchPlaceholder: 'Cerca una lingua…',
    langSearchNoResults: 'Nessuna lingua trovata',
    themeToggleLabel: 'Cambia tema',
    menuToggleLabel: 'Apri il menu',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Estraggo biomarcatori da testo clinico ',
    h1Accent: 'senza svegliare la GPU',
    h1Post: '.',
    sub: 'Sono Clément Longeac. Sto lavorando a DEMNE, un framework di routing che decide — per ogni tipo di entità — se una regex, un CRF, un transformer o un LLM sia lo strumento onesto per il compito. Primo risultato: 93,7% delle entità cliniche estratte senza GPU, F1 = 0,941 su 300 note AP-HP.',
    ctaResearch: 'Vedi la ricerca',
    ctaCV: 'Scarica il CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, schema dal vivo',
  },
  about: {
    label: '01 — Chi sono',
    title: 'Dal ripetizioni di matematica alla modellazione di biomarcatori tumorali',
    p1: 'Sono uno studente del quarto anno a ESIEE Paris, specializzazione Data Science & IA, iscritto al percorso Tremplin Recherche della scuola — un programma pensato per studenti orientati verso il dottorato piuttosto che verso uno stage aziendale standard.',
    p2: 'Il mio lavoro consiste nel rendere utilizzabile il testo clinico non strutturato: estrarre biomarcatori, informazioni di stadiazione e dettagli di trattamento sepolti nei referti di oncologia francesi, dove gli strumenti NLP generici falliscono sistematicamente di fronte al vocabolario e alla struttura documentale del dominio.',
    p3: 'Parallelamente agli studi, insegno matematica e fisica-chimica tramite Complétude, e sto preparando candidature per un dottorato industriale CIFRE in IA biomedica alla Sorbona.',
    visionLine:
      'Nel lungo periodo, la stessa disciplina — estrarre una struttura affidabile da un testo disordinato e ad alto rischio — è ciò che mi attira verso la ricerca sulla sicurezza dell\'IA: costruire e valutare world model tramite AMI Labs e l\'Anthropic Fellows Program. (Frase provvisoria — sostituiscila con la tua formulazione definitiva.)',
    facts: [
      { dt: 'Istituzione', dd: 'ESIEE Paris' },
      { dt: 'Programma', dd: 'Data Science & IA (DSIA)' },
      { dt: 'Percorso', dd: 'Tremplin Recherche' },
      { dt: 'Prossimo passo', dd: 'Dottorato, IA biomedica — Sorbona' },
      { dt: 'Lingue', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Ricerca',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Una pipeline ibrida di riconoscimento di entità nominate per il testo clinico oncologico francese.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER clinico · corpus di oncologia francesi',
    p1: 'I modelli NER generici falliscono nettamente sul testo clinico francese: abbreviazioni dense, formattazione incoerente tra i sistemi ospedalieri e una terminologia di biomarcatori quasi assente dai dati di addestramento generali. DEMNE affronta il problema con una pipeline a stadi anziché un modello unico — ogni stadio gestisce ciò che sa fare meglio, ed escalation verso un modello più pesante solo quando necessario.',
    p2: 'Il sistema è affinato su DrBERT-7GB attraverso tre distinti corpus di oncologia francesi, e si concentra su sette tipi di entità biomarcatrici prioritarie usate nei referti rilevanti per il trattamento.',
    tags: ['NLP clinico', 'CRF', 'Transformers', 'DrBERT-7GB', 'Oncologia francese'],
    viewRepo: 'Vedi il repository',
    readMethodology: 'Leggi la metodologia',
    pipeline: [
      { num: '01', title: 'Passaggio basato su regole', body: 'Il pattern matching (regex, lessici) cattura a basso costo le entità ad alta confidenza e bassa ambiguità — date, dosaggi, abbreviazioni standard di biomarcatori.' },
      { num: '02', title: 'Livello CRF', body: 'Un campo casuale condizionale modella la struttura sequenziale che le regole non colgono, usando il contesto locale per risolvere i segmenti ambigui.' },
      { num: '03', title: 'Estrazione tramite transformer', body: 'DrBERT-7GB, affinato su tre corpus di oncologia, gestisce le entità che richiedono una reale comprensione semantica e di dominio.' },
      { num: '04', title: 'Arbitraggio tramite LLM', body: 'I conflitti residui e i casi limite vengono instradati a un passaggio LLM per la disambiguazione finale prima dell\'output.' },
    ],
    aiAct: {
      title: 'Allineamento normativo — EU AI Act',
      body: 'L\'estrazione di entità cliniche dai fascicoli dei pazienti rientra pienamente nella categoria ad alto rischio dell\'EU AI Act. Il design a stadi di DEMNE tiene conto degli articoli 12 e 14 fin dall\'inizio, non come aggiunta successiva.',
      articles: [
        { code: 'Art. 12', label: 'Conservazione dei registri', desc: 'Ogni decisione di estrazione è tracciabile fino allo stadio (regole, CRF, transformer o LLM) e al punteggio di confidenza che l\'ha prodotta, consentendo una registrazione automatica per l\'audit.' },
        { code: 'Art. 14', label: 'Supervisione umana', desc: 'Gli output dell\'arbitraggio LLM vengono segnalati per la revisione clinica anziché accettati silenziosamente, mantenendo un essere umano nel ciclo sui casi ambigui.' },
      ],
    },
  },
  metrics: {
    label: 'Risultati',
    title: 'Cosa porta l\'approccio a stadi',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'F1 medio — validazione esterna' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'Estrazione senza GPU' },
      { value: 300, suffix: '', color: 'text', label: 'Note cliniche AP-HP validate' },
    ],
  },
  experience: {
    label: '03 — Esperienza',
    title: 'Dove si è svolto il lavoro finora',
    currentLabel: 'In corso',
    items: [
      { current: true, date: '2025 — Presente', title: 'Assistente di ricerca, Tremplin Recherche', org: 'ESIEE Paris', body: 'Sviluppo di DEMNE, una pipeline ibrida di NER clinico per testo di oncologia francese, come progetto centrale del percorso Tremplin Recherche in vista delle candidature al dottorato.' },
      { current: true, date: '2026 — Presente', title: 'Fondatore e Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Costruzione di una piattaforma che offre a pazienti con lesioni cerebrali e ai loro terapisti occupazionali un modo strutturato per confrontare strumenti digitali di compensazione cognitiva. Nato come prototipo Python/Streamlit all\'hackathon SN@SU (Sorbona, con Flor Sanchez-Luizard, terapista occupazionale presso UEROS L\'ADAPT Île-de-France); ora in fase di definizione per una riprogettazione in produzione (FastAPI, PostgreSQL, Next.js) con hosting conforme a HDS/RGPD e un motore di ricerca semantica per l\'abbinamento clinico.' },
      { date: '2024 — 2027', title: 'Studente di ingegneria — Data Science & IA', org: 'ESIEE Paris', body: 'Studente del quarto anno del percorso di ingegneria quinquennale di ESIEE Paris, specializzazione Data Science & IA (DSIA).' },
      { date: '2025', title: 'Stagista ingegnere, divisione GRADES', org: 'Synchrotron SOLEIL', body: 'Sviluppo di autopkgtest in OpenCL per la compatibilità GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) sull\'infrastruttura Debian/ROCm via GitLab Salsa.' },
      { date: '2022 — Presente', title: 'Tutor STEM', org: 'Complétude', body: "Insegnamento di matematica e fisica-chimica a una decina di studenti, dalle elementari fino all'ultimo anno delle superiori, in parallelo ai miei studi di ingegneria." },
    ],
  },
  publications: {
    label: '04 — Pubblicazioni',
    title: 'Pubblicazioni e ricerca',
    subtitle: 'Il resoconto scritto del lavoro su DEMNE, mentre avanza verso la sottomissione.',
    status: 'In preparazione',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. et al.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Manoscritto che descrive il framework a cascata DEMNE, le cinque metriche di caratterizzazione del corpus usate per la selezione del paradigma, e i risultati di calibrazione della grid search su tre corpus di oncologia francesi.',
  },
  projects: {
    label: '05 — Progetti selezionati',
    title: 'Progetti selezionati',
    subtitle:
      'Oltre DEMNE — strumenti realizzati end-to-end per un hackathon e progetti universitari.',
    items: [
      {
        date: 'Giugno 2026',
        title: 'NeuroStep',
        description:
          "Un catalogo digitale di strumenti e app di compensazione cognitiva per persone con lesioni cerebrali e tumori — supporto alla comunicazione, memoria e pianificazione. Realizzato per l'hackathon SN@SU, con un'interfaccia Streamlit su un archivio basato su JSON.",
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Dic. 2025',
        title: "Dashboard sulla qualità dell'aria",
        description:
          "Una dashboard interattiva che ricostruisce 15 anni di inquinamento atmosferico di fondo in Francia (2000–2015) a partire dai dati INERIS/Zenodo — archiviazione SQLite, grafici Plotly e mappa di calore Leaflet. Realizzata con il mio compagno di squadra William Zee.",
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Stack tecnico',
    title: 'Stack tecnico',
    subtitle:
      'Strumenti raggruppati in base alla loro rilevanza per il lavoro sopra descritto — non un elenco generico.',
    categories: [
      {
        title: 'NLP clinico e IA biomedica',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Sistemi e infrastruttura',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Strumenti di ricerca',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Lingue',
    languages: [
      { flag: '🇫🇷', level: 'Madrelingua' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Intermedio' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'In corso' },
    ],
  },
  areasOfFocus: {
    label: '07 — Aree di interesse',
    title: 'Aree di interesse',
    items: [
      {
        title: 'Riconoscimento di entità nominate cliniche',
        body: 'Estrazione di biomarcatori, stadiazione e dati di trattamento da testi oncologici francesi non strutturati. Dove il NLP generico fallisce e inizia l\'adattamento al dominio.',
      },
      {
        title: 'IA frugale e interpretabile',
        body: "Progettare sistemi che ricorrono al livello meno opaco in grado di soddisfare le soglie di prestazione. La conformità all'AI Act europeo come vincolo di progettazione, non come ripensamento.",
      },
      {
        title: 'Ragionamento biomedico multimodale',
        body: "Direzione a lungo termine: unificare testo clinico, imaging e genomica in modelli capaci di ragionare tra le modalità. L'approccio dei world model applicato alla medicina.",
      },
      {
        title: 'Didattica dei sistemi complessi',
        body: "Insegnamento di matematica e fisica-chimica a una decina di studenti presso Complétude, dalle elementari fino all'ultimo anno delle superiori. Rendere apprendibili concetti densi è una competenza di ricerca, non un'attività secondaria.",
      },
    ],
  },
  writing: {
    label: '08 — Articoli',
    title: 'Note dalla ricerca',
    subtitle: 'Approfondimenti sui metodi, i vicoli ciechi e le decisioni dietro al lavoro sopra descritto.',
    posts: [
      { status: 'Bozza — in arrivo', title: 'Perché il NER clinico francese manda in crisi i modelli generici', body: 'Una panoramica di dove le pipeline NER standard falliscono sui referti di oncologia francesi, e cosa questo implica per la struttura di DEMNE.' },
      { status: 'Bozza — in arrivo', title: 'Estrazione a stadi contro un unico grande modello', body: 'L\'argomentazione per instradare le entità attraverso regole, un CRF e un transformer affinato prima di chiamare un LLM — e cosa costa sbagliare.' },
    ],
  },
  contact: {
    title: 'Parliamo di NLP clinico, IA biomedica, o di una collaborazione dottorale.',
    directLabel: 'Diretto',
    elsewhereLabel: 'Altrove',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Costruito con una propria pipeline ibrida',
  },
};

const pt: Dictionary = {
  htmlLang: 'pt',
  meta: {
    title: 'Clément Longeac — PLN clínico e IA biomédica',
    description:
      'Pesquisa em PLN clínico e IA biomédica na ESIEE Paris, rumo a um doutorado em IA biomédica.',
  },
  nav: {
    about: 'Sobre mim',
    research: 'Pesquisa',
    experience: 'Experiência',
    publications: 'Publicações',
    writing: 'Artigos',
    contact: 'Contato',
    langSearchPlaceholder: 'Pesquisar um idioma…',
    langSearchNoResults: 'Nenhum idioma encontrado',
    themeToggleLabel: 'Alternar tema',
    menuToggleLabel: 'Abrir menu',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Extraindo biomarcadores de texto clínico ',
    h1Accent: 'sem acordar a GPU',
    h1Post: '.',
    sub: 'Sou Clément Longeac. Estou trabalhando no DEMNE, um framework de roteamento que decide — para cada tipo de entidade — se uma regex, um CRF, um transformer ou um LLM é a ferramenta honesta para a tarefa. Primeiro resultado: 93,7% das entidades clínicas extraídas sem GPU, F1 = 0,941 em 300 notas AP-HP.',
    ctaResearch: 'Ver a pesquisa',
    ctaCV: 'Baixar o currículo',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, esquema ao vivo',
  },
  about: {
    label: '01 — Sobre mim',
    title: 'De dar aulas de matemática à modelagem de biomarcadores tumorais',
    p1: 'Sou estudante do quarto ano na ESIEE Paris, especialização em Data Science & IA, matriculado na trilha Tremplin Recherche da escola — um programa voltado a estudantes que buscam o doutorado em vez de um estágio industrial padrão.',
    p2: 'Meu trabalho é centrado em tornar o texto clínico não estruturado utilizável: extrair biomarcadores, informações de estadiamento e detalhes de tratamento enterrados em laudos de oncologia franceses, onde ferramentas de PLN genéricas falham sistematicamente diante do vocabulário e da estrutura documental do domínio.',
    p3: 'Paralelamente aos estudos, dou aulas de matemática e físico-química pela Complétude, e estou preparando candidaturas para um doutorado industrial CIFRE em IA biomédica na Universidade Sorbonne.',
    visionLine:
      'A longo prazo, essa mesma disciplina — extrair estrutura confiável de um texto desorganizado e de alto risco — é o que me atrai para a pesquisa em segurança de IA: construir e avaliar world models via AMI Labs e o Anthropic Fellows Program. (Linha provisória — substitua pela sua formulação definitiva.)',
    facts: [
      { dt: 'Instituição', dd: 'ESIEE Paris' },
      { dt: 'Programa', dd: 'Data Science & IA (DSIA)' },
      { dt: 'Trilha', dd: 'Tremplin Recherche' },
      { dt: 'Próximo passo', dd: 'Doutorado, IA biomédica — Sorbonne' },
      { dt: 'Idiomas', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Pesquisa',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Um pipeline híbrido de reconhecimento de entidades nomeadas para texto clínico oncológico francês.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER clínico · corpus de oncologia franceses',
    p1: 'Modelos NER genéricos falham muito no texto clínico francês: abreviações densas, formatação inconsistente entre sistemas hospitalares e terminologia de biomarcadores quase ausente dos dados de treinamento gerais. O DEMNE resolve isso com um pipeline em estágios em vez de um único modelo — cada estágio lida com o que faz melhor, e só escala para um modelo mais pesado quando necessário.',
    p2: 'O sistema é ajustado sobre o DrBERT-7GB em três corpus de oncologia franceses distintos, e visa sete tipos de entidades biomarcadoras prioritárias usadas em laudos relevantes para o tratamento.',
    tags: ['PLN clínico', 'CRF', 'Transformers', 'DrBERT-7GB', 'Oncologia francesa'],
    viewRepo: 'Ver repositório',
    readMethodology: 'Ler a metodologia',
    pipeline: [
      { num: '01', title: 'Etapa baseada em regras', body: 'Correspondência de padrões (regex, léxicos) captura a baixo custo entidades de alta confiança e baixa ambiguidade — datas, dosagens, abreviações padrão de biomarcadores.' },
      { num: '02', title: 'Camada CRF', body: 'Um campo aleatório condicional modela a estrutura sequencial que as regras não capturam, usando o contexto local para resolver trechos ambíguos.' },
      { num: '03', title: 'Extração por transformer', body: 'O DrBERT-7GB, ajustado em três corpus de oncologia, trata as entidades que exigem compreensão semântica e de domínio real.' },
      { num: '04', title: 'Arbitragem por LLM', body: 'Conflitos remanescentes e casos-limite são roteados para uma passagem de LLM para desambiguação final antes da saída.' },
    ],
    aiAct: {
      title: 'Alinhamento regulatório — EU AI Act',
      body: 'A extração de entidades clínicas sobre prontuários de pacientes se enquadra diretamente na categoria de alto risco do EU AI Act. O design em estágios do DEMNE considera os artigos 12 e 14 desde o início, não como um adendo posterior.',
      articles: [
        { code: 'Art. 12', label: 'Manutenção de registros', desc: 'Cada decisão de extração é rastreável até o estágio (regras, CRF, transformer ou LLM) e o índice de confiança que a produziu, permitindo registro automático para auditoria.' },
        { code: 'Art. 14', label: 'Supervisão humana', desc: 'As saídas da arbitragem por LLM são sinalizadas para revisão clínica em vez de aceitas silenciosamente, mantendo um humano no ciclo em casos ambíguos.' },
      ],
    },
  },
  metrics: {
    label: 'Resultados',
    title: 'O que a abordagem em estágios traz',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'F1 médio — validação externa' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'Extração sem GPU' },
      { value: 300, suffix: '', color: 'text', label: 'Notas clínicas da AP-HP validadas' },
    ],
  },
  experience: {
    label: '03 — Experiência',
    title: 'Onde o trabalho aconteceu até agora',
    currentLabel: 'Em andamento',
    items: [
      { current: true, date: '2025 — Atualmente', title: 'Assistente de pesquisa, Tremplin Recherche', org: 'ESIEE Paris', body: 'Desenvolvimento do DEMNE, um pipeline híbrido de NER clínico para texto de oncologia francês, como projeto central da trilha Tremplin Recherche antes das candidaturas de doutorado.' },
      { current: true, date: '2026 — Atualmente', title: 'Fundador e Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Construção de uma plataforma que dá a pacientes com lesão cerebral e a seus terapeutas ocupacionais uma forma estruturada de comparar ferramentas digitais de compensação cognitiva. Nasceu como protótipo Python/Streamlit no hackathon SN@SU (Sorbonne, com Flor Sanchez-Luizard, terapeuta ocupacional na UEROS L\'ADAPT Île-de-France); atualmente em fase de definição de uma reconstrução de produção (FastAPI, PostgreSQL, Next.js) com hospedagem compatível com HDS/RGPD e um motor de busca semântica para correspondência clínica.' },
      { date: '2024 — 2027', title: 'Estudante de engenharia — Data Science & IA', org: 'ESIEE Paris', body: 'Estudante do quarto ano do programa de engenharia de cinco anos da ESIEE Paris, especialização em Data Science & IA (DSIA).' },
      { date: '2025', title: 'Estagiário de engenharia, divisão GRADES', org: 'Synchrotron SOLEIL', body: 'Desenvolvimento de autopkgtests em OpenCL para compatibilidade de GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) na infraestrutura Debian/ROCm via GitLab Salsa.' },
      { date: '2022 — Atualmente', title: 'Tutor de ciências exatas', org: 'Complétude', body: 'Aulas de matemática e físico-química para cerca de dez alunos, do ensino fundamental até o último ano do ensino médio, paralelamente aos meus estudos de engenharia.' },
    ],
  },
  publications: {
    label: '04 — Publicações',
    title: 'Publicações e pesquisa',
    subtitle: 'O registro escrito do trabalho do DEMNE, à medida que avança rumo à submissão.',
    status: 'Em preparação',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. et al.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Manuscrito detalhando o framework em cascata DEMNE, as cinco métricas de caracterização de corpus usadas para seleção de paradigma, e os resultados de calibração da busca em grade em três corpus de oncologia franceses.',
  },
  projects: {
    label: '05 — Projetos selecionados',
    title: 'Projetos selecionados',
    subtitle:
      'Além do DEMNE — ferramentas construídas de ponta a ponta para um hackathon e trabalhos acadêmicos.',
    items: [
      {
        date: 'Junho de 2026',
        title: 'NeuroStep',
        description:
          'Um catálogo digital de ferramentas e aplicativos de compensação cognitiva para pessoas com lesões cerebrais e tumores — apoio à comunicação, memória e planejamento. Criado para o hackathon SN@SU, com uma interface Streamlit sobre um armazenamento em JSON.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Dez. 2025',
        title: 'Painel de qualidade do ar',
        description:
          'Um painel interativo que reconstrói 15 anos de poluição atmosférica de fundo na França (2000–2015) a partir de dados do INERIS/Zenodo — armazenamento em SQLite, gráficos em Plotly e mapa de calor em Leaflet. Criado com meu colega de equipe William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Stack técnica',
    title: 'Stack técnica',
    subtitle: 'Ferramentas agrupadas pela relevância para o trabalho acima — não uma lista genérica.',
    categories: [
      {
        title: 'PLN clínico e IA biomédica',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Sistemas e infraestrutura',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Ferramentas de pesquisa',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { flag: '🇫🇷', level: 'Nativo' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Intermediário' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'Em progresso' },
    ],
  },
  areasOfFocus: {
    label: '07 — Áreas de foco',
    title: 'Áreas de foco',
    items: [
      {
        title: 'Reconhecimento de entidades nomeadas clínicas',
        body: 'Extração de biomarcadores, estadiamento e dados de tratamento a partir de textos oncológicos franceses não estruturados. Onde o NLP genérico falha e a adaptação de domínio começa.',
      },
      {
        title: 'IA frugal e interpretável',
        body: 'Projetar sistemas que recorrem ao nível menos opaco que atenda aos limiares de desempenho. A conformidade com o AI Act da UE como restrição de design, não uma reflexão tardia.',
      },
      {
        title: 'Raciocínio biomédico multimodal',
        body: 'Direção de longo prazo: unificar texto clínico, imagem e genômica em modelos que raciocinam entre modalidades. A abordagem de world models aplicada à medicina.',
      },
      {
        title: 'Pedagogia de sistemas complexos',
        body: 'Ensino de matemática e físico-química para cerca de dez alunos na Complétude, do ensino fundamental até o último ano do ensino médio. Tornar conceitos densos ensináveis é uma habilidade de pesquisa, não um bico.',
      },
    ],
  },
  writing: {
    label: '08 — Artigos',
    title: 'Notas da pesquisa',
    subtitle: 'Textos mais longos sobre os métodos, becos sem saída e decisões por trás do trabalho acima.',
    posts: [
      { status: 'Rascunho — em breve', title: 'Por que o NER clínico francês quebra modelos genéricos', body: 'Um panorama de onde pipelines NER padrão falham em laudos de oncologia franceses, e o que isso implica para a estrutura do DEMNE.' },
      { status: 'Rascunho — em breve', title: 'Extração em estágios vs. um único modelo grande', body: 'O argumento para rotear entidades por regras, um CRF e um transformer ajustado antes de chamar um LLM — e o que custa errar.' },
    ],
  },
  contact: {
    title: 'Vamos falar sobre PLN clínico, IA biomédica, ou uma colaboração de doutorado.',
    directLabel: 'Direto',
    elsewhereLabel: 'Em outros lugares',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Construído com seu próprio pipeline híbrido',
  },
};

const nl: Dictionary = {
  htmlLang: 'nl',
  meta: {
    title: 'Clément Longeac — klinische NLP & biomedische AI',
    description:
      'Onderzoek in klinische NLP en biomedische AI aan ESIEE Paris, op weg naar een PhD.',
  },
  nav: {
    about: 'Over mij',
    research: 'Onderzoek',
    experience: 'Ervaring',
    publications: 'Publicaties',
    writing: 'Artikelen',
    contact: 'Contact',
    langSearchPlaceholder: 'Zoek een taal…',
    langSearchNoResults: 'Geen taal gevonden',
    themeToggleLabel: 'Thema wisselen',
    menuToggleLabel: 'Menu openen',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Biomarkers uit klinische tekst halen ',
    h1Accent: 'zonder de GPU wakker te maken',
    h1Post: '.',
    sub: 'Ik ben Clément Longeac. Ik werk aan DEMNE, een routeringsframework dat per entiteitstype beslist of een regex, een CRF, een transformer of een LLM het eerlijke gereedschap voor de taak is. Eerste resultaat: 93,7% van de klinische entiteiten geëxtraheerd zonder GPU, F1 = 0,941 op 300 AP-HP-notities.',
    ctaResearch: 'Bekijk het onderzoek',
    ctaCV: 'Download CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, live schema',
  },
  about: {
    label: '01 — Over mij',
    title: 'Van bijles wiskunde tot het modelleren van tumormarkers',
    p1: 'Ik ben een vierdejaars student aan ESIEE Paris, specialisatie Data Science & AI, ingeschreven in het Tremplin Recherche-traject van de school — een programma voor studenten die op een doctoraat mikken in plaats van een standaard bedrijfsstage.',
    p2: 'Mijn werk draait om ongestructureerde klinische tekst bruikbaar te maken voor onderzoek: het extraheren van biomarkers, stadiëringsinformatie en behandelingsdetails verborgen in Franse oncologierapporten, waar generieke NLP-tools stelselmatig falen op domeinspecifieke woordenschat en documentstructuur.',
    p3: 'Naast mijn studie geef ik bijles wiskunde en natuurkunde-scheikunde via Complétude, en bereid ik sollicitaties voor een CIFRE-industrieel doctoraat in biomedische AI aan de Sorbonne-universiteit voor.',
    visionLine:
      'Op langere termijn is het diezelfde discipline — betrouwbare structuur halen uit rommelige, hoog-risicotekst — die me naar AI-veiligheidsonderzoek trekt: het bouwen en evalueren van world models via AMI Labs en het Anthropic Fellows Program. (Concepttekst — vervang door je eigen definitieve formulering.)',
    facts: [
      { dt: 'Instelling', dd: 'ESIEE Paris' },
      { dt: 'Programma', dd: 'Data Science & AI (DSIA)' },
      { dt: 'Traject', dd: 'Tremplin Recherche' },
      { dt: 'Volgende stap', dd: 'PhD, biomedische AI — Sorbonne' },
      { dt: 'Talen', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Onderzoek',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Een hybride named-entity-recognitionpipeline voor Franse oncologische klinische tekst.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Klinische NER · Franse oncologiecorpora',
    p1: 'Standaard NER-modellen falen flink op Franse klinische tekst: dichte afkortingen, inconsistente opmaak tussen ziekenhuissystemen, en biomarkerterminologie die nauwelijks voorkomt in algemene trainingsdata. DEMNE pakt dit aan met een gefaseerde pipeline in plaats van één model — elke fase doet waar hij goed in is, en schaalt alleen op naar een zwaarder model wanneer nodig.',
    p2: 'Het systeem is fijn afgesteld op DrBERT-7GB over drie verschillende Franse oncologiecorpora, en richt zich op zeven prioritaire biomarker-entiteitstypen die worden gebruikt in behandelingsrelevante rapportage.',
    tags: ['Klinische NLP', 'CRF', 'Transformers', 'DrBERT-7GB', 'Franse oncologie'],
    viewRepo: 'Bekijk de repository',
    readMethodology: 'Lees de methodologie',
    pipeline: [
      { num: '01', title: 'Regelgebaseerde stap', body: 'Regex- en lexiconmatching vangt tegen lage kosten hoogzekere, laag-ambigue entiteiten — datums, doseringen, standaard biomarkerafkortingen.' },
      { num: '02', title: 'CRF-laag', body: 'Een conditional random field modelleert de sequentiële structuur die de regels missen, met lokale context om ambigue delen op te lossen.' },
      { num: '03', title: 'Transformer-extractie', body: 'DrBERT-7GB, fijn afgesteld over drie oncologiecorpora, behandelt de entiteiten die echt semantisch en domeinbegrip vereisen.' },
      { num: '04', title: 'LLM-arbitrage', body: 'Resterende conflicten en randgevallen worden voor de uiteindelijke disambiguatie doorgestuurd naar een LLM-stap.' },
    ],
    aiAct: {
      title: 'Regelgevende afstemming — EU AI Act',
      body: 'Klinische entiteitsextractie op patiëntdossiers valt duidelijk binnen de hoogrisicocategorie van de EU AI Act. Het gefaseerde ontwerp van DEMNE houdt vanaf het begin rekening met artikel 12 en 14, niet achteraf toegevoegd.',
      articles: [
        { code: 'Art. 12', label: 'Registratie', desc: 'Elke extractiebeslissing is te herleiden tot de fase (regels, CRF, transformer of LLM) en het betrouwbaarheidsscore die deze produceerde, wat automatische auditlogging mogelijk maakt.' },
        { code: 'Art. 14', label: 'Menselijk toezicht', desc: 'Uitkomsten van LLM-arbitrage worden gemarkeerd voor klinische beoordeling in plaats van stilzwijgend geaccepteerd, zodat een mens betrokken blijft bij ambigue gevallen.' },
      ],
    },
  },
  metrics: {
    label: 'Resultaten',
    title: 'Wat de gefaseerde aanpak oplevert',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'Gemiddelde F1 — externe validatie' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'GPU-vrije extractie' },
      { value: 300, suffix: '', color: 'text', label: 'Gevalideerde AP-HP klinische notities' },
    ],
  },
  experience: {
    label: '03 — Ervaring',
    title: 'Waar het werk tot nu toe heeft plaatsgevonden',
    currentLabel: 'Lopend',
    items: [
      { current: true, date: '2025 — Heden', title: 'Onderzoeksassistent, Tremplin Recherche', org: 'ESIEE Paris', body: 'Ontwikkeling van DEMNE, een hybride klinische NER-pipeline voor Franse oncologietekst, als kernproject van het Tremplin Recherche-traject voorafgaand aan doctoraatssollicitaties.' },
      { current: true, date: '2026 — Heden', title: 'Oprichter & Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Bouw van een platform dat hersenletselpatiënten en hun ergotherapeuten een gestructureerde manier geeft om digitale hulpmiddelen voor cognitieve compensatie te vergelijken. Ontstaan als Python/Streamlit-prototype tijdens de SN@SU-hackathon (Sorbonne-universiteit, met Flor Sanchez-Luizard, ergotherapeut bij UEROS L\'ADAPT Île-de-France); momenteel in de planningsfase voor een productieherbouw (FastAPI, PostgreSQL, Next.js) met HDS/RGPD-conforme hosting en een semantische zoekmachine voor klinische matching.' },
      { date: '2024 — 2027', title: 'Ingenieursstudent — Data Science & AI', org: 'ESIEE Paris', body: 'Vierdejaars student in het vijfjarige ingenieursprogramma van ESIEE Paris, specialisatie Data Science & AI (DSIA).' },
      { date: '2025', title: 'Ingenieursstagiair, afdeling GRADES', org: 'Synchrotron SOLEIL', body: 'Ontwikkeling van autopkgtests in OpenCL voor AMD-GPU-compatibiliteit (pyopencl, nabu, ufo-filters, pyvkfft) op Debian/ROCm-infrastructuur via GitLab Salsa.' },
      { date: '2022 — Heden', title: 'Bijlesdocent bèta-vakken', org: 'Complétude', body: 'Bijles wiskunde en natuurkunde-scheikunde aan een tiental leerlingen, van de basisschool tot het laatste jaar middelbare school, naast mijn ingenieursstudie.' },
    ],
  },
  publications: {
    label: '04 — Publicaties',
    title: 'Publicaties & onderzoek',
    subtitle: 'Het geschreven verslag van het DEMNE-werk, op weg naar indiening.',
    status: 'In voorbereiding',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. et al.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Manuscript met details over het DEMNE-cascadeframework, de vijf corpuskarakteriseringsmetrieken voor paradigmakeuze, en de kalibratieresultaten van de grid search over drie Franse oncologiecorpora.',
  },
  projects: {
    label: '05 — Uitgelichte projecten',
    title: 'Uitgelichte projecten',
    subtitle:
      'Naast DEMNE — tools die volledig van begin tot eind zijn gebouwd voor een hackathon en studieprojecten.',
    items: [
      {
        date: 'Juni 2026',
        title: 'NeuroStep',
        description:
          'Een digitale catalogus van cognitieve hulpmiddelen en apps voor mensen met hersenletsel en tumoren — hulp bij communicatie, geheugen en planning. Gebouwd voor de SN@SU-hackathon, met een Streamlit-interface bovenop een op JSON gebaseerde opslag.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Dec. 2025',
        title: 'Luchtkwaliteitsdashboard',
        description:
          'Een interactief dashboard dat 15 jaar achtergrondluchtvervuiling in Frankrijk (2000–2015) reconstrueert op basis van INERIS/Zenodo-data — SQLite-opslag, Plotly-grafieken en een Leaflet-heatmap. Gebouwd samen met teamgenoot William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Technische stack',
    title: 'Technische stack',
    subtitle: 'Tools gegroepeerd naar relevantie voor het werk hierboven — geen generieke lijst.',
    categories: [
      {
        title: 'Klinische NLP & biomedische AI',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Systemen & infrastructuur',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Onderzoekshulpmiddelen',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Talen',
    languages: [
      { flag: '🇫🇷', level: 'Moedertaal' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Gemiddeld' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'In ontwikkeling' },
    ],
  },
  areasOfFocus: {
    label: '07 — Aandachtsgebieden',
    title: 'Aandachtsgebieden',
    items: [
      {
        title: 'Klinische named entity recognition',
        body: 'Extractie van biomarkers, stadiëring en behandelgegevens uit ongestructureerde Franse oncologische teksten. Waar generieke NLP faalt en domeinadaptatie begint.',
      },
      {
        title: 'Frugale & interpreteerbare AI',
        body: 'Systemen ontwerpen die naar het minst ondoorzichtige niveau routeren dat aan de prestatiedrempels voldoet. Naleving van de EU AI Act als ontwerpbeperking, niet als bijgedachte.',
      },
      {
        title: 'Multimodaal biomedisch redeneren',
        body: 'Langetermijnrichting: klinische tekst, beeldvorming en genomica verenigen in modellen die over modaliteiten heen redeneren. De world-models-aanpak toegepast op de geneeskunde.',
      },
      {
        title: 'Didactiek van complexe systemen',
        body: 'Wiskunde en natuurkunde-scheikunde geven aan een tiental leerlingen bij Complétude, van de basisschool tot het laatste jaar middelbare school. Dichte concepten leerbaar maken is een onderzoeksvaardigheid, geen bijbaantje.',
      },
    ],
  },
  writing: {
    label: '08 — Artikelen',
    title: 'Notities uit het onderzoek',
    subtitle: 'Langere stukken over de methoden, doodlopende wegen en beslissingen achter het werk hierboven.',
    posts: [
      { status: 'Concept — binnenkort', title: 'Waarom Franse klinische NER generieke modellen breekt', body: 'Een overzicht van waar standaard NER-pipelines falen op Franse oncologierapporten, en wat dat betekent voor de structuur van DEMNE.' },
      { status: 'Concept — binnenkort', title: 'Gefaseerde extractie versus één groot model', body: 'Het argument om entiteiten via regels, een CRF en een fijn afgestelde transformer te leiden voordat er ooit een LLM wordt aangeroepen — en wat het kost om dat verkeerd te doen.' },
    ],
  },
  contact: {
    title: 'Laten we praten over klinische NLP, biomedische AI, of een doctoraatssamenwerking.',
    directLabel: 'Direct',
    elsewhereLabel: 'Elders',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Gebouwd met een eigen hybride pipeline',
  },
};

const zh: Dictionary = {
  htmlLang: 'zh',
  meta: {
    title: 'Clément Longeac — 人工智能研究、临床自然语言处理与生物医学人工智能',
    description:
      '临床自然语言处理与生物医学人工智能研究，就读于巴黎ESIEE工程学院，目标是攻读生物医学人工智能博士。',
  },
  nav: {
    about: '关于我',
    research: '研究',
    experience: '经历',
    publications: '出版物',
    writing: '文章',
    contact: '联系方式',
    langSearchPlaceholder: '搜索语言…',
    langSearchNoResults: '未找到匹配语言',
    themeToggleLabel: '切换主题',
    menuToggleLabel: '打开菜单',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: '从临床文本中提取生物标志物，',
    h1Accent: '却不必唤醒GPU',
    h1Post: '。',
    sub: '我是Clément Longeac。我正在研发DEMNE，一个路由框架——针对每种实体类型，决定正则表达式、CRF、Transformer还是LLM才是诚实可靠的工具。首个成果：93.7%的临床实体在无需GPU的情况下被提取，在300份AP-HP病历上F1值达到0.941。',
    ctaResearch: '查看研究',
    ctaCV: '下载简历',
    caption: 'DEMNE — 规则 → CRF → Transformer → LLM，实时示意图',
  },
  about: {
    label: '01 — 关于我',
    title: '从数学家教到肿瘤标志物建模',
    p1: '我是巴黎ESIEE工程学院四年级学生，专攻数据科学与人工智能，就读于学校的Tremplin Recherche项目——该项目面向以博士研究为目标而非常规企业实习的学生。',
    p2: '我的工作核心是让非结构化的临床文本可用于研究：从法语肿瘤学报告中提取生物标志物、分期信息和治疗细节，而通用自然语言处理工具在面对该领域的专业词汇和文档结构时往往表现不佳。',
    p3: '在学习之余，我通过Complétude机构教授数学和物理化学课程，并正在准备申请索邦大学生物医学人工智能方向的CIFRE产学合作博士项目。',
    visionLine:
      '从长远看，正是这种从混乱、高风险文本中提取可靠结构的能力，吸引我投身于人工智能安全研究：通过AMI Labs和Anthropic Fellows项目构建并评估world model。（此句为草稿——请替换为你自己的最终表述。）',
    facts: [
      { dt: '院校', dd: 'ESIEE Paris' },
      { dt: '专业', dd: '数据科学与人工智能 (DSIA)' },
      { dt: '项目', dd: 'Tremplin Recherche' },
      { dt: '下一步', dd: '生物医学人工智能博士 — 索邦大学' },
      { dt: '语言', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — 研究',
    title: 'DEMNE / DuraXeLL',
    subtitle: '面向法语肿瘤学临床文本的混合命名实体识别流水线。',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: '临床命名实体识别 · 法语肿瘤学语料库',
    p1: '现成的命名实体识别模型在法语临床文本上表现很差：密集的缩写、各医院系统间不一致的格式，以及在通用训练数据中几乎不出现的生物标志物术语。DEMNE通过分阶段流水线而非单一模型来应对这一问题——每个阶段处理自己最擅长的部分，只有在必要时才升级到更重的模型。',
    p2: '该系统在三个不同的法语肿瘤学语料库上对DrBERT-7GB进行了微调，目标是治疗相关报告中使用的七种优先生物标志物实体类型。',
    tags: ['临床自然语言处理', 'CRF', 'Transformer', 'DrBERT-7GB', '法语肿瘤学'],
    viewRepo: '查看代码仓库',
    readMethodology: '阅读方法论',
    pipeline: [
      { num: '01', title: '基于规则的处理', body: '正则表达式与词典匹配以低成本捕获高置信度、低歧义的实体——日期、剂量、标准生物标志物缩写。' },
      { num: '02', title: 'CRF层', body: '条件随机场对规则遗漏的序列结构进行建模，利用局部上下文解决歧义片段。' },
      { num: '03', title: 'Transformer抽取', body: '在三个肿瘤学语料库上微调的DrBERT-7GB，负责处理需要真正语义和领域理解的实体。' },
      { num: '04', title: 'LLM仲裁', body: '剩余的冲突和边缘情况在输出前会被路由到LLM阶段进行最终消歧。' },
    ],
    aiAct: {
      title: '监管合规 — 欧盟人工智能法案',
      body: '对患者病历进行临床实体抽取正属于欧盟人工智能法案的高风险类别。DEMNE的分阶段设计从一开始就考虑到第12条和第14条,而非事后补充。',
      articles: [
        { code: '第12条', label: '记录保存', desc: '每一个抽取决策都可以追溯到产生它的阶段（规则、CRF、Transformer或LLM）以及置信度分数,从而实现自动审计日志记录。' },
        { code: '第14条', label: '人工监督', desc: 'LLM仲裁的输出会被标记以供临床医生审查，而非默默接受，从而在歧义案例中保留人工干预。' },
      ],
    },
  },
  metrics: {
    label: '成果',
    title: '分阶段方法带来的价值',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: '平均F1值——外部验证' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: '无需GPU的抽取' },
      { value: 300, suffix: '', color: 'text', label: '已验证的AP-HP临床记录' },
    ],
  },
  experience: {
    label: '03 — 经历',
    title: '迄今为止的工作历程',
    currentLabel: '进行中',
    items: [
      { current: true, date: '2025年 — 至今', title: '研究助理，Tremplin Recherche', org: 'ESIEE Paris', body: '开发DEMNE，一个面向法语肿瘤学文本的混合临床命名实体识别流水线，作为Tremplin Recherche项目的核心课题，为博士申请做准备。' },
      { current: true, date: '2026年 — 至今', title: '创始人兼产品负责人，NeuroStep', org: 'ESIEE Paris学生创业公司', body: '构建一个平台，让脑损伤患者及其职业治疗师能够以结构化方式比较认知补偿数字工具。项目起源于索邦大学SN@SU黑客松上的Python/Streamlit原型（与UEROS L\'ADAPT法兰西岛的职业治疗师Flor Sanchez-Luizard合作）；目前正规划以FastAPI、PostgreSQL和Next.js重构为生产版本，采用符合HDS/RGPD标准的托管方案,并配备用于临床工具匹配的语义搜索引擎。' },
      { date: '2024年 — 2027年', title: '工程学学生 — 数据科学与人工智能', org: 'ESIEE Paris', body: '巴黎ESIEE工程学院五年制工程学项目四年级学生，专攻数据科学与人工智能（DSIA）。' },
      { date: '2025年', title: '工程实习生，GRADES部门', org: 'Synchrotron SOLEIL（法国索莱伊同步辐射光源）', body: '使用OpenCL开发autopkgtest测试脚本，用于AMD GPU兼容性测试（pyopencl、nabu、ufo-filters、pyvkfft），并通过GitLab Salsa在Debian/ROCm基础设施上运行。' },
      { date: '2022年 — 至今', title: '理科家教', org: 'Complétude', body: '在攻读工程学学位的同时，为约十名学生教授数学和物理化学，从小学到高中毕业班（不含高等教育阶段）。' },
    ],
  },
  publications: {
    label: '04 — 出版物',
    title: '出版物与研究',
    subtitle: 'DEMNE研究工作走向投稿过程中的书面记录。',
    status: '撰写中',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. 等',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: '详细介绍DEMNE级联框架、用于范式选择的五项语料库特征化指标，以及在三个法语肿瘤学语料库上进行网格搜索校准的结果的手稿。',
  },
  projects: {
    label: '05 — 精选项目',
    title: '精选项目',
    subtitle: '除 DEMNE 之外，还有为黑客松和课程项目从零到一构建的工具。',
    items: [
      {
        date: '2026年6月',
        title: 'NeuroStep',
        description:
          '一个面向脑损伤和肿瘤患者的认知辅助工具与应用数字目录——涵盖沟通辅助、记忆和日程规划。为 SN@SU 黑客松开发，使用 Streamlit 界面，数据存储于 JSON。',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: '2025年12月',
        title: '空气质量仪表盘',
        description:
          '一个交互式仪表盘，基于 INERIS/Zenodo 数据重建了法国 2000 至 2015 年间 15 年的背景空气污染情况——使用 SQLite 存储、Plotly 图表和 Leaflet 热力图。与队友 William Zee 共同完成。',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — 技术栈',
    title: '技术栈',
    subtitle: '按与上述工作的相关性分组的工具——而非泛泛的列表。',
    categories: [
      {
        title: '临床NLP与生物医学人工智能',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: '系统与基础设施',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: '科研工具',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: '语言',
    languages: [
      { flag: '🇫🇷', level: '母语' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: '中级' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: '学习中' },
    ],
  },
  areasOfFocus: {
    label: '07 — 研究方向',
    title: '研究方向',
    items: [
      {
        title: '临床命名实体识别',
        body: '从非结构化的法语肿瘤学文本中提取生物标志物、分期和治疗数据——通用NLP失效、领域自适应开始发挥作用之处。',
      },
      {
        title: '节俭且可解释的人工智能',
        body: '设计能够路由到满足性能阈值的最不透明层级的系统，将符合欧盟《人工智能法案》作为设计约束，而非事后考量。',
      },
      {
        title: '多模态生物医学推理',
        body: '长期方向：将临床文本、影像与基因组学统一到能够跨模态推理的模型中——将世界模型方向应用于医学。',
      },
      {
        title: '复杂系统教学法',
        body: '在Complétude为约十名学生教授数学和物理化学，从小学到高中毕业班（不含高等教育阶段）。让密集的概念变得可学习是一项研究技能，而非副业。',
      },
    ],
  },
  writing: {
    label: '08 — 文章',
    title: '研究札记',
    subtitle: '关于上述工作背后的方法、弯路与决策的深入文章。',
    posts: [
      { status: '草稿 — 即将发布', title: '为什么法语临床命名实体识别会让通用模型失效', body: '梳理标准命名实体识别流水线在法语肿瘤学报告上失败的原因，以及这对DEMNE结构设计的启示。' },
      { status: '草稿 — 即将发布', title: '分阶段抽取与单一大模型的对比', body: '在调用LLM之前，先通过规则、CRF和微调Transformer路由实体的理由——以及出错时的代价。' },
    ],
  },
  contact: {
    title: '欢迎交流临床自然语言处理、生物医学人工智能，或博士合作事宜。',
    directLabel: '直接联系',
    elsewhereLabel: '其他平台',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: '由自己的混合流水线构建而成',
  },
};

const ja: Dictionary = {
  htmlLang: 'ja',
  meta: {
    title: 'Clément Longeac — AI研究、臨床NLP・生物医学AI',
    description:
      '臨床NLPと生物医学AIの研究。パリESIEE工科大学に在籍し、生物医学AIの博士号取得を目指しています。',
  },
  nav: {
    about: 'プロフィール',
    research: '研究',
    experience: '経歴',
    publications: '論文',
    writing: '記事',
    contact: '連絡先',
    langSearchPlaceholder: '言語を検索…',
    langSearchNoResults: '該当する言語がありません',
    themeToggleLabel: 'テーマを切り替える',
    menuToggleLabel: 'メニューを開く',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'GPUを起こさずに、',
    h1Accent: '臨床テキストからバイオマーカーを抽出する',
    h1Post: '。',
    sub: '私はClément Longeacです。現在、DEMNEというルーティングフレームワークに取り組んでいます——エンティティの種類ごとに、正規表現、CRF、トランスフォーマー、LLMのどれが誠実な選択かを判断します。最初の成果：GPUを使わずに臨床エンティティの93.7%を抽出し、300件のAP-HPノートでF1値0.941を達成しました。',
    ctaResearch: '研究を見る',
    ctaCV: '履歴書をダウンロード',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM、ライブ図解',
  },
  about: {
    label: '01 — プロフィール',
    title: '数学の家庭教師から腫瘍マーカーのモデリングへ',
    p1: '私はパリESIEE工科大学の4年生で、データサイエンス・AIを専攻し、学校のTremplin Rechercheコースに在籍しています。これは標準的な企業インターンではなく、博士研究を目指す学生向けのプログラムです。',
    p2: '私の仕事は、非構造化された臨床テキストを研究に活用できるようにすることです。フランス語の腫瘍学レポートに埋もれた生体マーカー、病期情報、治療の詳細を抽出しますが、汎用のNLPツールはこの分野特有の語彙や文書構造に対して一貫して機能不全に陥ります。',
    p3: '学業と並行して、Complétudeで数学・物理化学の家庭教師をしており、ソルボンヌ大学の生物医学AI分野でのCIFRE産学連携博士課程への出願準備を進めています。',
    visionLine:
      '長期的には、乱雑でリスクの高いテキストから信頼できる構造を引き出すという同じ規律が、AMI LabsやAnthropic Fellowsプログラムを通じたworld modelの構築・評価というAI安全性研究への関心につながっています。（この文章は下書きです。最終的な表現に置き換えてください。）',
    facts: [
      { dt: '所属', dd: 'ESIEE Paris' },
      { dt: '専攻', dd: 'データサイエンス・AI（DSIA）' },
      { dt: 'コース', dd: 'Tremplin Recherche' },
      { dt: '次のステップ', dd: '生物医学AI博士号 — ソルボンヌ大学' },
      { dt: '言語', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — 研究',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'フランス語の腫瘍学臨床テキスト向けハイブリッド固有表現抽出パイプライン。',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: '臨床NER · フランス語腫瘍学コーパス',
    p1: '既製のNERモデルはフランス語の臨床テキストで大きくつまずきます：密度の高い略語、病院システムごとに一貫しないフォーマット、一般的な学習データにはほとんど現れない生体マーカーの専門用語などです。DEMNEは単一モデルではなく段階的なパイプラインでこれに対処します——各段階は得意な処理を担い、必要な場合のみより重いモデルへエスカレーションします。',
    p2: 'システムはDrBERT-7GBを3つの異なるフランス語腫瘍学コーパスでファインチューニングし、治療関連レポートで使用される7種類の優先的な生体マーカー実体タイプを対象としています。',
    tags: ['臨床NLP', 'CRF', 'Transformer', 'DrBERT-7GB', 'フランス語腫瘍学'],
    viewRepo: 'リポジトリを見る',
    readMethodology: '手法を読む',
    pipeline: [
      { num: '01', title: 'ルールベース処理', body: '正規表現と辞書によるマッチングで、日付・投与量・標準的な生体マーカー略語など、信頼度が高く曖昧性の低い実体を低コストで捕捉します。' },
      { num: '02', title: 'CRF層', body: '条件付き確率場がルールでは捉えきれない系列構造をモデル化し、局所文脈を用いて曖昧な部分を解決します。' },
      { num: '03', title: 'Transformerによる抽出', body: '3つの腫瘍学コーパスでファインチューニングされたDrBERT-7GBが、真の意味理解とドメイン理解を要する実体を処理します。' },
      { num: '04', title: 'LLMによる裁定', body: '残った競合やエッジケースは、出力前の最終的な曖昧性解消のためLLM処理へ回されます。' },
    ],
    aiAct: {
      title: '規制対応 — EU AI Act',
      body: '患者記録に対する臨床実体抽出は、EU AI Actの高リスクカテゴリに明確に該当します。DEMNEの段階的設計は、後付けではなく最初から第12条と第14条を念頭に置いています。',
      articles: [
        { code: '第12条', label: '記録保持', desc: 'すべての抽出決定は、それを生成した段階（ルール、CRF、Transformer、またはLLM）と信頼度スコアまでトレース可能で、自動的な監査ログ記録が可能です。' },
        { code: '第14条', label: '人間による監督', desc: 'LLMによる裁定結果は黙って受け入れられるのではなく、臨床医によるレビュー対象としてフラグ付けされ、曖昧なケースでは人間が判断に関与し続けます。' },
      ],
    },
  },
  metrics: {
    label: '成果',
    title: '段階的アプローチがもたらすもの',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: '平均F1値 — 外部検証' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'GPU不要の抽出' },
      { value: 300, suffix: '', color: 'text', label: '検証済みAP-HP臨床記録' },
    ],
  },
  experience: {
    label: '03 — 経歴',
    title: 'これまでの活動の場',
    currentLabel: '進行中',
    items: [
      { current: true, date: '2025年 — 現在', title: '研究アシスタント、Tremplin Recherche', org: 'ESIEE Paris', body: 'フランス語腫瘍学テキスト向けのハイブリッド臨床NERパイプラインであるDEMNEを、博士課程出願を見据えたTremplin Rechercheコースの中核プロジェクトとして開発。' },
      { current: true, date: '2026年 — 現在', title: '創業者兼プロダクトリード、NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: '脳損傷患者とその作業療法士が認知補償デジタルツールを比較検討できる構造化された手段を提供するプラットフォームを構築中。ソルボンヌ大学のSN@SUハッカソン（UEROS L\'ADAPT イル＝ド＝フランスの作業療法士Flor Sanchez-Luizard氏との共同）でPython/Streamlit製プロトタイプとして誕生し、現在はHDS/RGPD準拠のホスティングと臨床マッチング用のセマンティック検索エンジンを備えた本番版（FastAPI、PostgreSQL、Next.js）への再構築を計画中。' },
      { date: '2024年 — 2027年', title: '工学部学生 — データサイエンス・AI', org: 'ESIEE Paris', body: 'パリESIEE工科大学の5年制工学プログラム4年生、データサイエンス・AI（DSIA）専攻。' },
      { date: '2025年', title: 'エンジニアインターン、GRADES部門', org: 'Synchrotron SOLEIL（シンクロトロン・ソレイユ）', body: 'GitLab Salsa経由のDebian/ROCm基盤上で、AMD GPU互換性検証のためOpenCLを用いたautopkgtestスクリプト（pyopencl、nabu、ufo-filters、pyvkfft）を開発。' },
      { date: '2022年 — 現在', title: '理系家庭教師', org: 'Complétude', body: '工学の学業と並行して、約10名の生徒に数学・物理化学を指導（小学校から高校最終学年まで、高等教育は対象外）。' },
    ],
  },
  publications: {
    label: '04 — 論文',
    title: '論文・研究成果',
    subtitle: '投稿に向けて進行中のDEMNE研究の記録。',
    status: '準備中',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. 他',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'DEMNEのカスケードフレームワーク、パラダイム選択に用いる5つのコーパス特性評価指標、および3つのフランス語腫瘍学コーパスにわたるグリッドサーチ較正結果を詳述する原稿。',
  },
  projects: {
    label: '05 — 主な制作物',
    title: '主な制作物',
    subtitle: 'DEMNEのほかに、ハッカソンや授業課題のために一から作り上げたツール。',
    items: [
      {
        date: '2026年6月',
        title: 'NeuroStep',
        description:
          '脳損傷や腫瘍を持つ人向けの認知補助ツール・アプリのデジタルカタログ——コミュニケーション支援、記憶、計画立案を対象とする。SN@SUハッカソン向けに開発し、Streamlitのインターフェースと JSON ベースのデータストアを使用。',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: '2025年12月',
        title: '大気質ダッシュボード',
        description:
          'INERIS/Zenodoのデータをもとに、フランスにおける2000年から2015年までの15年間の大気汚染の背景値を再構築したインタラクティブなダッシュボード——SQLiteでのデータ保存、Plotlyによるグラフ、Leafletによるヒートマップを使用。チームメイトのWilliam Zeeと共同制作。',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — 技術スタック',
    title: '技術スタック',
    subtitle: '上記の研究との関連性でグループ分けしたツール——一般的な羅列ではない。',
    categories: [
      {
        title: '臨床NLP・生物医学AI',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'システム・インフラ',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: '研究ツール',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: '言語',
    languages: [
      { flag: '🇫🇷', level: '母語' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: '中級' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: '学習中' },
    ],
  },
  areasOfFocus: {
    label: '07 — 研究の焦点',
    title: '研究の焦点',
    items: [
      {
        title: '臨床固有表現抽出',
        body: '非構造化のフランス語腫瘍学テキストからバイオマーカー、病期、治療データを抽出する——汎用NLPが破綻し、ドメイン適応が始まる領域。',
      },
      {
        title: '倹約的で解釈可能なAI',
        body: '性能基準を満たす範囲で最も透明性の高い層へルーティングするシステムを設計する。EU AI法への準拠を後付けではなく設計上の制約として扱う。',
      },
      {
        title: 'マルチモーダル生物医学推論',
        body: '長期的な方向性：臨床テキスト、画像、ゲノミクスを統合し、モダリティを横断して推論するモデルを構築する。world modelsのアプローチを医学に応用する。',
      },
      {
        title: '複雑系の教育法',
        body: 'Complétudeで約10名の生徒に数学と物理化学を指導（小学校から高校最終学年まで、高等教育は対象外）。密度の高い概念を学べる形にすることは、片手間の仕事ではなく研究スキルである。',
      },
    ],
  },
  writing: {
    label: '08 — 記事',
    title: '研究ノート',
    subtitle: '上記の研究の背後にある手法、行き詰まり、意思決定についての詳しい記事。',
    posts: [
      { status: '下書き — 近日公開', title: 'なぜフランス語臨床NERは汎用モデルを機能不全にするのか', body: '標準的なNERパイプラインがフランス語腫瘍学レポートで失敗する箇所と、それがDEMNEの構造設計に与える意味についての解説。' },
      { status: '下書き — 近日公開', title: '段階的抽出 対 単一の大規模モデル', body: 'LLMを呼び出す前にルール、CRF、ファインチューニング済みTransformerを経由させて実体をルーティングすることの根拠と、それを誤った場合のコスト。' },
    ],
  },
  contact: {
    title: '臨床NLP、生物医学AI、または博士課程での共同研究についてお話ししましょう。',
    directLabel: '直接連絡',
    elsewhereLabel: 'その他',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: '独自のハイブリッドパイプラインで構築',
  },
};

const ko: Dictionary = {
  htmlLang: 'ko',
  meta: {
    title: 'Clément Longeac — AI 연구, 임상 NLP 및 생물의학 AI',
    description:
      '임상 NLP와 생물의학 AI 연구자. 파리 ESIEE 공과대학 재학 중이며 생물의학 AI 박사 학위를 목표로 합니다.',
  },
  nav: {
    about: '소개',
    research: '연구',
    experience: '경력',
    publications: '출판물',
    writing: '글',
    contact: '연락처',
    langSearchPlaceholder: '언어 검색…',
    langSearchNoResults: '일치하는 언어가 없습니다',
    themeToggleLabel: '테마 전환',
    menuToggleLabel: '메뉴 열기',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'GPU를 깨우지 않고 ',
    h1Accent: '임상 텍스트에서 바이오마커를 추출합니다',
    h1Post: '.',
    sub: '저는 Clément Longeac입니다. 저는 DEMNE라는 라우팅 프레임워크를 개발하고 있습니다 — 엔티티 유형마다 정규식, CRF, 트랜스포머, LLM 중 어느 것이 그 작업에 정직한 도구인지 결정합니다. 첫 결과: GPU 없이 임상 엔티티의 93.7%를 추출했으며, 300건의 AP-HP 노트에서 F1 = 0.941을 달성했습니다.',
    ctaResearch: '연구 보기',
    ctaCV: '이력서 다운로드',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, 실시간 도식',
  },
  about: {
    label: '01 — 소개',
    title: '수학 과외에서 종양 마커 모델링까지',
    p1: '저는 파리 ESIEE 공과대학 4학년 학생으로, 데이터 사이언스 & AI를 전공하며 학교의 Tremplin Recherche 트랙에 소속되어 있습니다. 이는 일반적인 기업 인턴십이 아니라 박사 연구를 목표로 하는 학생들을 위한 프로그램입니다.',
    p2: '제 연구는 비정형 임상 텍스트를 연구에 활용 가능하도록 만드는 데 중점을 둡니다. 프랑스어 종양학 보고서에 묻혀 있는 생체표지자, 병기 정보, 치료 세부사항을 추출하는데, 범용 NLP 도구는 이 분야의 전문 어휘와 문서 구조 앞에서 일관되게 실패합니다.',
    p3: '학업과 병행하여 Complétude를 통해 수학과 물리화학을 가르치고 있으며, 소르본 대학교 생물의학 AI 분야의 CIFRE 산학협력 박사과정 지원을 준비하고 있습니다.',
    visionLine:
      '장기적으로, 어수선하고 위험도가 높은 텍스트에서 신뢰할 수 있는 구조를 추출하는 이 동일한 규율이 저를 AI 안전 연구로 이끕니다: AMI Labs와 Anthropic Fellows 프로그램을 통해 world model을 구축하고 평가하는 일입니다. (초안 문장입니다 — 최종 문구로 교체해 주세요.)',
    facts: [
      { dt: '소속', dd: 'ESIEE Paris' },
      { dt: '전공', dd: '데이터 사이언스 & AI (DSIA)' },
      { dt: '트랙', dd: 'Tremplin Recherche' },
      { dt: '다음 단계', dd: '생물의학 AI 박사 — 소르본 대학교' },
      { dt: '언어', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — 연구',
    title: 'DEMNE / DuraXeLL',
    subtitle: '프랑스어 종양학 임상 텍스트를 위한 하이브리드 개체명 인식 파이프라인.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: '임상 NER · 프랑스어 종양학 코퍼스',
    p1: '기성 NER 모델은 프랑스어 임상 텍스트에서 크게 실패합니다: 밀도 높은 약어, 병원 시스템마다 일관되지 않은 형식, 일반 학습 데이터에는 거의 등장하지 않는 생체표지자 용어 때문입니다. DEMNE는 단일 모델이 아닌 단계별 파이프라인으로 이 문제에 대응합니다 — 각 단계는 자신이 가장 잘하는 일을 처리하고, 필요할 때만 더 무거운 모델로 확대합니다.',
    p2: '이 시스템은 세 개의 서로 다른 프랑스어 종양학 코퍼스에서 DrBERT-7GB를 미세조정했으며, 치료 관련 보고서에 사용되는 7가지 우선순위 생체표지자 개체 유형을 대상으로 합니다.',
    tags: ['임상 NLP', 'CRF', 'Transformer', 'DrBERT-7GB', '프랑스어 종양학'],
    viewRepo: '저장소 보기',
    readMethodology: '방법론 읽기',
    pipeline: [
      { num: '01', title: '규칙 기반 처리', body: '정규식 및 어휘 매칭이 낮은 비용으로 신뢰도가 높고 모호성이 낮은 개체(날짜, 투여량, 표준 생체표지자 약어)를 포착합니다.' },
      { num: '02', title: 'CRF 계층', body: '조건부 무작위장(CRF)이 규칙이 놓치는 순차적 구조를 모델링하며, 지역 문맥을 활용해 모호한 구간을 해결합니다.' },
      { num: '03', title: 'Transformer 추출', body: '세 개의 종양학 코퍼스에서 미세조정된 DrBERT-7GB가 실제 의미론적, 도메인 이해가 필요한 개체를 처리합니다.' },
      { num: '04', title: 'LLM 중재', body: '남은 충돌과 경계 사례는 출력 전 최종 명확화를 위해 LLM 단계로 전달됩니다.' },
    ],
    aiAct: {
      title: '규제 정합성 — EU AI Act',
      body: '환자 기록에 대한 임상 개체 추출은 EU AI Act의 고위험 범주에 명확히 해당합니다. DEMNE의 단계별 설계는 사후에 덧붙인 것이 아니라 처음부터 제12조와 제14조를 염두에 두고 만들어졌습니다.',
      articles: [
        { code: '제12조', label: '기록 보관', desc: '모든 추출 결정은 이를 생성한 단계(규칙, CRF, Transformer, 또는 LLM)와 신뢰도 점수까지 추적 가능하며, 감사 로그를 자동으로 기록할 수 있습니다.' },
        { code: '제14조', label: '인간의 감독', desc: 'LLM 중재 결과는 조용히 수용되지 않고 임상의 검토를 위해 플래그가 지정되어, 모호한 사례에서도 인간이 계속 관여합니다.' },
      ],
    },
  },
  metrics: {
    label: '결과',
    title: '단계별 접근 방식이 가져오는 것',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: '평균 F1 — 외부 검증' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'GPU 없는 추출' },
      { value: 300, suffix: '', color: 'text', label: '검증된 AP-HP 임상 기록' },
    ],
  },
  experience: {
    label: '03 — 경력',
    title: '지금까지의 활동 이력',
    currentLabel: '진행 중',
    items: [
      { current: true, date: '2025년 — 현재', title: '연구 조교, Tremplin Recherche', org: 'ESIEE Paris', body: '박사과정 지원을 앞두고 Tremplin Recherche 트랙의 핵심 프로젝트로서, 프랑스어 종양학 텍스트를 위한 하이브리드 임상 NER 파이프라인인 DEMNE를 개발.' },
      { current: true, date: '2026년 — 현재', title: '창립자 & 프로덕트 리드, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: '뇌손상 환자와 이들을 돕는 작업치료사가 인지 보상 디지털 도구를 구조적으로 비교할 수 있는 플랫폼을 구축 중. 소르본 대학교 SN@SU 해커톤에서 (UEROS L\'ADAPT 일드프랑스 소속 작업치료사 Flor Sanchez-Luizard와 함께) Python/Streamlit 프로토타입으로 시작했으며, 현재 HDS/RGPD 준수 호스팅과 임상 도구 매칭을 위한 시맨틱 검색 엔진을 갖춘 프로덕션 버전(FastAPI, PostgreSQL, Next.js)으로의 재구축을 기획 중.' },
      { date: '2024년 — 2027년', title: '공학도 — 데이터 사이언스 & AI', org: 'ESIEE Paris', body: '파리 ESIEE 공과대학 5년제 공학 프로그램 4학년, 데이터 사이언스 & AI(DSIA) 전공.' },
      { date: '2025년', title: '엔지니어링 인턴, GRADES 부서', org: 'Synchrotron SOLEIL', body: 'GitLab Salsa를 통한 Debian/ROCm 인프라에서 AMD GPU 호환성을 위한 OpenCL 기반 autopkgtest 스크립트(pyopencl, nabu, ufo-filters, pyvkfft) 개발.' },
      { date: '2022년 — 현재', title: '이공계 과외 교사', org: 'Complétude', body: '공학 학업과 병행하여 약 10명의 학생에게 초등학교부터 고등학교 졸업반까지 수학과 물리화학을 지도(고등교육은 제외).' },
    ],
  },
  publications: {
    label: '04 — 출판물',
    title: '출판물 및 연구',
    subtitle: '투고를 향해 진행 중인 DEMNE 연구의 기록.',
    status: '준비 중',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. 외',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'DEMNE 계단식 프레임워크, 패러다임 선택에 사용된 5가지 코퍼스 특성화 지표, 그리고 세 개의 프랑스어 종양학 코퍼스에 걸친 그리드 서치 보정 결과를 상세히 기술한 원고.',
  },
  projects: {
    label: '05 — 주요 프로젝트',
    title: '주요 프로젝트',
    subtitle: 'DEMNE 외에도 해커톤과 학업 과제를 위해 처음부터 끝까지 만든 도구들.',
    items: [
      {
        date: '2026년 6월',
        title: 'NeuroStep',
        description:
          '뇌손상 및 종양을 가진 사람들을 위한 인지 보완 도구와 앱의 디지털 카탈로그 — 의사소통 지원, 기억, 일정 계획을 다룹니다. SN@SU 해커톤을 위해 제작했으며, Streamlit 인터페이스와 JSON 기반 저장소를 사용합니다.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: '2025년 12월',
        title: '대기질 대시보드',
        description:
          'INERIS/Zenodo 데이터를 기반으로 프랑스의 2000~2015년 15년간 배경 대기오염을 재구성한 인터랙티브 대시보드 — SQLite 저장소, Plotly 차트, Leaflet 히트맵을 사용합니다. 팀원 William Zee와 함께 제작했습니다.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — 기술 스택',
    title: '기술 스택',
    subtitle: '위 연구와의 관련성에 따라 분류한 도구들 — 흔한 나열이 아닙니다.',
    categories: [
      {
        title: '임상 NLP 및 생물의학 AI',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: '시스템 및 인프라',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: '연구 도구',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: '언어',
    languages: [
      { flag: '🇫🇷', level: '모국어' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: '중급' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: '학습 중' },
    ],
  },
  areasOfFocus: {
    label: '07 — 연구 초점',
    title: '연구 초점',
    items: [
      {
        title: '임상 개체명 인식',
        body: '비정형 프랑스어 종양학 텍스트에서 바이오마커, 병기, 치료 데이터를 추출합니다 — 범용 NLP가 무너지고 도메인 적응이 시작되는 지점입니다.',
      },
      {
        title: '검소하고 해석 가능한 AI',
        body: '성능 기준을 충족하는 범위 내에서 가장 투명한 단계로 라우팅하는 시스템을 설계합니다. EU AI Act 준수를 사후 고려가 아닌 설계 제약으로 다룹니다.',
      },
      {
        title: '멀티모달 생물의학 추론',
        body: '장기적 방향: 임상 텍스트, 영상, 유전체 데이터를 모달리티를 넘나들며 추론하는 모델로 통합합니다. 월드 모델 접근법을 의학에 적용합니다.',
      },
      {
        title: '복잡계 교육법',
        body: 'Complétude에서 약 10명의 학생에게 수학과 물리화학을 가르칩니다 (초등학교부터 고등학교 졸업반까지, 고등교육은 제외). 밀도 높은 개념을 학습 가능하게 만드는 것은 부업이 아니라 연구 역량입니다.',
      },
    ],
  },
  writing: {
    label: '08 — 글',
    title: '연구 노트',
    subtitle: '위 연구를 뒷받침하는 방법, 막다른 길, 결정들에 대한 더 긴 글.',
    posts: [
      { status: '초안 — 곧 공개', title: '프랑스어 임상 NER이 범용 모델을 무너뜨리는 이유', body: '표준 NER 파이프라인이 프랑스어 종양학 보고서에서 실패하는 지점과, 이것이 DEMNE의 구조 설계에 시사하는 바에 대한 설명.' },
      { status: '초안 — 곧 공개', title: '단계별 추출 대 단일 대형 모델', body: 'LLM을 호출하기 전에 규칙, CRF, 미세조정된 Transformer를 거쳐 개체를 라우팅해야 하는 이유와, 잘못했을 때의 대가.' },
    ],
  },
  contact: {
    title: '임상 NLP, 생물의학 AI, 또는 박사과정 공동연구에 대해 이야기해 봅시다.',
    directLabel: '직접 연락',
    elsewhereLabel: '다른 곳',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: '자체 하이브리드 파이프라인으로 제작됨',
  },
};

const ru: Dictionary = {
  htmlLang: 'ru',
  meta: {
    title: 'Clément Longeac — клинический NLP и биомедицинский ИИ',
    description:
      'Исследования в области клинического NLP и биомедицинского ИИ в ESIEE Paris, на пути к докторантуре.',
  },
  nav: {
    about: 'Обо мне',
    research: 'Исследования',
    experience: 'Опыт',
    publications: 'Публикации',
    writing: 'Статьи',
    contact: 'Контакты',
    langSearchPlaceholder: 'Поиск языка…',
    langSearchNoResults: 'Язык не найден',
    themeToggleLabel: 'Переключить тему',
    menuToggleLabel: 'Открыть меню',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Извлекаю биомаркеры из клинического текста ',
    h1Accent: 'не пробуждая GPU',
    h1Post: '.',
    sub: 'Я Clément Longeac. Я работаю над DEMNE — фреймворком маршрутизации, который для каждого типа сущности решает, что является честным инструментом для задачи: регулярное выражение, CRF, трансформер или LLM. Первый результат: 93,7% клинических сущностей извлечено без GPU, F1 = 0,941 на 300 заметках AP-HP.',
    ctaResearch: 'Смотреть исследование',
    ctaCV: 'Скачать резюме',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, живая схема',
  },
  about: {
    label: '01 — Обо мне',
    title: 'От репетиторства по математике до моделирования опухолевых маркеров',
    p1: 'Я студент четвёртого курса ESIEE Paris, специализация Data Science & AI, обучаюсь по программе Tremplin Recherche школы — программе для студентов, нацеленных на докторантуру, а не на стандартную стажировку в индустрии.',
    p2: 'Моя работа сосредоточена на том, чтобы сделать неструктурированный клинический текст пригодным для исследований: извлечение биомаркеров, информации о стадировании и деталей лечения, скрытых во французских онкологических заключениях, где универсальные инструменты NLP систематически терпят неудачу из-за специфической лексики и структуры документов.',
    p3: 'Параллельно с учёбой я преподаю математику и физику-химию через Complétude, а также готовлю заявки на промышленную докторантуру CIFRE в области биомедицинского ИИ в Сорбоннском университете.',
    visionLine:
      'В долгосрочной перспективе именно эта дисциплина — извлечение надёжной структуры из хаотичного, высокорискового текста — привлекает меня к исследованиям безопасности ИИ: построению и оценке world model через AMI Labs и программу Anthropic Fellows. (Черновая строка — замените на свою окончательную формулировку.)',
    facts: [
      { dt: 'Учебное заведение', dd: 'ESIEE Paris' },
      { dt: 'Программа', dd: 'Data Science & AI (DSIA)' },
      { dt: 'Трек', dd: 'Tremplin Recherche' },
      { dt: 'Следующий шаг', dd: 'Докторантура, биомедицинский ИИ — Сорбонна' },
      { dt: 'Языки', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Исследования',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Гибридный конвейер распознавания именованных сущностей для французского онкологического клинического текста.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Клинический NER · французские онкологические корпуса',
    p1: 'Стандартные модели NER сильно проигрывают на французском клиническом тексте: плотные сокращения, несогласованное форматирование между больничными системами и терминология биомаркеров, почти не встречающаяся в общих обучающих данных. DEMNE решает эту проблему с помощью поэтапного конвейера вместо единой модели — каждый этап делает то, что умеет лучше всего, и переходит к более тяжёлой модели только при необходимости.',
    p2: 'Система дообучена на DrBERT-7GB на трёх различных французских онкологических корпусах и ориентирована на семь приоритетных типов сущностей-биомаркеров, используемых в отчётах, значимых для лечения.',
    tags: ['Клинический NLP', 'CRF', 'Transformers', 'DrBERT-7GB', 'Французская онкология'],
    viewRepo: 'Смотреть репозиторий',
    readMethodology: 'Читать методологию',
    pipeline: [
      { num: '01', title: 'Этап на основе правил', body: 'Сопоставление по регулярным выражениям и словарям недорого улавливает сущности с высокой достоверностью и низкой неоднозначностью — даты, дозировки, стандартные сокращения биомаркеров.' },
      { num: '02', title: 'Слой CRF', body: 'Условное случайное поле моделирует последовательную структуру, которую упускают правила, используя локальный контекст для разрешения неоднозначных участков.' },
      { num: '03', title: 'Извлечение с помощью трансформера', body: 'DrBERT-7GB, дообученная на трёх онкологических корпусах, обрабатывает сущности, требующие настоящего семантического и предметного понимания.' },
      { num: '04', title: 'Арбитраж с помощью LLM', body: 'Оставшиеся конфликты и пограничные случаи направляются на этап LLM для окончательного устранения неоднозначности перед выводом.' },
    ],
    aiAct: {
      title: 'Соответствие регулированию — EU AI Act',
      body: 'Извлечение клинических сущностей из записей пациентов однозначно попадает в категорию высокого риска согласно EU AI Act. Поэтапная архитектура DEMNE учитывает статьи 12 и 14 с самого начала, а не добавляет их постфактум.',
      articles: [
        { code: 'Ст. 12', label: 'Ведение записей', desc: 'Каждое решение об извлечении можно отследить до этапа (правила, CRF, трансформер или LLM) и оценки достоверности, которая его породила, что позволяет автоматически вести журнал аудита.' },
        { code: 'Ст. 14', label: 'Контроль человеком', desc: 'Результаты арбитража LLM помечаются для проверки клиницистом, а не принимаются молча, что сохраняет участие человека в неоднозначных случаях.' },
      ],
    },
  },
  metrics: {
    label: 'Результаты',
    title: 'Что даёт поэтапный подход',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'Средний F1 — внешняя валидация' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'Извлечение без GPU' },
      { value: 300, suffix: '', color: 'text', label: 'Проверенные клинические записи AP-HP' },
    ],
  },
  experience: {
    label: '03 — Опыт',
    title: 'Где проходила работа до сих пор',
    currentLabel: 'Текущий',
    items: [
      { current: true, date: '2025 — настоящее время', title: 'Научный ассистент, Tremplin Recherche', org: 'ESIEE Paris', body: 'Разработка DEMNE, гибридного конвейера клинического NER для французского онкологического текста, в качестве основного проекта программы Tremplin Recherche перед подачей заявок в докторантуру.' },
      { current: true, date: '2026 — настоящее время', title: 'Основатель и Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Разработка платформы, которая даёт пациентам с черепно-мозговыми травмами и их эрготерапевтам структурированный способ сравнивать цифровые инструменты когнитивной компенсации. Проект начался как прототип на Python/Streamlit на хакатоне SN@SU (Сорбоннский университет, совместно с Flor Sanchez-Luizard, эрготерапевтом из UEROS L\'ADAPT Иль-де-Франс); сейчас на стадии планирования продакшн-версии (FastAPI, PostgreSQL, Next.js) с хостингом, соответствующим HDS/RGPD, и семантическим поисковым движком для клинического сопоставления.' },
      { date: '2024 — 2027', title: 'Студент-инженер — Data Science & AI', org: 'ESIEE Paris', body: 'Студент четвёртого курса пятилетней инженерной программы ESIEE Paris, специализация Data Science & AI (DSIA).' },
      { date: '2025', title: 'Инженер-стажёр, отдел GRADES', org: 'Synchrotron SOLEIL', body: 'Разработка autopkgtest-скриптов на OpenCL для проверки совместимости с GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) на инфраструктуре Debian/ROCm через GitLab Salsa.' },
      { date: '2022 — настоящее время', title: 'Репетитор по точным наукам', org: 'Complétude', body: 'Преподавание математики и физики-химии примерно десяти ученикам, от начальной школы до выпускного класса лицея, параллельно с инженерной учёбой.' },
    ],
  },
  publications: {
    label: '04 — Публикации',
    title: 'Публикации и исследования',
    subtitle: 'Письменная фиксация работы над DEMNE по мере продвижения к публикации.',
    status: 'В подготовке',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. и др.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Рукопись, подробно описывающая каскадную структуру DEMNE, пять метрик характеризации корпуса, используемых для выбора парадигмы, и результаты калибровки решётчатого поиска на трёх французских онкологических корпусах.',
  },
  projects: {
    label: '05 — Избранные проекты',
    title: 'Избранные проекты',
    subtitle:
      'Помимо DEMNE — инструменты, созданные от начала до конца для хакатона и учебных проектов.',
    items: [
      {
        date: 'Июнь 2026',
        title: 'NeuroStep',
        description:
          'Цифровой каталог инструментов и приложений когнитивной компенсации для людей с черепно-мозговыми травмами и опухолями — помощь в общении, памяти и планировании. Создан для хакатона SN@SU, с интерфейсом на Streamlit поверх хранилища на основе JSON.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Дек. 2025',
        title: 'Панель качества воздуха',
        description:
          'Интерактивная панель, реконструирующая 15 лет фонового загрязнения воздуха во Франции (2000–2015) на основе данных INERIS/Zenodo — хранение в SQLite, графики Plotly и тепловая карта Leaflet. Создана вместе с напарником по команде William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Технический стек',
    title: 'Технический стек',
    subtitle: 'Инструменты, сгруппированные по значимости для работы выше — не общий список.',
    categories: [
      {
        title: 'Клинический NLP и биомедицинский ИИ',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Системы и инфраструктура',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Инструменты для исследований',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Языки',
    languages: [
      { flag: '🇫🇷', level: 'Родной' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Средний уровень' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'В процессе изучения' },
    ],
  },
  areasOfFocus: {
    label: '07 — Направления работы',
    title: 'Направления работы',
    items: [
      {
        title: 'Клиническое распознавание именованных сущностей',
        body: 'Извлечение биомаркеров, стадии и данных о лечении из неструктурированных французских онкологических текстов — там, где общий NLP даёт сбой и начинается адаптация к предметной области.',
      },
      {
        title: 'Бережливый и интерпретируемый ИИ',
        body: 'Проектирование систем, которые направляют задачу к наименее непрозрачному уровню, удовлетворяющему порогам производительности. Соответствие Закону ЕС об ИИ как ограничение проектирования, а не запоздалая мысль.',
      },
      {
        title: 'Мультимодальное биомедицинское рассуждение',
        body: 'Долгосрочное направление: объединение клинического текста, изображений и геномики в моделях, рассуждающих между модальностями. Подход world models, применённый к медицине.',
      },
      {
        title: 'Педагогика сложных систем',
        body: 'Преподавание математики и физики-химии примерно десяти ученикам в Complétude — от начальной школы до выпускного класса лицея (без высшего образования). Сделать плотные концепции доступными для понимания — это исследовательский навык, а не подработка.',
      },
    ],
  },
  writing: {
    label: '08 — Статьи',
    title: 'Заметки из исследования',
    subtitle: 'Более развёрнутые материалы о методах, тупиках и решениях, стоящих за работой выше.',
    posts: [
      { status: 'Черновик — скоро', title: 'Почему французский клинический NER ломает универсальные модели', body: 'Обзор того, где стандартные конвейеры NER терпят неудачу на французских онкологических отчётах, и что это означает для структуры DEMNE.' },
      { status: 'Черновик — скоро', title: 'Поэтапное извлечение против одной большой модели', body: 'Аргументы в пользу направления сущностей через правила, CRF и дообученный трансформер, прежде чем вообще вызывать LLM — и цена ошибки в этом решении.' },
    ],
  },
  contact: {
    title: 'Давайте обсудим клинический NLP, биомедицинский ИИ или сотрудничество в рамках докторантуры.',
    directLabel: 'Напрямую',
    elsewhereLabel: 'В других местах',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Создано с помощью собственного гибридного конвейера',
  },
};

const ar: Dictionary = {
  htmlLang: 'ar',
  meta: {
    title: 'Clément Longeac — NLP سريري وذكاء اصطناعي طبي',
    description:
      'أبحاث في معالجة اللغة السريرية والذكاء الاصطناعي الطبي في ESIEE Paris، في طريقي لنيل الدكتوراه.',
  },
  nav: {
    about: 'نبذة عني',
    research: 'الأبحاث',
    experience: 'الخبرة',
    publications: 'المنشورات',
    writing: 'مقالات',
    contact: 'تواصل',
    langSearchPlaceholder: 'ابحث عن لغة…',
    langSearchNoResults: 'لا توجد لغة مطابقة',
    themeToggleLabel: 'تبديل المظهر',
    menuToggleLabel: 'فتح القائمة',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'أستخرج المؤشرات الحيوية من النص السريري ',
    h1Accent: 'دون إيقاظ وحدة معالجة الرسومات',
    h1Post: '.',
    sub: 'أنا كليمون لونجياك. أعمل على DEMNE، إطار عمل للتوجيه يقرر — لكل نوع من الكيانات — ما إذا كانت الأداة الصادقة للمهمة هي تعبير نمطي (regex)، أو CRF، أو محول (transformer)، أو نموذج لغوي كبير (LLM). النتيجة الأولى: استخراج 93.7% من الكيانات السريرية دون استخدام وحدة معالجة الرسومات، بدقة F1 = 0.941 على 300 ملاحظة من AP-HP.',
    ctaResearch: 'استعرض الأبحاث',
    ctaCV: 'تحميل السيرة الذاتية',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM، مخطط حي',
  },
  about: {
    label: '01 — نبذة عني',
    title: 'من تدريس الرياضيات إلى نمذجة العلامات الحيوية للأورام',
    p1: 'أنا طالب في السنة الرابعة في ESIEE Paris، تخصص علوم البيانات والذكاء الاصطناعي، ومسجل في مسار Tremplin Recherche بالمدرسة — وهو برنامج مصمم للطلاب المتجهين نحو البحث الدكتوراهي بدلًا من التدريب الصناعي القياسي.',
    p2: 'يتمحور عملي حول جعل النص السريري غير المنظم قابلًا للاستخدام في البحث: استخراج العلامات الحيوية ومعلومات التدريج وتفاصيل العلاج المدفونة في تقارير الأورام الفرنسية، حيث تفشل أدوات معالجة اللغة الطبيعية العامة باستمرار أمام المفردات وبنية الوثائق الخاصة بهذا المجال.',
    p3: 'إلى جانب دراستي، أُدرّس الرياضيات والفيزياء والكيمياء عبر Complétude، وأُحضّر طلبات الالتحاق ببرنامج دكتوراه صناعي CIFRE في الذكاء الاصطناعي الحيوي الطبي بجامعة السوربون.',
    visionLine:
      'على المدى الطويل، هذا الانضباط نفسه — استخلاص بنية موثوقة من نص فوضوي وعالي المخاطر — هو ما يجذبني نحو أبحاث سلامة الذكاء الاصطناعي: بناء وتقييم نماذج العالم (world models) عبر AMI Labs وبرنامج Anthropic Fellows. (هذه جملة أولية — استبدلها بصياغتك النهائية.)',
    facts: [
      { dt: 'المؤسسة', dd: 'ESIEE Paris' },
      { dt: 'البرنامج', dd: 'علوم البيانات والذكاء الاصطناعي (DSIA)' },
      { dt: 'المسار', dd: 'Tremplin Recherche' },
      { dt: 'الخطوة التالية', dd: 'دكتوراه، الذكاء الاصطناعي الحيوي الطبي — السوربون' },
      { dt: 'اللغات', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — الأبحاث',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'خط أنابيب هجين للتعرف على الكيانات المسماة للنصوص السريرية الخاصة بالأورام باللغة الفرنسية.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'التعرف على الكيانات السريرية · مجموعات نصوص الأورام الفرنسية',
    p1: 'تفشل نماذج التعرف على الكيانات الجاهزة بشكل كبير في النص السريري الفرنسي: اختصارات كثيفة، تنسيق غير متسق بين أنظمة المستشفيات، ومصطلحات علامات حيوية نادرة الظهور في بيانات التدريب العامة. يعالج DEMNE هذا عبر خط أنابيب متدرج بدلًا من نموذج واحد — كل مرحلة تتولى ما تُجيده فعلًا، ولا تصعّد إلى نموذج أثقل إلا عند الضرورة.',
    p2: 'تم ضبط النظام على DrBERT-7GB عبر ثلاث مجموعات نصوص أورام فرنسية مختلفة، ويستهدف سبعة أنواع كيانات علامات حيوية ذات أولوية تُستخدم في التقارير ذات الصلة بالعلاج.',
    tags: ['معالجة اللغة السريرية', 'CRF', 'المحولات', 'DrBERT-7GB', 'أورام فرنسية'],
    viewRepo: 'عرض المستودع',
    readMethodology: 'قراءة المنهجية',
    pipeline: [
      { num: '01', title: 'مرحلة قائمة على القواعد', body: 'تطابق التعبيرات النمطية والمعاجم يلتقط بتكلفة منخفضة الكيانات عالية الثقة ومنخفضة الغموض — التواريخ، الجرعات، اختصارات العلامات الحيوية القياسية.' },
      { num: '02', title: 'طبقة CRF', body: 'يُنمذج حقل عشوائي شرطي البنية التسلسلية التي تفوتها القواعد، مستخدمًا السياق المحلي لحل المقاطع الغامضة.' },
      { num: '03', title: 'الاستخراج عبر المحولات', body: 'يتولى DrBERT-7GB، المضبوط عبر ثلاث مجموعات نصوص أورام، الكيانات التي تتطلب فهمًا دلاليًا ومجاليًا حقيقيًا.' },
      { num: '04', title: 'التحكيم عبر النموذج اللغوي الكبير', body: 'تُوجَّه التعارضات المتبقية والحالات الحدية إلى مرحلة نموذج لغوي كبير لإزالة الغموض النهائي قبل الإخراج.' },
    ],
    aiAct: {
      title: 'التوافق التنظيمي — قانون الذكاء الاصطناعي الأوروبي',
      body: 'يقع استخراج الكيانات السريرية من سجلات المرضى بوضوح ضمن فئة المخاطر العالية في قانون الذكاء الاصطناعي الأوروبي. يأخذ التصميم المتدرج لـDEMNE المادتين 12 و14 بعين الاعتبار منذ البداية، وليس كإضافة لاحقة.',
      articles: [
        { code: 'المادة 12', label: 'حفظ السجلات', desc: 'يمكن تتبع كل قرار استخراج حتى المرحلة (القواعد، CRF، المحولات، أو النموذج اللغوي الكبير) ودرجة الثقة التي أنتجته، مما يتيح تسجيلًا تلقائيًا للتدقيق.' },
        { code: 'المادة 14', label: 'الرقابة البشرية', desc: 'تُوسم مخرجات تحكيم النموذج اللغوي الكبير لمراجعة الطبيب بدلًا من قبولها بصمت، مما يُبقي الإنسان جزءًا من الحلقة في الحالات الغامضة.' },
      ],
    },
  },
  metrics: {
    label: 'النتائج',
    title: 'ما يقدّمه النهج المتدرج',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'متوسط F1 — تحقق خارجي' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'استخراج بدون GPU' },
      { value: 300, suffix: '', color: 'text', label: 'سجلات AP-HP السريرية الموثقة' },
    ],
  },
  experience: {
    label: '03 — الخبرة',
    title: 'أين جرى العمل حتى الآن',
    currentLabel: 'جارٍ',
    items: [
      { current: true, date: '2025 — حتى الآن', title: 'مساعد باحث، Tremplin Recherche', org: 'ESIEE Paris', body: 'تطوير DEMNE، خط أنابيب هجين للتعرف على الكيانات السريرية للنص الفرنسي الخاص بالأورام، كمشروع أساسي لمسار Tremplin Recherche استعدادًا لطلبات الدكتوراه.' },
      { current: true, date: '2026 — حتى الآن', title: 'مؤسس ورئيس المنتج، NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'بناء منصة تمنح مرضى الإصابات الدماغية ومعالجيهم الوظيفيين طريقة منظمة لمقارنة الأدوات الرقمية للتعويض المعرفي. وُلد المشروع كنموذج أولي بلغة Python وStreamlit في هاكاثون SN@SU (جامعة السوربون، بالتعاون مع Flor Sanchez-Luizard، معالجة وظيفية في UEROS L\'ADAPT إيل دو فرانس)؛ وهو الآن في مرحلة التخطيط لإعادة بناء إنتاجية (FastAPI، PostgreSQL، Next.js) باستضافة متوافقة مع معايير HDS/RGPD ومحرك بحث دلالي لمطابقة الأدوات السريرية.' },
      { date: '2024 — 2027', title: 'طالب هندسة — علوم البيانات والذكاء الاصطناعي', org: 'ESIEE Paris', body: 'طالب في السنة الرابعة من برنامج الهندسة الخماسي في ESIEE Paris، تخصص علوم البيانات والذكاء الاصطناعي (DSIA).' },
      { date: '2025', title: 'متدرب هندسي، قسم GRADES', org: 'Synchrotron SOLEIL', body: 'تطوير سكريبتات autopkgtest باستخدام OpenCL لاختبار توافق معالجات AMD الرسومية (pyopencl، nabu، ufo-filters، pyvkfft) على بنية Debian/ROCm عبر GitLab Salsa.' },
      { date: '2022 — حتى الآن', title: 'مدرّس خصوصي في العلوم', org: 'Complétude', body: 'تدريس الرياضيات والفيزياء والكيمياء لنحو عشرة طلاب، من المرحلة الابتدائية حتى الصف الأخير من الثانوية، إلى جانب دراستي الهندسية.' },
    ],
  },
  publications: {
    label: '04 — المنشورات',
    title: 'المنشورات والأبحاث',
    subtitle: 'السجل المكتوب لعمل DEMNE أثناء تقدمه نحو النشر.',
    status: 'قيد الإعداد',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. وآخرون',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'مخطوطة تفصّل إطار عمل DEMNE المتتالي، ومقاييس توصيف المجموعات النصية الخمسة المستخدمة لاختيار النموذج، ونتائج معايرة البحث الشبكي عبر ثلاث مجموعات نصوص أورام فرنسية.',
  },
  projects: {
    label: '05 — مشاريع مختارة',
    title: 'مشاريع مختارة',
    subtitle: 'إلى جانب DEMNE — أدوات مبنية من الألف إلى الياء من أجل هاكاثون ومشاريع دراسية.',
    items: [
      {
        date: 'يونيو 2026',
        title: 'NeuroStep',
        description:
          'كتالوج رقمي لأدوات وتطبيقات التعويض المعرفي لذوي الإصابات الدماغية والأورام — دعم التواصل والذاكرة والتخطيط. صُمم من أجل هاكاثون SN@SU، بواجهة Streamlit فوق تخزين بصيغة JSON.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'ديسمبر 2025',
        title: 'لوحة جودة الهواء',
        description:
          'لوحة تحكم تفاعلية تعيد بناء 15 عامًا من التلوث الجوي الخلفي في فرنسا (2000–2015) اعتمادًا على بيانات INERIS/Zenodo — تخزين بواسطة SQLite، رسوم بيانية بواسطة Plotly، وخريطة حرارية بواسطة Leaflet. أُنجزت مع زميل الفريق William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — الحزمة التقنية',
    title: 'الحزمة التقنية',
    subtitle: 'أدوات مصنّفة حسب صلتها بالعمل أعلاه — وليست قائمة عامة.',
    categories: [
      {
        title: 'معالجة اللغة السريرية والذكاء الاصطناعي الحيوي الطبي',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'الأنظمة والبنية التحتية',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'أدوات البحث',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'اللغات',
    languages: [
      { flag: '🇫🇷', level: 'اللغة الأم' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'متوسط' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'قيد التعلم' },
    ],
  },
  areasOfFocus: {
    label: '07 — مجالات التركيز',
    title: 'مجالات التركيز',
    items: [
      {
        title: 'التعرف على الكيانات المسماة السريرية',
        body: 'استخراج المؤشرات الحيوية ومرحلة المرض وبيانات العلاج من نصوص الأورام الفرنسية غير المهيكلة — حيث تفشل معالجة اللغة الطبيعية العامة ويبدأ التكيف مع المجال.',
      },
      {
        title: 'ذكاء اصطناعي مقتصد وقابل للتفسير',
        body: 'تصميم أنظمة توجّه المهمة إلى المستوى الأقل غموضًا الذي يحقق عتبات الأداء المطلوبة. الامتثال لقانون الذكاء الاصطناعي الأوروبي كقيد تصميمي، لا كفكرة لاحقة.',
      },
      {
        title: 'الاستدلال الحيوي الطبي متعدد الوسائط',
        body: 'التوجه طويل المدى: توحيد النص السريري والتصوير والجينوم في نماذج تستدل عبر الوسائط المختلفة — تطبيق منهج نماذج العالم على الطب.',
      },
      {
        title: 'تربية الأنظمة المعقدة',
        body: 'تدريس الرياضيات والفيزياء والكيمياء لنحو عشرة طلاب في Complétude، من المرحلة الابتدائية حتى الصف الأخير من الثانوية (دون التعليم العالي). جعل المفاهيم الكثيفة قابلة للتعلّم مهارة بحثية، لا عمل جانبي.',
      },
    ],
  },
  writing: {
    label: '08 — مقالات',
    title: 'ملاحظات من البحث',
    subtitle: 'مقالات أطول حول الأساليب والطرق المسدودة والقرارات التي شكّلت العمل أعلاه.',
    posts: [
      { status: 'مسودة — قريبًا', title: 'لماذا يُفشل التعرف على الكيانات السريرية الفرنسية النماذج العامة', body: 'جولة على النقاط التي تفشل فيها خطوط أنابيب التعرف على الكيانات القياسية في تقارير الأورام الفرنسية، وما يعنيه ذلك لبنية DEMNE.' },
      { status: 'مسودة — قريبًا', title: 'الاستخراج المتدرج مقابل نموذج كبير واحد', body: 'الحجة وراء توجيه الكيانات عبر القواعد وCRF ومحوّل مضبوط قبل استدعاء أي نموذج لغوي كبير — وما تكلفة الخطأ في ذلك.' },
    ],
  },
  contact: {
    title: 'لنتحدث عن معالجة اللغة السريرية، أو الذكاء الاصطناعي الحيوي الطبي، أو تعاون بحثي دكتوراهي.',
    directLabel: 'مباشر',
    elsewhereLabel: 'في أماكن أخرى',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'مبني بخط أنابيب هجين خاص به',
  },
};

const hi: Dictionary = {
  htmlLang: 'hi',
  meta: {
    title: 'Clément Longeac — क्लिनिकल NLP और बायोमेडिकल AI',
    description:
      'ESIEE Paris में क्लिनिकल NLP और बायोमेडिकल AI पर शोध, पीएचडी की दिशा में अग्रसर।',
  },
  nav: {
    about: 'मेरे बारे में',
    research: 'अनुसंधान',
    experience: 'अनुभव',
    publications: 'प्रकाशन',
    writing: 'लेख',
    contact: 'संपर्क',
    langSearchPlaceholder: 'भाषा खोजें…',
    langSearchNoResults: 'कोई भाषा नहीं मिली',
    themeToggleLabel: 'थीम बदलें',
    menuToggleLabel: 'मेनू खोलें',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'क्लिनिकल टेक्स्ट से बायोमार्कर निकालना, ',
    h1Accent: 'बिना GPU जगाए',
    h1Post: '।',
    sub: 'मैं क्लेमों लोंज्याक हूँ। मैं DEMNE पर काम कर रहा हूँ, एक रूटिंग फ्रेमवर्क जो हर एंटिटी टाइप के लिए तय करता है — कि क्या रेगेक्स, CRF, ट्रांसफॉर्मर, या LLM उस काम के लिए ईमानदार टूल है। पहला परिणाम: बिना GPU के 93.7% क्लिनिकल एंटिटी निकाली गईं, 300 AP-HP नोट्स पर F1 = 0.941।',
    ctaResearch: 'अनुसंधान देखें',
    ctaCV: 'सीवी डाउनलोड करें',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, लाइव योजनाबद्ध चित्र',
  },
  about: {
    label: '01 — मेरे बारे में',
    title: 'गणित पढ़ाने से ट्यूमर मार्करों के मॉडलिंग तक',
    p1: 'मैं ESIEE Paris में चौथे वर्ष का छात्र हूँ, डेटा साइंस और एआई में विशेषज्ञता के साथ, और स्कूल के Tremplin Recherche ट्रैक में नामांकित हूँ — यह कार्यक्रम मानक इंडस्ट्री इंटर्नशिप के बजाय डॉक्टरेट शोध की ओर बढ़ रहे छात्रों के लिए बनाया गया है।',
    p2: 'मेरा काम असंरचित क्लिनिकल टेक्स्ट को शोध के लिए उपयोगी बनाने पर केंद्रित है: फ्रेंच ऑन्कोलॉजी रिपोर्टों में छिपे बायोमार्कर, स्टेजिंग जानकारी और उपचार विवरण निकालना, जहाँ सामान्य-उद्देश्य वाले एनएलपी उपकरण डोमेन-विशिष्ट शब्दावली और दस्तावेज़ संरचना के सामने लगातार विफल होते हैं।',
    p3: 'अपनी पढ़ाई के साथ-साथ मैं Complétude के माध्यम से गणित और भौतिकी-रसायन विज्ञान पढ़ाता हूँ, और सोरबोन विश्वविद्यालय में बायोमेडिकल एआई में CIFRE औद्योगिक पीएचडी के लिए आवेदन तैयार कर रहा हूँ।',
    visionLine:
      'दीर्घकालिक रूप से, यही अनुशासन — अव्यवस्थित, उच्च-जोखिम वाले टेक्स्ट से विश्वसनीय संरचना निकालना — मुझे एआई सुरक्षा अनुसंधान की ओर आकर्षित करता है: AMI Labs और Anthropic Fellows कार्यक्रम के माध्यम से world model बनाना और उनका मूल्यांकन करना। (यह एक मसौदा पंक्ति है — इसे अपने अंतिम शब्दों से बदलें।)',
    facts: [
      { dt: 'संस्थान', dd: 'ESIEE Paris' },
      { dt: 'कार्यक्रम', dd: 'डेटा साइंस एवं एआई (DSIA)' },
      { dt: 'ट्रैक', dd: 'Tremplin Recherche' },
      { dt: 'अगला कदम', dd: 'पीएचडी, बायोमेडिकल एआई — सोरबोन' },
      { dt: 'भाषाएँ', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — अनुसंधान',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'फ्रेंच ऑन्कोलॉजी क्लिनिकल टेक्स्ट के लिए एक हाइब्रिड नेम्ड-एंटिटी-रिकग्निशन पाइपलाइन।',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'क्लिनिकल एनईआर · फ्रेंच ऑन्कोलॉजी कॉर्पस',
    p1: 'रेडीमेड एनईआर मॉडल फ्रेंच क्लिनिकल टेक्स्ट पर बुरी तरह विफल होते हैं: घने संक्षिप्ताक्षर, अस्पताल प्रणालियों के बीच असंगत फॉर्मेटिंग, और बायोमार्कर शब्दावली जो सामान्य प्रशिक्षण डेटा में मुश्किल से दिखाई देती है। DEMNE इसे एक ही मॉडल के बजाय एक चरणबद्ध पाइपलाइन से हल करता है — हर चरण वही करता है जो उसमें सबसे अच्छा होता है, और आवश्यकता पड़ने पर ही भारी मॉडल की ओर बढ़ता है।',
    p2: 'यह सिस्टम तीन अलग-अलग फ्रेंच ऑन्कोलॉजी कॉर्पस पर DrBERT-7GB को फाइन-ट्यून करता है, और उपचार-संबंधी रिपोर्टिंग में इस्तेमाल होने वाले सात प्राथमिकता वाले बायोमार्कर एंटिटी प्रकारों को लक्षित करता है।',
    tags: ['क्लिनिकल एनएलपी', 'सीआरएफ', 'ट्रांसफॉर्मर', 'DrBERT-7GB', 'फ्रेंच ऑन्कोलॉजी'],
    viewRepo: 'रिपॉज़िटरी देखें',
    readMethodology: 'मेथडोलॉजी पढ़ें',
    pipeline: [
      { num: '01', title: 'नियम-आधारित चरण', body: 'रेगेक्स और लेक्सिकॉन मिलान कम लागत पर उच्च-विश्वास, कम-अस्पष्टता वाली एंटिटीज़ को पकड़ता है — तारीखें, खुराकें, मानक बायोमार्कर संक्षिप्ताक्षर।' },
      { num: '02', title: 'सीआरएफ परत', body: 'एक कंडीशनल रैंडम फील्ड उस अनुक्रमिक संरचना को मॉडल करता है जिसे नियम छोड़ देते हैं, अस्पष्ट खंडों को हल करने के लिए स्थानीय संदर्भ का उपयोग करते हुए।' },
      { num: '03', title: 'ट्रांसफॉर्मर एक्सट्रैक्शन', body: 'तीन ऑन्कोलॉजी कॉर्पस पर फाइन-ट्यून किया गया DrBERT-7GB उन एंटिटीज़ को संभालता है जिन्हें वास्तविक अर्थगत और डोमेन समझ की आवश्यकता होती है।' },
      { num: '04', title: 'एलएलएम मध्यस्थता', body: 'शेष टकरावों और सीमांत मामलों को आउटपुट से पहले अंतिम अस्पष्टता निवारण के लिए एलएलएम चरण में भेजा जाता है।' },
    ],
    aiAct: {
      title: 'नियामक अनुपालन — EU AI Act',
      body: 'रोगी रिकॉर्ड पर क्लिनिकल एंटिटी एक्सट्रैक्शन स्पष्ट रूप से EU AI Act की उच्च-जोखिम श्रेणी में आता है। DEMNE का चरणबद्ध डिज़ाइन शुरुआत से ही अनुच्छेद 12 और 14 को ध्यान में रखता है, बाद में जोड़े गए उपाय के रूप में नहीं।',
      articles: [
        { code: 'अनुच्छेद 12', label: 'रिकॉर्ड-कीपिंग', desc: 'हर एक्सट्रैक्शन निर्णय उस चरण (नियम, सीआरएफ, ट्रांसफॉर्मर, या एलएलएम) और विश्वास स्कोर तक ट्रेस किया जा सकता है जिसने उसे उत्पन्न किया, जिससे स्वचालित ऑडिट लॉगिंग संभव होती है।' },
        { code: 'अनुच्छेद 14', label: 'मानव निगरानी', desc: 'एलएलएम मध्यस्थता के आउटपुट को चुपचाप स्वीकार करने के बजाय क्लिनिशियन समीक्षा के लिए फ्लैग किया जाता है, जिससे अस्पष्ट मामलों में मानव की भूमिका बनी रहती है।' },
      ],
    },
  },
  metrics: {
    label: 'परिणाम',
    title: 'चरणबद्ध दृष्टिकोण से क्या मिलता है',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'औसत F1 — बाह्य सत्यापन' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'GPU-मुक्त निष्कर्षण' },
      { value: 300, suffix: '', color: 'text', label: 'सत्यापित AP-HP क्लिनिकल नोट्स' },
    ],
  },
  experience: {
    label: '03 — अनुभव',
    title: 'अब तक काम कहाँ हुआ है',
    currentLabel: 'जारी',
    items: [
      { current: true, date: '2025 — अब तक', title: 'रिसर्च असिस्टेंट, Tremplin Recherche', org: 'ESIEE Paris', body: 'फ्रेंच ऑन्कोलॉजी टेक्स्ट के लिए एक हाइब्रिड क्लिनिकल एनईआर पाइपलाइन, DEMNE का विकास, पीएचडी आवेदनों से पहले Tremplin Recherche ट्रैक की मुख्य परियोजना के रूप में।' },
      { current: true, date: '2026 — अब तक', title: 'संस्थापक और प्रोडक्ट लीड, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'एक ऐसा प्लेटफ़ॉर्म बना रहा हूँ जो मस्तिष्क-चोट वाले रोगियों और उनके ऑक्यूपेशनल थेरेपिस्ट को कॉग्निटिव कंपेंसेशन डिजिटल टूल्स की तुलना करने का एक संरचित तरीका देता है। इसकी शुरुआत सोरबोन विश्वविद्यालय के SN@SU हैकाथॉन में (UEROS L\'ADAPT इल-द-फ्रांस की ऑक्यूपेशनल थेरेपिस्ट Flor Sanchez-Luizard के साथ) एक Python/Streamlit प्रोटोटाइप के रूप में हुई; अब यह HDS/RGPD-अनुरूप होस्टिंग और क्लिनिकल मैचिंग के लिए एक सिमेंटिक सर्च इंजन के साथ एक प्रोडक्शन रीबिल्ड (FastAPI, PostgreSQL, Next.js) की योजना के चरण में है।' },
      { date: '2024 — 2027', title: 'इंजीनियरिंग छात्र — डेटा साइंस एवं एआई', org: 'ESIEE Paris', body: 'ESIEE Paris के पाँच-वर्षीय इंजीनियरिंग कार्यक्रम का चौथे वर्ष का छात्र, डेटा साइंस एवं एआई (DSIA) में विशेषज्ञता।' },
      { date: '2025', title: 'इंजीनियरिंग इंटर्न, GRADES डिवीज़न', org: 'Synchrotron SOLEIL', body: 'GitLab Salsa के माध्यम से Debian/ROCm इंफ्रास्ट्रक्चर पर AMD GPU संगतता के लिए OpenCL में autopkgtest स्क्रिप्ट (pyopencl, nabu, ufo-filters, pyvkfft) विकसित कीं।' },
      { date: '2022 — अब तक', title: 'STEM ट्यूटर', org: 'Complétude', body: 'अपनी इंजीनियरिंग पढ़ाई के साथ-साथ लगभग दस छात्रों को, प्राथमिक से लेकर बारहवीं कक्षा तक, गणित और भौतिकी-रसायन विज्ञान पढ़ाना।' },
    ],
  },
  publications: {
    label: '04 — प्रकाशन',
    title: 'प्रकाशन एवं अनुसंधान',
    subtitle: 'सबमिशन की दिशा में आगे बढ़ते हुए DEMNE कार्य का लिखित रिकॉर्ड।',
    status: 'तैयारी में',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. एवं अन्य',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'DEMNE कैस्केड फ्रेमवर्क, पैराडाइम चयन के लिए उपयोग किए गए पाँच कॉर्पस-कैरेक्टराइज़ेशन मेट्रिक्स, और तीन फ्रेंच ऑन्कोलॉजी कॉर्पस में ग्रिड-सर्च कैलिब्रेशन परिणामों का विवरण देने वाली पांडुलिपि।',
  },
  projects: {
    label: '05 — चुनिंदा प्रोजेक्ट',
    title: 'चुनिंदा प्रोजेक्ट',
    subtitle: 'DEMNE के अलावा — एक हैकाथॉन और कोर्सवर्क के लिए शुरू से अंत तक बनाए गए टूल्स।',
    items: [
      {
        date: 'जून 2026',
        title: 'NeuroStep',
        description:
          'मस्तिष्क क्षति और ट्यूमर से पीड़ित लोगों के लिए कॉग्निटिव-कम्पेंसेशन टूल्स और ऐप्स का एक डिजिटल कैटलॉग — संचार सहायता, स्मृति और योजना बनाने में मदद। SN@SU हैकाथॉन के लिए बनाया गया, Streamlit इंटरफ़ेस और JSON-आधारित स्टोर के साथ।',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'दिसंबर 2025',
        title: 'वायु गुणवत्ता डैशबोर्ड',
        description:
          'INERIS/Zenodo डेटा के आधार पर फ्रांस में 2000–2015 के 15 वर्षों के पृष्ठभूमि वायु प्रदूषण को पुनर्निर्मित करने वाला एक इंटरैक्टिव डैशबोर्ड — SQLite स्टोरेज, Plotly चार्ट्स और Leaflet हीटमैप। टीममेट William Zee के साथ बनाया गया।',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — तकनीकी स्टैक',
    title: 'तकनीकी स्टैक',
    subtitle: 'ऊपर के काम से प्रासंगिकता के अनुसार समूहीकृत टूल्स — कोई सामान्य सूची नहीं।',
    categories: [
      {
        title: 'क्लिनिकल एनएलपी और बायोमेडिकल एआई',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'सिस्टम और इंफ्रास्ट्रक्चर',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'शोध उपकरण',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'भाषाएं',
    languages: [
      { flag: '🇫🇷', level: 'मातृभाषा' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'मध्यम' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'सीखने की प्रक्रिया में' },
    ],
  },
  areasOfFocus: {
    label: '07 — फ़ोकस क्षेत्र',
    title: 'फ़ोकस क्षेत्र',
    items: [
      {
        title: 'क्लिनिकल नेम्ड एंटिटी रिकग्निशन',
        body: 'असंरचित फ्रेंच ऑन्कोलॉजी टेक्स्ट से बायोमार्कर, स्टेजिंग और उपचार डेटा निकालना — वह बिंदु जहां सामान्य-प्रयोजन एनएलपी विफल होता है और डोमेन अनुकूलन शुरू होता है।',
      },
      {
        title: 'किफायती और व्याख्या-योग्य एआई',
        body: 'ऐसे सिस्टम डिज़ाइन करना जो प्रदर्शन सीमा को पूरा करने वाले सबसे कम अपारदर्शी स्तर की ओर रूट करते हैं। EU AI Act का अनुपालन एक डिज़ाइन बाधा के रूप में, न कि बाद में सोचे गए विचार के रूप में।',
      },
      {
        title: 'मल्टीमॉडल बायोमेडिकल रीज़निंग',
        body: 'दीर्घकालिक दिशा: क्लिनिकल टेक्स्ट, इमेजिंग और जीनोमिक्स को ऐसे मॉडलों में एकीकृत करना जो मोडैलिटी के पार तर्क करते हैं — चिकित्सा पर लागू वर्ल्ड-मॉडल्स दिशा।',
      },
      {
        title: 'जटिल प्रणालियों की शिक्षाशास्त्र',
        body: 'Complétude में लगभग दस छात्रों को गणित और भौतिकी-रसायन शास्त्र पढ़ाना, प्राथमिक से लेकर बारहवीं कक्षा तक (उच्च शिक्षा को छोड़कर)। सघन अवधारणाओं को सीखने योग्य बनाना एक शोध कौशल है, कोई साइड-गिग नहीं।',
      },
    ],
  },
  writing: {
    label: '08 — लेख',
    title: 'अनुसंधान से नोट्स',
    subtitle: 'ऊपर दिए गए कार्य के पीछे की विधियों, गतिरोधों और निर्णयों पर लंबे लेख।',
    posts: [
      { status: 'ड्राफ्ट — जल्द आ रहा है', title: 'फ्रेंच क्लिनिकल एनईआर सामान्य-उद्देश्य मॉडलों को क्यों तोड़ देता है', body: 'यह एक विश्लेषण है कि मानक एनईआर पाइपलाइन फ्रेंच ऑन्कोलॉजी रिपोर्टों पर कहाँ विफल होते हैं, और इसका DEMNE की संरचना के लिए क्या मतलब है।' },
      { status: 'ड्राफ्ट — जल्द आ रहा है', title: 'चरणबद्ध एक्सट्रैक्शन बनाम एकल बड़ा मॉडल', body: 'एलएलएम को कॉल करने से पहले नियमों, एक सीआरएफ और एक फाइन-ट्यून किए गए ट्रांसफॉर्मर के माध्यम से एंटिटीज़ को रूट करने का तर्क — और गलत होने पर इसकी कीमत।' },
    ],
  },
  contact: {
    title: 'आइए क्लिनिकल एनएलपी, बायोमेडिकल एआई, या पीएचडी सहयोग पर बात करें।',
    directLabel: 'सीधा',
    elsewhereLabel: 'अन्यत्र',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'अपने खुद के हाइब्रिड पाइपलाइन से निर्मित',
  },
};

const tr: Dictionary = {
  htmlLang: 'tr',
  meta: {
    title: 'Clément Longeac — Klinik NLP ve Biyomedikal AI',
    description:
      'ESIEE Paris\'te klinik NLP ve biyomedikal AI araştırması, doktoraya giden yolda.',
  },
  nav: {
    about: 'Hakkımda',
    research: 'Araştırma',
    experience: 'Deneyim',
    publications: 'Yayınlar',
    writing: 'Yazılar',
    contact: 'İletişim',
    langSearchPlaceholder: 'Bir dil ara…',
    langSearchNoResults: 'Eşleşen dil bulunamadı',
    themeToggleLabel: 'Temayı değiştir',
    menuToggleLabel: 'Menüyü aç',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: "GPU'yu uyandırmadan ",
    h1Accent: 'klinik metinden biyobelirteç çıkarıyorum',
    h1Post: '.',
    sub: "Ben Clément Longeac. DEMNE üzerinde çalışıyorum; her varlık türü için regex, CRF, transformer veya LLM'den hangisinin görev için dürüst araç olduğuna karar veren bir yönlendirme çerçevesi. İlk sonuç: klinik varlıkların %93,7'si GPU kullanılmadan çıkarıldı, 300 AP-HP notunda F1 = 0,941.",
    ctaResearch: 'Araştırmayı gör',
    ctaCV: 'Özgeçmişi indir',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, canlı şema',
  },
  about: {
    label: '01 — Hakkımda',
    title: 'Matematik özel dersinden tümör belirteçlerini modellemeye',
    p1: 'ESIEE Paris\'te dördüncü sınıf öğrencisiyim, Veri Bilimi & Yapay Zeka uzmanlığındayım ve okulun Tremplin Recherche programına kayıtlıyım — bu program, standart bir sektör stajı yerine doktora araştırmasına yönelen öğrenciler için tasarlanmıştır.',
    p2: 'Çalışmalarım, yapılandırılmamış klinik metni araştırma için kullanılabilir hale getirmeye odaklanıyor: genel amaçlı NLP araçlarının bu alana özgü kelime dağarcığı ve belge yapısı karşısında sürekli başarısız olduğu Fransız onkoloji raporlarında gizli biyobelirteçleri, evreleme bilgilerini ve tedavi detaylarını çıkarmak.',
    p3: 'Çalışmalarımın yanı sıra Complétude aracılığıyla matematik ve fizik-kimya dersleri veriyor, Sorbonne Üniversitesi\'nde biyomedikal yapay zeka alanında bir CIFRE endüstriyel doktora başvurusu hazırlıyorum.',
    visionLine:
      'Uzun vadede, dağınık ve yüksek riskli metinden güvenilir yapı çıkarma disiplini, beni yapay zeka güvenliği araştırmalarına çekiyor: AMI Labs ve Anthropic Fellows Programı aracılığıyla world model inşa etmek ve değerlendirmek. (Bu taslak bir satır — kendi nihai ifadenle değiştir.)',
    facts: [
      { dt: 'Kurum', dd: 'ESIEE Paris' },
      { dt: 'Program', dd: 'Veri Bilimi & Yapay Zeka (DSIA)' },
      { dt: 'Program türü', dd: 'Tremplin Recherche' },
      { dt: 'Sıradaki adım', dd: 'Doktora, biyomedikal yapay zeka — Sorbonne' },
      { dt: 'Diller', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Araştırma',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Fransızca onkoloji klinik metni için hibrit bir adlandırılmış varlık tanıma hattı.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Klinik NER · Fransızca onkoloji derlemleri',
    p1: 'Hazır NER modelleri Fransızca klinik metinde ciddi şekilde başarısız olur: yoğun kısaltmalar, hastane sistemleri arasında tutarsız biçimlendirme ve genel eğitim verilerinde neredeyse hiç görünmeyen biyobelirteç terminolojisi. DEMNE bunu tek bir model yerine aşamalı bir hat ile ele alır — her aşama en iyi yaptığı işi üstlenir ve yalnızca gerektiğinde daha ağır bir modele geçer.',
    p2: 'Sistem, üç farklı Fransızca onkoloji derlemi üzerinde DrBERT-7GB üzerinde ince ayar yapılmıştır ve tedaviyle ilgili raporlamada kullanılan yedi öncelikli biyobelirteç varlık türünü hedefler.',
    tags: ['Klinik NLP', 'CRF', 'Transformer', 'DrBERT-7GB', 'Fransız onkolojisi'],
    viewRepo: 'Depoyu görüntüle',
    readMethodology: 'Metodolojiyi oku',
    pipeline: [
      { num: '01', title: 'Kural tabanlı aşama', body: 'Regex ve sözlük eşleştirmesi; tarihler, dozajlar, standart biyobelirteç kısaltmaları gibi yüksek güvenilirlikli, düşük belirsizlikli varlıkları düşük maliyetle yakalar.' },
      { num: '02', title: 'CRF katmanı', body: 'Koşullu rastgele alan, kuralların kaçırdığı sıralı yapıyı modeller ve belirsiz bölümleri çözmek için yerel bağlamı kullanır.' },
      { num: '03', title: 'Transformer ile çıkarım', body: 'Üç onkoloji derlemi üzerinde ince ayar yapılmış DrBERT-7GB, gerçek anlamsal ve alan anlayışı gerektiren varlıkları işler.' },
      { num: '04', title: 'LLM ile hakemlik', body: 'Kalan çatışmalar ve sınır durumlar, çıktıdan önce nihai belirsizlik giderme için bir LLM aşamasına yönlendirilir.' },
    ],
    aiAct: {
      title: 'Düzenleyici uyum — AB Yapay Zeka Yasası',
      body: 'Hasta kayıtları üzerinde klinik varlık çıkarımı, AB Yapay Zeka Yasası\'nın yüksek riskli kategorisine doğrudan girer. DEMNE\'nin aşamalı tasarımı, sonradan eklenmek yerine baştan itibaren 12. ve 14. Maddeleri göz önünde bulundurur.',
      articles: [
        { code: 'Madde 12', label: 'Kayıt tutma', desc: 'Her çıkarım kararı, onu üreten aşamaya (kurallar, CRF, transformer veya LLM) ve güven skoruna kadar izlenebilir, bu da otomatik denetim kaydını mümkün kılar.' },
        { code: 'Madde 14', label: 'İnsan gözetimi', desc: 'LLM hakemlik çıktıları sessizce kabul edilmek yerine klinik inceleme için işaretlenir, böylece belirsiz vakalarda insan döngüde kalır.' },
      ],
    },
  },
  metrics: {
    label: 'Sonuçlar',
    title: 'Aşamalı yaklaşımın kazandırdıkları',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'Ortalama F1 — dış doğrulama' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'GPU\'suz çıkarım' },
      { value: 300, suffix: '', color: 'text', label: 'Doğrulanmış AP-HP klinik notları' },
    ],
  },
  experience: {
    label: '03 — Deneyim',
    title: 'Çalışmaların şimdiye kadar gerçekleştiği yerler',
    currentLabel: 'Devam ediyor',
    items: [
      { current: true, date: '2025 — Günümüz', title: 'Araştırma Asistanı, Tremplin Recherche', org: 'ESIEE Paris', body: 'Doktora başvurularından önce Tremplin Recherche programının temel projesi olarak, Fransızca onkoloji metni için hibrit klinik NER hattı DEMNE\'nin geliştirilmesi.' },
      { current: true, date: '2026 — Günümüz', title: 'Kurucu ve Ürün Lideri, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Beyin hasarı olan hastalara ve onların ergoterapistlerine bilişsel telafi dijital araçlarını karşılaştırmak için yapılandırılmış bir yol sunan bir platform inşa ediyorum. Sorbonne Üniversitesi\'ndeki SN@SU hackathonunda (UEROS L\'ADAPT Île-de-France\'ta ergoterapist olan Flor Sanchez-Luizard ile birlikte) bir Python/Streamlit prototipi olarak doğdu; şu anda HDS/RGPD uyumlu barındırma ve klinik eşleştirme için bir anlamsal arama motoruna sahip bir üretim yeniden yapılanmasının (FastAPI, PostgreSQL, Next.js) planlama aşamasında.' },
      { date: '2024 — 2027', title: 'Mühendislik Öğrencisi — Veri Bilimi & Yapay Zeka', org: 'ESIEE Paris', body: 'ESIEE Paris\'in beş yıllık mühendislik programının dördüncü sınıf öğrencisi, Veri Bilimi & Yapay Zeka (DSIA) uzmanlığı.' },
      { date: '2025', title: 'Mühendislik Stajyeri, GRADES Bölümü', org: 'Synchrotron SOLEIL', body: 'GitLab Salsa üzerinden Debian/ROCm altyapısında AMD GPU uyumluluğu için OpenCL ile autopkgtest betikleri (pyopencl, nabu, ufo-filters, pyvkfft) geliştirdi.' },
      { date: '2022 — Günümüz', title: 'Fen Bilimleri Özel Öğretmeni', org: 'Complétude', body: 'Mühendislik eğitimimle birlikte ilkokuldan lise son sınıfa kadar yaklaşık on öğrenciye matematik ve fizik-kimya dersleri veriyorum.' },
    ],
  },
  publications: {
    label: '04 — Yayınlar',
    title: 'Yayınlar ve araştırma',
    subtitle: 'DEMNE çalışmasının gönderime doğru ilerleyen yazılı kaydı.',
    status: 'Hazırlanıyor',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. ve ark.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'DEMNE kademeli çerçevesini, paradigma seçimi için kullanılan beş derlem karakterizasyon metriğini ve üç Fransız onkoloji derlemi üzerindeki grid search kalibrasyon sonuçlarını detaylandıran makale.',
  },
  projects: {
    label: '05 — Seçilmiş Projeler',
    title: 'Seçilmiş Projeler',
    subtitle:
      "DEMNE'nin ötesinde — bir hackathon ve ders projeleri için uçtan uca geliştirilmiş araçlar.",
    items: [
      {
        date: 'Haziran 2026',
        title: 'NeuroStep',
        description:
          'Beyin hasarı ve tümör hastaları için bilişsel telafi araçları ve uygulamalarının dijital kataloğu — iletişim desteği, hafıza ve planlama. SN@SU hackathonu için, Streamlit arayüzü ve JSON tabanlı depolama ile geliştirildi.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Ara. 2025',
        title: 'Hava Kalitesi Panosu',
        description:
          "INERIS/Zenodo verilerine dayanarak Fransa'daki 15 yıllık (2000–2015) arka plan hava kirliliğini yeniden oluşturan interaktif bir pano — SQLite depolama, Plotly grafikleri ve Leaflet ısı haritası. Takım arkadaşım William Zee ile birlikte geliştirildi.",
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Teknik Altyapı',
    title: 'Teknik Altyapı',
    subtitle: 'Yukarıdaki çalışmayla ilgisine göre gruplandırılmış araçlar — genel bir liste değil.',
    categories: [
      {
        title: 'Klinik NLP ve Biyomedikal Yapay Zeka',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Sistemler ve Altyapı',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Araştırma Araçları',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Diller',
    languages: [
      { flag: '🇫🇷', level: 'Anadil' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Orta düzey' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'Öğreniyorum' },
    ],
  },
  areasOfFocus: {
    label: '07 — Odak Alanları',
    title: 'Odak Alanları',
    items: [
      {
        title: 'Klinik Adlandırılmış Varlık Tanıma',
        body: 'Yapılandırılmamış Fransızca onkoloji metinlerinden biyobelirteç, evreleme ve tedavi verilerini çıkarmak — genel amaçlı NLP\'nin çöktüğü ve alan uyarlamasının başladığı nokta.',
      },
      {
        title: 'Tutumlu ve Yorumlanabilir Yapay Zeka',
        body: 'Performans eşiklerini karşılayan en az opak katmana yönlendiren sistemler tasarlamak. AB Yapay Zeka Yasası\'na uyumu, sonradan akla gelen bir fikir değil, bir tasarım kısıtı olarak ele almak.',
      },
      {
        title: 'Çok Modlu Biyomedikal Akıl Yürütme',
        body: 'Uzun vadeli yön: klinik metni, görüntülemeyi ve genomiği, modaliteler arasında akıl yürüten modellerde birleştirmek. Dünya modelleri yaklaşımının tıbba uygulanması.',
      },
      {
        title: 'Karmaşık Sistemlerin Pedagojisi',
        body: "Complétude'de yaklaşık on öğrenciye ilkokuldan lise son sınıfa kadar (yükseköğrenim hariç) matematik ve fizik-kimya öğretmek. Yoğun kavramları öğrenilebilir kılmak bir araştırma becerisidir, yan iş değil.",
      },
    ],
  },
  writing: {
    label: '08 — Yazılar',
    title: 'Araştırmadan notlar',
    subtitle: 'Yukarıdaki çalışmanın arkasındaki yöntemler, çıkmaz sokaklar ve kararlar hakkında daha uzun yazılar.',
    posts: [
      { status: 'Taslak — yakında', title: 'Fransızca klinik NER neden genel amaçlı modelleri bozuyor', body: 'Standart NER hatlarının Fransız onkoloji raporlarında nerede başarısız olduğuna ve bunun DEMNE\'nin yapısı için ne anlama geldiğine dair bir inceleme.' },
      { status: 'Taslak — yakında', title: 'Aşamalı çıkarım ve tek büyük model karşılaştırması', body: 'Bir LLM\'i çağırmadan önce varlıkları kurallar, bir CRF ve ince ayarlı bir transformer üzerinden yönlendirmenin gerekçesi — ve bunu yanlış yapmanın bedeli.' },
    ],
  },
  contact: {
    title: 'Klinik NLP, biyomedikal yapay zeka veya bir doktora iş birliği hakkında konuşalım.',
    directLabel: 'Doğrudan',
    elsewhereLabel: 'Diğer Yerler',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Kendi hibrit hattıyla inşa edildi',
  },
};

const pl: Dictionary = {
  htmlLang: 'pl',
  meta: {
    title: 'Clément Longeac — Badania AI, kliniczne NLP i biomedyczna AI',
    description:
      'Badania w klinicznym NLP i biomedycznej AI w ESIEE Paris, w drodze do doktoratu.',
  },
  nav: {
    about: 'O mnie',
    research: 'Badania',
    experience: 'Doświadczenie',
    publications: 'Publikacje',
    writing: 'Artykuły',
    contact: 'Kontakt',
    langSearchPlaceholder: 'Szukaj języka…',
    langSearchNoResults: 'Nie znaleziono języka',
    themeToggleLabel: 'Przełącz motyw',
    menuToggleLabel: 'Otwórz menu',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Wydobywam biomarkery z tekstu klinicznego ',
    h1Accent: 'nie budząc GPU',
    h1Post: '.',
    sub: 'Jestem Clément Longeac. Pracuję nad DEMNE, frameworkiem routingu, który dla każdego typu jednostki decyduje, czy uczciwym narzędziem do zadania jest wyrażenie regularne, CRF, transformer czy LLM. Pierwszy wynik: 93,7% jednostek klinicznych wydobytych bez GPU, F1 = 0,941 na 300 notatkach AP-HP.',
    ctaResearch: 'Zobacz badania',
    ctaCV: 'Pobierz CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, schemat na żywo',
  },
  about: {
    label: '01 — O mnie',
    title: 'Od korepetycji z matematyki do modelowania markerów nowotworowych',
    p1: 'Jestem studentem czwartego roku w ESIEE Paris, specjalizacja Data Science & AI, zapisanym na ścieżkę Tremplin Recherche — program przeznaczony dla studentów zmierzających ku doktoratowi, a nie standardowemu stażowi w przemyśle.',
    p2: 'Moja praca koncentruje się na uczynieniu nieustrukturyzowanego tekstu klinicznego użytecznym dla badań: wydobywaniu biomarkerów, informacji o stopniu zaawansowania i szczegółów leczenia ukrytych we francuskich raportach onkologicznych, gdzie ogólne narzędzia NLP systematycznie zawodzą wobec słownictwa i struktury dokumentów specyficznych dla tej dziedziny.',
    p3: 'Równolegle ze studiami udzielam korepetycji z matematyki i fizyki-chemii poprzez Complétude, a także przygotowuję aplikacje na przemysłowy doktorat CIFRE w dziedzinie biomedycznej AI na Uniwersytecie Sorbony.',
    visionLine:
      'W dłuższej perspektywie ta sama dyscyplina — wydobywanie wiarygodnej struktury z chaotycznego, wysoce ryzykownego tekstu — przyciąga mnie do badań nad bezpieczeństwem AI: budowania i oceniania world models poprzez AMI Labs i program Anthropic Fellows. (To wersja robocza — zastąp ją własnym ostatecznym sformułowaniem.)',
    facts: [
      { dt: 'Uczelnia', dd: 'ESIEE Paris' },
      { dt: 'Program', dd: 'Data Science & AI (DSIA)' },
      { dt: 'Ścieżka', dd: 'Tremplin Recherche' },
      { dt: 'Kolejny krok', dd: 'Doktorat, biomedyczna AI — Sorbona' },
      { dt: 'Języki', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Badania',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Hybrydowy pipeline rozpoznawania nazwanych encji dla francuskiego klinicznego tekstu onkologicznego.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Kliniczny NER · francuskie korpusy onkologiczne',
    p1: 'Gotowe modele NER zawodzą wyraźnie na francuskim tekście klinicznym: gęste skróty, niespójne formatowanie między systemami szpitalnymi oraz terminologia biomarkerów niemal nieobecna w ogólnych danych treningowych. DEMNE rozwiązuje to za pomocą etapowego pipeline\'u zamiast pojedynczego modelu — każdy etap zajmuje się tym, w czym jest naprawdę dobry, i eskaluje do cięższego modelu tylko wtedy, gdy to konieczne.',
    p2: 'System jest dostrojony na DrBERT-7GB na trzech różnych francuskich korpusach onkologicznych i celuje w siedem priorytetowych typów encji biomarkerowych używanych w raportach istotnych dla leczenia.',
    tags: ['Kliniczne NLP', 'CRF', 'Transformery', 'DrBERT-7GB', 'Francuska onkologia'],
    viewRepo: 'Zobacz repozytorium',
    readMethodology: 'Przeczytaj metodologię',
    pipeline: [
      { num: '01', title: 'Etap oparty na regułach', body: 'Dopasowywanie wyrażeń regularnych i leksykonów tanio wychwytuje encje o wysokiej pewności i niskiej niejednoznaczności — daty, dawki, standardowe skróty biomarkerów.' },
      { num: '02', title: 'Warstwa CRF', body: 'Warunkowe pole losowe modeluje strukturę sekwencyjną pomijaną przez reguły, wykorzystując lokalny kontekst do rozwiązywania niejednoznacznych fragmentów.' },
      { num: '03', title: 'Ekstrakcja przez transformer', body: 'DrBERT-7GB, dostrojony na trzech korpusach onkologicznych, obsługuje encje wymagające rzeczywistego rozumienia semantycznego i dziedzinowego.' },
      { num: '04', title: 'Arbitraż przez LLM', body: 'Pozostałe konflikty i przypadki graniczne są kierowane do etapu LLM w celu ostatecznego rozstrzygnięcia niejednoznaczności przed wyjściem.' },
    ],
    aiAct: {
      title: 'Zgodność regulacyjna — EU AI Act',
      body: 'Ekstrakcja encji klinicznych z dokumentacji pacjentów jednoznacznie mieści się w kategorii wysokiego ryzyka EU AI Act. Etapowy design DEMNE uwzględnia artykuły 12 i 14 od samego początku, a nie jako późniejszy dodatek.',
      articles: [
        { code: 'Art. 12', label: 'Prowadzenie rejestrów', desc: 'Każda decyzja o ekstrakcji jest identyfikowalna aż do etapu (reguły, CRF, transformer lub LLM) i wyniku pewności, który ją wygenerował, co umożliwia automatyczne logowanie na potrzeby audytu.' },
        { code: 'Art. 14', label: 'Nadzór ludzki', desc: 'Wyniki arbitrażu LLM są oznaczane do przeglądu przez klinicystę, a nie akceptowane bezgłośnie, dzięki czemu człowiek pozostaje zaangażowany w niejednoznaczne przypadki.' },
      ],
    },
  },
  metrics: {
    label: 'Wyniki',
    title: 'Co daje podejście etapowe',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'Średnie F1 — walidacja zewnętrzna' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'Ekstrakcja bez GPU' },
      { value: 300, suffix: '', color: 'text', label: 'Zwalidowane notatki kliniczne AP-HP' },
    ],
  },
  experience: {
    label: '03 — Doświadczenie',
    title: 'Gdzie do tej pory odbywała się praca',
    currentLabel: 'W trakcie',
    items: [
      { current: true, date: '2025 — obecnie', title: 'Asystent badawczy, Tremplin Recherche', org: 'ESIEE Paris', body: 'Rozwój DEMNE, hybrydowego pipeline\'u klinicznego NER dla francuskiego tekstu onkologicznego, jako głównego projektu ścieżki Tremplin Recherche przed aplikacjami doktoranckimi.' },
      { current: true, date: '2026 — obecnie', title: 'Założyciel i Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Budowa platformy, która daje pacjentom po urazach mózgu i ich terapeutom zajęciowym ustrukturyzowany sposób porównywania cyfrowych narzędzi kompensacji poznawczej. Powstała jako prototyp Python/Streamlit na hackathonie SN@SU (Sorbona, wraz z Flor Sanchez-Luizard, terapeutką zajęciową w UEROS L\'ADAPT Île-de-France); obecnie na etapie planowania produkcyjnej przebudowy (FastAPI, PostgreSQL, Next.js) z hostingiem zgodnym z HDS/RGPD i semantyczną wyszukiwarką do dopasowywania narzędzi klinicznych.' },
      { date: '2024 — 2027', title: 'Student inżynierii — Data Science & AI', org: 'ESIEE Paris', body: 'Student czwartego roku pięcioletniego programu inżynierskiego ESIEE Paris, specjalizacja Data Science & AI (DSIA).' },
      { date: '2025', title: 'Stażysta inżynieryjny, dział GRADES', org: 'Synchrotron SOLEIL', body: 'Rozwój skryptów autopkgtest w OpenCL do testowania kompatybilności GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) na infrastrukturze Debian/ROCm za pośrednictwem GitLab Salsa.' },
      { date: '2022 — obecnie', title: 'Korepetytor przedmiotów ścisłych', org: 'Complétude', body: 'Nauczanie matematyki i fizyki-chemii około dziesięciu uczniów, od szkoły podstawowej po ostatnią klasę liceum, równolegle ze studiami inżynierskimi.' },
    ],
  },
  publications: {
    label: '04 — Publikacje',
    title: 'Publikacje i badania',
    subtitle: 'Pisemny zapis pracy nad DEMNE w miarę zbliżania się do publikacji.',
    status: 'W przygotowaniu',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. i in.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Manuskrypt szczegółowo opisujący kaskadowy framework DEMNE, pięć metryk charakteryzacji korpusu użytych do wyboru paradygmatu oraz wyniki kalibracji grid search na trzech francuskich korpusach onkologicznych.',
  },
  projects: {
    label: '05 — Wybrane projekty',
    title: 'Wybrane projekty',
    subtitle: 'Poza DEMNE — narzędzia zbudowane od podstaw na hackathon i projekty uczelniane.',
    items: [
      {
        date: 'Czerwiec 2026',
        title: 'NeuroStep',
        description:
          'Cyfrowy katalog narzędzi i aplikacji wspomagających funkcje poznawcze dla osób z urazami mózgu i nowotworami — wsparcie komunikacji, pamięci i planowania. Stworzony na hackathon SN@SU, z interfejsem Streamlit opartym na magazynie danych JSON.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Gru. 2025',
        title: 'Panel jakości powietrza',
        description:
          'Interaktywny panel rekonstruujący 15 lat tła zanieczyszczenia powietrza we Francji (2000–2015) na podstawie danych INERIS/Zenodo — przechowywanie danych w SQLite, wykresy Plotly i mapa cieplna Leaflet. Stworzony wspólnie z kolegą z zespołu Williamem Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Stos technologiczny',
    title: 'Stos technologiczny',
    subtitle: 'Narzędzia pogrupowane według znaczenia dla powyższej pracy — nie ogólna lista.',
    categories: [
      {
        title: 'Kliniczne NLP i biomedyczna SI',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Systemy i infrastruktura',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Narzędzia badawcze',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Języki',
    languages: [
      { flag: '🇫🇷', level: 'Ojczysty' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Średnio zaawansowany' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'W trakcie nauki' },
    ],
  },
  areasOfFocus: {
    label: '07 — Obszary zainteresowań',
    title: 'Obszary zainteresowań',
    items: [
      {
        title: 'Kliniczne rozpoznawanie jednostek nazwanych',
        body: 'Wydobywanie biomarkerów, stopnia zaawansowania i danych o leczeniu z nieustrukturyzowanych francuskich tekstów onkologicznych — tam, gdzie ogólne NLP zawodzi, a zaczyna się adaptacja domenowa.',
      },
      {
        title: 'Oszczędna i interpretowalna SI',
        body: 'Projektowanie systemów kierujących zadanie do najmniej nieprzejrzystego poziomu spełniającego progi wydajności. Zgodność z unijnym AI Act jako ograniczenie projektowe, a nie refleksja po fakcie.',
      },
      {
        title: 'Multimodalne rozumowanie biomedyczne',
        body: 'Kierunek długoterminowy: łączenie tekstu klinicznego, obrazowania i genomiki w modelach rozumujących ponad modalnościami. Podejście world models zastosowane w medycynie.',
      },
      {
        title: 'Dydaktyka systemów złożonych',
        body: 'Nauczanie matematyki i fizyki-chemii około dziesięciu uczniów w Complétude, od szkoły podstawowej po ostatnią klasę liceum (bez szkolnictwa wyższego). Czynienie gęstych pojęć przyswajalnymi to umiejętność badawcza, a nie dorywcza praca.',
      },
    ],
  },
  writing: {
    label: '08 — Artykuły',
    title: 'Notatki z badań',
    subtitle: 'Dłuższe teksty o metodach, ślepych zaułkach i decyzjach stojących za powyższą pracą.',
    posts: [
      { status: 'Szkic — wkrótce', title: 'Dlaczego francuski kliniczny NER psuje modele ogólnego przeznaczenia', body: 'Przegląd miejsc, w których standardowe pipeline\'y NER zawodzą na francuskich raportach onkologicznych, i co to oznacza dla struktury DEMNE.' },
      { status: 'Szkic — wkrótce', title: 'Ekstrakcja etapowa kontra jeden duży model', body: 'Argumentacja za kierowaniem encji przez reguły, CRF i dostrojony transformer, zanim w ogóle wywoła się LLM — oraz koszt pomyłki w tym podejściu.' },
    ],
  },
  contact: {
    title: 'Porozmawiajmy o klinicznym NLP, biomedycznej AI lub współpracy doktoranckiej.',
    directLabel: 'Bezpośrednio',
    elsewhereLabel: 'Gdzie indziej',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Zbudowane przy użyciu własnego hybrydowego pipeline\'u',
  },
};

const vi: Dictionary = {
  htmlLang: 'vi',
  meta: {
    title: 'Clément Longeac — Nghiên cứu AI, NLP lâm sàng và AI y sinh',
    description:
      'Nghiên cứu NLP lâm sàng và AI y sinh tại ESIEE Paris, hướng tới bằng tiến sĩ.',
  },
  nav: {
    about: 'Giới thiệu',
    research: 'Nghiên cứu',
    experience: 'Kinh nghiệm',
    publications: 'Công bố',
    writing: 'Bài viết',
    contact: 'Liên hệ',
    langSearchPlaceholder: 'Tìm ngôn ngữ…',
    langSearchNoResults: 'Không tìm thấy ngôn ngữ phù hợp',
    themeToggleLabel: 'Chuyển giao diện',
    menuToggleLabel: 'Mở menu',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Trích xuất dấu ấn sinh học từ văn bản lâm sàng ',
    h1Accent: 'mà không cần đánh thức GPU',
    h1Post: '.',
    sub: 'Tôi là Clément Longeac. Tôi đang phát triển DEMNE, một framework định tuyến quyết định — cho từng loại thực thể — liệu regex, CRF, transformer, hay LLM mới là công cụ trung thực cho công việc. Kết quả đầu tiên: 93,7% thực thể lâm sàng được trích xuất không cần GPU, F1 = 0,941 trên 300 ghi chú AP-HP.',
    ctaResearch: 'Xem nghiên cứu',
    ctaCV: 'Tải CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, sơ đồ trực tiếp',
  },
  about: {
    label: '01 — Giới thiệu',
    title: 'Từ dạy kèm toán đến mô hình hóa dấu ấn sinh học khối u',
    p1: 'Tôi là sinh viên năm thứ tư tại ESIEE Paris, chuyên ngành Khoa học Dữ liệu & AI, theo học chương trình Tremplin Recherche của trường — một chương trình dành cho sinh viên hướng tới nghiên cứu tiến sĩ thay vì thực tập doanh nghiệp thông thường.',
    p2: 'Công việc của tôi tập trung vào việc làm cho văn bản lâm sàng phi cấu trúc trở nên hữu ích cho nghiên cứu: trích xuất dấu ấn sinh học, thông tin phân giai đoạn và chi tiết điều trị ẩn trong các báo cáo ung bướu tiếng Pháp, nơi mà các công cụ NLP tổng quát liên tục thất bại trước từ vựng và cấu trúc tài liệu đặc thù của lĩnh vực này.',
    p3: 'Bên cạnh việc học, tôi dạy kèm toán và lý-hóa thông qua Complétude, và đang chuẩn bị hồ sơ ứng tuyển chương trình tiến sĩ công nghiệp CIFRE về AI y sinh tại Đại học Sorbonne.',
    visionLine:
      'Về lâu dài, chính kỷ luật này — trích xuất cấu trúc đáng tin cậy từ văn bản hỗn độn, rủi ro cao — là điều thu hút tôi đến với nghiên cứu an toàn AI: xây dựng và đánh giá world model thông qua AMI Labs và chương trình Anthropic Fellows. (Đây là câu nháp — hãy thay bằng cách diễn đạt cuối cùng của bạn.)',
    facts: [
      { dt: 'Cơ sở đào tạo', dd: 'ESIEE Paris' },
      { dt: 'Chương trình', dd: 'Khoa học Dữ liệu & AI (DSIA)' },
      { dt: 'Hệ đào tạo', dd: 'Tremplin Recherche' },
      { dt: 'Bước tiếp theo', dd: 'Tiến sĩ, AI y sinh — Sorbonne' },
      { dt: 'Ngôn ngữ', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Nghiên cứu',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Một pipeline nhận dạng thực thể có tên lai dành cho văn bản lâm sàng ung bướu tiếng Pháp.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER lâm sàng · kho ngữ liệu ung bướu tiếng Pháp',
    p1: 'Các mô hình NER có sẵn thất bại nặng nề trên văn bản lâm sàng tiếng Pháp: từ viết tắt dày đặc, định dạng không nhất quán giữa các hệ thống bệnh viện, và thuật ngữ dấu ấn sinh học hầu như không xuất hiện trong dữ liệu huấn luyện tổng quát. DEMNE giải quyết vấn đề này bằng một pipeline theo giai đoạn thay vì một mô hình duy nhất — mỗi giai đoạn xử lý phần việc mà nó làm tốt nhất, và chỉ chuyển sang mô hình nặng hơn khi cần thiết.',
    p2: 'Hệ thống được tinh chỉnh trên DrBERT-7GB qua ba kho ngữ liệu ung bướu tiếng Pháp khác nhau, và nhắm đến bảy loại thực thể dấu ấn sinh học ưu tiên được sử dụng trong báo cáo liên quan đến điều trị.',
    tags: ['NLP lâm sàng', 'CRF', 'Transformer', 'DrBERT-7GB', 'Ung bướu tiếng Pháp'],
    viewRepo: 'Xem kho mã nguồn',
    readMethodology: 'Đọc phương pháp luận',
    pipeline: [
      { num: '01', title: 'Giai đoạn dựa trên quy tắc', body: 'Khớp mẫu bằng regex và từ điển bắt được với chi phí thấp các thực thể có độ tin cậy cao, ít mơ hồ — ngày tháng, liều lượng, các từ viết tắt dấu ấn sinh học chuẩn.' },
      { num: '02', title: 'Lớp CRF', body: 'Một trường ngẫu nhiên có điều kiện mô hình hóa cấu trúc tuần tự mà quy tắc bỏ sót, sử dụng ngữ cảnh cục bộ để giải quyết các đoạn mơ hồ.' },
      { num: '03', title: 'Trích xuất bằng transformer', body: 'DrBERT-7GB, được tinh chỉnh trên ba kho ngữ liệu ung bướu, xử lý các thực thể đòi hỏi hiểu biết ngữ nghĩa và chuyên môn thực sự.' },
      { num: '04', title: 'Phân xử bằng LLM', body: 'Các xung đột còn lại và trường hợp biên được chuyển đến giai đoạn LLM để giải quyết mơ hồ lần cuối trước khi xuất kết quả.' },
    ],
    aiAct: {
      title: 'Tuân thủ quy định — EU AI Act',
      body: 'Việc trích xuất thực thể lâm sàng từ hồ sơ bệnh nhân rõ ràng thuộc nhóm rủi ro cao của EU AI Act. Thiết kế theo giai đoạn của DEMNE đã tính đến Điều 12 và 14 ngay từ đầu, chứ không phải bổ sung sau.',
      articles: [
        { code: 'Điều 12', label: 'Lưu trữ hồ sơ', desc: 'Mọi quyết định trích xuất đều có thể truy vết đến giai đoạn (quy tắc, CRF, transformer hoặc LLM) và điểm tin cậy đã tạo ra nó, cho phép ghi nhật ký kiểm toán tự động.' },
        { code: 'Điều 14', label: 'Giám sát của con người', desc: 'Kết quả phân xử của LLM được gắn cờ để bác sĩ lâm sàng xem xét thay vì được chấp nhận âm thầm, giữ con người trong vòng lặp đối với các trường hợp mơ hồ.' },
      ],
    },
  },
  metrics: {
    label: 'Kết quả',
    title: 'Những gì phương pháp theo giai đoạn mang lại',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'F1 trung bình — xác thực bên ngoài' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'Trích xuất không cần GPU' },
      { value: 300, suffix: '', color: 'text', label: 'Ghi chú lâm sàng AP-HP đã xác thực' },
    ],
  },
  experience: {
    label: '03 — Kinh nghiệm',
    title: 'Công việc đã diễn ra ở đâu cho đến nay',
    currentLabel: 'Đang diễn ra',
    items: [
      { current: true, date: '2025 — Hiện tại', title: 'Trợ lý nghiên cứu, Tremplin Recherche', org: 'ESIEE Paris', body: 'Phát triển DEMNE, một pipeline NER lâm sàng lai cho văn bản ung bướu tiếng Pháp, là dự án cốt lõi của chương trình Tremplin Recherche trước khi nộp hồ sơ tiến sĩ.' },
      { current: true, date: '2026 — Hiện tại', title: 'Nhà sáng lập kiêm Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Xây dựng một nền tảng mang lại cho bệnh nhân chấn thương não và các nhà trị liệu nghề nghiệp của họ một cách có cấu trúc để so sánh các công cụ số hỗ trợ bù đắp nhận thức. Ra đời như một bản mẫu Python/Streamlit tại hackathon SN@SU (Đại học Sorbonne, cùng với Flor Sanchez-Luizard, nhà trị liệu nghề nghiệp tại UEROS L\'ADAPT Île-de-France); hiện đang trong giai đoạn lên kế hoạch xây dựng lại phiên bản sản xuất (FastAPI, PostgreSQL, Next.js) với dịch vụ lưu trữ tuân thủ HDS/RGPD và một công cụ tìm kiếm ngữ nghĩa để ghép nối công cụ lâm sàng.' },
      { date: '2024 — 2027', title: 'Sinh viên kỹ thuật — Khoa học Dữ liệu & AI', org: 'ESIEE Paris', body: 'Sinh viên năm thứ tư của chương trình kỹ thuật năm năm tại ESIEE Paris, chuyên ngành Khoa học Dữ liệu & AI (DSIA).' },
      { date: '2025', title: 'Thực tập sinh kỹ thuật, bộ phận GRADES', org: 'Synchrotron SOLEIL', body: 'Phát triển các script autopkgtest bằng OpenCL để kiểm tra khả năng tương thích GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) trên hạ tầng Debian/ROCm thông qua GitLab Salsa.' },
      { date: '2022 — Hiện tại', title: 'Gia sư khoa học tự nhiên', org: 'Complétude', body: 'Dạy toán và lý-hóa cho khoảng mười học sinh, từ tiểu học đến lớp cuối trung học phổ thông, song song với việc học kỹ thuật của tôi.' },
    ],
  },
  publications: {
    label: '04 — Công bố',
    title: 'Công bố và nghiên cứu',
    subtitle: 'Ghi chép bằng văn bản về công việc DEMNE khi nó tiến tới việc nộp bài.',
    status: 'Đang chuẩn bị',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. và cộng sự',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Bản thảo trình bày chi tiết khung tầng bậc DEMNE, năm chỉ số đặc trưng hóa kho ngữ liệu dùng để lựa chọn mô hình, và kết quả hiệu chỉnh tìm kiếm lưới trên ba kho ngữ liệu ung bướu tiếng Pháp.',
  },
  projects: {
    label: '05 — Dự án tiêu biểu',
    title: 'Dự án tiêu biểu',
    subtitle:
      'Bên cạnh DEMNE — các công cụ được xây dựng trọn vẹn cho một cuộc thi hackathon và các dự án học tập.',
    items: [
      {
        date: 'Tháng 6/2026',
        title: 'NeuroStep',
        description:
          'Một danh mục kỹ thuật số gồm các công cụ và ứng dụng hỗ trợ nhận thức cho người bị tổn thương não và khối u — hỗ trợ giao tiếp, trí nhớ và lập kế hoạch. Được xây dựng cho cuộc thi hackathon SN@SU, với giao diện Streamlit trên nền lưu trữ JSON.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Tháng 12/2025',
        title: 'Bảng điều khiển chất lượng không khí',
        description:
          'Một bảng điều khiển tương tác tái hiện 15 năm ô nhiễm không khí nền tại Pháp (2000–2015) dựa trên dữ liệu INERIS/Zenodo — lưu trữ bằng SQLite, biểu đồ Plotly và bản đồ nhiệt Leaflet. Được thực hiện cùng đồng đội William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Công nghệ sử dụng',
    title: 'Công nghệ sử dụng',
    subtitle:
      'Các công cụ được nhóm theo mức độ liên quan đến công việc ở trên — không phải một danh sách chung chung.',
    categories: [
      {
        title: 'NLP lâm sàng & AI y sinh',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Hệ thống & Hạ tầng',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Công cụ nghiên cứu',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Ngôn ngữ',
    languages: [
      { flag: '🇫🇷', level: 'Tiếng mẹ đẻ' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Trung cấp' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'Đang học' },
    ],
  },
  areasOfFocus: {
    label: '07 — Trọng tâm nghiên cứu',
    title: 'Trọng tâm nghiên cứu',
    items: [
      {
        title: 'Nhận dạng thực thể có tên trong lâm sàng',
        body: 'Trích xuất dấu ấn sinh học, giai đoạn bệnh và dữ liệu điều trị từ văn bản ung bướu tiếng Pháp phi cấu trúc — nơi NLP đa dụng thất bại và thích ứng theo lĩnh vực bắt đầu.',
      },
      {
        title: 'AI tiết kiệm và có thể diễn giải',
        body: 'Thiết kế các hệ thống định tuyến đến tầng ít mờ đục nhất vẫn đáp ứng ngưỡng hiệu năng. Tuân thủ Đạo luật AI của EU như một ràng buộc thiết kế, không phải một suy nghĩ muộn màng.',
      },
      {
        title: 'Suy luận y sinh đa phương thức',
        body: 'Định hướng dài hạn: hợp nhất văn bản lâm sàng, hình ảnh y khoa và bộ gen vào các mô hình suy luận xuyên phương thức — hướng tiếp cận world models áp dụng cho y học.',
      },
      {
        title: 'Sư phạm của các hệ thống phức tạp',
        body: 'Dạy toán và lý-hóa cho khoảng mười học sinh tại Complétude, từ tiểu học đến lớp cuối trung học phổ thông (không bao gồm bậc đại học). Biến các khái niệm dày đặc thành có thể học được là một kỹ năng nghiên cứu, không phải việc làm thêm.',
      },
    ],
  },
  writing: {
    label: '08 — Bài viết',
    title: 'Ghi chú từ nghiên cứu',
    subtitle: 'Các bài viết dài hơn về phương pháp, ngõ cụt và quyết định đằng sau công việc nêu trên.',
    posts: [
      { status: 'Bản nháp — sắp ra mắt', title: 'Vì sao NER lâm sàng tiếng Pháp làm hỏng các mô hình tổng quát', body: 'Một góc nhìn về nơi các pipeline NER tiêu chuẩn thất bại trên báo cáo ung bướu tiếng Pháp, và điều đó có ý nghĩa gì đối với cấu trúc của DEMNE.' },
      { status: 'Bản nháp — sắp ra mắt', title: 'Trích xuất theo giai đoạn so với một mô hình lớn duy nhất', body: 'Lập luận cho việc định tuyến thực thể qua các quy tắc, một CRF và một transformer đã tinh chỉnh trước khi gọi đến LLM — và cái giá phải trả nếu làm sai.' },
    ],
  },
  contact: {
    title: 'Hãy cùng trao đổi về NLP lâm sàng, AI y sinh, hoặc hợp tác nghiên cứu tiến sĩ.',
    directLabel: 'Trực tiếp',
    elsewhereLabel: 'Nơi khác',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Được xây dựng bằng chính pipeline lai của mình',
  },
};

const id: Dictionary = {
  htmlLang: 'id',
  meta: {
    title: 'Clément Longeac — Riset AI, NLP Klinis & AI Biomedis',
    description:
      'Riset NLP klinis dan AI biomedis di ESIEE Paris, menuju gelar PhD.',
  },
  nav: {
    about: 'Tentang saya',
    research: 'Riset',
    experience: 'Pengalaman',
    publications: 'Publikasi',
    writing: 'Tulisan',
    contact: 'Kontak',
    langSearchPlaceholder: 'Cari bahasa…',
    langSearchNoResults: 'Bahasa tidak ditemukan',
    themeToggleLabel: 'Ganti tema',
    menuToggleLabel: 'Buka menu',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Mengekstrak biomarker dari teks klinis ',
    h1Accent: 'tanpa membangunkan GPU',
    h1Post: '.',
    sub: 'Saya Clément Longeac. Saya sedang mengerjakan DEMNE, kerangka kerja routing yang memutuskan — untuk setiap jenis entitas — apakah regex, CRF, transformer, atau LLM adalah alat yang jujur untuk tugas tersebut. Hasil pertama: 93,7% entitas klinis diekstrak tanpa GPU, F1 = 0,941 pada 300 catatan AP-HP.',
    ctaResearch: 'Lihat riset',
    ctaCV: 'Unduh CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, skema langsung',
  },
  about: {
    label: '01 — Tentang saya',
    title: 'Dari mengajar les matematika hingga memodelkan penanda tumor',
    p1: 'Saya mahasiswa tahun keempat di ESIEE Paris, spesialisasi Data Science & AI, terdaftar dalam jalur Tremplin Recherche di sekolah — sebuah program yang dirancang untuk mahasiswa yang menuju riset doktoral, bukan magang industri standar.',
    p2: 'Pekerjaan saya berfokus pada membuat teks klinis tak terstruktur dapat digunakan untuk riset: mengekstrak penanda biologis, informasi stadium, dan detail perawatan yang terkubur dalam laporan onkologi berbahasa Prancis, di mana alat NLP umum secara konsisten gagal menghadapi kosakata dan struktur dokumen khas domain ini.',
    p3: 'Selain kuliah, saya mengajar les matematika dan fisika-kimia melalui Complétude, dan sedang mempersiapkan pendaftaran untuk program PhD industri CIFRE dalam AI biomedis di Universitas Sorbonne.',
    visionLine:
      'Dalam jangka panjang, disiplin yang sama — menarik struktur yang andal dari teks yang berantakan dan berisiko tinggi — adalah yang menarik saya ke riset keamanan AI: membangun dan mengevaluasi world model melalui AMI Labs dan program Anthropic Fellows. (Ini kalimat draf — ganti dengan rumusan akhir Anda sendiri.)',
    facts: [
      { dt: 'Institusi', dd: 'ESIEE Paris' },
      { dt: 'Program', dd: 'Data Science & AI (DSIA)' },
      { dt: 'Jalur', dd: 'Tremplin Recherche' },
      { dt: 'Langkah berikutnya', dd: 'PhD, AI biomedis — Sorbonne' },
      { dt: 'Bahasa', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Riset',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Pipeline pengenalan entitas bernama hybrid untuk teks klinis onkologi berbahasa Prancis.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER klinis · korpus onkologi Prancis',
    p1: 'Model NER siap pakai gagal parah pada teks klinis Prancis: singkatan yang padat, format yang tidak konsisten antar sistem rumah sakit, serta terminologi penanda biologis yang hampir tidak muncul dalam data pelatihan umum. DEMNE mengatasi ini dengan pipeline bertahap alih-alih satu model — setiap tahap menangani apa yang paling dikuasainya, dan hanya meningkat ke model yang lebih berat bila perlu.',
    p2: 'Sistem ini di-fine-tune pada DrBERT-7GB di tiga korpus onkologi Prancis yang berbeda, dan menargetkan tujuh jenis entitas penanda biologis prioritas yang digunakan dalam pelaporan yang relevan dengan perawatan.',
    tags: ['NLP klinis', 'CRF', 'Transformer', 'DrBERT-7GB', 'Onkologi Prancis'],
    viewRepo: 'Lihat repositori',
    readMethodology: 'Baca metodologi',
    pipeline: [
      { num: '01', title: 'Tahap berbasis aturan', body: 'Pencocokan regex dan leksikon menangkap dengan biaya rendah entitas dengan keyakinan tinggi dan ambiguitas rendah — tanggal, dosis, singkatan penanda biologis standar.' },
      { num: '02', title: 'Lapisan CRF', body: 'Conditional random field memodelkan struktur berurutan yang terlewat oleh aturan, menggunakan konteks lokal untuk menyelesaikan bagian yang ambigu.' },
      { num: '03', title: 'Ekstraksi transformer', body: 'DrBERT-7GB, yang di-fine-tune pada tiga korpus onkologi, menangani entitas yang membutuhkan pemahaman semantik dan domain yang sesungguhnya.' },
      { num: '04', title: 'Arbitrase LLM', body: 'Konflik yang tersisa dan kasus tepi dialihkan ke tahap LLM untuk disambiguasi akhir sebelum output.' },
    ],
    aiAct: {
      title: 'Keselarasan regulasi — EU AI Act',
      body: 'Ekstraksi entitas klinis dari rekam medis pasien jelas masuk dalam kategori risiko tinggi EU AI Act. Desain bertahap DEMNE mempertimbangkan Pasal 12 dan 14 sejak awal, bukan ditambahkan belakangan.',
      articles: [
        { code: 'Pasal 12', label: 'Pencatatan', desc: 'Setiap keputusan ekstraksi dapat dilacak hingga ke tahap (aturan, CRF, transformer, atau LLM) dan skor keyakinan yang menghasilkannya, memungkinkan pencatatan audit otomatis.' },
        { code: 'Pasal 14', label: 'Pengawasan manusia', desc: 'Output arbitrase LLM ditandai untuk tinjauan klinisi alih-alih diterima begitu saja, menjaga keterlibatan manusia dalam kasus-kasus ambigu.' },
      ],
    },
  },
  metrics: {
    label: 'Hasil',
    title: 'Apa yang diberikan pendekatan bertahap',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'F1 rata-rata — validasi eksternal' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'Ekstraksi tanpa GPU' },
      { value: 300, suffix: '', color: 'text', label: 'Catatan klinis AP-HP tervalidasi' },
    ],
  },
  experience: {
    label: '03 — Pengalaman',
    title: 'Di mana pekerjaan ini telah berlangsung sejauh ini',
    currentLabel: 'Sedang berlangsung',
    items: [
      { current: true, date: '2025 — Sekarang', title: 'Asisten Riset, Tremplin Recherche', org: 'ESIEE Paris', body: 'Mengembangkan DEMNE, pipeline NER klinis hybrid untuk teks onkologi Prancis, sebagai proyek inti jalur Tremplin Recherche menjelang pendaftaran program PhD.' },
      { current: true, date: '2026 — Sekarang', title: 'Pendiri & Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Membangun platform yang memberi pasien cedera otak dan terapis okupasi mereka cara terstruktur untuk membandingkan alat digital kompensasi kognitif. Lahir sebagai prototipe Python/Streamlit di hackathon SN@SU (Universitas Sorbonne, bersama Flor Sanchez-Luizard, terapis okupasi di UEROS L\'ADAPT Île-de-France); kini dalam tahap perencanaan pembangunan ulang versi produksi (FastAPI, PostgreSQL, Next.js) dengan hosting yang sesuai HDS/RGPD dan mesin pencari semantik untuk pencocokan klinis.' },
      { date: '2024 — 2027', title: 'Mahasiswa Teknik — Data Science & AI', org: 'ESIEE Paris', body: 'Mahasiswa tahun keempat program teknik lima tahun ESIEE Paris, spesialisasi Data Science & AI (DSIA).' },
      { date: '2025', title: 'Magang Teknik, Divisi GRADES', org: 'Synchrotron SOLEIL', body: 'Mengembangkan skrip autopkgtest dalam OpenCL untuk kompatibilitas GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) pada infrastruktur Debian/ROCm melalui GitLab Salsa.' },
      { date: '2022 — Sekarang', title: 'Guru Les Sains', org: 'Complétude', body: 'Mengajar matematika dan fisika-kimia kepada sekitar sepuluh siswa, dari sekolah dasar hingga kelas terakhir SMA, sejalan dengan studi teknik saya.' },
    ],
  },
  publications: {
    label: '04 — Publikasi',
    title: 'Publikasi & riset',
    subtitle: 'Catatan tertulis dari pekerjaan DEMNE seiring kemajuannya menuju pengajuan.',
    status: 'Dalam persiapan',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. dkk.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Naskah yang merinci kerangka kerja cascade DEMNE, lima metrik karakterisasi korpus yang digunakan untuk pemilihan paradigma, dan hasil kalibrasi grid search pada tiga korpus onkologi Prancis.',
  },
  projects: {
    label: '05 — Proyek Pilihan',
    title: 'Proyek Pilihan',
    subtitle: 'Selain DEMNE — alat yang dibangun dari awal hingga akhir untuk hackathon dan tugas kuliah.',
    items: [
      {
        date: 'Juni 2026',
        title: 'NeuroStep',
        description:
          'Katalog digital berisi alat dan aplikasi kompensasi kognitif untuk penyandang cedera otak dan tumor — bantuan komunikasi, memori, dan perencanaan. Dibuat untuk hackathon SN@SU, dengan antarmuka Streamlit di atas penyimpanan berbasis JSON.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Des. 2025',
        title: 'Dasbor Kualitas Udara',
        description:
          'Dasbor interaktif yang merekonstruksi 15 tahun polusi udara latar belakang di Prancis (2000–2015) dari data INERIS/Zenodo — penyimpanan SQLite, grafik Plotly, dan peta panas Leaflet. Dibuat bersama rekan satu tim William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Tumpukan Teknologi',
    title: 'Tumpukan Teknologi',
    subtitle: 'Alat yang dikelompokkan berdasarkan relevansinya dengan pekerjaan di atas — bukan daftar umum.',
    categories: [
      {
        title: 'NLP Klinis & AI Biomedis',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Sistem & Infrastruktur',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Alat Riset',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Bahasa',
    languages: [
      { flag: '🇫🇷', level: 'Bahasa ibu' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Menengah' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'Sedang dipelajari' },
    ],
  },
  areasOfFocus: {
    label: '07 — Area Fokus',
    title: 'Area Fokus',
    items: [
      {
        title: 'Pengenalan Entitas Bernama Klinis',
        body: 'Mengekstrak biomarker, stadium, dan data pengobatan dari teks onkologi Prancis yang tidak terstruktur — titik di mana NLP tujuan umum gagal dan adaptasi domain dimulai.',
      },
      {
        title: 'AI Hemat & Dapat Diinterpretasikan',
        body: 'Merancang sistem yang mengarahkan ke lapisan paling tidak opak yang memenuhi ambang batas kinerja. Kepatuhan terhadap EU AI Act sebagai batasan desain, bukan pemikiran belakangan.',
      },
      {
        title: 'Penalaran Biomedis Multimodal',
        body: 'Arah jangka panjang: menyatukan teks klinis, pencitraan, dan genomik ke dalam model yang bernalar lintas modalitas — pendekatan world models yang diterapkan pada kedokteran.',
      },
      {
        title: 'Pedagogi Sistem Kompleks',
        body: 'Mengajar matematika dan fisika-kimia kepada sekitar sepuluh siswa di Complétude, dari sekolah dasar hingga kelas terakhir SMA (tidak termasuk pendidikan tinggi). Membuat konsep yang padat dapat dipelajari adalah keterampilan riset, bukan pekerjaan sampingan.',
      },
    ],
  },
  writing: {
    label: '08 — Tulisan',
    title: 'Catatan dari riset',
    subtitle: 'Tulisan yang lebih panjang tentang metode, jalan buntu, dan keputusan di balik pekerjaan di atas.',
    posts: [
      { status: 'Draf — segera hadir', title: 'Mengapa NER klinis Prancis merusak model tujuan umum', body: 'Penjelasan tentang di mana pipeline NER standar gagal pada laporan onkologi Prancis, dan apa artinya bagi struktur DEMNE.' },
      { status: 'Draf — segera hadir', title: 'Ekstraksi bertahap vs. satu model besar', body: 'Argumen untuk merutekan entitas melalui aturan, CRF, dan transformer yang di-fine-tune sebelum memanggil LLM sama sekali — dan biaya yang harus dibayar jika salah.' },
    ],
  },
  contact: {
    title: 'Mari bicara tentang NLP klinis, AI biomedis, atau kolaborasi PhD.',
    directLabel: 'Langsung',
    elsewhereLabel: 'Di Tempat Lain',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Dibangun dengan pipeline hybrid buatannya sendiri',
  },
};

const sv: Dictionary = {
  htmlLang: 'sv',
  meta: {
    title: 'Clément Longeac — klinisk NLP & biomedicinsk AI',
    description:
      'Forskning i klinisk NLP och biomedicinsk AI vid ESIEE Paris, på väg mot en doktorsexamen.',
  },
  nav: {
    about: 'Om mig',
    research: 'Forskning',
    experience: 'Erfarenhet',
    publications: 'Publikationer',
    writing: 'Artiklar',
    contact: 'Kontakt',
    langSearchPlaceholder: 'Sök ett språk…',
    langSearchNoResults: 'Inget språk hittades',
    themeToggleLabel: 'Växla tema',
    menuToggleLabel: 'Öppna menyn',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Extraherar biomarkörer från klinisk text ',
    h1Accent: 'utan att väcka GPU:n',
    h1Post: '.',
    sub: 'Jag är Clément Longeac. Jag arbetar med DEMNE, ett routningsramverk som för varje entitetstyp avgör om ett reguljärt uttryck, en CRF, en transformer eller en LLM är det ärliga verktyget för uppgiften. Första resultatet: 93,7 % av de kliniska entiteterna extraherade utan GPU, F1 = 0,941 på 300 AP-HP-anteckningar.',
    ctaResearch: 'Se forskningen',
    ctaCV: 'Ladda ner CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, schema i realtid',
  },
  about: {
    label: '01 — Om mig',
    title: 'Från mattestöttning till modellering av tumörmarkörer',
    p1: 'Jag är fjärdeårsstudent vid ESIEE Paris, inriktning Data Science & AI, inskriven på skolans Tremplin Recherche-spår — ett program byggt för studenter som siktar på doktorandforskning snarare än en vanlig industripraktik.',
    p2: 'Mitt arbete handlar om att göra ostrukturerad klinisk text användbar för forskning: att extrahera biomarkörer, stadieinformation och behandlingsdetaljer som gömts i franska onkologirapporter, där generella NLP-verktyg konsekvent misslyckas inför domänens vokabulär och dokumentstruktur.',
    p3: 'Vid sidan av studierna undervisar jag i matematik och fysik-kemi via Complétude, och förbereder ansökningar till en industriell CIFRE-doktorandtjänst inom biomedicinsk AI vid Sorbonneuniversitetet.',
    visionLine:
      'På längre sikt är det just den här disciplinen — att extrahera pålitlig struktur ur rörig, högriskbetonad text — som drar mig till AI-säkerhetsforskning: att bygga och utvärdera world models via AMI Labs och Anthropic Fellows-programmet. (Preliminär rad — ersätt med din egen slutgiltiga formulering.)',
    facts: [
      { dt: 'Lärosäte', dd: 'ESIEE Paris' },
      { dt: 'Program', dd: 'Data Science & AI (DSIA)' },
      { dt: 'Spår', dd: 'Tremplin Recherche' },
      { dt: 'Nästa steg', dd: 'Doktorsexamen, biomedicinsk AI — Sorbonne' },
      { dt: 'Språk', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Forskning',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'En hybrid pipeline för namngiven entitetsigenkänning för fransk onkologisk klinisk text.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Klinisk NER · franska onkologikorpusar',
    p1: 'Färdiga NER-modeller misslyckas rejält med fransk klinisk text: täta förkortningar, inkonsekvent formatering mellan sjukhussystem, och biomarkörterminologi som knappt förekommer i allmänna träningsdata. DEMNE hanterar detta med en stegvis pipeline istället för en enda modell — varje steg gör det den faktiskt är bra på, och eskalerar bara till en tyngre modell vid behov.',
    p2: 'Systemet är finjusterat på DrBERT-7GB över tre olika franska onkologikorpusar, och riktar in sig på sju prioriterade biomarkör-entitetstyper som används i behandlingsrelevant rapportering.',
    tags: ['Klinisk NLP', 'CRF', 'Transformers', 'DrBERT-7GB', 'Fransk onkologi'],
    viewRepo: 'Visa repositoriet',
    readMethodology: 'Läs metodiken',
    pipeline: [
      { num: '01', title: 'Regelbaserat steg', body: 'Matchning med reguljära uttryck och lexikon fångar billigt entiteter med hög säkerhet och låg tvetydighet — datum, doser, standardförkortningar för biomarkörer.' },
      { num: '02', title: 'CRF-lager', body: 'Ett villkorligt slumpfält modellerar den sekventiella struktur som reglerna missar, med lokal kontext för att lösa tvetydiga avsnitt.' },
      { num: '03', title: 'Extraktion via transformer', body: 'DrBERT-7GB, finjusterad över tre onkologikorpusar, hanterar de entiteter som kräver verklig semantisk och domänförståelse.' },
      { num: '04', title: 'LLM-skiljedom', body: 'Kvarvarande konflikter och gränsfall dirigeras till ett LLM-steg för slutlig disambiguering före utdata.' },
    ],
    aiAct: {
      title: 'Regelefterlevnad — EU AI Act',
      body: 'Klinisk entitetsextraktion från patientjournaler faller tydligt inom högriskkategorin i EU AI Act. DEMNE:s stegvisa design tar hänsyn till artikel 12 och 14 från början, inte som ett senare tillägg.',
      articles: [
        { code: 'Art. 12', label: 'Registerföring', desc: 'Varje extraktionsbeslut kan spåras till det steg (regler, CRF, transformer eller LLM) och den konfidenspoäng som producerade det, vilket möjliggör automatisk granskningsloggning.' },
        { code: 'Art. 14', label: 'Mänsklig tillsyn', desc: 'Utdata från LLM-skiljedomen flaggas för klinisk granskning istället för att accepteras tyst, vilket håller en människa i loopen vid tvetydiga fall.' },
      ],
    },
  },
  metrics: {
    label: 'Resultat',
    title: 'Vad det stegvisa tillvägagångssättet ger',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'Genomsnittlig F1 — extern validering' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'GPU-fri extraktion' },
      { value: 300, suffix: '', color: 'text', label: 'Validerade AP-HP-journalanteckningar' },
    ],
  },
  experience: {
    label: '03 — Erfarenhet',
    title: 'Var arbetet har ägt rum hittills',
    currentLabel: 'Pågående',
    items: [
      { current: true, date: '2025 — Nuvarande', title: 'Forskningsassistent, Tremplin Recherche', org: 'ESIEE Paris', body: 'Utveckling av DEMNE, en hybrid klinisk NER-pipeline för fransk onkologitext, som huvudprojekt inom Tremplin Recherche-spåret inför doktorandansökningar.' },
      { current: true, date: '2026 — Nuvarande', title: 'Grundare & Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Bygger en plattform som ger hjärnskadade patienter och deras arbetsterapeuter ett strukturerat sätt att jämföra digitala verktyg för kognitiv kompensation. Föddes som en Python/Streamlit-prototyp på SN@SU-hackathonet (Sorbonneuniversitetet, tillsammans med Flor Sanchez-Luizard, arbetsterapeut vid UEROS L\'ADAPT Île-de-France); nu i planeringsfasen för en produktionsombyggnad (FastAPI, PostgreSQL, Next.js) med HDS/RGPD-kompatibel hosting och en semantisk sökmotor för klinisk matchning.' },
      { date: '2024 — 2027', title: 'Ingenjörsstudent — Data Science & AI', org: 'ESIEE Paris', body: 'Fjärdeårsstudent i ESIEE Paris femåriga ingenjörsprogram, inriktning Data Science & AI (DSIA).' },
      { date: '2025', title: 'Ingenjörspraktikant, GRADES-avdelningen', org: 'Synchrotron SOLEIL', body: 'Utveckling av autopkgtest-skript i OpenCL för AMD GPU-kompatibilitet (pyopencl, nabu, ufo-filters, pyvkfft) på Debian/ROCm-infrastruktur via GitLab Salsa.' },
      { date: '2022 — Nuvarande', title: 'NO-lärare (privatundervisning)', org: 'Complétude', body: 'Undervisar i matematik och fysik-kemi för ett tiotal elever, från lågstadiet till sista året på gymnasiet, parallellt med mina ingenjörsstudier.' },
    ],
  },
  publications: {
    label: '04 — Publikationer',
    title: 'Publikationer & forskning',
    subtitle: 'Den skriftliga dokumentationen av DEMNE-arbetet på väg mot publicering.',
    status: 'Under förberedelse',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. m.fl.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Manuskript som beskriver DEMNE:s kaskadramverk, de fem korpuskarakteriseringsmåtten som används för paradigmval, och kalibreringsresultaten från grid search över tre franska onkologikorpusar.',
  },
  projects: {
    label: '05 — Utvalda projekt',
    title: 'Utvalda projekt',
    subtitle: 'Utöver DEMNE — verktyg byggda från grunden för en hackathon och kursprojekt.',
    items: [
      {
        date: 'Juni 2026',
        title: 'NeuroStep',
        description:
          'En digital katalog över kognitiva hjälpmedel och appar för personer med hjärnskador och tumörer — stöd för kommunikation, minne och planering. Byggd för SN@SU-hackathonet, med ett Streamlit-gränssnitt ovanpå en JSON-baserad lagring.',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Dec. 2025',
        title: 'Luftkvalitetspanel',
        description:
          'En interaktiv instrumentpanel som rekonstruerar 15 års bakgrundsluftförorening i Frankrike (2000–2015) utifrån INERIS/Zenodo-data — SQLite-lagring, Plotly-diagram och en Leaflet-värmekarta. Byggd tillsammans med lagkamraten William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Teknisk stack',
    title: 'Teknisk stack',
    subtitle: 'Verktyg grupperade efter relevans för arbetet ovan — ingen generisk lista.',
    categories: [
      {
        title: 'Klinisk NLP & biomedicinsk AI',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'System & infrastruktur',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Forskningsverktyg',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Språk',
    languages: [
      { flag: '🇫🇷', level: 'Modersmål' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Medel' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'Under inlärning' },
    ],
  },
  areasOfFocus: {
    label: '07 — Fokusområden',
    title: 'Fokusområden',
    items: [
      {
        title: 'Klinisk namngiven entitetsigenkänning',
        body: 'Extrahera biomarkörer, stadieindelning och behandlingsdata från ostrukturerad fransk onkologitext — där generell NLP kollapsar och domänanpassning tar vid.',
      },
      {
        title: 'Frugal & tolkbar AI',
        body: 'Design av system som dirigerar till den minst opaka nivån som uppfyller prestandakraven. Efterlevnad av EU:s AI-förordning som en designbegränsning, inte en eftertanke.',
      },
      {
        title: 'Multimodalt biomedicinskt resonemang',
        body: 'Långsiktig riktning: att förena klinisk text, bilddiagnostik och genomik i modeller som resonerar över modaliteter — inriktningen mot world models tillämpad på medicin.',
      },
      {
        title: 'Pedagogik för komplexa system',
        body: 'Undervisar i matematik och fysik-kemi för ett tiotal elever på Complétude, från lågstadiet till sista året på gymnasiet (inte högre utbildning). Att göra täta koncept inlärbara är en forskningsfärdighet, inte ett sidojobb.',
      },
    ],
  },
  writing: {
    label: '08 — Artiklar',
    title: 'Anteckningar från forskningen',
    subtitle: 'Längre texter om metoder, återvändsgränder och beslut bakom arbetet ovan.',
    posts: [
      { status: 'Utkast — kommer snart', title: 'Varför fransk klinisk NER slår ut generella modeller', body: 'En genomgång av var standard-NER-pipelines misslyckas på franska onkologirapporter, och vad det innebär för DEMNE:s struktur.' },
      { status: 'Utkast — kommer snart', title: 'Stegvis extraktion kontra en enda stor modell', body: 'Argumentet för att dirigera entiteter genom regler, ett CRF och en finjusterad transformer innan man alls anropar en LLM — och vad det kostar att göra fel.' },
    ],
  },
  contact: {
    title: 'Låt oss prata om klinisk NLP, biomedicinsk AI, eller ett doktorandsamarbete.',
    directLabel: 'Direkt',
    elsewhereLabel: 'Andra kanaler',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Byggd med sin egen hybrida pipeline',
  },
};

const uk: Dictionary = {
  htmlLang: 'uk',
  meta: {
    title: 'Clément Longeac — клінічний NLP та біомедичний ШІ',
    description:
      'Дослідження клінічного NLP та біомедичного ШІ в ESIEE Paris, на шляху до докторантури.',
  },
  nav: {
    about: 'Про мене',
    research: 'Дослідження',
    experience: 'Досвід',
    publications: 'Публікації',
    writing: 'Статті',
    contact: 'Контакти',
    langSearchPlaceholder: 'Пошук мови…',
    langSearchNoResults: 'Мову не знайдено',
    themeToggleLabel: 'Перемкнути тему',
    menuToggleLabel: 'Відкрити меню',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'Видобуваю біомаркери з клінічного тексту ',
    h1Accent: 'не пробуджуючи GPU',
    h1Post: '.',
    sub: 'Я Clément Longeac. Я працюю над DEMNE — фреймворком маршрутизації, який для кожного типу сутності вирішує, чи є чесним інструментом для завдання регулярний вираз, CRF, трансформер або LLM. Перший результат: 93,7% клінічних сутностей видобуто без GPU, F1 = 0,941 на 300 нотатках AP-HP.',
    ctaResearch: 'Переглянути дослідження',
    ctaCV: 'Завантажити резюме',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, схема в реальному часі',
  },
  about: {
    label: '01 — Про мене',
    title: 'Від репетиторства з математики до моделювання пухлинних маркерів',
    p1: 'Я студент четвертого курсу ESIEE Paris, спеціалізація Data Science & AI, навчаюся за програмою Tremplin Recherche школи — програмою для студентів, орієнтованих на докторантуру, а не на стандартне стажування в індустрії.',
    p2: 'Моя робота зосереджена на тому, щоб зробити неструктурований клінічний текст придатним для досліджень: вилучення біомаркерів, інформації про стадіювання та деталей лікування, прихованих у французьких онкологічних звітах, де універсальні інструменти NLP систематично зазнають невдачі через специфічну лексику та структуру документів.',
    p3: 'Паралельно з навчанням я викладаю математику та фізику-хімію через Complétude, а також готую заявки на промислову докторантуру CIFRE з біомедичного ШІ в Сорбонському університеті.',
    visionLine:
      'У довгостроковій перспективі саме ця дисципліна — здобування надійної структури з хаотичного, високоризикового тексту — приваблює мене до досліджень безпеки ШІ: побудови та оцінки world model через AMI Labs та програму Anthropic Fellows. (Це чорновий рядок — замініть на власне остаточне формулювання.)',
    facts: [
      { dt: 'Навчальний заклад', dd: 'ESIEE Paris' },
      { dt: 'Програма', dd: 'Data Science & AI (DSIA)' },
      { dt: 'Трек', dd: 'Tremplin Recherche' },
      { dt: 'Наступний крок', dd: 'Докторантура, біомедичний ШІ — Сорбонна' },
      { dt: 'Мови', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — Дослідження',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'Гібридний конвеєр розпізнавання іменованих сутностей для французького онкологічного клінічного тексту.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Клінічний NER · французькі онкологічні корпуси',
    p1: 'Готові моделі NER суттєво програють на французькому клінічному тексті: щільні скорочення, неузгоджене форматування між лікарняними системами та термінологія біомаркерів, яка майже не трапляється в загальних навчальних даних. DEMNE вирішує це за допомогою поетапного конвеєра замість єдиної моделі — кожен етап робить те, що вміє найкраще, і переходить до важчої моделі лише за потреби.',
    p2: 'Систему донавчено на DrBERT-7GB на трьох різних французьких онкологічних корпусах, і вона орієнтована на сім пріоритетних типів сутностей-біомаркерів, які використовуються у звітності, релевантній для лікування.',
    tags: ['Клінічний NLP', 'CRF', 'Трансформери', 'DrBERT-7GB', 'Французька онкологія'],
    viewRepo: 'Переглянути репозиторій',
    readMethodology: 'Читати методологію',
    pipeline: [
      { num: '01', title: 'Етап на основі правил', body: 'Зіставлення за регулярними виразами та словниками недорого вловлює сутності з високою впевненістю та низькою неоднозначністю — дати, дозування, стандартні скорочення біомаркерів.' },
      { num: '02', title: 'Шар CRF', body: 'Умовне випадкове поле моделює послідовну структуру, яку пропускають правила, використовуючи локальний контекст для розв\'язання неоднозначних фрагментів.' },
      { num: '03', title: 'Вилучення за допомогою трансформера', body: 'DrBERT-7GB, донавчений на трьох онкологічних корпусах, обробляє сутності, що потребують справжнього семантичного та предметного розуміння.' },
      { num: '04', title: 'Арбітраж LLM', body: 'Залишкові конфлікти та граничні випадки направляються на етап LLM для остаточного усунення неоднозначності перед виводом.' },
    ],
    aiAct: {
      title: 'Регуляторна відповідність — EU AI Act',
      body: 'Вилучення клінічних сутностей з медичних записів пацієнтів однозначно потрапляє до категорії високого ризику EU AI Act. Поетапна архітектура DEMNE враховує статті 12 та 14 з самого початку, а не додає їх заднім числом.',
      articles: [
        { code: 'Ст. 12', label: 'Ведення записів', desc: 'Кожне рішення про вилучення можна простежити до етапу (правила, CRF, трансформер або LLM) та оцінки впевненості, яка його породила, що дає змогу автоматично вести журнал аудиту.' },
        { code: 'Ст. 14', label: 'Людський нагляд', desc: 'Результати арбітражу LLM позначаються для перевірки клініцистом, а не приймаються мовчки, що зберігає участь людини у неоднозначних випадках.' },
      ],
    },
  },
  metrics: {
    label: 'Результати',
    title: 'Що дає поетапний підхід',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'Середній F1 — зовнішня валідація' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'Видобування без GPU' },
      { value: 300, suffix: '', color: 'text', label: 'Перевірені клінічні записи AP-HP' },
    ],
  },
  experience: {
    label: '03 — Досвід',
    title: 'Де досі відбувалася робота',
    currentLabel: 'Триває',
    items: [
      { current: true, date: '2025 — дотепер', title: 'Науковий асистент, Tremplin Recherche', org: 'ESIEE Paris', body: 'Розробка DEMNE, гібридного конвеєра клінічного NER для французького онкологічного тексту, як основного проєкту програми Tremplin Recherche перед подачею заявок на докторантуру.' },
      { current: true, date: '2026 — дотепер', title: 'Засновник і Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'Створення платформи, яка дає пацієнтам із черепно-мозковими травмами та їхнім ерготерапевтам структурований спосіб порівнювати цифрові інструменти когнітивної компенсації. Народився як прототип на Python/Streamlit на хакатоні SN@SU (Сорбонський університет, разом із Flor Sanchez-Luizard, ерготерапевткою в UEROS L\'ADAPT Іль-де-Франс); зараз на етапі планування виробничої перебудови (FastAPI, PostgreSQL, Next.js) з хостингом, що відповідає HDS/RGPD, і семантичним пошуковим механізмом для клінічного зіставлення.' },
      { date: '2024 — 2027', title: 'Студент-інженер — Data Science & AI', org: 'ESIEE Paris', body: 'Студент четвертого курсу п\'ятирічної інженерної програми ESIEE Paris, спеціалізація Data Science & AI (DSIA).' },
      { date: '2025', title: 'Інженер-стажист, відділ GRADES', org: 'Synchrotron SOLEIL', body: 'Розробка скриптів autopkgtest на OpenCL для перевірки сумісності з GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) на інфраструктурі Debian/ROCm через GitLab Salsa.' },
      { date: '2022 — дотепер', title: 'Репетитор з точних наук', org: 'Complétude', body: 'Викладання математики та фізики-хімії приблизно десятьом учням, від початкової школи до випускного класу ліцею, паралельно з інженерним навчанням.' },
    ],
  },
  publications: {
    label: '04 — Публікації',
    title: 'Публікації та дослідження',
    subtitle: 'Письмовий запис роботи над DEMNE у міру просування до публікації.',
    status: 'У підготовці',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. та ін.',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'Рукопис, що детально описує каскадну структуру DEMNE, п\'ять метрик характеризації корпусу, використаних для вибору парадигми, та результати калібрування ґратчастого пошуку на трьох французьких онкологічних корпусах.',
  },
  projects: {
    label: '05 — Вибрані проєкти',
    title: 'Вибрані проєкти',
    subtitle:
      'Окрім DEMNE — інструменти, створені від початку до кінця для хакатону та навчальних проєктів.',
    items: [
      {
        date: 'Червень 2026',
        title: 'NeuroStep',
        description:
          "Цифровий каталог інструментів і застосунків когнітивної компенсації для людей із черепно-мозковими травмами та пухлинами — підтримка спілкування, пам'яті та планування. Створено для хакатону SN@SU, з інтерфейсом на Streamlit поверх сховища на основі JSON.",
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'Груд. 2025',
        title: 'Панель якості повітря',
        description:
          'Інтерактивна панель, що реконструює 15 років фонового забруднення повітря у Франції (2000–2015) на основі даних INERIS/Zenodo — зберігання в SQLite, графіки Plotly та теплова карта Leaflet. Створена разом з напарником William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — Технічний стек',
    title: 'Технічний стек',
    subtitle: 'Інструменти, згруповані за значущістю для роботи вище — не загальний перелік.',
    categories: [
      {
        title: 'Клінічний NLP і біомедичний ШІ',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'Системи та інфраструктура',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'Інструменти для досліджень',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'Мови',
    languages: [
      { flag: '🇫🇷', level: 'Рідна' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'Середній рівень' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'У процесі вивчення' },
    ],
  },
  areasOfFocus: {
    label: '07 — Напрями роботи',
    title: 'Напрями роботи',
    items: [
      {
        title: 'Клінічне розпізнавання іменованих сутностей',
        body: 'Видобування біомаркерів, стадії та даних лікування з неструктурованих французьких онкологічних текстів — там, де загальний NLP дає збій і починається адаптація до домену.',
      },
      {
        title: 'Ощадливий та інтерпретовний ШІ',
        body: 'Проєктування систем, що спрямовують завдання до найменш непрозорого рівня, який відповідає порогам продуктивності. Відповідність Закону ЄС про ШІ як обмеження проєктування, а не запізніла думка.',
      },
      {
        title: 'Мультимодальне біомедичне міркування',
        body: 'Довгострокова мета: об\'єднати клінічний текст, зображення та геноміку в моделях, що міркують між модальностями — підхід world models, застосований до медицини.',
      },
      {
        title: 'Педагогіка складних систем',
        body: 'Викладання математики та фізики-хімії приблизно десятьом учням у Complétude — від початкової школи до випускного класу ліцею (без вищої освіти). Зробити щільні концепції доступними для розуміння — це дослідницька навичка, а не підробіток.',
      },
    ],
  },
  writing: {
    label: '08 — Статті',
    title: 'Нотатки з дослідження',
    subtitle: 'Розлогіші матеріали про методи, глухі кути та рішення, що стоять за роботою вище.',
    posts: [
      { status: 'Чернетка — незабаром', title: 'Чому французький клінічний NER ламає універсальні моделі', body: 'Огляд того, де стандартні конвеєри NER зазнають невдачі на французьких онкологічних звітах, і що це означає для структури DEMNE.' },
      { status: 'Чернетка — незабаром', title: 'Поетапне вилучення проти однієї великої моделі', body: 'Аргументація на користь маршрутизації сутностей через правила, CRF та донавчений трансформер, перш ніж взагалі викликати LLM — і якою є ціна помилки в цьому.' },
    ],
  },
  contact: {
    title: 'Поговорімо про клінічний NLP, біомедичний ШІ або співпрацю в межах докторантури.',
    directLabel: 'Напряму',
    elsewhereLabel: 'Деінде',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Створено за допомогою власного гібридного конвеєра',
  },
};

const th: Dictionary = {
  htmlLang: 'th',
  meta: {
    title: 'Clément Longeac — NLP ทางคลินิกและ AI ชีวการแพทย์',
    description:
      'งานวิจัยด้าน NLP ทางคลินิกและ AI ชีวการแพทย์ที่ ESIEE Paris มุ่งสู่ปริญญาเอก',
  },
  nav: {
    about: 'เกี่ยวกับฉัน',
    research: 'งานวิจัย',
    experience: 'ประสบการณ์',
    publications: 'ผลงานตีพิมพ์',
    writing: 'บทความ',
    contact: 'ติดต่อ',
    langSearchPlaceholder: 'ค้นหาภาษา…',
    langSearchNoResults: 'ไม่พบภาษาที่ตรงกัน',
    themeToggleLabel: 'สลับธีม',
    menuToggleLabel: 'เปิดเมนู',
  },
  hero: {
    kicker: 'ESIEE Paris · DSIA / Tremplin Recherche · en révision @ Artificial Intelligence in Medicine',
    h1Pre: 'สกัดไบโอมาร์กเกอร์จากข้อความทางคลินิก ',
    h1Accent: 'โดยไม่ต้องปลุก GPU',
    h1Post: '',
    sub: 'ผมชื่อ Clément Longeac ผมกำลังพัฒนา DEMNE ซึ่งเป็นเฟรมเวิร์กสำหรับจัดเส้นทางที่ตัดสินใจ — สำหรับเอนทิตีแต่ละประเภท — ว่า regex, CRF, transformer หรือ LLM คือเครื่องมือที่ซื่อตรงที่สุดสำหรับงานนั้น ผลลัพธ์แรก: สกัดเอนทิตีทางคลินิกได้ 93.7% โดยไม่ใช้ GPU ด้วยค่า F1 = 0.941 จากบันทึก AP-HP จำนวน 300 รายการ',
    ctaResearch: 'ดูงานวิจัย',
    ctaCV: 'ดาวน์โหลดเรซูเม่',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM แผนผังแบบสด',
  },
  about: {
    label: '01 — เกี่ยวกับฉัน',
    title: 'จากติวเตอร์คณิตศาสตร์สู่การสร้างแบบจำลองตัวบ่งชี้มะเร็ง',
    p1: 'ผมเป็นนักศึกษาชั้นปีที่ 4 ที่ ESIEE Paris สาขา Data Science & AI และอยู่ในหลักสูตร Tremplin Recherche ของโรงเรียน — โปรแกรมที่ออกแบบมาสำหรับนักศึกษาที่มุ่งสู่งานวิจัยระดับปริญญาเอกแทนที่จะเป็นการฝึกงานในอุตสาหกรรมทั่วไป',
    p2: 'งานของผมเน้นการทำให้ข้อความทางคลินิกที่ไม่มีโครงสร้างสามารถนำไปใช้ในงานวิจัยได้: การสกัดตัวบ่งชี้ทางชีวภาพ ข้อมูลระยะของโรค และรายละเอียดการรักษาที่ฝังอยู่ในรายงานมะเร็งวิทยาภาษาฝรั่งเศส ซึ่งเครื่องมือ NLP ทั่วไปมักล้มเหลวอย่างต่อเนื่องเมื่อเจอคำศัพท์เฉพาะทางและโครงสร้างเอกสารของสาขานี้',
    p3: 'นอกจากการเรียน ผมยังสอนพิเศษวิชาคณิตศาสตร์และฟิสิกส์-เคมีผ่าน Complétude และกำลังเตรียมสมัครทุนปริญญาเอกภาคอุตสาหกรรม CIFRE ด้าน AI ชีวการแพทย์ที่มหาวิทยาลัยซอร์บอนน์',
    visionLine:
      'ในระยะยาว วินัยแบบเดียวกันนี้ — การดึงโครงสร้างที่เชื่อถือได้ออกจากข้อความที่ยุ่งเหยิงและมีความเสี่ยงสูง — คือสิ่งที่ดึงดูดผมเข้าสู่งานวิจัยด้านความปลอดภัยของ AI: การสร้างและประเมิน world model ผ่าน AMI Labs และโปรแกรม Anthropic Fellows (นี่คือข้อความร่าง — โปรดแทนที่ด้วยถ้อยคำฉบับสมบูรณ์ของคุณเอง)',
    facts: [
      { dt: 'สถาบัน', dd: 'ESIEE Paris' },
      { dt: 'หลักสูตร', dd: 'Data Science & AI (DSIA)' },
      { dt: 'แทร็ก', dd: 'Tremplin Recherche' },
      { dt: 'ขั้นตอนถัดไป', dd: 'ปริญญาเอก AI ชีวการแพทย์ — ซอร์บอนน์' },
      { dt: 'ภาษา', dd: 'FR · EN · JP · ES' },
    ],
  },
  research: {
    label: '02 — งานวิจัย',
    title: 'DEMNE / DuraXeLL',
    subtitle: 'ไปป์ไลน์การรู้จำเอนทิตีที่มีชื่อแบบไฮบริดสำหรับข้อความทางคลินิกด้านมะเร็งวิทยาภาษาฝรั่งเศส',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER ทางคลินิก · คลังข้อมูลมะเร็งวิทยาภาษาฝรั่งเศส',
    p1: 'โมเดล NER สำเร็จรูปมักล้มเหลวอย่างหนักกับข้อความทางคลินิกภาษาฝรั่งเศส: คำย่อที่หนาแน่น รูปแบบที่ไม่สอดคล้องกันระหว่างระบบโรงพยาบาล และคำศัพท์ตัวบ่งชี้ทางชีวภาพที่แทบไม่ปรากฏในข้อมูลฝึกฝนทั่วไป DEMNE แก้ปัญหานี้ด้วยไปป์ไลน์แบบขั้นตอนแทนที่จะใช้โมเดลเดียว — แต่ละขั้นตอนจัดการสิ่งที่มันทำได้ดีที่สุด และจะยกระดับไปยังโมเดลที่หนักกว่าเมื่อจำเป็นเท่านั้น',
    p2: 'ระบบนี้ปรับแต่ง DrBERT-7GB บนคลังข้อมูลมะเร็งวิทยาภาษาฝรั่งเศสสามชุดที่แตกต่างกัน และมุ่งเป้าไปที่เอนทิตีตัวบ่งชี้ทางชีวภาพเจ็ดประเภทสำคัญที่ใช้ในรายงานที่เกี่ยวข้องกับการรักษา',
    tags: ['NLP ทางคลินิก', 'CRF', 'Transformer', 'DrBERT-7GB', 'มะเร็งวิทยาฝรั่งเศส'],
    viewRepo: 'ดูรีพอสิทอรี',
    readMethodology: 'อ่านวิธีการ',
    pipeline: [
      { num: '01', title: 'ขั้นตอนที่ใช้กฎเกณฑ์', body: 'การจับคู่ด้วย regex และพจนานุกรมช่วยดักจับเอนทิตีที่มีความเชื่อมั่นสูงและความกำกวมต่ำด้วยต้นทุนต่ำ เช่น วันที่ ขนาดยา คำย่อมาตรฐานของตัวบ่งชี้ทางชีวภาพ' },
      { num: '02', title: 'ชั้น CRF', body: 'Conditional random field จำลองโครงสร้างเชิงลำดับที่กฎเกณฑ์พลาดไป โดยใช้บริบทท้องถิ่นในการแก้ไขส่วนที่กำกวม' },
      { num: '03', title: 'การสกัดด้วย Transformer', body: 'DrBERT-7GB ที่ปรับแต่งบนคลังข้อมูลมะเร็งวิทยาสามชุด จัดการกับเอนทิตีที่ต้องการความเข้าใจเชิงความหมายและโดเมนอย่างแท้จริง' },
      { num: '04', title: 'การตัดสินด้วย LLM', body: 'ข้อขัดแย้งที่เหลือและกรณีชายขอบจะถูกส่งไปยังขั้นตอน LLM เพื่อขจัดความกำกวมขั้นสุดท้ายก่อนส่งออกผลลัพธ์' },
    ],
    aiAct: {
      title: 'ความสอดคล้องด้านกฎระเบียบ — EU AI Act',
      body: 'การสกัดเอนทิตีทางคลินิกจากเวชระเบียนผู้ป่วยจัดอยู่ในหมวดความเสี่ยงสูงของ EU AI Act อย่างชัดเจน การออกแบบแบบขั้นตอนของ DEMNE คำนึงถึงมาตรา 12 และ 14 ตั้งแต่ต้น ไม่ใช่เพิ่มเข้ามาภายหลัง',
      articles: [
        { code: 'มาตรา 12', label: 'การเก็บบันทึก', desc: 'ทุกการตัดสินใจในการสกัดข้อมูลสามารถตรวจสอบย้อนกลับไปยังขั้นตอน (กฎเกณฑ์, CRF, Transformer หรือ LLM) และคะแนนความเชื่อมั่นที่สร้างมันขึ้นมา ทำให้สามารถบันทึกข้อมูลตรวจสอบได้โดยอัตโนมัติ' },
        { code: 'มาตรา 14', label: 'การกำกับดูแลโดยมนุษย์', desc: 'ผลลัพธ์จากการตัดสินของ LLM จะถูกทำเครื่องหมายเพื่อให้แพทย์ตรวจสอบ แทนที่จะยอมรับโดยเงียบๆ ทำให้มนุษย์ยังคงมีบทบาทในกรณีที่กำกวม' },
      ],
    },
  },
  metrics: {
    label: 'ผลลัพธ์',
    title: 'สิ่งที่แนวทางแบบขั้นตอนมอบให้',
    items: [
      { value: 0.941, decimals: 3, suffix: '', color: 'cyan', label: 'F1 เฉลี่ย — การตรวจสอบภายนอก' },
      { value: 93.7, decimals: 1, suffix: '%', color: 'violet', label: 'การสกัดโดยไม่ใช้ GPU' },
      { value: 300, suffix: '', color: 'text', label: 'บันทึกทางคลินิกของ AP-HP ที่ผ่านการตรวจสอบ' },
    ],
  },
  experience: {
    label: '03 — ประสบการณ์',
    title: 'สถานที่ที่งานได้ดำเนินมาจนถึงตอนนี้',
    currentLabel: 'กำลังดำเนินการ',
    items: [
      { current: true, date: '2025 — ปัจจุบัน', title: 'ผู้ช่วยวิจัย, Tremplin Recherche', org: 'ESIEE Paris', body: 'พัฒนา DEMNE ไปป์ไลน์ NER ทางคลินิกแบบไฮบริดสำหรับข้อความมะเร็งวิทยาภาษาฝรั่งเศส ในฐานะโครงการหลักของหลักสูตร Tremplin Recherche ก่อนการสมัครปริญญาเอก' },
      { current: true, date: '2026 — ปัจจุบัน', title: 'ผู้ก่อตั้งและ Product Lead, NeuroStep', org: 'Junior Entreprise ESIEE Paris', body: 'สร้างแพลตฟอร์มที่ช่วยให้ผู้ป่วยสมองบาดเจ็บและนักกิจกรรมบำบัดของพวกเขามีวิธีที่เป็นระบบในการเปรียบเทียบเครื่องมือดิจิทัลเพื่อชดเชยความบกพร่องทางปัญญา เริ่มต้นจากต้นแบบ Python/Streamlit ในงานแฮกกาธอน SN@SU (มหาวิทยาลัยซอร์บอนน์ ร่วมกับ Flor Sanchez-Luizard นักกิจกรรมบำบัดที่ UEROS L\'ADAPT อีล-เดอ-ฟร็องส์) ปัจจุบันอยู่ในขั้นตอนวางแผนการสร้างใหม่ในเวอร์ชันโปรดักชัน (FastAPI, PostgreSQL, Next.js) พร้อมโฮสติ้งที่สอดคล้องกับ HDS/RGPD และเอนจินค้นหาเชิงความหมายสำหรับการจับคู่เครื่องมือทางคลินิก' },
      { date: '2024 — 2027', title: 'นักศึกษาวิศวกรรม — Data Science & AI', org: 'ESIEE Paris', body: 'นักศึกษาชั้นปีที่ 4 ในหลักสูตรวิศวกรรมห้าปีของ ESIEE Paris สาขา Data Science & AI (DSIA)' },
      { date: '2025', title: 'นักศึกษาฝึกงานด้านวิศวกรรม, ฝ่าย GRADES', org: 'Synchrotron SOLEIL', body: 'พัฒนาสคริปต์ autopkgtest ด้วย OpenCL เพื่อทดสอบความเข้ากันได้ของ GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) บนโครงสร้างพื้นฐาน Debian/ROCm ผ่าน GitLab Salsa' },
      { date: '2022 — ปัจจุบัน', title: 'ติวเตอร์วิชาวิทยาศาสตร์', org: 'Complétude', body: 'สอนคณิตศาสตร์และฟิสิกส์-เคมีให้กับนักเรียนประมาณสิบคน ตั้งแต่ระดับประถมศึกษาจนถึงมัธยมปลายปีสุดท้าย ควบคู่ไปกับการเรียนวิศวกรรมของผม' },
    ],
  },
  publications: {
    label: '04 — ผลงานตีพิมพ์',
    title: 'ผลงานตีพิมพ์และงานวิจัย',
    subtitle: 'บันทึกเป็นลายลักษณ์อักษรของงาน DEMNE ขณะที่กำลังมุ่งสู่การส่งตีพิมพ์',
    status: 'อยู่ระหว่างการเตรียมการ',
    entryTitle: 'DEMNE: Determination of Extraction Method for Named Entity',
    authors: 'Longeac C. และคณะ',
    journal: 'AIM — Artificial Intelligence in Medicine',
    description: 'ต้นฉบับที่อธิบายรายละเอียดของกรอบการทำงานแบบแคสเคด DEMNE ตัวชี้วัดการกำหนดลักษณะคลังข้อมูลห้าตัวที่ใช้ในการเลือกกระบวนทัศน์ และผลการปรับเทียบจากการค้นหาแบบกริดบนคลังข้อมูลมะเร็งวิทยาภาษาฝรั่งเศสสามชุด',
  },
  projects: {
    label: '05 — ผลงานเด่น',
    title: 'ผลงานเด่น',
    subtitle: 'นอกเหนือจาก DEMNE — เครื่องมือที่สร้างขึ้นตั้งแต่ต้นจนจบสำหรับแฮกกาธอนและงานในรายวิชา',
    items: [
      {
        date: 'มิถุนายน 2026',
        title: 'NeuroStep',
        description:
          'แคตตาล็อกดิจิทัลของเครื่องมือและแอปช่วยเสริมการรับรู้สำหรับผู้ที่มีภาวะสมองบาดเจ็บและเนื้องอก — รองรับด้านการสื่อสาร ความจำ และการวางแผน สร้างขึ้นสำหรับแฮกกาธอน SN@SU ด้วยอินเทอร์เฟซ Streamlit บนที่เก็บข้อมูลแบบ JSON',
        tags: ['Python', 'Streamlit', 'JSON'],
        url: 'https://github.com/longeacc/NeuroStep',
      },
      {
        date: 'ธ.ค. 2025',
        title: 'แดชบอร์ดคุณภาพอากาศ',
        description:
          'แดชบอร์ดเชิงโต้ตอบที่จำลองมลพิษทางอากาศพื้นหลังในฝรั่งเศสย้อนหลัง 15 ปี (2000–2015) จากข้อมูล INERIS/Zenodo — จัดเก็บด้วย SQLite กราฟด้วย Plotly และแผนที่ความร้อนด้วย Leaflet จัดทำร่วมกับเพื่อนร่วมทีม William Zee',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
      },
    ],
  },
  techStack: {
    label: '06 — เทคโนโลยีที่ใช้',
    title: 'เทคโนโลยีที่ใช้',
    subtitle: 'เครื่องมือที่จัดกลุ่มตามความเกี่ยวข้องกับงานข้างต้น — ไม่ใช่รายการทั่วไป',
    categories: [
      {
        title: 'NLP ทางคลินิกและ AI ชีวการแพทย์',
        lines: [
          ['DrBERT-7GB', 'CamemBERT', 'spaCy', 'HuggingFace Transformers'],
          ['CRF Suite', 'sklearn-crfsuite', 'Regex/lexicon design'],
          ['Clinical text preprocessing', 'Domain adaptation'],
        ],
      },
      {
        title: 'ระบบและโครงสร้างพื้นฐาน',
        lines: [
          ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
          ['Linux', 'Debian', 'GitLab CI', 'GitHub Actions'],
          ['OpenCL', 'pyopencl', 'ROCm', 'CUDA (basic)'],
        ],
      },
      {
        title: 'เครื่องมือวิจัย',
        lines: [
          ['PyTorch', 'LaTeX/Overleaf', 'TikZ', 'Zotero'],
          ['Jupyter', 'pandas', 'NumPy', 'matplotlib'],
        ],
      },
    ],
    languagesTitle: 'ภาษา',
    languages: [
      { flag: '🇫🇷', level: 'ภาษาแม่' },
      { flag: '🇬🇧', level: 'C1' },
      { flag: '🇯🇵', level: 'ระดับกลาง' },
      { flag: '🇪🇸', level: 'B2' },
      { flag: '🇮🇹', level: 'กำลังเรียนรู้' },
    ],
  },
  areasOfFocus: {
    label: '07 — จุดเน้นการวิจัย',
    title: 'จุดเน้นการวิจัย',
    items: [
      {
        title: 'การรู้จำเอนทิตีที่มีชื่อทางคลินิก',
        body: 'การสกัดไบโอมาร์กเกอร์ ระยะของโรค และข้อมูลการรักษาจากข้อความมะเร็งวิทยาภาษาฝรั่งเศสที่ไม่มีโครงสร้าง — จุดที่ NLP ทั่วไปล้มเหลวและการปรับตัวเฉพาะโดเมนเริ่มต้นขึ้น',
      },
      {
        title: 'AI แบบประหยัดและตีความได้',
        body: 'ออกแบบระบบที่นำทางไปยังระดับที่โปร่งใสน้อยที่สุดเท่าที่ยังตรงตามเกณฑ์ประสิทธิภาพ การปฏิบัติตาม EU AI Act ในฐานะข้อจำกัดด้านการออกแบบ ไม่ใช่ความคิดภายหลัง',
      },
      {
        title: 'การให้เหตุผลทางชีวการแพทย์แบบหลายรูปแบบ',
        body: 'ทิศทางระยะยาว: การรวมข้อความทางคลินิก ภาพถ่ายทางการแพทย์ และจีโนมิกส์เข้าด้วยกันในโมเดลที่ให้เหตุผลข้ามรูปแบบข้อมูล — แนวทาง world models ที่ประยุกต์ใช้กับการแพทย์',
      },
      {
        title: 'การสอนระบบที่ซับซ้อน',
        body: 'สอนคณิตศาสตร์และฟิสิกส์-เคมีให้นักเรียนประมาณสิบคนที่ Complétude ตั้งแต่ระดับประถมศึกษาจนถึงมัธยมปลายปีสุดท้าย (ไม่รวมระดับอุดมศึกษา) การทำให้แนวคิดที่ซับซ้อนเรียนรู้ได้คือทักษะการวิจัย ไม่ใช่งานเสริม',
      },
    ],
  },
  writing: {
    label: '08 — บทความ',
    title: 'บันทึกจากงานวิจัย',
    subtitle: 'บทความเชิงลึกเกี่ยวกับวิธีการ ทางตัน และการตัดสินใจเบื้องหลังงานข้างต้น',
    posts: [
      { status: 'ฉบับร่าง — เร็วๆ นี้', title: 'ทำไม NER ทางคลินิกภาษาฝรั่งเศสจึงทำให้โมเดลทั่วไปล้มเหลว', body: 'ภาพรวมของจุดที่ไปป์ไลน์ NER มาตรฐานล้มเหลวในรายงานมะเร็งวิทยาภาษาฝรั่งเศส และความหมายของสิ่งนี้ต่อโครงสร้างของ DEMNE' },
      { status: 'ฉบับร่าง — เร็วๆ นี้', title: 'การสกัดแบบขั้นตอนเทียบกับโมเดลขนาดใหญ่เดี่ยว', body: 'เหตุผลในการส่งเอนทิตีผ่านกฎเกณฑ์ CRF และ Transformer ที่ปรับแต่งแล้ว ก่อนที่จะเรียกใช้ LLM เลย — และต้นทุนของความผิดพลาดในเรื่องนี้' },
    ],
  },
  contact: {
    title: 'มาคุยกันเรื่อง NLP ทางคลินิก, AI ชีวการแพทย์ หรือความร่วมมือด้านปริญญาเอกกันเถอะ',
    directLabel: 'ติดต่อโดยตรง',
    elsewhereLabel: 'ที่อื่น',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'สร้างขึ้นด้วยไปป์ไลน์แบบไฮบริดของตัวเอง',
  },
};

export const dictionaries: Record<Lang, Dictionary> = {
  en, fr, es, de, it, pt, nl, zh, ja, ko, ru, ar, hi, tr, pl, vi, id, sv, uk, th,
};
