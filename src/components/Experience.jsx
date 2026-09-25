import React, { useState } from 'react';

const JOBS = [
  {
    title: 'Senior Operations & Systems Manager',
    company: 'O&G Industries',
    location: 'Waterbury, CT',
    dates: '2019 -- Present',
    promoted: 'Promoted from Assistant Operations Manager',
    summary: 'Ten years into a single employer and the scope kept growing -- not because the role expanded on paper, but because the infrastructure kept breaking and I kept fixing it. $2M inventory portfolio, 8+ staff, 7-location ERP transition lead, and a suite of operational tools none of which anyone asked for.',
    sections: [
      {
        label: 'ERP & Systems',
        bullets: [
          'Served as primary evaluator for a 7-location ERPLY ERP implementation. Conducted two structured assessment rounds covering POS, procurement, inventory, receiving, customer management, and back office operations -- producing a 25-page gap analysis and 16-page iterative follow-up. Identified 40+ configuration gaps, pricing risks, security exposures, and workflow requirements the platform would need to support before deployment.',
          'Part of the initial two-location pilot for JDE EnterpriseOne time and attendance testing, ahead of division-wide rollout to all locations. Remain the only location conducting ongoing UAT and defect documentation, having identified issues across two release cycles including a time-entry parsing bug (changing "08:15PM" to "7:15am" produced "1:00PM" instead of the expected "07:15AM"), a negative-hours bug allowing overnight shifts to save with a negative duration, and a cost center regression that reappeared after each new build.',
          'Serve as an informal, cross-location go-to resource on APlus order management and inventory behavior: resolved a stuck partial-shipment pick issue for another location\'s Assistant Manager via remote screen share on a weekend with no support staff available, correcting both the immediate ticket and the underlying picking procedure. Separately, Credit department staff have repeatedly routed account configuration questions directly to me, including a settings change a 25-year salesperson and a 15-year assistant manager both believed was not possible.',
        ],
      },
      {
        label: 'Procurement & Vendor Management',
        bullets: [
          'Inherited the full Orgill purchasing function with no transition and no backfill. Built a procurement system from scratch that compressed a 3-5 day manual ordering cycle to under 15 minutes. $70K+ in annual purchases managed with consistent, auditable accuracy.',
          'Brought in directly by ownership to diagnose recurring pallet inventory losses. Identified five distinct, compounding failure points rather than a single cause, pushed back on a proposed blanket fix that would have roughly quadrupled the units requiring physical count without resolving the underlying problem, and delivered a training- and process-based recommendation instead. Diagnosed $2,220 in recoverable write-offs at one location as process failure rather than shrinkage and designed a 7-step pallet return SOP to close the gap.',
          'Orchestrated $914,955+ in multi-vendor construction logistics across 3 customers and 98 confirmed truckloads, each tracked and reconciled load by load against source records, with zero delays attributable to load planning or customer communication despite a sales-side release structure on one job that repeatedly left partial-pallet remainders at the vendor on every pickup, including one release exceeding truck capacity, requiring load rebalancing and partial-release consolidation across multiple pickups to keep the job moving. Built manual reconciliation trackers to restore visibility the ERP couldn\'t natively provide on material moving under multiple item codes across multiple receivers on the same job.',
          'Require signed special-order agreements and deposits on non-stock material to hold customers accountable for committed orders, releasing customers from that obligation only when confident the material can be resold elsewhere rather than defaulting to a write-off.',
        ],
      },
      {
        label: 'Inventory & Supply Chain',
        bullets: [
          'Covered physical inventory accounting and reconciliation for four additional yards alongside my own for one season while a colleague was out, overseeing count reconciliation across a combined $6.7M in on-hand inventory value. Conducted forensic inventory investigations combining live recounts, ERP history audits, receiving logs, and sales data to identify discrepancies and recover financial exposure. Findings compiled into reports reviewed by VP and President.',
          'Developed a mystery-tote liquidation strategy for aged, hard-to-sell tools: bundled slow-moving stock with a gift card and sold sight-unseen at a flat price, clearing dead inventory with zero customer complaints since the format itself set expectations upfront.',
        ],
      },
      {
        label: 'Operations & Facilities',
        bullets: [
          'Proactively identify and resolve physical hazards before they cause incidents, championing a safety culture that goes beyond formal compliance: had exposed conduit surfacing through yard asphalt repaired before it could be caught by a snowplow, flagged a retaining wall at risk of structural failure, and traced asphalt fragments appearing in material bins back to pavement deterioration requiring repair.',
          'Built a suite of operational tools without direction -- routing matrix, procurement automation, load optimization, inventory tracking, job quoting. None were requested. All remain in active daily use.',
        ],
      },
    ],
  },
  {
    title: 'Assistant Operations Manager',
    company: 'O&G Industries',
    location: 'Bridgeport, CT',
    dates: '2017 -- 2019',
    promoted: 'Promoted from Inventory Control Specialist',
    summary: 'Managed regional warehouse serving as consolidation hub for a 7-site distribution network.',
    sections: [
      {
        label: null,
        bullets: [
          'Wrote and presented a 7-page operational improvement proposal grounded in JIT and workforce motivation theory. It was recognized by the executive team and resulted in promotion.',
          'Diagnosed a warehouse layout built on retail-exposure logic rather than pick-efficiency logic. Quantified the cost of the mismatch on a single high-velocity SKU (13.4 miles of unnecessary annual forklift travel) as a proof point, then applied 80/20 Pareto analysis to systematically reposition inventory by velocity. Led inventory rationalization and safety enhancements. Trained and cross-developed 10+ employees across yard, gate, and counter roles.',
          'Took over stucco tinting operations for NY Stucco following Parex\'s acquisition, after diagnosing a root-cause formula mix-up where staff could apply the wrong base preset across product lines, leading to failed applications and, in some cases, O&G covering customer labor costs. Restructured formulas by product and base and built a full mixing protocol, significantly reducing color mismatches.',
          'Built an informal demand-signal system where staff flagged specific item numbers by email as they sold through them, routed to a dedicated folder for review against historical sales data before deciding whether and how much to reorder, closing a gap left by the facility\'s reduced product breadth.',
        ],
      },
    ],
  },
  {
    title: 'Inventory Control Specialist',
    company: 'O&G Industries',
    location: 'Stamford, CT',
    dates: '2015 -- 2017',
    summary: 'Gate operations, BOL verification, and warehouse inventory management.',
    sections: [
      {
        label: null,
        bullets: [
          'Handed a broken ratchet and a hand wrench with no workstation of any kind provided. Designed and built a mobile wheelbarrow assembly workstation from a discarded crate and a pallet jack, then sourced an impact driver to replace the manual tools. Increased assembly rate roughly 10x, from a 2-per-day baseline to 20+ per day. Same instinct, earlier stage.',
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
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--white)', letterSpacing: '0.04em', marginBottom: '0.3rem' }}>B.S. Business Management, Summa Cum Laude</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>Southern New Hampshire University, 2018</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>Ops & Project Management / IT Minor / GPA 3.96</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-dim)' }}>President's List, all 10 terms enrolled</p>
        </div>

        {[
          { name: 'Google Data Analytics Certificate', detail: 'Coursera, 2023 -- Excel, SQL, R, Tableau' },
          { name: 'SAP S/4HANA Supply Chain Training', detail: 'learning.sap.com -- In Progress' },
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
