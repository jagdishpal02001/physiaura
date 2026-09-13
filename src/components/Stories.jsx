import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { STORIES } from '../data/content';

export default function Stories() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % STORIES.length), 5200);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => setIdx((idx - 1 + STORIES.length) % STORIES.length);
  const next = () => setIdx((idx + 1) % STORIES.length);

  return (
    <section id="stories">
      <div className="wrap">
        <div className="stories-head rv">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">
              <span className="dot" /> Family stories
            </span>
            <h2 className="display-l">
              Recovery, <span className="hand">in their own words.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="icon-btn" onClick={prev} aria-label="Previous story">
              <ArrowLeft size={18} />
            </button>
            <button className="icon-btn" onClick={next} aria-label="Next story">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Mobile swipe carousel */}
        <div
          className="stories-swipe"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="stories-track"
            drag="x"
            dragConstraints={{ left: -(STORIES.length - 1) * 320, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
            animate={{ x: -(idx * 320) }}
            transition={{ type: 'spring', stiffness: 220, damping: 30 }}
          >
            {STORIES.map((s) => (
              <article className="story story-card" key={s.name}>
                <Stars />
                <p className="quote">{s.quote}</p>
                <div className="story-tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="story-who">
                  <img src={s.img} alt={s.name} loading="lazy" decoding="async" />
                  <span>
                    <b>{s.name}</b>
                    <small>{s.detail}</small>
                  </span>
                </div>
              </article>
            ))}
          </motion.div>
          <div className="swipe-dots" role="tablist" aria-label="Stories">
            {STORIES.map((s, i) => (
              <button
                key={s.name}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Story ${i + 1}`}
                className={i === idx ? 'active' : ''}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div
          className="stories-grid"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {STORIES.map((s, i) => (
            <article
              className={`story rv ${i === idx ? 'story-active' : ''}`}
              key={s.name}
            >
              <Stars />
              <p className="quote">{s.quote}</p>
              <div className="story-tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="story-who">
                <img src={s.img} alt={s.name} loading="lazy" decoding="async" />
                <span>
                  <b>{s.name}</b>
                  <small>{s.detail}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="small muted rv" style={{ marginTop: 14 }}>
          Names shared with consent. Photos are representative to protect privacy — stories are real,
          collected over phone follow-ups.
        </p>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div style={{ color: '#e8a93d', letterSpacing: 2, fontSize: '.9rem' }} aria-label="5 star rating">
      <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" />{' '}
      <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" />{' '}
      <Star size={14} fill="currentColor" />
    </div>
  );
}
