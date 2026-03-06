import React from 'react';

const SKILL_GROUPS = [
  {
    category: 'ERP Systems',
    items: ['ERPLY', 'APlus / AS400', 'JD Edwards', 'XBE', 'OnBase', 'SAP S/4HANA (in progress)'],
  },
  {
    category: 'Development',
    items: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'JWT Auth', 'Google Apps Script', 'REST APIs', 'Google Maps API'],
  },
  {
    category: 'Analytics & BI',
    items: ['SQL', 'R', 'Tableau', 'Power BI', 'Advanced Excel', 'Pivot Tables', 'Dynamic Modeling'],
  },
  {
    category: 'Frameworks & Standards',
    items: ['ISO 9001', 'AS9100D', 'Lean / JIT', 'Six Sigma (DMAIC)', 'PDCA', 'S&OP Principles'],
  },
  {
    category: 'Operations',
    items: ['Multi-Site Inventory', 'Procurement Modeling', 'Demand Forecasting', 'Vendor Management', 'Supply Chain Risk', 'Load Optimization', 'OSHA Compliance'],
  },
  {
    category: 'Platforms & Tools',
    items: ['Google Workspace', 'Microsoft 365', 'HammerTech', 'CORVU / HyperVu', 'EmailJS', 'GitHub Pages'],
  },
];

const TOOLS = [
  { name: 'NEBP-ERP',                  type: 'Full-Stack App',    stack: 'React / Node / PostgreSQL' },
  { name: 'Orgill Orderer',            type: 'Procurement Tool',  stack: 'React / Node / Google Sheets API' },
  { name: 'Facility Routing Matrix',   type: 'Decision Tool',     stack: 'Google Sheets — 169 towns, 7 yards' },
  { name: 'Material Specification Calc', type: 'Sales Tool', stack: 'Google Sheets — 6 yrs, 15+ users' },
  { name: 'Order Calculator',           type: 'Order Gen Tool',    stack: 'Google Sheets + Apps Script — 7 suppliers' },
  { name: 'Vendor Order Calculator',   type: 'Procurement Tool',  stack: 'Google Sheets' },
  { name: 'UPM Inventory Tracker',     type: 'Inventory Tool',    stack: 'Google Sheets + Email Alerts' },
  { name: 'Scale Weight Converter',    type: 'Operations Tool',   stack: 'Google Sheets' },
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
