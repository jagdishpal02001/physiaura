import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Phone } from 'lucide-react';
import { FAQS, PHONE_DISPLAY, PHONE_TEL } from '../data/content';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="wrap faq-wrap">
        <div className="rv">
          <span className="eyebrow">
            <span className="dot" /> Honest answers
          </span>
          <h2 className="display-l" style={{ margin: '16px 0 12px' }}>
            Asked by Pune families, <span className="hand">answered plainly.</span>
          </h2>
          <p className="lead">
            No “depends, visit clinic” dodges. Still unsure? One call clears more than ten Google searches.
          </p>
          <a className="btn btn-primary" href={PHONE_TEL} style={{ marginTop: 18 }}>
            <Phone size={17} /> Ask on call — {PHONE_DISPLAY}
          </a>
          <div className="divider-doodle">
            <svg width="180" height="22" viewBox="0 0 180 22" fill="none" aria-hidden="true">
              <path
                d="M3 15 C 40 5, 90 5, 177 12"
                stroke="#2c9a93"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="1 7"
              />
            </svg>
          </div>
          <p className="small muted">
            We speak Marathi, Hindi & English.
            <br />
            Elderly patients: a family member is welcome to stay on the call.
          </p>
        </div>

        <div className="rv rv-d1">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-card ${isOpen ? 'open' : ''}`} key={f.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="plus">
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-a-inner">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
