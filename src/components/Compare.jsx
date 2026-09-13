import { X, Check } from 'lucide-react';

export default function Compare() {
  return (
    <section id="why-home">
      <div className="wrap">
        <div className="sec-head center rv">
          <span className="eyebrow">
            <span className="dot" /> Why home physio?
          </span>
          <h2 className="display-l">
            A clinic treats your joint. <span className="hand">Home treats your life.</span>
          </h2>
        </div>
        <div className="compare">
          <div className="cmp-card clinic rv">
            <h3>Typical clinic visit</h3>
            <p className="muted small" style={{ margin: 0 }}>
              Good machines, but…
            </p>
            <ul>
              {[
                'Auto / cab to clinic while in pain — 45 mins each way in Pune traffic',
                '15 mins with the physio, rest with assistant + 6 other patients',
                'Stairs and bathroom at home never actually practised',
                'Elderly parents need someone to accompany every day',
                'Exercises on a printout, no one checks your home setup',
              ].map((t) => (
                <li key={t}>
                  <span
                    style={{
                      width: 26, height: 26, borderRadius: '50%', background: '#f3e2d8',
                      display: 'grid', placeItems: 'center', flex: 'none', color: '#8a3c1f',
                    }}
                  >
                    <X size={15} strokeWidth={3} />
                  </span>
                  <span className="muted">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cmp-card home rv rv-d1">
            <h3>A Physiaura home visit</h3>
            <p className="small" style={{ margin: 0, color: '#c8c0a8' }}>
              Built around your home, your routine.
            </p>
            <ul>
              {[
                'Zero travel — your physio arrives with kit bag, you stay comfortable',
                'Full 45–60 mins, only you. No sharing, no waiting',
                'We rehab your actual stairs, toilet height, bed & chair',
                'Family / caregiver trained every session — in Marathi, Hindi or English',
                'Progress tracked visit-by-visit; discharge plan, not endless package',
              ].map((t) => (
                <li key={t}>
                  <span
                    style={{
                      width: 26, height: 26, borderRadius: '50%', background: '#2c9a93',
                      display: 'grid', placeItems: 'center', flex: 'none', color: 'white',
                    }}
                  >
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
