import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_LINK } from '../data/content';

export default function FloatButtons() {
  return (
    <>
      <div className="float-bar">
        <a href={PHONE_TEL} style={{ background: 'var(--ink)', color: 'white' }}>
          <Phone size={17} /> Call {PHONE_DISPLAY}
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{ background: '#1d9e57', color: 'white' }}>
          <MessageCircle size={17} /> WhatsApp
        </a>
      </div>
      <a className="float-wa" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp Physiaura">
        <MessageCircle size={24} />
      </a>
    </>
  );
}
