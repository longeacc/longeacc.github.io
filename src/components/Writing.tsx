import Link from 'next/link';
import type { Dictionary } from '@/lib/dictionaries';
import { pathForLang, type Lang } from '@/lib/languages';
import { slugForPost, tagsForPost } from '@/lib/blog';

export default function Writing({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const { writing } = dict;
  const home = pathForLang(lang);

  // only show posts that are actually published (have full content)
  const published = writing.posts
    .map((post, i) => ({ post, i }))
    .filter((x) => x.post.content);

  if (published.length === 0) return null;

  return (
    <section id="writing">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{writing.label}</div>
          <h2>{writing.title}</h2>
          <p>{writing.subtitle}</p>
        </div>

        <div className="writing-grid">
          {published.map(({ post, i }) => (
            <Link
              key={post.title}
              href={`${home}blog/${slugForPost(lang, i)}/`}
              className="writing-card writing-card-link"
            >
              <div className="writing-status">{post.status}</div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="post-tags">
                {tagsForPost(i).map((tag) => (
                  <span className="post-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
