import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function parseTarget(raw) {
  const num = parseFloat(raw);
  const suffix = raw.replace(/[\d.,★+%]/g, '');
  const prefix = '';
  return { num: isNaN(num) ? 0 : num, suffix: raw.replace(String(Math.round(num)), '').replace(String(num), '') || suffix, raw };
}

export default function CountUp({ value, duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const match = String(value).match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(String(value));
      return;
    }
    const target = parseFloat(match[1]);
    const suffix = match[2] || '';
    const decimals = match[1].includes('.') ? 1 : 0;
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay((target * eased).toFixed(decimals) + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}

export function unusedParse() {
  return parseTarget('0');
}
