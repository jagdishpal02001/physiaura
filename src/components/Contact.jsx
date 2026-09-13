import { Phone, MessageCircle, Mail, Instagram, Clock, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK, EMAIL, EMAIL_LINK, INSTAGRAM } from '../data/content';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-head center rv">
          <span className="eyebrow">
            <span className="dot" /> Book your home visit
          </span>
          <h2 className="display-l">
            One call. <span className="hand">We’ll handle the rest.</span>
          </h2>
          <p className="lead">
            Phase 1 is phone-first on purpose — a 2-minute chat tells us more than any form. Call, WhatsApp
            or mail; we confirm your slot the same day.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-main rv">
            <h3 className="display-m" style={{ color: 'white' }}>
              Move better. Recover stronger. Live better.
            </h3>
            <p className="small" style={{ color: '#c8c0a8', margin: '8px 0 0' }}>
              Tell us: your name · area in Pune · problem · preferred day/time. That’s all we need to start.
            </p>
            <div className="contact-row">
              <a className="contact-tile" href={PHONE_TEL}>
                <Phone size={22} color="#e8a93d" />
                <b>Call {PHONE_DISPLAY}</b>
                <small>Tap to call · Mon–Sat, 8am–8pm</small>
              </a>
              <a className="contact-tile" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <MessageCircle size={22} color="#4ade80" />
                <b>WhatsApp us</b>
                <small>Fastest reply · send reports as photos</small>
              </a>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', position: 'relative' }}>
              <a className="btn btn-teal" href={EMAIL_LINK}>
                <Mail size={17} /> Mail {EMAIL}
              </a>
              <a className="btn btn-ghost" href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ background: 'rgba(255,253,247,.1)', color: 'white', borderColor: 'rgba(255,255,255,.2)' }}>
                <Instagram size={17} /> @physiaura.in
              </a>
            </div>
            <p className="small" style={{ color: '#8f8871', marginTop: 16, position: 'relative' }}>
              Prefer talking? Call between 8am–8pm. For stroke / post-surgical urgency, mention “urgent” on
              WhatsApp — we prioritise.
            </p>
          </div>

          <div className="contact-side">
            <div className="info-card rv rv-d1">
              <h4>
                <Clock size={15} style={{ verticalAlign: '-2px', marginRight: 6 }} />
                Visit hours
              </h4>
              <table className="hours">
                <tbody>
                  <tr><td>Mon – Sat</td><td>8:00am – 8:00pm</td></tr>
                  <tr><td>Sunday</td><td>Urgent visits only</td></tr>
                  <tr><td>First assessment</td><td>40–50 mins</td></tr>
                  <tr><td>Follow-ups</td><td>45–60 mins</td></tr>
                </tbody>
              </table>
            </div>
            <div className="info-card rv rv-d2">
              <h4>
                <MapPin size={15} style={{ verticalAlign: '-2px', marginRight: 6 }} />
                What to keep ready
              </h4>
              <p className="small muted" style={{ margin: 0 }}>
                A mat or bedsheet, a sturdy chair, loose clothes, and any X-ray / MRI / discharge photos on
                your phone. We bring bands, weights, hot/cold therapy and measuring tools.
              </p>
            </div>
            <div
              className="info-card rv rv-d3"
              style={{ background: 'var(--mustard-soft)', borderColor: '#e8cf93' }}
            >
              <b>For sons & daughters living outside Pune →</b>
              <p className="small" style={{ margin: '6px 0 0' }}>
                You can book for your parents from anywhere. We visit them, and update you on WhatsApp after
                every session with progress + photos (on request).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
