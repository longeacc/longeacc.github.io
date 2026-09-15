const POSTS = [
  {
    title: 'Why French clinical NER breaks general-purpose models',
    body: 'A walkthrough of where standard NER pipelines fail on French oncology reports, and what that implies for how DEMNE is structured.',
  },
  {
    title: 'Staged extraction vs. a single large model',
    body: 'The case for routing entities through rules, a CRF, and a fine-tuned transformer before ever calling an LLM — and what it costs to get wrong.',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">04 — Writing</div>
          <h2>Notes from the research</h2>
          <p>Longer write-ups on the methods, dead ends, and decisions behind the work above.</p>
        </div>

        <div className="writing-grid">
          {POSTS.map((post) => (
            <div className="writing-card" key={post.title}>
              <div className="writing-status">Draft — coming soon</div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
