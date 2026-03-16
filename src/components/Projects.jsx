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
    description: 'A wholesale subsidiary was one resignation away from operational collapse. Every price, every customer relationship, every vendor instruction, and every inventory figure lived in one person\'s head. I built the infrastructure that replaced that dependency.',
    problem: 'The operation ran entirely on carbon copy paper and institutional knowledge. Orders came in by phone, got written on three-part carbon copies, and made their way to billing through a chain of handoffs that broke regularly. There was no inventory record, no formal PO system, and no order tracking. Delivery instructions lived in conversation, which meant vendor shipments routinely landed at the wrong location, triggering unplanned truck runs and scheduling disruptions nobody could track. When the lynchpin was unavailable, sales stopped.',
    solution: 'Full-stack ERP built from scratch: real-time inventory tracking with allocation visibility, sales order lifecycle from Open to Invoiced, formal purchase order creation and receiving, customer and vendor records that live in the system instead of someone\'s memory, and role-based access control across six operational roles. The operation went from zero infrastructure to a system capable of running without its single point of failure.',
    outcome: 'Fully built and tested. Awaiting presentation to the President for rollout approval. The same architecture applies to any small distributor or multi-location operation where critical business knowledge is concentrated in people instead of systems. Most businesses have a version of this problem. This is what the fix looks like.',
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
    tagline: 'Demand-Driven Procurement Automation',
    description: 'A 3-5 day manual procurement process was generating stockouts, split-box penalties, missed promotions, and landing cost misallocations that nobody could see. I replaced the entire process with a system that runs in under 15 minutes and produces consistent results regardless of who runs it.',
    problem: 'The prior process depended entirely on one person\'s memory and manual execution at every step. Products got missed because there was no systematic way to check everything. Quantities were estimated by feel. Case pack rules required manual compliance. Promotional pricing required extra navigation steps most people skipped. Each missed item meant a separate PO, and each separate PO meant the $55 landing fee plus 2% of product value got allocated to that order alone instead of spreading across the full load, silently inflating unit costs on specific products. Nobody knew it was happening because the error was baked into the receiving process invisibly.',
    solution: 'Demand-driven procurement system that starts from a full inventory export rather than memory. Calculates order quantities against actual sales data with shelf life adjustments built in, with perishable products ordered conservatively to prevent expiration losses. Checks for active promotional pricing automatically. Enforces case pack compliance to eliminate split-box penalties. Consolidates everything into a single PO, which means landing costs distribute correctly across the full order every time. Output uploads directly to the vendor portal.',
    outcome: 'Ordering cycle compressed from 3-5 days to under 15 minutes. Single consolidated PO per cycle. Split-box penalties eliminated. Over $70K in annual purchases managed with consistent, auditable accuracy. When the previous purchaser left with no transition plan, the function was absorbed with no backfill and no disruption. This replaced an earlier spreadsheet-based system; when the business outgrew it, I rebuilt it as a full-stack application.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Google Sheets API', 'Excel Export'],
    screenshots: [
      { src: `${PU}/images/orgill_orderer.png`, caption: 'Order Run Interface' },
    ],
    github: null,
    stats: [
      { value: '3-5D', label: 'Before' },
      { value: '15M', label: 'After' },
      { value: '$70K', label: 'Annual Volume' },
    ],
  },
  {
    id: 'thrivemetrics',
    repoName: 'peloton-dashboard',
    name: 'ThriveMetrics',
    badge: 'Full-Stack PWA',
    tagline: 'Personal Fitness & Nutrition Dashboard',
    description: 'I applied DMAIC to my own health the same way I apply it to broken processes at work. The existing fitness apps did not give me the data I needed to analyze my own performance. So I built my own.',
    problem: 'Fitness and nutrition data lived across disconnected platforms with no single view, no automated sync, and no way to track calories in versus calories out against a computed daily target. More importantly, there was no feedback loop: no system that looked at trends over time and told you what the data meant and what to do about it.',
    solution: 'React 18 PWA with automated Peloton workout sync, Fitbit daily data sync, and four nutrition entry modes: AI text estimation, live barcode scanning via the native BarcodeDetector API, photo recognition, and manual entry. Barcode lookup queries Open Food Facts and USDA FoodData Central in parallel. BMR and TDEE computed client-side using the Mifflin-St Jeor formula. The control phase is a weekly AI coaching report auto-generated every Monday from four weeks of real data covering workout output, heart rate zones, calorie balance, recovery patterns, and specific goals for the coming week. No manual review. The system tells you what the data says.',
    outcome: '60 pounds lost. Same methodology as every other system I build: define the problem, measure what matters, analyze the patterns, improve the inputs, build controls that make the outcome sustainable. Different inputs. This evolved from an earlier spreadsheet-based project; when the manual workflow hit its ceiling, I rebuilt it as a full application.',
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
      { value: '60LB', label: 'Lost via DMAIC' },
    ],
  },
  {
    id: 'renees-magic-garden',
    repoName: 'Renees-Magic-Garden',
    name: "Renee's Magic Garden",
    badge: 'IoT System',
    tagline: 'Remote Monitoring & Control for an Aeroponic Grow System',
    description: 'Aeroponic growing requires precise, continuous management of multiple interdependent variables that are impractical to monitor manually. I built the system that manages them automatically.',
    problem: 'Aeration cycles, water temperature, pH levels, dosing schedules, light timing, humidity: each variable affects the others and all of them need to stay within range continuously. Manual monitoring is not a viable long-term solution. Missing a parameter drift can kill an entire crop.',
    solution: 'Flutter mobile app with Firebase authentication communicating with a Python-based Raspberry Pi controller via REST API. Controls include aeration timing and duration, water temperature monitoring, pH sensing with automated dosing pump, tank agitation, grow light scheduling and physical height adjustment, and a humidity-triggered fan purge. Connected camera supports live feeds and timelapse photography of the full grow cycle.',
    outcome: 'Software fully built and hardware integration designed. System is ready to deploy. End-to-end IoT architecture: mobile frontend, cloud authentication, REST API communication, and physical hardware control across sensors and actuators on a single-board computer.',
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
    html_url: null,
    imageUrl: `${PU}/images/Logistics_Matrix.png`,
    description: 'Connecticut town names are deceptive. Westport and Westbrook sound interchangeable but sit on opposite ends of the state. Salespeople assigning delivery yards from memory were routinely routing trucks 30+ extra miles while billing customers for the shorter haul, eating the difference invisibly in delivery margins. This matrix maps driving distances from all 7 facility locations to all 169 Connecticut towns, color-coded by closest yard, so the right answer takes three seconds instead of local geography knowledge.',
  },
  {
    id: 'truck-balancer',
    name: 'Truck-Balancer',
    html_url: null,
    imageUrl: `${PU}/images/truck_balancer.png`,
    description: 'Ordering full truckloads from hardscape vendors means hitting a precise weight target. Too heavy and the vendor calls you to cut pallets, revise the PO, and resubmit. Too light and they call you to add material, revise the PO, and resubmit. A mixed load with five products at different weights per pallet turns into a load-balancing problem that previously required manual math or a call to purchasing. This tool shows available weight capacity in real time as you build the load. Products that can still accept pallets stay green. Products that would push the truck over the limit turn red. When nothing green remains, the load is optimized. Cut the PO in seconds.',
  },
  {
    id: 'order-estimator',
    name: 'Order-Estimator',
    html_url: null,
    imageUrl: `${PU}/images/order_estimator.png`,
    description: 'Deciding what to order from hardscape vendors was a memory exercise. The standard approach was cycling through the ERP looking for products that appeared low, relying on recall for the rest, and hoping the smaller volume items did not get missed. They did, regularly. This tool ingests a full inventory export and computes a coverage percentage for every SKU: quantity on hand minus allocations minus year-to-date sales against last year\'s full sales pace. Items closest to a stockout float to the top. Nothing gets missed because the system looks at everything. Output feeds directly into the Truck Balancer to fill loads to the legal weight limit without rework.',
  },
  {
    id: 'release-tracker',
    name: 'Release-Tracker',
    html_url: null,
    imageUrl: `${PU}/images/order_release.png`,
    description: 'Large direct-ship projects spanning dozens of truckloads over months create a reconciliation gap that standard ERP systems cannot close. Invoices arrive for full loads when trucks delivered partial loads. Product variations ship across releases with no systematic record of what proportion went on which truck. By the time a discrepancy surfaces the job is nearly complete and there is no documentation trail to reconstruct what happened. This system logs every release: driver, date, product, pallet count, weight, BOL number, and invoice number. Every outbound delivery gets matched against it. The running balance by SKU is always current. Applied across $850K in direct-ship projects. Zero unreconciled deliveries since implementation.',
  },
  {
    id: 'og-cheat-sheet',
    name: 'OG-Cheat-Sheet',
    html_url: null,
    imageUrl: `${PU}/images/cheatsheet.png`,
    description: 'Quoting hardscape material quantities is simple math that goes wrong constantly under pressure. A customer gives you dimensions, you calculate square footage, convert to the vendor\'s sell unit, round to correct pallet and layer quantities, and give them a number. Then they change the dimensions. Then they add a border. Each change means redoing the calculation by hand. Underquote and the customer runs short mid-job and wants a free delivery. Overquote and they return the excess, requiring piece-by-piece inspection before anything goes back to stock. This calculator handles the full chain in real time: enter dimensions, account for borders, and it returns the correct quantity in the vendor\'s sell unit, the number of pallets to charge, and the layer and piece breakdown the yard needs to pull the order. Built after redoing the same calculation four times for one customer. Now used across the sales network.',
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
  const imageUrl = imageUrlProp || (repo.html_url ? `https://raw.githubusercontent.com/patrickblucas/${repo.name}/main/snapshot.png` : null);

  return (
    <div
      className="card"
      style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={repo.name}
          onClick={() => onImageZoom(imageUrl)}
          onError={(e) => { e.target.style.display = 'none'; }}
          style={{ width: '100%', height: '130px', objectFit: 'cover', objectPosition: 'top', borderRadius: 'var(--radius)', border: '1px solid var(--border)', cursor: 'pointer', display: 'block', background: 'var(--bg-raised)' }}
        />
      )}
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', color: 'var(--white)' }}>
        {formatRepoName(repo.name)}
      </p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>
        {highlight || repo.description || 'No description available.'}
      </p>
      {repo.html_url && (
        <a className="btn-ghost" href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.68rem', padding: '0.45rem 0.9rem', alignSelf: 'flex-start' }}>
          <GitHubIcon size={11} /> View Repo
        </a>
      )}
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
