import React from "react";
import { createRoot } from "react-dom/client";

const NAV = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Applications", href: "#applications" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Access", href: "#access" },
];

const CAPABILITIES = [
  {
    title: "Real-Time Decision Systems",
    body: "Continuous evaluation under high-frequency input streams where correctness and timing matter at the same time.",
  },
  {
    title: "Execution Infrastructure",
    body: "Systems designed around latency, reliability, throughput, and the friction of real operating environments.",
  },
  {
    title: "Data-Intensive Platforms",
    body: "Architectures capable of sustained high-volume processing without collapsing under operational pressure.",
  },
];

const APPLICATIONS = [
  {
    title: "High-Velocity Environments",
    body: "Built for conditions where delay, drift, or weak logic has immediate cost.",
  },
  {
    title: "Automation at Scale",
    body: "Replacing fragile human loops with controlled, measurable, and repeatable systems.",
  },
  {
    title: "Custom Engineering",
    body: "Purpose-built systems for non-standard environments that do not tolerate template thinking.",
  },
];

const PHILOSOPHY = [
  {
    title: "Constraint-Driven Design",
    body: "Systems are shaped by execution limits and reality, not ideal assumptions.",
  },
  {
    title: "Deterministic Thinking",
    body: "Decisions are structured, auditable, and engineered to behave the same way under pressure.",
  },
  {
    title: "Controlled Complexity",
    body: "We reduce complex environments into disciplined system layers without flattening what matters.",
  },
];

function App() {
  return (
    <>
      <style>{styles}</style>
      <div className="page-shell">
        <BackgroundSystem />
        <Header />
        <main>
          <Hero />
          <Section
            id="capabilities"
            eyebrow="Capabilities"
            title="We build where failure is expensive."
            intro="Our systems are designed for environments where incorrect decisions have immediate operational cost."
            items={CAPABILITIES}
          />
          <Section
            id="applications"
            eyebrow="Applications"
            title="Deployed in high-pressure environments."
            intro="Used where timing, accuracy, and execution discipline determine outcomes."
            items={APPLICATIONS}
          />
          <Section
            id="philosophy"
            eyebrow="Philosophy"
            title="We do not optimize for visibility."
            intro="We optimize for correctness, durability, and execution integrity."
            items={PHILOSOPHY}
          />
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
          <LogoMark />
          <div className="brand-copy">
            <div className="brand-name">AIXION LABS</div>
            <div className="brand-sub">SYSTEMS ENGINEERING</div>
          </div>
        </a>

        <nav className="site-nav">
          {NAV.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-badge">Private Engineering Firm</div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Systems Engineering · Real-Time Environments</div>
          <h1>Systems built for environments where errors are not tolerated.</h1>
          <p className="hero-body">
            AIXION LABS engineers systems that operate under pressure — where timing, accuracy,
            and execution discipline directly impact outcomes.
          </p>
          <div className="hero-micro">Limited visibility. High accountability.</div>

          <div className="hero-actions">
            <a className="button button-primary" href="#capabilities">
              View Capabilities
            </a>
            <a className="button button-secondary" href="#access">
              Access Policy
            </a>
          </div>

          <div className="hero-metrics">
            <Metric label="Focus" value="Real-Time Systems" />
            <Metric label="Constraint" value="Latency & Reliability" />
            <Metric label="Model" value="Custom B2B Engineering" />
          </div>
        </div>

        <div className="hero-visual-wrap">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="metric-item">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
    </div>
  );
}

function Section({ id, eyebrow, title, intro, items }) {
  return (
    <section id={id} className="content-section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>

        <div className="card-grid">
          {items.map((item, index) => (
            <article key={item.title} className="info-card">
              <div className="card-index">{String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="card-line" />
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
        <div className="eyebrow">Access</div>
        <h2>Engagements are selective.</h2>
        <p>
          We do not publish system details, operational frameworks, or internal architecture.
          Collaboration is limited to environments where our work has measurable impact.
        </p>
        <a className="button button-secondary" href="mailto:contact@aixionlabs.in">
          contact@aixionlabs.in
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© 2026 AIXION LABS Pvt Ltd</span>
        <span>All systems proprietary</span>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <span className="loop left" />
      <span className="loop right" />
      <span className="core-dot" />
      <span className="bridge left-bridge" />
      <span className="bridge right-bridge" />
    </div>
  );
}

function BackgroundSystem() {
  return (
    <div className="background-system" aria-hidden="true">
      <div className="background-grid" />
      <div className="background-glow glow-a" />
      <div className="background-glow glow-b" />
      <div className="background-line line-a" />
      <div className="background-line line-b" />
    </div>
  );
}

function HeroVisual() {
  const dots = Array.from({ length: 90 }).map((_, index) => {
    const left = 54 + ((index * 17) % 28);
    const top = (index * 11) % 100;
    const opacity = 0.08 + (((index * 7) % 16) / 100);
    const size = index % 9 === 0 ? 2.2 : 1.2;

    return (
      <span
        key={index}
        className="visual-dot"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
        }}
      />
    );
  });

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual-glow" />
      <div className="hero-line l1" />
      <div className="hero-line l2" />
      <div className="hero-line l3" />
      <div className="hero-line l4" />
      {dots}
      <div className="hero-fade" />
    </div>
  );
}

const styles = `
  :root {
    color-scheme: dark;
    --bg: #050608;
    --panel: rgba(255,255,255,0.03);
    --panel-strong: rgba(255,255,255,0.06);
    --line: rgba(255,255,255,0.1);
    --line-strong: rgba(255,255,255,0.2);
    --text: rgba(255,255,255,0.96);
    --muted: rgba(255,255,255,0.58);
    --soft: rgba(255,255,255,0.36);
    --grid: rgba(255,255,255,0.04);
    --radius-xl: 32px;
    --radius-lg: 24px;
    --container: 1200px;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--bg); color: var(--text); }
  a { color: inherit; text-decoration: none; }

  .page-shell {
    min-height: 100vh;
    position: relative;
    background:
      radial-gradient(circle at 18% 8%, rgba(255,255,255,0.05), transparent 26%),
      radial-gradient(circle at 80% 0%, rgba(255,255,255,0.04), transparent 32%),
      linear-gradient(to bottom, rgba(255,255,255,0.015), transparent 24%),
      var(--bg);
    overflow: hidden;
  }

  .container {
    width: min(calc(100% - 48px), var(--container));
    margin: 0 auto;
  }

  .background-system {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  .background-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 140px 140px;
    opacity: 0.7;
  }

  .background-glow {
    position: absolute;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 999px;
    filter: blur(60px);
  }

  .glow-a {
    width: 520px;
    height: 520px;
    right: -120px;
    top: -120px;
  }

  .glow-b {
    width: 420px;
    height: 420px;
    left: -100px;
    bottom: -150px;
    border-color: rgba(255,255,255,0.04);
  }

  .background-line {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent);
  }

  .line-a { left: 34%; }
  .line-b { left: 68%; opacity: 0.7; }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 40;
    backdrop-filter: blur(20px);
    background: rgba(5,6,8,0.72);
    border-bottom: 1px solid var(--line);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    min-height: 82px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
  }

  .brand-name {
    font-size: 11px;
    letter-spacing: 0.34em;
    color: rgba(255,255,255,0.96);
  }

  .brand-sub {
    margin-top: 4px;
    font-size: 10px;
    letter-spacing: 0.28em;
    color: rgba(255,255,255,0.4);
  }

  .site-nav {
    display: flex;
    align-items: center;
    gap: 34px;
  }

  .site-nav a,
  .header-badge {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: rgba(255,255,255,0.54);
  }

  .site-nav a:hover { color: rgba(255,255,255,0.96); }

  .hero-section {
    position: relative;
    min-height: 96vh;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.04fr 0.96fr;
    gap: 64px;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 96px;
  }

  .eyebrow {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: rgba(255,255,255,0.38);
  }

  .hero-copy h1 {
    margin: 24px 0 0;
    max-width: 860px;
    font-size: clamp(52px, 7vw, 96px);
    line-height: 0.94;
    letter-spacing: -0.055em;
    font-weight: 300;
  }

  .hero-body {
    margin: 32px 0 0;
    max-width: 720px;
    font-size: 18px;
    line-height: 1.9;
    color: var(--muted);
  }

  .hero-micro {
    margin-top: 26px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: rgba(255,255,255,0.34);
  }

  .hero-actions {
    margin-top: 44px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0 22px;
    border-radius: 999px;
    border: 1px solid var(--line);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.26em;
    transition: 180ms ease;
  }

  .button-primary {
    background: white;
    color: black;
    border-color: white;
  }

  .button-primary:hover { background: rgba(255,255,255,0.92); }
  .button-secondary:hover { border-color: rgba(255,255,255,0.28); color: white; }

  .hero-metrics {
    margin-top: 56px;
    padding-top: 28px;
    border-top: 1px solid var(--line);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 760px;
  }

  .metric-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: rgba(255,255,255,0.34);
  }

  .metric-value {
    margin-top: 10px;
    font-size: 14px;
    letter-spacing: 0.06em;
    color: rgba(255,255,255,0.82);
  }

  .hero-visual-wrap {
    display: flex;
    justify-content: flex-end;
  }

  .hero-visual {
    position: relative;
    width: min(100%, 640px);
    height: 680px;
    overflow: hidden;
    border-radius: var(--radius-xl);
    border: 1px solid rgba(255,255,255,0.08);
    background: linear-gradient(to bottom, rgba(255,255,255,0.02), transparent);
  }

  .hero-visual-glow {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 65% 25%, rgba(255,255,255,0.12), transparent 22%),
      radial-gradient(circle at 56% 42%, rgba(255,255,255,0.08), transparent 30%),
      linear-gradient(to bottom, transparent, rgba(255,255,255,0.015));
  }

  .hero-line {
    position: absolute;
    width: 1px;
    top: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent);
  }

  .hero-line.l1 { right: 24%; }
  .hero-line.l2 { right: 38%; opacity: 0.45; }
  .hero-line.l3 { right: 31%; opacity: 0.65; }
  .hero-line.l4 { right: 18%; opacity: 0.32; }

  .visual-dot {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,1);
    filter: blur(0.2px);
  }

  .hero-fade {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 180px;
    background: linear-gradient(to top, var(--bg), transparent);
  }

  .content-section {
    position: relative;
    z-index: 1;
    padding: 112px 0;
  }

  .section-head {
    max-width: 920px;
    margin-bottom: 44px;
  }

  .section-head h2 {
    margin: 14px 0 0;
    font-size: clamp(32px, 4vw, 50px);
    line-height: 1.02;
    font-weight: 300;
    letter-spacing: -0.045em;
  }

  .section-head p {
    margin: 22px 0 0;
    max-width: 760px;
    font-size: 18px;
    line-height: 1.9;
    color: var(--muted);
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .info-card {
    padding: 28px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--line);
    background: var(--panel);
    transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
  }

  .info-card:hover {
    border-color: var(--line-strong);
    background: rgba(255,255,255,0.04);
    transform: translateY(-2px);
  }

  .card-index {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: rgba(255,255,255,0.28);
  }

  .info-card h3 {
    margin: 28px 0 0;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 300;
    letter-spacing: -0.03em;
  }

  .info-card p {
    margin: 18px 0 0;
    font-size: 15px;
    line-height: 1.85;
    color: var(--muted);
  }

  .card-line {
    height: 1px;
    margin-top: 24px;
    background: linear-gradient(to right, rgba(255,255,255,0.18), rgba(255,255,255,0.06), transparent);
  }

  .access-section {
    position: relative;
    z-index: 1;
    padding: 120px 0 140px;
  }

  .access-panel {
    max-width: 920px;
    text-align: center;
    padding: 48px 40px;
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background: rgba(255,255,255,0.02);
  }

  .access-panel h2 {
    margin: 22px 0 0;
    font-size: clamp(34px, 4vw, 52px);
    line-height: 1.02;
    font-weight: 300;
    letter-spacing: -0.04em;
  }

  .access-panel p {
    margin: 24px auto 0;
    max-width: 760px;
    font-size: 18px;
    line-height: 1.9;
    color: var(--muted);
  }

  .access-panel .button { margin-top: 34px; }

  .site-footer {
    position: relative;
    z-index: 1;
    border-top: 1px solid var(--line);
    padding: 26px 0;
  }

  .footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: rgba(255,255,255,0.34);
  }

  .logo-mark {
    position: relative;
    width: 56px;
    height: 36px;
    flex-shrink: 0;
  }

  .loop {
    position: absolute;
    top: 0;
    width: 32px;
    height: 32px;
    border: 1px solid rgba(255,255,255,0.78);
    border-radius: 999px;
  }

  .loop.left { left: 0; }
  .loop.right { right: 0; }

  .core-dot {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: white;
  }

  .bridge {
    position: absolute;
    top: 50%;
    height: 1px;
    width: 18px;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.72);
  }

  .left-bridge { left: 15px; }
  .right-bridge { right: 15px; }

  @media (max-width: 1100px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .hero-visual-wrap {
      justify-content: flex-start;
    }

    .hero-visual {
      width: 100%;
      max-width: 100%;
      height: 420px;
    }
  }

  @media (max-width: 860px) {
    .site-nav,
    .header-badge {
      display: none;
    }

    .hero-metrics,
    .card-grid,
    .footer-inner {
      grid-template-columns: 1fr;
      flex-direction: column;
      align-items: flex-start;
    }

    .section-head p,
    .hero-body,
    .access-panel p {
      font-size: 16px;
      line-height: 1.8;
    }

    .hero-section {
      min-height: auto;
    }

    .hero-grid {
      padding-top: 72px;
      padding-bottom: 72px;
    }

    .hero-visual {
      height: 320px;
    }

    .access-panel {
      padding: 36px 24px;
      text-align: left;
    }
  }
`;

createRoot(document.getElementById("root")).render(<App />);
