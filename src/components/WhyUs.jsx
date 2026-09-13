import { House, UserCheck, ClipboardList, Dumbbell, TrendingUp, HeartHandshake } from 'lucide-react';

const items = [
  {
    icon: House,
    title: 'Physiotherapy at your home',
    text: 'No travel, no waiting rooms. Especially vital after surgery, stroke, or for elderly parents living alone.',
  },
  {
    icon: UserCheck,
    title: 'One-to-one attention',
    text: 'Every session is just you and your physiotherapist. Your condition, your goals, your pace — never a shared slot.',
  },
  {
    icon: ClipboardList,
    title: 'Personalised treatment plans',
    text: 'Assessment first, then a written plan. Revised as you improve — you always know what’s next and why.',
  },
  {
    icon: Dumbbell,
    title: 'Functional rehabilitation',
    text: 'Beyond pain relief: sitting on the floor, climbing stairs, getting up from Indian toilets, carrying groceries.',
  },
  {
    icon: TrendingUp,
    title: 'Progressive recovery',
    text: 'Exercises progress with tolerance — walker to stick to independent, chair support to free standing.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient-centred care',
    text: 'Comfortable, encouraging sessions. Family kept in the loop in simple language after every visit.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">
            <span className="dot" /> Why choose Physiaura?
          </span>
          <h2 className="display-l">
            Personalised care. Professional approach.{' '}
            <span className="hand">Convenient home visits.</span>
          </h2>
        </div>
        <div className="why-grid">
          {items.map((w, i) => (
            <div className={`why rv rv-d${i % 3}`} key={w.title}>
              <div className="why-ic">
                <w.icon size={22} />
              </div>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
