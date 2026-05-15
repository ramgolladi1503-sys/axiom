import React from "react";
import { createRoot } from "react-dom/client";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Control Tower", href: "#control-tower" },
  { label: "Method", href: "#method" },
  { label: "Access", href: "#access" },
];

const WORK = [
  {
    label: "01",
    title: "Human approval for AI execution",
    body:
      "Mobile approval layers that keep AI agents, code workers, and automation pipelines from acting without review.",
  },
  {
    label: "02",
    title: "Systems that hold under pressure",
    body:
      "Backend flows, audit trails, validation gates, and execution workers designed around failure, not wishful thinking.",
  },
  {
    label: "03",
    title: "Evidence-driven engineering",
    body:
      "Projects are built to produce proof: decisions, tests, diffs, approvals, recovery paths, and traceable outcomes.",
  },
];

const METHOD = [
  {
    title: "Governance",
    body: "Every meaningful action needs clear ownership, permission, and accountability.",
  },
  {
    title: "Trusted execution",
    body: "Code changes, agent actions, and approvals are bound to validation and payload integrity.",
  },
  {
    title: "Engineering rigor",
    body: "The work is shaped by constraints, failure modes, and real deployment pressure.",
  },
  {
    title: "Forged systems",
    body: "The brand mark represents layered effort: systems woven, tested, and strengthened over time.",
  },
];

const CONTROL_TOWER_POINTS = [
  "Approval queue for AI/code actions",
  "Risk-aware review before execution",
  "Payload integrity and audit timeline",
  "Agent, MCP, and GitHub execution oversight",
];

function App() {
  return (
    <>
      <style>{styles}</style>
      <div className="page-shell">
        <Header />
        <main>
          <Hero />
          <WorkSection />
          <ControlTowerSection />
          <LogoStorySection />
          <MethodSection />
          <AccessSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="AIXION LABS">
          <LogoMark className="brand-mark" />
          <div className="brand-copy">
            <div className="brand-name">AIXION LABS</div>
            <div className="brand-sub">FORGED SYSTEMS ENGINEERING</div>
          </div>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {NAV.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-action" href="#access">
          Request Access
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">AIXION LABS · PRIVATE ENGINEERING SYSTEMS</div>
          <h1>Forged systems for AI-era execution.</h1>
          <p className="hero-body">
            AIXION LABS builds serious control surfaces for environments where AI, automation,
            and code execution need human judgment before action.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#control-tower">
              View Control Tower
            </a>
            <a className="button button-secondary" href="#work">
              See What We Build
            </a>
          </div>

          <div className="signal-row" aria-label="Brand principles">
            <Signal label="Governance" value="Clarity" />
            <Signal label="Execution" value="Integrity" />
            <Signal label="Oversight" value="Traceability" />
          </div>
        </div>

        <div className="hero-identity" aria-label="AIXION LABS identity mark">
          <div className="identity-card">
            <LogoMark className="hero-logo" />
            <div className="identity-label">AIXION LABS</div>
            <div className="identity-sub">CONTROL · APPROVAL · EVIDENCE</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signal({ label, value }) {
  return (
    <div className="signal-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function WorkSection() {
  return (
    <section id="work" className="section-block">
      <div className="container">
        <SectionHeader
          eyebrow="Work"
          title="Not dashboards. Not demos. Control systems."
          intro="The work sits at the point where software stops being decorative and starts deciding what can safely happen next."
        />

        <div className="work-grid">
          {WORK.map((item) => (
            <article className="work-card" key={item.title}>
              <div className="card-label">{item.label}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ControlTowerSection() {
  return (
    <section id="control-tower" className="section-block product-section">
      <div className="container product-grid">
        <div>
          <SectionHeader
            eyebrow="Flagship Product"
            title="AIXION Control Tower"
            intro="A mobile approval console for AI and code agents. It keeps execution paused until the right human decision, validation path, and audit trail exist."
          />

          <div className="product-points">
            {CONTROL_TOWER_POINTS.map((point) => (
              <div className="product-point" key={point}>
                <span className="point-dot" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="console-card" aria-label="Control Tower interface preview">
          <div className="console-topline">
            <span>AIXION CONTROL TOWER</span>
            <strong>SECURE</strong>
          </div>
          <div className="console-title">Approval Detail</div>
          <div className="console-subtitle">Review risk before execution is allowed.</div>

          <div className="approval-panel warning-panel">
            <div className="panel-tag">HIGH RISK</div>
            <h3>Modify backend approval bridge</h3>
            <p>Touches execution flow and approval state transition logic.</p>
          </div>

          <div className="console-matrix">
            <MiniStatus label="Source" value="Codex Worker" state="Verified" />
            <MiniStatus label="Integrity" value="Payload Hash" state="Verified" />
            <MiniStatus label="Target" value="feature/approval" state="Safe Branch" />
            <MiniStatus label="Validation" value="pytest backend" state="Required" />
          </div>

          <div className="approval-panel">
            <div className="panel-tag muted">APPROVAL GATE</div>
            <p>Approval unlocks only after diff review, validation command, and audit event checks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStatus({ label, value, state }) {
  return (
    <div className="mini-status">
      <span>{label}</span>
      <strong>{value}</strong>
      <em>{state}</em>
    </div>
  );
}

function LogoStorySection() {
  return (
    <section className="logo-story-section">
      <div className="container logo-story-grid">
        <div className="logo-story-visual">
          <LogoMark className="story-logo" />
        </div>
        <div>
          <div className="eyebrow">Identity</div>
          <h2>The forged network mark.</h2>
          <p>
            The AIXION mark is built from interlocked geometric bands. It represents the way
            serious systems are made: not in one clean stroke, but through layers of effort,
            review, correction, and integration.
          </p>
          <p>
            It carries the shape language of architecture, evidence, and controlled execution —
            the same principles behind Control Tower and every future AIXION LABS system.
          </p>
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="method" className="section-block">
      <div className="container">
        <SectionHeader
          eyebrow="Method"
          title="Built around effort, evidence, and restraint."
          intro="Good systems do not just move fast. They know when not to move, what to verify, and what to record."
        />

        <div className="method-grid">
          {METHOD.map((item) => (
            <article className="method-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section id="access" className="access-section">
      <div className="container access-panel">
        <LogoMark className="access-logo" />
        <div className="eyebrow">Access</div>
        <h2>Engagements are selective.</h2>
        <p>
          AIXION LABS is built for high-accountability environments. We do not sell generic automation.
          We build controlled systems where correctness, auditability, and execution discipline matter.
        </p>
        <a className="button button-primary" href="mailto:contact@aixionlabs.com">
          contact@aixionlabs.com
        </a>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, intro }) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© 2026 AIXION LABS</span>
        <span>Forged systems engineering</span>
      </div>
    </footer>
  );
}

function LogoMark({ className = "" }) {
  return (
    <svg
      className={`logo-mark ${className}`}
      viewBox="0 0 120 120"
      role="img"
      aria-label="AIXION forged network logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="mark-stroke" d="M27 74 L44 91 L61 74 L77 91 L94 74" />
      <path className="mark-stroke" d="M27 46 L44 29 L60 45 L77 29 L94 46" />
      <path className="mark-stroke" d="M27 46 L44 63 L27 80" />
      <path className="mark-stroke" d="M94 46 L77 63 L94 80" />
      <path className="mark-stroke" d="M44 29 L77 91" />
      <path className="mark-stroke" d="M77 29 L44 91" />
      <path className="mark-cap" d="M58 19 L58 38 L69 27 L69 8 Z" />
      <path className="mark-cap" d="M28 80 L17 91 L31 91 L39 83 Z" />
      <path className="mark-cap" d="M92 80 L103 91 L89 91 L81 83 Z" />
    </svg>
  );
}

const styles = `
  :root {
    color-scheme: dark;
    --bg: #050608;
    --bg-soft: #0a0c10;
    --panel: rgba(255, 255, 255, 0.035);
    --panel-strong: rgba(255, 255, 255, 0.065);
    --line: rgba(255, 255, 255, 0.105);
    --line-strong: rgba(255, 255, 255, 0.22);
    --text: rgba(255, 255, 255, 0.96);
    --muted: rgba(255, 255, 255, 0.6);
    --soft: rgba(255, 255, 255, 0.38);
    --faint: rgba(255, 255, 255, 0.18);
    --warning: #e1b45f;
    --success: #8ed6b4;
    --danger: #e48181;
    --radius-xl: 34px;
    --radius-lg: 24px;
    --container: 1180px;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; background: var(--bg); }
  body { margin: 0; background: var(--bg); color: var(--text); }
  a { color: inherit; text-decoration: none; }

  .page-shell {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at 18% 0%, rgba(255,255,255,0.055), transparent 28%),
      radial-gradient(circle at 78% 18%, rgba(255,255,255,0.035), transparent 34%),
      linear-gradient(180deg, #050608 0%, #080a0d 52%, #050608 100%);
  }

  .page-shell::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at center, transparent 0, rgba(0,0,0,0.55) 78%);
    z-index: 0;
  }

  .container {
    width: min(calc(100% - 48px), var(--container));
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 1px solid var(--line);
    background: rgba(5, 6, 8, 0.76);
    backdrop-filter: blur(22px);
  }

  .header-inner {
    min-height: 84px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
  }

  .brand-mark {
    width: 46px;
    height: 46px;
  }

  .logo-mark {
    display: block;
    overflow: visible;
  }

  .mark-stroke,
  .mark-cap {
    fill: none;
    stroke: rgba(255,255,255,0.94);
    stroke-width: 7;
    stroke-linecap: square;
    stroke-linejoin: miter;
  }

  .mark-cap {
    fill: rgba(255,255,255,0.94);
    stroke: none;
  }

  .brand-name {
    font-size: 11px;
    letter-spacing: 0.34em;
    color: var(--text);
  }

  .brand-sub {
    margin-top: 5px;
    font-size: 9px;
    letter-spacing: 0.26em;
    color: var(--soft);
  }

  .site-nav {
    display: flex;
    align-items: center;
    gap: 34px;
  }

  .site-nav a,
  .header-action,
  .eyebrow {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.27em;
    color: var(--muted);
  }

  .site-nav a:hover,
  .header-action:hover { color: var(--text); }

  .header-action {
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 13px 18px;
    transition: border-color 160ms ease, color 160ms ease;
  }

  .hero-section {
    min-height: calc(100vh - 84px);
    display: flex;
    align-items: center;
    padding: 96px 0;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
    gap: 68px;
    align-items: center;
  }

  .hero-copy h1 {
    margin: 24px 0 0;
    max-width: 860px;
    font-size: clamp(54px, 7vw, 104px);
    line-height: 0.94;
    letter-spacing: -0.06em;
    font-weight: 300;
  }

  .hero-body {
    margin: 34px 0 0;
    max-width: 740px;
    font-size: 18px;
    line-height: 1.9;
    color: var(--muted);
  }

  .hero-actions {
    margin-top: 44px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .button {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 22px;
    border-radius: 999px;
    border: 1px solid var(--line);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    transition: 180ms ease;
  }

  .button-primary {
    background: #f5f5f5;
    border-color: #f5f5f5;
    color: #050608;
  }

  .button-primary:hover { background: rgba(255,255,255,0.9); }
  .button-secondary:hover { border-color: var(--line-strong); color: var(--text); }

  .signal-row {
    margin-top: 58px;
    padding-top: 28px;
    border-top: 1px solid var(--line);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
    max-width: 760px;
  }

  .signal-item span {
    display: block;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--soft);
  }

  .signal-item strong {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    letter-spacing: 0.06em;
    font-weight: 400;
    color: rgba(255,255,255,0.84);
  }

  .hero-identity {
    display: flex;
    justify-content: flex-end;
  }

  .identity-card {
    width: min(100%, 470px);
    aspect-ratio: 0.86;
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background:
      radial-gradient(circle at 50% 32%, rgba(255,255,255,0.09), transparent 28%),
      linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 44px;
    box-shadow: 0 30px 90px rgba(0,0,0,0.42);
  }

  .hero-logo {
    width: 220px;
    height: 220px;
    filter: drop-shadow(0 20px 40px rgba(255,255,255,0.06));
  }

  .identity-label {
    margin-top: 34px;
    font-size: 30px;
    letter-spacing: 0.32em;
    color: var(--text);
  }

  .identity-sub {
    margin-top: 18px;
    font-size: 10px;
    letter-spacing: 0.28em;
    color: var(--soft);
  }

  .section-block {
    padding: 116px 0;
    position: relative;
  }

  .section-head {
    max-width: 910px;
    margin-bottom: 42px;
  }

  .section-head h2,
  .logo-story-grid h2,
  .access-panel h2 {
    margin: 16px 0 0;
    font-size: clamp(34px, 4.2vw, 56px);
    line-height: 1.02;
    letter-spacing: -0.045em;
    font-weight: 300;
  }

  .section-head p,
  .logo-story-grid p,
  .access-panel p {
    margin: 24px 0 0;
    max-width: 760px;
    font-size: 18px;
    line-height: 1.9;
    color: var(--muted);
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .work-card,
  .method-card,
  .console-card,
  .approval-panel,
  .mini-status {
    border: 1px solid var(--line);
    background: var(--panel);
    border-radius: var(--radius-lg);
  }

  .work-card,
  .method-card {
    padding: 30px;
  }

  .work-card:hover,
  .method-card:hover {
    border-color: var(--line-strong);
    background: var(--panel-strong);
    transform: translateY(-2px);
  }

  .work-card,
  .method-card {
    transition: 160ms ease;
  }

  .card-label {
    font-size: 11px;
    letter-spacing: 0.26em;
    color: var(--soft);
  }

  .work-card h3,
  .method-card h3 {
    margin: 28px 0 0;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 300;
    letter-spacing: -0.03em;
  }

  .work-card p,
  .method-card p,
  .approval-panel p {
    margin: 18px 0 0;
    font-size: 15px;
    line-height: 1.85;
    color: var(--muted);
  }

  .product-section {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255,255,255,0.015);
  }

  .product-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(340px, 0.9fr);
    gap: 64px;
    align-items: center;
  }

  .product-points {
    display: grid;
    gap: 14px;
    max-width: 640px;
  }

  .product-point {
    display: flex;
    align-items: center;
    gap: 14px;
    min-height: 54px;
    padding: 0 18px;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: rgba(255,255,255,0.78);
    font-size: 14px;
    letter-spacing: 0.04em;
    background: rgba(255,255,255,0.025);
  }

  .point-dot {
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: var(--success);
    flex: 0 0 auto;
  }

  .console-card {
    padding: 28px;
    border-radius: 30px;
    background:
      radial-gradient(circle at 18% 0%, rgba(255,255,255,0.07), transparent 24%),
      rgba(255,255,255,0.035);
  }

  .console-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--soft);
  }

  .console-topline strong {
    color: var(--success);
    font-weight: 400;
  }

  .console-title {
    margin-top: 42px;
    font-size: 34px;
    letter-spacing: -0.04em;
    font-weight: 300;
  }

  .console-subtitle {
    margin-top: 10px;
    color: var(--muted);
    font-size: 14px;
  }

  .approval-panel {
    margin-top: 22px;
    padding: 22px;
  }

  .warning-panel {
    border-color: rgba(225,180,95,0.28);
    background: rgba(225,180,95,0.055);
  }

  .panel-tag {
    display: inline-flex;
    border: 1px solid rgba(225,180,95,0.35);
    border-radius: 999px;
    padding: 7px 10px;
    color: var(--warning);
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .panel-tag.muted {
    color: var(--muted);
    border-color: var(--line);
  }

  .approval-panel h3 {
    margin: 18px 0 0;
    font-size: 22px;
    font-weight: 400;
  }

  .console-matrix {
    margin-top: 18px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .mini-status {
    padding: 18px;
    border-radius: 18px;
  }

  .mini-status span,
  .mini-status em {
    display: block;
    color: var(--soft);
    font-style: normal;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .mini-status strong {
    display: block;
    margin: 9px 0;
    color: var(--text);
    font-size: 14px;
    font-weight: 500;
  }

  .mini-status em {
    color: var(--success);
  }

  .logo-story-section {
    padding: 126px 0;
  }

  .logo-story-grid {
    display: grid;
    grid-template-columns: minmax(240px, 0.75fr) minmax(0, 1.25fr);
    gap: 68px;
    align-items: center;
  }

  .logo-story-visual {
    min-height: 380px;
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background: radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 36%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-logo {
    width: 235px;
    height: 235px;
  }

  .method-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .method-card {
    min-height: 230px;
  }

  .access-section {
    padding: 118px 0 140px;
  }

  .access-panel {
    max-width: 920px;
    margin: 0 auto;
    text-align: center;
    padding: 54px 42px;
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background: rgba(255,255,255,0.025);
  }

  .access-logo {
    width: 82px;
    height: 82px;
    margin: 0 auto 26px;
  }

  .access-panel p {
    margin-left: auto;
    margin-right: auto;
  }

  .access-panel .button {
    margin-top: 34px;
  }

  .site-footer {
    border-top: 1px solid var(--line);
    padding: 28px 0;
    position: relative;
    z-index: 1;
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: var(--soft);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  @media (max-width: 1040px) {
    .hero-grid,
    .product-grid,
    .logo-story-grid {
      grid-template-columns: 1fr;
    }

    .hero-identity {
      justify-content: flex-start;
    }

    .method-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .site-nav,
    .header-action {
      display: none;
    }

    .container {
      width: min(calc(100% - 32px), var(--container));
    }

    .hero-section,
    .section-block,
    .logo-story-section,
    .access-section {
      padding: 74px 0;
    }

    .hero-copy h1 {
      font-size: clamp(48px, 16vw, 72px);
    }

    .hero-body,
    .section-head p,
    .logo-story-grid p,
    .access-panel p {
      font-size: 16px;
      line-height: 1.8;
    }

    .signal-row,
    .work-grid,
    .method-grid,
    .console-matrix {
      grid-template-columns: 1fr;
    }

    .identity-card {
      width: 100%;
      aspect-ratio: auto;
      min-height: 420px;
    }

    .hero-logo,
    .story-logo {
      width: 180px;
      height: 180px;
    }

    .identity-label {
      font-size: 22px;
    }

    .access-panel {
      padding: 40px 24px;
      text-align: left;
    }

    .access-logo {
      margin-left: 0;
    }

    .footer-inner {
      flex-direction: column;
    }
  }
`;

createRoot(document.getElementById("root")).render(<App />);
