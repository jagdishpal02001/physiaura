import { PHONE_DISPLAY, PHONE_TEL, INSTAGRAM, EMAIL } from '../data/content';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="fbrand">
              <span className="brand-mark">
                <img src="/logo.png" alt="Physiaura" />
              </span>
              <span>
                <b style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '.04em' }}>
                  PHYSIAURA
                </b>
                <div style={{ fontSize: '.7rem', letterSpacing: '.2em' }}>RESTORE · RECOVER · RISE</div>
              </span>
            </div>
            <p style={{ maxWidth: 380, marginTop: 14 }}>
              Professional home physiotherapy in Pune by qualified physiotherapists (BPT, MPT).
              Personalised, one-to-one rehab for neuro, ortho, post-surgical, paediatric & geriatric
              conditions.
            </p>
            <p>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                Instagram — @physiaura.in →
              </a>
            </p>
          </div>
          <div>
            <b style={{ color: 'white' }}>Explore</b>
            <div style={{ display: 'grid', gap: 8, marginTop: 12 }}>
              <a href="#how">How it works</a>
              <a href="#conditions">Conditions</a>
              <a href="#why-home">Why home physio</a>
              <a href="#areas">Areas in Pune</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div>
            <b style={{ color: 'white' }}>Book</b>
            <div style={{ display: 'grid', gap: 8, marginTop: 12 }}>
              <a href={PHONE_TEL}>Call {PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>Mon–Sat · 8am–8pm</span>
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>
        <div className="fbottom">
          <span>© {new Date().getFullYear()} Physiaura. Move better. Recover stronger. Live better.</span>
          <span>Home physiotherapy · Pune · Qualified BPT / MPT physios</span>
        </div>
      </div>
    </footer>
  );
}
