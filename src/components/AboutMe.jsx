import React from 'react';

const STATS = [
  { value: '10+',  label: 'Years in Operations' },
  { value: '7',    label: 'Branches Supported' },
  { value: '$2M',  label: 'Inventory Managed' },
  { value: '60LB', label: 'Lost via DMAIC' },
];

const PRINCIPLES = [
  { label: 'Systems First',      text: 'Every recurring problem is a process failure waiting to be fixed permanently. I build the fix, not the workaround.' },
  { label: 'Automate the Grind', text: 'If I am doing the same work twice, I am building something to do it for me. Effort goes in once. The system does the rest.' },
  { label: 'Data Over Intuition', text: 'Gut instinct is a starting point. A demand forecast, a variance report, a tracking model -- that is how you actually know.' },
  { label: 'Build for the Floor', text: 'Tools that only work for smart people in ideal conditions are not tools. They are overhead. I build for the person who needs it most.' },
];

export default function AboutMe() {
  return (
    <div>
      <p className="section-eyebrow">Profile</p>
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Operations leader, systems builder, process obsessive.</p>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {STATS.map((s) => (
          <div key={s.label} className="card fade-up fade-up-1">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className="card fade-up fade-up-2" style={{ marginBottom: '1rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          I am a Senior Operations and Systems Manager based in Shelton, CT. I directly manage one location but operate across a much larger footprint: a mason supply network spanning seven branches, a fabrication and distribution center, quarry operations across four sites, an asphalt plant, a building division, and shared fleet and repair resources. I also oversee physical inventory counts and reconciliation for four additional branches. I have spent a decade inside that organization doing something fairly unusual: automating the repetitive and error-prone parts of the job so I can stay fully present where experience, judgment, and accountability actually matter.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          Each tool has been built to eliminate a cost, close a gap, or remove a dependency that the existing process had no systematic way to address. A procurement process that took days and generated invisible cost misallocations now runs in minutes with consistent, auditable results. A subsidiary operating on carbon copy paper now has a full ERP. A routing decision that was quietly costing the company money on every wrong delivery now takes three seconds to get right. The tools are different. The pattern is always the same.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          My instinct when I encounter a broken process is not to work around it. It is to find the bottleneck, understand exactly why it exists, design something that eliminates it permanently, and make sure it runs without me standing over it. That is not disengagement. That is how I stay engaged where it counts.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
          Outside work I am a husband, dad, and project guy. Florida fishing trips, custom PC builds, 3D modeling and printing, and a Peloton habit that I turned into a controlled experiment using DMAIC. I lost 60 pounds that way. Same methodology, different inputs.
        </p>
      </div>

      {/* Principles */}
      <div className="divider">
        <span className="divider-label">Operating Principles</span>
        <div className="divider-line" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {PRINCIPLES.map((p, i) => (
          <div key={p.label} className={`card fade-up fade-up-${i + 2}`}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.5rem' }}>
              {p.label}
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{p.text}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div style={{ marginTop: '2rem', padding: '1.5rem', borderLeft: '3px solid var(--amber)', background: 'var(--amber-glow)', borderRadius: '0 var(--radius) var(--radius) 0' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.7 }}>
          "That's just how we've always done it" is not a reason. It's a challenge.
        </p>
      </div>
    </div>
  );
}
