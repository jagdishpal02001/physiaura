import { MapPin, MessageCircle } from 'lucide-react';
import { AREAS, WHATSAPP_LINK } from '../data/content';

export default function Areas() {
  return (
    <section id="areas" className="areas">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">
            <span className="dot" /> Areas we serve
          </span>
          <h2 className="display-l">
            Proudly home-grown in Pune. <span className="hand">Street by street.</span>
          </h2>
          <p className="lead">
            Based in Pune, we schedule visits in clusters so your physio arrives on time — not drained by
            cross-city travel. If your society isn’t listed, just ask.
          </p>
        </div>
        <div className="area-pills rv rv-d1">
          {AREAS.map((a) => (
            <span key={a}>
              <MapPin size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 5, color: '#0f6f69' }} />
              {a}
            </span>
          ))}
        </div>
        <div className="map-note rv rv-d2">
          <span style={{ fontSize: '1.4rem' }}>🛵</span>
          <span>
            <b>Live outside these areas?</b> Message us on{' '}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{ fontWeight: 800, color: 'var(--ink)' }}>
              WhatsApp
            </a>{' '}
            with your location — for post-surgical and neuro cases we often stretch the route, especially on
            Sinhagad Road, Lohegaon and Undri sides.
          </span>
        </div>
      </div>
    </section>
  );
}
