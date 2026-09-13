import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { CONDITIONS, WHATSAPP_LINK } from '../data/content';

export default function Conditions() {
  const [active, setActive] = useState(CONDITIONS[0].id);
  const cur = CONDITIONS.find((c) => c.id === active);

  return (
    <section id="conditions" className="cond-section">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">
            <span className="dot" /> Conditions we treat
          </span>
          <h2 className="display-l">
            One team, five specialities. <span className="hand">All at your home.</span>
          </h2>
          <p className="lead">
            Tap a speciality to see what we actually do — not a list of Latin names, but the real work in
            your living room, bedroom and staircase.
          </p>
        </div>

        <div className="cond-layout">
          <div className="cond-tabs rv" role="tablist" aria-label="Conditions">
            {CONDITIONS.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                className={active === c.id ? 'active' : ''}
                onClick={() => setActive(c.id)}
              >
                <span className="e" aria-hidden="true">{c.emoji}</span>
                <span>
                  {c.title}
                  <small>{c.sub}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="cond-panel rv rv-d1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={cur.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cond-panel-top">
                  <div className="cond-panel-body">
                    <span className="badge-soft">
                      {cur.emoji} {cur.title} · home physio
                    </span>
                    <h3 className="display-m" style={{ marginTop: 12 }}>
                      {cur.title}
                    </h3>
                    <p className="muted" style={{ marginTop: 8 }}>
                      {cur.intro}
                    </p>
                    <div className="chips">
                      {cur.tags.map((t) => (
                        <span className="chip hot" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="cond-list">
                      {cur.points.map((p) => (
                        <li key={p}>
                          <Check size={17} strokeWidth={3} /> {p}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
                      <a className="btn btn-teal btn-sm" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                        Ask about this condition <ArrowRight size={16} />
                      </a>
                      <a className="btn btn-ghost btn-sm" href="#faq">
                        What will it cost?
                      </a>
                    </div>
                  </div>
                  <div className="cond-img-wrap">
                    <img
                      src={cur.image}
                      alt={cur.imageAlt || `${cur.title} physiotherapy at home`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
