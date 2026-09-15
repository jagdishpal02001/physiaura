import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Heart,
  House,
  Stethoscope,
  MapPin,
  Phone,
  MessageCircle,
  Menu,
  X,
  Plus,
  MoveUpRight,
  Activity,
  Accessibility,
  Brain,
  Baby,
  Bone,
  Clock,
  Mail,
  Instagram,
} from "lucide-react";
import {
  AREAS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK,
  EMAIL_LINK,
  EMAIL,
  INSTAGRAM,
} from "./data/content";

const services = [
  {
    title: "Back, neck & joint pain",
    icon: Bone,
    subtitle: "More ease in your everyday.",
    text: "From long hours at your desk to discomfort on the stairs, we help you understand your pain and work towards moving comfortably.",
    tags: ["Back & neck pain", "Arthritis", "Frozen shoulder"],
    points: [
      "A movement and posture assessment",
      "Hands-on care and targeted exercises",
      "Practical changes for your daily routine",
    ],
  },
  {
    title: "Post-surgery recovery",
    icon: Activity,
    subtitle: "Your next step, supported.",
    text: "Build strength and confidence after a knee or hip replacement, ACL surgery or fracture, with rehabilitation guided by your surgeon’s advice.",
    tags: ["Knee & hip replacement", "ACL recovery", "Fractures"],
    points: [
      "A plan aligned with your surgical protocol",
      "Progressive strength and mobility work",
      "Practice with stairs and walking aids",
    ],
  },
  {
    title: "Neurological rehabilitation",
    icon: Brain,
    subtitle: "Small steps. Meaningful progress.",
    text: "Personalised support for movement, balance and daily activities after a stroke or while living with a neurological condition.",
    tags: ["Stroke recovery", "Parkinson’s", "Balance & gait"],
    points: [
      "Walking and balance retraining",
      "Practice with everyday movements at home",
      "Caregiver guidance for safe support",
    ],
  },
  {
    title: "Physiotherapy for seniors",
    icon: Accessibility,
    subtitle: "Independence, at your own pace.",
    text: "Patient, respectful care for parents and grandparents. We focus on strength, steadiness and the confidence to keep doing the things they love.",
    tags: ["Fall prevention", "Mobility", "Age-related weakness"],
    points: [
      "A home safety and fall-risk assessment",
      "Gentle strength and balance exercises",
      "Clear progress updates for your family",
    ],
  },
  {
    title: "Paediatric physiotherapy",
    icon: Baby,
    subtitle: "Room to play. Space to grow.",
    text: "Play-based physiotherapy in a familiar space, supporting children with movement, coordination and developmental needs.",
    tags: ["Developmental milestones", "Cerebral palsy", "Coordination"],
    points: [
      "An assessment tailored to your child",
      "Engaging, play-led movement activities",
      "Parent coaching for practice between visits",
    ],
  },
];
const faqs = [
  [
    "How do I book my first home visit?",
    "Call or message us on WhatsApp with your area in Pune, your concern and a preferred time. We discuss your needs, confirm availability and explain the visit fee before you book.",
  ],
  [
    "Who comes to my home?",
    "A qualified physiotherapist with at least a BPT degree visits you. MPT guidance is available for complex neurological, paediatric and post-surgical cases. Every visit is one-to-one.",
  ],
  [
    "What does a session cost?",
    "Pricing depends on your location and care needs. Contact us for a per-visit quote before booking. You can ask about the recommended frequency after your initial assessment.",
  ],
  [
    "What should I have ready?",
    "Wear comfortable clothes and keep a mat or bedsheet, a sturdy chair and a little space to move. Have any relevant prescriptions, scans or discharge summaries handy. Your physiotherapist brings the equipment needed for your session.",
  ],
  [
    "Can I book care for my parents from another city?",
    "Yes. You can arrange a visit for your parents in Pune from anywhere. We coordinate the visit with your family and can share progress updates with the patient’s permission.",
  ],
  [
    "How many sessions will I need?",
    "Your needs, goals and progress determine the plan. The first assessment helps your physiotherapist recommend a starting schedule, which is reviewed as you progress. Recovery timelines vary from person to person.",
  ],
  [
    "Do I need a doctor’s referral?",
    "You can contact us directly. If you have a prescription or post-surgical protocol, share it with your physiotherapist. Some conditions need further medical assessment or clinic equipment; we discuss this with you when appropriate.",
  ],
];
const nav = [
  ["Our care", "#conditions"],
  ["Why home physio", "#why-home"],
  ["How it works", "#how"],
  ["FAQs", "#faq"],
];
function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Physiaura home">
      <span className="brand-symbol">
        <Activity size={27} strokeWidth={1.7} />
      </span>
      <span>
        physiaura<span className="brand-dot">.</span>
        <small>RESTORE. RECOVER. RISE.</small>
      </span>
    </a>
  );
}
function Label({ children }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
function BookingLink({ children = "Book a home visit", className = "" }) {
  return (
    <a className={`button ${className}`} href="#contact">
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
export default function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [area, setArea] = useState("");
  const current = services[active];
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenu(false);
        document.querySelector(".menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="announcement">
        <span>
          <MapPin size={13} /> Thoughtful physiotherapy. At your home. Across
          Pune.
        </span>
        <a href={PHONE_TEL}>
          Let’s talk: +91 {PHONE_DISPLAY} <ArrowUpRight size={13} />
        </a>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, url]) => (
              <a key={url} href={url}>
                {label}
              </a>
            ))}
          </nav>
          <BookingLink className="nav-book" />
          <button
            className="menu-toggle"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Close navigation" : "Open navigation"}
            aria-expanded={menu}
            aria-controls="mobile-nav"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[...nav, ["Book a home visit", "#contact"]].map(([label, url]) => (
              <a href={url} key={url} onClick={() => setMenu(false)}>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero container" id="top">
          <div className="hero-copy">
            <Label>HOME PHYSIOTHERAPY IN PUNE</Label>
            <h1>
              <span className="sr-only">Home Physiotherapy in Pune — </span>
              Get back to
              <br />
              what <em>moves you.</em>
            </h1>
            <p className="hero-description">
              The morning walk. The stairs at home. Playing with your
              grandchildren. Personalised physiotherapy that brings you closer
              to the life you love — right where you feel most comfortable.
            </p>
            <div className="hero-actions">
              <BookingLink />
              <a className="text-link" href="#conditions">
                Explore our care <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-assurance">
              <span className="assurance-icon">
                <Stethoscope size={22} />
              </span>
              <p>
                <strong>Expert hands. A personal approach.</strong>
                <span>
                  Qualified BPT / MPT physiotherapists · One-to-one care
                </span>
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/images/physiotherapy.jpg"
              alt="Physiaura physiotherapist assessing a patient’s back and shoulder movement during a home visit in Pune"
              width="1200"
              height="800"
              fetchPriority="high"
            />
            <div className="photo-label">
              <span className="status-dot" /> CARE THAT COMES TO YOU
            </div>
            <div className="home-note">
              <span className="note-icon">
                <House size={26} strokeWidth={1.5} />
              </span>
              <div>
                <strong>
                  Your space.
                  <br />
                  Your pace.
                </strong>
                <span>A little support. A new beginning.</span>
              </div>
            </div>
            <span className="visual-caption">
              Movement is personal. Your care should be, too.
            </span>
            <svg
              className="hero-squiggle"
              viewBox="0 0 110 100"
              aria-hidden="true"
            >
              <path d="M8 87C105 66 87 0 53 14S52 108 101 18" />
            </svg>
          </div>
        </section>
        <div className="promise-strip">
          <div className="container">
            {[
              [Stethoscope, "Qualified physiotherapists"],
              [House, "Care in the comfort of home"],
              [Heart, "Built around your goals"],
              [MapPin, "Serving families across Pune"],
            ].map(([Icon, text]) => (
              <span key={text}>
                <Icon size={21} strokeWidth={1.5} />
                {text}
              </span>
            ))}
          </div>
        </div>
        <section className="section container" id="conditions">
          <div className="section-heading">
            <div>
              <Label>CARE FOR EVERY CHAPTER</Label>
              <h2>
                Different needs.
                <br />
                <em>The same thoughtful care.</em>
              </h2>
            </div>
            <p>
              Whether you’re recovering, rebuilding or simply hoping to move
              with less pain, we meet you where you are.
            </p>
          </div>
          <div className="care-grid">
            <div className="care-list" aria-label="Choose a care specialty">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.title}
                    className={active === index ? "selected" : ""}
                    aria-pressed={active === index}
                    aria-controls="care-detail"
                    onClick={() => setActive(index)}
                  >
                    <Icon size={23} strokeWidth={1.5} />
                    <span>{service.title}</span>
                    <ArrowUpRight size={19} />
                  </button>
                );
              })}
            </div>
            <article
              className="care-detail"
              id="care-detail"
              aria-live="polite"
            >
              <div key={active} className="care-content">
                <span className="care-number">
                  0{active + 1} / OUR SPECIALITIES
                </span>
                <h3>{current.subtitle}</h3>
                <p>{current.text}</p>
                <div className="tags">
                  {current.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ul>
                  {current.points.map((point) => (
                    <li key={point}>
                      <Check size={16} />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={`${WHATSAPP_LINK}${encodeURIComponent(current.title)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Let’s talk about your care <ArrowUpRight size={17} />
                </a>
              </div>
              <img
                src="/images/guided-movement.jpg"
                alt="Patient indicating neck and shoulder discomfort during home physiotherapy assessment in Pune"
                width="1000"
                height="667"
                loading="lazy"
                className={active === 0 ? "" : "hidden"}
              />
            </article>
          </div>
        </section>
        <section className="home-section" id="why-home">
          <div className="container home-grid">
            <div className="home-photo">
              <img
                src="/images/physiotherapy.jpg"
                alt="Personalised one-to-one home physiotherapy session in Pune"
                width="1200"
                height="800"
                loading="lazy"
              />
              <div className="photo-caption">
                <Heart size={18} /> Less travel. More time for you.
              </div>
            </div>
            <div className="home-copy">
              <Label>GOOD CARE FEELS LIKE HOME</Label>
              <h2>
                Your recovery.
                <br />
                <em>On familiar ground.</em>
              </h2>
              <p>
                Getting to a clinic shouldn’t be the hardest part of getting
                better. We bring focused, one-to-one physiotherapy to your
                doorstep.
              </p>
              <div className="benefit">
                <span>01</span>
                <div>
                  <h3>Every minute is yours</h3>
                  <p>
                    A dedicated physiotherapist who listens, understands your
                    goals and adapts your plan.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <span>02</span>
                <div>
                  <h3>Progress that fits real life</h3>
                  <p>
                    Practise with your own chair, your own stairs and the
                    movements that matter to your day.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <span>03</span>
                <div>
                  <h3>Your family, part of the journey</h3>
                  <p>
                    Simple guidance for loved ones, so you feel supported
                    between visits, too.
                  </p>
                </div>
              </div>
              <BookingLink className="outline" />
            </div>
          </div>
        </section>
        <section className="section container" id="how">
          <div className="section-heading">
            <div>
              <Label>A SIMPLE START</Label>
              <h2>
                One conversation.
                <br />
                <em>A step towards better.</em>
              </h2>
            </div>
            <p>
              No complicated process. Just a friendly team helping you take the
              next step.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Let’s get to know you",
                "Call or WhatsApp us. Tell us what’s troubling you, where you live and what you’d like to get back to.",
                MessageCircle,
              ],
              [
                "02",
                "Your first home visit",
                "Your physiotherapist assesses your movement, listens to your goals and explains a plan tailored to you.",
                Stethoscope,
              ],
              [
                "03",
                "Move forward, together",
                "Build strength and confidence with guided sessions, practical home exercises and regular progress reviews.",
                MoveUpRight,
              ],
            ].map(([num, title, text, Icon]) => (
              <article className="step" key={num}>
                <div className="step-top">
                  <span>{num}</span>
                  <Icon size={25} strokeWidth={1.4} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="first-visit">
            <Clock size={19} />
            <p>
              <strong>A little space is all you need.</strong> Keep a mat, a
              sturdy chair and your medical reports ready. We bring the care.
            </p>
            <span>First assessment · 40–50 minutes</span>
          </div>
        </section>
        <section className="areas-section" id="areas">
          <div className="container areas-grid">
            <div>
              <Label>YOUR NEIGHBOURHOOD. OUR CARE.</Label>
              <h2>
                At home,
                <br />
                <em>across Pune.</em>
              </h2>
              <p>
                From Kothrud to Kharadi, we help families find care closer to
                home. Select your area to ask about visit availability.
              </p>
            </div>
            <div>
              <div className="area-tags">
                {AREAS.map((name) => (
                  <button
                    key={name}
                    onClick={() => setArea(name)}
                    className={area === name ? "selected" : ""}
                    aria-pressed={area === name}
                  >
                    <MapPin size={13} />
                    {name}
                  </button>
                ))}
              </div>
              <a
                className="text-link"
                href={`https://wa.me/917441111488?text=${encodeURIComponent(`Hi Physiaura! Are home physiotherapy visits available in ${area || "my area in Pune"}?`)}`}
                target="_blank"
                rel="noreferrer"
              >
                {area
                  ? `Check availability in ${area}`
                  : "Ask about your neighbourhood"}
                <ArrowUpRight size={17} />
              </a>
              <p className="area-note">
                Visit times are confirmed by our team before booking.
              </p>
            </div>
          </div>
        </section>
        <section className="section container faq-grid" id="faq">
          <div>
            <Label>A LITTLE CLARITY</Label>
            <h2>
              On your mind?
              <br />
              <em>Let’s talk about it.</em>
            </h2>
            <p>
              Starting something new comes with questions. We’re here to help
              you feel comfortable.
            </p>
            <a className="text-link" href={PHONE_TEL}>
              Talk to our team <ArrowUpRight size={17} />
            </a>
            <span className="languages">Marathi · Hindi · English</span>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <details key={q} name="faqs" open={i === 0 ? true : undefined}>
                <summary>
                  {q}
                  <Plus size={19} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="contact-section container" id="contact">
          <div className="contact-inner">
            <div>
              <Label>LET’S TAKE THE FIRST STEP</Label>
              <h2>
                A little care today.
                <br />
                <em>More possibilities tomorrow.</em>
              </h2>
              <p>
                Tell us what you need. We’ll help you find your way forward.
              </p>
              <div className="contact-actions">
                <a className="button cream" href={PHONE_TEL}>
                  <Phone size={17} />
                  Call +91 {PHONE_DISPLAY}
                  <ArrowUpRight size={17} />
                </a>
                <a
                  className="button light-outline"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
              <span className="contact-hours">
                <Clock size={14} />
                Monday–Saturday, 8am–8pm <span>·</span> Pune, Maharashtra
              </span>
            </div>
            <div className="contact-art" aria-hidden="true">
              <Heart size={110} strokeWidth={0.65} />
              <span>
                Here for your
                <br />
                <em>next chapter.</em>
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>
              Helping you move better.
              <br />
              Right where you belong.
            </p>
          </div>
          <div>
            <span className="footer-label">EXPLORE</span>
            {nav.map(([label, url]) => (
              <a key={url} href={url}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <span className="footer-label">SAY HELLO</span>
            <a href={EMAIL_LINK}>
              <Mail size={15} />
              {EMAIL}
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              <Instagram size={15} />
              @physiaura.in
            </a>
            <a href={PHONE_TEL}>
              <Phone size={15} />
              +91 {PHONE_DISPLAY}
            </a>
          </div>
          <div className="footer-note">
            <House size={26} strokeWidth={1.3} />
            <p>
              Professional care.
              <br />
              Personal connection.
              <br />
              <em>Always at home.</em>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Physiaura. All rights reserved.
          </span>
          <span>Thoughtful care, made for everyday life.</span>
        </div>
      </footer>
    </>
  );
}
