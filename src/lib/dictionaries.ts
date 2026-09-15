export type Lang = 'fr' | 'en';

export type PipelineStage = { num: string; title: string; body: string };
export type AiActArticle = { code: string; label: string; desc: string };
export type Metric = { value: number; prefix?: string; suffix: string; decimals?: number; superscript?: boolean; label: string };
export type TimelineItem = { date: string; title: string; org: string; body: string };
export type WritingPost = { status: string; title: string; body: string };

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
    langSwitchLabel: string;
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
  writing: {
    label: string;
    title: string;
    subtitle: string;
    posts: WritingPost[];
  };
  contact: {
    title: string;
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
      'Research in clinical NLP and biomedical AI. Engineering student at ESIEE Paris, Data Science & AI track, Tremplin Recherche program. Heading toward a PhD in AI applied to biomedical research.',
  },
  nav: {
    about: 'About',
    research: 'Research',
    experience: 'Experience',
    publications: 'Publications',
    writing: 'Writing',
    contact: 'Contact',
    langSwitchLabel: 'FR',
    themeToggleLabel: 'Toggle theme',
    menuToggleLabel: 'Toggle menu',
  },
  hero: {
    kicker: 'Tremplin Recherche · ESIEE Paris',
    h1Pre: 'Building NLP systems that ',
    h1Accent: 'read clinical language',
    h1Post: ' the way oncologists do.',
    sub: "I'm Clément Longeac, an engineering student working at the intersection of clinical NLP and biomedical AI — currently building hybrid extraction pipelines for French oncology records, on the way to a PhD in AI applied to biomedical research.",
    ctaResearch: 'See the research',
    ctaCV: 'Download CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, live schematic',
  },
  about: {
    label: '01 — About',
    title: 'From tutoring math to modeling tumor markers',
    p1: "I'm a fourth-year student at ESIEE Paris, specializing in Data Science & AI, and enrolled in the school's Tremplin Recherche track — a program built for students heading toward doctoral research rather than a standard industry placement.",
    p2: 'My work centers on making unstructured clinical text usable for research: extracting the biomarkers, staging information, and treatment details buried in French oncology reports, where general-purpose NLP tools consistently fail on domain vocabulary and document structure.',
    p3: "Alongside my studies I tutor mathematics, physics, and computer science through Complétude, and I'm preparing applications for a CIFRE industrial PhD in biomedical AI at Sorbonne University.",
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
      { value: 83.1, suffix: '%', decimals: 1, label: 'Exact ternary concordance across 65 entities, 3 multi-institutional corpora' },
      { value: 4, prefix: '×10', suffix: '', superscript: true, label: 'Energy cost reduction vs. a full-LLM baseline, from a 12,636-configuration grid search' },
      { value: 11, suffix: 'M', label: "Patient records in AP-HP's Entrepôt de Données de Santé the pipeline runs against" },
    ],
  },
  experience: {
    label: '03 — Experience',
    title: 'Where the work has happened so far',
    items: [
      {
        date: '2025 — Present',
        title: 'Research Assistant, Tremplin Recherche',
        org: 'ESIEE Paris',
        body: 'Developing DEMNE, a hybrid clinical NER pipeline for French oncology text, as the core project of the Tremplin Recherche track ahead of PhD applications.',
      },
      {
        date: '2026 — Present',
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
        body: 'Teaching mathematics, physics, and computer science to secondary and university students alongside my engineering studies.',
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
  writing: {
    label: '05 — Writing',
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
    title: 'Clément Longeac — Recherche IA, NLP clinique & IA biomédicale',
    description:
      'Recherche en NLP clinique et IA biomédicale. Ingénieur ESIEE Paris, spécialisation Data Science & IA, programme Tremplin Recherche. Vers un doctorat en IA appliquée à la recherche biomédicale.',
  },
  nav: {
    about: 'À propos',
    research: 'Recherche',
    experience: 'Expérience',
    publications: 'Publications',
    writing: 'Écrits',
    contact: 'Contact',
    langSwitchLabel: 'EN',
    themeToggleLabel: 'Changer de thème',
    menuToggleLabel: 'Ouvrir le menu',
  },
  hero: {
    kicker: 'Tremplin Recherche · ESIEE Paris',
    h1Pre: 'Concevoir des systèmes de NLP qui ',
    h1Accent: 'lisent le langage clinique',
    h1Post: ' comme un oncologue.',
    sub: "Je suis Clément Longeac, étudiant ingénieur à l'intersection du NLP clinique et de l'IA biomédicale — je construis actuellement des pipelines d'extraction hybrides pour des comptes rendus d'oncologie en français, en vue d'un doctorat en IA appliquée à la recherche biomédicale.",
    ctaResearch: 'Voir la recherche',
    ctaCV: 'Télécharger le CV',
    caption: 'DEMNE — Rules → CRF → Transformer → LLM, schéma en direct',
  },
  about: {
    label: '01 — À propos',
    title: 'Du soutien scolaire en maths à la modélisation de biomarqueurs tumoraux',
    p1: "Je suis étudiant en quatrième année à ESIEE Paris, spécialisation Data Science & IA, inscrit dans le parcours Tremplin Recherche de l'école — un programme conçu pour les étudiants visant une thèse plutôt qu'un stage classique en entreprise.",
    p2: "Mon travail consiste à rendre exploitable le texte clinique non structuré : extraire les biomarqueurs, les informations de stadification et les détails de traitement enfouis dans les comptes rendus d'oncologie français, là où les outils NLP génériques échouent systématiquement face au vocabulaire et à la structure documentaire du domaine.",
    p3: "En parallèle de mes études, je donne des cours de mathématiques, physique et informatique via Complétude, et je prépare des candidatures pour une thèse CIFRE en IA biomédicale à Sorbonne Université.",
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
      { value: 83.1, suffix: '%', decimals: 1, label: 'Concordance ternaire exacte sur 65 entités, 3 corpus multi-institutionnels' },
      { value: 4, prefix: '×10', suffix: '', superscript: true, label: "Réduction du coût énergétique vs une base LLM complète, sur une recherche en grille de 12 636 configurations" },
      { value: 11, suffix: 'M', label: "Dossiers patients de l'Entrepôt de Données de Santé de l'AP-HP sur lesquels tourne le pipeline" },
    ],
  },
  experience: {
    label: '03 — Expérience',
    title: "Où le travail s'est déroulé jusqu'ici",
    items: [
      {
        date: '2025 — Présent',
        title: 'Assistant de recherche, Tremplin Recherche',
        org: 'ESIEE Paris',
        body: "Développement de DEMNE, un pipeline hybride de NER clinique pour le texte d'oncologie français, projet central du parcours Tremplin Recherche en vue des candidatures de thèse.",
      },
      {
        date: '2026 — Présent',
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
        body: "Cours de mathématiques, physique et informatique pour élèves du secondaire et étudiants, en parallèle de mes études d'ingénieur.",
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
  writing: {
    label: '05 — Écrits',
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
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'Construit avec son propre pipeline hybride',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, fr };
