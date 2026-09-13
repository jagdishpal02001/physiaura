import { IMAGES } from '../data/content';

const timeline = [
  {
    t: '0–10’',
    h: 'Listen + history',
    p: 'Your story, reports, medicines, pain pattern, home routine. We ask about stairs, toilets, caregiving help.',
  },
  {
    t: '10–30’',
    h: 'Movement assessment',
    p: 'Strength, joint range, balance, walking, transfers. Gentle tests — nothing that spikes your pain.',
  },
  {
    t: '30–45’',
    h: 'First treatment + teaching',
    p: 'Hands-on relief plus 3–4 home exercises taught to you and family. Written plan in simple words.',
  },
  {
    t: '45–50’',
    h: 'Plan & estimate',
    p: 'Honest session range, per-visit cost, and red-flags to watch. No forced packages, ever.',
  },
];

export default function FirstVisit() {
  return (
    <section id="first-visit">
      <div className="wrap">
        <div className="visit rv">
          <div className="visit-left">
            <span className="eyebrow" style={{ background: 'rgba(255,255,255,.1)', color: '#f5efdd', borderColor: 'rgba(255,255,255,.2)' }}>
              <span className="dot" /> Your first visit
            </span>
            <h2 className="display-l" style={{ margin: '16px 0 12px', color: '#fff' }}>
              What 50 minutes at home <span className="hand" style={{ color: '#e8a93d' }}>actually look like</span>
            </h2>
            <p style={{ color: '#c8c0a8', margin: 0 }}>
              Many families hesitate — “will a stranger treat properly at home?” Here’s the exact flow our
              qualified physiotherapists follow, so you know what to expect.
            </p>
            <img
              src={IMAGES.firstVisit}
              alt="Physiotherapist doing detailed assessment with tablet during home visit"
              loading="lazy"
              decoding="async"
            />
            <div className="kit-list">
              {[
                ['👜', 'Your physio arrives with kit bag — bands, weights, hot/cold, measuring tape'],
                ['📋', 'You get a written home-plan after the visit, not just verbal advice'],
                ['👨‍👩‍👧', 'One family member is requested to sit in — for learning + comfort'],
              ].map(([e, t]) => (
                <div key={t} style={{ background: 'rgba(255,253,247,.08)', borderColor: 'rgba(255,255,255,.14)', color: '#ece5d1' }}>
                  <span>{e}</span> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="timeline">
            {timeline.map((x) => (
              <div className="t-item" key={x.h}>
                <div className="t-time">{x.t}</div>
                <div className="t-card">
                  <h4>{x.h}</h4>
                  <p>{x.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
