import { PhoneCall, ClipboardCheck, House, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: '1. Call / WhatsApp us',
    text: 'Tell us the problem in 2 minutes — pain, surgery, stroke, child’s milestone. We ask the right questions.',
    tag: '2-min call',
  },
  {
    icon: ClipboardCheck,
    title: '2. Assessment at home',
    text: 'A qualified physiotherapist (BPT minimum, MPT-led) examines movement, strength, balance and your home setup. You get a clear plan + session estimate.',
    tag: '40–50 min first visit',
  },
  {
    icon: House,
    title: '3. 1-to-1 sessions at home',
    text: 'Hands-on therapy + exercises using your stairs, chair, bed. Family is taught so progress continues daily.',
    tag: '45–60 min each',
  },
  {
    icon: TrendingUp,
    title: '4. Review & discharge',
    text: 'We track milestones, progress exercises, and discharge you with a home plan — not endless sessions.',
    tag: 'No lock-in',
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">
            <span className="dot" /> How a home visit works
          </span>
          <h2 className="display-l">
            No app to learn. No clinic to reach.{' '}
            <span className="hand">Just call, and we come.</span>
          </h2>
          <p className="lead">
            Built for busy families, working children of elderly parents, and anyone for whom travel itself
            is painful. Phase 1 is deliberately simple — phone-first booking.
          </p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className={`step rv rv-d${i}`} key={s.title}>
              <div className="step-num">0{i + 1}</div>
              <s.icon size={26} style={{ marginTop: 8, color: '#0f6f69' }} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
