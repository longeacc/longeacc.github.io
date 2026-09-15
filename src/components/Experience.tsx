const TIMELINE = [
  {
    date: '2025 — Present',
    title: 'Research Assistant, Tremplin Recherche',
    org: 'ESIEE Paris',
    body: 'Developing DEMNE, a hybrid clinical NER pipeline for French oncology text, as the core project of the Tremplin Recherche track ahead of PhD applications.',
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
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">03 — Experience</div>
          <h2>Where the work has happened so far</h2>
        </div>

        <div className="timeline">
          {TIMELINE.map((item) => (
            <div className="tl-item" key={item.title}>
              <div className="tl-date">{item.date}</div>
              <h3>{item.title}</h3>
              <div className="tl-org">{item.org}</div>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
