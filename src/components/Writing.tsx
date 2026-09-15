import type { Dictionary } from '@/lib/dictionaries';

export default function Writing({ dict }: { dict: Dictionary }) {
  const { writing } = dict;
  return (
    <section id="writing">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{writing.label}</div>
          <h2>{writing.title}</h2>
          <p>{writing.subtitle}</p>
        </div>

        <div className="writing-grid">
          {writing.posts.map((post) => (
            <div className="writing-card" key={post.title}>
              <div className="writing-status">{post.status}</div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
