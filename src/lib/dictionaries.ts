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
export type TimelineItem = { date: string; title: string; org: string; body: string; current?: boolean; skills?: string[] };
export type WritingPost = { status: string; title: string; body: string; content?: string };
export type Project = {
  date: string;
  title: string;
  description: string;
  longBody?: string;
  tags: string[];
  url: string;
  image?: string;
  demo?: string;
  report?: string;
};
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
    more?: string;
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
    bookCall: string;
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
    kicker: 'ESIEE Paris · Open to a 6-month research internship · Clinical NLP & Biomedical AI · from Feb 2027',
    h1Pre: 'Extracting biomarkers from clinical text ',
    h1Accent: 'without waking the GPU',
    h1Post: '',
    sub: "I'm Clément Longeac. I build DEMNE, a routing framework that picks, per entity type, the lightest method that stays reliable — rules, a transformer, or an LLM. On an unseen AP-HP cohort it routes 99.5% of mentions to auditable rules at F1 0.941, where a fine-tuned transformer reaches 0.358.",
    ctaResearch: 'See the research',
    ctaCV: 'Download CV',
    caption: 'DEMNE — decision graph: entity metrics route to Rules, TBM or LLM',
  },
  about: {
    label: '01 — About',
    title: 'From tutoring math to modeling tumor markers',
    p1: "I'm a fifth-year student at ESIEE Paris, specializing in Data Science & AI, and enrolled in the school's Tremplin Recherche track — a program built for students heading toward doctoral research rather than a standard industry placement.",
    p2: 'My work centers on making unstructured clinical text usable for research: extracting the biomarkers, staging information, and treatment details buried in French oncology reports, where general-purpose NLP tools consistently fail on domain vocabulary and document structure.',
    p3: "Alongside my studies I tutor mathematics and physics-chemistry through Complétude, and I'm preparing applications for a CIFRE industrial PhD in biomedical AI at Sorbonne University.",
    visionLine: '',
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
    title: 'DEMNE',
    subtitle: 'A hybrid named-entity recognition pipeline for French oncology clinical text.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Clinical NER · French oncology corpora',
    p1: "Off-the-shelf NER models struggle badly on French clinical text: dense abbreviations, inconsistent formatting across hospital systems, and biomarker terminology that barely appears in general training data. DEMNE tackles this with a staged pipeline rather than a single model — each stage handles what it's actually good at, and only escalates to a heavier model when it has to.",
    p2: 'The system is fine-tuned on DrBERT-7GB across three distinct French oncology corpora, and targets seven priority biomarker entity types used in treatment-relevant reporting.',
    tags: ['Clinical NLP', 'Transformers', 'DrBERT-7GB', 'French oncology'],
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
        title: 'Transformer extraction',
        body: 'DrBERT-7BG, fine-tuned across three oncology corpora, handles the entities that need real semantic and domain understanding.',
      },
      {
        num: '03',
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
          desc: 'Every extraction decision is traceable to the stage (rules, transformer, or LLM) and confidence score that produced it, enabling automatic audit logging.',
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
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules on an unseen AP-HP cohort (411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT, same entities' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — Experience',
    title: 'Where the work has happened so far',
    currentLabel: 'Ongoing',
    items: [
      {
        date: 'May — Jul 2026',
        title: 'Research Intern, Clinical Data Warehouse',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Applied and validated the DEMNE routing approach on hospital data: extracting oncology biomarkers (ER, PR, HER2, Ki67, FISH) from French clinical reports, and defining an auditable, deployment-realistic clinical path.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Oct 2025 — May 2026',
        title: 'Student Researcher, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Designed DEMNE, a hybrid clinical NER pipeline (rules / transformer / LLM) for French oncology text, driven by five formalized corpus metrics — the core project of the Tremplin Recherche track ahead of PhD applications.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 — Present',
        title: 'Product Lead & Developer, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Building a platform that gives brain-injury patients and occupational therapists a structured way to compare cognitive-compensation tools. Started as a Python/Streamlit prototype at the SN@SU hackathon (Sorbonne Université, with Flor Sanchez-Luizard, occupational therapist at UEROS L\'ADAPT Île-de-France); now scoping a production rebuild (FastAPI, PostgreSQL, Next.js) with HDS/RGPD-compliant hosting and a semantic search engine for clinical tool matching.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 — 2027',
        title: 'Engineering Student — Data Science & AI',
        org: 'ESIEE Paris',
        body: "Fifth-year student in ESIEE Paris's five-year engineering program, specializing in Data Science & AI (DSIA).",
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Engineering Intern, GRADES Division',
        org: 'Synchrotron SOLEIL',
        body: 'Developed autopkgtests using OpenCL for AMD GPU compatibility (pyopencl, nabu, ufo-filters, pyvkfft) across Debian/ROCm infrastructure on GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 — Present',
        title: 'STEM Tutor',
        org: 'Complétude',
        body: 'Teaching mathematics and physics-chemistry to about ten students, from primary school through terminale, alongside my engineering studies.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
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
    subtitle: 'Beyond DEMNE — tools built end to end, from a hackathon to data and infrastructure work. Click a project for details.',
    more: 'Learn more →',
    items: [
      {
        date: 'June 2026 · SN@SU hackathon',
        title: 'NeuroStep',
        description:
          'A catalog of digital cognitive-compensation tools for people with brain injuries and their occupational therapists.',
        longBody:
          'NeuroStep started at the SN@SU hackathon (Sorbonne Université). Occupational therapists and patients can find apps for communication, memory and planning without searching app stores one by one: each tool is listed, classified by disorder and theme, and searchable.\nThe MVP is a Streamlit application backed by a JSON store, now scoping a production rebuild with FastAPI, PostgreSQL and a Next.js frontend.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Dec. 2025 · Team project',
        title: 'Air Quality Dashboard',
        description:
          'An interactive dashboard reconstructing 15 years of background air pollution across France (2000–2015).',
        longBody:
          'A data pipeline and interactive dashboard over INERIS commune-level indicators (Zenodo). Scripts download, clean and store the data in SQLite; the dashboard renders a Leaflet pollution heatmap with a year slider and pollutant filters, alongside Plotly charts.\nBuilt with teammate William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Course project',
        title: 'Face Recognition with Deep Learning',
        description:
          'CNN-based face recognition on still images then video, using data augmentation and face alignment.',
        longBody:
          'A course project on modern face recognition. A first model trained on only 218 images overfit heavily; data augmentation (rotation, zoom) and a face-alignment step that normalizes eye and lip positions, combined with a pre-trained network, improved generalization. The goal was to detect faces in video from the project’s own dataset.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Pair project',
        title: 'TBA — Text Adventure Game',
        description:
          'A terminal text-adventure game in Python, with an object-oriented design.',
        longBody:
          'A text adventure played in the terminal: the player moves between eight rooms by typing commands. The code is split into small single-responsibility classes (game, room, player, command, action, character, item), so adding a room or an item stays a local change.\nBuilt with Anne-Colombe André at ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Feb. 2025 · Team project',
        title: 'Marmiton Data Intelligence',
        description:
          'A culinary data-analytics platform: scraping, ETL and a dashboard over recipe data.',
        longBody:
          'A data-engineering team project that scrapes recipe data from Marmiton, runs an ETL pipeline, and exposes the results through an analytics dashboard. Built in Python with Jupyter notebooks for exploration.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'autopkgtest scripts validating scientific software on AMD GPUs, on Debian’s CI infrastructure.',
        longBody:
          'A 4-month internship in the Div/Exp GRADES division at Synchrotron SOLEIL, supervised by Emmanuel Farhi and Frédéric-Emmanuel Picca. The aim was to reduce the scientific-computing stack’s dependence on NVIDIA/CUDA by testing whether Debian scientific packages run on AMD GPUs through ROCm.\nI wrote OpenCL autopkgtests and validated the builds in a podman+ROCm container (via sbuild), then upstreamed them to Debian’s GitLab Salsa. ROCm autotests were added for PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx and sasmodels; packages with no OpenCL code (genx, examl) or stuck on an unfinished Python 2→3 migration (pysph) were ruled out. It is a first set of building blocks helping the wider Debian scientific community move from NVIDIA to AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
        status: 'Published · Oct 2026',
        title: 'Why French clinical NER breaks general-purpose models',
        body: 'A walkthrough of where standard NER pipelines fail on French oncology reports, and what that implies for how DEMNE is structured.',
        content: `<p>Pull up a French oncology report and most off-the-shelf NER models stumble within the first sentence. The vocabulary is dense and abbreviated (ER, PR, HER2, Ki67, FISH), the formatting shifts from one hospital to the next, and the biomarker terminology that matters is almost absent from the corpora these models were trained on. The usual reflex &mdash; throw a large model at it &mdash; works, but it is expensive, opaque, and hard to defend to a clinician or an auditor.</p><h2>Not every entity needs an LLM</h2><p>DEMNE starts from a blunt observation: the entities in these reports are not equally hard. A biopsy mention is written in a handful of stable ways; a drug name can appear in a hundred. So instead of one model for everything, DEMNE measures each entity type and sends it to the lightest method that is reliable enough &mdash; a deterministic rule, a fine-tuned transformer, or an LLM only as a last resort.</p><p>The measurement is five corpus metrics computed from the annotations: how templateable the surface form is, how homogeneous the vocabulary is, whether a small keyword set is discriminative, how often the mention sits under negation or contradiction, and whether there is enough labelled data to train a supervised model at all. A deterministic decision graph turns those numbers into a tier, and its 17 thresholds are calibrated with a multi-objective search that penalises sending an entity to a method that is too weak twice as hard as sending it to one that is merely too expensive.</p><h2>What it buys</h2><p>On the oncology calibration set (59 entity types), the routing agrees with the expert reference tier with a concordance of 0.954 and a leave-one-corpus-out estimate of 0.866 &mdash; well above any fixed-tier baseline (always-rules reaches 0.729, always-LLM 0.148). The more convincing test is external: applied without any retuning to 300 AP-HP CT-scan reports from cancer sites the model had never seen, DEMNE routed 99.5% of highlighted mentions (411 of 413) to deterministic rules. Those rules reached a mean F1 of 0.941, while a transformer fine-tuned on the same entities under a realistic hospital budget managed only 0.358.</p><p>In other words: for the standardized entities that dominate oncology reporting, rules were not just cheaper &mdash; they were better, and every rule decision traces back to an explicit condition, which is exactly what Articles 12 and 14 of the EU AI Act ask for.</p><h2>Where it stops</h2><p>I want to be honest about the limits. The reference standard is small &mdash; 92 entity types, 59 of them in oncology &mdash; so single-corpus scores are optimistic and only relative comparisons hold. The LLM tier was never evaluated end to end on the external cohort; its one routed entity was too rare. And the calibration does not transfer across domains: move to a different clinical genre or language and concordance drops to 0.45&ndash;0.73, so the thresholds have to be refit. DEMNE is a proof of feasibility, not a finished product.</p><h2>Why it matters</h2><p>The point is not that rules beat transformers. It is that &ldquo;which method&rdquo; is a question you can answer per entity, from measurable properties of the text, instead of defaulting to the heaviest model and hoping. For clinical NLP &mdash; where cost, auditability and trust all matter at once &mdash; that framing is worth more than another percentage point on a benchmark.</p><p>The code and the full method are on <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; the manuscript is in preparation.</p>`,
      },
      {
        status: 'Published · Oct 2026',
        title: 'Staged extraction vs. a single large model',
        body: 'The case for routing entities through rules and a fine-tuned transformer before ever calling an LLM — and what it costs to get wrong.', content: `<p>Hand a hard NLP problem to a team today and the reflex is to reach for the biggest model available and let it sort everything out. On French clinical text that reflex is expensive, slow, and hard to audit &mdash; and, it turns out, not even the most accurate. DEMNE makes the opposite bet: send each entity type to the lightest tool that can handle it, and escalate only when the text truly demands it.</p><h2>A staircase, not a hammer</h2><p>The pipeline has three tiers. Deterministic rules &mdash; regex and curated lexicons &mdash; take the entities written in a few stable ways: dates, dosages, standard biomarker abbreviations. A transformer fine-tuned on French oncology text handles the entities that need real semantic and domain understanding. An LLM sits at the top, reserved for the genuinely ambiguous cases that survive both earlier stages. Nothing climbs higher than it has to.</p><h2>Why not just the LLM?</h2><p>Because one big model pays the LLM’s price on every entity, including the ones a regex would have nailed instantly. It is slower, it needs a GPU budget most hospitals do not have, and every decision is a black box you still have to defend to a clinician or an auditor. And on the routing task itself the always-LLM baseline was the worst performer, agreeing with the expert tier only 0.148 of the time. The heaviest tool is not automatically the most reliable.</p><h2>The cost of routing wrong</h2><p>Staged extraction only pays off if the routing is good, so that is where DEMNE spends its care. Five metrics measured from the annotations feed a deterministic decision graph whose 17 thresholds are calibrated by a multi-objective search. The objective is deliberately asymmetric: sending an entity to a method that is too weak is penalised twice as hard as sending it to one that is merely too expensive &mdash; because a missed extraction in a clinical report costs more than a wasted GPU second.</p><h2>What the numbers say</h2><p>On the oncology calibration set the routing matches the expert reference tier 0.954 of the time, against 0.729 for always-rules and 0.148 for always-LLM. Applied untouched to 300 unseen AP-HP reports, it routed 99.5% of mentions to deterministic rules, which reached a mean F1 of 0.941 &mdash; where a transformer fine-tuned under a realistic hospital budget managed 0.358. For the standardized entities that dominate these reports, the cheap tier was also the accurate one.</p><h2>When a single model is the right answer</h2><p>Staging is not free: it adds a routing layer to build, measure and maintain, and the thresholds must be recalibrated for each new domain. If the text is uniform, the entities are all equally hard, or there is budget and audit tolerance for one large model, the staircase is just overhead. The claim here is narrow &mdash; when cost, latency and traceability matter at once, as they do in clinical NLP, deciding per entity beats defaulting to the heaviest model and hoping.</p><p>The code and the full method are on <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; the manuscript is in preparation.</p>` },
    ],
  },
  contact: {
    title: "Let's talk about clinical NLP, biomedical AI, or a PhD collaboration.",
    directLabel: 'Direct',
    elsewhereLabel: 'Elsewhere',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Book a call',
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
    kicker: 'ESIEE Paris · En recherche d’un stage recherche de 6 mois · NLP clinique & IA biomédicale · dès févr. 2027',
    h1Pre: 'Extraire des biomarqueurs depuis du texte clinique ',
    h1Accent: 'sans réveiller le GPU',
    h1Post: '',
    sub: "Je suis Clément Longeac. Je conçois DEMNE, un cadre de routage qui choisit, pour chaque type d'entité, la méthode la plus légère qui reste fiable : règles, transformer ou LLM. Sur une cohorte AP-HP jamais vue, il route 99,5 % des mentions vers des règles auditables à F1 0,941, là où un transformer affiné atteint 0,358.",
    ctaResearch: 'Voir la recherche',
    ctaCV: 'Télécharger le CV',
    caption: 'DEMNE — Rules → Transformer → LLM, schéma en direct',
  },
  about: {
    label: '01 — À propos',
    title: 'Du soutien scolaire en maths à la modélisation de biomarqueurs tumoraux',
    p1: "Je suis étudiant en cinquième année à ESIEE Paris, spécialisation Data Science & IA, inscrit dans le parcours Tremplin Recherche de l'école — un programme conçu pour les étudiants visant une thèse plutôt qu'un stage classique en entreprise.",
    p2: "Mon travail consiste à rendre exploitable le texte clinique non structuré : extraire les biomarqueurs, les informations de stadification et les détails de traitement enfouis dans les comptes rendus d'oncologie français, là où les outils NLP génériques échouent systématiquement face au vocabulaire et à la structure documentaire du domaine.",
    p3: "En parallèle de mes études, je donne des cours de mathématiques et de physique-chimie via Complétude, et je prépare des candidatures pour une thèse CIFRE en IA biomédicale à Sorbonne Université.",
    visionLine:
      '',
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
    title: 'DEMNE',
    subtitle: "Un pipeline hybride de reconnaissance d'entités nommées pour le texte clinique oncologique français.",
    h3: "Determination of Extraction Methods for Named Entities",
    tagline: 'NER clinique · corpus d\'oncologie français',
    p1: "Les modèles NER génériques échouent nettement sur le texte clinique français : abréviations denses, mise en forme incohérente selon les établissements, et terminologie de biomarqueurs quasi absente des corpus d'entraînement généraux. DEMNE répond à ça par un pipeline en étages plutôt qu'un modèle unique — chaque étage traite ce qu'il fait le mieux, et n'escalade vers un modèle plus lourd que si nécessaire.",
    p2: "Le système est affiné sur DrBERT-7GB à travers trois corpus d'oncologie français distincts, et cible sept types d'entités biomarqueurs prioritaires utilisés dans les comptes rendus à visée thérapeutique.",
    tags: ['NLP clinique', 'Transformers', 'DrBERT-7GB', 'Oncologie française'],
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
        title: 'Extraction par transformer',
        body: "DrBERT-7GB, affiné sur trois corpus d'oncologie, traite les entités qui exigent une réelle compréhension sémantique et de domaine.",
      },
      {
        num: '03',
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
          desc: "Chaque décision d'extraction est traçable jusqu'à l'étage (règles, transformer ou LLM) et au score de confiance qui l'a produite, ce qui permet une journalisation automatique pour l'audit.",
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
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'des mentions routées vers les règles (cohorte AP-HP jamais vue, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'F1 des règles contre 0,358 pour un DrBERT affiné, mêmes entités' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'concordance de routage en leave-one-corpus-out' },
    ],
  },
  experience: {
    label: '03 — Expérience',
    title: "Où le travail s'est déroulé jusqu'ici",
    currentLabel: 'En cours',
    items: [
      {
        date: 'Mai — Juil. 2026',
        title: 'Stagiaire recherche, Entrepôt de Données de Santé',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: "Application et validation de l'approche de routage DEMNE sur données hospitalières : extraction de biomarqueurs oncologiques (ER, PR, HER2, Ki67, FISH) à partir de comptes rendus cliniques français, et définition d'un parcours de déploiement clinique auditable et réaliste.",
        skills: ['NLP clinique', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Oct. 2025 — Mai 2026',
        title: 'Chercheur étudiant, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: "Conception de DEMNE, un pipeline hybride de NER clinique (règles / transformer / LLM) pour le texte d'oncologie français, piloté par cinq métriques de corpus formalisées — projet central du parcours Tremplin Recherche en vue des candidatures de thèse.",
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 — Présent',
        title: 'Product Lead & développeur, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: "Construction d'une plateforme donnant aux patients cérébrolésés et à leurs ergothérapeutes un moyen structuré de comparer les outils numériques de compensation cognitive. Née en prototype Python/Streamlit au hackathon SN@SU (Sorbonne Université, avec des ergothérapeutes partenaires) ; en cadrage vers une refonte de production (FastAPI, PostgreSQL, Next.js) avec hébergement conforme HDS/RGPD et recherche sémantique pour l'appariement clinique.",
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 — 2027',
        title: 'Étudiant ingénieur — Data Science & IA',
        org: 'ESIEE Paris',
        body: "Étudiant en cinquième année du cursus ingénieur en cinq ans d'ESIEE Paris, spécialisation Data Science & IA (DSIA).",
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Stagiaire ingénieur, division GRADES',
        org: 'Synchrotron SOLEIL',
        body: "Développement d'autopkgtests en OpenCL pour la compatibilité GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) sur l'infrastructure Debian/ROCm via GitLab Salsa.",
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 — Présent',
        title: 'Tuteur scientifique',
        org: 'Complétude',
        body: "Cours de mathématiques et de physique-chimie à une dizaine d'élèves, du primaire jusqu'à la terminale, en parallèle de mes études d'ingénieur.",
        skills: ['Mathématiques', 'Physique', 'Pédagogie'],
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
      "Au-delà de DEMNE — des outils construits de bout en bout, du hackathon aux projets de données et d'infrastructure. Clique sur un projet pour le détail.",
    more: 'En savoir plus →',
    items: [
      {
        date: 'Juin 2026 · Hackathon SN@SU',
        title: 'NeuroStep',
        description:
          "Un catalogue d'outils numériques de compensation cognitive pour les personnes cérébrolésées et leurs ergothérapeutes.",
        longBody:
          "NeuroStep est né au hackathon SN@SU (Sorbonne Université). Ergothérapeutes et patients trouvent des applications d'aide à la communication, à la mémoire et à la planification sans parcourir les magasins d'applications un par un : chaque outil est listé, classé par trouble et par thème, et cherchable.\nLe MVP est une application Streamlit reposant sur un stockage JSON, en cadrage vers une refonte de production (FastAPI, PostgreSQL, Next.js).",
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Déc. 2025 · En équipe',
        title: "Tableau de bord qualité de l'air",
        description:
          "Un tableau de bord interactif reconstituant 15 ans de pollution atmosphérique de fond en France (2000–2015).",
        longBody:
          "Un pipeline de données et un tableau de bord interactif sur les indicateurs communaux de l'INERIS (Zenodo). Des scripts téléchargent, nettoient et stockent les données dans SQLite ; le tableau de bord affiche une carte de chaleur Leaflet avec un curseur d'année et des filtres par polluant, aux côtés de graphiques Plotly.\nRéalisé avec mon coéquipier William Zee.",
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Projet de cours',
        title: 'Reconnaissance faciale par deep learning',
        description:
          "Reconnaissance de visages par CNN, d'abord sur images fixes puis en vidéo, avec augmentation de données et alignement des visages.",
        longBody:
          "Un projet de cours sur la reconnaissance faciale moderne. Un premier modèle entraîné sur seulement 218 images surapprenait fortement ; l'augmentation de données (rotation, zoom) et une étape d'alignement des visages qui normalise la position des yeux et des lèvres, combinées à un réseau pré-entraîné, ont amélioré la généralisation. L'objectif était de détecter des visages en vidéo à partir du jeu de données du projet.",
        tags: ['Python', 'TensorFlow', 'CNN', 'Augmentation de données'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Projet en binôme',
        title: "TBA — jeu d'aventure textuel",
        description:
          "Un jeu d'aventure textuel en Python joué au terminal, à la conception orientée objet.",
        longBody:
          "Un jeu d'aventure joué au terminal : le joueur se déplace entre huit lieux en tapant des commandes. Le code est découpé en petites classes à responsabilité unique (jeu, lieu, joueur, commande, action, personnage, objet), si bien qu'ajouter un lieu ou un objet reste une modification locale.\nRéalisé avec Anne-Colombe André à l'ESIEE Paris.",
        tags: ['Python', 'POO'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Fév. 2025 · En équipe',
        title: 'Marmiton Data Intelligence',
        description:
          "Une plateforme d'analyse de données culinaires : scraping, ETL et tableau de bord.",
        longBody:
          "Un projet de data engineering en équipe qui scrape les données de recettes de Marmiton, applique un pipeline ETL et expose les résultats dans un tableau de bord analytique. Réalisé en Python, avec des notebooks Jupyter pour l'exploration.",
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          "Scripts autopkgtest validant des logiciels scientifiques sur GPU AMD, sur l'infrastructure CI de Debian.",
        longBody:
          'Stage de 4 mois dans la division Div/Exp GRADES du Synchrotron SOLEIL, encadré par Emmanuel Farhi et Frédéric-Emmanuel Picca. L’objectif : réduire la dépendance de la chaîne de calcul scientifique à NVIDIA/CUDA en testant si les paquets scientifiques Debian tournent sur GPU AMD via ROCm.\nJ’ai écrit des autopkgtests OpenCL et validé les builds dans un conteneur podman+ROCm (via sbuild), puis je les ai intégrés en amont sur le GitLab Salsa de Debian. Des autotests ROCm ont été ajoutés pour PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx et sasmodels ; les paquets sans code OpenCL (genx, examl) ou bloqués sur une migration Python 2→3 inachevée (pysph) ont été écartés. C’est un premier jeu de briques qui aide toute la communauté scientifique Debian à passer de NVIDIA à AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
        status: 'Publié · oct. 2026',
        title: 'Pourquoi le NER clinique français casse les modèles génériques',
        body: "Un état des lieux des points où les pipelines NER standards échouent sur les comptes rendus d'oncologie français, et ce que ça implique pour la structure de DEMNE.",
        content: `<p>Ouvrez un compte rendu d'oncologie fran&ccedil;ais et la plupart des mod&egrave;les de NER pr&ecirc;ts &agrave; l'emploi tr&eacute;buchent d&egrave;s la premi&egrave;re phrase. Le vocabulaire est dense et abr&eacute;g&eacute; (ER, PR, HER2, Ki67, FISH), la mise en forme change d'un h&ocirc;pital &agrave; l'autre, et la terminologie des biomarqueurs qui compte est presque absente des corpus sur lesquels ces mod&egrave;les ont &eacute;t&eacute; entra&icirc;n&eacute;s. Le r&eacute;flexe habituel &mdash; y jeter un gros mod&egrave;le &mdash; fonctionne, mais il est co&ucirc;teux, opaque et difficile &agrave; justifier devant un clinicien ou un auditeur.</p><h2>Toute entit&eacute; n'a pas besoin d'un LLM</h2><p>DEMNE part d'un constat simple&nbsp;: les entit&eacute;s de ces comptes rendus ne sont pas &eacute;galement difficiles. Une mention de biopsie s'&eacute;crit de quelques fa&ccedil;ons stables&nbsp;; un nom de m&eacute;dicament peut appara&icirc;tre sous cent formes. Plut&ocirc;t qu'un mod&egrave;le unique pour tout, DEMNE mesure chaque type d'entit&eacute; et l'envoie vers la m&eacute;thode la plus l&eacute;g&egrave;re qui reste fiable &mdash; une r&egrave;gle d&eacute;terministe, un transformer affin&eacute;, ou un LLM seulement en dernier recours.</p><p>La mesure, ce sont cinq m&eacute;triques de corpus calcul&eacute;es &agrave; partir des annotations&nbsp;: &agrave; quel point la forme de surface est r&eacute;guli&egrave;re, &agrave; quel point le vocabulaire est homog&egrave;ne, si un petit jeu de mots-cl&eacute;s est discriminant, &agrave; quelle fr&eacute;quence la mention appara&icirc;t sous n&eacute;gation ou contradiction, et s'il existe assez de donn&eacute;es annot&eacute;es pour entra&icirc;ner un mod&egrave;le supervis&eacute;. Un graphe de d&eacute;cision d&eacute;terministe transforme ces chiffres en niveau, et ses 17 seuils sont calibr&eacute;s par une recherche multi-objectif qui p&eacute;nalise deux fois plus le fait d'envoyer une entit&eacute; vers une m&eacute;thode trop faible que vers une m&eacute;thode seulement trop co&ucirc;teuse.</p><h2>Ce que &ccedil;a apporte</h2><p>Sur le jeu de calibration oncologie (59 types d'entit&eacute;s), le routage retrouve le niveau de r&eacute;f&eacute;rence des experts avec une concordance de 0,954, et de 0,866 en leave-one-corpus-out &mdash; bien au-dessus de tout pipeline &agrave; niveau fixe (toujours-r&egrave;gles atteint 0,729, toujours-LLM 0,148). Le test le plus convaincant est externe&nbsp;: appliqu&eacute; sans r&eacute;glage &agrave; 300 comptes rendus de scanner de l'AP-HP, sur des localisations canc&eacute;reuses jamais vues, DEMNE a rout&eacute; 99,5&nbsp;% des mentions (411 sur 413) vers des r&egrave;gles d&eacute;terministes. Ces r&egrave;gles ont atteint un F1 moyen de 0,941, l&agrave; o&ugrave; un transformer affin&eacute; sur les m&ecirc;mes entit&eacute;s, dans un budget hospitalier r&eacute;aliste, plafonnait &agrave; 0,358.</p><p>Autrement dit&nbsp;: pour les entit&eacute;s standardis&eacute;es qui dominent le compte rendu oncologique, les r&egrave;gles n'&eacute;taient pas seulement moins ch&egrave;res &mdash; elles &eacute;taient meilleures, et chaque d&eacute;cision de r&egrave;gle se trace jusqu'&agrave; une condition explicite, ce que demandent justement les articles 12 et 14 de l'EU AI Act.</p><h2>O&ugrave; &ccedil;a s'arr&ecirc;te</h2><p>Je veux &ecirc;tre honn&ecirc;te sur les limites. Le standard de r&eacute;f&eacute;rence est petit &mdash; 92 types d'entit&eacute;s, 59 en oncologie &mdash; donc les scores sur un seul corpus sont optimistes et seules les comparaisons relatives tiennent. Le niveau LLM n'a jamais &eacute;t&eacute; &eacute;valu&eacute; de bout en bout sur la cohorte externe&nbsp;; sa seule entit&eacute; rout&eacute;e &eacute;tait trop rare. Et la calibration ne se transf&egrave;re pas entre domaines&nbsp;: sur un autre genre clinique ou une autre langue, la concordance tombe &agrave; 0,45&ndash;0,73, et les seuils doivent &ecirc;tre r&eacute;ajust&eacute;s. DEMNE est une preuve de faisabilit&eacute;, pas un produit fini.</p><h2>Pourquoi &ccedil;a compte</h2><p>Le propos n'est pas que les r&egrave;gles battent les transformers. C'est que &laquo;&nbsp;quelle m&eacute;thode&nbsp;&raquo; est une question qu'on peut trancher entit&eacute; par entit&eacute;, &agrave; partir de propri&eacute;t&eacute;s mesurables du texte, au lieu de choisir par d&eacute;faut le mod&egrave;le le plus lourd en esp&eacute;rant. Pour le NLP clinique &mdash; o&ugrave; le co&ucirc;t, l'auditabilit&eacute; et la confiance comptent en m&ecirc;me temps &mdash; ce cadrage vaut plus qu'un point de pourcentage de plus sur un benchmark.</p><p>Le code et la m&eacute;thode compl&egrave;te sont sur <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>&nbsp;; le manuscrit est en pr&eacute;paration.</p>`,
      },
      {
        status: 'Publié · oct. 2026',
        title: 'Extraction en étages vs un seul grand modèle',
        body: "L'argumentaire pour router les entités à travers des règles puis un transformer affiné avant tout appel à un LLM — et ce que ça coûte de se tromper.", content: `<p>Confiez un problème de NLP difficile à une équipe aujourd’hui, et le réflexe est de sortir le plus gros modèle disponible et de le laisser tout démêler. Sur du texte clinique français, ce réflexe est coûteux, lent et difficile à auditer &mdash; et, au final, même pas le plus précis. DEMNE fait le pari inverse : envoyer chaque type d’entité vers l’outil le plus léger capable de la traiter, et n’escalader que lorsque le texte l’exige vraiment.</p><h2>Un escalier, pas un marteau</h2><p>Le pipeline a trois niveaux. Des règles déterministes &mdash; regex et lexiques choisis &mdash; prennent les entités écrites de quelques façons stables : dates, posologies, abréviations standard de biomarqueurs. Un transformer affiné sur du texte oncologique français traite les entités qui demandent une réelle compréhension sémantique et de domaine. Un LLM se trouve au sommet, réservé aux cas vraiment ambigus qui survivent aux deux étapes précédentes. Rien ne monte plus haut que nécessaire.</p><h2>Pourquoi pas uniquement le LLM ?</h2><p>Parce qu’un seul gros modèle paie le prix du LLM sur chaque entité, y compris celles qu’une regex aurait réglées instantanément. Il est plus lent, il réclame un budget GPU que la plupart des hôpitaux n’ont pas, et chaque décision est une boîte noire qu’il faut quand même justifier devant un clinicien ou un auditeur. Et sur la tâche de routage elle-même, le niveau toujours-LLM était le plus mauvais, retrouvant le niveau expert seulement 0,148 du temps. L’outil le plus lourd n’est pas automatiquement le plus fiable.</p><h2>Le coût d’un mauvais routage</h2><p>L’extraction par étapes ne paie que si le routage est bon ; c’est donc là que DEMNE met son soin. Cinq métriques mesurées à partir des annotations alimentent un graphe de décision déterministe dont les 17 seuils sont calibrés par une recherche multi-objectif. L’objectif est volontairement asymétrique : envoyer une entité vers une méthode trop faible est pénalisé deux fois plus fort que vers une méthode seulement trop coûteuse &mdash; car une extraction manquée dans un compte rendu clinique coûte plus cher qu’une seconde de GPU gaspillée.</p><h2>Ce que disent les chiffres</h2><p>Sur le jeu de calibration oncologie, le routage retrouve le niveau de référence des experts 0,954 du temps, contre 0,729 pour toujours-règles et 0,148 pour toujours-LLM. Appliqué tel quel à 300 comptes rendus AP-HP jamais vus, il a routé 99,5 % des mentions vers des règles déterministes, qui ont atteint un F1 moyen de 0,941 &mdash; là où un transformer affiné dans un budget hospitalier réaliste plafonnait à 0,358. Pour les entités standardisées qui dominent ces comptes rendus, le niveau le moins cher était aussi le plus juste.</p><h2>Quand un modèle unique est la bonne réponse</h2><p>Le découpage en étages n’est pas gratuit : il ajoute une couche de routage à construire, mesurer et maintenir, et les seuils doivent être recalibrés pour chaque nouveau domaine. Si le texte est uniforme, si les entités sont toutes aussi difficiles, ou si l’on a le budget et la tolérance d’audit pour un seul gros modèle, l’escalier n’est que du surcoût. Le propos ici est étroit &mdash; quand le coût, la latence et la traçabilité comptent en même temps, comme en NLP clinique, décider entité par entité vaut mieux que choisir par défaut le modèle le plus lourd en espérant.</p><p>Le code et la méthode complète sont sur <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>&nbsp;; le manuscrit est en préparation.</p>` },
    ],
  },
  contact: {
    title: 'Parlons NLP clinique, IA biomédicale, ou collaboration doctorale.',
    directLabel: 'Direct',
    elsewhereLabel: 'Ailleurs',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Réserver un appel',
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
    kicker: 'ESIEE Paris · Busco unas prácticas de investigación de 6 meses · PLN clínico e IA biomédica · desde feb. 2027',
    h1Pre: 'Extrayendo biomarcadores de texto clínico ',
    h1Accent: 'sin despertar la GPU',
    h1Post: '',
    sub: "Soy Clément Longeac. Construyo DEMNE, un framework de enrutamiento que elige, para cada tipo de entidad, el método más ligero que sigue siendo fiable: reglas, un transformer o un LLM. En una cohorte de AP-HP nunca vista, enruta el 99,5 % de las menciones hacia reglas auditables con un F1 de 0,941, allí donde un transformer afinado alcanza 0,358.",
    ctaResearch: 'Ver la investigación',
    ctaCV: 'Descargar el CV',
    caption: 'DEMNE — Rules → Transformer → LLM, esquema en vivo',
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
    title: 'DEMNE',
    subtitle: 'Un pipeline híbrido de reconocimiento de entidades nombradas para texto clínico oncológico en francés.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER clínico · corpus de oncología en francés',
    p1: 'Los modelos NER genéricos fallan claramente en el texto clínico francés: abreviaturas densas, formato incoherente entre hospitales y terminología de biomarcadores casi ausente de los datos de entrenamiento generales. DEMNE aborda esto con un pipeline por etapas en lugar de un modelo único — cada etapa hace lo que mejor sabe hacer, y solo escala a un modelo más pesado cuando es necesario.',
    p2: 'El sistema está afinado sobre DrBERT-7GB en tres corpus de oncología franceses distintos, y se centra en siete tipos de entidades biomarcadoras prioritarias usadas en informes relevantes para el tratamiento.',
    tags: ['PLN clínico', 'Transformers', 'DrBERT-7GB', 'Oncología francesa'],
    viewRepo: 'Ver el repositorio',
    readMethodology: 'Leer la metodología',
    pipeline: [
      { num: '01', title: 'Paso basado en reglas', body: 'El emparejamiento de patrones (regex, léxicos) capta a bajo coste las entidades de alta confianza y baja ambigüedad — fechas, dosis, abreviaturas estándar de biomarcadores.' },
      { num: '02', title: 'Extracción por transformer', body: 'DrBERT-7GB, afinado en tres corpus de oncología, se encarga de las entidades que requieren una comprensión semántica y de dominio real.' },
      { num: '03', title: 'Arbitraje por LLM', body: 'Los conflictos restantes y los casos límite se enrutan a una pasada de LLM para la desambiguación final antes de la salida.' },
    ],
    aiAct: {
      title: 'Alineación regulatoria — EU AI Act',
      body: 'La extracción de entidades clínicas sobre historiales de pacientes entra de lleno en la categoría de alto riesgo de la EU AI Act. El diseño por etapas de DEMNE tiene en cuenta los artículos 12 y 14 desde el inicio, no como un añadido posterior.',
      articles: [
        { code: 'Art. 12', label: 'Registro de actividad', desc: 'Cada decisión de extracción es trazable hasta la etapa (reglas, transformer o LLM) y la puntuación de confianza que la produjo, permitiendo un registro automático para auditoría.' },
        { code: 'Art. 14', label: 'Supervisión humana', desc: 'Las salidas del arbitraje por LLM se marcan para revisión clínica en lugar de aceptarse silenciosamente, manteniendo a un humano en el bucle en los casos ambiguos.' },
      ],
    },
  },
  metrics: {
    label: 'Resultados',
    title: 'Lo que aporta el enfoque por etapas',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'de las menciones enrutadas a reglas (cohorte AP-HP no vista, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'F1 de las reglas frente a 0,358 de un DrBERT ajustado' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'concordancia de enrutamiento leave-one-corpus-out' },
    ],
  },
  experience: {
    label: '03 — Experiencia',
    title: 'Dónde ha ocurrido el trabajo hasta ahora',
    currentLabel: 'En curso',
    items: [
      {
        date: 'May. – jul. 2026',
        title: 'Investigador en prácticas, Almacén de Datos Clínicos',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Apliqué y validé el enfoque de enrutamiento de DEMNE sobre datos hospitalarios: extracción de biomarcadores oncológicos (ER, PR, HER2, Ki67, FISH) a partir de informes clínicos franceses, y definición de una vía clínica auditable y realista para el despliegue.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Oct. 2025 – may. 2026',
        title: 'Estudiante investigador, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Diseñé DEMNE, un pipeline híbrido de NER clínico (reglas / transformer / LLM) para texto oncológico francés, guiado por cinco métricas de corpus formalizadas — el proyecto central del itinerario Tremplin Recherche de cara a las solicitudes de doctorado.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Presente',
        title: 'Product Lead y desarrollador, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Construcción de una plataforma que da a pacientes con daño cerebral y a sus terapeutas ocupacionales una forma estructurada de comparar herramientas de compensación cognitiva. Nació como prototipo Python/Streamlit en el hackathon SN@SU (Sorbonne Université, con Flor Sanchez-Luizard, terapeuta ocupacional en UEROS L’ADAPT Île-de-France); ahora se define una reconstrucción de producción (FastAPI, PostgreSQL, Next.js) con alojamiento conforme a HDS/RGPD y un motor de búsqueda semántica para el emparejamiento de herramientas clínicas.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Estudiante de ingeniería — Data Science e IA',
        org: 'ESIEE Paris',
        body: 'Estudiante de quinto año del programa de ingeniería de cinco años de ESIEE Paris, especialización Data Science e IA (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Ingeniero en prácticas, división GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'Desarrollo de autopkgtests con OpenCL para la compatibilidad de GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) en la infraestructura Debian/ROCm en GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Presente',
        title: 'Profesor particular de ciencias',
        org: 'Complétude',
        body: 'Clases de matemáticas y física-química a una decena de alumnos, desde primaria hasta el último curso de secundaria, en paralelo a mis estudios de ingeniería.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Saber más →',
    items: [
      {
        date: 'Junio de 2026 · Hackathon SN@SU',
        title: 'NeuroStep',
        description:
          'Un catálogo de herramientas digitales de compensación cognitiva para personas con daño cerebral y sus terapeutas ocupacionales.',
        longBody:
          'NeuroStep nació en el hackathon SN@SU (Sorbonne Université). Terapeutas ocupacionales y pacientes pueden encontrar apps de comunicación, memoria y planificación sin recorrer las tiendas una por una: cada herramienta está listada, clasificada por trastorno y tema, y es buscable.\nEl MVP es una aplicación Streamlit respaldada por un almacén JSON; ahora se define una reconstrucción de producción con FastAPI, PostgreSQL y un frontend Next.js.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Dic. 2025 · Proyecto en equipo',
        title: 'Air Quality Dashboard',
        description:
          'Un panel interactivo que reconstruye 15 años de contaminación atmosférica de fondo en Francia (2000–2015).',
        longBody:
          'Un pipeline de datos y un panel interactivo sobre indicadores comunales de INERIS (Zenodo). Los scripts descargan, limpian y almacenan los datos en SQLite; el panel muestra un mapa de calor de contaminación con Leaflet, con un control de año y filtros de contaminante, junto a gráficos Plotly.\nRealizado con mi compañero William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Proyecto de curso',
        title: 'Face Recognition with Deep Learning',
        description:
          'Reconocimiento facial basado en CNN sobre imágenes fijas y luego vídeo, con aumento de datos y alineación facial.',
        longBody:
          'Un proyecto de curso sobre reconocimiento facial moderno. Un primer modelo entrenado con solo 218 imágenes sufría un fuerte sobreajuste; el aumento de datos (rotación, zoom) y un paso de alineación facial que normaliza la posición de ojos y labios, combinados con una red preentrenada, mejoraron la generalización. El objetivo era detectar rostros en vídeo a partir del propio conjunto de datos del proyecto.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Proyecto en pareja',
        title: 'TBA — Text Adventure Game',
        description:
          'Un juego de aventura textual en terminal, escrito en Python con un diseño orientado a objetos.',
        longBody:
          'Una aventura textual que se juega en la terminal: el jugador se mueve entre ocho salas escribiendo comandos. El código se divide en pequeñas clases de responsabilidad única (juego, sala, jugador, comando, acción, personaje, objeto), de modo que añadir una sala o un objeto sigue siendo un cambio local.\nRealizado con Anne-Colombe André en ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Feb. 2025 · Proyecto en equipo',
        title: 'Marmiton Data Intelligence',
        description:
          'Una plataforma de analítica de datos culinarios: scraping, ETL y un panel sobre datos de recetas.',
        longBody:
          'Un proyecto de ingeniería de datos en equipo que extrae datos de recetas de Marmiton, ejecuta un pipeline ETL y expone los resultados mediante un panel de analítica. Hecho en Python con notebooks Jupyter para la exploración.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Scripts autopkgtest que validan software científico en GPU AMD, sobre la infraestructura de CI de Debian.',
        longBody:
          'Prácticas de 4 meses en la división Div/Exp GRADES del Synchrotron SOLEIL, bajo la dirección de Emmanuel Farhi y Frédéric-Emmanuel Picca. El objetivo: reducir la dependencia de la cadena de cálculo científico respecto a NVIDIA/CUDA probando si los paquetes científicos de Debian funcionan en GPU AMD mediante ROCm.\nEscribí autopkgtests en OpenCL y validé las compilaciones en un contenedor podman+ROCm (vía sbuild), y luego las integré en el GitLab Salsa de Debian. Se añadieron autotests ROCm para PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx y sasmodels; se descartaron los paquetes sin código OpenCL (genx, examl) o bloqueados en una migración de Python 2→3 inconclusa (pysph). Es un primer conjunto de piezas que ayuda a toda la comunidad científica de Debian a pasar de NVIDIA a AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Publicado · oct. 2026', title: 'Por qué el NER clínico francés rompe los modelos genéricos', body: 'Un recorrido por los puntos donde los pipelines NER estándar fallan en los informes de oncología franceses, y lo que eso implica para la estructura de DEMNE.', content: `<p>Abra un informe de oncología en francés y la mayoría de los modelos de NER listos para usar tropiezan en la primera frase. El vocabulario es denso y abreviado (ER, PR, HER2, Ki67, FISH), el formato cambia de un hospital a otro, y la terminología de biomarcadores que importa casi no aparece en los corpus con los que se entrenaron esos modelos. El reflejo habitual &mdash; lanzarle un modelo grande &mdash; funciona, pero es costoso, opaco y difícil de justificar ante un clínico o un auditor.</p><h2>No toda entidad necesita un LLM</h2><p>DEMNE parte de una observación simple: las entidades de estos informes no son igual de difíciles. Una mención de biopsia se escribe de unas pocas formas estables; un nombre de fármaco puede aparecer de cien maneras. Así que, en lugar de un único modelo para todo, DEMNE mide cada tipo de entidad y la envía al método más ligero que resulte fiable &mdash; una regla determinista, un transformer afinado o un LLM solo como último recurso.</p><p>La medida son cinco métricas de corpus calculadas a partir de las anotaciones: cuán regular es la forma de superficie, cuán homogéneo es el vocabulario, si un pequeño conjunto de palabras clave es discriminante, con qué frecuencia la mención está bajo negación o contradicción, y si existen suficientes datos anotados para entrenar un modelo supervisado. Un grafo de decisión determinista convierte esos números en un nivel, y sus 17 umbrales se calibran con una búsqueda multiobjetivo que penaliza el doble enviar una entidad a un método demasiado débil que a uno meramente demasiado costoso.</p><h2>Lo que aporta</h2><p>En el conjunto de calibración de oncología (59 tipos de entidad), el enrutamiento coincide con el nivel de referencia de los expertos con una concordancia de 0,954 y una estimación leave-one-corpus-out de 0,866 &mdash; muy por encima de cualquier baseline de nivel fijo (siempre-reglas alcanza 0,729, siempre-LLM 0,148). La prueba más convincente es externa: aplicado sin reajuste a 300 informes de TC de la AP-HP, en localizaciones cancerosas que el modelo nunca había visto, DEMNE enrutó el 99,5 % de las menciones (411 de 413) hacia reglas deterministas. Esas reglas alcanzaron un F1 medio de 0,941, mientras que un transformer afinado sobre las mismas entidades, con un presupuesto hospitalario realista, se quedó en 0,358.</p><p>Dicho de otro modo: para las entidades estandarizadas que dominan el informe oncológico, las reglas no solo eran más baratas &mdash; eran mejores, y cada decisión de regla se rastrea hasta una condición explícita, que es justo lo que piden los artículos 12 y 14 de la EU AI Act.</p><h2>Dónde se detiene</h2><p>Quiero ser honesto sobre los límites. El estándar de referencia es pequeño &mdash; 92 tipos de entidad, 59 de ellos en oncología &mdash; así que las puntuaciones sobre un solo corpus son optimistas y solo valen las comparaciones relativas. El nivel LLM nunca se evaluó de principio a fin en la cohorte externa; su única entidad enrutada era demasiado rara. Y la calibración no se transfiere entre dominios: en otro género clínico u otro idioma la concordancia cae a 0,45&ndash;0,73, por lo que los umbrales deben reajustarse. DEMNE es una prueba de viabilidad, no un producto terminado.</p><h2>Por qué importa</h2><p>La cuestión no es que las reglas ganen a los transformers. Es que &laquo;qué método&raquo; es una pregunta que se puede responder entidad por entidad, a partir de propiedades medibles del texto, en vez de recurrir por defecto al modelo más pesado y confiar. Para el PLN clínico &mdash; donde el coste, la auditabilidad y la confianza importan a la vez &mdash; ese enfoque vale más que un punto porcentual en un benchmark.</p><p>El código y el método completo están en <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; el manuscrito está en preparación.</p>` },
      { status: 'Publicado · oct. 2026', title: 'Extracción por etapas frente a un único modelo grande', body: 'El argumento para enrutar entidades a través de reglas y un transformer afinado antes de llamar a un LLM — y lo que cuesta equivocarse.', content: `<p>Si hoy le pasas un problema difícil de PLN a un equipo, el reflejo es echar mano del modelo más grande disponible y dejar que lo resuelva todo. En texto clínico francés ese reflejo es costoso, lento y difícil de auditar &mdash; y, al final, ni siquiera el más preciso. DEMNE hace la apuesta contraria: enviar cada tipo de entidad a la herramienta más ligera capaz de manejarla, y escalar solo cuando el texto lo exige de verdad.</p><h2>Una escalera, no un martillo</h2><p>El pipeline tiene tres niveles. Reglas deterministas &mdash; regex y léxicos curados &mdash; se encargan de las entidades escritas de unas pocas formas estables: fechas, dosis, abreviaturas estándar de biomarcadores. Un transformer afinado en texto oncológico francés trata las entidades que requieren verdadera comprensión semántica y de dominio. Un LLM está en la cima, reservado a los casos realmente ambiguos que sobreviven a las dos etapas anteriores. Nada sube más alto de lo necesario.</p><h2>¿Por qué no solo el LLM?</h2><p>Porque un único modelo grande paga el precio del LLM en cada entidad, incluidas las que una regex habría resuelto al instante. Es más lento, necesita un presupuesto de GPU que la mayoría de los hospitales no tiene, y cada decisión es una caja negra que igualmente hay que justificar ante un clínico o un auditor. Y en la propia tarea de enrutamiento, el baseline siempre-LLM fue el peor, coincidiendo con el nivel experto solo 0,148 de las veces. La herramienta más pesada no es automáticamente la más fiable.</p><h2>El coste de enrutar mal</h2><p>La extracción por etapas solo compensa si el enrutamiento es bueno, así que ahí es donde DEMNE pone su cuidado. Cinco métricas medidas a partir de las anotaciones alimentan un grafo de decisión determinista cuyos 17 umbrales se calibran con una búsqueda multiobjetivo. El objetivo es deliberadamente asimétrico: enviar una entidad a un método demasiado débil se penaliza el doble que enviarla a uno meramente demasiado costoso &mdash; porque una extracción perdida en un informe clínico cuesta más que un segundo de GPU desperdiciado.</p><h2>Lo que dicen los números</h2><p>En el conjunto de calibración de oncología, el enrutamiento coincide con el nivel de referencia de los expertos 0,954 de las veces, frente a 0,729 de siempre-reglas y 0,148 de siempre-LLM. Aplicado sin tocar a 300 informes de AP-HP nunca vistos, enrutó el 99,5 % de las menciones a reglas deterministas, que alcanzaron un F1 medio de 0,941 &mdash; donde un transformer afinado con un presupuesto hospitalario realista se quedó en 0,358. Para las entidades estandarizadas que dominan estos informes, el nivel más barato era también el más preciso.</p><h2>Cuándo un único modelo es la respuesta correcta</h2><p>La estratificación no es gratis: añade una capa de enrutamiento que construir, medir y mantener, y los umbrales deben recalibrarse para cada nuevo dominio. Si el texto es uniforme, las entidades son todas igual de difíciles, o hay presupuesto y tolerancia de auditoría para un único modelo grande, la escalera es solo sobrecarga. La afirmación aquí es estrecha &mdash; cuando el coste, la latencia y la trazabilidad importan a la vez, como en el PLN clínico, decidir entidad por entidad supera a recurrir por defecto al modelo más pesado y confiar.</p><p>El código y el método completo están en <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; el manuscrito está en preparación.</p>` },
    ],
  },
  contact: {
    title: 'Hablemos de PLN clínico, IA biomédica, o una colaboración doctoral.',
    directLabel: 'Directo',
    elsewhereLabel: 'En otros lugares',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Reservar una llamada',
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
    kicker: 'ESIEE Paris · Suche ein 6-monatiges Forschungspraktikum · Klinische NLP & biomedizinische KI · ab Feb. 2027',
    h1Pre: 'Biomarker aus klinischem Text extrahieren ',
    h1Accent: 'ohne die GPU zu wecken',
    h1Post: '',
    sub: "Ich bin Clément Longeac. Ich entwickle DEMNE, ein Routing-Framework, das pro Entitätstyp die leichteste Methode wählt, die zuverlässig bleibt — Regeln, einen Transformer oder ein LLM. Auf einer ungesehenen AP-HP-Kohorte leitet es 99,5 % der Erwähnungen an auditierbare Regeln mit einem F1 von 0,941, wo ein feinabgestimmter Transformer nur 0,358 erreicht.",
    ctaResearch: 'Zur Forschung',
    ctaCV: 'Lebenslauf herunterladen',
    caption: 'DEMNE — Rules → Transformer → LLM, Live-Schema',
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
    title: 'DEMNE',
    subtitle: 'Eine hybride Named-Entity-Recognition-Pipeline für französischen onkologischen klinischen Text.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Klinisches NER · französische Onkologie-Korpora',
    p1: 'Standard-NER-Modelle scheitern deutlich an französischem klinischem Text: dichte Abkürzungen, uneinheitliche Formatierung zwischen Krankenhaussystemen und Biomarker-Terminologie, die in allgemeinen Trainingsdaten kaum vorkommt. DEMNE begegnet dem mit einer gestuften Pipeline statt einem einzelnen Modell — jede Stufe übernimmt, was sie am besten kann, und eskaliert nur bei Bedarf zu einem schwereren Modell.',
    p2: 'Das System ist auf DrBERT-7GB über drei verschiedene französische Onkologie-Korpora feinabgestimmt und zielt auf sieben prioritäre Biomarker-Entitätstypen ab, die in behandlungsrelevanten Berichten verwendet werden.',
    tags: ['Klinisches NLP', 'Transformers', 'DrBERT-7GB', 'Französische Onkologie'],
    viewRepo: 'Repository ansehen',
    readMethodology: 'Methodik lesen',
    pipeline: [
      { num: '01', title: 'Regelbasierter Durchlauf', body: 'Regex- und Lexikon-Abgleich erfasst kostengünstig hochsichere, eindeutige Entitäten — Daten, Dosierungen, Standard-Biomarker-Abkürzungen.' },
      { num: '02', title: 'Transformer-Extraktion', body: 'DrBERT-7GB, feinabgestimmt über drei Onkologie-Korpora, übernimmt die Entitäten, die echtes semantisches und Domänenverständnis erfordern.' },
      { num: '03', title: 'LLM-Arbitrierung', body: 'Verbleibende Konflikte und Grenzfälle werden vor der Ausgabe zur endgültigen Disambiguierung an einen LLM-Durchlauf weitergeleitet.' },
    ],
    aiAct: {
      title: 'Regulatorische Ausrichtung — EU AI Act',
      body: 'Die klinische Entitätsextraktion aus Patientenakten fällt eindeutig in die Hochrisikokategorie des EU AI Act. Das gestufte Design von DEMNE berücksichtigt Artikel 12 und 14 von Anfang an, nicht nachträglich.',
      articles: [
        { code: 'Art. 12', label: 'Aufzeichnungspflichten', desc: 'Jede Extraktionsentscheidung ist bis zur Stufe (Regeln, Transformer oder LLM) und dem Konfidenzwert zurückverfolgbar, was eine automatische Audit-Protokollierung ermöglicht.' },
        { code: 'Art. 14', label: 'Menschliche Aufsicht', desc: 'Ausgaben der LLM-Arbitrierung werden zur klinischen Überprüfung markiert statt stillschweigend akzeptiert, sodass bei mehrdeutigen Fällen ein Mensch eingebunden bleibt.' },
      ],
    },
  },
  metrics: {
    label: 'Ergebnisse',
    title: 'Was der gestufte Ansatz bringt',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'der Erwähnungen an Regeln geroutet (ungesehene AP-HP-Kohorte, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'Regel-F1 vs. 0,358 für ein feinabgestimmtes DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'Routing-Konkordanz (leave-one-corpus-out)' },
    ],
  },
  experience: {
    label: '03 — Erfahrung',
    title: 'Wo die Arbeit bisher stattgefunden hat',
    currentLabel: 'Laufend',
    items: [
      {
        date: 'Mai – Jul. 2026',
        title: 'Forschungspraktikant, klinisches Data Warehouse',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Anwendung und Validierung des DEMNE-Routing-Ansatzes auf Krankenhausdaten: Extraktion onkologischer Biomarker (ER, PR, HER2, Ki67, FISH) aus französischen klinischen Berichten und Definition eines auditierbaren, einsatznahen klinischen Pfads.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Okt. 2025 – Mai 2026',
        title: 'Studentischer Forscher, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Entwurf von DEMNE, einer hybriden klinischen NER-Pipeline (Regeln / Transformer / LLM) für französische onkologische Texte, gesteuert durch fünf formalisierte Korpusmetriken — das Kernprojekt des Tremplin-Recherche-Tracks im Vorfeld der Promotionsbewerbungen.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Heute',
        title: 'Product Lead & Entwickler, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Aufbau einer Plattform, die Hirnverletzten und Ergotherapeuten einen strukturierten Vergleich kognitiver Kompensationswerkzeuge ermöglicht. Begann als Python/Streamlit-Prototyp beim SN@SU-Hackathon (Sorbonne Université, mit Flor Sanchez-Luizard, Ergotherapeutin bei UEROS L’ADAPT Île-de-France); derzeit wird ein Produktions-Neuaufbau (FastAPI, PostgreSQL, Next.js) mit HDS/DSGVO-konformem Hosting und einer semantischen Suchmaschine für das Matching klinischer Werkzeuge abgesteckt.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Ingenieurstudent — Data Science & KI',
        org: 'ESIEE Paris',
        body: 'Student im fünften Jahr des fünfjährigen Ingenieurstudiums der ESIEE Paris, Spezialisierung Data Science & KI (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Ingenieurpraktikant, Abteilung GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'Entwicklung von autopkgtests mit OpenCL für die AMD-GPU-Kompatibilität (pyopencl, nabu, ufo-filters, pyvkfft) über die Debian/ROCm-Infrastruktur auf GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Heute',
        title: 'Nachhilfelehrer (MINT)',
        org: 'Complétude',
        body: 'Unterricht in Mathematik und Physik-Chemie für rund zehn Schüler, von der Grundschule bis zur Abschlussklasse, parallel zum Ingenieurstudium.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Mehr erfahren →',
    items: [
      {
        date: 'Juni 2026 · SN@SU-Hackathon',
        title: 'NeuroStep',
        description:
          'Ein Katalog digitaler Werkzeuge zur kognitiven Kompensation für Menschen mit Hirnverletzungen und ihre Ergotherapeuten.',
        longBody:
          'NeuroStep entstand beim SN@SU-Hackathon (Sorbonne Université). Ergotherapeuten und Patienten finden Apps für Kommunikation, Gedächtnis und Planung, ohne die App-Stores einzeln zu durchsuchen: Jedes Werkzeug ist gelistet, nach Störung und Thema klassifiziert und durchsuchbar.\nDas MVP ist eine Streamlit-Anwendung mit einem JSON-Speicher; derzeit wird ein Produktions-Neuaufbau mit FastAPI, PostgreSQL und einem Next.js-Frontend abgesteckt.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Dez. 2025 · Teamprojekt',
        title: 'Air Quality Dashboard',
        description:
          'Ein interaktives Dashboard, das 15 Jahre Hintergrund-Luftverschmutzung in Frankreich rekonstruiert (2000–2015).',
        longBody:
          'Eine Datenpipeline und ein interaktives Dashboard über INERIS-Indikatoren auf Gemeindeebene (Zenodo). Skripte laden, bereinigen und speichern die Daten in SQLite; das Dashboard zeigt eine Leaflet-Verschmutzungs-Heatmap mit Jahresregler und Schadstofffiltern, neben Plotly-Diagrammen.\nEntstanden mit Teamkollege William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Kursprojekt',
        title: 'Face Recognition with Deep Learning',
        description:
          'CNN-basierte Gesichtserkennung auf Standbildern und dann Video, mit Datenaugmentation und Gesichtsausrichtung.',
        longBody:
          'Ein Kursprojekt zur modernen Gesichtserkennung. Ein erstes Modell, das mit nur 218 Bildern trainiert wurde, überfittete stark; Datenaugmentation (Rotation, Zoom) und ein Schritt zur Gesichtsausrichtung, der Augen- und Lippenposition normalisiert, zusammen mit einem vortrainierten Netz, verbesserten die Generalisierung. Ziel war, Gesichter in Videos aus dem projekteigenen Datensatz zu erkennen.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Partnerprojekt',
        title: 'TBA — Text Adventure Game',
        description:
          'Ein Text-Adventure fürs Terminal in Python, mit objektorientiertem Design.',
        longBody:
          'Ein Text-Adventure, das im Terminal gespielt wird: Der Spieler bewegt sich per Befehlseingabe zwischen acht Räumen. Der Code ist in kleine Klassen mit einer einzigen Verantwortung aufgeteilt (Spiel, Raum, Spieler, Befehl, Aktion, Figur, Gegenstand), sodass das Hinzufügen eines Raums oder Gegenstands eine lokale Änderung bleibt.\nEntstanden mit Anne-Colombe André an der ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Feb. 2025 · Teamprojekt',
        title: 'Marmiton Data Intelligence',
        description:
          'Eine Plattform für kulinarische Datenanalyse: Scraping, ETL und ein Dashboard über Rezeptdaten.',
        longBody:
          'Ein Data-Engineering-Teamprojekt, das Rezeptdaten von Marmiton scrapt, eine ETL-Pipeline ausführt und die Ergebnisse über ein Analyse-Dashboard bereitstellt. Umgesetzt in Python mit Jupyter-Notebooks zur Exploration.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'autopkgtest-Skripte, die wissenschaftliche Software auf AMD-GPUs validieren, auf Debians CI-Infrastruktur.',
        longBody:
          'Viermonatiges Praktikum in der Abteilung Div/Exp GRADES am Synchrotron SOLEIL, betreut von Emmanuel Farhi und Frédéric-Emmanuel Picca. Ziel: die Abhängigkeit des wissenschaftlichen Rechen-Stacks von NVIDIA/CUDA verringern, indem geprüft wird, ob Debian-Wissenschaftspakete über ROCm auf AMD-GPUs laufen.\nIch schrieb OpenCL-autopkgtests und validierte die Builds in einem podman+ROCm-Container (per sbuild) und brachte sie dann in Debians GitLab Salsa ein. ROCm-Autotests wurden für PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx und sasmodels ergänzt; Pakete ohne OpenCL-Code (genx, examl) oder mit unfertiger Python-2→3-Migration (pysph) wurden ausgeschlossen. Es ist ein erster Satz von Bausteinen, der der gesamten wissenschaftlichen Debian-Gemeinschaft den Wechsel von NVIDIA zu AMD erleichtert.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Veröffentlicht · Okt. 2026', title: 'Warum französisches klinisches NER generische Modelle scheitern lässt', body: 'Ein Überblick darüber, wo Standard-NER-Pipelines bei französischen Onkologieberichten versagen, und was das für die Struktur von DEMNE bedeutet.', content: `<p>Öffnen Sie einen französischen onkologischen Bericht, und die meisten gebrauchsfertigen NER-Modelle stolpern schon im ersten Satz. Das Vokabular ist dicht und abgekürzt (ER, PR, HER2, Ki67, FISH), die Formatierung wechselt von Klinik zu Klinik, und die entscheidende Biomarker-Terminologie fehlt in den Korpora, auf denen diese Modelle trainiert wurden, fast völlig. Der übliche Reflex &mdash; ein großes Modell darauf werfen &mdash; funktioniert, ist aber teuer, intransparent und vor einem Kliniker oder Prüfer schwer zu rechtfertigen.</p><h2>Nicht jede Entität braucht ein LLM</h2><p>DEMNE geht von einer schlichten Beobachtung aus: Die Entitäten in diesen Berichten sind nicht gleich schwer. Eine Biopsie-Erwähnung wird auf wenige stabile Arten geschrieben; ein Medikamentenname kann in hundert Formen auftreten. Statt eines Modells für alles misst DEMNE daher jeden Entitätstyp und schickt ihn an die leichteste Methode, die zuverlässig genug ist &mdash; eine deterministische Regel, einen feinabgestimmten Transformer oder ein LLM nur als letztes Mittel.</p><p>Die Messung besteht aus fünf Korpusmetriken, die aus den Annotationen berechnet werden: wie schablonenhaft die Oberflächenform ist, wie homogen das Vokabular ist, ob ein kleiner Schlüsselwortsatz diskriminierend ist, wie oft die Erwähnung unter Negation oder Widerspruch steht, und ob überhaupt genug annotierte Daten für ein überwachtes Modell vorhanden sind. Ein deterministischer Entscheidungsgraph macht aus diesen Zahlen eine Stufe, und seine 17 Schwellenwerte werden mit einer multikriteriellen Suche kalibriert, die das Senden einer Entität an eine zu schwache Methode doppelt so stark bestraft wie an eine bloß zu teure.</p><h2>Was es bringt</h2><p>Auf dem onkologischen Kalibrierungssatz (59 Entitätstypen) stimmt das Routing mit der Experten-Referenzstufe mit einer Konkordanz von 0,954 überein, bei einer Leave-one-corpus-out-Schätzung von 0,866 &mdash; deutlich über jeder Baseline mit fester Stufe (immer-Regeln erreicht 0,729, immer-LLM 0,148). Der überzeugendere Test ist extern: ohne Nachjustierung auf 300 AP-HP-CT-Berichte aus zuvor ungesehenen Krebslokalisationen angewandt, leitete DEMNE 99,5 % der markierten Erwähnungen (411 von 413) an deterministische Regeln. Diese Regeln erreichten einen mittleren F1 von 0,941, während ein auf denselben Entitäten unter realistischem Klinikbudget feinabgestimmter Transformer nur 0,358 schaffte.</p><p>Mit anderen Worten: Für die standardisierten Entitäten, die die onkologische Berichterstattung dominieren, waren Regeln nicht nur billiger &mdash; sie waren besser, und jede Regelentscheidung lässt sich auf eine explizite Bedingung zurückführen, genau das, was die Artikel 12 und 14 der EU AI Act verlangen.</p><h2>Wo es endet</h2><p>Ich will bei den Grenzen ehrlich sein. Der Referenzstandard ist klein &mdash; 92 Entitätstypen, 59 davon in der Onkologie &mdash; daher sind Einzelkorpus-Werte optimistisch und nur relative Vergleiche tragen. Die LLM-Stufe wurde auf der externen Kohorte nie durchgängig evaluiert; ihre eine geroutete Entität war zu selten. Und die Kalibrierung überträgt sich nicht zwischen Domänen: In einem anderen klinischen Genre oder einer anderen Sprache fällt die Konkordanz auf 0,45&ndash;0,73, sodass die Schwellen neu angepasst werden müssen. DEMNE ist ein Machbarkeitsnachweis, kein fertiges Produkt.</p><h2>Warum es zählt</h2><p>Der Punkt ist nicht, dass Regeln Transformer schlagen. Es ist, dass &bdquo;welche Methode&ldquo; eine Frage ist, die man pro Entität beantworten kann &mdash; aus messbaren Eigenschaften des Textes, statt standardmäßig das schwerste Modell zu wählen und zu hoffen. Für die klinische NLP &mdash; wo Kosten, Prüfbarkeit und Vertrauen zugleich zählen &mdash; ist diese Rahmung mehr wert als ein weiterer Prozentpunkt auf einem Benchmark.</p><p>Der Code und die vollständige Methode sind auf <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; das Manuskript ist in Vorbereitung.</p>` },
      { status: 'Veröffentlicht · Okt. 2026', title: 'Gestufte Extraktion vs. ein einzelnes großes Modell', body: 'Das Argument dafür, Entitäten durch Regeln und einen feinabgestimmten Transformer zu leiten, bevor überhaupt ein LLM aufgerufen wird — und was ein Fehler dabei kostet.', content: `<p>Gibt man heute ein schwieriges NLP-Problem an ein Team, ist der Reflex, zum größten verfügbaren Modell zu greifen und es alles regeln zu lassen. Auf französischem klinischem Text ist dieser Reflex teuer, langsam und schwer prüfbar &mdash; und, wie sich zeigt, nicht einmal der genaueste. DEMNE setzt auf das Gegenteil: jeden Entitätstyp an das leichteste Werkzeug schicken, das ihn bewältigt, und nur eskalieren, wenn der Text es wirklich verlangt.</p><h2>Eine Treppe, kein Hammer</h2><p>Die Pipeline hat drei Stufen. Deterministische Regeln &mdash; Regex und kuratierte Lexika &mdash; übernehmen die Entitäten, die auf wenige stabile Arten geschrieben werden: Daten, Dosierungen, gängige Biomarker-Abkürzungen. Ein auf französischem onkologischem Text feinabgestimmter Transformer bearbeitet die Entitäten, die echtes semantisches und fachliches Verständnis brauchen. Ein LLM steht an der Spitze, reserviert für die wirklich mehrdeutigen Fälle, die beide früheren Stufen überleben. Nichts steigt höher, als es muss.</p><h2>Warum nicht einfach das LLM?</h2><p>Weil ein einziges großes Modell den Preis des LLM für jede Entität zahlt, auch für die, die eine Regex sofort erledigt hätte. Es ist langsamer, braucht ein GPU-Budget, das die meisten Kliniken nicht haben, und jede Entscheidung ist eine Blackbox, die man trotzdem vor einem Kliniker oder Prüfer rechtfertigen muss. Und bei der Routing-Aufgabe selbst war die Immer-LLM-Baseline die schwächste und stimmte nur zu 0,148 mit der Expertenstufe überein. Das schwerste Werkzeug ist nicht automatisch das zuverlässigste.</p><h2>Was falsches Routing kostet</h2><p>Gestufte Extraktion lohnt sich nur, wenn das Routing gut ist &mdash; also investiert DEMNE genau dort seine Sorgfalt. Fünf aus den Annotationen gemessene Metriken speisen einen deterministischen Entscheidungsgraphen, dessen 17 Schwellen durch eine multikriterielle Suche kalibriert werden. Das Ziel ist bewusst asymmetrisch: eine Entität an eine zu schwache Methode zu schicken wird doppelt so stark bestraft wie an eine bloß zu teure &mdash; denn eine verpasste Extraktion in einem klinischen Bericht kostet mehr als eine verschwendete GPU-Sekunde.</p><h2>Was die Zahlen sagen</h2><p>Auf dem onkologischen Kalibrierungssatz trifft das Routing die Experten-Referenzstufe zu 0,954, gegenüber 0,729 bei Immer-Regeln und 0,148 bei Immer-LLM. Unverändert auf 300 ungesehene AP-HP-Berichte angewandt, leitete es 99,5 % der Erwähnungen an deterministische Regeln, die einen mittleren F1 von 0,941 erreichten &mdash; wo ein unter realistischem Klinikbudget feinabgestimmter Transformer nur 0,358 schaffte. Für die standardisierten Entitäten, die diese Berichte dominieren, war die billige Stufe auch die genaue.</p><h2>Wann ein einzelnes Modell die richtige Antwort ist</h2><p>Staging ist nicht umsonst: Es fügt eine Routing-Schicht hinzu, die gebaut, gemessen und gepflegt werden muss, und die Schwellen müssen für jede neue Domäne neu kalibriert werden. Ist der Text einheitlich, sind alle Entitäten gleich schwer, oder gibt es Budget und Prüf-Toleranz für ein großes Modell, ist die Treppe nur Overhead. Die Aussage hier ist eng &mdash; wenn Kosten, Latenz und Nachvollziehbarkeit zugleich zählen, wie in der klinischen NLP, schlägt die Entscheidung pro Entität das reflexhafte Wählen des schwersten Modells.</p><p>Der Code und die vollständige Methode sind auf <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; das Manuskript ist in Vorbereitung.</p>` },
    ],
  },
  contact: {
    title: 'Lass uns über klinisches NLP, biomedizinische KI oder eine Promotionskooperation sprechen.',
    directLabel: 'Direkt',
    elsewhereLabel: 'Anderswo',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Gespräch buchen',
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
    kicker: 'ESIEE Paris · Cerco un tirocinio di ricerca di 6 mesi · NLP clinico e IA biomedica · da feb. 2027',
    h1Pre: 'Estraggo biomarcatori da testo clinico ',
    h1Accent: 'senza svegliare la GPU',
    h1Post: '',
    sub: "Sono Clément Longeac. Sviluppo DEMNE, un framework di routing che sceglie, per ogni tipo di entità, il metodo più leggero che resti affidabile: regole, un transformer o un LLM. Su una coorte AP-HP mai vista, instrada il 99,5 % delle menzioni verso regole auditabili con un F1 di 0,941, là dove un transformer affinato arriva a 0,358.",
    ctaResearch: 'Vedi la ricerca',
    ctaCV: 'Scarica il CV',
    caption: 'DEMNE — Rules → Transformer → LLM, schema dal vivo',
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
    title: 'DEMNE',
    subtitle: 'Una pipeline ibrida di riconoscimento di entità nominate per il testo clinico oncologico francese.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER clinico · corpus di oncologia francesi',
    p1: 'I modelli NER generici falliscono nettamente sul testo clinico francese: abbreviazioni dense, formattazione incoerente tra i sistemi ospedalieri e una terminologia di biomarcatori quasi assente dai dati di addestramento generali. DEMNE affronta il problema con una pipeline a stadi anziché un modello unico — ogni stadio gestisce ciò che sa fare meglio, ed escalation verso un modello più pesante solo quando necessario.',
    p2: 'Il sistema è affinato su DrBERT-7GB attraverso tre distinti corpus di oncologia francesi, e si concentra su sette tipi di entità biomarcatrici prioritarie usate nei referti rilevanti per il trattamento.',
    tags: ['NLP clinico', 'Transformers', 'DrBERT-7GB', 'Oncologia francese'],
    viewRepo: 'Vedi il repository',
    readMethodology: 'Leggi la metodologia',
    pipeline: [
      { num: '01', title: 'Passaggio basato su regole', body: 'Il pattern matching (regex, lessici) cattura a basso costo le entità ad alta confidenza e bassa ambiguità — date, dosaggi, abbreviazioni standard di biomarcatori.' },
      { num: '02', title: 'Estrazione tramite transformer', body: 'DrBERT-7GB, affinato su tre corpus di oncologia, gestisce le entità che richiedono una reale comprensione semantica e di dominio.' },
      { num: '03', title: 'Arbitraggio tramite LLM', body: 'I conflitti residui e i casi limite vengono instradati a un passaggio LLM per la disambiguazione finale prima dell\'output.' },
    ],
    aiAct: {
      title: 'Allineamento normativo — EU AI Act',
      body: 'L\'estrazione di entità cliniche dai fascicoli dei pazienti rientra pienamente nella categoria ad alto rischio dell\'EU AI Act. Il design a stadi di DEMNE tiene conto degli articoli 12 e 14 fin dall\'inizio, non come aggiunta successiva.',
      articles: [
        { code: 'Art. 12', label: 'Conservazione dei registri', desc: 'Ogni decisione di estrazione è tracciabile fino allo stadio (regole, transformer o LLM) e al punteggio di confidenza che l\'ha prodotta, consentendo una registrazione automatica per l\'audit.' },
        { code: 'Art. 14', label: 'Supervisione umana', desc: 'Gli output dell\'arbitraggio LLM vengono segnalati per la revisione clinica anziché accettati silenziosamente, mantenendo un essere umano nel ciclo sui casi ambigui.' },
      ],
    },
  },
  metrics: {
    label: 'Risultati',
    title: 'Cosa porta l\'approccio a stadi',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'delle menzioni instradate alle regole (coorte AP-HP mai vista, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'F1 delle regole contro 0,358 di un DrBERT affinato' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'concordanza di instradamento leave-one-corpus-out' },
    ],
  },
  experience: {
    label: '03 — Esperienza',
    title: 'Dove si è svolto il lavoro finora',
    currentLabel: 'In corso',
    items: [
      {
        date: 'Mag – lug 2026',
        title: 'Tirocinante di ricerca, Data Warehouse clinico',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Ho applicato e validato l’approccio di instradamento di DEMNE su dati ospedalieri: estrazione di biomarcatori oncologici (ER, PR, HER2, Ki67, FISH) da referti clinici francesi e definizione di un percorso clinico auditabile e realistico per il deployment.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Ott 2025 – mag 2026',
        title: 'Studente ricercatore, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Ho progettato DEMNE, una pipeline ibrida di NER clinico (regole / transformer / LLM) per testi oncologici francesi, guidata da cinque metriche di corpus formalizzate — il progetto centrale del percorso Tremplin Recherche in vista delle candidature al dottorato.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Presente',
        title: 'Product Lead e sviluppatore, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Costruzione di una piattaforma che offre a pazienti con lesioni cerebrali e terapisti occupazionali un modo strutturato per confrontare strumenti di compensazione cognitiva. Nata come prototipo Python/Streamlit all’hackathon SN@SU (Sorbonne Université, con Flor Sanchez-Luizard, terapista occupazionale presso UEROS L’ADAPT Île-de-France); ora si definisce una ricostruzione di produzione (FastAPI, PostgreSQL, Next.js) con hosting conforme a HDS/GDPR e un motore di ricerca semantica per l’abbinamento degli strumenti clinici.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Studente di ingegneria — Data Science e IA',
        org: 'ESIEE Paris',
        body: 'Studente del quinto anno del programma di ingegneria quinquennale dell’ESIEE Paris, specializzazione Data Science e IA (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Tirocinante ingegnere, divisione GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'Sviluppo di autopkgtest con OpenCL per la compatibilità delle GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) sull’infrastruttura Debian/ROCm su GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Presente',
        title: 'Tutor di materie STEM',
        org: 'Complétude',
        body: 'Lezioni di matematica e fisica-chimica a una decina di studenti, dalla primaria all’ultimo anno delle superiori, in parallelo agli studi di ingegneria.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Scopri di più →',
    items: [
      {
        date: 'Giugno 2026 · Hackathon SN@SU',
        title: 'NeuroStep',
        description:
          'Un catalogo di strumenti digitali di compensazione cognitiva per persone con lesioni cerebrali e i loro terapisti occupazionali.',
        longBody:
          'NeuroStep è nato all’hackathon SN@SU (Sorbonne Université). Terapisti occupazionali e pazienti trovano app per comunicazione, memoria e pianificazione senza setacciare gli store uno a uno: ogni strumento è elencato, classificato per disturbo e tema, e ricercabile.\nL’MVP è un’applicazione Streamlit con uno store JSON; ora si sta definendo una ricostruzione di produzione con FastAPI, PostgreSQL e un frontend Next.js.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Dic. 2025 · Progetto di gruppo',
        title: 'Air Quality Dashboard',
        description:
          'Una dashboard interattiva che ricostruisce 15 anni di inquinamento atmosferico di fondo in Francia (2000–2015).',
        longBody:
          'Una pipeline di dati e una dashboard interattiva sugli indicatori comunali INERIS (Zenodo). Gli script scaricano, puliscono e salvano i dati in SQLite; la dashboard mostra una heatmap dell’inquinamento con Leaflet, con uno slider per l’anno e filtri per inquinante, accanto a grafici Plotly.\nRealizzata con il compagno di squadra William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Progetto di corso',
        title: 'Face Recognition with Deep Learning',
        description:
          'Riconoscimento facciale basato su CNN su immagini fisse e poi video, con data augmentation e allineamento del volto.',
        longBody:
          'Un progetto di corso sul riconoscimento facciale moderno. Un primo modello addestrato su sole 218 immagini andava in forte overfitting; la data augmentation (rotazione, zoom) e un passo di allineamento del volto che normalizza la posizione di occhi e labbra, uniti a una rete pre-addestrata, hanno migliorato la generalizzazione. L’obiettivo era rilevare volti nei video a partire dal dataset del progetto stesso.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Progetto in coppia',
        title: 'TBA — Text Adventure Game',
        description:
          'Un gioco di avventura testuale da terminale in Python, con un design orientato agli oggetti.',
        longBody:
          'Un’avventura testuale giocata nel terminale: il giocatore si sposta tra otto stanze digitando comandi. Il codice è suddiviso in piccole classi a responsabilità singola (gioco, stanza, giocatore, comando, azione, personaggio, oggetto), così aggiungere una stanza o un oggetto resta una modifica locale.\nRealizzata con Anne-Colombe André all’ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Feb. 2025 · Progetto di gruppo',
        title: 'Marmiton Data Intelligence',
        description:
          'Una piattaforma di analisi dati culinari: scraping, ETL e una dashboard sui dati delle ricette.',
        longBody:
          'Un progetto di gruppo di data engineering che estrae i dati delle ricette da Marmiton, esegue una pipeline ETL ed espone i risultati tramite una dashboard di analisi. Realizzato in Python con notebook Jupyter per l’esplorazione.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Script autopkgtest che validano software scientifico su GPU AMD, sull’infrastruttura CI di Debian.',
        longBody:
          'Tirocinio di 4 mesi nella divisione Div/Exp GRADES del Synchrotron SOLEIL, sotto la guida di Emmanuel Farhi e Frédéric-Emmanuel Picca. L’obiettivo: ridurre la dipendenza dello stack di calcolo scientifico da NVIDIA/CUDA verificando se i pacchetti scientifici Debian girano su GPU AMD tramite ROCm.\nHo scritto autopkgtest in OpenCL e validato le build in un container podman+ROCm (via sbuild), poi le ho integrate a monte sul GitLab Salsa di Debian. Sono stati aggiunti autotest ROCm per PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx e sasmodels; i pacchetti senza codice OpenCL (genx, examl) o bloccati su una migrazione Python 2→3 incompleta (pysph) sono stati esclusi. È un primo insieme di mattoni che aiuta l’intera comunità scientifica Debian a passare da NVIDIA ad AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Pubblicato · ott. 2026', title: 'Perché il NER clinico francese manda in crisi i modelli generici', body: 'Una panoramica di dove le pipeline NER standard falliscono sui referti di oncologia francesi, e cosa questo implica per la struttura di DEMNE.', content: `<p>Aprite un referto oncologico francese e la maggior parte dei modelli NER pronti all’uso inciampa già nella prima frase. Il vocabolario è denso e abbreviato (ER, PR, HER2, Ki67, FISH), la formattazione cambia da un ospedale all’altro, e la terminologia dei biomarcatori che conta è quasi assente dai corpora su cui questi modelli sono stati addestrati. Il riflesso abituale &mdash; lanciarci contro un modello grande &mdash; funziona, ma è costoso, opaco e difficile da giustificare davanti a un clinico o a un revisore.</p><h2>Non ogni entità ha bisogno di un LLM</h2><p>DEMNE parte da un’osservazione netta: le entità di questi referti non sono ugualmente difficili. Una menzione di biopsia si scrive in poche forme stabili; un nome di farmaco può comparire in cento modi. Così, invece di un unico modello per tutto, DEMNE misura ogni tipo di entità e la indirizza al metodo più leggero che resti affidabile &mdash; una regola deterministica, un transformer affinato o un LLM solo come ultima risorsa.</p><p>La misura sono cinque metriche di corpus calcolate dalle annotazioni: quanto la forma di superficie è regolare, quanto il vocabolario è omogeneo, se un piccolo insieme di parole chiave è discriminante, con quale frequenza la menzione cade sotto negazione o contraddizione, e se esistono abbastanza dati annotati per addestrare un modello supervisionato. Un grafo decisionale deterministico trasforma quei numeri in un livello, e le sue 17 soglie sono calibrate con una ricerca multi-obiettivo che penalizza il doppio inviare un’entità a un metodo troppo debole rispetto a uno solo troppo costoso.</p><h2>Cosa porta</h2><p>Sul set di calibrazione oncologico (59 tipi di entità), l’instradamento concorda con il livello di riferimento degli esperti con una concordanza di 0,954 e una stima leave-one-corpus-out di 0,866 &mdash; ben oltre qualsiasi baseline a livello fisso (sempre-regole raggiunge 0,729, sempre-LLM 0,148). La prova più convincente è esterna: applicato senza ritaratura a 300 referti TC dell’AP-HP, su sedi tumorali mai viste, DEMNE ha instradato il 99,5 % delle menzioni (411 su 413) verso regole deterministiche. Quelle regole hanno raggiunto un F1 medio di 0,941, mentre un transformer affinato sulle stesse entità, con un budget ospedaliero realistico, si è fermato a 0,358.</p><p>In altre parole: per le entità standardizzate che dominano la refertazione oncologica, le regole non erano solo più economiche &mdash; erano migliori, e ogni decisione di regola si traccia fino a una condizione esplicita, esattamente ciò che chiedono gli articoli 12 e 14 dell’EU AI Act.</p><h2>Dove si ferma</h2><p>Voglio essere onesto sui limiti. Lo standard di riferimento è piccolo &mdash; 92 tipi di entità, 59 in oncologia &mdash; perciò i punteggi su un singolo corpus sono ottimistici e valgono solo i confronti relativi. Il livello LLM non è mai stato valutato end-to-end sulla coorte esterna; la sua unica entità instradata era troppo rara. E la calibrazione non si trasferisce tra domini: in un altro genere clinico o in un’altra lingua la concordanza scende a 0,45&ndash;0,73, quindi le soglie vanno ritarate. DEMNE è una prova di fattibilità, non un prodotto finito.</p><h2>Perché conta</h2><p>Il punto non è che le regole battono i transformer. È che &laquo;quale metodo&raquo; è una domanda a cui si può rispondere entità per entità, a partire da proprietà misurabili del testo, invece di scegliere per default il modello più pesante e sperare. Per l’NLP clinico &mdash; dove costo, auditabilità e fiducia contano insieme &mdash; questa impostazione vale più di un altro punto percentuale su un benchmark.</p><p>Il codice e il metodo completo sono su <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; il manoscritto è in preparazione.</p>` },
      { status: 'Pubblicato · ott. 2026', title: 'Estrazione a stadi contro un unico grande modello', body: 'L\'argomentazione per instradare le entità attraverso regole e un transformer affinato prima di chiamare un LLM — e cosa costa sbagliare.', content: `<p>Affida oggi un problema di NLP difficile a un team e il riflesso è prendere il modello più grande disponibile e lasciargli sistemare tutto. Sul testo clinico francese quel riflesso è costoso, lento e difficile da verificare &mdash; e, alla fine, nemmeno il più preciso. DEMNE fa la scommessa opposta: inviare ogni tipo di entità allo strumento più leggero in grado di gestirla, ed escalare solo quando il testo lo richiede davvero.</p><h2>Una scala, non un martello</h2><p>La pipeline ha tre livelli. Regole deterministiche &mdash; regex e lessici curati &mdash; prendono le entità scritte in poche forme stabili: date, dosaggi, abbreviazioni standard dei biomarcatori. Un transformer affinato su testo oncologico francese tratta le entità che richiedono una reale comprensione semantica e di dominio. Un LLM sta in cima, riservato ai casi davvero ambigui che sopravvivono a entrambe le fasi precedenti. Nulla sale più in alto del necessario.</p><h2>Perché non solo il LLM?</h2><p>Perché un unico modello grande paga il prezzo del LLM su ogni entità, comprese quelle che una regex avrebbe risolto all’istante. È più lento, richiede un budget GPU che la maggior parte degli ospedali non ha, e ogni decisione è una scatola nera che va comunque giustificata davanti a un clinico o a un revisore. E sul compito di instradamento stesso, la baseline sempre-LLM è stata la peggiore, concordando con il livello esperto solo 0,148 delle volte. Lo strumento più pesante non è automaticamente il più affidabile.</p><h2>Il costo di un instradamento sbagliato</h2><p>L’estrazione a stadi conviene solo se l’instradamento è buono, quindi è lì che DEMNE pone la sua cura. Cinque metriche misurate dalle annotazioni alimentano un grafo decisionale deterministico i cui 17 soglie sono calibrate con una ricerca multi-obiettivo. L’obiettivo è volutamente asimmetrico: inviare un’entità a un metodo troppo debole è penalizzato il doppio rispetto a uno solo troppo costoso &mdash; perché un’estrazione mancata in un referto clinico costa più di un secondo di GPU sprecato.</p><h2>Cosa dicono i numeri</h2><p>Sul set di calibrazione oncologico l’instradamento coincide con il livello di riferimento degli esperti 0,954 delle volte, contro 0,729 di sempre-regole e 0,148 di sempre-LLM. Applicato intatto a 300 referti AP-HP mai visti, ha instradato il 99,5 % delle menzioni verso regole deterministiche, che hanno raggiunto un F1 medio di 0,941 &mdash; dove un transformer affinato con un budget ospedaliero realistico si è fermato a 0,358. Per le entità standardizzate che dominano questi referti, il livello più economico era anche il più preciso.</p><h2>Quando un modello unico è la risposta giusta</h2><p>La suddivisione in stadi non è gratis: aggiunge un livello di instradamento da costruire, misurare e mantenere, e le soglie vanno ricalibrate per ogni nuovo dominio. Se il testo è uniforme, le entità sono tutte ugualmente difficili, o c’è budget e tolleranza di audit per un unico modello grande, la scala è solo overhead. La tesi qui è stretta &mdash; quando costo, latenza e tracciabilità contano insieme, come nell’NLP clinico, decidere entità per entità batte lo scegliere di default il modello più pesante e sperare.</p><p>Il codice e il metodo completo sono su <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; il manoscritto è in preparazione.</p>` },
    ],
  },
  contact: {
    title: 'Parliamo di NLP clinico, IA biomedica, o di una collaborazione dottorale.',
    directLabel: 'Diretto',
    elsewhereLabel: 'Altrove',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Prenota una call',
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
    kicker: 'ESIEE Paris · Procuro um estágio de investigação de 6 meses · PLN clínico e IA biomédica · a partir de fev. 2027',
    h1Pre: 'Extraindo biomarcadores de texto clínico ',
    h1Accent: 'sem acordar a GPU',
    h1Post: '',
    sub: "Sou Clément Longeac. Desenvolvo o DEMNE, um framework de roteamento que escolhe, para cada tipo de entidade, o método mais leve que se mantém fiável: regras, um transformer ou um LLM. Numa coorte da AP-HP nunca vista, encaminha 99,5 % das menções para regras auditáveis com um F1 de 0,941, ali onde um transformer afinado chega a 0,358.",
    ctaResearch: 'Ver a pesquisa',
    ctaCV: 'Baixar o currículo',
    caption: 'DEMNE — Rules → Transformer → LLM, esquema ao vivo',
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
    title: 'DEMNE',
    subtitle: 'Um pipeline híbrido de reconhecimento de entidades nomeadas para texto clínico oncológico francês.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER clínico · corpus de oncologia franceses',
    p1: 'Modelos NER genéricos falham muito no texto clínico francês: abreviações densas, formatação inconsistente entre sistemas hospitalares e terminologia de biomarcadores quase ausente dos dados de treinamento gerais. O DEMNE resolve isso com um pipeline em estágios em vez de um único modelo — cada estágio lida com o que faz melhor, e só escala para um modelo mais pesado quando necessário.',
    p2: 'O sistema é ajustado sobre o DrBERT-7GB em três corpus de oncologia franceses distintos, e visa sete tipos de entidades biomarcadoras prioritárias usadas em laudos relevantes para o tratamento.',
    tags: ['PLN clínico', 'Transformers', 'DrBERT-7GB', 'Oncologia francesa'],
    viewRepo: 'Ver repositório',
    readMethodology: 'Ler a metodologia',
    pipeline: [
      { num: '01', title: 'Etapa baseada em regras', body: 'Correspondência de padrões (regex, léxicos) captura a baixo custo entidades de alta confiança e baixa ambiguidade — datas, dosagens, abreviações padrão de biomarcadores.' },
      { num: '02', title: 'Extração por transformer', body: 'O DrBERT-7GB, ajustado em três corpus de oncologia, trata as entidades que exigem compreensão semântica e de domínio real.' },
      { num: '03', title: 'Arbitragem por LLM', body: 'Conflitos remanescentes e casos-limite são roteados para uma passagem de LLM para desambiguação final antes da saída.' },
    ],
    aiAct: {
      title: 'Alinhamento regulatório — EU AI Act',
      body: 'A extração de entidades clínicas sobre prontuários de pacientes se enquadra diretamente na categoria de alto risco do EU AI Act. O design em estágios do DEMNE considera os artigos 12 e 14 desde o início, não como um adendo posterior.',
      articles: [
        { code: 'Art. 12', label: 'Manutenção de registros', desc: 'Cada decisão de extração é rastreável até o estágio (regras, transformer ou LLM) e o índice de confiança que a produziu, permitindo registro automático para auditoria.' },
        { code: 'Art. 14', label: 'Supervisão humana', desc: 'As saídas da arbitragem por LLM são sinalizadas para revisão clínica em vez de aceitas silenciosamente, mantendo um humano no ciclo em casos ambíguos.' },
      ],
    },
  },
  metrics: {
    label: 'Resultados',
    title: 'O que a abordagem em estágios traz',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'das menções roteadas para regras (coorte AP-HP não vista, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'F1 das regras vs 0,358 de um DrBERT ajustado' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'concordância de roteamento leave-one-corpus-out' },
    ],
  },
  experience: {
    label: '03 — Experiência',
    title: 'Onde o trabalho aconteceu até agora',
    currentLabel: 'Em andamento',
    items: [
      {
        date: 'Mai. – jul. 2026',
        title: 'Estagiário de investigação, Armazém de Dados Clínicos',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Apliquei e validei a abordagem de encaminhamento do DEMNE em dados hospitalares: extração de biomarcadores oncológicos (ER, PR, HER2, Ki67, FISH) de relatórios clínicos franceses e definição de um percurso clínico auditável e realista para implantação.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Out. 2025 – mai. 2026',
        title: 'Investigador estudante, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Concebi o DEMNE, um pipeline híbrido de NER clínico (regras / transformer / LLM) para texto oncológico francês, orientado por cinco métricas de corpus formalizadas — o projeto central do percurso Tremplin Recherche antes das candidaturas a doutoramento.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Presente',
        title: 'Product Lead e programador, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Construção de uma plataforma que dá a pacientes com lesões cerebrais e a terapeutas ocupacionais uma forma estruturada de comparar ferramentas de compensação cognitiva. Nasceu como protótipo Python/Streamlit no hackathon SN@SU (Sorbonne Université, com Flor Sanchez-Luizard, terapeuta ocupacional na UEROS L’ADAPT Île-de-France); está agora a definir-se uma reconstrução de produção (FastAPI, PostgreSQL, Next.js) com alojamento conforme HDS/RGPD e um motor de pesquisa semântica para o emparelhamento de ferramentas clínicas.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Estudante de engenharia — Data Science e IA',
        org: 'ESIEE Paris',
        body: 'Estudante do quinto ano do programa de engenharia de cinco anos da ESIEE Paris, especialização Data Science e IA (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Estagiário de engenharia, divisão GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'Desenvolvimento de autopkgtests com OpenCL para a compatibilidade de GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) na infraestrutura Debian/ROCm no GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Presente',
        title: 'Explicador de ciências (STEM)',
        org: 'Complétude',
        body: 'Aulas de matemática e físico-química a cerca de dez alunos, do primário ao último ano do secundário, em paralelo com os estudos de engenharia.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Saiba mais →',
    items: [
      {
        date: 'Junho de 2026 · Hackathon SN@SU',
        title: 'NeuroStep',
        description:
          'Um catálogo de ferramentas digitais de compensação cognitiva para pessoas com lesões cerebrais e os seus terapeutas ocupacionais.',
        longBody:
          'O NeuroStep nasceu no hackathon SN@SU (Sorbonne Université). Terapeutas ocupacionais e pacientes encontram apps de comunicação, memória e planeamento sem percorrer as lojas uma a uma: cada ferramenta está listada, classificada por perturbação e tema, e é pesquisável.\nO MVP é uma aplicação Streamlit com um armazenamento JSON; está agora a definir-se uma reconstrução de produção com FastAPI, PostgreSQL e um frontend Next.js.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Dez. 2025 · Projeto em equipa',
        title: 'Air Quality Dashboard',
        description:
          'Um painel interativo que reconstrói 15 anos de poluição atmosférica de fundo em França (2000–2015).',
        longBody:
          'Um pipeline de dados e um painel interativo sobre indicadores comunais do INERIS (Zenodo). Os scripts descarregam, limpam e guardam os dados em SQLite; o painel apresenta um mapa de calor de poluição com Leaflet, com um seletor de ano e filtros de poluente, a par de gráficos Plotly.\nFeito com o colega de equipa William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Projeto de curso',
        title: 'Face Recognition with Deep Learning',
        description:
          'Reconhecimento facial baseado em CNN em imagens fixas e depois vídeo, com aumento de dados e alinhamento facial.',
        longBody:
          'Um projeto de curso sobre reconhecimento facial moderno. Um primeiro modelo treinado com apenas 218 imagens sofria de forte sobreajuste; o aumento de dados (rotação, zoom) e um passo de alinhamento facial que normaliza a posição dos olhos e dos lábios, combinados com uma rede pré-treinada, melhoraram a generalização. O objetivo era detetar rostos em vídeo a partir do próprio conjunto de dados do projeto.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Projeto a dois',
        title: 'TBA — Text Adventure Game',
        description:
          'Um jogo de aventura textual em terminal, em Python, com um desenho orientado a objetos.',
        longBody:
          'Uma aventura textual jogada no terminal: o jogador move-se entre oito salas escrevendo comandos. O código está dividido em pequenas classes de responsabilidade única (jogo, sala, jogador, comando, ação, personagem, objeto), pelo que acrescentar uma sala ou um objeto continua a ser uma alteração local.\nFeita com Anne-Colombe André na ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Fev. 2025 · Projeto em equipa',
        title: 'Marmiton Data Intelligence',
        description:
          'Uma plataforma de analítica de dados culinários: scraping, ETL e um painel sobre dados de receitas.',
        longBody:
          'Um projeto de equipa de engenharia de dados que extrai dados de receitas do Marmiton, corre um pipeline ETL e expõe os resultados através de um painel de analítica. Feito em Python com notebooks Jupyter para exploração.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Scripts autopkgtest que validam software científico em GPU AMD, na infraestrutura de CI do Debian.',
        longBody:
          'Estágio de 4 meses na divisão Div/Exp GRADES do Synchrotron SOLEIL, orientado por Emmanuel Farhi e Frédéric-Emmanuel Picca. O objetivo: reduzir a dependência da cadeia de cálculo científico face à NVIDIA/CUDA, testando se os pacotes científicos Debian correm em GPU AMD através do ROCm.\nEscrevi autopkgtests em OpenCL e validei as compilações num contentor podman+ROCm (via sbuild), integrando-as depois a montante no GitLab Salsa do Debian. Foram adicionados autotests ROCm para PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx e sasmodels; os pacotes sem código OpenCL (genx, examl) ou presos numa migração Python 2→3 inacabada (pysph) foram postos de parte. É um primeiro conjunto de peças que ajuda toda a comunidade científica Debian a passar da NVIDIA para a AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Publicado · out. 2026', title: 'Por que o NER clínico francês quebra modelos genéricos', body: 'Um panorama de onde pipelines NER padrão falham em laudos de oncologia franceses, e o que isso implica para a estrutura do DEMNE.', content: `<p>Abra um relatório de oncologia em francês e a maioria dos modelos de NER prontos a usar tropeça logo na primeira frase. O vocabulário é denso e abreviado (ER, PR, HER2, Ki67, FISH), a formatação muda de um hospital para outro, e a terminologia de biomarcadores que importa está quase ausente dos corpora com que esses modelos foram treinados. O reflexo habitual &mdash; atirar-lhe um modelo grande &mdash; funciona, mas é caro, opaco e difícil de justificar perante um clínico ou um auditor.</p><h2>Nem toda entidade precisa de um LLM</h2><p>O DEMNE parte de uma observação direta: as entidades destes relatórios não são igualmente difíceis. Uma menção de biópsia escreve-se de umas poucas formas estáveis; um nome de fármaco pode aparecer de cem maneiras. Assim, em vez de um único modelo para tudo, o DEMNE mede cada tipo de entidade e encaminha-a para o método mais leve que seja fiável &mdash; uma regra determinística, um transformer afinado ou um LLM apenas como último recurso.</p><p>A medida são cinco métricas de corpus calculadas a partir das anotações: quão regular é a forma de superfície, quão homogéneo é o vocabulário, se um pequeno conjunto de palavras-chave é discriminante, com que frequência a menção surge sob negação ou contradição, e se há dados anotados suficientes para treinar um modelo supervisionado. Um grafo de decisão determinístico transforma esses números num nível, e os seus 17 limiares são calibrados com uma busca multiobjetivo que penaliza a dobrar enviar uma entidade para um método demasiado fraco face a um apenas demasiado caro.</p><h2>O que traz</h2><p>No conjunto de calibração de oncologia (59 tipos de entidade), o encaminhamento concorda com o nível de referência dos especialistas com uma concordância de 0,954 e uma estimativa leave-one-corpus-out de 0,866 &mdash; bem acima de qualquer baseline de nível fixo (sempre-regras atinge 0,729, sempre-LLM 0,148). O teste mais convincente é externo: aplicado sem reajuste a 300 relatórios de TC da AP-HP, em localizações tumorais nunca vistas, o DEMNE encaminhou 99,5 % das menções (411 de 413) para regras determinísticas. Essas regras atingiram um F1 médio de 0,941, ao passo que um transformer afinado nas mesmas entidades, com um orçamento hospitalar realista, ficou-se por 0,358.</p><p>Por outras palavras: para as entidades padronizadas que dominam o relatório oncológico, as regras não eram apenas mais baratas &mdash; eram melhores, e cada decisão de regra traça-se até uma condição explícita, exatamente o que pedem os artigos 12 e 14 do EU AI Act.</p><h2>Onde para</h2><p>Quero ser honesto quanto aos limites. O padrão de referência é pequeno &mdash; 92 tipos de entidade, 59 deles em oncologia &mdash; por isso as pontuações num único corpus são otimistas e só valem as comparações relativas. O nível LLM nunca foi avaliado de ponta a ponta na coorte externa; a sua única entidade encaminhada era demasiado rara. E a calibração não se transfere entre domínios: noutro género clínico ou noutra língua a concordância cai para 0,45&ndash;0,73, pelo que os limiares têm de ser reajustados. O DEMNE é uma prova de viabilidade, não um produto acabado.</p><h2>Porque importa</h2><p>A questão não é que as regras batam os transformers. É que &laquo;qual método&raquo; é uma pergunta que se pode responder entidade a entidade, a partir de propriedades mensuráveis do texto, em vez de recorrer por defeito ao modelo mais pesado e esperar. Para o PLN clínico &mdash; onde o custo, a auditabilidade e a confiança importam ao mesmo tempo &mdash; este enquadramento vale mais do que mais um ponto percentual num benchmark.</p><p>O código e o método completo estão no <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; o manuscrito está em preparação.</p>` },
      { status: 'Publicado · out. 2026', title: 'Extração em estágios vs. um único modelo grande', body: 'O argumento para rotear entidades por regras e um transformer ajustado antes de chamar um LLM — e o que custa errar.', content: `<p>Entregue hoje um problema difícil de PLN a uma equipa e o reflexo é pegar no maior modelo disponível e deixá-lo resolver tudo. Em texto clínico francês esse reflexo é caro, lento e difícil de auditar &mdash; e, no fim, nem sequer o mais preciso. O DEMNE faz a aposta oposta: enviar cada tipo de entidade para a ferramenta mais leve capaz de a tratar, e escalar apenas quando o texto realmente o exige.</p><h2>Uma escada, não um martelo</h2><p>O pipeline tem três níveis. Regras determinísticas &mdash; regex e léxicos curados &mdash; tratam das entidades escritas de umas poucas formas estáveis: datas, dosagens, abreviaturas padrão de biomarcadores. Um transformer afinado em texto oncológico francês trata das entidades que exigem verdadeira compreensão semântica e de domínio. Um LLM fica no topo, reservado aos casos realmente ambíguos que sobrevivem às duas etapas anteriores. Nada sobe mais alto do que o necessário.</p><h2>Porquê não só o LLM?</h2><p>Porque um único modelo grande paga o preço do LLM em cada entidade, incluindo as que uma regex teria resolvido num instante. É mais lento, precisa de um orçamento de GPU que a maioria dos hospitais não tem, e cada decisão é uma caixa negra que, ainda assim, é preciso justificar perante um clínico ou um auditor. E na própria tarefa de roteamento, o baseline sempre-LLM foi o pior, concordando com o nível especialista apenas 0,148 das vezes. A ferramenta mais pesada não é automaticamente a mais fiável.</p><h2>O custo de rotear mal</h2><p>A extração em estágios só compensa se o roteamento for bom, por isso é aí que o DEMNE põe o seu cuidado. Cinco métricas medidas a partir das anotações alimentam um grafo de decisão determinístico cujos 17 limiares são calibrados por uma busca multiobjetivo. O objetivo é deliberadamente assimétrico: enviar uma entidade para um método demasiado fraco é penalizado o dobro de enviá-la para um apenas demasiado caro &mdash; porque uma extração perdida num relatório clínico custa mais do que um segundo de GPU desperdiçado.</p><h2>O que dizem os números</h2><p>No conjunto de calibração de oncologia, o roteamento coincide com o nível de referência dos especialistas 0,954 das vezes, contra 0,729 de sempre-regras e 0,148 de sempre-LLM. Aplicado intacto a 300 relatórios da AP-HP nunca vistos, encaminhou 99,5 % das menções para regras determinísticas, que atingiram um F1 médio de 0,941 &mdash; onde um transformer afinado com um orçamento hospitalar realista ficou por 0,358. Para as entidades padronizadas que dominam estes relatórios, o nível mais barato era também o mais preciso.</p><h2>Quando um único modelo é a resposta certa</h2><p>A estratificação não é gratuita: acrescenta uma camada de roteamento para construir, medir e manter, e os limiares têm de ser recalibrados para cada novo domínio. Se o texto é uniforme, as entidades são todas igualmente difíceis, ou há orçamento e tolerância de auditoria para um único modelo grande, a escada é só sobrecarga. A afirmação aqui é estreita &mdash; quando o custo, a latência e a rastreabilidade importam ao mesmo tempo, como no PLN clínico, decidir entidade a entidade supera recorrer por defeito ao modelo mais pesado e esperar.</p><p>O código e o método completo estão no <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; o manuscrito está em preparação.</p>` },
    ],
  },
  contact: {
    title: 'Vamos falar sobre PLN clínico, IA biomédica, ou uma colaboração de doutorado.',
    directLabel: 'Direto',
    elsewhereLabel: 'Em outros lugares',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Agendar uma chamada',
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
    kicker: 'ESIEE Paris · Op zoek naar een onderzoeksstage van 6 maanden · Klinische NLP & biomedische AI · vanaf feb. 2027',
    h1Pre: 'Biomarkers uit klinische tekst halen ',
    h1Accent: 'zonder de GPU wakker te maken',
    h1Post: '',
    sub: "Ik ben Clément Longeac. Ik bouw DEMNE, een routeringsframework dat per entiteitstype de lichtste methode kiest die betrouwbaar blijft — regels, een transformer of een LLM. Op een ongeziene AP-HP-cohort routeert het 99,5 % van de vermeldingen naar auditeerbare regels met een F1 van 0,941, waar een fijn afgestelde transformer slechts 0,358 haalt.",
    ctaResearch: 'Bekijk het onderzoek',
    ctaCV: 'Download CV',
    caption: 'DEMNE — Rules → Transformer → LLM, live schema',
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
    title: 'DEMNE',
    subtitle: 'Een hybride named-entity-recognitionpipeline voor Franse oncologische klinische tekst.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Klinische NER · Franse oncologiecorpora',
    p1: 'Standaard NER-modellen falen flink op Franse klinische tekst: dichte afkortingen, inconsistente opmaak tussen ziekenhuissystemen, en biomarkerterminologie die nauwelijks voorkomt in algemene trainingsdata. DEMNE pakt dit aan met een gefaseerde pipeline in plaats van één model — elke fase doet waar hij goed in is, en schaalt alleen op naar een zwaarder model wanneer nodig.',
    p2: 'Het systeem is fijn afgesteld op DrBERT-7GB over drie verschillende Franse oncologiecorpora, en richt zich op zeven prioritaire biomarker-entiteitstypen die worden gebruikt in behandelingsrelevante rapportage.',
    tags: ['Klinische NLP', 'Transformers', 'DrBERT-7GB', 'Franse oncologie'],
    viewRepo: 'Bekijk de repository',
    readMethodology: 'Lees de methodologie',
    pipeline: [
      { num: '01', title: 'Regelgebaseerde stap', body: 'Regex- en lexiconmatching vangt tegen lage kosten hoogzekere, laag-ambigue entiteiten — datums, doseringen, standaard biomarkerafkortingen.' },
      { num: '02', title: 'Transformer-extractie', body: 'DrBERT-7GB, fijn afgesteld over drie oncologiecorpora, behandelt de entiteiten die echt semantisch en domeinbegrip vereisen.' },
      { num: '03', title: 'LLM-arbitrage', body: 'Resterende conflicten en randgevallen worden voor de uiteindelijke disambiguatie doorgestuurd naar een LLM-stap.' },
    ],
    aiAct: {
      title: 'Regelgevende afstemming — EU AI Act',
      body: 'Klinische entiteitsextractie op patiëntdossiers valt duidelijk binnen de hoogrisicocategorie van de EU AI Act. Het gefaseerde ontwerp van DEMNE houdt vanaf het begin rekening met artikel 12 en 14, niet achteraf toegevoegd.',
      articles: [
        { code: 'Art. 12', label: 'Registratie', desc: 'Elke extractiebeslissing is te herleiden tot de fase (regels, transformer of LLM) en het betrouwbaarheidsscore die deze produceerde, wat automatische auditlogging mogelijk maakt.' },
        { code: 'Art. 14', label: 'Menselijk toezicht', desc: 'Uitkomsten van LLM-arbitrage worden gemarkeerd voor klinische beoordeling in plaats van stilzwijgend geaccepteerd, zodat een mens betrokken blijft bij ambigue gevallen.' },
      ],
    },
  },
  metrics: {
    label: 'Resultaten',
    title: 'Wat de gefaseerde aanpak oplevert',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'van de vermeldingen naar regels gerouteerd (ongeziene AP-HP-cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'regel-F1 vs 0,358 voor een fijnafgestemde DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'routeringsconcordantie (leave-one-corpus-out)' },
    ],
  },
  experience: {
    label: '03 — Ervaring',
    title: 'Waar het werk tot nu toe heeft plaatsgevonden',
    currentLabel: 'Lopend',
    items: [
      {
        date: 'Mei – jul. 2026',
        title: 'Onderzoeksstagiair, klinisch datawarehouse',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'De DEMNE-routeringsaanpak toegepast en gevalideerd op ziekenhuisgegevens: extractie van oncologische biomarkers (ER, PR, HER2, Ki67, FISH) uit Franse klinische rapporten en definitie van een auditeerbaar, inzetgericht klinisch traject.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Okt. 2025 – mei 2026',
        title: 'Stud, onderzoeker, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'DEMNE ontworpen, een hybride klinische NER-pijplijn (regels / transformer / LLM) voor Franse oncologische tekst, gestuurd door vijf geformaliseerde corpusmetingen — het kernproject van het Tremplin-Recherche-traject met het oog op promotieaanvragen.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Heden',
        title: 'Product Lead & ontwikkelaar, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Bouw van een platform dat mensen met hersenletsel en ergotherapeuten een gestructureerde manier biedt om cognitieve compensatiehulpmiddelen te vergelijken. Begonnen als Python/Streamlit-prototype op de SN@SU-hackathon (Sorbonne Université, met Flor Sanchez-Luizard, ergotherapeut bij UEROS L’ADAPT Île-de-France); nu wordt een productieherbouw (FastAPI, PostgreSQL, Next.js) afgebakend met HDS/AVG-conforme hosting en een semantische zoekmachine voor het matchen van klinische hulpmiddelen.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Ingenieursstudent — Data Science & AI',
        org: 'ESIEE Paris',
        body: 'Vijfdejaarsstudent in het vijfjarige ingenieursprogramma van ESIEE Paris, specialisatie Data Science & AI (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Ingenieursstagiair, afdeling GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'autopkgtests ontwikkeld met OpenCL voor AMD-GPU-compatibiliteit (pyopencl, nabu, ufo-filters, pyvkfft) over de Debian/ROCm-infrastructuur op GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Heden',
        title: 'Bijlesdocent (bèta)',
        org: 'Complétude',
        body: 'Wiskunde en natuur-scheikunde gegeven aan een tiental leerlingen, van de basisschool tot het eindexamenjaar, naast mijn ingenieursstudie.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Meer weten →',
    items: [
      {
        date: 'Juni 2026 · SN@SU-hackathon',
        title: 'NeuroStep',
        description:
          'Een catalogus van digitale hulpmiddelen voor cognitieve compensatie voor mensen met hersenletsel en hun ergotherapeuten.',
        longBody:
          'NeuroStep begon op de SN@SU-hackathon (Sorbonne Université). Ergotherapeuten en patiënten vinden apps voor communicatie, geheugen en planning zonder de appstores één voor één te doorzoeken: elk hulpmiddel is opgenomen, geclassificeerd op stoornis en thema, en doorzoekbaar.\nDe MVP is een Streamlit-applicatie met een JSON-opslag; momenteel wordt een productieherbouw met FastAPI, PostgreSQL en een Next.js-frontend afgebakend.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Dec. 2025 · Teamproject',
        title: 'Air Quality Dashboard',
        description:
          'Een interactief dashboard dat 15 jaar achtergrondluchtvervuiling in Frankrijk reconstrueert (2000–2015).',
        longBody:
          'Een datapijplijn en interactief dashboard over INERIS-indicatoren op gemeenteniveau (Zenodo). Scripts downloaden, schonen en bewaren de data in SQLite; het dashboard toont een Leaflet-heatmap van vervuiling met een jaarschuif en vervuilingsfilters, naast Plotly-grafieken.\nGemaakt met teamgenoot William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Cursusproject',
        title: 'Face Recognition with Deep Learning',
        description:
          'CNN-gebaseerde gezichtsherkenning op stilstaande beelden en daarna video, met data-augmentatie en gezichtsuitlijning.',
        longBody:
          'Een cursusproject over moderne gezichtsherkenning. Een eerste model, getraind op slechts 218 beelden, overfitte sterk; data-augmentatie (rotatie, zoom) en een gezichtsuitlijningsstap die de positie van ogen en lippen normaliseert, gecombineerd met een voorgetraind netwerk, verbeterden de generalisatie. Het doel was gezichten in video te detecteren vanuit de eigen dataset van het project.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Duoproject',
        title: 'TBA — Text Adventure Game',
        description:
          'Een tekstavontuur voor de terminal in Python, met een objectgeoriënteerd ontwerp.',
        longBody:
          'Een tekstavontuur dat in de terminal wordt gespeeld: de speler beweegt tussen acht kamers door commando’s te typen. De code is opgesplitst in kleine klassen met één verantwoordelijkheid (spel, kamer, speler, commando, actie, personage, voorwerp), zodat een kamer of voorwerp toevoegen een lokale wijziging blijft.\nGemaakt met Anne-Colombe André aan de ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Feb. 2025 · Teamproject',
        title: 'Marmiton Data Intelligence',
        description:
          'Een platform voor culinaire data-analyse: scraping, ETL en een dashboard over receptgegevens.',
        longBody:
          'Een data-engineering-teamproject dat receptgegevens van Marmiton scrapt, een ETL-pijplijn draait en de resultaten via een analysedashboard ontsluit. Gebouwd in Python met Jupyter-notebooks voor verkenning.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'autopkgtest-scripts die wetenschappelijke software op AMD-GPU’s valideren, op de CI-infrastructuur van Debian.',
        longBody:
          'Stage van 4 maanden bij de afdeling Div/Exp GRADES van Synchrotron SOLEIL, begeleid door Emmanuel Farhi en Frédéric-Emmanuel Picca. Het doel: de afhankelijkheid van de wetenschappelijke rekenketen van NVIDIA/CUDA verkleinen door te testen of Debian-wetenschapspakketten op AMD-GPU’s draaien via ROCm.\nIk schreef OpenCL-autopkgtests en valideerde de builds in een podman+ROCm-container (via sbuild), en bracht ze daarna upstream in Debians GitLab Salsa. Er werden ROCm-autotests toegevoegd voor PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx en sasmodels; pakketten zonder OpenCL-code (genx, examl) of vast op een onafgemaakte Python 2→3-migratie (pysph) vielen af. Het is een eerste set bouwstenen die de bredere wetenschappelijke Debian-gemeenschap helpt over te stappen van NVIDIA naar AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Gepubliceerd · okt. 2026', title: 'Waarom Franse klinische NER generieke modellen breekt', body: 'Een overzicht van waar standaard NER-pipelines falen op Franse oncologierapporten, en wat dat betekent voor de structuur van DEMNE.', content: `<p>Open een Frans oncologisch verslag en de meeste kant-en-klare NER-modellen struikelen al in de eerste zin. Het vocabulaire is dicht en afgekort (ER, PR, HER2, Ki67, FISH), de opmaak verschilt per ziekenhuis, en de biomarkerterminologie die ertoe doet ontbreekt vrijwel in de corpora waarop deze modellen zijn getraind. De gebruikelijke reflex &mdash; er een groot model op loslaten &mdash; werkt, maar is duur, ondoorzichtig en moeilijk te verantwoorden tegenover een clinicus of auditor.</p><h2>Niet elke entiteit heeft een LLM nodig</h2><p>DEMNE vertrekt van een nuchtere observatie: de entiteiten in deze verslagen zijn niet even moeilijk. Een biopsievermelding wordt op een handvol stabiele manieren geschreven; een medicijnnaam kan in honderd vormen opduiken. Dus in plaats van één model voor alles meet DEMNE elk entiteitstype en stuurt het naar de lichtste methode die betrouwbaar genoeg is &mdash; een deterministische regel, een fijn afgestemde transformer, of een LLM alleen als laatste redmiddel.</p><p>De meting bestaat uit vijf corpusmetingen berekend uit de annotaties: hoe sjabloonmatig de oppervlaktevorm is, hoe homogeen het vocabulaire is, of een kleine set trefwoorden onderscheidend is, hoe vaak de vermelding onder negatie of tegenspraak valt, en of er wel genoeg gelabelde data is om een supervised model te trainen. Een deterministische beslisgraaf zet die getallen om in een niveau, en de 17 drempels worden gekalibreerd met een multi-objective zoektocht die een entiteit naar een te zwakke methode sturen twee keer zo zwaar bestraft als naar een slechts te dure.</p><h2>Wat het oplevert</h2><p>Op de oncologische kalibratieset (59 entiteitstypen) komt de routering overeen met het expertreferentieniveau met een concordantie van 0,954 en een leave-one-corpus-out-schatting van 0,866 &mdash; ruim boven elke baseline met vast niveau (altijd-regels haalt 0,729, altijd-LLM 0,148). De overtuigender test is extern: zonder bijstelling toegepast op 300 CT-verslagen van de AP-HP, op nooit geziene tumorlocaties, routeerde DEMNE 99,5 % van de gemarkeerde vermeldingen (411 van 413) naar deterministische regels. Die regels haalden een gemiddelde F1 van 0,941, terwijl een op dezelfde entiteiten fijn afgestemde transformer binnen een realistisch ziekenhuisbudget bleef steken op 0,358.</p><p>Met andere woorden: voor de gestandaardiseerde entiteiten die de oncologische verslaglegging domineren, waren regels niet alleen goedkoper &mdash; ze waren beter, en elke regelbeslissing is te herleiden tot een expliciete voorwaarde, precies wat de artikelen 12 en 14 van de EU AI Act vragen.</p><h2>Waar het stopt</h2><p>Ik wil eerlijk zijn over de grenzen. De referentiestandaard is klein &mdash; 92 entiteitstypen, 59 ervan in de oncologie &mdash; dus scores op één corpus zijn optimistisch en alleen relatieve vergelijkingen houden stand. Het LLM-niveau is op het externe cohort nooit end-to-end geëvalueerd; de ene gerouteerde entiteit was te zeldzaam. En de kalibratie draagt niet over tussen domeinen: in een ander klinisch genre of een andere taal zakt de concordantie naar 0,45&ndash;0,73, dus de drempels moeten opnieuw worden afgesteld. DEMNE is een haalbaarheidsbewijs, geen afgewerkt product.</p><h2>Waarom het ertoe doet</h2><p>Het punt is niet dat regels transformers verslaan. Het is dat &bdquo;welke methode&rdquo; een vraag is die je per entiteit kunt beantwoorden, vanuit meetbare eigenschappen van de tekst, in plaats van standaard het zwaarste model te kiezen en te hopen. Voor klinische NLP &mdash; waar kosten, auditeerbaarheid en vertrouwen tegelijk tellen &mdash; is die insteek meer waard dan nog een procentpunt op een benchmark.</p><p>De code en de volledige methode staan op <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; het manuscript is in voorbereiding.</p>` },
      { status: 'Gepubliceerd · okt. 2026', title: 'Gefaseerde extractie versus één groot model', body: 'Het argument om entiteiten via regels en een fijn afgestelde transformer te leiden voordat er ooit een LLM wordt aangeroepen — en wat het kost om dat verkeerd te doen.', content: `<p>Geef een team vandaag een moeilijk NLP-probleem en de reflex is om naar het grootste beschikbare model te grijpen en het alles te laten uitzoeken. Op Franse klinische tekst is die reflex duur, traag en moeilijk te auditen &mdash; en, zo blijkt, niet eens het nauwkeurigst. DEMNE zet in op het tegenovergestelde: stuur elk entiteitstype naar het lichtste gereedschap dat het aankan, en escaleer alleen als de tekst er echt om vraagt.</p><h2>Een trap, geen hamer</h2><p>De pijplijn heeft drie niveaus. Deterministische regels &mdash; regex en samengestelde lexicons &mdash; nemen de entiteiten die op een handvol stabiele manieren worden geschreven: data, doseringen, standaard biomarker-afkortingen. Een op Franse oncologische tekst fijn afgestelde transformer verwerkt de entiteiten die echt semantisch en domeinbegrip vereisen. Een LLM staat bovenaan, gereserveerd voor de werkelijk dubbelzinnige gevallen die beide eerdere stappen overleven. Niets klimt hoger dan nodig.</p><h2>Waarom niet gewoon de LLM?</h2><p>Omdat één groot model de prijs van de LLM op elke entiteit betaalt, ook die welke een regex meteen had opgelost. Het is trager, het vraagt een GPU-budget dat de meeste ziekenhuizen niet hebben, en elke beslissing is een black box die je alsnog moet verantwoorden tegenover een clinicus of auditor. En op de routeringstaak zelf was de altijd-LLM-baseline de slechtste, die het expertniveau slechts 0,148 van de tijd evenaarde. Het zwaarste gereedschap is niet automatisch het betrouwbaarste.</p><h2>De kosten van verkeerd routeren</h2><p>Gefaseerde extractie loont alleen als de routering goed is, dus daar steekt DEMNE zijn zorg in. Vijf uit de annotaties gemeten metingen voeden een deterministische beslisgraaf waarvan de 17 drempels met een multi-objective zoektocht worden gekalibreerd. Het doel is bewust asymmetrisch: een entiteit naar een te zwakke methode sturen wordt twee keer zo zwaar bestraft als naar een slechts te dure &mdash; want een gemiste extractie in een klinisch rapport kost meer dan een verspilde GPU-seconde.</p><h2>Wat de cijfers zeggen</h2><p>Op de oncologische kalibratieset komt de routering 0,954 van de tijd overeen met het expertreferentieniveau, tegen 0,729 voor altijd-regels en 0,148 voor altijd-LLM. Onveranderd toegepast op 300 ongeziene AP-HP-rapporten routeerde het 99,5 % van de vermeldingen naar deterministische regels, die een gemiddelde F1 van 0,941 haalden &mdash; waar een onder een realistisch ziekenhuisbudget fijn afgestelde transformer op 0,358 bleef steken. Voor de gestandaardiseerde entiteiten die deze rapporten domineren, was het goedkope niveau ook het nauwkeurige.</p><h2>Wanneer één model het juiste antwoord is</h2><p>Fasering is niet gratis: het voegt een routeringslaag toe om te bouwen, te meten en te onderhouden, en de drempels moeten voor elk nieuw domein opnieuw worden gekalibreerd. Is de tekst uniform, zijn alle entiteiten even moeilijk, of is er budget en audittolerantie voor één groot model, dan is de trap alleen maar overhead. De claim hier is smal &mdash; als kosten, latentie en traceerbaarheid tegelijk tellen, zoals in klinische NLP, verslaat beslissen per entiteit het standaard kiezen van het zwaarste model en hopen.</p><p>De code en de volledige methode staan op <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; het manuscript is in voorbereiding.</p>` },
    ],
  },
  contact: {
    title: 'Laten we praten over klinische NLP, biomedische AI, of een doctoraatssamenwerking.',
    directLabel: 'Direct',
    elsewhereLabel: 'Elders',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Plan een gesprek',
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
    kicker: 'ESIEE Paris · 寻找 6 个月研究实习 · 临床 NLP 与生物医学 AI · 2027 年 2 月起',
    h1Pre: '从临床文本中提取生物标志物，',
    h1Accent: '却不必唤醒GPU',
    h1Post: '。',
    sub: "我是 Clément Longeac。我构建 DEMNE——一个路由框架，针对每种实体类型选择仍然可靠的最轻方法：规则、transformer 或 LLM。在一个从未见过的 AP-HP 队列上，它将 99.5% 的提及路由到可审计的规则，F1 达到 0.941，而微调后的 transformer 仅为 0.358。",
    ctaResearch: '查看研究',
    ctaCV: '下载简历',
    caption: 'DEMNE — 规则 → Transformer → LLM，实时示意图',
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
    title: 'DEMNE',
    subtitle: '面向法语肿瘤学临床文本的混合命名实体识别流水线。',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: '临床命名实体识别 · 法语肿瘤学语料库',
    p1: '现成的命名实体识别模型在法语临床文本上表现很差：密集的缩写、各医院系统间不一致的格式，以及在通用训练数据中几乎不出现的生物标志物术语。DEMNE通过分阶段流水线而非单一模型来应对这一问题——每个阶段处理自己最擅长的部分，只有在必要时才升级到更重的模型。',
    p2: '该系统在三个不同的法语肿瘤学语料库上对DrBERT-7GB进行了微调，目标是治疗相关报告中使用的七种优先生物标志物实体类型。',
    tags: ['临床自然语言处理', 'Transformer', 'DrBERT-7GB', '法语肿瘤学'],
    viewRepo: '查看代码仓库',
    readMethodology: '阅读方法论',
    pipeline: [
      { num: '01', title: '基于规则的处理', body: '正则表达式与词典匹配以低成本捕获高置信度、低歧义的实体——日期、剂量、标准生物标志物缩写。' },
      { num: '02', title: 'Transformer抽取', body: '在三个肿瘤学语料库上微调的DrBERT-7GB，负责处理需要真正语义和领域理解的实体。' },
      { num: '03', title: 'LLM仲裁', body: '剩余的冲突和边缘情况在输出前会被路由到LLM阶段进行最终消歧。' },
    ],
    aiAct: {
      title: '监管合规 — 欧盟人工智能法案',
      body: '对患者病历进行临床实体抽取正属于欧盟人工智能法案的高风险类别。DEMNE的分阶段设计从一开始就考虑到第12条和第14条,而非事后补充。',
      articles: [
        { code: '第12条', label: '记录保存', desc: '每一个抽取决策都可以追溯到产生它的阶段（规则、Transformer或LLM）以及置信度分数,从而实现自动审计日志记录。' },
        { code: '第14条', label: '人工监督', desc: 'LLM仲裁的输出会被标记以供临床医生审查，而非默默接受，从而在歧义案例中保留人工干预。' },
      ],
    },
  },
  metrics: {
    label: '成果',
    title: '分阶段方法带来的价值',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — 经历',
    title: '迄今为止的工作历程',
    currentLabel: '进行中',
    items: [
      {
        date: '2026年5月 – 7月',
        title: '科研实习生，临床数据仓库',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: '在医院数据上应用并验证了 DEMNE 的路由方法：从法语临床报告中抽取肿瘤学生物标志物（ER、PR、HER2、Ki67、FISH），并定义了一条可审计、贴近实际部署的临床路径。',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: '2025年10月 – 2026年5月',
        title: '学生研究员，Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: '设计了 DEMNE——一个面向法语肿瘤学文本的混合临床 NER 流水线（规则 / transformer / LLM），由五项形式化的语料库指标驱动，是 Tremplin Recherche 路线在博士申请前的核心项目。',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026年 – 至今',
        title: '产品负责人兼开发者，NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: '构建一个平台，让脑损伤患者及作业治疗师能够以结构化方式比较认知补偿工具。最初是 SN@SU 黑客松上的 Python/Streamlit 原型（Sorbonne Université，与 UEROS L’ADAPT Île-de-France 的作业治疗师 Flor Sanchez-Luizard 合作）；目前正在规划生产级重建（FastAPI、PostgreSQL、Next.js），采用符合 HDS/GDPR 的托管，并配备用于临床工具匹配的语义搜索引擎。',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024年 – 2027年',
        title: '工程学学生 — 数据科学与人工智能',
        org: 'ESIEE Paris',
        body: 'ESIEE Paris 五年制工程项目的五年级学生，主修数据科学与人工智能（DSIA）。',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025年',
        title: '工程实习生，GRADES 部门',
        org: 'Synchrotron SOLEIL',
        body: '使用 OpenCL 开发 autopkgtest，在 GitLab Salsa 上的 Debian/ROCm 基础设施中检查 AMD GPU 兼容性（pyopencl、nabu、ufo-filters、pyvkfft）。',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022年 – 至今',
        title: '理工科家教',
        org: 'Complétude',
        body: '在工程学业之余，为约十名从小学到高中毕业班的学生讲授数学和物理化学。',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: '2026年6月 · SN@SU 黑客松',
        title: 'NeuroStep',
        description:
          '面向脑损伤人士及其作业治疗师的数字认知补偿工具目录。',
        longBody:
          'NeuroStep 始于 SN@SU 黑客松（Sorbonne Université）。作业治疗师和患者无需逐个翻找应用商店，即可找到用于沟通、记忆和规划的应用：每个工具都被收录，并按障碍类型和主题分类、可检索。\nMVP 是一个以 JSON 存储为后端的 Streamlit 应用；目前正在规划用 FastAPI、PostgreSQL 和 Next.js 前端进行生产级重建。',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: '2025年12月 · 团队项目',
        title: 'Air Quality Dashboard',
        description:
          '一个交互式仪表板，重建法国 15 年的背景空气污染数据（2000–2015）。',
        longBody:
          '一个围绕 INERIS 市镇级指标（Zenodo）的数据管道与交互式仪表板。脚本负责下载、清洗并将数据存入 SQLite；仪表板用 Leaflet 呈现污染热力图，配有年份滑块和污染物筛选，并辅以 Plotly 图表。\n与队友 William Zee 共同完成。',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025年 · 课程项目',
        title: 'Face Recognition with Deep Learning',
        description:
          '基于 CNN 的人脸识别，先用静态图像再用视频，并采用数据增强与人脸对齐。',
        longBody:
          '一个关于现代人脸识别的课程项目。仅用 218 张图像训练的初始模型严重过拟合；数据增强（旋转、缩放）与归一化眼睛和嘴唇位置的人脸对齐步骤，结合预训练网络，改善了泛化能力。目标是从项目自有数据集的视频中检测人脸。',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025年 · 结对项目',
        title: 'TBA — Text Adventure Game',
        description:
          '一个在终端中运行的 Python 文字冒险游戏，采用面向对象设计。',
        longBody:
          '一个在终端中进行的文字冒险：玩家通过输入命令在八个房间之间移动。代码被拆分为职责单一的小类（游戏、房间、玩家、命令、动作、角色、物品），因此新增房间或物品仍是局部改动。\n与 Anne-Colombe André 在 ESIEE Paris 共同完成。',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: '2025年2月 · 团队项目',
        title: 'Marmiton Data Intelligence',
        description:
          '一个烹饪数据分析平台：爬取、ETL 以及基于食谱数据的仪表板。',
        longBody:
          '一个数据工程团队项目：从 Marmiton 爬取食谱数据，运行 ETL 管道，并通过分析仪表板呈现结果。使用 Python 开发，并用 Jupyter notebook 进行探索。',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025年 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          '在 Debian 的 CI 基础设施上，用于在 AMD GPU 上验证科学软件的 autopkgtest 脚本。',
        longBody:
          '在 Synchrotron SOLEIL 的 Div/Exp GRADES 部门进行的 4 个月实习，由 Emmanuel Farhi 和 Frédéric-Emmanuel Picca 指导。目标：通过测试 Debian 科学软件包能否经由 ROCm 在 AMD GPU 上运行，降低科学计算栈对 NVIDIA/CUDA 的依赖。\n我编写了 OpenCL 的 autopkgtest，并在 podman+ROCm 容器中（通过 sbuild）验证构建，然后将其上游提交到 Debian 的 GitLab Salsa。为 PyOpenCL、Nabu、Ufo-filters、clpeak、pyvkfft、gpyfft、silx 和 sasmodels 添加了 ROCm 自动测试；没有 OpenCL 代码的软件包（genx、examl）或卡在未完成的 Python 2→3 迁移上的软件包（pysph）被排除。这是帮助整个 Debian 科学社区从 NVIDIA 迁移到 AMD 的第一批基石。',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: '已发布 · 2026年10月', title: '为什么法语临床命名实体识别会让通用模型失效', body: '梳理标准命名实体识别流水线在法语肿瘤学报告上失败的原因，以及这对DEMNE结构设计的启示。', content: `<p>翻开一份法语肿瘤学报告，大多数开箱即用的 NER 模型在第一句话就会出错。词汇密集且多缩写（ER、PR、HER2、Ki67、FISH），排版因医院而异，而真正重要的生物标志物术语在这些模型训练所用的语料库中几乎不存在。惯常的反应&mdash;&mdash;直接上大模型&mdash;&mdash;确实有用，但成本高、不透明，且难以向临床医生或审计者交代。</p><h2>并非每个实体都需要 LLM</h2><p>DEMNE 从一个朴素的观察出发：这些报告中的实体并非同样困难。活检提及只有几种稳定写法；药物名称却可能有上百种形式。因此，DEMNE 不用一个模型包打天下，而是度量每一种实体类型，并将其送往足够可靠的最轻方法&mdash;&mdash;确定性规则、微调过的 transformer，或仅在万不得已时才用 LLM。</p><p>所谓度量，是从标注中计算的五项语料库指标：表层形式的模板化程度、词汇的同质程度、一小组关键词是否具有判别力、提及出现在否定或矛盾之下的频率，以及是否有足够的标注数据来训练有监督模型。一个确定性决策图把这些数字转化为层级，其 17 个阈值通过多目标搜索来校准&mdash;&mdash;将实体送往过弱方法所受的惩罚，是送往仅仅过于昂贵方法的两倍。</p><h2>它带来了什么</h2><p>在肿瘤学校准集（59 种实体类型）上，路由与专家参考层级的一致性达到 0.954，留一语料库交叉验证估计为 0.866&mdash;&mdash;远高于任何固定层级的基线（全用规则为 0.729，全用 LLM 为 0.148）。更有说服力的是外部测试：在不做任何重新调参的情况下，应用于 AP-HP 的 300 份 CT 报告（涉及模型从未见过的癌症部位），DEMNE 将 99.5% 的标记提及（413 个中的 411 个）路由到确定性规则。这些规则达到了 0.941 的平均 F1，而在现实医院预算下对同样实体微调的 transformer 仅为 0.358。</p><p>换言之：对于主导肿瘤学报告的标准化实体，规则不仅更便宜&mdash;&mdash;而且更好，并且每一条规则决策都能追溯到一个明确条件，这正是欧盟 AI 法案第 12 条和第 14 条所要求的。</p><h2>它的边界</h2><p>我想坦诚地谈谈局限。参考标准很小&mdash;&mdash;92 种实体类型，其中 59 种属肿瘤学&mdash;&mdash;因此单一语料库上的分数偏乐观，只有相对比较才成立。LLM 层级从未在外部队列上端到端评估过；它唯一路由到的实体过于罕见。而且校准无法跨域迁移：换到另一种临床体裁或另一种语言，一致性会降到 0.45&ndash;0.73，阈值必须重新拟合。DEMNE 是可行性证明，而非成品。</p><h2>为什么重要</h2><p>重点并不是规则胜过 transformer，而是&ldquo;用哪种方法&rdquo;可以逐实体地、依据文本的可度量属性来回答，而不是默认选最重的模型碰运气。对于临床 NLP&mdash;&mdash;成本、可审计性与信任同时重要&mdash;&mdash;这种思路比在基准上再多一个百分点更有价值。</p><p>代码与完整方法见 <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>；论文正在撰写中。</p>` },
      { status: '已发布 · 2026年10月', title: '分阶段抽取与单一大模型的对比', body: '在调用LLM之前，先通过规则和微调Transformer路由实体的理由——以及出错时的代价。', content: `<p>今天把一个困难的 NLP 问题交给团队，惯常反应就是搬出能用的最大模型，让它把一切都搞定。在法语临床文本上，这种反应成本高、速度慢、难以审计——而且事实证明，连最准确都算不上。DEMNE 下的是相反的赌注：把每一种实体类型交给能够胜任它的最轻工具，只有当文本确实需要时才升级。</p><h2>是楼梯，不是锤子</h2><p>流水线有三个层级。确定性规则——正则表达式与精选词典——负责那些只有几种稳定写法的实体：日期、剂量、标准生物标志物缩写。在法语肿瘤学文本上微调的 transformer 处理那些需要真正语义与领域理解的实体。LLM 位于顶端，只留给真正含糊、能挺过前两个阶段的情形。没有什么会爬得比它需要的更高。</p><h2>为什么不干脆只用 LLM？</h2><p>因为单一大模型要为每一个实体支付 LLM 的代价，包括那些正则表达式本可瞬间搞定的。它更慢，需要多数医院没有的 GPU 预算，而且每个决策都是黑箱，你仍然要向临床医生或审计者交代。而在路由任务本身上，全用 LLM 的基线表现最差，与专家层级的一致性仅为 0.148。最重的工具并不自动就是最可靠的。</p><h2>路由出错的代价</h2><p>只有路由做得好，分阶段抽取才划算，所以 DEMNE 把心思正是花在这里。从标注中测得的五项指标喂入一个确定性决策图，其 17 个阈值由多目标搜索校准。该目标被刻意设计为不对称：把实体送往过弱方法所受的惩罚，是送往仅仅过于昂贵方法的两倍——因为在临床报告中漏掉一次抽取，比浪费一秒 GPU 代价更大。</p><h2>数字说明了什么</h2><p>在肿瘤学校准集上，路由与专家参考层级的一致性为 0.954，而全用规则为 0.729、全用 LLM 为 0.148。原封不动地应用于 300 份从未见过的 AP-HP 报告时，它将 99.5% 的提及路由到确定性规则，后者达到 0.941 的平均 F1——而在现实医院预算下微调的 transformer 仅为 0.358。对于主导这些报告的标准化实体，最便宜的层级同时也是最准确的。</p><h2>何时单一模型才是正确答案</h2><p>分层并非免费：它增加了一层需要构建、度量和维护的路由，而且阈值必须针对每个新领域重新校准。如果文本是均质的、实体同样困难，或者你有预算和审计容忍度去用一个大模型，那么这座楼梯只是额外负担。这里的主张很窄——当成本、延迟与可追溯性同时重要时，正如临床 NLP 那样，逐实体决策胜过默认选最重的模型再碰运气。</p><p>代码与完整方法见 <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>；论文正在撰写中。</p>` },
    ],
  },
  contact: {
    title: '欢迎交流临床自然语言处理、生物医学人工智能，或博士合作事宜。',
    directLabel: '直接联系',
    elsewhereLabel: '其他平台',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: '预约通话',
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
    kicker: 'ESIEE Paris · 6 か月の研究インターンを希望 · 臨床 NLP & 生物医学 AI · 2027 年 2 月から',
    h1Pre: 'GPUを起こさずに、',
    h1Accent: '臨床テキストからバイオマーカーを抽出する',
    h1Post: '。',
    sub: "私は Clément Longeac です。エンティティの種類ごとに、信頼できる最も軽い方法——ルール、transformer、または LLM——を選ぶルーティングフレームワーク DEMNE を開発しています。未見の AP-HP コホートでは、言及の 99.5% を監査可能なルールへ振り分け、F1 は 0.941 に達します。ファインチューニングした transformer は 0.358 にとどまります。",
    ctaResearch: '研究を見る',
    ctaCV: '履歴書をダウンロード',
    caption: 'DEMNE — Rules → Transformer → LLM、ライブ図解',
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
    title: 'DEMNE',
    subtitle: 'フランス語の腫瘍学臨床テキスト向けハイブリッド固有表現抽出パイプライン。',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: '臨床NER · フランス語腫瘍学コーパス',
    p1: '既製のNERモデルはフランス語の臨床テキストで大きくつまずきます：密度の高い略語、病院システムごとに一貫しないフォーマット、一般的な学習データにはほとんど現れない生体マーカーの専門用語などです。DEMNEは単一モデルではなく段階的なパイプラインでこれに対処します——各段階は得意な処理を担い、必要な場合のみより重いモデルへエスカレーションします。',
    p2: 'システムはDrBERT-7GBを3つの異なるフランス語腫瘍学コーパスでファインチューニングし、治療関連レポートで使用される7種類の優先的な生体マーカー実体タイプを対象としています。',
    tags: ['臨床NLP', 'Transformer', 'DrBERT-7GB', 'フランス語腫瘍学'],
    viewRepo: 'リポジトリを見る',
    readMethodology: '手法を読む',
    pipeline: [
      { num: '01', title: 'ルールベース処理', body: '正規表現と辞書によるマッチングで、日付・投与量・標準的な生体マーカー略語など、信頼度が高く曖昧性の低い実体を低コストで捕捉します。' },
      { num: '02', title: 'Transformerによる抽出', body: '3つの腫瘍学コーパスでファインチューニングされたDrBERT-7GBが、真の意味理解とドメイン理解を要する実体を処理します。' },
      { num: '03', title: 'LLMによる裁定', body: '残った競合やエッジケースは、出力前の最終的な曖昧性解消のためLLM処理へ回されます。' },
    ],
    aiAct: {
      title: '規制対応 — EU AI Act',
      body: '患者記録に対する臨床実体抽出は、EU AI Actの高リスクカテゴリに明確に該当します。DEMNEの段階的設計は、後付けではなく最初から第12条と第14条を念頭に置いています。',
      articles: [
        { code: '第12条', label: '記録保持', desc: 'すべての抽出決定は、それを生成した段階（ルール、Transformer、またはLLM）と信頼度スコアまでトレース可能で、自動的な監査ログ記録が可能です。' },
        { code: '第14条', label: '人間による監督', desc: 'LLMによる裁定結果は黙って受け入れられるのではなく、臨床医によるレビュー対象としてフラグ付けされ、曖昧なケースでは人間が判断に関与し続けます。' },
      ],
    },
  },
  metrics: {
    label: '成果',
    title: '段階的アプローチがもたらすもの',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — 経歴',
    title: 'これまでの活動の場',
    currentLabel: '進行中',
    items: [
      {
        date: '2026年5月 – 7月',
        title: '研究インターン、臨床データウェアハウス',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: '病院データ上で DEMNE のルーティング手法を適用・検証：フランス語臨床レポートから腫瘍学バイオマーカー（ER, PR, HER2, Ki67, FISH）を抽出し、監査可能で実運用に即した臨床パスを定義しました。',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: '2025年10月 – 2026年5月',
        title: '学生研究員、Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'フランス語腫瘍学テキスト向けのハイブリッド臨床 NER パイプライン（ルール / transformer / LLM）である DEMNE を設計。5 つの形式化されたコーパス指標に基づき、博士課程出願に向けた Tremplin Recherche の中核プロジェクトです。',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026年 – 現在',
        title: 'プロダクトリード兼開発者、NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: '脳損傷の患者と作業療法士が認知補償ツールを体系的に比較できるプラットフォームを構築。SN@SU ハッカソンでの Python/Streamlit プロトタイプとして始まりました（Sorbonne Université、UEROS L’ADAPT Île-de-France の作業療法士 Flor Sanchez-Luizard と協働）。現在、HDS/GDPR 準拠のホスティングと臨床ツールマッチング用のセマンティック検索エンジンを備えた本番再構築（FastAPI, PostgreSQL, Next.js）を検討中です。',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024年 – 2027年',
        title: '工学系学生 — データサイエンス & AI',
        org: 'ESIEE Paris',
        body: 'ESIEE Paris の 5 年制工学課程の 5 年次生で、データサイエンス & AI（DSIA）を専攻。',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025年',
        title: 'エンジニアインターン、GRADES 部門',
        org: 'Synchrotron SOLEIL',
        body: 'AMD GPU の互換性（pyopencl, nabu, ufo-filters, pyvkfft）を確認するため OpenCL で autopkgtest を開発し、GitLab Salsa 上の Debian/ROCm 基盤で実行。',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022年 – 現在',
        title: '理数系の家庭教師',
        org: 'Complétude',
        body: '工学の学業と並行して、小学生から高校最終学年までの約 10 名に数学と物理・化学を指導。',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: '2026年6月 · SN@SU ハッカソン',
        title: 'NeuroStep',
        description:
          '脳損傷のある人々とその作業療法士のための、デジタル認知補償ツールのカタログ。',
        longBody:
          'NeuroStep は SN@SU ハッカソン（Sorbonne Université）で始まりました。作業療法士と患者は、アプリストアを一つずつ探さずに、コミュニケーション・記憶・計画のためのアプリを見つけられます。各ツールは一覧化され、障害と主題で分類され、検索できます。\nMVP は JSON ストアを備えた Streamlit アプリで、現在 FastAPI・PostgreSQL・Next.js フロントエンドによる本番再構築を検討中です。',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: '2025年12月 · チームプロジェクト',
        title: 'Air Quality Dashboard',
        description:
          'フランスの 15 年分の背景大気汚染を再構成するインタラクティブなダッシュボード（2000–2015）。',
        longBody:
          'INERIS の市町村レベル指標（Zenodo）に基づくデータパイプラインとインタラクティブなダッシュボード。スクリプトがデータをダウンロード・クリーニングし SQLite に格納します。ダッシュボードは Leaflet による汚染ヒートマップを、年スライダーと汚染物質フィルター、Plotly のグラフとともに表示します。\nチームメイトの William Zee と共同制作。',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025年 · 授業プロジェクト',
        title: 'Face Recognition with Deep Learning',
        description:
          'CNN ベースの顔認識を静止画、次いで動画に適用し、データ拡張と顔のアライメントを用いる。',
        longBody:
          '現代的な顔認識に関する授業プロジェクト。わずか 218 枚の画像で学習した初期モデルは大きく過学習しました。データ拡張（回転・ズーム）と、目と唇の位置を正規化する顔アライメント処理を、事前学習済みネットワークと組み合わせることで汎化性能が向上しました。目的は、プロジェクト独自のデータセットの動画から顔を検出することでした。',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025年 · ペアプロジェクト',
        title: 'TBA — Text Adventure Game',
        description:
          'オブジェクト指向設計による、ターミナルで遊ぶ Python のテキストアドベンチャー。',
        longBody:
          'ターミナルで遊ぶテキストアドベンチャー。プレイヤーはコマンドを入力して 8 つの部屋を移動します。コードは単一責任の小さなクラス（ゲーム、部屋、プレイヤー、コマンド、アクション、キャラクター、アイテム）に分割されており、部屋やアイテムの追加は局所的な変更で済みます。\nESIEE Paris にて Anne-Colombe André と共同制作。',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: '2025年2月 · チームプロジェクト',
        title: 'Marmiton Data Intelligence',
        description:
          '料理データ分析プラットフォーム：スクレイピング、ETL、レシピデータのダッシュボード。',
        longBody:
          'Marmiton からレシピデータをスクレイピングし、ETL パイプラインを実行し、分析ダッシュボードで結果を提示するデータエンジニアリングのチームプロジェクト。Python で構築し、探索には Jupyter ノートブックを使用。',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025年 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Debian の CI 基盤上で、AMD GPU 上の科学ソフトウェアを検証する autopkgtest スクリプト。',
        longBody:
          'Synchrotron SOLEIL の Div/Exp GRADES 部門での 4 か月のインターンシップ。指導は Emmanuel Farhi と Frédéric-Emmanuel Picca。目的は、Debian の科学パッケージが ROCm を介して AMD GPU で動くかを検証し、科学計算スタックの NVIDIA/CUDA への依存を減らすことでした。\nOpenCL の autopkgtest を書き、podman+ROCm コンテナで（sbuild により）ビルドを検証し、Debian の GitLab Salsa に上流提出しました。PyOpenCL、Nabu、Ufo-filters、clpeak、pyvkfft、gpyfft、silx、sasmodels に ROCm 自動テストを追加。OpenCL コードを含まないパッケージ（genx、examl）や、未完了の Python 2→3 移行で止まっているパッケージ（pysph）は対象外としました。これは、Debian の科学コミュニティ全体が NVIDIA から AMD へ移行するのを助ける最初の基礎部品群です。',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: '公開 · 2026年10月', title: 'なぜフランス語臨床NERは汎用モデルを機能不全にするのか', body: '標準的なNERパイプラインがフランス語腫瘍学レポートで失敗する箇所と、それがDEMNEの構造設計に与える意味についての解説。', content: `<p>フランス語の腫瘍学レポートを開くと、既製の NER モデルの多くは最初の一文でつまずきます。語彙は密で略語が多く（ER, PR, HER2, Ki67, FISH）、書式は病院ごとに変わり、重要なバイオマーカー用語はこれらのモデルが学習したコーパスにほとんど現れません。よくある反応&mdash;&mdash;大きなモデルを投入する&mdash;&mdash;は機能しますが、高コストで不透明、臨床医や監査人に説明しづらいものです。</p><h2>すべての実体に LLM が要るわけではない</h2><p>DEMNE は率直な観察から出発します。これらのレポートの実体は一様に難しいわけではありません。生検の言及は数通りの安定した書き方しかありませんが、薬剤名は百通りにも現れます。そこで DEMNE は、何にでも一つのモデルを使うのではなく、実体の種類ごとに測定し、十分に信頼できる最も軽い手法&mdash;&mdash;決定的ルール、ファインチューンした transformer、最後の手段としてのみ LLM&mdash;&mdash;へ振り分けます。</p><p>その測定とは、アノテーションから算出する 5 つのコーパス指標です。表層形がどれほど定型的か、語彙がどれほど均質か、小さなキーワード集合が識別的か、言及が否定や矛盾の下にどれほどの頻度で現れるか、そして教師あり学習に足る注釈データがそもそもあるか。決定的な決定グラフがこれらの数値を階層に変換し、その 17 の閾値は多目的探索で較正されます。実体を弱すぎる手法に送る誤りは、単に高価すぎる手法に送る誤りの 2 倍重く罰せられます。</p><h2>何が得られるか</h2><p>腫瘍学の較正セット（59 種の実体）では、ルーティングは専門家の参照階層と 0.954 の一致度で合致し、leave-one-corpus-out 推定は 0.866&mdash;&mdash;いかなる固定階層のベースライン（常にルールで 0.729、常に LLM で 0.148）をも大きく上回ります。より説得力があるのは外部評価です。再調整なしに、モデルが一度も見たことのないがん部位の AP-HP の CT レポート 300 件へ適用したところ、DEMNE は強調された言及の 99.5%（413 件中 411 件）を決定的ルールへ振り分けました。これらのルールは平均 F1 0.941 に達し、現実的な病院予算で同じ実体にファインチューンした transformer は 0.358 にとどまりました。</p><p>言い換えれば、腫瘍学レポートを占める標準化された実体については、ルールは単に安いだけでなく&mdash;&mdash;より優れており、しかも各ルール判断は明示的な条件まで遡れます。これはまさに EU AI Act 第 12 条・第 14 条が求めるものです。</p><h2>どこで止まるか</h2><p>限界について正直でありたいと思います。参照標準は小さく&mdash;&mdash;実体 92 種、うち腫瘍学は 59 種&mdash;&mdash;単一コーパスのスコアは楽観的で、相対比較しか成り立ちません。LLM 階層は外部コホートでエンドツーエンドに評価されておらず、唯一振り分けられた実体は稀すぎました。さらに較正はドメイン間で転移しません。別の臨床ジャンルや言語に移ると一致度は 0.45&ndash;0.73 まで下がり、閾値は再調整が必要です。DEMNE は実現可能性の証明であり、完成品ではありません。</p><h2>なぜ重要か</h2><p>要点はルールが transformer に勝つことではありません。&ldquo;どの手法を使うか&rdquo;が、最も重いモデルを既定にして祈るのではなく、テキストの測定可能な性質から実体ごとに答えられる問いだということです。臨床 NLP&mdash;&mdash;コスト・監査可能性・信頼が同時に問われる領域&mdash;&mdash;では、この枠組みはベンチマークの 1 ポイントより価値があります。</p><p>コードと完全な手法は <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a> にあります。論文は準備中です。</p>` },
      { status: '公開 · 2026年10月', title: '段階的抽出 対 単一の大規模モデル', body: 'LLMを呼び出す前にルールとファインチューニング済みTransformerを経由させて実体をルーティングすることの根拠と、それを誤った場合のコスト。', content: `<p>難しい NLP の問題をチームに渡すと、今の反射は、使える最大のモデルを持ち出してすべてを任せることです。フランス語の臨床テキストでは、その反射は高コストで遅く、監査しづらく——しかも結局、最も正確ですらありません。DEMNE は逆に賭けます。各エンティティの種類を、それを扱える最も軽いツールへ送り、テキストが本当に要求するときだけ上位へ回します。</p><h2>ハンマーではなく階段</h2><p>パイプラインは 3 層です。決定的ルール——正規表現と厳選した辞書——は、数通りの安定した書き方しかないエンティティ（日付、用量、標準的なバイオマーカー略語）を担います。フランス語腫瘍学テキストでファインチューニングした transformer は、真の意味的・ドメイン的理解を要するエンティティを処理します。LLM は頂点にあり、前の 2 段階を生き延びた本当に曖昧な事例のためだけに取っておかれます。必要以上に上へは登りません。</p><h2>なぜ LLM だけにしないのか</h2><p>単一の大きなモデルは、正規表現なら瞬時に片づくものも含め、すべてのエンティティに LLM のコストを払うからです。遅く、多くの病院にはない GPU 予算を要し、どの判断もブラックボックスで、結局は臨床医や監査人に説明しなければなりません。しかもルーティングのタスク自体では、常に LLM のベースラインが最も悪く、専門家の階層と一致したのはわずか 0.148 でした。最も重いツールが自動的に最も信頼できるわけではありません。</p><h2>ルーティングを誤るコスト</h2><p>段階的抽出は、ルーティングが良いときにのみ見合うので、DEMNE はまさにそこに注意を注ぎます。アノテーションから測った 5 つの指標が決定的な決定グラフに入り、その 17 の閾値は多目的探索で較正されます。目的関数は意図的に非対称です。エンティティを弱すぎる手法へ送る誤りは、単に高価すぎる手法へ送る誤りの 2 倍重く罰せられます——臨床レポートでの抽出漏れは、無駄になった GPU の 1 秒より高くつくからです。</p><h2>数字が語ること</h2><p>腫瘍学の較正セットでは、ルーティングは専門家の参照階層と 0.954 で一致し、常にルールは 0.729、常に LLM は 0.148 でした。未見の AP-HP レポート 300 件へ手を加えずに適用すると、言及の 99.5% を決定的ルールへ振り分け、平均 F1 0.941 に達しました——現実的な病院予算でファインチューニングした transformer は 0.358 にとどまりました。これらのレポートを占める標準化されたエンティティでは、安い階層が同時に正確な階層でもありました。</p><h2>単一モデルが正解になるとき</h2><p>段階化はただではありません。構築・測定・保守すべきルーティング層が増え、閾値は新しいドメインごとに再較正しなければなりません。テキストが均質で、エンティティがどれも同じ難度で、あるいは大きなモデル 1 つに使える予算と監査の許容があるなら、階段は単なるオーバーヘッドです。ここでの主張は狭いものです——コスト・遅延・追跡可能性が同時に重要なとき、臨床 NLP のように、エンティティごとに決めることは、最も重いモデルを既定にして祈ることに勝ります。</p><p>コードと完全な手法は <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a> にあります。論文は準備中です。</p>` },
    ],
  },
  contact: {
    title: '臨床NLP、生物医学AI、または博士課程での共同研究についてお話ししましょう。',
    directLabel: '直接連絡',
    elsewhereLabel: 'その他',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: '通話を予約',
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
    kicker: 'ESIEE Paris · 6개월 연구 인턴십을 찾는 중 · 임상 NLP & 생물의학 AI · 2027년 2월부터',
    h1Pre: 'GPU를 깨우지 않고 ',
    h1Accent: '임상 텍스트에서 바이오마커를 추출합니다',
    h1Post: '',
    sub: "저는 Clément Longeac입니다. 엔티티 유형마다 신뢰할 수 있는 가장 가벼운 방법——규칙, transformer, 또는 LLM——을 선택하는 라우팅 프레임워크 DEMNE를 개발합니다. 처음 보는 AP-HP 코호트에서 언급의 99.5%를 감사 가능한 규칙으로 라우팅하며 F1 0.941에 도달하는데, 미세조정된 transformer는 0.358에 그칩니다.",
    ctaResearch: '연구 보기',
    ctaCV: '이력서 다운로드',
    caption: 'DEMNE — Rules → Transformer → LLM, 실시간 도식',
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
    title: 'DEMNE',
    subtitle: '프랑스어 종양학 임상 텍스트를 위한 하이브리드 개체명 인식 파이프라인.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: '임상 NER · 프랑스어 종양학 코퍼스',
    p1: '기성 NER 모델은 프랑스어 임상 텍스트에서 크게 실패합니다: 밀도 높은 약어, 병원 시스템마다 일관되지 않은 형식, 일반 학습 데이터에는 거의 등장하지 않는 생체표지자 용어 때문입니다. DEMNE는 단일 모델이 아닌 단계별 파이프라인으로 이 문제에 대응합니다 — 각 단계는 자신이 가장 잘하는 일을 처리하고, 필요할 때만 더 무거운 모델로 확대합니다.',
    p2: '이 시스템은 세 개의 서로 다른 프랑스어 종양학 코퍼스에서 DrBERT-7GB를 미세조정했으며, 치료 관련 보고서에 사용되는 7가지 우선순위 생체표지자 개체 유형을 대상으로 합니다.',
    tags: ['임상 NLP', 'Transformer', 'DrBERT-7GB', '프랑스어 종양학'],
    viewRepo: '저장소 보기',
    readMethodology: '방법론 읽기',
    pipeline: [
      { num: '01', title: '규칙 기반 처리', body: '정규식 및 어휘 매칭이 낮은 비용으로 신뢰도가 높고 모호성이 낮은 개체(날짜, 투여량, 표준 생체표지자 약어)를 포착합니다.' },
      { num: '02', title: 'Transformer 추출', body: '세 개의 종양학 코퍼스에서 미세조정된 DrBERT-7GB가 실제 의미론적, 도메인 이해가 필요한 개체를 처리합니다.' },
      { num: '03', title: 'LLM 중재', body: '남은 충돌과 경계 사례는 출력 전 최종 명확화를 위해 LLM 단계로 전달됩니다.' },
    ],
    aiAct: {
      title: '규제 정합성 — EU AI Act',
      body: '환자 기록에 대한 임상 개체 추출은 EU AI Act의 고위험 범주에 명확히 해당합니다. DEMNE의 단계별 설계는 사후에 덧붙인 것이 아니라 처음부터 제12조와 제14조를 염두에 두고 만들어졌습니다.',
      articles: [
        { code: '제12조', label: '기록 보관', desc: '모든 추출 결정은 이를 생성한 단계(규칙, Transformer, 또는 LLM)와 신뢰도 점수까지 추적 가능하며, 감사 로그를 자동으로 기록할 수 있습니다.' },
        { code: '제14조', label: '인간의 감독', desc: 'LLM 중재 결과는 조용히 수용되지 않고 임상의 검토를 위해 플래그가 지정되어, 모호한 사례에서도 인간이 계속 관여합니다.' },
      ],
    },
  },
  metrics: {
    label: '결과',
    title: '단계별 접근 방식이 가져오는 것',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — 경력',
    title: '지금까지의 활동 이력',
    currentLabel: '진행 중',
    items: [
      {
        date: '2026년 5월 – 7월',
        title: '연구 인턴, 임상 데이터 웨어하우스',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: '병원 데이터에 DEMNE 라우팅 방식을 적용·검증: 프랑스어 임상 보고서에서 종양학 바이오마커(ER, PR, HER2, Ki67, FISH)를 추출하고, 감사 가능하고 실제 배포에 가까운 임상 경로를 정의했습니다.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: '2025년 10월 – 2026년 5월',
        title: '학생 연구원, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: '프랑스어 종양학 텍스트를 위한 하이브리드 임상 NER 파이프라인(규칙 / transformer / LLM)인 DEMNE를 설계. 형식화된 다섯 가지 코퍼스 지표에 기반하며, 박사 지원을 앞둔 Tremplin Recherche 트랙의 핵심 프로젝트입니다.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026년 – 현재',
        title: '프로덕트 리드 겸 개발자, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: '뇌 손상 환자와 작업치료사가 인지 보상 도구를 체계적으로 비교할 수 있는 플랫폼을 구축. SN@SU 해커톤의 Python/Streamlit 프로토타입으로 시작했습니다(Sorbonne Université, UEROS L’ADAPT Île-de-France의 작업치료사 Flor Sanchez-Luizard와 협업). 현재 HDS/GDPR 준수 호스팅과 임상 도구 매칭용 시맨틱 검색 엔진을 갖춘 프로덕션 재구축(FastAPI, PostgreSQL, Next.js)을 검토 중입니다.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024년 – 2027년',
        title: '공학도 — 데이터 사이언스 & AI',
        org: 'ESIEE Paris',
        body: 'ESIEE Paris 5년제 공학 과정의 5학년 학생으로, 데이터 사이언스 & AI(DSIA) 전공.',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025년',
        title: '엔지니어링 인턴, GRADES 부서',
        org: 'Synchrotron SOLEIL',
        body: 'AMD GPU 호환성(pyopencl, nabu, ufo-filters, pyvkfft)을 확인하기 위해 OpenCL로 autopkgtest를 개발하고 GitLab Salsa의 Debian/ROCm 인프라에서 실행.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022년 – 현재',
        title: '이공계 과외 교사',
        org: 'Complétude',
        body: '공학 학업과 병행하여 초등학생부터 고등학교 마지막 학년까지 약 열 명에게 수학과 물리·화학을 지도.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: '2026년 6월 · SN@SU 해커톤',
        title: 'NeuroStep',
        description:
          '뇌 손상 환자와 작업치료사를 위한 디지털 인지 보상 도구 카탈로그.',
        longBody:
          'NeuroStep은 SN@SU 해커톤(Sorbonne Université)에서 시작되었습니다. 작업치료사와 환자는 앱스토어를 하나씩 뒤지지 않고도 의사소통·기억·계획용 앱을 찾을 수 있습니다. 각 도구는 목록화되어 장애와 주제별로 분류되고 검색이 가능합니다.\nMVP는 JSON 저장소를 갖춘 Streamlit 애플리케이션이며, 현재 FastAPI·PostgreSQL·Next.js 프런트엔드로 프로덕션 재구축을 검토 중입니다.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: '2025년 12월 · 팀 프로젝트',
        title: 'Air Quality Dashboard',
        description:
          '프랑스의 15년간 배경 대기오염을 재구성하는 인터랙티브 대시보드(2000–2015).',
        longBody:
          'INERIS의 코뮌 단위 지표(Zenodo)를 다루는 데이터 파이프라인과 인터랙티브 대시보드. 스크립트가 데이터를 내려받아 정제하고 SQLite에 저장하며, 대시보드는 연도 슬라이더와 오염물질 필터가 있는 Leaflet 오염 히트맵을 Plotly 차트와 함께 표시합니다.\n팀원 William Zee와 함께 제작.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025년 · 수업 프로젝트',
        title: 'Face Recognition with Deep Learning',
        description:
          '정지 이미지에 이어 동영상에 적용하는 CNN 기반 얼굴 인식으로, 데이터 증강과 얼굴 정렬을 사용.',
        longBody:
          '현대적 얼굴 인식에 관한 수업 프로젝트. 단 218장의 이미지로 학습한 첫 모델은 심하게 과적합되었습니다. 데이터 증강(회전, 확대)과 눈·입 위치를 정규화하는 얼굴 정렬 단계를 사전학습 네트워크와 결합해 일반화를 개선했습니다. 목표는 프로젝트 자체 데이터셋의 영상에서 얼굴을 검출하는 것이었습니다.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025년 · 페어 프로젝트',
        title: 'TBA — Text Adventure Game',
        description:
          '객체 지향 설계로 만든, 터미널에서 즐기는 Python 텍스트 어드벤처 게임.',
        longBody:
          '터미널에서 즐기는 텍스트 어드벤처: 플레이어는 명령을 입력해 여덟 개의 방을 오갑니다. 코드는 단일 책임의 작은 클래스(게임, 방, 플레이어, 명령, 동작, 캐릭터, 아이템)로 나뉘어 있어 방이나 아이템 추가가 국소적 변경으로 끝납니다.\nESIEE Paris에서 Anne-Colombe André와 함께 제작.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: '2025년 2월 · 팀 프로젝트',
        title: 'Marmiton Data Intelligence',
        description:
          '요리 데이터 분석 플랫폼: 스크래핑, ETL, 그리고 레시피 데이터 대시보드.',
        longBody:
          'Marmiton에서 레시피 데이터를 스크래핑하고 ETL 파이프라인을 실행해 분석 대시보드로 결과를 제공하는 데이터 엔지니어링 팀 프로젝트. Python으로 구축하고 탐색에는 Jupyter 노트북을 사용.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025년 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Debian의 CI 인프라에서 AMD GPU상의 과학 소프트웨어를 검증하는 autopkgtest 스크립트.',
        longBody:
          'Synchrotron SOLEIL의 Div/Exp GRADES 부서에서 진행한 4개월 인턴십으로, Emmanuel Farhi와 Frédéric-Emmanuel Picca가 지도했습니다. 목표는 Debian 과학 패키지가 ROCm을 통해 AMD GPU에서 동작하는지 검증하여 과학 계산 스택의 NVIDIA/CUDA 의존도를 줄이는 것이었습니다.\nOpenCL autopkgtest를 작성하고 podman+ROCm 컨테이너에서(sbuild로) 빌드를 검증한 뒤 Debian의 GitLab Salsa에 업스트림으로 반영했습니다. PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx, sasmodels에 ROCm 자동 테스트를 추가했고, OpenCL 코드가 없는 패키지(genx, examl)나 미완의 Python 2→3 마이그레이션에 막힌 패키지(pysph)는 제외했습니다. Debian 과학 커뮤니티 전체가 NVIDIA에서 AMD로 이동하도록 돕는 첫 번째 구성 요소 모음입니다.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: '게시됨 · 2026년 10월', title: '프랑스어 임상 NER이 범용 모델을 무너뜨리는 이유', body: '표준 NER 파이프라인이 프랑스어 종양학 보고서에서 실패하는 지점과, 이것이 DEMNE의 구조 설계에 시사하는 바에 대한 설명.', content: `<p>프랑스어 종양학 보고서를 펼치면 대부분의 기성 NER 모델은 첫 문장부터 흔들립니다. 어휘는 조밀하고 약어가 많으며(ER, PR, HER2, Ki67, FISH), 서식은 병원마다 다르고, 정작 중요한 바이오마커 용어는 이 모델들이 학습한 코퍼스에 거의 나타나지 않습니다. 흔한 반응&mdash;&mdash;큰 모델을 투입하는 것&mdash;&mdash;은 통하지만, 비싸고 불투명하며 임상의나 감사자에게 설명하기 어렵습니다.</p><h2>모든 엔터티에 LLM이 필요하지는 않다</h2><p>DEMNE는 단순한 관찰에서 출발합니다. 이 보고서의 엔터티들이 똑같이 어려운 것은 아닙니다. 생검 언급은 몇 가지 안정적인 방식으로 쓰이지만, 약물명은 수백 가지 형태로 나타날 수 있습니다. 그래서 DEMNE는 모든 것에 하나의 모델을 쓰는 대신, 엔터티 유형마다 측정하여 충분히 신뢰할 수 있는 가장 가벼운 방법&mdash;&mdash;결정적 규칙, 미세조정한 transformer, 그리고 최후의 수단으로서의 LLM&mdash;&mdash;으로 보냅니다.</p><p>측정이란 주석에서 계산한 다섯 가지 코퍼스 지표입니다. 표층 형태가 얼마나 정형적인지, 어휘가 얼마나 균질한지, 작은 키워드 집합이 변별력이 있는지, 언급이 부정이나 모순 아래 얼마나 자주 등장하는지, 그리고 지도학습 모델을 훈련할 만큼의 레이블 데이터가 있는지입니다. 결정적 결정 그래프가 이 수치들을 계층으로 바꾸며, 17개의 임계값은 다목적 탐색으로 보정됩니다. 엔터티를 너무 약한 방법으로 보내는 오류는 단지 너무 비싼 방법으로 보내는 오류보다 두 배 무겁게 벌점을 받습니다.</p><h2>무엇을 얻는가</h2><p>종양학 보정 세트(엔터티 유형 59개)에서 라우팅은 전문가 참조 계층과 0.954의 일치도로 일치하며, leave-one-corpus-out 추정치는 0.866&mdash;&mdash;어떤 고정 계층 기준선(항상 규칙 0.729, 항상 LLM 0.148)도 크게 상회합니다. 더 설득력 있는 것은 외부 검증입니다. 재조정 없이, 모델이 한 번도 보지 못한 암 부위의 AP-HP CT 보고서 300건에 적용했을 때 DEMNE는 강조된 언급의 99.5%(413건 중 411건)를 결정적 규칙으로 보냈습니다. 그 규칙들은 평균 F1 0.941에 도달한 반면, 현실적인 병원 예산에서 같은 엔터티로 미세조정한 transformer는 0.358에 그쳤습니다.</p><p>바꿔 말하면, 종양학 보고를 지배하는 표준화된 엔터티에 대해 규칙은 더 저렴할 뿐 아니라&mdash;&mdash;더 우수했고, 모든 규칙 결정은 명시적 조건까지 추적됩니다. 이는 바로 EU AI Act 제12조와 제14조가 요구하는 바입니다.</p><h2>어디서 멈추는가</h2><p>한계에 대해 정직하고 싶습니다. 참조 표준은 작습니다&mdash;&mdash;엔터티 92종, 그중 59종이 종양학&mdash;&mdash;따라서 단일 코퍼스 점수는 낙관적이며 상대 비교만 유효합니다. LLM 계층은 외부 코호트에서 종단 간으로 평가된 적이 없고, 거기로 라우팅된 유일한 엔터티는 너무 드물었습니다. 또한 보정은 도메인 간에 전이되지 않습니다. 다른 임상 장르나 언어로 옮기면 일치도가 0.45&ndash;0.73으로 떨어져 임계값을 다시 맞춰야 합니다. DEMNE는 실현 가능성의 증명이지 완성품이 아닙니다.</p><h2>왜 중요한가</h2><p>핵심은 규칙이 transformer를 이긴다는 것이 아닙니다. &ldquo;어떤 방법을 쓸까&rdquo;를, 가장 무거운 모델을 기본값으로 삼아 요행을 바라는 대신, 텍스트의 측정 가능한 속성으로부터 엔터티별로 답할 수 있다는 것입니다. 비용·감사가능성·신뢰가 동시에 중요한 임상 NLP에서&mdash;&mdash;이 관점은 벤치마크에서 1퍼센트포인트를 더 얻는 것보다 값집니다.</p><p>코드와 전체 방법은 <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>에 있습니다. 논문은 준비 중입니다.</p>` },
      { status: '게시됨 · 2026년 10월', title: '단계별 추출 대 단일 대형 모델', body: 'LLM을 호출하기 전에 규칙과 미세조정된 Transformer를 거쳐 개체를 라우팅해야 하는 이유와, 잘못했을 때의 대가.', content: `<p>오늘날 어려운 NLP 문제를 팀에 맡기면, 반사적으로 쓸 수 있는 가장 큰 모델을 꺼내 모든 것을 맡깁니다. 프랑스어 임상 텍스트에서 그 반사 작용은 비싸고 느리며 감사하기 어렵고——결국 가장 정확하지도 않습니다. DEMNE는 반대로 베팅합니다. 각 엔티티 유형을 감당할 수 있는 가장 가벼운 도구로 보내고, 텍스트가 정말로 요구할 때만 상위로 올립니다.</p><h2>망치가 아니라 계단</h2><p>파이프라인은 세 계층입니다. 결정적 규칙——정규식과 선별된 사전——은 몇 가지 안정적인 방식으로 쓰이는 엔티티(날짜, 용량, 표준 바이오마커 약어)를 맡습니다. 프랑스어 종양학 텍스트로 미세조정된 transformer는 진정한 의미적·도메인적 이해가 필요한 엔티티를 처리합니다. LLM은 맨 위에 있으며, 앞선 두 단계를 모두 통과한 정말 모호한 경우에만 쓰입니다. 무엇도 필요 이상으로 높이 오르지 않습니다.</p><h2>왜 그냥 LLM만 쓰지 않는가?</h2><p>단일 대형 모델은 정규식이 즉시 해결했을 것까지 포함해 모든 엔티티에 LLM 비용을 치르기 때문입니다. 더 느리고, 대부분의 병원이 갖추지 못한 GPU 예산이 필요하며, 모든 결정이 블랙박스라 결국 임상의나 감사자에게 해명해야 합니다. 게다가 라우팅 작업 자체에서 항상-LLM 기준선이 가장 나빠, 전문가 계층과 일치한 비율은 0.148에 불과했습니다. 가장 무거운 도구가 자동으로 가장 신뢰할 수 있는 것은 아닙니다.</p><h2>라우팅을 잘못할 때의 대가</h2><p>단계별 추출은 라우팅이 좋을 때만 이득이므로, 바로 그곳에 DEMNE가 공을 들입니다. 주석에서 측정한 다섯 가지 지표가 결정적 결정 그래프에 입력되고, 그 17개의 임계값은 다목적 탐색으로 보정됩니다. 목표는 의도적으로 비대칭입니다. 엔티티를 너무 약한 방법으로 보내는 것은 단지 너무 비싼 방법으로 보내는 것보다 두 배 무겁게 벌점을 받습니다——임상 보고서에서 놓친 추출은 낭비된 GPU 1초보다 비싸기 때문입니다.</p><h2>숫자가 말하는 것</h2><p>종양학 보정 세트에서 라우팅은 전문가 참조 계층과 0.954로 일치하며, 항상-규칙은 0.729, 항상-LLM은 0.148입니다. 손대지 않고 처음 보는 AP-HP 보고서 300건에 적용했을 때, 언급의 99.5%를 결정적 규칙으로 보냈고 이는 평균 F1 0.941에 도달했습니다——현실적인 병원 예산에서 미세조정된 transformer는 0.358에 그쳤습니다. 이 보고서를 지배하는 표준화된 엔티티에 대해서는, 값싼 계층이 곧 정확한 계층이었습니다.</p><h2>단일 모델이 정답일 때</h2><p>단계화는 공짜가 아닙니다. 구축·측정·유지해야 할 라우팅 계층이 늘고, 임계값은 새로운 도메인마다 다시 보정해야 합니다. 텍스트가 균질하고, 엔티티가 모두 똑같이 어렵고, 혹은 대형 모델 하나를 쓸 예산과 감사 허용치가 있다면, 그 계단은 그저 오버헤드입니다. 여기서의 주장은 좁습니다——비용·지연·추적가능성이 동시에 중요할 때, 임상 NLP처럼, 엔티티별로 결정하는 편이 가장 무거운 모델을 기본값으로 삼아 요행을 바라는 것보다 낫습니다.</p><p>코드와 전체 방법은 <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>에 있습니다. 논문은 준비 중입니다.</p>` },
    ],
  },
  contact: {
    title: '임상 NLP, 생물의학 AI, 또는 박사과정 공동연구에 대해 이야기해 봅시다.',
    directLabel: '직접 연락',
    elsewhereLabel: '다른 곳',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: '통화 예약',
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
    kicker: 'ESIEE Paris · Ищу 6-месячную исследовательскую стажировку · Клинический NLP и биомедицинский ИИ · с февр. 2027',
    h1Pre: 'Извлекаю биомаркеры из клинического текста ',
    h1Accent: 'не пробуждая GPU',
    h1Post: '',
    sub: "Я Clément Longeac. Я создаю DEMNE — фреймворк маршрутизации, который для каждого типа сущности выбирает самый лёгкий метод, остающийся надёжным: правила, трансформер или LLM. На ранее не виденной когорте AP-HP он направляет 99,5 % упоминаний к аудируемым правилам с F1 0,941, тогда как дообученный трансформер достигает лишь 0,358.",
    ctaResearch: 'Смотреть исследование',
    ctaCV: 'Скачать резюме',
    caption: 'DEMNE — Rules → Transformer → LLM, живая схема',
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
    title: 'DEMNE',
    subtitle: 'Гибридный конвейер распознавания именованных сущностей для французского онкологического клинического текста.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Клинический NER · французские онкологические корпуса',
    p1: 'Стандартные модели NER сильно проигрывают на французском клиническом тексте: плотные сокращения, несогласованное форматирование между больничными системами и терминология биомаркеров, почти не встречающаяся в общих обучающих данных. DEMNE решает эту проблему с помощью поэтапного конвейера вместо единой модели — каждый этап делает то, что умеет лучше всего, и переходит к более тяжёлой модели только при необходимости.',
    p2: 'Система дообучена на DrBERT-7GB на трёх различных французских онкологических корпусах и ориентирована на семь приоритетных типов сущностей-биомаркеров, используемых в отчётах, значимых для лечения.',
    tags: ['Клинический NLP', 'Transformers', 'DrBERT-7GB', 'Французская онкология'],
    viewRepo: 'Смотреть репозиторий',
    readMethodology: 'Читать методологию',
    pipeline: [
      { num: '01', title: 'Этап на основе правил', body: 'Сопоставление по регулярным выражениям и словарям недорого улавливает сущности с высокой достоверностью и низкой неоднозначностью — даты, дозировки, стандартные сокращения биомаркеров.' },
      { num: '02', title: 'Извлечение с помощью трансформера', body: 'DrBERT-7GB, дообученная на трёх онкологических корпусах, обрабатывает сущности, требующие настоящего семантического и предметного понимания.' },
      { num: '03', title: 'Арбитраж с помощью LLM', body: 'Оставшиеся конфликты и пограничные случаи направляются на этап LLM для окончательного устранения неоднозначности перед выводом.' },
    ],
    aiAct: {
      title: 'Соответствие регулированию — EU AI Act',
      body: 'Извлечение клинических сущностей из записей пациентов однозначно попадает в категорию высокого риска согласно EU AI Act. Поэтапная архитектура DEMNE учитывает статьи 12 и 14 с самого начала, а не добавляет их постфактум.',
      articles: [
        { code: 'Ст. 12', label: 'Ведение записей', desc: 'Каждое решение об извлечении можно отследить до этапа (правила, трансформер или LLM) и оценки достоверности, которая его породила, что позволяет автоматически вести журнал аудита.' },
        { code: 'Ст. 14', label: 'Контроль человеком', desc: 'Результаты арбитража LLM помечаются для проверки клиницистом, а не принимаются молча, что сохраняет участие человека в неоднозначных случаях.' },
      ],
    },
  },
  metrics: {
    label: 'Результаты',
    title: 'Что даёт поэтапный подход',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — Опыт',
    title: 'Где проходила работа до сих пор',
    currentLabel: 'Текущий',
    items: [
      {
        date: 'Май – июль 2026',
        title: 'Стажёр-исследователь, клиническое хранилище данных',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Применил и валидировал подход маршрутизации DEMNE на больничных данных: извлечение онкологических биомаркеров (ER, PR, HER2, Ki67, FISH) из французских клинических отчётов и определение аудируемого, реалистичного для внедрения клинического пути.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Окт. 2025 – май 2026',
        title: 'Студент-исследователь, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Спроектировал DEMNE — гибридный клинический NER-конвейер (правила / transformer / LLM) для французских онкологических текстов, управляемый пятью формализованными метриками корпусов; ключевой проект трека Tremplin Recherche перед подачей на PhD.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – наст. время',
        title: 'Продакт-лид и разработчик, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Создание платформы, дающей пациентам с травмами мозга и эрготерапевтам структурированный способ сравнивать инструменты когнитивной компенсации. Начиналась как прототип на Python/Streamlit на хакатоне SN@SU (Sorbonne Université, совместно с Flor Sanchez-Luizard, эрготерапевтом в UEROS L’ADAPT Île-de-France); сейчас прорабатывается продакшен-перестройка (FastAPI, PostgreSQL, Next.js) с хостингом, соответствующим HDS/GDPR, и семантическим поисковым движком для подбора клинических инструментов.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Студент-инженер — Data Science и ИИ',
        org: 'ESIEE Paris',
        body: 'Студент пятого курса пятилетней инженерной программы ESIEE Paris, специализация Data Science и ИИ (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Инженер-стажёр, отдел GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'Разработка autopkgtests на OpenCL для проверки совместимости GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) в инфраструктуре Debian/ROCm на GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – наст. время',
        title: 'Репетитор по точным наукам',
        org: 'Complétude',
        body: 'Преподавание математики и физики-химии примерно десяти ученикам, от начальной школы до выпускного класса, параллельно с учёбой на инженера.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'Июнь 2026 · Хакатон SN@SU',
        title: 'NeuroStep',
        description:
          'Каталог цифровых инструментов когнитивной компенсации для людей с черепно-мозговыми травмами и их эрготерапевтов.',
        longBody:
          'NeuroStep начался на хакатоне SN@SU (Sorbonne Université). Эрготерапевты и пациенты находят приложения для общения, памяти и планирования, не перебирая магазины приложений по одному: каждый инструмент внесён в каталог, классифицирован по нарушению и теме и доступен для поиска.\nMVP — это приложение на Streamlit с хранилищем JSON; сейчас прорабатывается продакшен-переход на FastAPI, PostgreSQL и фронтенд на Next.js.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Дек. 2025 · Командный проект',
        title: 'Air Quality Dashboard',
        description:
          'Интерактивная панель, реконструирующая 15 лет фонового загрязнения воздуха во Франции (2000–2015).',
        longBody:
          'Конвейер данных и интерактивная панель по показателям INERIS на уровне коммун (Zenodo). Скрипты загружают, очищают и сохраняют данные в SQLite; панель отображает тепловую карту загрязнения на Leaflet со слайдером года и фильтрами по загрязнителям, рядом с графиками Plotly.\nСделано вместе с коллегой William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Учебный проект',
        title: 'Face Recognition with Deep Learning',
        description:
          'Распознавание лиц на основе CNN на статичных изображениях, затем на видео, с аугментацией данных и выравниванием лица.',
        longBody:
          'Учебный проект по современному распознаванию лиц. Первая модель, обученная всего на 218 изображениях, сильно переобучалась; аугментация данных (поворот, масштабирование) и шаг выравнивания лица, нормализующий положение глаз и губ, вместе с предобученной сетью улучшили обобщение. Цель — обнаруживать лица на видео из собственного набора данных проекта.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Парный проект',
        title: 'TBA — Text Adventure Game',
        description:
          'Текстовая приключенческая игра для терминала на Python с объектно-ориентированным дизайном.',
        longBody:
          'Текстовое приключение в терминале: игрок перемещается между восемью комнатами, вводя команды. Код разбит на небольшие классы с единственной ответственностью (игра, комната, игрок, команда, действие, персонаж, предмет), поэтому добавление комнаты или предмета остаётся локальным изменением.\nСделано с Anne-Colombe André в ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Фев. 2025 · Командный проект',
        title: 'Marmiton Data Intelligence',
        description:
          'Платформа аналитики кулинарных данных: скрапинг, ETL и панель по данным рецептов.',
        longBody:
          'Командный проект по инженерии данных: скрапинг данных рецептов с Marmiton, запуск ETL-конвейера и вывод результатов через аналитическую панель. Реализован на Python с ноутбуками Jupyter для исследования.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Скрипты autopkgtest, проверяющие научное ПО на GPU AMD в CI-инфраструктуре Debian.',
        longBody:
          'Четырёхмесячная стажировка в подразделении Div/Exp GRADES в Synchrotron SOLEIL под руководством Emmanuel Farhi и Frédéric-Emmanuel Picca. Цель — снизить зависимость стека научных вычислений от NVIDIA/CUDA, проверив, работают ли научные пакеты Debian на GPU AMD через ROCm.\nЯ написал autopkgtests на OpenCL и проверял сборки в контейнере podman+ROCm (через sbuild), затем отправлял их в апстрим в GitLab Salsa Debian. Автотесты ROCm добавлены для PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx и sasmodels; пакеты без кода OpenCL (genx, examl) или застрявшие на незавершённой миграции Python 2→3 (pysph) были исключены. Это первый набор кирпичиков, помогающий всему научному сообществу Debian перейти с NVIDIA на AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Опубликовано · окт. 2026', title: 'Почему французский клинический NER ломает универсальные модели', body: 'Обзор того, где стандартные конвейеры NER терпят неудачу на французских онкологических отчётах, и что это означает для структуры DEMNE.', content: `<p>Откройте французский онкологический отчёт &mdash; и большинство готовых NER-моделей спотыкаются уже на первом предложении. Лексика плотная и сокращённая (ER, PR, HER2, Ki67, FISH), форматирование меняется от больницы к больнице, а важная терминология биомаркеров почти отсутствует в корпусах, на которых эти модели обучались. Привычный рефлекс &mdash; бросить на задачу большую модель &mdash; работает, но дорог, непрозрачен и труден для обоснования перед клиницистом или аудитором.</p><h2>Не каждой сущности нужен LLM</h2><p>DEMNE исходит из простого наблюдения: сущности в этих отчётах не одинаково трудны. Упоминание биопсии пишется несколькими устойчивыми способами; название препарата может встречаться в сотне форм. Поэтому вместо одной модели на всё DEMNE измеряет каждый тип сущности и направляет его к самому лёгкому достаточно надёжному методу &mdash; детерминированному правилу, дообученному transformer или LLM лишь в крайнем случае.</p><p>Измерение &mdash; это пять корпусных метрик, вычисляемых из разметки: насколько шаблонна поверхностная форма, насколько однородна лексика, различителен ли небольшой набор ключевых слов, как часто упоминание попадает под отрицание или противоречие и достаточно ли вообще размеченных данных для обучения модели с учителем. Детерминированный граф решений превращает эти числа в уровень, а его 17 порогов калибруются многокритериальным поиском, который вдвое сильнее штрафует отправку сущности к слишком слабому методу, чем к просто слишком дорогому.</p><h2>Что это даёт</h2><p>На онкологическом калибровочном наборе (59 типов сущностей) маршрутизация совпадает с экспертным эталонным уровнем с согласованностью 0,954 и оценкой leave-one-corpus-out 0,866 &mdash; намного выше любой базовой стратегии с фиксированным уровнем (всегда-правила дают 0,729, всегда-LLM 0,148). Более убедителен внешний тест: примённый без перенастройки к 300 КТ-отчётам AP-HP по ранее не виденным локализациям рака, DEMNE направил 99,5 % выделенных упоминаний (411 из 413) к детерминированным правилам. Эти правила достигли среднего F1 0,941, тогда как transformer, дообученный на тех же сущностях при реалистичном больничном бюджете, дошёл лишь до 0,358.</p><p>Иными словами: для стандартизованных сущностей, доминирующих в онкологической отчётности, правила были не только дешевле &mdash; они были лучше, и каждое решение правила прослеживается до явного условия, что как раз и требуют статьи 12 и 14 EU AI Act.</p><h2>Где он останавливается</h2><p>Хочу быть честным о пределах. Эталонный стандарт мал &mdash; 92 типа сущностей, 59 из них в онкологии &mdash; поэтому оценки на одном корпусе оптимистичны, и верны лишь относительные сравнения. Уровень LLM ни разу не оценивался сквозным образом на внешней когорте; его единственная направленная сущность была слишком редкой. И калибровка не переносится между доменами: в другом клиническом жанре или языке согласованность падает до 0,45&ndash;0,73, так что пороги приходится перенастраивать. DEMNE &mdash; доказательство осуществимости, а не готовый продукт.</p><h2>Почему это важно</h2><p>Суть не в том, что правила побеждают transformer’ы. Суть в том, что &laquo;какой метод&raquo; &mdash; это вопрос, на который можно ответить для каждой сущности, исходя из измеримых свойств текста, а не выбирать по умолчанию самую тяжёлую модель и надеяться. Для клинического NLP &mdash; где цена, аудируемость и доверие важны одновременно &mdash; такая постановка стоит больше, чем ещё один процентный пункт на бенчмарке.</p><p>Код и полный метод &mdash; на <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; рукопись готовится.</p>` },
      { status: 'Опубликовано · окт. 2026', title: 'Поэтапное извлечение против одной большой модели', body: 'Аргументы в пользу направления сущностей через правила и дообученный трансформер, прежде чем вообще вызывать LLM — и цена ошибки в этом решении.', content: `<p>Передайте сегодня команде трудную задачу NLP &mdash; и рефлекс в том, чтобы взять самую большую доступную модель и позволить ей разобраться со всем. На французском клиническом тексте этот рефлекс дорог, медлен и труден для аудита &mdash; и, как выясняется, даже не самый точный. DEMNE делает обратную ставку: направлять каждый тип сущности к самому лёгкому инструменту, который справится, и эскалировать лишь тогда, когда текст действительно этого требует.</p><h2>Лестница, а не молоток</h2><p>В конвейере три уровня. Детерминированные правила &mdash; регулярные выражения и отобранные лексиконы &mdash; берут сущности, записываемые несколькими устойчивыми способами: даты, дозировки, стандартные сокращения биомаркеров. Трансформер, дообученный на французском онкологическом тексте, обрабатывает сущности, требующие настоящего семантического и доменного понимания. LLM стоит на вершине, оставаясь для действительно неоднозначных случаев, переживших оба предыдущих этапа. Ничто не поднимается выше, чем необходимо.</p><h2>Почему не один только LLM?</h2><p>Потому что одна большая модель платит цену LLM за каждую сущность, включая те, что регулярное выражение решило бы мгновенно. Она медленнее, требует бюджета GPU, которого у большинства больниц нет, и каждое решение &mdash; чёрный ящик, который всё равно надо обосновать перед клиницистом или аудитором. А на самой задаче маршрутизации базовая стратегия всегда-LLM оказалась худшей, совпадая с экспертным уровнем лишь в 0,148 случаев. Самый тяжёлый инструмент не автоматически самый надёжный.</p><h2>Цена неверной маршрутизации</h2><p>Поэтапное извлечение окупается только при хорошей маршрутизации, поэтому именно туда DEMNE вкладывает внимание. Пять метрик, измеренных по разметке, питают детерминированный граф решений, чьи 17 порогов калибруются многокритериальным поиском. Цель намеренно асимметрична: отправить сущность к слишком слабому методу штрафуется вдвое сильнее, чем к просто слишком дорогому &mdash; ведь пропущенное извлечение в клиническом отчёте стоит дороже потраченной секунды GPU.</p><h2>Что говорят цифры</h2><p>На онкологическом калибровочном наборе маршрутизация совпадает с экспертным эталонным уровнем в 0,954 случаев против 0,729 у всегда-правил и 0,148 у всегда-LLM. Применённая без изменений к 300 невиданным отчётам AP-HP, она направила 99,5 % упоминаний к детерминированным правилам, достигшим среднего F1 0,941 &mdash; тогда как трансформер, дообученный при реалистичном больничном бюджете, дошёл лишь до 0,358. Для стандартизованных сущностей, доминирующих в этих отчётах, дешёвый уровень был и самым точным.</p><h2>Когда одна модель &mdash; правильный ответ</h2><p>Этапность не бесплатна: она добавляет слой маршрутизации, который надо строить, измерять и поддерживать, а пороги приходится перекалибровывать для каждого нового домена. Если текст однороден, сущности одинаково трудны или есть бюджет и аудиторская терпимость к одной большой модели, лестница &mdash; лишь накладные расходы. Утверждение здесь узкое: когда цена, задержка и прослеживаемость важны одновременно, как в клиническом NLP, решать по каждой сущности лучше, чем по умолчанию брать самую тяжёлую модель и надеяться.</p><p>Код и полный метод &mdash; на <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; рукопись готовится.</p>` },
    ],
  },
  contact: {
    title: 'Давайте обсудим клинический NLP, биомедицинский ИИ или сотрудничество в рамках докторантуры.',
    directLabel: 'Напрямую',
    elsewhereLabel: 'В других местах',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Назначить звонок',
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
    kicker: 'ESIEE Paris · أبحث عن تدريب بحثي لمدة 6 أشهر · معالجة اللغة السريرية والذكاء الاصطناعي الطبي الحيوي · اعتبارًا من فبراير 2027',
    h1Pre: 'أستخرج المؤشرات الحيوية من النص السريري ',
    h1Accent: 'دون إيقاظ وحدة معالجة الرسومات',
    h1Post: '',
    sub: "أنا Clément Longeac. أطوّر DEMNE، إطار توجيه يختار لكل نوع كيان أخفّ طريقة تظل موثوقة: قواعد أو محوّل (transformer) أو نموذج لغوي كبير. على مجموعة AP-HP لم يرها من قبل، يوجّه 99.5% من الإشارات إلى قواعد قابلة للتدقيق بقيمة F1 تساوي 0.941، حيث لا يتجاوز المحوّل المضبوط 0.358.",
    ctaResearch: 'استعرض الأبحاث',
    ctaCV: 'تحميل السيرة الذاتية',
    caption: 'DEMNE — Rules → Transformer → LLM، مخطط حي',
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
    title: 'DEMNE',
    subtitle: 'خط أنابيب هجين للتعرف على الكيانات المسماة للنصوص السريرية الخاصة بالأورام باللغة الفرنسية.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'التعرف على الكيانات السريرية · مجموعات نصوص الأورام الفرنسية',
    p1: 'تفشل نماذج التعرف على الكيانات الجاهزة بشكل كبير في النص السريري الفرنسي: اختصارات كثيفة، تنسيق غير متسق بين أنظمة المستشفيات، ومصطلحات علامات حيوية نادرة الظهور في بيانات التدريب العامة. يعالج DEMNE هذا عبر خط أنابيب متدرج بدلًا من نموذج واحد — كل مرحلة تتولى ما تُجيده فعلًا، ولا تصعّد إلى نموذج أثقل إلا عند الضرورة.',
    p2: 'تم ضبط النظام على DrBERT-7GB عبر ثلاث مجموعات نصوص أورام فرنسية مختلفة، ويستهدف سبعة أنواع كيانات علامات حيوية ذات أولوية تُستخدم في التقارير ذات الصلة بالعلاج.',
    tags: ['معالجة اللغة السريرية', 'المحولات', 'DrBERT-7GB', 'أورام فرنسية'],
    viewRepo: 'عرض المستودع',
    readMethodology: 'قراءة المنهجية',
    pipeline: [
      { num: '01', title: 'مرحلة قائمة على القواعد', body: 'تطابق التعبيرات النمطية والمعاجم يلتقط بتكلفة منخفضة الكيانات عالية الثقة ومنخفضة الغموض — التواريخ، الجرعات، اختصارات العلامات الحيوية القياسية.' },
      { num: '02', title: 'الاستخراج عبر المحولات', body: 'يتولى DrBERT-7GB، المضبوط عبر ثلاث مجموعات نصوص أورام، الكيانات التي تتطلب فهمًا دلاليًا ومجاليًا حقيقيًا.' },
      { num: '03', title: 'التحكيم عبر النموذج اللغوي الكبير', body: 'تُوجَّه التعارضات المتبقية والحالات الحدية إلى مرحلة نموذج لغوي كبير لإزالة الغموض النهائي قبل الإخراج.' },
    ],
    aiAct: {
      title: 'التوافق التنظيمي — قانون الذكاء الاصطناعي الأوروبي',
      body: 'يقع استخراج الكيانات السريرية من سجلات المرضى بوضوح ضمن فئة المخاطر العالية في قانون الذكاء الاصطناعي الأوروبي. يأخذ التصميم المتدرج لـDEMNE المادتين 12 و14 بعين الاعتبار منذ البداية، وليس كإضافة لاحقة.',
      articles: [
        { code: 'المادة 12', label: 'حفظ السجلات', desc: 'يمكن تتبع كل قرار استخراج حتى المرحلة (القواعد، المحولات، أو النموذج اللغوي الكبير) ودرجة الثقة التي أنتجته، مما يتيح تسجيلًا تلقائيًا للتدقيق.' },
        { code: 'المادة 14', label: 'الرقابة البشرية', desc: 'تُوسم مخرجات تحكيم النموذج اللغوي الكبير لمراجعة الطبيب بدلًا من قبولها بصمت، مما يُبقي الإنسان جزءًا من الحلقة في الحالات الغامضة.' },
      ],
    },
  },
  metrics: {
    label: 'النتائج',
    title: 'ما يقدّمه النهج المتدرج',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — الخبرة',
    title: 'أين جرى العمل حتى الآن',
    currentLabel: 'جارٍ',
    items: [
      {
        date: 'مايو – يوليو 2026',
        title: 'متدرّب بحثي، مستودع البيانات السريرية',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'طبّقت نهج التوجيه في DEMNE وتحققت منه على بيانات المستشفى: استخراج المؤشرات الحيوية الأورامية (ER، PR، HER2، Ki67، FISH) من التقارير السريرية الفرنسية، وتحديد مسار سريري قابل للتدقيق وواقعي للنشر.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'أكتوبر 2025 – مايو 2026',
        title: 'باحث طالب، Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'صمّمت DEMNE، وهو خط معالجة سريري هجين للتعرف على الكيانات المسمّاة (قواعد / transformer / LLM) للنصوص الأورامية الفرنسية، مدفوعًا بخمسة مقاييس مُمَنهَجة للمجموعات — المشروع المحوري لمسار Tremplin Recherche قبل طلبات الدكتوراه.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – حتى الآن',
        title: 'قائد المنتج ومطوّر، NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'بناء منصة تتيح لمرضى إصابات الدماغ والمعالجين المهنيين طريقة منظّمة لمقارنة أدوات التعويض المعرفي. بدأت كنموذج أولي بلغة Python/Streamlit في هاكاثون SN@SU (Sorbonne Université، مع Flor Sanchez-Luizard، معالِجة مهنية في UEROS L’ADAPT Île-de-France)؛ ويجري حاليًا تحديد إعادة بناء إنتاجية (FastAPI، PostgreSQL، Next.js) باستضافة متوافقة مع HDS/GDPR ومحرك بحث دلالي لمطابقة الأدوات السريرية.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'طالب هندسة — علوم البيانات والذكاء الاصطناعي',
        org: 'ESIEE Paris',
        body: 'طالب في السنة الخامسة من برنامج الهندسة الممتد لخمس سنوات في ESIEE Paris، تخصّص علوم البيانات والذكاء الاصطناعي (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'متدرّب هندسي، قسم GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'تطوير autopkgtests باستخدام OpenCL للتحقق من توافق وحدات معالجة الرسوميات AMD (pyopencl، nabu، ufo-filters، pyvkfft) عبر بنية Debian/ROCm على GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – حتى الآن',
        title: 'مدرّس خصوصي للعلوم',
        org: 'Complétude',
        body: 'تدريس الرياضيات والفيزياء-الكيمياء لنحو عشرة طلاب، من الابتدائية حتى السنة النهائية من الثانوية، بالتوازي مع دراستي الهندسية.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'يونيو 2026 · هاكاثون SN@SU',
        title: 'NeuroStep',
        description:
          'دليل لأدوات التعويض المعرفي الرقمية لذوي إصابات الدماغ والمعالجين المهنيين العاملين معهم.',
        longBody:
          'انطلق NeuroStep في هاكاثون SN@SU (Sorbonne Université). يستطيع المعالجون المهنيون والمرضى إيجاد تطبيقات للتواصل والذاكرة والتخطيط دون البحث في المتاجر واحدًا تلو الآخر: فكل أداة مُدرجة ومصنّفة حسب الاضطراب والموضوع وقابلة للبحث.\nالنسخة الأولية تطبيق Streamlit يعتمد على مخزن JSON، ويجري حاليًا تحديد إعادة بناء إنتاجية باستخدام FastAPI وPostgreSQL وواجهة أمامية Next.js.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'ديسمبر 2025 · مشروع جماعي',
        title: 'Air Quality Dashboard',
        description:
          'لوحة تفاعلية تعيد بناء 15 عامًا من تلوث الهواء الخلفي في فرنسا (2000–2015).',
        longBody:
          'خط بيانات ولوحة تفاعلية على مؤشرات INERIS على مستوى البلديات (Zenodo). تقوم النصوص بتنزيل البيانات وتنظيفها وتخزينها في SQLite؛ وتعرض اللوحة خريطة حرارية للتلوث باستخدام Leaflet مع شريط لاختيار السنة ومرشحات للملوّثات، إلى جانب رسوم Plotly.\nأُنجز مع زميل الفريق William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · مشروع دراسي',
        title: 'Face Recognition with Deep Learning',
        description:
          'التعرف على الوجوه بالاعتماد على CNN على الصور الثابتة ثم الفيديو، باستخدام زيادة البيانات ومحاذاة الوجه.',
        longBody:
          'مشروع دراسي حول التعرف الحديث على الوجوه. أفرط النموذج الأول المدرَّب على 218 صورة فقط في التكيّف؛ وقد أدّت زيادة البيانات (الدوران والتكبير) وخطوة محاذاة الوجه التي تطبّع موضع العينين والشفتين، مع شبكة مدرَّبة مسبقًا، إلى تحسين التعميم. كان الهدف اكتشاف الوجوه في الفيديو من مجموعة بيانات المشروع نفسها.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · مشروع ثنائي',
        title: 'TBA — Text Adventure Game',
        description:
          'لعبة مغامرة نصية في الطرفية بلغة Python، بتصميم كائني التوجّه.',
        longBody:
          'مغامرة نصية تُلعب في الطرفية: يتنقل اللاعب بين ثماني غرف بكتابة الأوامر. الشيفرة مقسّمة إلى أصناف صغيرة ذات مسؤولية واحدة (اللعبة، الغرفة، اللاعب، الأمر، الفعل، الشخصية، العنصر)، بحيث تبقى إضافة غرفة أو عنصر تغييرًا محليًا.\nأُنجزت مع Anne-Colombe André في ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'فبراير 2025 · مشروع جماعي',
        title: 'Marmiton Data Intelligence',
        description:
          'منصة لتحليل البيانات الغذائية: جمع البيانات، ETL، ولوحة تحكم على بيانات الوصفات.',
        longBody:
          'مشروع جماعي في هندسة البيانات يجمع بيانات الوصفات من Marmiton، ويشغّل خط ETL، ويعرض النتائج عبر لوحة تحليلية. بُني بلغة Python مع دفاتر Jupyter للاستكشاف.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'نصوص autopkgtest تتحقق من البرمجيات العلمية على وحدات معالجة الرسوميات AMD، على بنية التكامل المستمر في Debian.',
        longBody:
          'تدريب لمدة 4 أشهر في قسم Div/Exp GRADES بمنشأة Synchrotron SOLEIL، بإشراف Emmanuel Farhi وFrédéric-Emmanuel Picca. الهدف: تقليل اعتماد منظومة الحوسبة العلمية على NVIDIA/CUDA عبر اختبار ما إذا كانت حِزم Debian العلمية تعمل على وحدات معالجة الرسوميات AMD من خلال ROCm.\nكتبتُ autopkgtests بلغة OpenCL وتحقّقت من عمليات البناء داخل حاوية podman+ROCm (عبر sbuild)، ثم دفعتُها إلى الأعلى في GitLab Salsa الخاص بـ Debian. أُضيفت اختبارات ROCm التلقائية لـ PyOpenCL وNabu وUfo-filters وclpeak وpyvkfft وgpyfft وsilx وsasmodels؛ واستُبعدت الحِزم التي لا تحتوي على شيفرة OpenCL (genx وexaml) أو المتوقّفة عند ترحيل غير مكتمل من Python 2 إلى 3 (pysph). إنها مجموعة أولى من اللبنات تساعد مجتمع Debian العلمي بأكمله على الانتقال من NVIDIA إلى AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'نُشر · أكتوبر 2026', title: 'لماذا يُفشل التعرف على الكيانات السريرية الفرنسية النماذج العامة', body: 'جولة على النقاط التي تفشل فيها خطوط أنابيب التعرف على الكيانات القياسية في تقارير الأورام الفرنسية، وما يعنيه ذلك لبنية DEMNE.', content: `<p>افتح تقريرًا فرنسيًا في علم الأورام، وستتعثر معظم نماذج NER الجاهزة منذ الجملة الأولى. فالمفردات كثيفة ومختصرة (ER، PR، HER2، Ki67، FISH)، والتنسيق يتغيّر من مستشفى إلى آخر، ومصطلحات المؤشرات الحيوية المهمة تكاد تغيب عن المجموعات التي دُرِّبت عليها هذه النماذج. ورد الفعل المعتاد &mdash; إلقاء نموذج كبير على المشكلة &mdash; ينجح، لكنه مكلف وغامض ويصعب تبريره أمام طبيب سريري أو مدقّق.</p><h2>ليست كل كيان بحاجة إلى نموذج لغوي كبير</h2><p>ينطلق DEMNE من ملاحظة صريحة: الكيانات في هذه التقارير ليست متساوية الصعوبة. فذكر الخزعة يُكتب بعدد قليل من الصيغ الثابتة؛ أما اسم الدواء فقد يظهر بمئة شكل. لذا، بدلًا من نموذج واحد لكل شيء، يقيس DEMNE كل نوع كيان ويوجّهه إلى أخف طريقة تظل موثوقة &mdash; قاعدة حتمية، أو transformer مضبوط، أو نموذج لغوي كبير كملاذ أخير فقط.</p><p>والقياس هو خمسة مقاييس للمجموعات تُحسب من التعليقات التوضيحية: مدى انتظام الشكل السطحي، ومدى تجانس المفردات، وما إذا كانت مجموعة صغيرة من الكلمات المفتاحية مميِّزة، وكم مرة يقع الذكر تحت النفي أو التناقض، وما إذا كانت هناك بيانات موسومة كافية لتدريب نموذج خاضع للإشراف أصلًا. ويحوّل مخطط قرار حتمي هذه الأرقام إلى مستوى، وتُعاير عتباته السبع عشرة ببحث متعدد الأهداف يعاقب إرسال كيان إلى طريقة أضعف من اللازم ضعفَي عقوبة إرساله إلى طريقة مكلفة أكثر من اللازم فحسب.</p><h2>ماذا يحقق</h2><p>على مجموعة المعايرة الأورامية (59 نوع كيان)، يتوافق التوجيه مع المستوى المرجعي للخبراء بتوافق قدره 0.954 وتقدير leave-one-corpus-out قدره 0.866 &mdash; أعلى بكثير من أي أساس ثابت المستوى (دائمًا-القواعد يبلغ 0.729، ودائمًا-النموذج اللغوي 0.148). والاختبار الأكثر إقناعًا خارجي: إذ طُبِّق دون أي إعادة ضبط على 300 تقرير أشعة مقطعية من AP-HP في مواقع سرطانية لم يرها النموذج قط، فوجّه DEMNE 99.5% من الإشارات المميَّزة (411 من 413) إلى قواعد حتمية. وبلغت هذه القواعد متوسط F1 قدره 0.941، بينما لم يتجاوز transformer مضبوط على الكيانات نفسها ضمن ميزانية مستشفى واقعية سوى 0.358.</p><p>بعبارة أخرى: بالنسبة للكيانات المعيارية التي تهيمن على التقارير الأورامية، لم تكن القواعد أرخص فحسب &mdash; بل كانت أفضل، ويمكن تتبّع كل قرار قاعدة حتى شرط صريح، وهو تحديدًا ما تطلبه المادتان 12 و14 من EU AI Act.</p><h2>أين يتوقف</h2><p>أودّ أن أكون صادقًا بشأن الحدود. فالمعيار المرجعي صغير &mdash; 92 نوع كيان، منها 59 في علم الأورام &mdash; لذا فإن درجات المجموعة الواحدة متفائلة ولا تصحّ إلا المقارنات النسبية. ولم يُقيَّم مستوى النموذج اللغوي الكبير من طرف إلى طرف على المجموعة الخارجية؛ إذ كان الكيان الوحيد الموجَّه إليه نادرًا للغاية. كما أن المعايرة لا تنتقل بين المجالات: فعند الانتقال إلى نوع سريري آخر أو لغة أخرى يهبط التوافق إلى 0.45&ndash;0.73، ويجب إعادة ضبط العتبات. إن DEMNE إثبات جدوى، لا منتجًا مكتملًا.</p><h2>لماذا يهم</h2><p>ليست الفكرة أن القواعد تتفوّق على transformer. بل أن &laquo;أي طريقة&raquo; سؤال يمكن الإجابة عنه كيانًا بكيان، انطلاقًا من خصائص قابلة للقياس في النص، بدل اللجوء افتراضيًا إلى أثقل نموذج والأمل في النجاح. وبالنسبة لمعالجة اللغة السريرية &mdash; حيث تتزامن أهمية الكلفة وقابلية التدقيق والثقة &mdash; يساوي هذا التأطير أكثر من نقطة مئوية إضافية على معيار قياس.</p><p>الشيفرة والطريقة الكاملة على <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>؛ والمخطوطة قيد الإعداد.</p>` },
      { status: 'نُشر · أكتوبر 2026', title: 'الاستخراج المتدرج مقابل نموذج كبير واحد', body: 'الحجة وراء توجيه الكيانات عبر القواعد ومحوّل مضبوط قبل استدعاء أي نموذج لغوي كبير — وما تكلفة الخطأ في ذلك.', content: `<p>سلّم فريقًا اليوم مسألة معالجة لغة طبيعية صعبة، وسيكون ردّ الفعل هو الوصول إلى أكبر نموذج متاح وترك كل شيء له. على النص السريري الفرنسي، ردّ الفعل هذا مكلف وبطيء وصعب التدقيق &mdash; وفي النهاية ليس حتى الأدقّ. يراهن DEMNE على العكس: إرسال كل نوع كيان إلى أخفّ أداة قادرة على التعامل معه، والتصعيد فقط حين يتطلّب النص ذلك فعلًا.</p><h2>سُلّم، لا مطرقة</h2><p>يتكوّن المسار من ثلاث طبقات. القواعد الحتمية &mdash; التعبيرات النمطية والمعاجم المنتقاة &mdash; تتولّى الكيانات المكتوبة بعدد قليل من الصيغ الثابتة: التواريخ والجرعات والاختصارات المعيارية للمؤشرات الحيوية. ومحوّل (transformer) مضبوط على نص أورام فرنسي يعالج الكيانات التي تتطلّب فهمًا دلاليًا وميدانيًا حقيقيًا. ويقع النموذج اللغوي الكبير في القمة، محجوزًا للحالات الغامضة فعلًا التي تنجو من المرحلتين السابقتين. ولا يصعد شيء أعلى مما يلزم.</p><h2>لماذا لا نكتفي بالنموذج اللغوي الكبير؟</h2><p>لأن نموذجًا واحدًا كبيرًا يدفع كلفة النموذج اللغوي الكبير على كل كيان، بما فيها ما كان تعبير نمطي ليحسمه فورًا. فهو أبطأ، ويحتاج ميزانية وحدات رسوميات لا تملكها معظم المستشفيات، وكل قرار صندوق أسود يجب تبريره رغم ذلك أمام طبيب أو مدقّق. وفي مهمة التوجيه نفسها كان خط الأساس «دائمًا النموذج اللغوي» الأسوأ، إذ وافق المستوى الخبير بنسبة 0.148 فقط. فالأداة الأثقل ليست تلقائيًا الأوثق.</p><h2>كلفة التوجيه الخاطئ</h2><p>لا يُجدي الاستخراج المرحلي إلا إذا كان التوجيه جيدًا، ولذلك يصبّ DEMNE عنايته هناك. خمسة مقاييس مأخوذة من التعليقات التوضيحية تغذّي مخطط قرار حتميًا تُعاير عتباته السبع عشرة ببحث متعدد الأهداف. والهدف غير متماثل عن عمد: إرسال كيان إلى طريقة أضعف من اللازم يُعاقَب ضعف عقوبة إرساله إلى طريقة مكلفة أكثر من اللازم فحسب &mdash; لأن استخراجًا فائتًا في تقرير سريري أغلى من ثانية وحدة رسوميات مهدورة.</p><h2>ماذا تقول الأرقام</h2><p>على مجموعة المعايرة الأورامية، يوافق التوجيه المستوى المرجعي للخبراء بنسبة 0.954، مقابل 0.729 لـ«دائمًا القواعد» و0.148 لـ«دائمًا النموذج اللغوي». وبتطبيقه دون تعديل على 300 تقرير AP-HP لم تُرَ من قبل، وجّه 99.5% من الإشارات إلى قواعد حتمية بلغت متوسط F1 قدره 0.941 &mdash; بينما لم يتجاوز محوّل مضبوط ضمن ميزانية مستشفى واقعية 0.358. فبالنسبة للكيانات المعيارية التي تهيمن على هذه التقارير، كانت الطبقة الأرخص هي الأدقّ أيضًا.</p><h2>متى يكون النموذج الواحد هو الجواب الصحيح</h2><p>ليست المرحلية مجانية: فهي تضيف طبقة توجيه ينبغي بناؤها وقياسها وصيانتها، وعلى العتبات أن تُعاد معايرتها لكل مجال جديد. فإذا كان النص متجانسًا، والكيانات كلها بالصعوبة نفسها، أو توافرت الميزانية وتحمّل التدقيق لنموذج واحد كبير، فإن السُّلّم مجرد عبء إضافي. والدعوى هنا ضيّقة &mdash; حين تهمّ الكلفة والكمون وقابلية التتبّع في آنٍ واحد، كما في المعالجة السريرية للغة، يتفوّق القرار كيانًا بكيان على اللجوء افتراضيًا إلى أثقل نموذج والأمل.</p><p>الشيفرة والطريقة الكاملة على <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>؛ والمخطوطة قيد الإعداد.</p>` },
    ],
  },
  contact: {
    title: 'لنتحدث عن معالجة اللغة السريرية، أو الذكاء الاصطناعي الحيوي الطبي، أو تعاون بحثي دكتوراهي.',
    directLabel: 'مباشر',
    elsewhereLabel: 'في أماكن أخرى',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'حجز مكالمة',
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
    kicker: 'ESIEE Paris · 6 महीने की शोध इंटर्नशिप की तलाश · क्लिनिकल NLP और बायोमेडिकल AI · फ़रवरी 2027 से',
    h1Pre: 'क्लिनिकल टेक्स्ट से बायोमार्कर निकालना, ',
    h1Accent: 'बिना GPU जगाए',
    h1Post: '।',
    sub: "मैं Clément Longeac हूँ। मैं DEMNE बनाता हूँ, एक रूटिंग फ्रेमवर्क जो हर एंटिटी प्रकार के लिए सबसे हल्की पर विश्वसनीय विधि चुनता है — नियम, एक ट्रांसफॉर्मर, या एक LLM। एक अनदेखी AP-HP कोहॉर्ट पर यह 99.5% उल्लेखों को ऑडिट-योग्य नियमों की ओर भेजता है, F1 0.941 के साथ, जबकि फाइन-ट्यून किया ट्रांसफॉर्मर केवल 0.358 तक पहुँचता है।",
    ctaResearch: 'अनुसंधान देखें',
    ctaCV: 'सीवी डाउनलोड करें',
    caption: 'DEMNE — Rules → Transformer → LLM, लाइव योजनाबद्ध चित्र',
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
    title: 'DEMNE',
    subtitle: 'फ्रेंच ऑन्कोलॉजी क्लिनिकल टेक्स्ट के लिए एक हाइब्रिड नेम्ड-एंटिटी-रिकग्निशन पाइपलाइन।',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'क्लिनिकल एनईआर · फ्रेंच ऑन्कोलॉजी कॉर्पस',
    p1: 'रेडीमेड एनईआर मॉडल फ्रेंच क्लिनिकल टेक्स्ट पर बुरी तरह विफल होते हैं: घने संक्षिप्ताक्षर, अस्पताल प्रणालियों के बीच असंगत फॉर्मेटिंग, और बायोमार्कर शब्दावली जो सामान्य प्रशिक्षण डेटा में मुश्किल से दिखाई देती है। DEMNE इसे एक ही मॉडल के बजाय एक चरणबद्ध पाइपलाइन से हल करता है — हर चरण वही करता है जो उसमें सबसे अच्छा होता है, और आवश्यकता पड़ने पर ही भारी मॉडल की ओर बढ़ता है।',
    p2: 'यह सिस्टम तीन अलग-अलग फ्रेंच ऑन्कोलॉजी कॉर्पस पर DrBERT-7GB को फाइन-ट्यून करता है, और उपचार-संबंधी रिपोर्टिंग में इस्तेमाल होने वाले सात प्राथमिकता वाले बायोमार्कर एंटिटी प्रकारों को लक्षित करता है।',
    tags: ['क्लिनिकल एनएलपी', 'ट्रांसफॉर्मर', 'DrBERT-7GB', 'फ्रेंच ऑन्कोलॉजी'],
    viewRepo: 'रिपॉज़िटरी देखें',
    readMethodology: 'मेथडोलॉजी पढ़ें',
    pipeline: [
      { num: '01', title: 'नियम-आधारित चरण', body: 'रेगेक्स और लेक्सिकॉन मिलान कम लागत पर उच्च-विश्वास, कम-अस्पष्टता वाली एंटिटीज़ को पकड़ता है — तारीखें, खुराकें, मानक बायोमार्कर संक्षिप्ताक्षर।' },
      { num: '02', title: 'ट्रांसफॉर्मर एक्सट्रैक्शन', body: 'तीन ऑन्कोलॉजी कॉर्पस पर फाइन-ट्यून किया गया DrBERT-7GB उन एंटिटीज़ को संभालता है जिन्हें वास्तविक अर्थगत और डोमेन समझ की आवश्यकता होती है।' },
      { num: '03', title: 'एलएलएम मध्यस्थता', body: 'शेष टकरावों और सीमांत मामलों को आउटपुट से पहले अंतिम अस्पष्टता निवारण के लिए एलएलएम चरण में भेजा जाता है।' },
    ],
    aiAct: {
      title: 'नियामक अनुपालन — EU AI Act',
      body: 'रोगी रिकॉर्ड पर क्लिनिकल एंटिटी एक्सट्रैक्शन स्पष्ट रूप से EU AI Act की उच्च-जोखिम श्रेणी में आता है। DEMNE का चरणबद्ध डिज़ाइन शुरुआत से ही अनुच्छेद 12 और 14 को ध्यान में रखता है, बाद में जोड़े गए उपाय के रूप में नहीं।',
      articles: [
        { code: 'अनुच्छेद 12', label: 'रिकॉर्ड-कीपिंग', desc: 'हर एक्सट्रैक्शन निर्णय उस चरण (नियम, ट्रांसफॉर्मर, या एलएलएम) और विश्वास स्कोर तक ट्रेस किया जा सकता है जिसने उसे उत्पन्न किया, जिससे स्वचालित ऑडिट लॉगिंग संभव होती है।' },
        { code: 'अनुच्छेद 14', label: 'मानव निगरानी', desc: 'एलएलएम मध्यस्थता के आउटपुट को चुपचाप स्वीकार करने के बजाय क्लिनिशियन समीक्षा के लिए फ्लैग किया जाता है, जिससे अस्पष्ट मामलों में मानव की भूमिका बनी रहती है।' },
      ],
    },
  },
  metrics: {
    label: 'परिणाम',
    title: 'चरणबद्ध दृष्टिकोण से क्या मिलता है',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — अनुभव',
    title: 'अब तक काम कहाँ हुआ है',
    currentLabel: 'जारी',
    items: [
      {
        date: 'मई – जुल. 2026',
        title: 'शोध प्रशिक्षु, क्लिनिकल डेटा वेयरहाउस',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'अस्पताल डेटा पर DEMNE के रूटिंग दृष्टिकोण को लागू और सत्यापित किया: फ़्रेंच क्लिनिकल रिपोर्टों से ऑन्कोलॉजी बायोमार्कर (ER, PR, HER2, Ki67, FISH) निकालना, और एक ऑडिट-योग्य, परिनियोजन-यथार्थ क्लिनिकल पथ परिभाषित करना।',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'अक्तू. 2025 – मई 2026',
        title: 'छात्र शोधकर्ता, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'फ़्रेंच ऑन्कोलॉजी टेक्स्ट के लिए एक हाइब्रिड क्लिनिकल NER पाइपलाइन (नियम / transformer / LLM), DEMNE, डिज़ाइन की — पाँच औपचारिक कॉर्पस मेट्रिक्स से संचालित; PhD आवेदनों से पहले Tremplin Recherche मार्ग की केंद्रीय परियोजना।',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – वर्तमान',
        title: 'प्रोडक्ट लीड व डेवलपर, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'एक प्लेटफ़ॉर्म का निर्माण जो मस्तिष्क-चोट के मरीज़ों और व्यावसायिक चिकित्सकों को संज्ञानात्मक-क्षतिपूर्ति उपकरणों की तुलना का संरचित तरीका देता है। SN@SU हैकाथॉन में Python/Streamlit प्रोटोटाइप के रूप में शुरू हुआ (Sorbonne Université, UEROS L’ADAPT Île-de-France की व्यावसायिक चिकित्सक Flor Sanchez-Luizard के साथ); अब HDS/GDPR-अनुरूप होस्टिंग और क्लिनिकल टूल मिलान हेतु सिमेंटिक सर्च इंजन के साथ उत्पादन-स्तरीय पुनर्निर्माण (FastAPI, PostgreSQL, Next.js) की रूपरेखा बन रही है।',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'इंजीनियरिंग छात्र — डेटा साइंस व AI',
        org: 'ESIEE Paris',
        body: 'ESIEE Paris के पाँच-वर्षीय इंजीनियरिंग कार्यक्रम का पाँचवें वर्ष का छात्र, डेटा साइंस व AI (DSIA) में विशेषज्ञता।',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'इंजीनियरिंग प्रशिक्षु, GRADES प्रभाग',
        org: 'Synchrotron SOLEIL',
        body: 'AMD GPU संगतता (pyopencl, nabu, ufo-filters, pyvkfft) की जाँच हेतु OpenCL से autopkgtests विकसित किए, GitLab Salsa पर Debian/ROCm अवसंरचना में।',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – वर्तमान',
        title: 'विज्ञान-गणित ट्यूटर',
        org: 'Complétude',
        body: 'इंजीनियरिंग पढ़ाई के साथ-साथ प्राथमिक से बारहवीं तक के लगभग दस छात्रों को गणित और भौतिकी-रसायन पढ़ाना।',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'जून 2026 · SN@SU हैकाथॉन',
        title: 'NeuroStep',
        description:
          'मस्तिष्क चोट से ग्रस्त लोगों और उनके व्यावसायिक चिकित्सकों के लिए डिजिटल संज्ञानात्मक-क्षतिपूर्ति उपकरणों की सूची।',
        longBody:
          'NeuroStep की शुरुआत SN@SU हैकाथॉन (Sorbonne Université) में हुई। व्यावसायिक चिकित्सक और मरीज़ ऐप स्टोर एक-एक कर खंगाले बिना संचार, स्मृति और योजना के लिए ऐप पा सकते हैं: हर उपकरण सूचीबद्ध है, विकार और विषय के अनुसार वर्गीकृत है, और खोजा जा सकता है।\nMVP एक Streamlit एप्लिकेशन है जिसके पीछे JSON स्टोर है; अब FastAPI, PostgreSQL और Next.js फ्रंटएंड के साथ उत्पादन-स्तरीय पुनर्निर्माण की रूपरेखा बनाई जा रही है।',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'दिस. 2025 · टीम प्रोजेक्ट',
        title: 'Air Quality Dashboard',
        description:
          'फ़्रांस में 15 वर्षों के पृष्ठभूमि वायु प्रदूषण को पुनर्निर्मित करने वाला एक इंटरैक्टिव डैशबोर्ड (2000–2015)।',
        longBody:
          'INERIS के कम्यून-स्तरीय संकेतकों (Zenodo) पर एक डेटा पाइपलाइन और इंटरैक्टिव डैशबोर्ड। स्क्रिप्ट डेटा डाउनलोड, साफ़ और SQLite में संग्रहीत करती हैं; डैशबोर्ड वर्ष स्लाइडर और प्रदूषक फ़िल्टर के साथ Leaflet प्रदूषण हीटमैप, तथा Plotly चार्ट दिखाता है।\nटीम-साथी William Zee के साथ बनाया गया।',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · कोर्स प्रोजेक्ट',
        title: 'Face Recognition with Deep Learning',
        description:
          'स्थिर छवियों और फिर वीडियो पर CNN-आधारित चेहरा पहचान, डेटा ऑगमेंटेशन और फ़ेस अलाइनमेंट के साथ।',
        longBody:
          'आधुनिक चेहरा पहचान पर एक कोर्स प्रोजेक्ट। केवल 218 छवियों पर प्रशिक्षित पहला मॉडल भारी ओवरफ़िट हुआ; डेटा ऑगमेंटेशन (घुमाव, ज़ूम) और आँख व होंठ की स्थिति को सामान्यीकृत करने वाले फ़ेस-अलाइनमेंट चरण को, एक पूर्व-प्रशिक्षित नेटवर्क के साथ मिलाकर, सामान्यीकरण सुधरा। लक्ष्य प्रोजेक्ट के अपने डेटासेट के वीडियो में चेहरे पहचानना था।',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · जोड़ी प्रोजेक्ट',
        title: 'TBA — Text Adventure Game',
        description:
          'ऑब्जेक्ट-ओरिएंटेड डिज़ाइन के साथ, टर्मिनल में खेली जाने वाली Python की टेक्स्ट एडवेंचर गेम।',
        longBody:
          'टर्मिनल में खेली जाने वाली एक टेक्स्ट एडवेंचर: खिलाड़ी कमांड टाइप करके आठ कमरों के बीच चलता है। कोड छोटे एकल-ज़िम्मेदारी वर्गों (गेम, कमरा, खिलाड़ी, कमांड, क्रिया, पात्र, वस्तु) में बँटा है, इसलिए कमरा या वस्तु जोड़ना एक स्थानीय बदलाव ही रहता है।\nESIEE Paris में Anne-Colombe André के साथ बनाया गया।',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'फ़र. 2025 · टीम प्रोजेक्ट',
        title: 'Marmiton Data Intelligence',
        description:
          'एक पाककला डेटा-एनालिटिक्स प्लेटफ़ॉर्म: स्क्रैपिंग, ETL और रेसिपी डेटा पर एक डैशबोर्ड।',
        longBody:
          'एक डेटा-इंजीनियरिंग टीम प्रोजेक्ट जो Marmiton से रेसिपी डेटा स्क्रैप करता है, एक ETL पाइपलाइन चलाता है, और परिणामों को एक एनालिटिक्स डैशबोर्ड के माध्यम से प्रस्तुत करता है। Python में बनाया गया, अन्वेषण के लिए Jupyter नोटबुक के साथ।',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Debian की CI अवसंरचना पर, AMD GPU पर वैज्ञानिक सॉफ़्टवेयर को सत्यापित करने वाले autopkgtest स्क्रिप्ट।',
        longBody:
          'Synchrotron SOLEIL की Div/Exp GRADES शाखा में 4 महीने की इंटर्नशिप, Emmanuel Farhi और Frédéric-Emmanuel Picca के मार्गदर्शन में। उद्देश्य: यह परखकर कि Debian के वैज्ञानिक पैकेज ROCm के माध्यम से AMD GPU पर चलते हैं या नहीं, वैज्ञानिक-गणना स्टैक की NVIDIA/CUDA पर निर्भरता घटाना।\nमैंने OpenCL में autopkgtests लिखे और podman+ROCm कंटेनर में (sbuild के ज़रिए) बिल्ड सत्यापित किए, फिर उन्हें Debian के GitLab Salsa में अपस्ट्रीम भेजा। PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx और sasmodels के लिए ROCm ऑटो-टेस्ट जोड़े गए; जिन पैकेजों में OpenCL कोड नहीं था (genx, examl) या जो अधूरे Python 2→3 माइग्रेशन पर अटके थे (pysph), उन्हें छोड़ दिया गया। यह पहली कुछ बुनियादी ईंटें हैं जो पूरे Debian वैज्ञानिक समुदाय को NVIDIA से AMD की ओर बढ़ने में मदद करती हैं।',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'प्रकाशित · अक्तू. 2026', title: 'फ्रेंच क्लिनिकल एनईआर सामान्य-उद्देश्य मॉडलों को क्यों तोड़ देता है', body: 'यह एक विश्लेषण है कि मानक एनईआर पाइपलाइन फ्रेंच ऑन्कोलॉजी रिपोर्टों पर कहाँ विफल होते हैं, और इसका DEMNE की संरचना के लिए क्या मतलब है।', content: `<p>कोई फ़्रेंच ऑन्कोलॉजी रिपोर्ट खोलिए और अधिकांश तैयार-मिलने वाले NER मॉडल पहली ही पंक्ति में लड़खड़ा जाते हैं। शब्दावली सघन और संक्षिप्त है (ER, PR, HER2, Ki67, FISH), स्वरूपण हर अस्पताल में बदलता है, और जो बायोमार्कर शब्दावली मायने रखती है वह उन कॉर्पस में लगभग अनुपस्थित है जिन पर ये मॉडल प्रशिक्षित हुए। सामान्य प्रतिक्रिया &mdash; उस पर एक बड़ा मॉडल दाग देना &mdash; काम तो करती है, पर महँगी, अपारदर्शी और किसी चिकित्सक या ऑडिटर के सामने उचित ठहराना कठिन है।</p><h2>हर एंटिटी को LLM की ज़रूरत नहीं</h2><p>DEMNE एक सीधे अवलोकन से शुरू होता है: इन रिपोर्टों की एंटिटियाँ समान रूप से कठिन नहीं हैं। बायोप्सी का उल्लेख कुछ स्थिर रूपों में लिखा जाता है; जबकि दवा का नाम सौ रूपों में आ सकता है। इसलिए हर चीज़ के लिए एक ही मॉडल के बजाय, DEMNE प्रत्येक एंटिटी प्रकार को मापता है और उसे सबसे हल्की पर पर्याप्त विश्वसनीय विधि की ओर भेजता है &mdash; एक नियतात्मक नियम, एक फ़ाइन-ट्यून किया transformer, या अंतिम उपाय के रूप में ही LLM।</p><p>यह माप एनोटेशन से परिकलित पाँच कॉर्पस मेट्रिक्स हैं: सतही रूप कितना टेम्पलेट-योग्य है, शब्दावली कितनी समरूप है, क्या एक छोटा कीवर्ड-समुच्चय विभेदक है, उल्लेख कितनी बार निषेध या विरोधाभास के अधीन आता है, और क्या पर्यवेक्षित मॉडल को प्रशिक्षित करने के लिए पर्याप्त लेबल डेटा है ही। एक नियतात्मक निर्णय-ग्राफ़ इन संख्याओं को एक स्तर में बदलता है, और इसके 17 थ्रेशहोल्ड एक बहु-उद्देश्यीय खोज से कैलिब्रेट किए जाते हैं, जो किसी एंटिटी को बहुत कमज़ोर विधि की ओर भेजने पर, महज़ बहुत महँगी विधि की तुलना में, दोगुना दंड देती है।</p><h2>इससे क्या मिलता है</h2><p>ऑन्कोलॉजी कैलिब्रेशन सेट (59 एंटिटी प्रकार) पर, रूटिंग विशेषज्ञ संदर्भ स्तर से 0.954 की सहमति और 0.866 के leave-one-corpus-out अनुमान के साथ मेल खाती है &mdash; किसी भी स्थिर-स्तर बेसलाइन से कहीं ऊपर (सदा-नियम 0.729, सदा-LLM 0.148)। अधिक ठोस परीक्षण बाह्य है: बिना किसी पुनः-समायोजन के AP-HP की 300 CT रिपोर्टों पर, ऐसे कैंसर स्थलों के लिए जो मॉडल ने कभी नहीं देखे, DEMNE ने 99.5% चिह्नित उल्लेखों (413 में से 411) को नियतात्मक नियमों की ओर भेजा। उन नियमों ने 0.941 का औसत F1 प्राप्त किया, जबकि यथार्थ अस्पताल बजट में उन्हीं एंटिटियों पर फ़ाइन-ट्यून किया transformer केवल 0.358 तक पहुँच पाया।</p><p>दूसरे शब्दों में: ऑन्कोलॉजी रिपोर्टिंग पर हावी मानकीकृत एंटिटियों के लिए, नियम केवल सस्ते ही नहीं थे &mdash; वे बेहतर थे, और हर नियम-निर्णय एक स्पष्ट शर्त तक अनुरेखित होता है, जो ठीक वही है जो EU AI Act के अनुच्छेद 12 और 14 माँगते हैं।</p><h2>यह कहाँ रुकता है</h2><p>मैं सीमाओं के बारे में ईमानदार रहना चाहता हूँ। संदर्भ मानक छोटा है &mdash; 92 एंटिटी प्रकार, जिनमें 59 ऑन्कोलॉजी में &mdash; इसलिए एकल-कॉर्पस स्कोर आशावादी हैं और केवल सापेक्ष तुलनाएँ ही टिकती हैं। LLM स्तर का बाह्य समूह पर आद्योपांत मूल्यांकन कभी नहीं हुआ; उसकी एकमात्र रूट की गई एंटिटी बहुत दुर्लभ थी। और कैलिब्रेशन डोमेनों के बीच स्थानांतरित नहीं होता: किसी अन्य क्लिनिकल शैली या भाषा पर सहमति 0.45&ndash;0.73 तक गिर जाती है, इसलिए थ्रेशहोल्ड दोबारा फ़िट करने पड़ते हैं। DEMNE व्यवहार्यता का प्रमाण है, कोई तैयार उत्पाद नहीं।</p><h2>यह क्यों मायने रखता है</h2><p>बात यह नहीं कि नियम transformer को हरा देते हैं। बात यह है कि &ldquo;कौन-सी विधि&rdquo; एक ऐसा प्रश्न है जिसका उत्तर पाठ के मापनीय गुणों से, एंटिटी-दर-एंटिटी दिया जा सकता है &mdash; न कि डिफ़ॉल्ट रूप से सबसे भारी मॉडल चुनकर उम्मीद लगाना। क्लिनिकल NLP के लिए &mdash; जहाँ लागत, ऑडिट-योग्यता और विश्वास एक साथ मायने रखते हैं &mdash; यह दृष्टिकोण किसी बेंचमार्क पर एक और प्रतिशत-अंक से अधिक मूल्यवान है।</p><p>कोड और पूरी विधि <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a> पर है; पांडुलिपि तैयारी में है।</p>` },
      { status: 'प्रकाशित · अक्तू. 2026', title: 'चरणबद्ध एक्सट्रैक्शन बनाम एकल बड़ा मॉडल', body: 'एलएलएम को कॉल करने से पहले नियमों और एक फाइन-ट्यून किए गए ट्रांसफॉर्मर के माध्यम से एंटिटीज़ को रूट करने का तर्क — और गलत होने पर इसकी कीमत।', content: `<p>आज किसी टीम को कोई कठिन NLP समस्या सौंपिए और प्रतिक्रिया यही होती है कि जो सबसे बड़ा मॉडल उपलब्ध हो उसे उठा लिया जाए और सब कुछ उसी पर छोड़ दिया जाए। फ़्रेंच क्लिनिकल टेक्स्ट पर यह प्रतिक्रिया महँगी, धीमी और ऑडिट करने में कठिन है — और अंततः सबसे सटीक भी नहीं। DEMNE उल्टा दाँव लगाता है: हर एंटिटी प्रकार को उस सबसे हल्के उपकरण के पास भेजो जो उसे संभाल सके, और तभी ऊपर बढ़ो जब टेक्स्ट वास्तव में माँग करे।</p><h2>हथौड़ा नहीं, सीढ़ी</h2><p>पाइपलाइन के तीन स्तर हैं। नियतात्मक नियम — रेगेक्स और चुने हुए लेक्सिकॉन — उन एंटिटियों को लेते हैं जो कुछ स्थिर रूपों में लिखी जाती हैं: तिथियाँ, खुराक, मानक बायोमार्कर संक्षेप। फ़्रेंच ऑन्कोलॉजी टेक्स्ट पर फ़ाइन-ट्यून किया ट्रांसफॉर्मर उन एंटिटियों को संभालता है जिन्हें वास्तविक अर्थगत व डोमेन समझ चाहिए। LLM शीर्ष पर बैठता है, केवल उन सचमुच अस्पष्ट मामलों के लिए जो दोनों पूर्व चरणों से बच निकलते हैं। कुछ भी आवश्यकता से ऊपर नहीं चढ़ता।</p><h2>सिर्फ़ LLM क्यों नहीं?</h2><p>क्योंकि एक बड़ा मॉडल हर एंटिटी पर LLM की कीमत चुकाता है, उनमें वे भी जिन्हें रेगेक्स पल भर में निपटा देता। यह धीमा है, इसे ऐसा GPU बजट चाहिए जो अधिकांश अस्पतालों के पास नहीं, और हर निर्णय एक ब्लैक बॉक्स है जिसे फिर भी किसी चिकित्सक या ऑडिटर के सामने उचित ठहराना पड़ता है। और रूटिंग कार्य में ही, सदा-LLM बेसलाइन सबसे ख़राब रही, विशेषज्ञ स्तर से केवल 0.148 बार मेल खाती हुई। सबसे भारी उपकरण अपने आप सबसे भरोसेमंद नहीं होता।</p><h2>ग़लत रूटिंग की कीमत</h2><p>चरणबद्ध एक्सट्रैक्शन तभी फ़ायदेमंद है जब रूटिंग अच्छी हो, इसलिए DEMNE अपना ध्यान वहीं लगाता है। एनोटेशन से मापे गए पाँच मेट्रिक्स एक नियतात्मक निर्णय-ग्राफ़ को पोषित करते हैं जिसके 17 थ्रेशहोल्ड एक बहु-उद्देश्यीय खोज से कैलिब्रेट होते हैं। उद्देश्य जान-बूझकर असममित है: किसी एंटिटी को बहुत कमज़ोर विधि की ओर भेजने पर, महज़ बहुत महँगी विधि की तुलना में, दोगुना दंड मिलता है — क्योंकि क्लिनिकल रिपोर्ट में एक छूटा हुआ एक्सट्रैक्शन, बर्बाद हुए एक GPU सेकंड से अधिक महँगा है।</p><h2>संख्याएँ क्या कहती हैं</h2><p>ऑन्कोलॉजी कैलिब्रेशन सेट पर, रूटिंग विशेषज्ञ संदर्भ स्तर से 0.954 बार मेल खाती है, जबकि सदा-नियम 0.729 और सदा-LLM 0.148। बिना बदले 300 अनदेखी AP-HP रिपोर्टों पर लागू करने पर, इसने 99.5% उल्लेखों को नियतात्मक नियमों की ओर भेजा, जिन्होंने 0.941 का औसत F1 प्राप्त किया — जबकि यथार्थ अस्पताल बजट में फ़ाइन-ट्यून किया ट्रांसफॉर्मर केवल 0.358 तक पहुँचा। इन रिपोर्टों पर हावी मानकीकृत एंटिटियों के लिए, सबसे सस्ता स्तर ही सबसे सटीक भी था।</p><h2>जब एकल मॉडल ही सही उत्तर हो</h2><p>चरणबद्धता मुफ़्त नहीं: यह बनाने, मापने और बनाए रखने के लिए एक रूटिंग परत जोड़ती है, और थ्रेशहोल्ड हर नए डोमेन के लिए फिर से कैलिब्रेट करने पड़ते हैं। यदि टेक्स्ट एकरूप है, सभी एंटिटियाँ समान रूप से कठिन हैं, या एक बड़े मॉडल के लिए बजट और ऑडिट सहनशीलता है, तो यह सीढ़ी केवल अतिरिक्त भार है। यहाँ दावा सीमित है — जब लागत, विलंबता और अनुरेखणीयता एक साथ मायने रखते हैं, जैसे क्लिनिकल NLP में, तब एंटिटी-दर-एंटिटी तय करना, डिफ़ॉल्ट रूप से सबसे भारी मॉडल चुनकर उम्मीद लगाने से बेहतर है।</p><p>कोड और पूरी विधि <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a> पर है; पांडुलिपि तैयारी में है।</p>` },
    ],
  },
  contact: {
    title: 'आइए क्लिनिकल एनएलपी, बायोमेडिकल एआई, या पीएचडी सहयोग पर बात करें।',
    directLabel: 'सीधा',
    elsewhereLabel: 'अन्यत्र',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'कॉल बुक करें',
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
    kicker: 'ESIEE Paris · 6 aylık bir araştırma stajı arıyorum · Klinik NLP ve biyomedikal YZ · Şubat 2027’den itibaren',
    h1Pre: "GPU'yu uyandırmadan ",
    h1Accent: 'klinik metinden biyobelirteç çıkarıyorum',
    h1Post: '',
    sub: "Ben Clément Longeac. Her varlık türü için güvenilir kalan en hafif yöntemi — kurallar, bir transformer veya bir LLM — seçen yönlendirme çerçevesi DEMNE'yi geliştiriyorum. Daha önce görülmemiş bir AP-HP kohortunda, anmaların %99,5'ini denetlenebilir kurallara yönlendirir ve F1 0,941'e ulaşır; ince ayarlı bir transformer ise yalnızca 0,358'de kalır.",
    ctaResearch: 'Araştırmayı gör',
    ctaCV: 'Özgeçmişi indir',
    caption: 'DEMNE — Rules → Transformer → LLM, canlı şema',
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
    title: 'DEMNE',
    subtitle: 'Fransızca onkoloji klinik metni için hibrit bir adlandırılmış varlık tanıma hattı.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Klinik NER · Fransızca onkoloji derlemleri',
    p1: 'Hazır NER modelleri Fransızca klinik metinde ciddi şekilde başarısız olur: yoğun kısaltmalar, hastane sistemleri arasında tutarsız biçimlendirme ve genel eğitim verilerinde neredeyse hiç görünmeyen biyobelirteç terminolojisi. DEMNE bunu tek bir model yerine aşamalı bir hat ile ele alır — her aşama en iyi yaptığı işi üstlenir ve yalnızca gerektiğinde daha ağır bir modele geçer.',
    p2: 'Sistem, üç farklı Fransızca onkoloji derlemi üzerinde DrBERT-7GB üzerinde ince ayar yapılmıştır ve tedaviyle ilgili raporlamada kullanılan yedi öncelikli biyobelirteç varlık türünü hedefler.',
    tags: ['Klinik NLP', 'Transformer', 'DrBERT-7GB', 'Fransız onkolojisi'],
    viewRepo: 'Depoyu görüntüle',
    readMethodology: 'Metodolojiyi oku',
    pipeline: [
      { num: '01', title: 'Kural tabanlı aşama', body: 'Regex ve sözlük eşleştirmesi; tarihler, dozajlar, standart biyobelirteç kısaltmaları gibi yüksek güvenilirlikli, düşük belirsizlikli varlıkları düşük maliyetle yakalar.' },
      { num: '02', title: 'Transformer ile çıkarım', body: 'Üç onkoloji derlemi üzerinde ince ayar yapılmış DrBERT-7GB, gerçek anlamsal ve alan anlayışı gerektiren varlıkları işler.' },
      { num: '03', title: 'LLM ile hakemlik', body: 'Kalan çatışmalar ve sınır durumlar, çıktıdan önce nihai belirsizlik giderme için bir LLM aşamasına yönlendirilir.' },
    ],
    aiAct: {
      title: 'Düzenleyici uyum — AB Yapay Zeka Yasası',
      body: 'Hasta kayıtları üzerinde klinik varlık çıkarımı, AB Yapay Zeka Yasası\'nın yüksek riskli kategorisine doğrudan girer. DEMNE\'nin aşamalı tasarımı, sonradan eklenmek yerine baştan itibaren 12. ve 14. Maddeleri göz önünde bulundurur.',
      articles: [
        { code: 'Madde 12', label: 'Kayıt tutma', desc: 'Her çıkarım kararı, onu üreten aşamaya (kurallar, transformer veya LLM) ve güven skoruna kadar izlenebilir, bu da otomatik denetim kaydını mümkün kılar.' },
        { code: 'Madde 14', label: 'İnsan gözetimi', desc: 'LLM hakemlik çıktıları sessizce kabul edilmek yerine klinik inceleme için işaretlenir, böylece belirsiz vakalarda insan döngüde kalır.' },
      ],
    },
  },
  metrics: {
    label: 'Sonuçlar',
    title: 'Aşamalı yaklaşımın kazandırdıkları',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — Deneyim',
    title: 'Çalışmaların şimdiye kadar gerçekleştiği yerler',
    currentLabel: 'Devam ediyor',
    items: [
      {
        date: 'May – Tem 2026',
        title: 'Araştırma stajyeri, Klinik Veri Ambarı',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'DEMNE yönlendirme yaklaşımını hastane verisinde uyguladım ve doğruladım: Fransızca klinik raporlardan onkoloji biyobelirteçlerini (ER, PR, HER2, Ki67, FISH) çıkarmak ve denetlenebilir, dağıtıma uygun bir klinik yol tanımlamak.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Eki 2025 – May 2026',
        title: 'Öğrenci araştırmacı, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Fransızca onkoloji metinleri için hibrit bir klinik NER hattı (kurallar / transformer / LLM) olan DEMNE’yi tasarladım; beş biçimselleştirilmiş korpus ölçütüyle yönetilir — doktora başvuruları öncesinde Tremplin Recherche izleğinin ana projesi.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Günümüz',
        title: 'Product Lead ve geliştirici, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Beyin hasarı olan hastalara ve ergoterapistlere bilişsel telafi araçlarını yapılandırılmış biçimde karşılaştırma olanağı veren bir platform geliştiriyorum. SN@SU hackathon’unda Python/Streamlit prototipi olarak başladı (Sorbonne Université, UEROS L’ADAPT Île-de-France’da ergoterapist Flor Sanchez-Luizard ile); şimdi HDS/GDPR uyumlu barındırma ve klinik araç eşleştirmesi için anlamsal arama motoruyla üretim düzeyinde yeniden inşa (FastAPI, PostgreSQL, Next.js) planlanıyor.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Mühendislik öğrencisi — Veri Bilimi ve YZ',
        org: 'ESIEE Paris',
        body: 'ESIEE Paris’in beş yıllık mühendislik programının beşinci yıl öğrencisi, Veri Bilimi ve YZ (DSIA) uzmanlığı.',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Mühendis stajyer, GRADES bölümü',
        org: 'Synchrotron SOLEIL',
        body: 'AMD GPU uyumluluğu (pyopencl, nabu, ufo-filters, pyvkfft) için OpenCL ile autopkgtest geliştirme; GitLab Salsa üzerindeki Debian/ROCm altyapısında.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Günümüz',
        title: 'Fen bilimleri özel öğretmeni',
        org: 'Complétude',
        body: 'Mühendislik eğitimimle birlikte, ilkokuldan lise son sınıfa kadar yaklaşık on öğrenciye matematik ve fizik-kimya dersleri.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'Haziran 2026 · SN@SU hackathon’u',
        title: 'NeuroStep',
        description:
          'Beyin hasarı olan kişiler ve ergoterapistleri için dijital bilişsel telafi araçları kataloğu.',
        longBody:
          'NeuroStep, SN@SU hackathon’unda (Sorbonne Université) başladı. Ergoterapistler ve hastalar, uygulama mağazalarını tek tek taramadan iletişim, hafıza ve planlama uygulamaları bulabilir: her araç listelenir, bozukluğa ve temaya göre sınıflandırılır ve aranabilir.\nMVP, JSON deposuyla çalışan bir Streamlit uygulaması; şu anda FastAPI, PostgreSQL ve Next.js ön yüzüyle üretim düzeyinde yeniden inşa planlanıyor.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Ara. 2025 · Ekip projesi',
        title: 'Air Quality Dashboard',
        description:
          'Fransa’da 15 yıllık arka plan hava kirliliğini yeniden kuran etkileşimli bir panel (2000–2015).',
        longBody:
          'INERIS’in belediye düzeyindeki göstergeleri (Zenodo) üzerine bir veri hattı ve etkileşimli panel. Betikler veriyi indirir, temizler ve SQLite’a kaydeder; panel, yıl kaydırıcısı ve kirletici filtreleriyle bir Leaflet kirlilik ısı haritasını Plotly grafikleriyle birlikte sunar.\nTakım arkadaşı William Zee ile yapıldı.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Ders projesi',
        title: 'Face Recognition with Deep Learning',
        description:
          'Durağan görüntülerde ve ardından videoda CNN tabanlı yüz tanıma; veri artırma ve yüz hizalama kullanır.',
        longBody:
          'Modern yüz tanıma üzerine bir ders projesi. Yalnızca 218 görüntüyle eğitilen ilk model ciddi biçimde aşırı öğrendi; veri artırma (döndürme, yakınlaştırma) ve göz ile dudak konumunu normalleştiren bir yüz hizalama adımı, önceden eğitilmiş bir ağla birleşince genellemeyi iyileştirdi. Amaç, projenin kendi veri kümesindeki videoda yüzleri saptamaktı.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · İkili proje',
        title: 'TBA — Text Adventure Game',
        description:
          'Nesne yönelimli tasarıma sahip, terminalde oynanan bir Python metin macerası.',
        longBody:
          'Terminalde oynanan bir metin macerası: oyuncu komutlar yazarak sekiz oda arasında dolaşır. Kod, tek sorumluluklu küçük sınıflara (oyun, oda, oyuncu, komut, eylem, karakter, nesne) bölünmüştür; böylece bir oda ya da nesne eklemek yerel bir değişiklik olarak kalır.\nESIEE Paris’te Anne-Colombe André ile yapıldı.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Şub. 2025 · Ekip projesi',
        title: 'Marmiton Data Intelligence',
        description:
          'Mutfak verisi analitiği platformu: scraping, ETL ve tarif verileri üzerine bir panel.',
        longBody:
          'Marmiton’dan tarif verisi toplayan, bir ETL hattı çalıştıran ve sonuçları bir analitik panel üzerinden sunan bir veri mühendisliği ekip projesi. Python ile, keşif için Jupyter not defterleriyle geliştirildi.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Debian’ın CI altyapısında, AMD GPU’larda bilimsel yazılımı doğrulayan autopkgtest betikleri.',
        longBody:
          'Synchrotron SOLEIL’deki Div/Exp GRADES biriminde, Emmanuel Farhi ve Frédéric-Emmanuel Picca danışmanlığında 4 aylık staj. Amaç: Debian bilimsel paketlerinin ROCm aracılığıyla AMD GPU’larda çalışıp çalışmadığını test ederek bilimsel hesaplama yığınının NVIDIA/CUDA bağımlılığını azaltmaktı.\nOpenCL autopkgtest’leri yazdım ve derlemeleri bir podman+ROCm konteynerinde (sbuild ile) doğruladım, ardından Debian’ın GitLab Salsa’sına upstream gönderdim. PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx ve sasmodels için ROCm otomatik testleri eklendi; OpenCL kodu olmayan paketler (genx, examl) veya tamamlanmamış bir Python 2→3 geçişinde takılı kalanlar (pysph) elendi. Bu, tüm Debian bilim topluluğunun NVIDIA’dan AMD’ye geçişine yardımcı olan ilk yapı taşları kümesidir.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Yayımlandı · Eki 2026', title: 'Fransızca klinik NER neden genel amaçlı modelleri bozuyor', body: 'Standart NER hatlarının Fransız onkoloji raporlarında nerede başarısız olduğuna ve bunun DEMNE\'nin yapısı için ne anlama geldiğine dair bir inceleme.', content: `<p>Fransızca bir onkoloji raporunu açın; hazır NER modellerinin çoğu daha ilk cümlede tökezler. Sözcük dağarcığı yoğun ve kısaltmalıdır (ER, PR, HER2, Ki67, FISH), biçimlendirme hastaneden hastaneye değişir ve önemli biyobelirteç terminolojisi bu modellerin eğitildiği derlemlerde neredeyse hiç geçmez. Alışılmış refleks &mdash; soruna büyük bir model atmak &mdash; işe yarar ama pahalı, şeffaf olmayan ve bir klinisyen ya da denetçiye karşı savunması zor bir yoldur.</p><h2>Her varlık bir LLM gerektirmez</h2><p>DEMNE yalın bir gözlemden yola çıkar: bu raporlardaki varlıklar eşit derecede zor değildir. Bir biyopsi anması birkaç istikrarlı biçimde yazılır; bir ilaç adıysa yüz biçimde görünebilir. Bu yüzden DEMNE, her şey için tek bir model yerine, her varlık türünü ölçer ve yeterince güvenilir olan en hafif yönteme gönderir &mdash; belirlenimci bir kural, ince ayarlı bir transformer veya yalnızca son çare olarak bir LLM.</p><p>Ölçüm, açıklamalardan hesaplanan beş derlem ölçütüdür: yüzey biçiminin ne kadar şablonlaşabilir olduğu, söz dağarcığının ne kadar türdeş olduğu, küçük bir anahtar sözcük kümesinin ayırt edici olup olmadığı, anmanın ne sıklıkla olumsuzlama ya da çelişki altında olduğu ve denetimli bir model eğitmeye yetecek kadar etiketli veri bulunup bulunmadığı. Belirlenimci bir karar grafiği bu sayıları bir katmana dönüştürür ve 17 eşiği, bir varlığı fazla zayıf bir yönteme göndermeyi, yalnızca fazla pahalı bir yönteme göndermekten iki kat ağır cezalandıran çok amaçlı bir aramayla kalibre edilir.</p><h2>Ne kazandırır</h2><p>Onkoloji kalibrasyon kümesinde (59 varlık türü), yönlendirme uzman referans katmanıyla 0,954 uyum ve 0,866 leave-one-corpus-out tahminiyle örtüşür &mdash; sabit katmanlı herhangi bir temelin (her zaman-kurallar 0,729, her zaman-LLM 0,148) çok üzerinde. Daha ikna edici sınama dışsaldır: hiç yeniden ayar yapılmadan, modelin daha önce görmediği kanser bölgelerine ait 300 AP-HP BT raporuna uygulandığında, DEMNE vurgulanan anmaların %99,5’ini (413’te 411) belirlenimci kurallara yönlendirdi. Bu kurallar 0,941 ortalama F1’e ulaşırken, aynı varlıklar üzerinde gerçekçi bir hastane bütçesiyle ince ayarlanan bir transformer yalnızca 0,358’de kaldı.</p><p>Başka bir deyişle: onkoloji raporlamasına egemen standartlaşmış varlıklar için kurallar yalnızca daha ucuz değildi &mdash; daha iyiydi ve her kural kararı açık bir koşula kadar izlenebilir; bu da tam olarak EU AI Act’in 12. ve 14. maddelerinin istediği şeydir.</p><h2>Nerede durur</h2><p>Sınırlar konusunda dürüst olmak istiyorum. Referans standart küçük &mdash; 92 varlık türü, 59’u onkolojide &mdash; dolayısıyla tek derlem skorları iyimserdir ve yalnızca göreli karşılaştırmalar geçerlidir. LLM katmanı dış kohortta uçtan uca hiç değerlendirilmedi; oraya yönlendirilen tek varlık fazla nadirdi. Ayrıca kalibrasyon alanlar arası aktarılmaz: başka bir klinik türe ya da dile geçildiğinde uyum 0,45&ndash;0,73’e düşer, yani eşiklerin yeniden ayarlanması gerekir. DEMNE bir uygulanabilirlik kanıtıdır, bitmiş bir ürün değil.</p><h2>Neden önemli</h2><p>Mesele kuralların transformer’ları yenmesi değil. Mesele, &laquo;hangi yöntem&raquo; sorusunun &mdash; en ağır modeli varsayılan yapıp ummak yerine &mdash; metnin ölçülebilir özelliklerinden varlık başına yanıtlanabilmesi. Maliyetin, denetlenebilirliğin ve güvenin aynı anda önemli olduğu klinik NLP için bu çerçeve, bir ölçütte bir yüzde puanı daha kazanmaktan değerlidir.</p><p>Kod ve yöntemin tamamı <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a> üzerinde; makale hazırlanıyor.</p>` },
      { status: 'Yayımlandı · Eki 2026', title: 'Aşamalı çıkarım ve tek büyük model karşılaştırması', body: 'Bir LLM\'i çağırmadan önce varlıkları kurallar ve ince ayarlı bir transformer üzerinden yönlendirmenin gerekçesi — ve bunu yanlış yapmanın bedeli.', content: `<p>Bugün bir ekibe zor bir NLP problemi verin; refleks, eldeki en büyük modeli alıp her şeyi ona çözdürmektir. Fransızca klinik metinde bu refleks pahalı, yavaş ve denetlenmesi zordur &mdash; ve nihayetinde en doğru olan bile değildir. DEMNE tersine bahse girer: her varlık türünü, onu kaldırabilecek en hafif araca gönderir ve yalnızca metin gerçekten gerektirdiğinde yükseltir.</p><h2>Çekiç değil, merdiven</h2><p>Hat üç katmanlıdır. Belirlenimci kurallar &mdash; regex ve özenle seçilmiş sözlükler &mdash; birkaç istikrarlı biçimde yazılan varlıkları alır: tarihler, dozajlar, standart biyobelirteç kısaltmaları. Fransızca onkoloji metninde ince ayarlı bir transformer, gerçek anlamsal ve alan anlayışı gerektiren varlıkları işler. Bir LLM en tepede durur ve yalnızca önceki iki aşamayı atlatan gerçekten belirsiz durumlara ayrılmıştır. Hiçbir şey gerektiğinden yükseğe tırmanmaz.</p><h2>Neden sadece LLM değil?</h2><p>Çünkü tek bir büyük model, bir regex’in anında halledeceği varlıklar da dahil her varlıkta LLM bedelini öder. Daha yavaştır, çoğu hastanede bulunmayan bir GPU bütçesi ister ve her karar, yine de bir klinisyene ya da denetçiye savunmanız gereken bir kara kutudur. Üstelik yönlendirme görevinde her zaman-LLM temeli en kötüsüydü; uzman katmanıyla yalnızca 0,148 oranında örtüştü. En ağır araç, otomatik olarak en güvenilir olan değildir.</p><h2>Yanlış yönlendirmenin bedeli</h2><p>Aşamalı çıkarım ancak yönlendirme iyiyse işe yarar; bu yüzden DEMNE özenini tam oraya harcar. Açıklamalardan ölçülen beş ölçüt, 17 eşiği çok amaçlı bir aramayla kalibre edilen belirlenimci bir karar grafiğini besler. Amaç bilinçli olarak asimetriktir: bir varlığı fazla zayıf bir yönteme göndermek, yalnızca fazla pahalı bir yönteme göndermekten iki kat ağır cezalandırılır &mdash; çünkü bir klinik raporda kaçırılan bir çıkarım, boşa giden bir GPU saniyesinden pahalıya mal olur.</p><h2>Sayılar ne diyor</h2><p>Onkoloji kalibrasyon kümesinde yönlendirme, uzman referans katmanıyla 0,954 oranında örtüşür; her zaman-kurallar 0,729, her zaman-LLM 0,148. Hiç dokunulmadan 300 görülmemiş AP-HP raporuna uygulandığında, anmaların %99,5’ini belirlenimci kurallara yönlendirdi; bunlar 0,941 ortalama F1’e ulaştı &mdash; gerçekçi bir hastane bütçesiyle ince ayarlanan bir transformer ise 0,358’de kaldı. Bu raporlara egemen standartlaşmış varlıklar için ucuz katman, aynı zamanda doğru olandı.</p><h2>Tek modelin doğru yanıt olduğu durumlar</h2><p>Aşamalandırma bedava değildir: inşa edilip ölçülecek ve bakımı yapılacak bir yönlendirme katmanı ekler ve eşiklerin her yeni alan için yeniden kalibre edilmesi gerekir. Metin tekdüzeyse, varlıklar eşit derecede zorsa ya da tek bir büyük modele yetecek bütçe ve denetim toleransı varsa, merdiven yalnızca ek yüktür. Buradaki iddia dardır &mdash; maliyet, gecikme ve izlenebilirlik aynı anda önem taşıdığında, tıpkı klinik NLP’de olduğu gibi, varlık başına karar vermek en ağır modeli varsayılan yapıp ummaktan iyidir.</p><p>Kod ve yöntemin tamamı <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a> üzerinde; makale hazırlanıyor.</p>` },
    ],
  },
  contact: {
    title: 'Klinik NLP, biyomedikal yapay zeka veya bir doktora iş birliği hakkında konuşalım.',
    directLabel: 'Doğrudan',
    elsewhereLabel: 'Diğer Yerler',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Görüşme ayarla',
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
    kicker: 'ESIEE Paris · Szukam 6-miesięcznego stażu badawczego · Kliniczne NLP i biomedyczna SI · od lut. 2027',
    h1Pre: 'Wydobywam biomarkery z tekstu klinicznego ',
    h1Accent: 'nie budząc GPU',
    h1Post: '',
    sub: "Jestem Clément Longeac. Tworzę DEMNE, framework routingu, który dla każdego typu encji wybiera najlżejszą metodę pozostającą niezawodną: reguły, transformer lub LLM. Na niewidzianej wcześniej kohorcie AP-HP kieruje 99,5 % wzmianek do audytowalnych reguł z F1 0,941, podczas gdy dostrojony transformer osiąga jedynie 0,358.",
    ctaResearch: 'Zobacz badania',
    ctaCV: 'Pobierz CV',
    caption: 'DEMNE — Rules → Transformer → LLM, schemat na żywo',
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
    title: 'DEMNE',
    subtitle: 'Hybrydowy pipeline rozpoznawania nazwanych encji dla francuskiego klinicznego tekstu onkologicznego.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Kliniczny NER · francuskie korpusy onkologiczne',
    p1: 'Gotowe modele NER zawodzą wyraźnie na francuskim tekście klinicznym: gęste skróty, niespójne formatowanie między systemami szpitalnymi oraz terminologia biomarkerów niemal nieobecna w ogólnych danych treningowych. DEMNE rozwiązuje to za pomocą etapowego pipeline\'u zamiast pojedynczego modelu — każdy etap zajmuje się tym, w czym jest naprawdę dobry, i eskaluje do cięższego modelu tylko wtedy, gdy to konieczne.',
    p2: 'System jest dostrojony na DrBERT-7GB na trzech różnych francuskich korpusach onkologicznych i celuje w siedem priorytetowych typów encji biomarkerowych używanych w raportach istotnych dla leczenia.',
    tags: ['Kliniczne NLP', 'Transformery', 'DrBERT-7GB', 'Francuska onkologia'],
    viewRepo: 'Zobacz repozytorium',
    readMethodology: 'Przeczytaj metodologię',
    pipeline: [
      { num: '01', title: 'Etap oparty na regułach', body: 'Dopasowywanie wyrażeń regularnych i leksykonów tanio wychwytuje encje o wysokiej pewności i niskiej niejednoznaczności — daty, dawki, standardowe skróty biomarkerów.' },
      { num: '02', title: 'Ekstrakcja przez transformer', body: 'DrBERT-7GB, dostrojony na trzech korpusach onkologicznych, obsługuje encje wymagające rzeczywistego rozumienia semantycznego i dziedzinowego.' },
      { num: '03', title: 'Arbitraż przez LLM', body: 'Pozostałe konflikty i przypadki graniczne są kierowane do etapu LLM w celu ostatecznego rozstrzygnięcia niejednoznaczności przed wyjściem.' },
    ],
    aiAct: {
      title: 'Zgodność regulacyjna — EU AI Act',
      body: 'Ekstrakcja encji klinicznych z dokumentacji pacjentów jednoznacznie mieści się w kategorii wysokiego ryzyka EU AI Act. Etapowy design DEMNE uwzględnia artykuły 12 i 14 od samego początku, a nie jako późniejszy dodatek.',
      articles: [
        { code: 'Art. 12', label: 'Prowadzenie rejestrów', desc: 'Każda decyzja o ekstrakcji jest identyfikowalna aż do etapu (reguły, transformer lub LLM) i wyniku pewności, który ją wygenerował, co umożliwia automatyczne logowanie na potrzeby audytu.' },
        { code: 'Art. 14', label: 'Nadzór ludzki', desc: 'Wyniki arbitrażu LLM są oznaczane do przeglądu przez klinicystę, a nie akceptowane bezgłośnie, dzięki czemu człowiek pozostaje zaangażowany w niejednoznaczne przypadki.' },
      ],
    },
  },
  metrics: {
    label: 'Wyniki',
    title: 'Co daje podejście etapowe',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — Doświadczenie',
    title: 'Gdzie do tej pory odbywała się praca',
    currentLabel: 'W trakcie',
    items: [
      {
        date: 'Maj – lip 2026',
        title: 'Stażysta badawczy, kliniczna hurtownia danych',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Zastosowałem i zwalidowałem podejście routingu DEMNE na danych szpitalnych: ekstrakcja biomarkerów onkologicznych (ER, PR, HER2, Ki67, FISH) z francuskich raportów klinicznych oraz zdefiniowanie audytowalnej, realistycznej wdrożeniowo ścieżki klinicznej.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Paź 2025 – maj 2026',
        title: 'Student-badacz, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Zaprojektowałem DEMNE, hybrydowy kliniczny potok NER (reguły / transformer / LLM) dla francuskich tekstów onkologicznych, sterowany pięcioma sformalizowanymi metrykami korpusu — główny projekt ścieżki Tremplin Recherche przed aplikacjami doktoranckimi.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Obecnie',
        title: 'Product Lead i deweloper, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Budowa platformy, która daje pacjentom z urazami mózgu i terapeutom zajęciowym uporządkowany sposób porównywania narzędzi kompensacji poznawczej. Powstała jako prototyp Python/Streamlit na hackathonie SN@SU (Sorbonne Université, z Flor Sanchez-Luizard, terapeutką zajęciową w UEROS L’ADAPT Île-de-France); obecnie planowana jest przebudowa produkcyjna (FastAPI, PostgreSQL, Next.js) z hostingiem zgodnym z HDS/RODO i wyszukiwarką semantyczną do dopasowywania narzędzi klinicznych.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Student inżynierii — Data Science i SI',
        org: 'ESIEE Paris',
        body: 'Student piątego roku pięcioletniego programu inżynierskiego ESIEE Paris, specjalność Data Science i SI (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Stażysta inżynier, dział GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'Opracowanie autopkgtestów w OpenCL do sprawdzania zgodności GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) w infrastrukturze Debian/ROCm na GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Obecnie',
        title: 'Korepetytor przedmiotów ścisłych',
        org: 'Complétude',
        body: 'Nauczanie matematyki oraz fizyki-chemii około dziesięciu uczniów, od szkoły podstawowej po klasę maturalną, równolegle ze studiami inżynierskimi.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'Czerwiec 2026 · Hackathon SN@SU',
        title: 'NeuroStep',
        description:
          'Katalog cyfrowych narzędzi kompensacji poznawczej dla osób z urazami mózgu i ich terapeutów zajęciowych.',
        longBody:
          'NeuroStep powstał na hackathonie SN@SU (Sorbonne Université). Terapeuci zajęciowi i pacjenci znajdują aplikacje do komunikacji, pamięci i planowania bez przeszukiwania sklepów jeden po drugim: każde narzędzie jest skatalogowane, sklasyfikowane według zaburzenia i tematu oraz wyszukiwalne.\nMVP to aplikacja Streamlit oparta na magazynie JSON; obecnie planowana jest przebudowa produkcyjna z FastAPI, PostgreSQL i frontendem Next.js.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Gru. 2025 · Projekt zespołowy',
        title: 'Air Quality Dashboard',
        description:
          'Interaktywny pulpit odtwarzający 15 lat tła zanieczyszczenia powietrza we Francji (2000–2015).',
        longBody:
          'Potok danych i interaktywny pulpit nad wskaźnikami INERIS na poziomie gmin (Zenodo). Skrypty pobierają, czyszczą i zapisują dane w SQLite; pulpit renderuje mapę ciepła zanieczyszczeń w Leaflet z suwakiem lat i filtrami zanieczyszczeń, obok wykresów Plotly.\nStworzony z kolegą z zespołu, Williamem Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Projekt zaliczeniowy',
        title: 'Face Recognition with Deep Learning',
        description:
          'Rozpoznawanie twarzy oparte na CNN na zdjęciach, a następnie na wideo, z augmentacją danych i wyrównaniem twarzy.',
        longBody:
          'Projekt zaliczeniowy o nowoczesnym rozpoznawaniu twarzy. Pierwszy model wytrenowany na zaledwie 218 obrazach mocno się przeuczał; augmentacja danych (obrót, zoom) oraz krok wyrównania twarzy normalizujący położenie oczu i ust, w połączeniu z siecią wstępnie wytrenowaną, poprawiły generalizację. Celem było wykrywanie twarzy w wideo z własnego zbioru danych projektu.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Projekt w parze',
        title: 'TBA — Text Adventure Game',
        description:
          'Tekstowa gra przygodowa w terminalu napisana w Pythonie, o projekcie obiektowym.',
        longBody:
          'Przygoda tekstowa rozgrywana w terminalu: gracz przechodzi między ośmioma pokojami, wpisując polecenia. Kod podzielono na małe klasy o jednej odpowiedzialności (gra, pokój, gracz, polecenie, akcja, postać, przedmiot), więc dodanie pokoju lub przedmiotu pozostaje zmianą lokalną.\nStworzona z Anne-Colombe André w ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Lut. 2025 · Projekt zespołowy',
        title: 'Marmiton Data Intelligence',
        description:
          'Platforma analityki danych kulinarnych: scraping, ETL i pulpit nad danymi przepisów.',
        longBody:
          'Zespołowy projekt inżynierii danych, który pobiera dane przepisów z Marmiton, uruchamia potok ETL i udostępnia wyniki przez pulpit analityczny. Zbudowany w Pythonie z notatnikami Jupyter do eksploracji.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Skrypty autopkgtest sprawdzające oprogramowanie naukowe na GPU AMD, w infrastrukturze CI Debiana.',
        longBody:
          'Czteromiesięczny staż w dziale Div/Exp GRADES w Synchrotron SOLEIL pod opieką Emmanuela Farhiego i Frédérica-Emmanuela Picci. Cel: zmniejszyć zależność stosu obliczeń naukowych od NVIDIA/CUDA, testując, czy naukowe pakiety Debiana działają na GPU AMD przez ROCm.\nNapisałem autopkgtesty w OpenCL i walidowałem budowy w kontenerze podman+ROCm (przez sbuild), a następnie wysłałem je upstream do GitLab Salsa Debiana. Dodano autotesty ROCm dla PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx i sasmodels; pakiety bez kodu OpenCL (genx, examl) lub utknięte na niedokończonej migracji Python 2→3 (pysph) zostały wykluczone. To pierwszy zestaw klocków, który pomaga całej naukowej społeczności Debiana przejść z NVIDIA na AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Opublikowano · paź 2026', title: 'Dlaczego francuski kliniczny NER psuje modele ogólnego przeznaczenia', body: 'Przegląd miejsc, w których standardowe pipeline\'y NER zawodzą na francuskich raportach onkologicznych, i co to oznacza dla struktury DEMNE.', content: `<p>Otwórz francuski raport onkologiczny, a większość gotowych modeli NER potyka się już w pierwszym zdaniu. Słownictwo jest gęste i skrótowe (ER, PR, HER2, Ki67, FISH), formatowanie zmienia się między szpitalami, a istotna terminologia biomarkerów niemal nie występuje w korpusach, na których te modele trenowano. Zwykły odruch &mdash; rzucić na to duży model &mdash; działa, ale jest kosztowny, nieprzejrzysty i trudny do obrony przed klinicystą lub audytorem.</p><h2>Nie każda encja potrzebuje LLM</h2><p>DEMNE wychodzi od prostej obserwacji: encje w tych raportach nie są jednakowo trudne. Wzmianka o biopsji zapisywana jest na kilka stabilnych sposobów; nazwa leku może pojawić się w stu formach. Dlatego zamiast jednego modelu do wszystkiego, DEMNE mierzy każdy typ encji i kieruje go do najlżejszej metody, która pozostaje wystarczająco niezawodna &mdash; reguły deterministycznej, dostrojonego transformera lub LLM tylko w ostateczności.</p><p>Ten pomiar to pięć metryk korpusu obliczanych z adnotacji: jak bardzo forma powierzchniowa jest szablonowa, jak jednorodne jest słownictwo, czy mały zbiór słów kluczowych jest dyskryminujący, jak często wzmianka występuje pod negacją lub sprzecznością oraz czy w ogóle jest dość danych etykietowanych, by wytrenować model nadzorowany. Deterministyczny graf decyzyjny zamienia te liczby w poziom, a jego 17 progów kalibruje się wyszukiwaniem wielokryterialnym, które dwukrotnie mocniej karze skierowanie encji do metody zbyt słabej niż do jedynie zbyt kosztownej.</p><h2>Co to daje</h2><p>Na onkologicznym zbiorze kalibracyjnym (59 typów encji) routing zgadza się z eksperckim poziomem odniesienia ze zgodnością 0,954 i oszacowaniem leave-one-corpus-out 0,866 &mdash; znacznie powyżej dowolnej bazy o stałym poziomie (zawsze-reguły osiąga 0,729, zawsze-LLM 0,148). Bardziej przekonujący jest test zewnętrzny: zastosowany bez dostrajania do 300 raportów TK z AP-HP, dla nigdy niewidzianych lokalizacji nowotworu, DEMNE skierował 99,5 % wyróżnionych wzmianek (411 z 413) do reguł deterministycznych. Reguły te osiągnęły średnie F1 0,941, podczas gdy transformer dostrojony na tych samych encjach przy realistycznym budżecie szpitalnym dotarł tylko do 0,358.</p><p>Innymi słowy: dla standaryzowanych encji dominujących w raportowaniu onkologicznym reguły były nie tylko tańsze &mdash; były lepsze, a każda decyzja reguły daje się prześledzić do jawnego warunku, czego właśnie wymagają artykuły 12 i 14 EU AI Act.</p><h2>Gdzie się zatrzymuje</h2><p>Chcę być szczery co do ograniczeń. Standard odniesienia jest mały &mdash; 92 typy encji, 59 z nich w onkologii &mdash; więc wyniki na jednym korpusie są optymistyczne i ważne są tylko porównania względne. Poziom LLM nigdy nie został oceniony od początku do końca na kohorcie zewnętrznej; jedyna skierowana tam encja była zbyt rzadka. A kalibracja nie przenosi się między domenami: w innym gatunku klinicznym lub języku zgodność spada do 0,45&ndash;0,73, więc progi trzeba dopasować na nowo. DEMNE to dowód wykonalności, nie gotowy produkt.</p><h2>Dlaczego to ważne</h2><p>Rzecz nie w tym, że reguły pokonują transformery. Rzecz w tym, że &bdquo;którą metodę&rdquo; można rozstrzygnąć encja po encji, na podstawie mierzalnych właściwości tekstu, zamiast domyślnie wybierać najcięższy model i mieć nadzieję. Dla klinicznego NLP &mdash; gdzie koszt, audytowalność i zaufanie liczą się jednocześnie &mdash; takie ujęcie jest warte więcej niż kolejny punkt procentowy na benchmarku.</p><p>Kod i pełna metoda są na <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; manuskrypt jest w przygotowaniu.</p>` },
      { status: 'Opublikowano · paź 2026', title: 'Ekstrakcja etapowa kontra jeden duży model', body: 'Argumentacja za kierowaniem encji przez reguły i dostrojony transformer, zanim w ogóle wywoła się LLM — oraz koszt pomyłki w tym podejściu.', content: `<p>Dajcie dziś zespołowi trudny problem NLP, a odruch będzie taki, by sięgnąć po największy dostępny model i pozwolić mu wszystko rozwiązać. Na francuskim tekście klinicznym ten odruch jest kosztowny, powolny i trudny do audytu &mdash; a na dodatek nawet nie najdokładniejszy. DEMNE obstawia odwrotnie: wysłać każdy typ encji do najlżejszego narzędzia, które sobie z nią poradzi, i eskalować tylko wtedy, gdy tekst naprawdę tego wymaga.</p><h2>Schody, nie młotek</h2><p>Potok ma trzy poziomy. Reguły deterministyczne &mdash; wyrażenia regularne i wyselekcjonowane leksykony &mdash; biorą encje zapisywane na kilka stabilnych sposobów: daty, dawki, standardowe skróty biomarkerów. Transformer dostrojony na francuskim tekście onkologicznym obsługuje encje wymagające prawdziwego rozumienia semantycznego i dziedzinowego. LLM stoi na szczycie, zarezerwowany dla naprawdę niejednoznacznych przypadków, które przetrwały oba wcześniejsze etapy. Nic nie wspina się wyżej, niż musi.</p><h2>Dlaczego nie sam LLM?</h2><p>Bo jeden duży model płaci cenę LLM za każdą encję, w tym te, które wyrażenie regularne załatwiłoby natychmiast. Jest wolniejszy, wymaga budżetu GPU, którego większość szpitali nie ma, a każda decyzja to czarna skrzynka, którą i tak trzeba uzasadnić klinicyście lub audytorowi. A w samym zadaniu routingu baza zawsze-LLM wypadła najgorzej, zgadzając się z poziomem eksperckim jedynie w 0,148 przypadków. Najcięższe narzędzie nie jest automatycznie najbardziej niezawodne.</p><h2>Koszt złego routingu</h2><p>Ekstrakcja etapowa opłaca się tylko przy dobrym routingu, więc to tam DEMNE wkłada swoją staranność. Pięć metryk mierzonych z adnotacji zasila deterministyczny graf decyzyjny, którego 17 progów kalibruje wyszukiwanie wielokryterialne. Cel jest celowo asymetryczny: skierowanie encji do metody zbyt słabej karane jest dwukrotnie mocniej niż do jedynie zbyt kosztownej &mdash; bo pominięta ekstrakcja w raporcie klinicznym kosztuje więcej niż zmarnowana sekunda GPU.</p><h2>Co mówią liczby</h2><p>Na onkologicznym zbiorze kalibracyjnym routing zgadza się z eksperckim poziomem odniesienia w 0,954, wobec 0,729 dla zawsze-reguł i 0,148 dla zawsze-LLM. Zastosowany bez zmian do 300 niewidzianych raportów AP-HP, skierował 99,5 % wzmianek do reguł deterministycznych, które osiągnęły średnie F1 0,941 &mdash; podczas gdy transformer dostrojony przy realistycznym budżecie szpitalnym dotarł do 0,358. Dla standaryzowanych encji dominujących w tych raportach tani poziom był zarazem tym dokładnym.</p><h2>Kiedy jeden model jest właściwą odpowiedzią</h2><p>Etapowość nie jest darmowa: dodaje warstwę routingu do zbudowania, zmierzenia i utrzymania, a progi trzeba przekalibrować dla każdej nowej dziedziny. Jeśli tekst jest jednorodny, encje równie trudne, albo jest budżet i tolerancja audytu dla jednego dużego modelu, schody są tylko narzutem. Teza jest tu wąska &mdash; gdy koszt, opóźnienie i identyfikowalność liczą się jednocześnie, jak w klinicznym NLP, decydowanie per encja bije domyślny wybór najcięższego modelu i nadzieję.</p><p>Kod i pełna metoda są na <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; manuskrypt jest w przygotowaniu.</p>` },
    ],
  },
  contact: {
    title: 'Porozmawiajmy o klinicznym NLP, biomedycznej AI lub współpracy doktoranckiej.',
    directLabel: 'Bezpośrednio',
    elsewhereLabel: 'Gdzie indziej',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Umów rozmowę',
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
    kicker: 'ESIEE Paris · Tìm kỳ thực tập nghiên cứu 6 tháng · NLP lâm sàng & AI y sinh · từ tháng 2 năm 2027',
    h1Pre: 'Trích xuất dấu ấn sinh học từ văn bản lâm sàng ',
    h1Accent: 'mà không cần đánh thức GPU',
    h1Post: '',
    sub: "Tôi là Clément Longeac. Tôi xây dựng DEMNE, một framework định tuyến chọn, cho từng loại thực thể, phương pháp nhẹ nhất mà vẫn đáng tin cậy: quy tắc, một transformer hoặc một LLM. Trên một nhóm AP-HP chưa từng thấy, nó định tuyến 99,5 % số đề cập tới các quy tắc có thể kiểm toán với F1 0,941, trong khi một transformer đã tinh chỉnh chỉ đạt 0,358.",
    ctaResearch: 'Xem nghiên cứu',
    ctaCV: 'Tải CV',
    caption: 'DEMNE — Rules → Transformer → LLM, sơ đồ trực tiếp',
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
    title: 'DEMNE',
    subtitle: 'Một pipeline nhận dạng thực thể có tên lai dành cho văn bản lâm sàng ung bướu tiếng Pháp.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER lâm sàng · kho ngữ liệu ung bướu tiếng Pháp',
    p1: 'Các mô hình NER có sẵn thất bại nặng nề trên văn bản lâm sàng tiếng Pháp: từ viết tắt dày đặc, định dạng không nhất quán giữa các hệ thống bệnh viện, và thuật ngữ dấu ấn sinh học hầu như không xuất hiện trong dữ liệu huấn luyện tổng quát. DEMNE giải quyết vấn đề này bằng một pipeline theo giai đoạn thay vì một mô hình duy nhất — mỗi giai đoạn xử lý phần việc mà nó làm tốt nhất, và chỉ chuyển sang mô hình nặng hơn khi cần thiết.',
    p2: 'Hệ thống được tinh chỉnh trên DrBERT-7GB qua ba kho ngữ liệu ung bướu tiếng Pháp khác nhau, và nhắm đến bảy loại thực thể dấu ấn sinh học ưu tiên được sử dụng trong báo cáo liên quan đến điều trị.',
    tags: ['NLP lâm sàng', 'Transformer', 'DrBERT-7GB', 'Ung bướu tiếng Pháp'],
    viewRepo: 'Xem kho mã nguồn',
    readMethodology: 'Đọc phương pháp luận',
    pipeline: [
      { num: '01', title: 'Giai đoạn dựa trên quy tắc', body: 'Khớp mẫu bằng regex và từ điển bắt được với chi phí thấp các thực thể có độ tin cậy cao, ít mơ hồ — ngày tháng, liều lượng, các từ viết tắt dấu ấn sinh học chuẩn.' },
      { num: '02', title: 'Trích xuất bằng transformer', body: 'DrBERT-7GB, được tinh chỉnh trên ba kho ngữ liệu ung bướu, xử lý các thực thể đòi hỏi hiểu biết ngữ nghĩa và chuyên môn thực sự.' },
      { num: '03', title: 'Phân xử bằng LLM', body: 'Các xung đột còn lại và trường hợp biên được chuyển đến giai đoạn LLM để giải quyết mơ hồ lần cuối trước khi xuất kết quả.' },
    ],
    aiAct: {
      title: 'Tuân thủ quy định — EU AI Act',
      body: 'Việc trích xuất thực thể lâm sàng từ hồ sơ bệnh nhân rõ ràng thuộc nhóm rủi ro cao của EU AI Act. Thiết kế theo giai đoạn của DEMNE đã tính đến Điều 12 và 14 ngay từ đầu, chứ không phải bổ sung sau.',
      articles: [
        { code: 'Điều 12', label: 'Lưu trữ hồ sơ', desc: 'Mọi quyết định trích xuất đều có thể truy vết đến giai đoạn (quy tắc, transformer hoặc LLM) và điểm tin cậy đã tạo ra nó, cho phép ghi nhật ký kiểm toán tự động.' },
        { code: 'Điều 14', label: 'Giám sát của con người', desc: 'Kết quả phân xử của LLM được gắn cờ để bác sĩ lâm sàng xem xét thay vì được chấp nhận âm thầm, giữ con người trong vòng lặp đối với các trường hợp mơ hồ.' },
      ],
    },
  },
  metrics: {
    label: 'Kết quả',
    title: 'Những gì phương pháp theo giai đoạn mang lại',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — Kinh nghiệm',
    title: 'Công việc đã diễn ra ở đâu cho đến nay',
    currentLabel: 'Đang diễn ra',
    items: [
      {
        date: 'Th.5 – Th.7 2026',
        title: 'Thực tập sinh nghiên cứu, Kho dữ liệu lâm sàng',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Áp dụng và kiểm chứng phương pháp định tuyến của DEMNE trên dữ liệu bệnh viện: trích xuất các dấu ấn sinh học ung thư (ER, PR, HER2, Ki67, FISH) từ báo cáo lâm sàng tiếng Pháp, và xác định một lộ trình lâm sàng có thể kiểm toán, sát với triển khai thực tế.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Th.10 2025 – Th.5 2026',
        title: 'Nghiên cứu viên sinh viên, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Thiết kế DEMNE, một pipeline NER lâm sàng lai (quy tắc / transformer / LLM) cho văn bản ung thư học tiếng Pháp, dẫn dắt bởi năm chỉ số kho ngữ liệu đã hình thức hóa — dự án cốt lõi của lộ trình Tremplin Recherche trước khi nộp hồ sơ tiến sĩ.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Hiện tại',
        title: 'Product Lead kiêm lập trình viên, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Xây dựng một nền tảng cho phép bệnh nhân tổn thương não và nhà trị liệu nghề nghiệp so sánh công cụ bù trừ nhận thức một cách có cấu trúc. Khởi đầu là nguyên mẫu Python/Streamlit tại hackathon SN@SU (Sorbonne Université, cùng Flor Sanchez-Luizard, nhà trị liệu nghề nghiệp tại UEROS L’ADAPT Île-de-France); hiện đang phác thảo việc tái dựng cấp sản xuất (FastAPI, PostgreSQL, Next.js) với lưu trữ tuân thủ HDS/GDPR và một công cụ tìm kiếm ngữ nghĩa để khớp công cụ lâm sàng.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Sinh viên kỹ thuật — Khoa học dữ liệu & AI',
        org: 'ESIEE Paris',
        body: 'Sinh viên năm thứ năm của chương trình kỹ thuật năm năm tại ESIEE Paris, chuyên ngành Khoa học dữ liệu & AI (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Thực tập sinh kỹ thuật, bộ phận GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'Phát triển autopkgtest bằng OpenCL để kiểm tra khả năng tương thích GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) trên hạ tầng Debian/ROCm tại GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Hiện tại',
        title: 'Gia sư các môn khoa học',
        org: 'Complétude',
        body: 'Dạy toán và lý-hóa cho khoảng mười học sinh, từ tiểu học đến lớp cuối trung học phổ thông, song song với việc học kỹ thuật.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'Tháng 6 2026 · Hackathon SN@SU',
        title: 'NeuroStep',
        description:
          'Danh mục công cụ bù trừ nhận thức kỹ thuật số cho người bị tổn thương não và các nhà trị liệu nghề nghiệp của họ.',
        longBody:
          'NeuroStep khởi đầu tại hackathon SN@SU (Sorbonne Université). Nhà trị liệu nghề nghiệp và bệnh nhân có thể tìm ứng dụng cho giao tiếp, trí nhớ và lập kế hoạch mà không phải lục từng kho ứng dụng: mỗi công cụ được liệt kê, phân loại theo rối loạn và chủ đề, và có thể tìm kiếm.\nMVP là một ứng dụng Streamlit dựa trên kho JSON; hiện đang phác thảo việc tái dựng cấp sản xuất với FastAPI, PostgreSQL và frontend Next.js.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Th. 12 2025 · Dự án nhóm',
        title: 'Air Quality Dashboard',
        description:
          'Bảng điều khiển tương tác tái dựng 15 năm ô nhiễm không khí nền trên khắp nước Pháp (2000–2015).',
        longBody:
          'Một pipeline dữ liệu và bảng điều khiển tương tác trên các chỉ số cấp xã của INERIS (Zenodo). Các script tải về, làm sạch và lưu dữ liệu vào SQLite; bảng điều khiển hiển thị bản đồ nhiệt ô nhiễm bằng Leaflet với thanh trượt năm và bộ lọc chất ô nhiễm, cùng các biểu đồ Plotly.\nThực hiện cùng đồng đội William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Dự án môn học',
        title: 'Face Recognition with Deep Learning',
        description:
          'Nhận diện khuôn mặt dựa trên CNN trên ảnh tĩnh rồi đến video, dùng tăng cường dữ liệu và căn chỉnh khuôn mặt.',
        longBody:
          'Một dự án môn học về nhận diện khuôn mặt hiện đại. Mô hình đầu tiên huấn luyện chỉ trên 218 ảnh bị overfit nặng; tăng cường dữ liệu (xoay, phóng to) và bước căn chỉnh khuôn mặt chuẩn hóa vị trí mắt và môi, kết hợp với một mạng tiền huấn luyện, đã cải thiện khả năng tổng quát hóa. Mục tiêu là phát hiện khuôn mặt trong video từ tập dữ liệu của chính dự án.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Dự án cặp đôi',
        title: 'TBA — Text Adventure Game',
        description:
          'Một trò chơi phiêu lưu bằng chữ chạy trên terminal, viết bằng Python, thiết kế hướng đối tượng.',
        longBody:
          'Một cuộc phiêu lưu bằng chữ chơi trong terminal: người chơi di chuyển giữa tám căn phòng bằng cách gõ lệnh. Mã được chia thành các lớp nhỏ trách nhiệm đơn (trò chơi, phòng, người chơi, lệnh, hành động, nhân vật, vật phẩm), nên thêm một phòng hay vật phẩm vẫn là thay đổi cục bộ.\nThực hiện cùng Anne-Colombe André tại ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Th. 2 2025 · Dự án nhóm',
        title: 'Marmiton Data Intelligence',
        description:
          'Một nền tảng phân tích dữ liệu ẩm thực: scraping, ETL và một bảng điều khiển trên dữ liệu công thức.',
        longBody:
          'Một dự án nhóm kỹ thuật dữ liệu: scraping dữ liệu công thức từ Marmiton, chạy một pipeline ETL và trình bày kết quả qua một bảng điều khiển phân tích. Xây dựng bằng Python với notebook Jupyter để khám phá.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Các script autopkgtest kiểm định phần mềm khoa học trên GPU AMD, trên hạ tầng CI của Debian.',
        longBody:
          'Kỳ thực tập 4 tháng tại bộ phận Div/Exp GRADES của Synchrotron SOLEIL, dưới sự hướng dẫn của Emmanuel Farhi và Frédéric-Emmanuel Picca. Mục tiêu: giảm sự phụ thuộc của ngăn xếp tính toán khoa học vào NVIDIA/CUDA bằng cách kiểm tra xem các gói khoa học của Debian có chạy trên GPU AMD thông qua ROCm hay không.\nTôi viết các autopkgtest bằng OpenCL và kiểm định các bản build trong một container podman+ROCm (qua sbuild), rồi đưa chúng lên thượng nguồn trên GitLab Salsa của Debian. Đã thêm autotest ROCm cho PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx và sasmodels; các gói không có mã OpenCL (genx, examl) hoặc mắc kẹt ở quá trình chuyển Python 2→3 còn dang dở (pysph) bị loại. Đây là bộ viên gạch đầu tiên giúp cả cộng đồng khoa học Debian chuyển từ NVIDIA sang AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Đã đăng · Th.10 2026', title: 'Vì sao NER lâm sàng tiếng Pháp làm hỏng các mô hình tổng quát', body: 'Một góc nhìn về nơi các pipeline NER tiêu chuẩn thất bại trên báo cáo ung bướu tiếng Pháp, và điều đó có ý nghĩa gì đối với cấu trúc của DEMNE.', content: `<p>Mở một báo cáo ung thư học tiếng Pháp, phần lớn các mô hình NER có sẵn vấp ngay ở câu đầu tiên. Từ vựng dày đặc và viết tắt (ER, PR, HER2, Ki67, FISH), định dạng thay đổi giữa các bệnh viện, và thuật ngữ dấu ấn sinh học quan trọng gần như vắng bóng trong các kho ngữ liệu mà các mô hình này được huấn luyện. Phản xạ thường thấy &mdash; ném một mô hình lớn vào bài toán &mdash; thì hiệu quả, nhưng tốn kém, mờ đục và khó biện minh trước một bác sĩ lâm sàng hay kiểm toán viên.</p><h2>Không phải thực thể nào cũng cần LLM</h2><p>DEMNE khởi đi từ một quan sát thẳng thắn: các thực thể trong những báo cáo này không khó như nhau. Một đề cập sinh thiết được viết theo vài cách ổn định; còn tên thuốc có thể xuất hiện dưới trăm hình thức. Vì vậy, thay vì một mô hình cho mọi thứ, DEMNE đo lường từng loại thực thể và gửi nó tới phương pháp nhẹ nhất mà vẫn đủ tin cậy &mdash; một quy tắc tất định, một transformer đã tinh chỉnh, hoặc một LLM chỉ như phương án cuối cùng.</p><p>Phép đo là năm chỉ số kho ngữ liệu tính từ phần chú thích: hình thức bề mặt có khuôn mẫu đến đâu, từ vựng đồng nhất đến đâu, một tập từ khóa nhỏ có tính phân biệt hay không, đề cập rơi vào phủ định hoặc mâu thuẫn thường xuyên ra sao, và liệu có đủ dữ liệu gán nhãn để huấn luyện một mô hình có giám sát hay không. Một đồ thị quyết định tất định biến những con số ấy thành một tầng, và 17 ngưỡng của nó được hiệu chỉnh bằng một tìm kiếm đa mục tiêu, phạt nặng gấp đôi việc gửi một thực thể tới phương pháp quá yếu so với việc gửi tới một phương pháp chỉ quá tốn kém.</p><h2>Nó mang lại điều gì</h2><p>Trên tập hiệu chỉnh ung thư học (59 loại thực thể), việc định tuyến khớp với tầng tham chiếu của chuyên gia với độ đồng thuận 0,954 và ước lượng leave-one-corpus-out 0,866 &mdash; cao hơn hẳn mọi baseline tầng cố định (luôn-quy-tắc đạt 0,729, luôn-LLM 0,148). Phép thử thuyết phục hơn là ở bên ngoài: áp dụng mà không tinh chỉnh lại trên 300 báo cáo CT của AP-HP, ở những vị trí ung thư mô hình chưa từng thấy, DEMNE đã định tuyến 99,5 % đề cập được đánh dấu (411 trên 413) tới các quy tắc tất định. Các quy tắc ấy đạt F1 trung bình 0,941, trong khi một transformer tinh chỉnh trên cùng các thực thể, trong một ngân sách bệnh viện thực tế, chỉ dừng ở 0,358.</p><p>Nói cách khác: với những thực thể chuẩn hóa chiếm phần lớn trong báo cáo ung thư học, các quy tắc không chỉ rẻ hơn &mdash; chúng còn tốt hơn, và mỗi quyết định quy tắc đều truy ngược được tới một điều kiện tường minh, đúng điều mà Điều 12 và 14 của EU AI Act yêu cầu.</p><h2>Nó dừng ở đâu</h2><p>Tôi muốn trung thực về các giới hạn. Chuẩn tham chiếu nhỏ &mdash; 92 loại thực thể, 59 trong số đó thuộc ung thư học &mdash; nên điểm số trên một kho ngữ liệu là lạc quan và chỉ các so sánh tương đối mới đứng vững. Tầng LLM chưa bao giờ được đánh giá đầu-cuối trên nhóm bên ngoài; thực thể duy nhất được định tuyến tới đó quá hiếm. Và việc hiệu chỉnh không chuyển giao giữa các miền: chuyển sang một thể loại lâm sàng hay ngôn ngữ khác, độ đồng thuận rơi xuống 0,45&ndash;0,73, nên các ngưỡng phải được tinh chỉnh lại. DEMNE là một bằng chứng khả thi, không phải một sản phẩm hoàn chỉnh.</p><h2>Vì sao điều này quan trọng</h2><p>Vấn đề không phải quy tắc thắng transformer. Vấn đề là &laquo;dùng phương pháp nào&raquo; là một câu hỏi có thể trả lời theo từng thực thể, dựa trên các thuộc tính đo được của văn bản, thay vì mặc định chọn mô hình nặng nhất rồi hy vọng. Với NLP lâm sàng &mdash; nơi chi phí, khả năng kiểm toán và niềm tin cùng quan trọng &mdash; cách đặt vấn đề này đáng giá hơn một điểm phần trăm nữa trên một benchmark.</p><p>Mã nguồn và phương pháp đầy đủ có trên <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; bản thảo đang được chuẩn bị.</p>` },
      { status: 'Đã đăng · Th.10 2026', title: 'Trích xuất theo giai đoạn so với một mô hình lớn duy nhất', body: 'Lập luận cho việc định tuyến thực thể qua các quy tắc và một transformer đã tinh chỉnh trước khi gọi đến LLM — và cái giá phải trả nếu làm sai.', content: `<p>Giao một bài toán NLP khó cho một nhóm ngày nay, phản xạ là với lấy mô hình lớn nhất có được và để nó lo hết. Trên văn bản lâm sàng tiếng Pháp, phản xạ ấy tốn kém, chậm và khó kiểm toán &mdash; và hóa ra, thậm chí không phải là chính xác nhất. DEMNE đặt cược ngược lại: gửi mỗi loại thực thể tới công cụ nhẹ nhất có thể xử lý nó, và chỉ nâng cấp khi văn bản thực sự đòi hỏi.</p><h2>Một cầu thang, không phải cái búa</h2><p>Pipeline có ba tầng. Các quy tắc tất định &mdash; regex và từ điển được tuyển chọn &mdash; đảm nhận những thực thể được viết theo vài cách ổn định: ngày tháng, liều lượng, chữ viết tắt chuẩn của dấu ấn sinh học. Một transformer tinh chỉnh trên văn bản ung thư học tiếng Pháp xử lý những thực thể cần hiểu biết ngữ nghĩa và chuyên ngành thực sự. Một LLM nằm trên đỉnh, dành riêng cho những trường hợp thực sự mơ hồ sống sót qua cả hai tầng trước. Không gì leo cao hơn mức cần thiết.</p><h2>Vì sao không chỉ dùng LLM?</h2><p>Vì một mô hình lớn duy nhất phải trả cái giá của LLM cho mọi thực thể, kể cả những cái mà một regex đã giải quyết tức thì. Nó chậm hơn, cần ngân sách GPU mà hầu hết bệnh viện không có, và mọi quyết định là một hộp đen mà bạn vẫn phải biện minh trước một bác sĩ lâm sàng hay kiểm toán viên. Và ngay trên bài toán định tuyến, baseline luôn-LLM là tệ nhất, chỉ đồng thuận với tầng chuyên gia 0,148. Công cụ nặng nhất không mặc nhiên là đáng tin cậy nhất.</p><h2>Cái giá của định tuyến sai</h2><p>Trích xuất theo tầng chỉ đáng giá nếu việc định tuyến tốt, nên đó là nơi DEMNE dồn sự cẩn trọng. Năm chỉ số đo từ phần chú thích nuôi một đồ thị quyết định tất định có 17 ngưỡng được hiệu chỉnh bằng một tìm kiếm đa mục tiêu. Mục tiêu được cố ý đặt bất đối xứng: gửi một thực thể tới phương pháp quá yếu bị phạt nặng gấp đôi so với gửi tới một phương pháp chỉ quá tốn kém &mdash; vì một lần bỏ sót trích xuất trong báo cáo lâm sàng tốn kém hơn một giây GPU bị lãng phí.</p><h2>Những con số nói gì</h2><p>Trên tập hiệu chỉnh ung thư học, việc định tuyến khớp với tầng tham chiếu của chuyên gia 0,954, so với 0,729 của luôn-quy-tắc và 0,148 của luôn-LLM. Áp dụng nguyên vẹn lên 300 báo cáo AP-HP chưa từng thấy, nó định tuyến 99,5 % số đề cập tới các quy tắc tất định, đạt F1 trung bình 0,941 &mdash; trong khi một transformer tinh chỉnh trong một ngân sách bệnh viện thực tế chỉ đạt 0,358. Với những thực thể chuẩn hóa chiếm phần lớn các báo cáo này, tầng rẻ nhất cũng là tầng chính xác nhất.</p><h2>Khi một mô hình duy nhất là câu trả lời đúng</h2><p>Phân tầng không miễn phí: nó thêm một lớp định tuyến phải xây dựng, đo lường và bảo trì, và các ngưỡng phải được hiệu chỉnh lại cho mỗi miền mới. Nếu văn bản đồng nhất, các thực thể đều khó như nhau, hoặc có ngân sách và mức dung thứ kiểm toán cho một mô hình lớn duy nhất, thì cầu thang chỉ là chi phí thừa. Luận điểm ở đây là hẹp &mdash; khi chi phí, độ trễ và khả năng truy vết cùng quan trọng, như trong NLP lâm sàng, quyết định theo từng thực thể thắng việc mặc định chọn mô hình nặng nhất rồi hy vọng.</p><p>Mã nguồn và phương pháp đầy đủ có trên <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; bản thảo đang được chuẩn bị.</p>` },
    ],
  },
  contact: {
    title: 'Hãy cùng trao đổi về NLP lâm sàng, AI y sinh, hoặc hợp tác nghiên cứu tiến sĩ.',
    directLabel: 'Trực tiếp',
    elsewhereLabel: 'Nơi khác',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Đặt lịch gọi',
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
    kicker: 'ESIEE Paris · Mencari magang riset 6 bulan · NLP klinis & AI biomedis · mulai Feb 2027',
    h1Pre: 'Mengekstrak biomarker dari teks klinis ',
    h1Accent: 'tanpa membangunkan GPU',
    h1Post: '',
    sub: "Saya Clément Longeac. Saya membangun DEMNE, sebuah framework perutean yang memilih, untuk setiap jenis entitas, metode paling ringan yang tetap andal: aturan, sebuah transformer, atau sebuah LLM. Pada kohort AP-HP yang belum pernah dilihat, ia merutekan 99,5 % sebutan ke aturan yang dapat diaudit dengan F1 0,941, sementara transformer yang disetel hanya mencapai 0,358.",
    ctaResearch: 'Lihat riset',
    ctaCV: 'Unduh CV',
    caption: 'DEMNE — Rules → Transformer → LLM, skema langsung',
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
    title: 'DEMNE',
    subtitle: 'Pipeline pengenalan entitas bernama hybrid untuk teks klinis onkologi berbahasa Prancis.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER klinis · korpus onkologi Prancis',
    p1: 'Model NER siap pakai gagal parah pada teks klinis Prancis: singkatan yang padat, format yang tidak konsisten antar sistem rumah sakit, serta terminologi penanda biologis yang hampir tidak muncul dalam data pelatihan umum. DEMNE mengatasi ini dengan pipeline bertahap alih-alih satu model — setiap tahap menangani apa yang paling dikuasainya, dan hanya meningkat ke model yang lebih berat bila perlu.',
    p2: 'Sistem ini di-fine-tune pada DrBERT-7GB di tiga korpus onkologi Prancis yang berbeda, dan menargetkan tujuh jenis entitas penanda biologis prioritas yang digunakan dalam pelaporan yang relevan dengan perawatan.',
    tags: ['NLP klinis', 'Transformer', 'DrBERT-7GB', 'Onkologi Prancis'],
    viewRepo: 'Lihat repositori',
    readMethodology: 'Baca metodologi',
    pipeline: [
      { num: '01', title: 'Tahap berbasis aturan', body: 'Pencocokan regex dan leksikon menangkap dengan biaya rendah entitas dengan keyakinan tinggi dan ambiguitas rendah — tanggal, dosis, singkatan penanda biologis standar.' },
      { num: '02', title: 'Ekstraksi transformer', body: 'DrBERT-7GB, yang di-fine-tune pada tiga korpus onkologi, menangani entitas yang membutuhkan pemahaman semantik dan domain yang sesungguhnya.' },
      { num: '03', title: 'Arbitrase LLM', body: 'Konflik yang tersisa dan kasus tepi dialihkan ke tahap LLM untuk disambiguasi akhir sebelum output.' },
    ],
    aiAct: {
      title: 'Keselarasan regulasi — EU AI Act',
      body: 'Ekstraksi entitas klinis dari rekam medis pasien jelas masuk dalam kategori risiko tinggi EU AI Act. Desain bertahap DEMNE mempertimbangkan Pasal 12 dan 14 sejak awal, bukan ditambahkan belakangan.',
      articles: [
        { code: 'Pasal 12', label: 'Pencatatan', desc: 'Setiap keputusan ekstraksi dapat dilacak hingga ke tahap (aturan, transformer, atau LLM) dan skor keyakinan yang menghasilkannya, memungkinkan pencatatan audit otomatis.' },
        { code: 'Pasal 14', label: 'Pengawasan manusia', desc: 'Output arbitrase LLM ditandai untuk tinjauan klinisi alih-alih diterima begitu saja, menjaga keterlibatan manusia dalam kasus-kasus ambigu.' },
      ],
    },
  },
  metrics: {
    label: 'Hasil',
    title: 'Apa yang diberikan pendekatan bertahap',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — Pengalaman',
    title: 'Di mana pekerjaan ini telah berlangsung sejauh ini',
    currentLabel: 'Sedang berlangsung',
    items: [
      {
        date: 'Mei – Jul 2026',
        title: 'Magang riset, Gudang Data Klinis',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Menerapkan dan memvalidasi pendekatan perutean DEMNE pada data rumah sakit: mengekstraksi biomarker onkologi (ER, PR, HER2, Ki67, FISH) dari laporan klinis Prancis, dan mendefinisikan jalur klinis yang dapat diaudit serta realistis untuk penerapan.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Okt 2025 – Mei 2026',
        title: 'Peneliti mahasiswa, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Merancang DEMNE, sebuah pipeline NER klinis hibrida (aturan / transformer / LLM) untuk teks onkologi Prancis, dipandu oleh lima metrik korpus yang diformalkan — proyek inti jalur Tremplin Recherche menjelang lamaran doktoral.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Sekarang',
        title: 'Product Lead & pengembang, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Membangun platform yang memberi pasien cedera otak dan terapis okupasi cara terstruktur untuk membandingkan alat kompensasi kognitif. Dimulai sebagai purwarupa Python/Streamlit di hackathon SN@SU (Sorbonne Université, bersama Flor Sanchez-Luizard, terapis okupasi di UEROS L’ADAPT Île-de-France); kini merancang pembangunan ulang tingkat produksi (FastAPI, PostgreSQL, Next.js) dengan hosting patuh HDS/GDPR dan mesin pencari semantik untuk pencocokan alat klinis.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Mahasiswa teknik — Ilmu Data & AI',
        org: 'ESIEE Paris',
        body: 'Mahasiswa tahun kelima program teknik lima tahun di ESIEE Paris, spesialisasi Ilmu Data & AI (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Magang teknik, divisi GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'Mengembangkan autopkgtest dengan OpenCL untuk kompatibilitas GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) di infrastruktur Debian/ROCm pada GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Sekarang',
        title: 'Tutor sains (STEM)',
        org: 'Complétude',
        body: 'Mengajar matematika dan fisika-kimia kepada sekitar sepuluh siswa, dari sekolah dasar hingga kelas akhir SMA, seiring studi teknik saya.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'Juni 2026 · Hackathon SN@SU',
        title: 'NeuroStep',
        description:
          'Katalog alat kompensasi kognitif digital bagi penyandang cedera otak dan terapis okupasi mereka.',
        longBody:
          'NeuroStep bermula di hackathon SN@SU (Sorbonne Université). Terapis okupasi dan pasien dapat menemukan aplikasi untuk komunikasi, memori, dan perencanaan tanpa menelusuri toko aplikasi satu per satu: setiap alat terdaftar, diklasifikasikan menurut gangguan dan tema, serta dapat dicari.\nMVP-nya adalah aplikasi Streamlit dengan penyimpanan JSON; kini sedang dirancang pembangunan ulang tingkat produksi dengan FastAPI, PostgreSQL, dan frontend Next.js.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Des. 2025 · Proyek tim',
        title: 'Air Quality Dashboard',
        description:
          'Dasbor interaktif yang merekonstruksi 15 tahun polusi udara latar di Prancis (2000–2015).',
        longBody:
          'Pipeline data dan dasbor interaktif atas indikator tingkat komune INERIS (Zenodo). Skrip mengunduh, membersihkan, dan menyimpan data di SQLite; dasbor menampilkan peta panas polusi Leaflet dengan penggeser tahun dan filter polutan, bersama grafik Plotly.\nDibuat bersama rekan tim William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Proyek mata kuliah',
        title: 'Face Recognition with Deep Learning',
        description:
          'Pengenalan wajah berbasis CNN pada citra diam lalu video, memakai augmentasi data dan penyelarasan wajah.',
        longBody:
          'Proyek mata kuliah tentang pengenalan wajah modern. Model pertama yang dilatih hanya dengan 218 citra sangat overfit; augmentasi data (rotasi, zoom) dan langkah penyelarasan wajah yang menormalkan posisi mata dan bibir, dipadukan dengan jaringan terlatih, memperbaiki generalisasi. Tujuannya mendeteksi wajah pada video dari dataset milik proyek itu sendiri.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Proyek berpasangan',
        title: 'TBA — Text Adventure Game',
        description:
          'Gim petualangan teks di terminal dengan Python, berdesain berorientasi objek.',
        longBody:
          'Petualangan teks yang dimainkan di terminal: pemain berpindah antara delapan ruangan dengan mengetik perintah. Kode dibagi menjadi kelas-kelas kecil bertanggung jawab tunggal (game, ruangan, pemain, perintah, aksi, karakter, item), sehingga menambah ruangan atau item tetap perubahan lokal.\nDibuat bersama Anne-Colombe André di ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Feb. 2025 · Proyek tim',
        title: 'Marmiton Data Intelligence',
        description:
          'Platform analitik data kuliner: scraping, ETL, dan dasbor atas data resep.',
        longBody:
          'Proyek tim rekayasa data yang melakukan scraping data resep dari Marmiton, menjalankan pipeline ETL, dan menyajikan hasilnya lewat dasbor analitik. Dibangun dengan Python dan notebook Jupyter untuk eksplorasi.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Skrip autopkgtest yang memvalidasi perangkat lunak ilmiah pada GPU AMD, di infrastruktur CI Debian.',
        longBody:
          'Magang 4 bulan di divisi Div/Exp GRADES di Synchrotron SOLEIL, dibimbing oleh Emmanuel Farhi dan Frédéric-Emmanuel Picca. Tujuannya: mengurangi ketergantungan tumpukan komputasi ilmiah pada NVIDIA/CUDA dengan menguji apakah paket ilmiah Debian berjalan di GPU AMD melalui ROCm.\nSaya menulis autopkgtest OpenCL dan memvalidasi build dalam kontainer podman+ROCm (via sbuild), lalu mengirimnya ke upstream di GitLab Salsa Debian. Autotest ROCm ditambahkan untuk PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx, dan sasmodels; paket tanpa kode OpenCL (genx, examl) atau yang tersangkut migrasi Python 2→3 yang belum selesai (pysph) dikesampingkan. Ini adalah set balok pembangun pertama yang membantu komunitas ilmiah Debian secara luas beralih dari NVIDIA ke AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Terbit · Okt 2026', title: 'Mengapa NER klinis Prancis merusak model tujuan umum', body: 'Penjelasan tentang di mana pipeline NER standar gagal pada laporan onkologi Prancis, dan apa artinya bagi struktur DEMNE.', content: `<p>Buka sebuah laporan onkologi berbahasa Prancis, dan sebagian besar model NER siap pakai tersandung sejak kalimat pertama. Kosakatanya padat dan penuh singkatan (ER, PR, HER2, Ki67, FISH), formatnya berganti dari satu rumah sakit ke rumah sakit lain, dan terminologi biomarker yang penting nyaris absen dari korpus tempat model-model ini dilatih. Refleks yang biasa &mdash; melemparkan model besar ke masalah ini &mdash; memang berhasil, tetapi mahal, tidak transparan, dan sulit dipertanggungjawabkan di hadapan klinisi atau auditor.</p><h2>Tak setiap entitas butuh LLM</h2><p>DEMNE berangkat dari pengamatan lugas: entitas dalam laporan ini tidak sama sulitnya. Sebutan biopsi ditulis dalam segelintir bentuk yang stabil; sedangkan nama obat bisa muncul dalam seratus bentuk. Jadi, alih-alih satu model untuk segalanya, DEMNE mengukur setiap tipe entitas dan mengarahkannya ke metode paling ringan yang tetap cukup andal &mdash; aturan deterministik, transformer yang disetel, atau LLM hanya sebagai pilihan terakhir.</p><p>Pengukuran itu berupa lima metrik korpus yang dihitung dari anotasi: seberapa berpola bentuk permukaannya, seberapa homogen kosakatanya, apakah himpunan kata kunci kecil bersifat diskriminatif, seberapa sering sebutan berada di bawah negasi atau kontradiksi, dan apakah ada cukup data berlabel untuk melatih model terbimbing. Sebuah graf keputusan deterministik mengubah angka-angka itu menjadi jenjang, dan 17 ambangnya dikalibrasi dengan pencarian multi-tujuan yang menghukum dua kali lebih berat pengiriman entitas ke metode yang terlalu lemah ketimbang ke metode yang sekadar terlalu mahal.</p><h2>Apa manfaatnya</h2><p>Pada set kalibrasi onkologi (59 tipe entitas), peruteannya sepakat dengan jenjang rujukan pakar dengan konkordansi 0,954 dan estimasi leave-one-corpus-out 0,866 &mdash; jauh di atas baseline berjenjang tetap mana pun (selalu-aturan mencapai 0,729, selalu-LLM 0,148). Uji yang lebih meyakinkan bersifat eksternal: diterapkan tanpa penyetelan ulang pada 300 laporan CT AP-HP, untuk lokasi kanker yang belum pernah dilihat model, DEMNE merutekan 99,5 % sebutan yang ditandai (411 dari 413) ke aturan deterministik. Aturan-aturan itu mencapai F1 rata-rata 0,941, sementara transformer yang disetel pada entitas yang sama dalam anggaran rumah sakit realistis hanya mencapai 0,358.</p><p>Dengan kata lain: untuk entitas terstandar yang mendominasi pelaporan onkologi, aturan bukan hanya lebih murah &mdash; aturan lebih baik, dan setiap keputusan aturan dapat dilacak hingga sebuah syarat eksplisit, persis yang diminta Pasal 12 dan 14 EU AI Act.</p><h2>Di mana ia berhenti</h2><p>Saya ingin jujur soal batasannya. Standar rujukan itu kecil &mdash; 92 tipe entitas, 59 di antaranya onkologi &mdash; sehingga skor pada satu korpus bersifat optimistis dan hanya perbandingan relatif yang berlaku. Jenjang LLM tidak pernah dievaluasi menyeluruh pada kohort eksternal; satu-satunya entitas yang dirutekan ke sana terlalu langka. Lagi pula kalibrasi tidak berpindah antar-domain: beralih ke genre klinis atau bahasa lain membuat konkordansi turun ke 0,45&ndash;0,73, sehingga ambangnya harus disetel ulang. DEMNE adalah bukti kelayakan, bukan produk jadi.</p><h2>Mengapa ini penting</h2><p>Intinya bukan bahwa aturan mengalahkan transformer. Intinya, &laquo;metode mana&raquo; adalah pertanyaan yang bisa dijawab per entitas, dari sifat teks yang terukur, alih-alih menetapkan model terberat sebagai bawaan lalu berharap. Untuk NLP klinis &mdash; tempat biaya, keteraudiktan, dan kepercayaan sama-sama penting &mdash; kerangka ini lebih berharga daripada satu poin persentase tambahan pada sebuah tolok ukur.</p><p>Kode dan metode lengkapnya ada di <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; manuskripnya sedang disiapkan.</p>` },
      { status: 'Terbit · Okt 2026', title: 'Ekstraksi bertahap vs. satu model besar', body: 'Argumen untuk merutekan entitas melalui aturan dan transformer yang di-fine-tune sebelum memanggil LLM sama sekali — dan biaya yang harus dibayar jika salah.', content: `<p>Serahkan masalah NLP yang sulit kepada sebuah tim hari ini, dan refleksnya adalah meraih model terbesar yang tersedia dan membiarkannya menyelesaikan segalanya. Pada teks klinis Prancis, refleks itu mahal, lambat, dan sulit diaudit &mdash; dan, ternyata, bahkan bukan yang paling akurat. DEMNE bertaruh sebaliknya: mengirim setiap jenis entitas ke alat teringan yang mampu menanganinya, dan meningkatkannya hanya saat teks benar-benar menuntutnya.</p><h2>Sebuah tangga, bukan palu</h2><p>Pipeline-nya memiliki tiga jenjang. Aturan deterministik &mdash; regex dan leksikon terkurasi &mdash; menangani entitas yang ditulis dalam segelintir bentuk stabil: tanggal, dosis, singkatan baku biomarker. Sebuah transformer yang disetel pada teks onkologi Prancis menangani entitas yang memerlukan pemahaman semantik dan domain yang sesungguhnya. Sebuah LLM berada di puncak, disediakan untuk kasus yang benar-benar ambigu yang lolos dari kedua tahap sebelumnya. Tidak ada yang naik lebih tinggi dari yang diperlukan.</p><h2>Mengapa tidak cukup LLM saja?</h2><p>Karena satu model besar membayar harga LLM pada setiap entitas, termasuk yang sebenarnya langsung tuntas oleh sebuah regex. Ia lebih lambat, memerlukan anggaran GPU yang tak dimiliki kebanyakan rumah sakit, dan setiap keputusan adalah kotak hitam yang tetap harus Anda pertanggungjawabkan di hadapan klinisi atau auditor. Dan pada tugas peruteannya sendiri, baseline selalu-LLM adalah yang terburuk, sepakat dengan jenjang pakar hanya 0,148. Alat terberat tidak otomatis yang paling andal.</p><h2>Biaya salah merutekan</h2><p>Ekstraksi bertahap hanya sepadan jika peruteannya baik, jadi di sanalah DEMNE mencurahkan kehati-hatiannya. Lima metrik yang diukur dari anotasi memberi masukan pada sebuah graf keputusan deterministik yang 17 ambangnya dikalibrasi dengan pencarian multi-tujuan. Tujuannya sengaja asimetris: mengirim entitas ke metode yang terlalu lemah dihukum dua kali lebih berat daripada ke metode yang sekadar terlalu mahal &mdash; karena satu ekstraksi yang terlewat dalam laporan klinis lebih mahal daripada satu detik GPU yang terbuang.</p><h2>Apa kata angka-angkanya</h2><p>Pada set kalibrasi onkologi, peruteannya cocok dengan jenjang rujukan pakar sebesar 0,954, berbanding 0,729 untuk selalu-aturan dan 0,148 untuk selalu-LLM. Diterapkan tanpa diubah pada 300 laporan AP-HP yang belum pernah dilihat, ia merutekan 99,5 % sebutan ke aturan deterministik, yang mencapai F1 rata-rata 0,941 &mdash; sementara transformer yang disetel dalam anggaran rumah sakit realistis hanya mencapai 0,358. Untuk entitas terstandar yang mendominasi laporan-laporan ini, jenjang termurah sekaligus yang paling akurat.</p><h2>Kapan satu model adalah jawaban yang tepat</h2><p>Pentahapan tidak gratis: ia menambah lapisan perutean untuk dibangun, diukur, dan dipelihara, dan ambang-ambangnya harus dikalibrasi ulang untuk setiap domain baru. Jika teksnya seragam, entitasnya sama sulitnya, atau ada anggaran dan toleransi audit untuk satu model besar, tangga itu hanyalah beban tambahan. Klaim di sini sempit &mdash; ketika biaya, latensi, dan keterlacakan penting sekaligus, seperti pada NLP klinis, memutuskan per entitas mengalahkan menetapkan model terberat sebagai bawaan lalu berharap.</p><p>Kode dan metode lengkapnya ada di <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; manuskripnya sedang disiapkan.</p>` },
    ],
  },
  contact: {
    title: 'Mari bicara tentang NLP klinis, AI biomedis, atau kolaborasi PhD.',
    directLabel: 'Langsung',
    elsewhereLabel: 'Di Tempat Lain',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Jadwalkan panggilan',
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
    kicker: 'ESIEE Paris · Söker en 6 månaders forskningspraktik · Klinisk NLP & biomedicinsk AI · från feb. 2027',
    h1Pre: 'Extraherar biomarkörer från klinisk text ',
    h1Accent: 'utan att väcka GPU:n',
    h1Post: '',
    sub: "Jag är Clément Longeac. Jag bygger DEMNE, ett dirigeringsramverk som för varje entitetstyp väljer den lättaste metod som förblir tillförlitlig: regler, en transformer eller en LLM. På en osedd AP-HP-kohort dirigerar det 99,5 % av omnämnandena till granskningsbara regler med F1 0,941, där en finjusterad transformer bara når 0,358.",
    ctaResearch: 'Se forskningen',
    ctaCV: 'Ladda ner CV',
    caption: 'DEMNE — Rules → Transformer → LLM, schema i realtid',
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
    title: 'DEMNE',
    subtitle: 'En hybrid pipeline för namngiven entitetsigenkänning för fransk onkologisk klinisk text.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Klinisk NER · franska onkologikorpusar',
    p1: 'Färdiga NER-modeller misslyckas rejält med fransk klinisk text: täta förkortningar, inkonsekvent formatering mellan sjukhussystem, och biomarkörterminologi som knappt förekommer i allmänna träningsdata. DEMNE hanterar detta med en stegvis pipeline istället för en enda modell — varje steg gör det den faktiskt är bra på, och eskalerar bara till en tyngre modell vid behov.',
    p2: 'Systemet är finjusterat på DrBERT-7GB över tre olika franska onkologikorpusar, och riktar in sig på sju prioriterade biomarkör-entitetstyper som används i behandlingsrelevant rapportering.',
    tags: ['Klinisk NLP', 'Transformers', 'DrBERT-7GB', 'Fransk onkologi'],
    viewRepo: 'Visa repositoriet',
    readMethodology: 'Läs metodiken',
    pipeline: [
      { num: '01', title: 'Regelbaserat steg', body: 'Matchning med reguljära uttryck och lexikon fångar billigt entiteter med hög säkerhet och låg tvetydighet — datum, doser, standardförkortningar för biomarkörer.' },
      { num: '02', title: 'Extraktion via transformer', body: 'DrBERT-7GB, finjusterad över tre onkologikorpusar, hanterar de entiteter som kräver verklig semantisk och domänförståelse.' },
      { num: '03', title: 'LLM-skiljedom', body: 'Kvarvarande konflikter och gränsfall dirigeras till ett LLM-steg för slutlig disambiguering före utdata.' },
    ],
    aiAct: {
      title: 'Regelefterlevnad — EU AI Act',
      body: 'Klinisk entitetsextraktion från patientjournaler faller tydligt inom högriskkategorin i EU AI Act. DEMNE:s stegvisa design tar hänsyn till artikel 12 och 14 från början, inte som ett senare tillägg.',
      articles: [
        { code: 'Art. 12', label: 'Registerföring', desc: 'Varje extraktionsbeslut kan spåras till det steg (regler, transformer eller LLM) och den konfidenspoäng som producerade det, vilket möjliggör automatisk granskningsloggning.' },
        { code: 'Art. 14', label: 'Mänsklig tillsyn', desc: 'Utdata från LLM-skiljedomen flaggas för klinisk granskning istället för att accepteras tyst, vilket håller en människa i loopen vid tvetydiga fall.' },
      ],
    },
  },
  metrics: {
    label: 'Resultat',
    title: 'Vad det stegvisa tillvägagångssättet ger',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — Erfarenhet',
    title: 'Var arbetet har ägt rum hittills',
    currentLabel: 'Pågående',
    items: [
      {
        date: 'Maj – jul 2026',
        title: 'Forskningspraktikant, kliniskt datalager',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Tillämpade och validerade DEMNE:s dirigeringsansats på sjukhusdata: extraktion av onkologiska biomarkörer (ER, PR, HER2, Ki67, FISH) ur franska kliniska rapporter, och definition av en granskningsbar, driftsnära klinisk väg.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Okt 2025 – maj 2026',
        title: 'Studentforskare, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Utformade DEMNE, en hybrid klinisk NER-pipeline (regler / transformer / LLM) för fransk onkologisk text, driven av fem formaliserade korpusmått — kärnprojektet i Tremplin Recherche-spåret inför doktorandansökningar.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Nu',
        title: 'Product Lead & utvecklare, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Bygger en plattform som ger personer med hjärnskador och arbetsterapeuter ett strukturerat sätt att jämföra verktyg för kognitiv kompensation. Började som en Python/Streamlit-prototyp på SN@SU-hackathonet (Sorbonne Université, med Flor Sanchez-Luizard, arbetsterapeut vid UEROS L’ADAPT Île-de-France); nu avgränsas en produktionsombyggnad (FastAPI, PostgreSQL, Next.js) med HDS/GDPR-förenlig hosting och en semantisk sökmotor för matchning av kliniska verktyg.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Ingenjörsstudent — Data Science & AI',
        org: 'ESIEE Paris',
        body: 'Femteårsstudent på ESIEE Paris femåriga ingenjörsprogram, inriktning Data Science & AI (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Ingenjörspraktikant, GRADES-avdelningen',
        org: 'Synchrotron SOLEIL',
        body: 'Utvecklade autopkgtester med OpenCL för AMD-GPU-kompatibilitet (pyopencl, nabu, ufo-filters, pyvkfft) över Debian/ROCm-infrastrukturen på GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Nu',
        title: 'Läxhjälpare i NO/matematik',
        org: 'Complétude',
        body: 'Undervisar omkring tio elever i matematik och fysik-kemi, från lågstadiet till sista gymnasieåret, parallellt med ingenjörsstudierna.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'Juni 2026 · SN@SU-hackathon',
        title: 'NeuroStep',
        description:
          'En katalog över digitala verktyg för kognitiv kompensation för personer med hjärnskador och deras arbetsterapeuter.',
        longBody:
          'NeuroStep började på SN@SU-hackathonet (Sorbonne Université). Arbetsterapeuter och patienter kan hitta appar för kommunikation, minne och planering utan att söka igenom appbutikerna en i taget: varje verktyg är listat, klassat efter störning och tema, och sökbart.\nMVP:n är en Streamlit-applikation med ett JSON-lager; nu avgränsas en produktionsombyggnad med FastAPI, PostgreSQL och en Next.js-frontend.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Dec. 2025 · Grupprojekt',
        title: 'Air Quality Dashboard',
        description:
          'En interaktiv panel som rekonstruerar 15 år av bakgrundsluftföroreningar i Frankrike (2000–2015).',
        longBody:
          'En datapipeline och interaktiv panel över INERIS-indikatorer på kommunnivå (Zenodo). Skript laddar ned, rensar och lagrar data i SQLite; panelen visar en Leaflet-värmekarta över föroreningar med årsreglage och föroreningsfilter, jämte Plotly-diagram.\nGjord med lagkamraten William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Kursprojekt',
        title: 'Face Recognition with Deep Learning',
        description:
          'CNN-baserad ansiktsigenkänning på stillbilder och sedan video, med dataaugmentering och ansiktsinriktning.',
        longBody:
          'Ett kursprojekt om modern ansiktsigenkänning. En första modell tränad på bara 218 bilder överanpassade kraftigt; dataaugmentering (rotation, zoom) och ett ansiktsinriktningssteg som normaliserar ögon- och läppositioner, i kombination med ett förtränat nätverk, förbättrade generaliseringen. Målet var att upptäcka ansikten i video från projektets egen datamängd.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Parprojekt',
        title: 'TBA — Text Adventure Game',
        description:
          'Ett textäventyr för terminalen i Python, med objektorienterad design.',
        longBody:
          'Ett textäventyr som spelas i terminalen: spelaren rör sig mellan åtta rum genom att skriva kommandon. Koden är uppdelad i små klasser med ett enda ansvar (spel, rum, spelare, kommando, handling, karaktär, föremål), så att lägga till ett rum eller föremål förblir en lokal ändring.\nGjord med Anne-Colombe André på ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Feb. 2025 · Grupprojekt',
        title: 'Marmiton Data Intelligence',
        description:
          'En plattform för kulinarisk dataanalys: scraping, ETL och en panel över receptdata.',
        longBody:
          'Ett grupprojekt i data engineering som skrapar receptdata från Marmiton, kör en ETL-pipeline och exponerar resultaten via en analyspanel. Byggt i Python med Jupyter-notebooks för utforskning.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'autopkgtest-skript som validerar vetenskaplig programvara på AMD-GPU:er, på Debians CI-infrastruktur.',
        longBody:
          'Fyra månaders praktik vid avdelningen Div/Exp GRADES på Synchrotron SOLEIL, handledd av Emmanuel Farhi och Frédéric-Emmanuel Picca. Målet: minska den vetenskapliga beräkningsstackens beroende av NVIDIA/CUDA genom att testa om Debians vetenskapspaket kör på AMD-GPU:er via ROCm.\nJag skrev OpenCL-autopkgtester och validerade byggena i en podman+ROCm-container (via sbuild) och skickade dem sedan uppströms till Debians GitLab Salsa. ROCm-autotester lades till för PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx och sasmodels; paket utan OpenCL-kod (genx, examl) eller fast i en oavslutad Python 2→3-migrering (pysph) sållades bort. Det är en första uppsättning byggstenar som hjälper hela den vetenskapliga Debian-gemenskapen att gå från NVIDIA till AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Publicerad · okt. 2026', title: 'Varför fransk klinisk NER slår ut generella modeller', body: 'En genomgång av var standard-NER-pipelines misslyckas på franska onkologirapporter, och vad det innebär för DEMNE:s struktur.', content: `<p>Öppna en fransk onkologisk rapport, så snubblar de flesta färdiga NER-modeller redan i första meningen. Ordförrådet är tätt och förkortat (ER, PR, HER2, Ki67, FISH), formateringen skiftar mellan sjukhus, och den biomarkörterminologi som betyder något saknas nästan helt i de korpusar modellerna tränats på. Den vanliga reflexen &mdash; att kasta en stor modell på problemet &mdash; fungerar, men är dyr, ogenomskinlig och svår att försvara inför en kliniker eller en granskare.</p><h2>Alla entiteter behöver inte en LLM</h2><p>DEMNE utgår från en krass iakttagelse: entiteterna i dessa rapporter är inte lika svåra. En biopsiomnämning skrivs på en handfull stabila sätt; ett läkemedelsnamn kan dyka upp i hundra former. Så i stället för en modell för allt mäter DEMNE varje entitetstyp och skickar den till den lättaste metod som är tillräckligt tillförlitlig &mdash; en deterministisk regel, en finjusterad transformer, eller en LLM endast som sista utväg.</p><p>Mätningen består av fem korpusmått beräknade ur annoteringarna: hur mallbar ytformen är, hur homogent ordförrådet är, om en liten nyckelordsmängd är diskriminerande, hur ofta omnämnandet ligger under negation eller motsägelse, och om det alls finns tillräckligt med märkt data för att träna en övervakad modell. En deterministisk beslutsgraf gör dessa tal till en nivå, och dess 17 tröskelvärden kalibreras med en flermålssökning som bestraffar att skicka en entitet till en alltför svag metod dubbelt så hårt som till en bara alltför dyr.</p><h2>Vad det ger</h2><p>På den onkologiska kalibreringsmängden (59 entitetstyper) stämmer dirigeringen med expertreferensnivån med en konkordans på 0,954 och en leave-one-corpus-out-skattning på 0,866 &mdash; långt över varje baslinje med fast nivå (alltid-regler når 0,729, alltid-LLM 0,148). Det mer övertygande testet är externt: tillämpad utan omjustering på 300 DT-rapporter från AP-HP, för cancerlokaler modellen aldrig sett, dirigerade DEMNE 99,5 % av de markerade omnämnandena (411 av 413) till deterministiska regler. Dessa regler nådde ett medel-F1 på 0,941, medan en transformer finjusterad på samma entiteter inom en realistisk sjukhusbudget stannade på 0,358.</p><p>Med andra ord: för de standardiserade entiteter som dominerar onkologisk rapportering var regler inte bara billigare &mdash; de var bättre, och varje regelbeslut går att spåra till ett explicit villkor, precis vad artiklarna 12 och 14 i EU AI Act kräver.</p><h2>Var det stannar</h2><p>Jag vill vara ärlig om gränserna. Referensstandarden är liten &mdash; 92 entitetstyper, 59 av dem inom onkologi &mdash; så poäng på en enda korpus är optimistiska och bara relativa jämförelser håller. LLM-nivån utvärderades aldrig från början till slut på den externa kohorten; dess enda dirigerade entitet var för sällsynt. Och kalibreringen överförs inte mellan domäner: byter man klinisk genre eller språk faller konkordansen till 0,45&ndash;0,73, så trösklarna måste justeras om. DEMNE är ett genomförbarhetsbevis, inte en färdig produkt.</p><h2>Varför det spelar roll</h2><p>Poängen är inte att regler slår transformrar. Poängen är att &bdquo;vilken metod&ldquo; är en fråga man kan besvara per entitet, utifrån mätbara egenskaper hos texten, i stället för att som standard välja den tyngsta modellen och hoppas. För klinisk NLP &mdash; där kostnad, granskbarhet och tillit betyder något samtidigt &mdash; är den infallsvinkeln värd mer än ännu en procentenhet på ett riktmärke.</p><p>Koden och hela metoden finns på <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; manuskriptet är under arbete.</p>` },
      { status: 'Publicerad · okt. 2026', title: 'Stegvis extraktion kontra en enda stor modell', body: 'Argumentet för att dirigera entiteter genom regler och en finjusterad transformer innan man alls anropar en LLM — och vad det kostar att göra fel.', content: `<p>Ge ett team ett svårt NLP-problem i dag, och reflexen är att ta till den största tillgängliga modellen och låta den reda ut allt. På fransk klinisk text är den reflexen dyr, långsam och svår att granska &mdash; och, visar det sig, inte ens den mest exakta. DEMNE satsar på motsatsen: skicka varje entitetstyp till det lättaste verktyg som klarar den, och eskalera bara när texten verkligen kräver det.</p><h2>En trappa, inte en hammare</h2><p>Pipelinen har tre nivåer. Deterministiska regler &mdash; regex och kuraterade lexikon &mdash; tar entiteterna som skrivs på en handfull stabila sätt: datum, doser, standardförkortningar för biomarkörer. En transformer finjusterad på fransk onkologisk text hanterar entiteterna som kräver verklig semantisk och domänmässig förståelse. En LLM sitter överst, reserverad för de verkligt tvetydiga fallen som överlever båda tidigare steg. Inget klättrar högre än det behöver.</p><h2>Varför inte bara LLM:en?</h2><p>För att en enda stor modell betalar LLM:ens pris på varje entitet, även de som en regex hade klarat direkt. Den är långsammare, kräver en GPU-budget som de flesta sjukhus inte har, och varje beslut är en svart låda som du ändå måste försvara inför en kliniker eller granskare. Och på själva dirigeringsuppgiften var alltid-LLM-baslinjen den sämsta och höll bara med expertnivån 0,148 av gångerna. Det tyngsta verktyget är inte automatiskt det mest tillförlitliga.</p><h2>Vad felaktig dirigering kostar</h2><p>Stegvis extraktion lönar sig bara om dirigeringen är bra, så det är där DEMNE lägger sin omsorg. Fem mått uppmätta ur annoteringarna matar en deterministisk beslutsgraf vars 17 tröskelvärden kalibreras med en flermålssökning. Målet är medvetet asymmetriskt: att skicka en entitet till en alltför svag metod bestraffas dubbelt så hårt som till en bara alltför dyr &mdash; för en missad extraktion i en klinisk rapport kostar mer än en bortkastad GPU-sekund.</p><h2>Vad siffrorna säger</h2><p>På den onkologiska kalibreringsmängden stämmer dirigeringen med expertreferensnivån 0,954 av gångerna, mot 0,729 för alltid-regler och 0,148 för alltid-LLM. Tillämpad orörd på 300 osedda AP-HP-rapporter dirigerade den 99,5 % av omnämnandena till deterministiska regler, som nådde ett medel-F1 på 0,941 &mdash; där en transformer finjusterad inom en realistisk sjukhusbudget stannade på 0,358. För de standardiserade entiteter som dominerar dessa rapporter var den billiga nivån också den exakta.</p><h2>När en enda modell är rätt svar</h2><p>Stegindelning är inte gratis: den lägger till ett dirigeringslager att bygga, mäta och underhålla, och trösklarna måste omkalibreras för varje ny domän. Om texten är enhetlig, entiteterna lika svåra, eller det finns budget och granskningstolerans för en enda stor modell, är trappan bara overhead. Påståendet här är smalt &mdash; när kostnad, latens och spårbarhet betyder något samtidigt, som i klinisk NLP, slår beslut per entitet att som standard välja den tyngsta modellen och hoppas.</p><p>Koden och hela metoden finns på <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; manuskriptet är under arbete.</p>` },
    ],
  },
  contact: {
    title: 'Låt oss prata om klinisk NLP, biomedicinsk AI, eller ett doktorandsamarbete.',
    directLabel: 'Direkt',
    elsewhereLabel: 'Andra kanaler',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Boka ett samtal',
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
    kicker: 'ESIEE Paris · Шукаю 6-місячне дослідницьке стажування · Клінічний NLP та біомедичний ШІ · з лют. 2027',
    h1Pre: 'Видобуваю біомаркери з клінічного тексту ',
    h1Accent: 'не пробуджуючи GPU',
    h1Post: '',
    sub: "Я Clément Longeac. Я створюю DEMNE — фреймворк маршрутизації, який для кожного типу сутності обирає найлегший метод, що лишається надійним: правила, трансформер або LLM. На раніше не баченій когорті AP-HP він спрямовує 99,5 % згадок до аудитованих правил з F1 0,941, тоді як донавчений трансформер досягає лише 0,358.",
    ctaResearch: 'Переглянути дослідження',
    ctaCV: 'Завантажити резюме',
    caption: 'DEMNE — Rules → Transformer → LLM, схема в реальному часі',
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
    title: 'DEMNE',
    subtitle: 'Гібридний конвеєр розпізнавання іменованих сутностей для французького онкологічного клінічного тексту.',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'Клінічний NER · французькі онкологічні корпуси',
    p1: 'Готові моделі NER суттєво програють на французькому клінічному тексті: щільні скорочення, неузгоджене форматування між лікарняними системами та термінологія біомаркерів, яка майже не трапляється в загальних навчальних даних. DEMNE вирішує це за допомогою поетапного конвеєра замість єдиної моделі — кожен етап робить те, що вміє найкраще, і переходить до важчої моделі лише за потреби.',
    p2: 'Систему донавчено на DrBERT-7GB на трьох різних французьких онкологічних корпусах, і вона орієнтована на сім пріоритетних типів сутностей-біомаркерів, які використовуються у звітності, релевантній для лікування.',
    tags: ['Клінічний NLP', 'Трансформери', 'DrBERT-7GB', 'Французька онкологія'],
    viewRepo: 'Переглянути репозиторій',
    readMethodology: 'Читати методологію',
    pipeline: [
      { num: '01', title: 'Етап на основі правил', body: 'Зіставлення за регулярними виразами та словниками недорого вловлює сутності з високою впевненістю та низькою неоднозначністю — дати, дозування, стандартні скорочення біомаркерів.' },
      { num: '02', title: 'Вилучення за допомогою трансформера', body: 'DrBERT-7GB, донавчений на трьох онкологічних корпусах, обробляє сутності, що потребують справжнього семантичного та предметного розуміння.' },
      { num: '03', title: 'Арбітраж LLM', body: 'Залишкові конфлікти та граничні випадки направляються на етап LLM для остаточного усунення неоднозначності перед виводом.' },
    ],
    aiAct: {
      title: 'Регуляторна відповідність — EU AI Act',
      body: 'Вилучення клінічних сутностей з медичних записів пацієнтів однозначно потрапляє до категорії високого ризику EU AI Act. Поетапна архітектура DEMNE враховує статті 12 та 14 з самого початку, а не додає їх заднім числом.',
      articles: [
        { code: 'Ст. 12', label: 'Ведення записів', desc: 'Кожне рішення про вилучення можна простежити до етапу (правила, трансформер або LLM) та оцінки впевненості, яка його породила, що дає змогу автоматично вести журнал аудиту.' },
        { code: 'Ст. 14', label: 'Людський нагляд', desc: 'Результати арбітражу LLM позначаються для перевірки клініцистом, а не приймаються мовчки, що зберігає участь людини у неоднозначних випадках.' },
      ],
    },
  },
  metrics: {
    label: 'Результати',
    title: 'Що дає поетапний підхід',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — Досвід',
    title: 'Де досі відбувалася робота',
    currentLabel: 'Триває',
    items: [
      {
        date: 'Трав. – лип. 2026',
        title: 'Стажер-дослідник, клінічне сховище даних',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'Застосував і валідував підхід маршрутизації DEMNE на лікарняних даних: вилучення онкологічних біомаркерів (ER, PR, HER2, Ki67, FISH) із французьких клінічних звітів і визначення аудитованого, реалістичного для впровадження клінічного шляху.',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'Жовт. 2025 – трав. 2026',
        title: 'Студент-дослідник, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'Спроєктував DEMNE — гібридний клінічний NER-конвеєр (правила / transformer / LLM) для французьких онкологічних текстів, керований п’ятьма формалізованими метриками корпусів; ключовий проєкт треку Tremplin Recherche перед подачею на PhD.',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – Дотепер',
        title: 'Product Lead і розробник, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'Створення платформи, що дає пацієнтам із травмами мозку й ерготерапевтам структурований спосіб порівнювати інструменти когнітивної компенсації. Починалася як прототип на Python/Streamlit на хакатоні SN@SU (Sorbonne Université, разом із Flor Sanchez-Luizard, ерготерапевткою в UEROS L’ADAPT Île-de-France); зараз окреслюється продакшн-перебудова (FastAPI, PostgreSQL, Next.js) із хостингом, сумісним із HDS/GDPR, і семантичним пошуковим рушієм для добору клінічних інструментів.',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'Студент-інженер — Data Science та ШІ',
        org: 'ESIEE Paris',
        body: 'Студент п’ятого курсу п’ятирічної інженерної програми ESIEE Paris, спеціалізація Data Science та ШІ (DSIA).',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'Інженер-стажер, відділ GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'Розробка autopkgtests на OpenCL для перевірки сумісності GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) в інфраструктурі Debian/ROCm на GitLab Salsa.',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – Дотепер',
        title: 'Репетитор із точних наук',
        org: 'Complétude',
        body: 'Викладання математики та фізики-хімії приблизно десятьом учням, від початкової школи до випускного класу, паралельно з інженерним навчанням.',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'Червень 2026 · Хакатон SN@SU',
        title: 'NeuroStep',
        description:
          'Каталог цифрових інструментів когнітивної компенсації для людей із травмами мозку та їхніх ерготерапевтів.',
        longBody:
          'NeuroStep розпочався на хакатоні SN@SU (Sorbonne Université). Ерготерапевти та пацієнти знаходять застосунки для спілкування, пам’яті й планування, не переглядаючи крамниці застосунків по одній: кожен інструмент внесено до каталогу, класифіковано за розладом і темою та доступно для пошуку.\nMVP — це застосунок на Streamlit зі сховищем JSON; наразі окреслюється продакшн-перебудова з FastAPI, PostgreSQL і фронтендом на Next.js.',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'Груд. 2025 · Командний проєкт',
        title: 'Air Quality Dashboard',
        description:
          'Інтерактивна панель, що реконструює 15 років фонового забруднення повітря у Франції (2000–2015).',
        longBody:
          'Конвеєр даних та інтерактивна панель за показниками INERIS на рівні комун (Zenodo). Скрипти завантажують, очищають і зберігають дані в SQLite; панель показує теплову карту забруднення на Leaflet із повзунком року та фільтрами забруднювачів, поряд із графіками Plotly.\nСтворено з товаришем по команді William Zee.',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · Навчальний проєкт',
        title: 'Face Recognition with Deep Learning',
        description:
          'Розпізнавання облич на основі CNN на статичних зображеннях, а потім на відео, з аугментацією даних і вирівнюванням обличчя.',
        longBody:
          'Навчальний проєкт із сучасного розпізнавання облич. Перша модель, навчена лише на 218 зображеннях, сильно перенавчалася; аугментація даних (поворот, масштабування) і крок вирівнювання обличчя, що нормалізує положення очей і губ, у поєднанні з попередньо навченою мережею покращили узагальнення. Мета — виявляти обличчя на відео з власного набору даних проєкту.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · Парний проєкт',
        title: 'TBA — Text Adventure Game',
        description:
          'Текстова пригодницька гра для термінала на Python з об’єктно-орієнтованим дизайном.',
        longBody:
          'Текстова пригода в терміналі: гравець переходить між вісьмома кімнатами, вводячи команди. Код поділено на невеликі класи з єдиною відповідальністю (гра, кімната, гравець, команда, дія, персонаж, предмет), тож додавання кімнати чи предмета лишається локальною зміною.\nСтворено з Anne-Colombe André в ESIEE Paris.',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'Лют. 2025 · Командний проєкт',
        title: 'Marmiton Data Intelligence',
        description:
          'Платформа аналітики кулінарних даних: скрапінг, ETL і панель за даними рецептів.',
        longBody:
          'Командний проєкт з інженерії даних, що скрапить дані рецептів із Marmiton, запускає ETL-конвеєр і подає результати через аналітичну панель. Створено на Python із ноутбуками Jupyter для дослідження.',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'Скрипти autopkgtest, що перевіряють наукове ПЗ на GPU AMD в CI-інфраструктурі Debian.',
        longBody:
          'Чотиримісячне стажування у відділі Div/Exp GRADES у Synchrotron SOLEIL під керівництвом Emmanuel Farhi та Frédéric-Emmanuel Picca. Мета — зменшити залежність стека наукових обчислень від NVIDIA/CUDA, перевіривши, чи працюють наукові пакети Debian на GPU AMD через ROCm.\nЯ написав autopkgtests мовою OpenCL і перевіряв збірки в контейнері podman+ROCm (через sbuild), а потім відправляв їх в апстрим до GitLab Salsa Debian. Автотести ROCm додано для PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx та sasmodels; пакети без коду OpenCL (genx, examl) або застряглі на незавершеній міграції Python 2→3 (pysph) було відсіяно. Це перший набір цеглинок, що допомагає всій науковій спільноті Debian перейти з NVIDIA на AMD.',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'Опубліковано · жовт. 2026', title: 'Чому французький клінічний NER ламає універсальні моделі', body: 'Огляд того, де стандартні конвеєри NER зазнають невдачі на французьких онкологічних звітах, і що це означає для структури DEMNE.', content: `<p>Відкрийте французький онкологічний звіт &mdash; і більшість готових NER-моделей спотикаються вже на першому реченні. Лексика щільна й скорочена (ER, PR, HER2, Ki67, FISH), форматування змінюється від лікарні до лікарні, а важлива термінологія біомаркерів майже відсутня в корпусах, на яких ці моделі навчалися. Звичний рефлекс &mdash; кинути на задачу велику модель &mdash; працює, але він дорогий, непрозорий і важкий для обґрунтування перед клініцистом чи аудитором.</p><h2>Не кожній сутності потрібен LLM</h2><p>DEMNE виходить із простого спостереження: сутності в цих звітах не однаково складні. Згадка про біопсію пишеться кількома сталими способами; назва ж препарату може траплятися в сотні форм. Тож замість однієї моделі на все DEMNE вимірює кожен тип сутності й спрямовує його до найлегшого достатньо надійного методу &mdash; детермінованого правила, доналаштованого transformer або LLM лише як крайній засіб.</p><p>Вимірювання &mdash; це п’ять корпусних метрик, обчислених з анотацій: наскільки шаблонною є поверхнева форма, наскільки однорідна лексика, чи є невеликий набір ключових слів розрізнювальним, як часто згадка опиняється під запереченням чи суперечністю, і чи є взагалі достатньо розмічених даних, щоб навчити кероване модель. Детермінований граф рішень перетворює ці числа на рівень, а його 17 порогів калібрують багатокритеріальним пошуком, що вдвічі суворіше карає відправлення сутності до заслабкого методу, ніж до просто задорогого.</p><h2>Що це дає</h2><p>На онкологічному калібрувальному наборі (59 типів сутностей) маршрутизація збігається з експертним еталонним рівнем із узгодженістю 0,954 та оцінкою leave-one-corpus-out 0,866 &mdash; значно вище за будь-яку базову стратегію з фіксованим рівнем (завжди-правила дає 0,729, завжди-LLM 0,148). Переконливіший тест &mdash; зовнішній: застосований без переналаштування до 300 КТ-звітів AP-HP для раніше не бачених локалізацій раку, DEMNE спрямував 99,5 % виділених згадок (411 із 413) до детермінованих правил. Ці правила досягли середнього F1 0,941, тоді як transformer, доналаштований на тих самих сутностях за реалістичного лікарняного бюджету, дійшов лише до 0,358.</p><p>Інакше кажучи: для стандартизованих сутностей, що домінують в онкологічній звітності, правила були не лише дешевшими &mdash; вони були кращими, і кожне рішення правила простежується до явної умови, саме цього й вимагають статті 12 і 14 EU AI Act.</p><h2>Де він зупиняється</h2><p>Хочу бути чесним щодо меж. Еталонний стандарт малий &mdash; 92 типи сутностей, 59 із них в онкології &mdash; тож оцінки на одному корпусі оптимістичні, і чинними є лише відносні порівняння. Рівень LLM ніколи не оцінювався наскрізно на зовнішній когорті; його єдина спрямована сутність була надто рідкісною. А калібрування не переноситься між доменами: на іншому клінічному жанрі чи мові узгодженість падає до 0,45&ndash;0,73, тож пороги доводиться переналаштовувати. DEMNE &mdash; це доказ здійсненності, а не завершений продукт.</p><h2>Чому це важливо</h2><p>Ідеться не про те, що правила перемагають transformer’и. Ідеться про те, що &laquo;який метод&raquo; &mdash; це питання, на яке можна відповісти для кожної сутності, виходячи з вимірних властивостей тексту, а не обирати за замовчуванням найважчу модель і сподіватися. Для клінічного NLP &mdash; де вартість, аудитованість і довіра важливі водночас &mdash; таке формулювання варте більше, ніж іще один відсотковий пункт на бенчмарку.</p><p>Код і повний метод &mdash; на <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; рукопис готується.</p>` },
      { status: 'Опубліковано · жовт. 2026', title: 'Поетапне вилучення проти однієї великої моделі', body: 'Аргументація на користь маршрутизації сутностей через правила та донавчений трансформер, перш ніж взагалі викликати LLM — і якою є ціна помилки в цьому.', content: `<p>Передайте сьогодні команді складну задачу NLP &mdash; і рефлекс полягає в тому, щоб узяти найбільшу доступну модель і дати їй усе розв’язати. На французькому клінічному тексті цей рефлекс дорогий, повільний і важкий для аудиту &mdash; і, як виявляється, навіть не найточніший. DEMNE робить протилежну ставку: надсилати кожен тип сутності до найлегшого інструмента, що з нею впорається, і підвищувати рівень лише тоді, коли текст справді цього вимагає.</p><h2>Сходи, а не молоток</h2><p>Конвеєр має три рівні. Детерміновані правила &mdash; регулярні вирази та відібрані лексикони &mdash; беруть сутності, записані кількома сталими способами: дати, дозування, стандартні скорочення біомаркерів. Трансформер, донавчений на французькому онкологічному тексті, опрацьовує сутності, що потребують справжнього семантичного й доменного розуміння. LLM стоїть на вершині, залишений для справді неоднозначних випадків, що пережили обидва попередні етапи. Ніщо не піднімається вище, ніж потрібно.</p><h2>Чому не лише LLM?</h2><p>Бо одна велика модель платить ціну LLM за кожну сутність, зокрема за ті, що регулярний вираз розв’язав би миттєво. Вона повільніша, потребує бюджету GPU, якого більшість лікарень не має, і кожне рішення &mdash; чорна скринька, яку все одно треба обґрунтувати перед клініцистом чи аудитором. А на самій задачі маршрутизації базова стратегія завжди-LLM була найгіршою, збігаючись з експертним рівнем лише у 0,148 випадків. Найважчий інструмент не є автоматично найнадійнішим.</p><h2>Ціна хибної маршрутизації</h2><p>Поетапне вилучення окупається лише за доброї маршрутизації, тож саме туди DEMNE вкладає свою ретельність. П’ять метрик, виміряних з анотацій, живлять детермінований граф рішень, 17 порогів якого калібрує багатокритеріальний пошук. Ціль навмисно асиметрична: надіслати сутність до заслабкого методу карається вдвічі суворіше, ніж до просто задорогого &mdash; адже пропущене вилучення в клінічному звіті коштує більше, ніж змарнована секунда GPU.</p><h2>Що кажуть цифри</h2><p>На онкологічному калібрувальному наборі маршрутизація збігається з експертним еталонним рівнем у 0,954 проти 0,729 у завжди-правил і 0,148 у завжди-LLM. Застосована без змін до 300 не бачених раніше звітів AP-HP, вона спрямувала 99,5 % згадок до детермінованих правил, що досягли середнього F1 0,941 &mdash; тоді як трансформер, донавчений за реалістичного лікарняного бюджету, дійшов лише до 0,358. Для стандартизованих сутностей, що домінують у цих звітах, найдешевший рівень був і найточнішим.</p><h2>Коли одна модель &mdash; правильна відповідь</h2><p>Етапність не безкоштовна: вона додає шар маршрутизації, який треба побудувати, виміряти й підтримувати, а пороги доводиться перекалібровувати для кожного нового домену. Якщо текст однорідний, сутності однаково складні або є бюджет і аудиторська терпимість до однієї великої моделі, сходи &mdash; лише накладні витрати. Твердження тут вузьке &mdash; коли вартість, затримка та простежуваність важливі водночас, як у клінічному NLP, рішення щодо кожної сутності краще, ніж за замовчуванням брати найважчу модель і сподіватися.</p><p>Код і повний метод &mdash; на <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a>; рукопис готується.</p>` },
    ],
  },
  contact: {
    title: 'Поговорімо про клінічний NLP, біомедичний ШІ або співпрацю в межах докторантури.',
    directLabel: 'Напряму',
    elsewhereLabel: 'Деінде',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'Запланувати дзвінок',
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
    kicker: 'ESIEE Paris · กำลังหาการฝึกงานวิจัย 6 เดือน · NLP ทางคลินิก & AI ชีวการแพทย์ · ตั้งแต่ ก.พ. 2027',
    h1Pre: 'สกัดไบโอมาร์กเกอร์จากข้อความทางคลินิก ',
    h1Accent: 'โดยไม่ต้องปลุก GPU',
    h1Post: '',
    sub: "ผมคือ Clément Longeac ผมสร้าง DEMNE เฟรมเวิร์กการกำหนดเส้นทางที่เลือกวิธีที่เบาที่สุดซึ่งยังคงเชื่อถือได้สำหรับเอนทิตีแต่ละประเภท ได้แก่ กฎเกณฑ์ transformer หรือ LLM บนคอฮอร์ต AP-HP ที่ไม่เคยเห็นมาก่อน มันกำหนดเส้นทาง 99.5% ของการกล่าวถึงไปยังกฎที่ตรวจสอบได้ด้วย F1 0.941 ขณะที่ transformer ที่ปรับละเอียดทำได้เพียง 0.358",
    ctaResearch: 'ดูงานวิจัย',
    ctaCV: 'ดาวน์โหลดเรซูเม่',
    caption: 'DEMNE — Rules → Transformer → LLM แผนผังแบบสด',
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
    title: 'DEMNE',
    subtitle: 'ไปป์ไลน์การรู้จำเอนทิตีที่มีชื่อแบบไฮบริดสำหรับข้อความทางคลินิกด้านมะเร็งวิทยาภาษาฝรั่งเศส',
    h3: 'Determination of Extraction Methods for Named Entities',
    tagline: 'NER ทางคลินิก · คลังข้อมูลมะเร็งวิทยาภาษาฝรั่งเศส',
    p1: 'โมเดล NER สำเร็จรูปมักล้มเหลวอย่างหนักกับข้อความทางคลินิกภาษาฝรั่งเศส: คำย่อที่หนาแน่น รูปแบบที่ไม่สอดคล้องกันระหว่างระบบโรงพยาบาล และคำศัพท์ตัวบ่งชี้ทางชีวภาพที่แทบไม่ปรากฏในข้อมูลฝึกฝนทั่วไป DEMNE แก้ปัญหานี้ด้วยไปป์ไลน์แบบขั้นตอนแทนที่จะใช้โมเดลเดียว — แต่ละขั้นตอนจัดการสิ่งที่มันทำได้ดีที่สุด และจะยกระดับไปยังโมเดลที่หนักกว่าเมื่อจำเป็นเท่านั้น',
    p2: 'ระบบนี้ปรับแต่ง DrBERT-7GB บนคลังข้อมูลมะเร็งวิทยาภาษาฝรั่งเศสสามชุดที่แตกต่างกัน และมุ่งเป้าไปที่เอนทิตีตัวบ่งชี้ทางชีวภาพเจ็ดประเภทสำคัญที่ใช้ในรายงานที่เกี่ยวข้องกับการรักษา',
    tags: ['NLP ทางคลินิก', 'Transformer', 'DrBERT-7GB', 'มะเร็งวิทยาฝรั่งเศส'],
    viewRepo: 'ดูรีพอสิทอรี',
    readMethodology: 'อ่านวิธีการ',
    pipeline: [
      { num: '01', title: 'ขั้นตอนที่ใช้กฎเกณฑ์', body: 'การจับคู่ด้วย regex และพจนานุกรมช่วยดักจับเอนทิตีที่มีความเชื่อมั่นสูงและความกำกวมต่ำด้วยต้นทุนต่ำ เช่น วันที่ ขนาดยา คำย่อมาตรฐานของตัวบ่งชี้ทางชีวภาพ' },
      { num: '02', title: 'การสกัดด้วย Transformer', body: 'DrBERT-7GB ที่ปรับแต่งบนคลังข้อมูลมะเร็งวิทยาสามชุด จัดการกับเอนทิตีที่ต้องการความเข้าใจเชิงความหมายและโดเมนอย่างแท้จริง' },
      { num: '03', title: 'การตัดสินด้วย LLM', body: 'ข้อขัดแย้งที่เหลือและกรณีชายขอบจะถูกส่งไปยังขั้นตอน LLM เพื่อขจัดความกำกวมขั้นสุดท้ายก่อนส่งออกผลลัพธ์' },
    ],
    aiAct: {
      title: 'ความสอดคล้องด้านกฎระเบียบ — EU AI Act',
      body: 'การสกัดเอนทิตีทางคลินิกจากเวชระเบียนผู้ป่วยจัดอยู่ในหมวดความเสี่ยงสูงของ EU AI Act อย่างชัดเจน การออกแบบแบบขั้นตอนของ DEMNE คำนึงถึงมาตรา 12 และ 14 ตั้งแต่ต้น ไม่ใช่เพิ่มเข้ามาภายหลัง',
      articles: [
        { code: 'มาตรา 12', label: 'การเก็บบันทึก', desc: 'ทุกการตัดสินใจในการสกัดข้อมูลสามารถตรวจสอบย้อนกลับไปยังขั้นตอน (กฎเกณฑ์, Transformer หรือ LLM) และคะแนนความเชื่อมั่นที่สร้างมันขึ้นมา ทำให้สามารถบันทึกข้อมูลตรวจสอบได้โดยอัตโนมัติ' },
        { code: 'มาตรา 14', label: 'การกำกับดูแลโดยมนุษย์', desc: 'ผลลัพธ์จากการตัดสินของ LLM จะถูกทำเครื่องหมายเพื่อให้แพทย์ตรวจสอบ แทนที่จะยอมรับโดยเงียบๆ ทำให้มนุษย์ยังคงมีบทบาทในกรณีที่กำกวม' },
      ],
    },
  },
  metrics: {
    label: 'ผลลัพธ์',
    title: 'สิ่งที่แนวทางแบบขั้นตอนมอบให้',
    items: [
      { value: 99.5, decimals: 1, suffix: '%', color: 'cyan', label: 'of mentions routed to rules (unseen AP-HP cohort, 411/413)' },
      { value: 0.941, decimals: 3, suffix: '', color: 'violet', label: 'rule F1 vs 0.358 for a fine-tuned DrBERT' },
      { value: 0.866, decimals: 3, suffix: '', color: 'text', label: 'leave-one-corpus-out routing concordance' },
    ],
  },
  experience: {
    label: '03 — ประสบการณ์',
    title: 'สถานที่ที่งานได้ดำเนินมาจนถึงตอนนี้',
    currentLabel: 'กำลังดำเนินการ',
    items: [
      {
        date: 'พ.ค. – ก.ค. 2026',
        title: 'นักวิจัยฝึกงาน, คลังข้อมูลคลินิก',
        org: 'AP-HP (Assistance Publique – Hôpitaux de Paris)',
        body: 'ประยุกต์และตรวจสอบแนวทางการกำหนดเส้นทางของ DEMNE บนข้อมูลโรงพยาบาล: สกัดตัวบ่งชี้ทางชีวภาพด้านมะเร็ง (ER, PR, HER2, Ki67, FISH) จากรายงานคลินิกภาษาฝรั่งเศส และกำหนดเส้นทางทางคลินิกที่ตรวจสอบย้อนหลังได้และสมจริงต่อการนำไปใช้งาน',
        skills: ['Clinical NLP', 'EDS-NLP', 'BRAT / CoNLL', 'Python', 'DrBERT'],
      },
      {
        date: 'ต.ค. 2025 – พ.ค. 2026',
        title: 'นักวิจัยนักศึกษา, Tremplin Recherche',
        org: 'ESIEE Paris · LBA (Aix-Marseille) · AP-HP',
        body: 'ออกแบบ DEMNE ไปป์ไลน์ NER ทางคลินิกแบบผสม (กฎ / transformer / LLM) สำหรับข้อความมะเร็งวิทยาภาษาฝรั่งเศส ขับเคลื่อนด้วยห้าเมตริกคลังข้อมูลที่ถูกจัดรูปแบบอย่างเป็นทางการ — โครงการหลักของเส้นทาง Tremplin Recherche ก่อนการสมัครปริญญาเอก',
        skills: ['Python', 'Hugging Face', 'DrBERT', 'pycrfsuite', 'eco2ai', 'BRAT / CoNLL', 'Optuna'],
      },
      {
        current: true, date: '2026 – ปัจจุบัน',
        title: 'Product Lead และนักพัฒนา, NeuroStep',
        org: 'Junior Entreprise ESIEE Paris',
        body: 'สร้างแพลตฟอร์มที่ให้ผู้ป่วยบาดเจ็บทางสมองและนักกิจกรรมบำบัดเปรียบเทียบเครื่องมือชดเชยการรู้คิดได้อย่างเป็นระบบ เริ่มต้นเป็นต้นแบบ Python/Streamlit ที่แฮกกาธอน SN@SU (Sorbonne Université ร่วมกับ Flor Sanchez-Luizard นักกิจกรรมบำบัดที่ UEROS L’ADAPT Île-de-France) ขณะนี้กำลังกำหนดขอบเขตการสร้างใหม่ระดับโปรดักชัน (FastAPI, PostgreSQL, Next.js) ด้วยโฮสติงที่สอดคล้องกับ HDS/GDPR และเครื่องมือค้นหาเชิงความหมายสำหรับการจับคู่เครื่องมือทางคลินิก',
        skills: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL', 'Next.js'],
      },
      {
        date: '2024 – 2027',
        title: 'นักศึกษาวิศวกรรม — วิทยาการข้อมูลและ AI',
        org: 'ESIEE Paris',
        body: 'นักศึกษาชั้นปีที่ห้าของหลักสูตรวิศวกรรมห้าปีที่ ESIEE Paris เชี่ยวชาญด้านวิทยาการข้อมูลและ AI (DSIA)',
        skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'C / C++'],
      },
      {
        date: '2025',
        title: 'วิศวกรฝึกงาน, ฝ่าย GRADES',
        org: 'Synchrotron SOLEIL',
        body: 'พัฒนา autopkgtest ด้วย OpenCL เพื่อตรวจสอบความเข้ากันได้ของ GPU AMD (pyopencl, nabu, ufo-filters, pyvkfft) บนโครงสร้างพื้นฐาน Debian/ROCm บน GitLab Salsa',
        skills: ['OpenCL', 'Python', 'Bash', 'Debian', 'GitLab CI', 'ROCm'],
      },
      {
        date: '2022 – ปัจจุบัน',
        title: 'ติวเตอร์สายวิทย์-คณิต',
        org: 'Complétude',
        body: 'สอนคณิตศาสตร์และฟิสิกส์-เคมีแก่นักเรียนราวสิบคน ตั้งแต่ระดับประถมจนถึงชั้นมัธยมปลายปีสุดท้าย ควบคู่กับการเรียนวิศวกรรม',
        skills: ['Mathematics', 'Physics', 'Pedagogy'],
      },
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
    more: 'Learn more →',
    items: [
      {
        date: 'มิถุนายน 2026 · แฮกกาธอน SN@SU',
        title: 'NeuroStep',
        description:
          'แคตตาล็อกเครื่องมือชดเชยการรู้คิดแบบดิจิทัลสำหรับผู้ที่มีการบาดเจ็บทางสมองและนักกิจกรรมบำบัดของพวกเขา',
        longBody:
          'NeuroStep เริ่มต้นที่แฮกกาธอน SN@SU (Sorbonne Université) นักกิจกรรมบำบัดและผู้ป่วยสามารถค้นหาแอปสำหรับการสื่อสาร ความจำ และการวางแผน โดยไม่ต้องไล่ค้นหาในสโตร์ทีละแห่ง เครื่องมือแต่ละตัวถูกจัดรายการ จำแนกตามความผิดปกติและหัวข้อ และค้นหาได้\nตัว MVP เป็นแอปพลิเคชัน Streamlit ที่มีที่เก็บข้อมูลแบบ JSON ขณะนี้กำลังกำหนดขอบเขตการสร้างใหม่ระดับโปรดักชันด้วย FastAPI, PostgreSQL และฟรอนต์เอนด์ Next.js',
        tags: ['Python', 'Streamlit', 'FastAPI', 'PostgreSQL'],
        url: 'https://github.com/longeacc/NeuroStep',
        image: '/images/projects/neurostep.jpg',
      },
      {
        date: 'ธ.ค. 2025 · โปรเจกต์ทีม',
        title: 'Air Quality Dashboard',
        description:
          'แดชบอร์ดเชิงโต้ตอบที่สร้างภาพมลพิษทางอากาศพื้นหลัง 15 ปีทั่วฝรั่งเศสขึ้นใหม่ (2000–2015)',
        longBody:
          'ไปป์ไลน์ข้อมูลและแดชบอร์ดเชิงโต้ตอบบนตัวชี้วัดระดับเทศบาลของ INERIS (Zenodo) สคริปต์ดาวน์โหลด ทำความสะอาด และจัดเก็บข้อมูลใน SQLite แดชบอร์ดแสดงแผนที่ความร้อนมลพิษด้วย Leaflet พร้อมแถบเลื่อนปีและตัวกรองมลพิษ ควบคู่กับกราฟ Plotly\nจัดทำร่วมกับเพื่อนร่วมทีม William Zee',
        tags: ['Python', 'SQLite', 'Plotly', 'Leaflet', 'pandas'],
        url: 'https://github.com/longeacc/DATA_Science_PROJECT_AirQuality_France',
        image: '/images/projects/air-quality.jpg',
      },
      {
        date: '2025 · โปรเจกต์รายวิชา',
        title: 'Face Recognition with Deep Learning',
        description:
          'การรู้จำใบหน้าด้วย CNN บนภาพนิ่งแล้วจึงเป็นวิดีโอ โดยใช้การเพิ่มข้อมูลและการจัดแนวใบหน้า',
        longBody:
          'โปรเจกต์รายวิชาเกี่ยวกับการรู้จำใบหน้าสมัยใหม่ โมเดลแรกที่ฝึกด้วยภาพเพียง 218 ภาพเกิดโอเวอร์ฟิตอย่างหนัก การเพิ่มข้อมูล (การหมุน การซูม) และขั้นตอนการจัดแนวใบหน้าที่ปรับตำแหน่งตาและริมฝีปากให้เป็นมาตรฐาน เมื่อรวมกับเครือข่ายที่ฝึกมาก่อน ช่วยให้การวางนัยทั่วไปดีขึ้น เป้าหมายคือการตรวจจับใบหน้าในวิดีโอจากชุดข้อมูลของโปรเจกต์เอง',
        tags: ['Python', 'TensorFlow', 'CNN', 'Data augmentation'],
        url: 'https://github.com/longeacc/IA-and-Deep-Learning---Modern-face-recognition-with-deep-learning-project-',
        image: '/images/projects/face.svg',
      },
      {
        date: '2025 · โปรเจกต์คู่',
        title: 'TBA — Text Adventure Game',
        description:
          'เกมผจญภัยแบบข้อความบนเทอร์มินัลที่เขียนด้วย Python ด้วยการออกแบบเชิงวัตถุ',
        longBody:
          'การผจญภัยแบบข้อความที่เล่นในเทอร์มินัล ผู้เล่นเคลื่อนที่ระหว่างแปดห้องด้วยการพิมพ์คำสั่ง โค้ดถูกแบ่งเป็นคลาสเล็ก ๆ ที่มีความรับผิดชอบเดียว (เกม ห้อง ผู้เล่น คำสั่ง การกระทำ ตัวละคร ไอเท็ม) ดังนั้นการเพิ่มห้องหรือไอเท็มจึงยังเป็นการเปลี่ยนแปลงเฉพาะจุด\nจัดทำร่วมกับ Anne-Colombe André ที่ ESIEE Paris',
        tags: ['Python', 'OOP'],
        url: 'https://github.com/longeacc/TBA-Projet-Anne-Colombe-ANDRE-Clement-LONGEAC',
        image: '/images/projects/tba.svg',
      },
      {
        date: 'ก.พ. 2025 · โปรเจกต์ทีม',
        title: 'Marmiton Data Intelligence',
        description:
          'แพลตฟอร์มวิเคราะห์ข้อมูลด้านอาหาร: การสแครป, ETL และแดชบอร์ดบนข้อมูลสูตรอาหาร',
        longBody:
          'โปรเจกต์ทีมด้านวิศวกรรมข้อมูลที่สแครปข้อมูลสูตรอาหารจาก Marmiton รันไปป์ไลน์ ETL และนำเสนอผลผ่านแดชบอร์ดวิเคราะห์ พัฒนาด้วย Python พร้อมโน้ตบุ๊ก Jupyter สำหรับการสำรวจ',
        tags: ['Python', 'Scraping', 'ETL', 'Jupyter'],
        url: 'https://github.com/william-zee/Projet_Data_Engineering',
        image: '/images/projects/marmiton.svg',
      },
      {
        date: '2025 · Synchrotron SOLEIL',
        title: 'Debian ROCm CI',
        description:
          'สคริปต์ autopkgtest ที่ตรวจสอบซอฟต์แวร์วิทยาศาสตร์บน GPU ของ AMD บนโครงสร้างพื้นฐาน CI ของ Debian',
        longBody:
          'การฝึกงาน 4 เดือนในแผนก Div/Exp GRADES ที่ Synchrotron SOLEIL ภายใต้การดูแลของ Emmanuel Farhi และ Frédéric-Emmanuel Picca เป้าหมายคือลดการพึ่งพา NVIDIA/CUDA ของสแต็กการคำนวณเชิงวิทยาศาสตร์ โดยทดสอบว่าแพ็กเกจวิทยาศาสตร์ของ Debian ทำงานบน GPU ของ AMD ผ่าน ROCm ได้หรือไม่\nผมเขียน autopkgtest ด้วย OpenCL และตรวจสอบการ build ในคอนเทนเนอร์ podman+ROCm (ผ่าน sbuild) จากนั้นส่งขึ้น upstream ไปยัง GitLab Salsa ของ Debian มีการเพิ่มออโตเทสต์ ROCm ให้กับ PyOpenCL, Nabu, Ufo-filters, clpeak, pyvkfft, gpyfft, silx และ sasmodels ส่วนแพ็กเกจที่ไม่มีโค้ด OpenCL (genx, examl) หรือติดอยู่กับการย้าย Python 2→3 ที่ยังไม่เสร็จ (pysph) ถูกคัดออก นี่คือชุดชิ้นส่วนพื้นฐานชุดแรกที่ช่วยให้ชุมชนวิทยาศาสตร์ Debian ทั้งหมดย้ายจาก NVIDIA ไปยัง AMD',
        tags: ['OpenCL', 'ROCm', 'autopkgtest', 'sbuild', 'Debian', 'GitLab Salsa'],
        url: 'https://salsa.debian.org/Clement_LONGEAC',
        image: '/images/projects/debian-rocm-ci.svg',
        report: '/Longeac_2025_RapportStage_SynchrotronSOLEIL.pdf',
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
          ['Regex/lexicon design', 'Optuna (NSGA-II)', 'BRAT / CoNLL'],
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
      { status: 'เผยแพร่ · ต.ค. 2026', title: 'ทำไม NER ทางคลินิกภาษาฝรั่งเศสจึงทำให้โมเดลทั่วไปล้มเหลว', body: 'ภาพรวมของจุดที่ไปป์ไลน์ NER มาตรฐานล้มเหลวในรายงานมะเร็งวิทยาภาษาฝรั่งเศส และความหมายของสิ่งนี้ต่อโครงสร้างของ DEMNE', content: `<p>เปิดรายงานมะเร็งวิทยาภาษาฝรั่งเศสขึ้นมา โมเดล NER สำเร็จรูปส่วนใหญ่สะดุดตั้งแต่ประโยคแรก คำศัพท์หนาแน่นและใช้ตัวย่อ (ER, PR, HER2, Ki67, FISH) รูปแบบการจัดพิมพ์เปลี่ยนไปในแต่ละโรงพยาบาล และคำศัพท์ตัวบ่งชี้ทางชีวภาพที่สำคัญแทบไม่ปรากฏในคลังข้อมูลที่ใช้ฝึกโมเดลเหล่านี้ ปฏิกิริยาที่คุ้นเคย&mdash;&mdash;โยนโมเดลขนาดใหญ่เข้าใส่&mdash;&mdash;ก็ได้ผล แต่มีต้นทุนสูง ไม่โปร่งใส และยากจะอธิบายต่อแพทย์หรือผู้ตรวจสอบ</p><h2>ไม่ใช่ทุกเอนทิตีที่ต้องใช้ LLM</h2><p>DEMNE เริ่มจากข้อสังเกตตรงไปตรงมา: เอนทิตีในรายงานเหล่านี้ยากไม่เท่ากัน การกล่าวถึงการตัดชิ้นเนื้อเขียนได้ไม่กี่รูปแบบที่คงที่ ขณะที่ชื่อยาอาจปรากฏได้นับร้อยรูปแบบ ดังนั้นแทนที่จะใช้โมเดลเดียวกับทุกอย่าง DEMNE วัดเอนทิตีแต่ละประเภทแล้วส่งไปยังวิธีที่เบาที่สุดเท่าที่ยังเชื่อถือได้&mdash;&mdash;กฎเชิงกำหนด, transformer ที่ปรับละเอียด, หรือ LLM เป็นทางเลือกสุดท้ายเท่านั้น</p><p>การวัดคือห้าเมตริกคลังข้อมูลที่คำนวณจากคำอธิบายประกอบ: รูปผิวมีความเป็นแม่แบบเพียงใด คำศัพท์เป็นเอกพันธ์เพียงใด ชุดคำสำคัญเล็ก ๆ จำแนกได้หรือไม่ การกล่าวถึงอยู่ภายใต้การปฏิเสธหรือความขัดแย้งบ่อยเพียงใด และมีข้อมูลที่ติดป้ายกำกับเพียงพอจะฝึกโมเดลแบบมีผู้สอนหรือไม่ กราฟการตัดสินใจเชิงกำหนดจะแปลงตัวเลขเหล่านี้เป็นชั้น และ 17 ค่าขีดแบ่งของมันถูกปรับเทียบด้วยการค้นหาแบบหลายวัตถุประสงค์ ซึ่งลงโทษการส่งเอนทิตีไปยังวิธีที่อ่อนเกินไปหนักเป็นสองเท่าของการส่งไปยังวิธีที่เพียงแค่แพงเกินไป</p><h2>มันให้อะไร</h2><p>บนชุดปรับเทียบด้านมะเร็งวิทยา (เอนทิตี 59 ประเภท) การกำหนดเส้นทางสอดคล้องกับชั้นอ้างอิงของผู้เชี่ยวชาญด้วยความสอดคล้อง 0.954 และค่าประมาณแบบ leave-one-corpus-out ที่ 0.866&mdash;&mdash;สูงกว่าเส้นฐานชั้นคงที่ใด ๆ มาก (ใช้กฎเสมอได้ 0.729, ใช้ LLM เสมอได้ 0.148) การทดสอบที่น่าเชื่อถือกว่าคือการทดสอบภายนอก: เมื่อนำไปใช้โดยไม่ปรับจูนใหม่กับรายงาน CT ของ AP-HP จำนวน 300 ฉบับ ในตำแหน่งมะเร็งที่โมเดลไม่เคยเห็น DEMNE กำหนดเส้นทาง 99.5% ของการกล่าวถึงที่ถูกเน้น (411 จาก 413) ไปยังกฎเชิงกำหนด กฎเหล่านั้นได้ค่า F1 เฉลี่ย 0.941 ขณะที่ transformer ที่ปรับละเอียดบนเอนทิตีเดียวกันภายใต้งบประมาณโรงพยาบาลที่สมจริงทำได้เพียง 0.358</p><p>กล่าวอีกนัยหนึ่ง: สำหรับเอนทิตีมาตรฐานที่ครองรายงานมะเร็งวิทยา กฎไม่เพียงถูกกว่า&mdash;&mdash;แต่ยังดีกว่า และทุกการตัดสินใจของกฎสามารถสืบย้อนไปถึงเงื่อนไขที่ชัดเจน ซึ่งเป็นสิ่งที่มาตรา 12 และ 14 ของ EU AI Act เรียกร้องพอดี</p><h2>มันหยุดตรงไหน</h2><p>ผมอยากซื่อตรงเรื่องข้อจำกัด มาตรฐานอ้างอิงมีขนาดเล็ก&mdash;&mdash;เอนทิตี 92 ประเภท โดย 59 ประเภทอยู่ในมะเร็งวิทยา&mdash;&mdash;ดังนั้นคะแนนบนคลังข้อมูลเดียวจึงมองโลกในแง่ดีเกินไป และมีเพียงการเปรียบเทียบเชิงสัมพัทธ์เท่านั้นที่ยืนได้ ชั้น LLM ไม่เคยถูกประเมินแบบครบวงจรบนกลุ่มภายนอก เอนทิตีเดียวที่ถูกส่งไปนั้นหายากเกินไป และการปรับเทียบไม่ถ่ายโอนข้ามโดเมน: เมื่อย้ายไปยังประเภทคลินิกหรือภาษาอื่น ความสอดคล้องลดลงเหลือ 0.45&ndash;0.73 จึงต้องปรับค่าขีดแบ่งใหม่ DEMNE เป็นข้อพิสูจน์ความเป็นไปได้ ไม่ใช่ผลิตภัณฑ์สำเร็จรูป</p><h2>ทำไมจึงสำคัญ</h2><p>ประเด็นไม่ได้อยู่ที่กฎเอาชนะ transformer แต่อยู่ที่ &ldquo;จะใช้วิธีใด&rdquo; เป็นคำถามที่ตอบได้เป็นรายเอนทิตี จากคุณสมบัติของข้อความที่วัดได้ แทนที่จะเลือกโมเดลที่หนักที่สุดเป็นค่าตั้งต้นแล้วหวังผล สำหรับ NLP ทางคลินิก&mdash;&mdash;ที่ต้นทุน การตรวจสอบย้อนหลัง และความไว้วางใจสำคัญพร้อมกัน&mdash;&mdash;กรอบคิดนี้มีค่ามากกว่าการได้เปอร์เซ็นต์เพิ่มอีกจุดหนึ่งบนเกณฑ์มาตรฐาน</p><p>โค้ดและวิธีการฉบับเต็มอยู่ที่ <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a> ส่วนต้นฉบับบทความกำลังอยู่ระหว่างการจัดทำ</p>` },
      { status: 'เผยแพร่ · ต.ค. 2026', title: 'การสกัดแบบขั้นตอนเทียบกับโมเดลขนาดใหญ่เดี่ยว', body: 'เหตุผลในการส่งเอนทิตีผ่านกฎเกณฑ์และ Transformer ที่ปรับแต่งแล้ว ก่อนที่จะเรียกใช้ LLM เลย — และต้นทุนของความผิดพลาดในเรื่องนี้', content: `<p>วันนี้ถ้ายื่นปัญหา NLP ที่ยากให้ทีมหนึ่ง ปฏิกิริยาอัตโนมัติคือคว้าโมเดลที่ใหญ่ที่สุดเท่าที่มีแล้วปล่อยให้มันจัดการทุกอย่าง บนข้อความคลินิกภาษาฝรั่งเศส ปฏิกิริยานั้นมีต้นทุนสูง ช้า และตรวจสอบยาก &mdash; และสุดท้ายแล้วก็ไม่ได้แม่นยำที่สุดด้วยซ้ำ DEMNE เดิมพันตรงกันข้าม: ส่งเอนทิตีแต่ละประเภทไปยังเครื่องมือที่เบาที่สุดที่รับมือไหว และยกระดับก็ต่อเมื่อข้อความเรียกร้องจริง ๆ</p><h2>บันได ไม่ใช่ค้อน</h2><p>ไปป์ไลน์มีสามชั้น กฎเชิงกำหนด &mdash; regex และพจนานุกรมที่คัดสรร &mdash; รับเอนทิตีที่เขียนได้เพียงไม่กี่รูปแบบที่คงที่ เช่น วันที่ ขนาดยา และคำย่อมาตรฐานของตัวบ่งชี้ทางชีวภาพ ส่วน transformer ที่ปรับละเอียดบนข้อความมะเร็งวิทยาภาษาฝรั่งเศสรับเอนทิตีที่ต้องการความเข้าใจเชิงความหมายและเชิงโดเมนอย่างแท้จริง และ LLM อยู่บนยอด สงวนไว้สำหรับกรณีที่คลุมเครือจริง ๆ ซึ่งรอดผ่านสองขั้นก่อนหน้า ไม่มีอะไรไต่สูงเกินกว่าที่จำเป็น</p><h2>ทำไมไม่ใช้แค่ LLM?</h2><p>เพราะโมเดลใหญ่ตัวเดียวต้องจ่ายต้นทุนของ LLM ให้ทุกเอนทิตี รวมถึงอันที่ regex จัดการได้ในพริบตา มันช้ากว่า ต้องใช้งบ GPU ที่โรงพยาบาลส่วนใหญ่ไม่มี และทุกการตัดสินใจคือกล่องดำที่คุณยังต้องอธิบายต่อแพทย์หรือผู้ตรวจสอบอยู่ดี และบนงานกำหนดเส้นทางเอง เส้นฐานใช้-LLM-เสมอกลับแย่ที่สุด สอดคล้องกับชั้นผู้เชี่ยวชาญเพียง 0.148 เท่านั้น เครื่องมือที่หนักที่สุดไม่ได้เชื่อถือได้ที่สุดโดยอัตโนมัติ</p><h2>ต้นทุนของการกำหนดเส้นทางผิด</h2><p>การสกัดเป็นขั้นจะคุ้มก็ต่อเมื่อการกำหนดเส้นทางดี ดังนั้น DEMNE จึงทุ่มความใส่ใจไว้ตรงนั้น ห้าเมตริกที่วัดจากคำอธิบายประกอบป้อนเข้าสู่กราฟการตัดสินใจเชิงกำหนด ซึ่ง 17 ค่าขีดแบ่งของมันถูกปรับเทียบด้วยการค้นหาแบบหลายวัตถุประสงค์ วัตถุประสงค์ถูกออกแบบให้ไม่สมมาตรโดยตั้งใจ: การส่งเอนทิตีไปยังวิธีที่อ่อนเกินไปถูกลงโทษหนักเป็นสองเท่าของการส่งไปยังวิธีที่เพียงแค่แพงเกินไป &mdash; เพราะการสกัดที่พลาดไปในรายงานคลินิกมีราคาแพงกว่าหนึ่งวินาที GPU ที่เสียเปล่า</p><h2>ตัวเลขบอกอะไร</h2><p>บนชุดปรับเทียบด้านมะเร็งวิทยา การกำหนดเส้นทางตรงกับชั้นอ้างอิงของผู้เชี่ยวชาญที่ 0.954 เทียบกับ 0.729 ของใช้-กฎ-เสมอ และ 0.148 ของใช้-LLM-เสมอ เมื่อนำไปใช้กับรายงาน AP-HP ที่ไม่เคยเห็น 300 ฉบับโดยไม่แก้ไข มันกำหนดเส้นทาง 99.5% ของการกล่าวถึงไปยังกฎเชิงกำหนด ซึ่งได้ค่า F1 เฉลี่ย 0.941 &mdash; ขณะที่ transformer ที่ปรับละเอียดภายใต้งบประมาณโรงพยาบาลที่สมจริงทำได้เพียง 0.358 สำหรับเอนทิตีมาตรฐานที่ครองรายงานเหล่านี้ ชั้นที่ถูกที่สุดก็เป็นชั้นที่แม่นยำที่สุดด้วย</p><h2>เมื่อโมเดลเดียวคือคำตอบที่ถูกต้อง</h2><p>การแบ่งขั้นไม่ได้มาฟรี: มันเพิ่มชั้นการกำหนดเส้นทางที่ต้องสร้าง วัดผล และบำรุงรักษา และค่าขีดแบ่งต้องปรับเทียบใหม่สำหรับทุกโดเมนใหม่ หากข้อความเป็นเนื้อเดียวกัน เอนทิตียากเท่า ๆ กัน หรือมีงบและการยอมรับด้านการตรวจสอบสำหรับโมเดลใหญ่ตัวเดียว บันไดนี้ก็เป็นเพียงภาระส่วนเกิน ข้อกล่าวอ้างตรงนี้แคบ &mdash; เมื่อต้นทุน ความหน่วง และการตรวจสอบย้อนกลับสำคัญพร้อมกัน อย่างใน NLP ทางคลินิก การตัดสินใจเป็นรายเอนทิตีย่อมเหนือกว่าการเลือกโมเดลที่หนักที่สุดเป็นค่าตั้งต้นแล้วหวังผล</p><p>โค้ดและวิธีการฉบับเต็มอยู่ที่ <a href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity" target="_blank" rel="noopener">GitHub</a> ส่วนต้นฉบับบทความกำลังอยู่ระหว่างการจัดทำ</p>` },
    ],
  },
  contact: {
    title: 'มาคุยกันเรื่อง NLP ทางคลินิก, AI ชีวการแพทย์ หรือความร่วมมือด้านปริญญาเอกกันเถอะ',
    directLabel: 'ติดต่อโดยตรง',
    elsewhereLabel: 'ที่อื่น',
    email: 'contact@clement-longeac.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    bookCall: 'นัดหมายการโทร',
  },
  footer: {
    copyright: '© 2026 Clément Longeac',
    tagline: 'สร้างขึ้นด้วยไปป์ไลน์แบบไฮบริดของตัวเอง',
  },
};

export const dictionaries: Record<Lang, Dictionary> = {
  en, fr, es, de, it, pt, nl, zh, ja, ko, ru, ar, hi, tr, pl, vi, id, sv, uk, th,
};
