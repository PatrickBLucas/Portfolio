import React, { useState } from 'react';

const JOBS = [
  {
    title: 'Senior Operations & Systems Manager',
    company: 'O&G Industries',
    location: 'Waterbury, CT',
    dates: '2019 — Present',
    promoted: 'Promoted from Assistant Operations Manager',
    summary: 'Regional building materials distributor operating 7 locations with $10M+ annual revenue at the Waterbury facility. Manage $2M inventory portfolio, 8+ staff, and full facility operations while serving as ERP transition lead and internal systems architect.',
    sections: [
      {
        label: 'ERP Strategy & Systems',
        bullets: [
          'Appointed lead facility manager for enterprise-wide ERPLY ERP rollout across 7 locations; mapped full workflow lifecycle spanning POS, procurement, dispatch, and financial reconciliation',
          'Authored 25-page ERP implementation roadmap and 16-page iterative markup document identifying system gaps, workflow friction points, and 40+ usability enhancements',
          'Identified and corrected systemic cost allocation error on consolidated vendor deliveries — validated by IT systems administrator — that had been misapplied to lowest-value POs for years',
          'Proactively declined oversight of own facility variance reconciliation to enforce separation of duties; flagged high-risk discount loopholes and designed inventory-aware pricing logic',
        ],
      },
      {
        label: 'Procurement & Vendor Operations',
        bullets: [
          'Designed and implemented Orgill Orderer following unplanned purchaser departure with no transition plan or backfill, managing $70K+ in annual purchases and compressing seasonal ordering from 3-5 days to under 15 minutes',
          'Eliminated split-box penalties by consolidating fragmented multi-PO ordering into single optimized submissions with automated case pack rounding logic',
          'Orchestrated $850K+ in multi-vendor construction logistics spanning 35+ truckloads across 2 major projects with zero delivery delays',
          'Identified $75K+ in annual cost savings through waste elimination, process optimization, and vendor negotiations',
        ],
      },
      {
        label: 'Self-Initiated Tool Development',
        bullets: [
          'Built suite of operational tools without direction — all in active daily use. Full descriptions in Projects section.',
          'During active ERP transition, built automated multi-vendor logistics tracking via Google Sheets and Apps Script to maintain supply chain visibility when the incoming system could not yet support those workflows',
          'Built modular inventory planning tool with split-box logic, stability thresholds, and vendor exclusions to enforce procurement compliance standards the ERP could not enforce independently',
        ],
      },
      {
        label: 'Operations & Compliance',
        bullets: [
          'Manage full-scope facility operations: payroll for 8+ union and non-union staff, utilities, vendor services, dispatch coordination, and OSHA compliance',
          'Enforced OSHA standards through monthly HammerTech audits, red-tag protocols, and incident documentation — contributing to zero lost-time incidents',
          'Applied ISO 9001 principles and DMAIC methodology to systematically identify process gaps and reduce rework across all operational touchpoints',
        ],
      },
    ],
  },
  {
    title: 'Assistant Operations Manager',
    company: 'O&G Industries',
    location: 'Bridgeport, CT',
    dates: '2017 — 2019',
    promoted: 'Promoted from Inventory Control Specialist',
    summary: 'Managed regional warehouse serving as consolidation hub for 7-site distribution network.',
    sections: [
      {
        label: 'Key Contributions',
        bullets: [
          'Authored and presented 7-page operational improvement proposal grounded in JIT logistics and workforce motivation theory; recognized by executive team and resulted in promotion',
          'Led warehouse layout redesign, SKU rationalization, and lean/demand forecasting improvements for multi-site material transfers',
          'Redesigned defective tinting process during vendor transition by implementing categorized formula SOPs, quality control checks, and visual references, eliminating nonconformities',
          'Trained and cross-developed 10+ employees across yard, gate, and sales counter roles',
          'Maintained 3.98 GPA earning B.S. in Business Management during full-time employment',
        ],
      },
    ],
  },
  {
    title: 'Inventory Control Specialist',
    company: 'O&G Industries',
    location: 'Stamford, CT',
    dates: '2015 — 2017',
    summary: 'Managed inbound/outbound gate operations, BOL verification, and niche warehouse inventory.',
    sections: [
      {
        label: 'Key Contributions',
        bullets: [
          'Managed inbound/outbound gate operations: truck coordination, BOL verification, unloading direction, and final load checks',
          'Oversaw dedicated warehouse containing PVC fittings, drainage components, block materials, and water mitigation products',
          'Designed and built mobile wheelbarrow assembly workstation from crate and pallet jack without being asked, dramatically improving throughput for high-demand product builds',
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
                  <div key={section.label} style={{ marginBottom: '1.25rem' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.6rem' }}>
                      {section.label}
                    </p>
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
