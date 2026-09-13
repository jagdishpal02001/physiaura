export default function TrustMarquee() {
  const items = [
    'Stroke rehab',
    'Back pain',
    'Knee replacement',
    'Parkinson’s',
    'Frozen shoulder',
    'Sciatica',
    'Cerebral Palsy',
    'Fall prevention',
    'ACL rehab',
    'Arthritis care',
  ];
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} style={{ display: 'inline-flex' }}>
            {row.map((t, i) => (
              <span key={`${half}-${i}`}>
                {t} <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
