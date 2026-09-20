import Link from 'next/link';
import type { Dictionary } from '@/lib/dictionaries';
import { pathForLang, type Lang } from '@/lib/languages';
import { slugForPost } from '@/lib/blog';

export default function Writing({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const { writing } = dict;
  const home = pathForLang(lang);

  return (
    <section id="writing">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{writing.label}</div>
          <h2>{writing.title}</h2>
          <p>{writing.subtitle}</p>
        </div>

        <div className="writing-grid">
          {writing.posts.map((post, i) => (
            <Link
              key={post.title}
              href={`${home}blog/${slugForPost(lang, i)}/`}
              className="writing-card writing-card-link"
            >
              <div className="writing-status">{post.status}</div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
