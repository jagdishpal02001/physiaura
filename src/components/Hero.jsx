import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, ShieldCheck, Stethoscope, House } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK, EMAIL_LINK, IMAGES } from '../data/content';
import CountUp from './CountUp';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const STATS = [
  ['500+', 'home sessions done'],
  ['4.9★', 'family rating'],
  ['25+', 'areas in Pune'],
  ['100%', '1-to-1 attention'],
];

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -30]);

  return (
    <div className="hero" id="top" ref={sectionRef}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <p className="kicker-note">
              <span className="pulse" /> Available this week in Pune — 6 home-visit slots left
            </p>
          </motion.div>

          <motion.h1 className="display-xl" variants={fadeUp} initial="hidden" animate="show" custom={1}>
            Physio that comes <em>home</em>, so recovery actually happens.
          </motion.h1>

          <motion.p className="lead" variants={fadeUp} initial="hidden" animate="show" custom={2}>
            Physiaura sends a qualified <b>physiotherapist to your doorstep</b> in Pune — for stroke
            recovery, back & knee pain, post-surgical rehab, elderly mobility and child physio. One-to-one.
            No clinic queues. No travel pain.
          </motion.p>

          <motion.div className="hero-ctas" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <a className="btn btn-primary" href={PHONE_TEL}>
              <Phone size={18} /> Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn-whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> WhatsApp us
            </a>
            <a className="btn btn-ghost" href={EMAIL_LINK}>
              Mail to book →
            </a>
          </motion.div>

          <motion.div className="hero-proof" variants={fadeUp} initial="hidden" animate="show" custom={4}>
            <span className="avatars">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
                alt="Physiaura patient"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                alt="Physiaura patient"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
                alt="Physiaura patient"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                alt="Physiaura patient"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span>
              <span className="stars">★★★★★</span> <b>4.9</b> loved by families across Kothrud, Baner & Wakad
              <br />
              <span className="small muted">Qualified BPT / MPT physios · 1-to-1 sessions · Family updated every visit</span>
            </span>
          </motion.div>

          <motion.div className="slip" variants={fadeUp} initial="hidden" animate="show" custom={5}>
            <div className="slip-head">
              <span>Physiaura · Home visit slip</span>
              <span>Pune</span>
            </div>
            <div className="slip-body">
              <div>
                <div className="slip-label">Today</div>
                <div className="slip-value">Call before 6pm → visit tomorrow</div>
              </div>
              <div>
                <div className="slip-label">Session</div>
                <div className="slip-value">45–60 min · at your home</div>
              </div>
              <div>
                <div className="slip-label">You need</div>
                <div className="slip-value">Just a mat + chair. We bring the rest.</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-card-stack"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={reduce ? undefined : { y: cardY }}
        >
          <motion.div className="hero-photo-main" style={reduce ? undefined : { y: photoY }}>
            <img
              src={IMAGES.heroMain}
              alt="Physiotherapist giving leg therapy during a home visit in Pune"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
          <div className="hero-photo-sub">
            <img
              src={IMAGES.heroSub}
              alt="Physiotherapist explaining home exercises to a patient"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="float-card fc-1">
            <span className="ic" style={{ background: '#dceeed', color: '#0c3f3c' }}>
              <Stethoscope size={20} />
            </span>
            <span>
              <b style={{ display: 'block', fontSize: '.9rem', lineHeight: 1.2 }}>Qualified physios only</b>
              <small className="muted">BPT min · MPT-led · No assistants alone</small>
            </span>
          </div>

          <div className="float-card fc-2">
            <span className="ic" style={{ background: '#fbeed1', color: '#7a5410' }}>
              <House size={20} />
            </span>
            <span>
              <b style={{ display: 'block', fontSize: '.9rem', lineHeight: 1.2 }}>Rehab in your real home</b>
              <small className="muted">Stairs, bathroom, bed — practised here</small>
            </span>
          </div>

          <div className="float-card fc-3">
            <span className="ic" style={{ background: '#0e2440', color: 'white' }}>
              <ShieldCheck size={20} />
            </span>
            <span>
              <b style={{ display: 'block', fontSize: '.9rem', lineHeight: 1.2 }}>Assessment first</b>
              <small className="muted">Plan before treatment, always</small>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="wrap">
        <div className="stats">
          {STATS.map(([n, l]) => (
            <div className="stat" key={l}>
              <b>
                <CountUp value={n} />
              </b>
              <small>{l}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
