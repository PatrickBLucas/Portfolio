import React, { useState } from 'react';

const JOBS = [
  {
    title: 'Senior Operations & Systems Manager',
    company: 'O&G Industries',
    location: 'Waterbury, CT',
    dates: '2019 - Present',
    promoted: 'Promoted from Assistant Operations Manager',
    summary: 'Ten years into a single employer and the scope kept growing. Not because the role expanded on paper, but because the infrastructure kept breaking and I kept fixing it. $2M inventory portfolio, 8+ staff, primary ERP evaluator for a 7-location platform selection, and a suite of operational tools none of which anyone asked for.',
    sections: [
      {
        label: null,
        bullets: [
          'Served as primary evaluator for a 7-location ERPLY ERP implementation. Conducted two structured assessment rounds covering POS, procurement, inventory, receiving, customer management, and back office operations, producing a 25-page gap analysis and 16-page iterative follow-up. Identified 40+ configuration gaps, pricing risks, security exposures, and workflow requirements the platform would need to support before go-live. The findings shaped configuration decisions across all locations.',
          'Inherited the full Orgill purchasing function with no transition and no backfill. Built a procurement system from scratch that compressed a 3-5 day manual ordering cycle to under 15 minutes, eliminated split-box penalties, captured promotional pricing automatically, and consolidated fragmented multi-PO cycles into a single submission. $70K+ in annual purchases managed with consistent, auditable accuracy. No disruption to supply.',
          'Appointed to lead multi-site physical inventory reconciliation across 5 locations during concurrent staffing gaps. Applied forensic methodology across variance reports, tracing discrepancies through sales history, receiving logs, prior adjustments, and allocation records to find root causes before they became formal discrepancy declarations. Requested independent oversight of my own facility counts. Findings compiled into reports reviewed by VP and President.',
          'Built a suite of operational tools without direction: routing matrix, procurement automation, load optimization, inventory tracking, job quoting, and release tracking for $850K+ in direct-ship projects. None were requested. All remain in active daily use. Every one was built to eliminate a cost, close a gap, or remove a dependency that nobody else had gotten around to fixing.',
        ],
      },
    ],
  },
  {
    title: 'Assistant Operations Manager',
    company: 'O&G Industries',
    location: 'Bridgeport, CT',
    dates: '2017 - 2019',
    promoted: 'Promoted from Inventory Control Specialist',
    summary: 'Managed regional warehouse serving as consolidation hub for a 7-site distribution network.',
    sections: [
      {
        label: null,
        bullets: [
          'Wrote and presented a 7-page operational improvement proposal grounded in JIT and workforce motivation theory. It was recognized by the executive team and resulted in promotion.',
          'Led warehouse layout redesign, SKU rationalization, lean improvements, and safety enhancements. Trained and cross-developed 10+ employees across yard, gate, and counter roles.',
        ],
      },
    ],
  },
  {
    title: 'Inventory Control Specialist',
    company: 'O&G Industries',
    location: 'Stamford, CT',
    dates: '2015 - 2017',
    summary: 'Gate operations, BOL verification, and warehouse inventory management.',
    sections: [
      {
        label: null,
        bullets: [
          'Designed and built a mobile wheelbarrow assembly workstation from crate and pallet jack without being asked. Dramatically improved throughput on a high-demand product. Same instinct, earlier stage.',
        ],
      },
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div>
      <p className="section-eyebrow">Career</p>
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">One employer. A decade of escalating scope and self-initiated impact.</p>

      {/* Download button */}
      <div style={{ marginBottom: '2rem' }}>
        <a
          className="btn-primary"
          href="https://github.com/PatrickBLucas/Portfolio/raw/main/public/Patrick_Lucas_Master_Resume.pdf"
          download="Patrick_Lucas_Master_Resume.pdf"
        >
          Download Resume
        </a>
      </div>

      {/* Job accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {JOBS.map((job, idx) => (
          <div
            key={idx}
            className="card"
            style={{ cursor: 'pointer', borderColor: expanded === idx ? 'var(--amber)' : 'var(--border)' }}
            onClick={() => setExpanded(expanded === idx ? -1 : idx)}
          >
            {/* Job header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <div>
                {job.promoted && (
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--amber)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {job.promoted}
                  </p>
                )}
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', letterSpacing: '0.04em', color: 'var(--white)', margin: '0 0 0.25rem' }}>
                  {job.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                  {job.company} &nbsp;/&nbsp; {job.location} &nbsp;/&nbsp; {job.dates}
                </p>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: expanded === idx ? 'var(--amber)' : 'var(--text-dim)', flexShrink: 0, marginTop: '0.2rem' }}>
                {expanded === idx ? '−' : '+'}
              </span>
            </div>

            {/* Expanded content */}
            {expanded === idx && (
              <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {job.summary}
                </p>

                {job.sections.map((section) => (
                  <div key={section.label || 'main'} style={{ marginBottom: '1.25rem' }}>
                    {section.label && (
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.6rem' }}>
                        {section.label}
                      </p>
                    )}
                    <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {section.bullets.map((b, i) => (
                        <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Education & Certs */}
      <div className="divider">
        <span className="divider-label">Education & Certifications</span>
        <div className="divider-line" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        <div className="card fade-up fade-up-1">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--amber)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Degree</p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--white)', letterSpacing: '0.04em', marginBottom: '0.3rem' }}>B.S. Business Management</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>Southern New Hampshire University, 2018</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>Ops & Project Management / IT Minor / GPA 3.98</p>
        </div>

        {[
          { name: 'Google Data Analytics Certificate', detail: 'Coursera, 2023 — Excel, SQL, R, Tableau' },
          { name: 'SAP S/4HANA Supply Chain Training', detail: 'learning.sap.com — In Progress' },
          { name: 'ISO 9001:2015 QMS Certificate', detail: 'Alison, 2025' },
          { name: 'AS9100D QMS Certificate', detail: 'Alison, 2025' },
        ].map((cert) => (
          <div key={cert.name} className="card fade-up fade-up-2">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--amber)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Certification</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: 500, marginBottom: '0.3rem' }}>{cert.name}</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-dim)' }}>{cert.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
