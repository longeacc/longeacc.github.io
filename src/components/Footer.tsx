import type { Dictionary } from '@/lib/dictionaries';

export default function Footer({ dict }: { dict: Dictionary }) {
  const { footer } = dict;
  return (
    <footer>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '10px' }}>
        <span>{footer.copyright}</span>
        <span>{footer.tagline}</span>
      </div>
    </footer>
  );
}
