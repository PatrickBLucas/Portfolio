import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// ── FEATURED PROJECTS ─────────────────────────────────────────────────────────
const PU = process.env.PUBLIC_URL || '';

const FEATURED = [
  {
    id: 'nebp-erp',
    repoName: 'nebp-erp',
    name: 'NEBP-ERP',
    badge: 'ERP System',
    tagline: 'Custom Full-Stack Enterprise Resource Planning System',
    description: 'A subsidiary was running entirely on carbon copy paper and interoffice mail with no inventory infrastructure of any kind. I designed and built a complete ERP from the ground up to replace it.',
    problem: 'No inventory system. No order tracking. No vendor records. Every transaction documented by hand on paper forms routed through interoffice mail. The operation had no visibility into stock levels, open orders, or receivables at any point in time.',
    solution: 'Full-stack ERP with real-time inventory management, complete sales order lifecycle (Open to Invoiced), purchase order creation and receiving, customer and vendor management, and role-based access control across six operational roles: Admin, Owner, Logistics, Accounts Payable, Accounts Receivable, and Viewer.',
    outcome: 'A fully deployed system that replaced a paper-based operation with a modern centralized platform. The same architecture applies to any small distributor or multi-location operation running without formal inventory infrastructure.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'JWT Auth'],
    screenshots: [
      { src: `${PU}/images/nebp_erp.png`, caption: 'Sales Orders' },
      { src: `${PU}/images/nebp_erp_2.png`, caption: 'Purchase Orders' },
      { src: `${PU}/images/nebp_erp_3.png`, caption: 'Dashboard' },
    ],
    github: null,
    stats: [
      { value: '0', label: 'Prior System' },
      { value: '6', label: 'User Roles' },
      { value: '7', label: 'Modules' },
    ],
  },
  {
    id: 'orgill-orderer',
    repoName: 'orgill-orderer',
    name: 'Orgill Orderer',
    badge: 'Procurement Tool',
    tagline: 'Procurement Automation and Decision Support System',
    description: 'A seasonal procurement cycle across 50+ SKUs and multiple supplier programs was being managed from memory. It took 3-5 days per cycle, produced recurring stockouts, and generated fragmented POs that triggered avoidable cost penalties. I replaced it entirely.',
    problem: 'Memory-based ordering across 4-5 fragmented POs per cycle, misallocating $55 landing costs onto low-value orders. Recurring stockouts corrupted demand history and blocked the volume thresholds needed for tier pricing. No systematic way to match promotional ship windows to open inventory needs.',
    solution: 'Data-driven procurement system ingesting live inventory exports, applying hybrid demand forecasting using prior-year sales with YTD fallback logic, optimizing to case pack quantities, matching active promo programs by ship window, and generating a single upload-ready PO file. The forecasting logic handles new SKUs, seasonality gaps, and partial-year data without manual intervention.',
    outcome: 'Ordering cycle compressed from 3-5 days to under 15 minutes. Single consolidated PO per cycle. Split-box penalties eliminated. Over $70K in annual purchases managed with consistent, auditable accuracy. This replaced an earlier spreadsheet-based system I built using Apps Script -- when the business outgrew it, I rebuilt the whole thing as a full-stack application.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Google Sheets API', 'Excel Export'],
    screenshots: [
      { src: `${PU}/images/orgill_orderer.png`, caption: 'Order Run Interface' },
    ],
    github: null,
    stats: [
      { value: '3-5D', label: 'Before' },
      { value: '15M',  label: 'After' },
      { value: '$70K', label: 'Annual Volume' },
    ],
  },
  {
    id: 'thrivemetrics',
    repoName: 'peloton-dashboard',
    name: 'ThriveMetrics',
    badge: 'Full-Stack PWA',
    tagline: 'Personal Fitness & Nutrition Dashboard',
    description: 'A full-stack progressive web app that consolidates fitness and nutrition data from multiple APIs into a single personal dashboard. Built from scratch with no backend infrastructure -- Google Sheets serves as the database.',
    problem: 'Fitness and nutrition data lives across disconnected platforms: Peloton for workouts, Fitbit for daily activity, manual logs for food. No single view. No automated sync. No way to track calories in vs. calories out against a computed daily target without switching between apps.',
    solution: 'React 18 PWA with OAuth2 authentication, automated Peloton workout sync via a custom Apps Script integration with token refresh handling, Fitbit daily data sync, and four nutrition entry modes: AI text estimation, live barcode scanning using the native BarcodeDetector API, photo recognition, and manual entry. Barcode lookup queries Open Food Facts and USDA FoodData Central in parallel with UPC-A to EAN-13 fallback. BMR and TDEE computed client-side using the Mifflin-St Jeor formula. All data stored and updated via the Google Sheets API.',
    outcome: 'A fully functional installable PWA running in production with no monthly infrastructure cost. Demonstrates end-to-end full-stack architecture: OAuth2 flows, third-party API integration, serverless backend via Apps Script, and a polished mobile-first UI. This evolved from an earlier spreadsheet-based data analysis project -- when the manual workflow hit its ceiling, I rebuilt it as a full application.',
    stack: ['React 18', 'Google Sheets API', 'Google Apps Script', 'Recharts', 'Anthropic Claude API', 'Open Food Facts API', 'USDA FoodData Central', 'OAuth2', 'PWA', 'GitHub Pages'],
    screenshots: [
      { src: `${PU}/images/thrive_metrics_mobile.jpg`, caption: 'Workout Tracking' },
      { src: `${PU}/images/thrive_metrics_mobile_2.jpg`, caption: 'Food Log' },
      { src: `${PU}/images/thrive_metrics_desktop.png`, caption: 'Desktop View' },
    ],
    github: 'https://github.com/patrickblucas/peloton-dashboard',
    stats: [
      { value: '4', label: 'Entry Modes' },
      { value: '3', label: 'API Sources' },
      { value: '$0', label: 'Infra Cost' },
    ],
  },
  {
    id: 'renees-magic-garden',
    repoName: 'Renees-Magic-Garden',
    name: "Renee's Magic Garden",
    badge: 'IoT System',
    tagline: 'Remote Monitoring & Control for an Aeroponic Grow System',
    description: 'A fully custom IoT system built to run a year-round self-maintaining aeroponic garden. Flutter mobile app talks to a Raspberry Pi over a REST API to monitor sensors and control every aspect of the grow environment remotely.',
    problem: 'Aeroponic growing requires precise, continuous management of multiple interdependent variables -- aeration cycles, water temperature, pH levels, light schedules, humidity -- that are impractical to monitor manually around the clock. Missing a parameter drift can kill an entire crop.',
    solution: 'Flutter mobile app with Firebase authentication communicating with a Python-based Raspberry Pi controller via REST API. Controls include aeration timing and duration, water temperature monitoring, pH sensing with automated dosing pump to add fertilizer on demand, tank agitation, grow light scheduling and physical height adjustment, and a humidity-triggered fan purge. A connected camera supports live feeds and timelapse photography of the grow cycle.',
    outcome: 'Software fully built and hardware integration designed. System is ready to deploy. Demonstrates end-to-end IoT architecture: mobile frontend, cloud authentication, REST API communication, and physical hardware control across sensors and actuators on a single-board computer.',
    stack: ['Flutter', 'Python', 'Raspberry Pi', 'Firebase Auth', 'REST API', 'IoT'],
    screenshots: [
      { src: `${PU}/images/magic_garden.png`, caption: 'App Interface' },
    ],
    github: 'https://github.com/patrickblucas/Renees-Magic-Garden',
    stats: [
      { value: '8+', label: 'Sensors & Controls' },
      { value: '1', label: 'Raspberry Pi' },
      { value: '24/7', label: 'Designed For' },
    ],
  },
];

// ── MANUAL REPO CARDS (non-featured, no GitHub API dependency) ────────────────
const MANUAL_REPOS = [
  {
    id: 'logistics-optimizer',
    name: 'Logistics-Optimizer',
    html_url: 'https://github.com/patrickblucas/Logistics-Optimizer',
    imageUrl: `${PU}/images/Logistics_Matrix.png`,
    description: 'Network routing reference matrix mapping driving distances from 7 facility locations to all 169 Connecticut towns with automatic closest-yard lookup. Built as a static reference after a dynamic Google Maps API implementation generated hundreds of simultaneous calls. Pre-calculating all distances eliminated API costs and latency while maintaining full accuracy for dispatch routing and FOB decisions across the distribution network.',
  },
  {
    id: 'truck-balancer',
    name: 'Truck-Balancer',
    html_url: 'https://github.com/patrickblucas/truck-balancer',
    imageUrl: `${PU}/images/truck_balancer.png`,
    description: 'Load optimization tool for balancing multi-stop delivery routes across an available fleet. Reduces deadhead miles and improves yard utilization by distributing orders across trucks based on capacity and stop sequencing.',
  },
];

function formatRepoName(name) {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function GitHubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

// ── FEATURED CARD ─────────────────────────────────────────────────────────────
function FeaturedCard({ project, onClick, animClass }) {
  const [imgError, setImgError] = useState(false);
  const firstShot = project.screenshots[0];

  return (
    <div
      className={`fade-up ${animClass}`}
      onClick={() => onClick(project)}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--amber)';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Screenshot */}
      <div style={{ position: 'relative', background: 'var(--bg-raised)', height: '220px', overflow: 'hidden' }}>
        {!imgError && firstShot ? (
          <img
            src={firstShot.src}
            alt={project.name}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
              {project.name}
            </span>
          </div>
        )}
        {/* Amber tint overlay on bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(transparent, var(--bg-surface))' }} />
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="badge">{project.badge}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
            Click to expand
          </span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '0.04em', color: 'var(--white)', lineHeight: 1 }}>
          {project.name}
        </h3>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--amber)', letterSpacing: '0.06em' }}>
          {project.tagline}
        </p>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
          {project.description}
        </p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${project.stats.length}, 1fr)`, gap: '0.75rem', padding: '1rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          {project.stats.map((s) => (
            <div key={s.label} className="stat-block">
              <span className="stat-value" style={{ fontSize: '1.4rem' }}>{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.stack.map((s) => (
            <span key={s} className="badge badge-neutral">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CASE STUDY MODAL ──────────────────────────────────────────────────────────
function CaseStudyModal({ project, onClose, onImageZoom }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel={`${project.name} Case Study`}
      style={{
        content: {
          inset: 0,
          padding: 0,
          background: 'transparent',
          border: 'none',
          borderRadius: 0,
          overflow: 'visible',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        overlay: {
          backgroundColor: 'rgba(5, 8, 14, 0.92)',
          backdropFilter: 'blur(6px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        },
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-bright)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '760px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Modal header */}
        <div style={{ padding: '1.75rem 1.75rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div>
            <span className="badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{project.badge}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', letterSpacing: '0.05em', color: 'var(--white)', lineHeight: 1, margin: '0 0 0.35rem' }}>{project.name}</h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--amber)', letterSpacing: '0.08em', margin: 0 }}>{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-bright)', color: 'var(--text-muted)', width: 32, height: 32, borderRadius: 'var(--radius)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.85rem', transition: 'var(--transition)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--amber)'; e.currentTarget.style.color = 'var(--amber)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-bright)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            ✕
          </button>
        </div>

        {/* Modal body */}
        <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${project.stats.length}, 1fr)`, gap: '0.75rem', margin: '1.25rem 0', padding: '1.25rem', background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
            {project.stats.map((s) => (
              <div key={s.label} className="stat-block">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.screenshots.map((shot, i) => (
                <div key={i}>
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    onClick={() => onImageZoom(shot.src)}
                    onError={(e) => { e.target.style.display = 'none'; }}
                    style={{ width: '100%', borderRadius: 'var(--radius)', border: '1px solid var(--border)', display: 'block', cursor: 'zoom-in' }}
                  />
                  {shot.caption && (
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '0.3rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {shot.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Case study sections */}
          {[
            { label: 'The Problem', text: project.problem },
            { label: 'The Solution', text: project.solution },
            { label: 'The Outcome', text: project.outcome },
          ].map((section) => (
            <div key={section.label} style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.4rem' }}>
                {section.label}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
                {section.text}
              </p>
            </div>
          ))}

          {/* Tech stack */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.6rem' }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.stack.map((s) => (
                <span key={s} className="badge badge-neutral">{s}</span>
              ))}
            </div>
          </div>

          {project.github && (
            <a className="btn-primary" href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <GitHubIcon size={13} /> View on GitHub
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}

// ── GITHUB REPO CARD ──────────────────────────────────────────────────────────
function RepoCard({ repo, highlight, imageUrl: imageUrlProp, onImageZoom }) {
  const imageUrl = imageUrlProp || `https://raw.githubusercontent.com/patrickblucas/${repo.name}/main/snapshot.png`;

  return (
    <div
      className="card"
      style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
    >
      <img
        src={imageUrl}
        alt={repo.name}
        onClick={() => onImageZoom(imageUrl)}
        onError={(e) => { e.target.style.display = 'none'; }}
        style={{ width: '100%', height: '130px', objectFit: 'cover', objectPosition: 'top', borderRadius: 'var(--radius)', border: '1px solid var(--border)', cursor: 'pointer', display: 'block', background: 'var(--bg-raised)' }}
      />
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', color: 'var(--white)' }}>
        {formatRepoName(repo.name)}
      </p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>
        {highlight || repo.description || 'No description available.'}
      </p>
      <a className="btn-ghost" href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.68rem', padding: '0.45rem 0.9rem', alignSelf: 'flex-start' }}>
        <GitHubIcon size={11} /> View Repo
      </a>
    </div>
  );
}

// Stable constants outside component to avoid useEffect dependency warnings
const username = 'patrickblucas';
const featuredRepoNames = FEATURED.map((p) => p.repoName.toLowerCase());
const manualRepoNames = MANUAL_REPOS.map((r) => r.name.toLowerCase());
const excludedRepos = [
  ...featuredRepoNames,
  ...manualRepoNames,
  'portfolio',
  'patrickblucas-website',
  'efficient-ordering',
  'peloton-data-analysis',
  'proxmox-project',
  'facility-routing-matrix',
];

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [highlights, setHighlights] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`);
        const data = await res.json();
        const filtered = data.filter((r) => !excludedRepos.includes(r.name.toLowerCase()) && !r.fork);

        const hl = {};
        await Promise.all(filtered.map(async (repo) => {
          try {
            const hRes = await fetch(`https://raw.githubusercontent.com/${username}/${repo.name}/main/highlight.txt`);
            if (hRes.ok) hl[repo.name] = await hRes.text();
          } catch (_) {}
        }));

        setRepos(filtered);
        setHighlights(hl);
      } catch (_) {}
      finally { setLoading(false); }
    })();
  }, []);

  return (
    <div>
      <p className="section-eyebrow">Work</p>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Systems built to solve real operational problems. None were requested.</p>

      {/* Featured */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {FEATURED.map((p, i) => (
          <FeaturedCard key={p.id} project={p} onClick={setActiveProject} animClass={`fade-up-${i + 1}`} />
        ))}
      </div>

      {/* Other repos */}
      {(!loading || MANUAL_REPOS.length > 0) && (
        <>
          <div className="divider">
            <span className="divider-label">Other Repositories</span>
            <div className="divider-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {MANUAL_REPOS.map((repo) => (
              <RepoCard key={repo.id} repo={repo} imageUrl={repo.imageUrl} onImageZoom={setZoomedImage} />
            ))}
            {!loading && repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} highlight={highlights[repo.name]} onImageZoom={setZoomedImage} />
            ))}
          </div>
        </>
      )}

      {loading && (
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textAlign: 'center', padding: '3rem' }}>
          Loading repositories...
        </p>
      )}

      {/* Case study modal */}
      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} onImageZoom={setZoomedImage} />
      )}

      {/* Image zoom modal */}
      {zoomedImage && (
        <Modal
          isOpen={true}
          onRequestClose={() => setZoomedImage(null)}
          contentLabel="Enlarged Screenshot"
          style={{
            content: { inset: 0, background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' },
            overlay: { backgroundColor: 'rgba(0,0,0,0.93)', zIndex: 2000, cursor: 'zoom-out' },
          }}
        >
          <img src={zoomedImage} alt="Enlarged" onClick={() => setZoomedImage(null)} style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: 'var(--radius)', cursor: 'zoom-out', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }} />
        </Modal>
      )}
    </div>
  );
}
