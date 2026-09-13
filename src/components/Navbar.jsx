import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '../data/content';

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const links = [
    ['How it works', '#how'],
    ['Conditions', '#conditions'],
    ['Why home physio', '#why-home'],
    ['Pune areas', '#areas'],
    ['Stories', '#stories'],
    ['FAQ', '#faq'],
  ];

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span className="topbar-left">
            <span className="hide-m">Now serving all of Pune · Mon–Sat, 8am–8pm · </span>
            Home visits by qualified physios
          </span>
          <span className="topbar-right">
            Call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          </span>
        </div>
      </div>
      <header className="nav" style={scrolled ? { boxShadow: '0 8px 30px rgba(14,36,64,.10)' } : undefined}>
        <div className="wrap">
          <div className="nav-inner">
            <a href="#top" className="brand" aria-label="Physiaura home">
              <span className="brand-mark">
                <img src="/logo.png" alt="Physiaura logo" />
              </span>
              <span>
                <span className="brand-name">
                  PHYSI<span>AURA</span>
                </span>
                <div className="brand-sub">Restore · Recover · Rise</div>
              </span>
            </a>

            <nav className="nav-links" aria-label="Primary">
              {links.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="nav-cta">
              <button
                className="theme-btn"
                onClick={onToggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <a className="btn btn-ghost btn-sm nav-wa" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn btn-primary btn-sm nav-call" href={PHONE_TEL}>
                <Phone size={16} strokeWidth={2.5} />
                <span className="nav-call-num">{PHONE_DISPLAY}</span>
              </a>
              <button
                className="mmenu-btn"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="mmenu open"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ paddingBottom: 14 }}>
                  {links.map(([label, href]) => (
                    <a key={href} href={href} onClick={() => setOpen(false)}>
                      {label}
                    </a>
                  ))}
                  <a href="#contact" className="mmenu-cta" onClick={() => setOpen(false)}>
                    Book a visit →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
