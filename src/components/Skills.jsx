import React from 'react';

const SKILL_GROUPS = [
  {
    category: 'ERP Systems',
    items: ['ERPLY', 'APlus / AS400', 'JD Edwards', 'XBE', 'OnBase', 'SAP S/4HANA (in progress)'],
  },
  {
    category: 'Development',
    items: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'JWT Auth', 'Google Apps Script', 'REST APIs', 'Google Maps API'],
  },
  {
    category: 'Analytics & BI',
    items: ['SQL', 'R', 'Tableau', 'Advanced Excel', 'Pivot Tables', 'Dynamic Modeling'],
  },
  {
    category: 'Frameworks & Standards',
    items: ['ISO 9001', 'AS9100D', 'JIT', 'Six Sigma (DMAIC)', 'PDCA', 'S&OP Principles'],
  },
  {
    category: 'Operations',
    items: ['Multi-Site Inventory', 'Procurement Modeling', 'Demand Forecasting', 'Vendor Management', 'Supply Chain Risk', 'Load Optimization', 'OSHA Compliance', 'DOT Compliance'],
  },
  {
    category: 'Platforms & Tools',
    items: ['Google Workspace', 'Microsoft 365', 'HammerTech', 'CORVU / HyperVu', 'EmailJS', 'GitHub Pages', 'Vercel'],
  },
];

const TOOLS = [
  { name: 'NEBP-ERP',                        type: 'Full-Stack App',   stack: 'React / Node / PostgreSQL' },
  { name: 'Orgill Orderer',                  type: 'Procurement Tool', stack: 'React / Node / PostgreSQL' },
  { name: 'ThriveMetrics',                   type: 'Full-Stack PWA',   stack: 'React / Supabase / Vercel' },
  { name: 'O&G Material Calculator',         type: 'Sales Tool',       stack: 'React / Vite / Node / PostgreSQL -- intranet-hosted' },
  { name: 'Facility Routing Matrix',         type: 'Decision Tool',    stack: 'Google Sheets -- 150+ towns, 7 yards' },
  { name: 'Material Specification Calc',     type: 'Sales Tool',       stack: 'Google Sheets -- 15+ users' },
  { name: 'Vendor Order Recommendation Engine', type: 'Procurement Tool', stack: 'Google Sheets + Apps Script -- 6 vendors' },
  { name: 'Truck Load & DOT Compliance Planner', type: 'Logistics Tool', stack: 'Google Sheets + Apps Script' },
  { name: 'UPM Stock Tracker',               type: 'Inventory Tool',   stack: 'Google Sheets + Email Alerts' },
  { name: 'Fork Truck Hours Tracker',        type: 'Equipment Tool',   stack: 'Google Sheets' },
  { name: 'Lehigh Drop Ship Pricing Calculator', type: 'Pricing Tool', stack: 'Google Sheets -- Excel formulas (VLOOKUP/XLOOKUP)' },
  { name: 'Open PO by Vendor Report Tool',   type: 'Reporting Tool',   stack: 'Google Sheets + Apps Script' },
  { name: 'Open Orders Aging Report Tool',   type: 'Reporting Tool',   stack: 'Google Sheets + Apps Script' },
  { name: 'Scale Weight Converter',          type: 'Operations Tool',  stack: 'Google Sheets' },
  { name: 'Additional Operational Tools Library', type: 'Tool Collection', stack: 'Google Sheets + Apps Script -- 10+ tools' },
];

export default function Skills() {
  return (
    <div>
      <p className="section-eyebrow">Capabilities</p>
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies, frameworks, and tools built and used in production.</p>

      {/* Skill grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {SKILL_GROUPS.map((group, i) => (
          <div key={group.category} className={`card fade-up fade-up-${Math.min(i + 1, 5)}`}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.85rem' }}>
              {group.category}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {group.items.map((item) => (
                <span key={item} className="badge badge-neutral">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Self-built tools table */}
      <div className="divider">
        <span className="divider-label">Self-Initiated Tools</span>
        <div className="divider-line" />
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(120px, 100%), 1fr))', padding: '0.75rem 1.25rem', background: 'var(--bg-raised)', borderBottom: '1px solid var(--border)' }}>
          {['Tool', 'Type', 'Stack'].map((h) => (
            <span key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>
              {h}
            </span>
          ))}
        </div>
        {TOOLS.map((tool, i) => (
          <div
            key={tool.name}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(120px, 100%), 1fr))',
              padding: '0.85rem 1.25rem',
              borderBottom: i < TOOLS.length - 1 ? '1px solid var(--border)' : 'none',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-hover)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <span style={{ fontSize: '0.875rem', color: 'var(--text)', fontWeight: 500 }}>{tool.name}</span>
            <span><span className="badge" style={{ fontSize: '0.58rem' }}>{tool.type}</span></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{tool.stack}</span>
          </div>
        ))}
      </div>

      {/* Note */}
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.06em', marginTop: '1rem', textAlign: 'center' }}>
        None of the above tools were requested. All remain in active daily use.
      </p>
    </div>
  );
}
