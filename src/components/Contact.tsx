import type { Dictionary } from '@/lib/dictionaries';
import { ConstellationBackground } from './ConstellationBackground';

export default function Contact({ dict }: { dict: Dictionary }) {
  const { contact } = dict;
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg">
        <ConstellationBackground />
        <div className="contact-bg-overlay" />
      </div>
      <div className="wrap contact-inner">
        <h2>{contact.title}</h2>
        <div className="contact-columns">
          <div className="contact-column">
            <div className="contact-column-label">{contact.directLabel}</div>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
          <div className="contact-column">
            <div className="contact-column-label">{contact.elsewhereLabel}</div>
            <div className="contact-links">
              <a href="https://github.com/longeacc" target="_blank" rel="noopener">
                {contact.github}
              </a>
              <a href="https://www.linkedin.com/in/clement-longeac" target="_blank" rel="noopener">
                {contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
