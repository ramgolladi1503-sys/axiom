import React from "react";
import { createRoot } from "react-dom/client";

const NAV = [
  { label: "Systems", href: "#systems" },
  { label: "Work", href: "#work" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" },
];

const SIGNALS = ["Human approval", "Runtime gates", "Audit trails", "QA evidence"];

const SYSTEMS = [
  {
    title: "AI Agent Control",
    body: "Approval-first workflows for AI agents, coding tools, MCP servers, and automated execution systems.",
  },
  {
    title: "Security Gateways",
    body: "Runtime checks that block risky tool calls, secret access, destructive actions, and unsafe automation before execution.",
  },
  {
    title: "Quality Intelligence",
    body: "Evidence-driven QA systems that turn tests, failures, decisions, and releases into traceable proof.",
  },
  {
    title: "Real-Time Reliability",
    body: "Decision infrastructure for high-pressure environments where stale data, weak gates, or bad timing cause damage.",
  },
];

const WORK = [
  {
    name: "Aixion Control Tower",
    tag: "Mobile approval gateway",
    body: "A human-in-the-loop control tower for autonomous AI development. It connects agent tasks, approvals, audit trails, Android review screens, and execution workers into one governed flow.",
  },
  {
    name: "MCP Shield",
    tag: "Runtime security layer",
    body: "A security gateway for AI agents and MCP tools. The goal is simple: observe, explain, block unsafe calls, and preserve an audit trail before tools can damage files, secrets, or systems.",
  },
  {
    name: "Tradebot Reliability Lab",
    tag: "Execution quality system",
    body: "A real-time automation testbed focused on quote freshness, liquidity gates, executable selection, replay, outcome analytics, and evidence-backed trading decisions.",
  },
  {
    name: "Veriforge",
    tag: "Proof-of-work system",
    body: "A living evidence system that turns claims into proof through projects, failures, decisions, tests, architecture, demos, and interview-ready artifacts.",
  },
];

const PRINCIPLES = [
  "Approval before action",
  "Audit is not optional",
  "Tests are contracts",
  "Security starts disabled",
  "Proof beats claims",
  "Small PRs, hard gates",
];

function App() {
  return (
    <>
      <style>{styles}</style>
      <div className="page-shell">
        <Background />
        <Header />
        <main>
          <Hero />
          <Problem />
          <Systems />
          <Work />
          <Principles />
          <Contact />
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
        <a className="brand" href="#top" aria-label="AIXION LABS home">
          <Logo />
          <div>
            <div className="brand-name">AIXION LABS</div>
            <div className="brand-sub">AI CONTROL SYSTEMS</div>
          </div>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {NAV.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="mailto:contact@aixionlabs.com">Contact</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">AI Agents · QA Automation · Runtime Security</div>
          <h1>Human control for AI systems that can actually change things.</h1>
          <p className="hero-body">
            AIXION LABS builds approval-first systems for AI agents, automation pipelines,
            QA workflows, MCP tools, and real-time decision environments — so execution can move
            fast without becoming blind, unsafe, or untraceable.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">View the work</a>
            <a className="button button-secondary" href="#systems">What we build</a>
          </div>

          <div className="signal-row" aria-label="Core signals">
            {SIGNALS.map((signal) => <span key={signal}>{signal}</span>)}
          </div>
        </div>

        <div className="hero-visual-wrap">
          <ControlPanel />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="problem-section">
      <div className="container problem-grid">
        <div>
          <div className="eyebrow">The gap</div>
          <h2>AI tools are getting powerful. Control is still weak.</h2>
        </div>
        <div className="problem-copy">
          <p>
            Most teams are adding agents, automations, and model endpoints faster than they are adding
            approval gates, audit trails, rollback paths, and quality evidence.
          </p>
          <p>
            That is where systems fail: not because AI cannot generate work, but because nobody can
            prove what happened, why it happened, who approved it, and whether it was safe to execute.
          </p>
        </div>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section id="systems" className="content-section">
      <div className="container">
        <SectionHead
          eyebrow="Systems"
          title="Built around control, evidence, and execution discipline."
          intro="The focus is not generic dashboards. The focus is the missing operating layer between human intent and autonomous execution."
        />
        <div className="system-grid">
          {SYSTEMS.map((item, index) => (
            <article className="system-card" key={item.title}>
              <div className="card-index">{String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="content-section work-section">
      <div className="container">
        <SectionHead
          eyebrow="Current work"
          title="Products and labs with real proof behind them."
          intro="These are not random ideas. They come from repeated work across QA, AI agents, MCP security, mobile approval flows, and real-time automation reliability."
        />
        <div className="work-list">
          {WORK.map((item, index) => (
            <article className="work-item" key={item.name}>
              <div className="work-number">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <div className="work-tag">{item.tag}</div>
                <h3>{item.name}</h3>
              </div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section id="principles" className="content-section">
      <div className="container principle-panel">
        <div className="principle-copy">
          <div className="eyebrow">Principles</div>
          <h2>No blind automation. No fake certainty. No unverifiable claims.</h2>
          <p>
            AIXION LABS is built on a simple rule: powerful systems need visible decisions,
            strict boundaries, and proof that survives review.
          </p>
        </div>
        <div className="principle-grid">
          {PRINCIPLES.map((principle) => (
            <div className="principle-chip" key={principle}>{principle}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-panel">
        <div className="eyebrow">Contact</div>
        <h2>Building systems where approval, audit, and reliability matter?</h2>
        <p>
          Bring a serious problem: AI agents touching code, tools calling sensitive systems,
          automation that needs proof, or QA workflows that must become stronger than checklists.
        </p>
        <a className="button button-primary" href="mailto:contact@aixionlabs.com">contact@aixionlabs.com</a>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, intro }) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

function ControlPanel() {
  const rows = [
    ["Agent task", "Waiting"],
    ["Risk score", "Review"],
    ["MCP call", "Blocked"],
    ["Audit trail", "Saved"],
  ];

  return (
    <div className="control-panel" aria-hidden="true">
      <div className="panel-topline">
        <span />
        <span />
        <span />
      </div>
      <div className="panel-title">Execution Control</div>
      <div className="panel-subtitle">approve · reject · revise · audit</div>
      <div className="panel-core">
        <div className="orb"><span /></div>
        <div className="core-lines">
          <i /><i /><i />
        </div>
      </div>
      <div className="panel-rows">
        {rows.map(([label, value]) => (
          <div className="panel-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function Logo() {
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

function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="grid" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="vertical-line line-one" />
      <div className="vertical-line line-two" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© 2026 AIXION LABS</span>
        <span>Control systems for AI execution</span>
      </div>
    </footer>
  );
}

const styles = `
  :root {
    color-scheme: dark;
    --bg: #050608;
    --panel: rgba(255, 255, 255, 0.035);
    --panel-strong: rgba(255, 255, 255, 0.065);
    --line: rgba(255, 255, 255, 0.105);
    --line-strong: rgba(255, 255, 255, 0.22);
    --text: rgba(255, 255, 255, 0.96);
    --muted: rgba(255, 255, 255, 0.62);
    --soft: rgba(255, 255, 255, 0.38);
    --container: 1180px;
    --radius-xl: 34px;
    --radius-lg: 24px;
    --radius-md: 18px;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--bg); color: var(--text); }
  a { color: inherit; text-decoration: none; }

  .page-shell {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at 16% 8%, rgba(255,255,255,0.08), transparent 28%),
      radial-gradient(circle at 84% 4%, rgba(255,255,255,0.055), transparent 30%),
      linear-gradient(to bottom, rgba(255,255,255,0.025), transparent 20%),
      var(--bg);
  }

  .container { width: min(calc(100% - 48px), var(--container)); margin: 0 auto; }

  .background { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
  .grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
    background-size: 138px 138px;
    mask-image: linear-gradient(to bottom, black, transparent 92%);
  }
  .glow { position: absolute; border: 1px solid rgba(255,255,255,0.06); border-radius: 999px; filter: blur(64px); }
  .glow-one { width: 540px; height: 540px; right: -130px; top: -150px; }
  .glow-two { width: 460px; height: 460px; left: -160px; bottom: 20%; opacity: 0.65; }
  .vertical-line { position: absolute; top: 0; bottom: 0; width: 1px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent); }
  .line-one { left: 34%; }
  .line-two { left: 68%; opacity: 0.7; }

  .site-header {
    position: sticky; top: 0; z-index: 30;
    border-bottom: 1px solid var(--line);
    background: rgba(5,6,8,0.74);
    backdrop-filter: blur(22px);
  }
  .header-inner { min-height: 82px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .brand { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
  .brand-name { font-size: 12px; letter-spacing: 0.34em; color: var(--text); }
  .brand-sub { margin-top: 4px; font-size: 10px; letter-spacing: 0.28em; color: var(--soft); }
  .site-nav { display: flex; gap: 34px; align-items: center; }
  .site-nav a, .header-cta {
    font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase; color: rgba(255,255,255,0.58);
    transition: color 160ms ease, border-color 160ms ease;
  }
  .site-nav a:hover { color: white; }
  .header-cta { border: 1px solid var(--line); border-radius: 999px; padding: 11px 15px; }
  .header-cta:hover { color: white; border-color: var(--line-strong); }

  .logo-mark { position: relative; width: 56px; height: 36px; flex-shrink: 0; }
  .loop { position: absolute; top: 0; width: 32px; height: 32px; border: 1px solid rgba(255,255,255,0.78); border-radius: 999px; }
  .loop.left { left: 0; } .loop.right { right: 0; }
  .core-dot { position: absolute; left: 50%; top: 50%; width: 6px; height: 6px; transform: translate(-50%, -50%); border-radius: 50%; background: white; }
  .bridge { position: absolute; top: 50%; height: 1px; width: 18px; transform: translateY(-50%); background: rgba(255,255,255,0.72); }
  .left-bridge { left: 15px; } .right-bridge { right: 15px; }

  main, .site-footer { position: relative; z-index: 1; }
  .hero-section { min-height: 94vh; display: flex; align-items: center; }
  .hero-grid { display: grid; grid-template-columns: 1.08fr 0.92fr; gap: 70px; align-items: center; padding: 86px 0 96px; }
  .eyebrow { font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(255,255,255,0.4); }
  h1, h2, h3, p { margin: 0; }
  .hero-copy h1 { margin-top: 24px; max-width: 880px; font-size: clamp(50px, 6.8vw, 92px); line-height: 0.95; letter-spacing: -0.057em; font-weight: 300; }
  .hero-body { margin-top: 30px; max-width: 790px; font-size: 18px; line-height: 1.9; color: var(--muted); }
  .hero-actions { margin-top: 42px; display: flex; flex-wrap: wrap; gap: 14px; }
  .button {
    display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 22px;
    border-radius: 999px; border: 1px solid var(--line); font-size: 11px; text-transform: uppercase; letter-spacing: 0.24em;
    transition: 180ms ease;
  }
  .button-primary { background: white; color: black; border-color: white; font-weight: 700; }
  .button-primary:hover { transform: translateY(-1px); background: rgba(255,255,255,0.92); }
  .button-secondary { color: rgba(255,255,255,0.78); }
  .button-secondary:hover { color: white; border-color: var(--line-strong); transform: translateY(-1px); }
  .signal-row { margin-top: 48px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; max-width: 780px; }
  .signal-row span { padding: 15px 14px; border: 1px solid var(--line); border-radius: 999px; background: rgba(255,255,255,0.022); text-align: center; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.62); }

  .hero-visual-wrap { display: flex; justify-content: flex-end; }
  .control-panel { width: min(100%, 500px); min-height: 610px; border: 1px solid rgba(255,255,255,0.11); border-radius: var(--radius-xl); background: linear-gradient(to bottom, rgba(255,255,255,0.055), rgba(255,255,255,0.018)); padding: 28px; box-shadow: 0 24px 100px rgba(0,0,0,0.34); overflow: hidden; position: relative; }
  .control-panel::before { content: ""; position: absolute; inset: -120px -80px auto auto; width: 340px; height: 340px; border-radius: 999px; background: rgba(255,255,255,0.09); filter: blur(70px); }
  .panel-topline { display: flex; gap: 8px; position: relative; z-index: 1; }
  .panel-topline span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.22); }
  .panel-title { margin-top: 42px; font-size: 34px; letter-spacing: -0.04em; font-weight: 300; }
  .panel-subtitle { margin-top: 10px; font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
  .panel-core { position: relative; height: 230px; display: flex; align-items: center; justify-content: center; }
  .orb { width: 142px; height: 142px; border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; display: grid; place-items: center; background: rgba(255,255,255,0.026); }
  .orb span { width: 52px; height: 52px; border-radius: 999px; background: white; box-shadow: 0 0 70px rgba(255,255,255,0.45); }
  .core-lines i { position: absolute; left: 36px; right: 36px; height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.14), transparent); }
  .core-lines i:nth-child(1) { top: 75px; } .core-lines i:nth-child(2) { top: 115px; } .core-lines i:nth-child(3) { top: 155px; }
  .panel-rows { display: grid; gap: 12px; }
  .panel-row { min-height: 58px; border: 1px solid rgba(255,255,255,0.09); border-radius: 18px; background: rgba(0,0,0,0.14); display: flex; align-items: center; justify-content: space-between; padding: 0 18px; }
  .panel-row span { color: rgba(255,255,255,0.56); font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; }
  .panel-row strong { color: white; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 500; }

  .problem-section { padding: 90px 0 70px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: rgba(255,255,255,0.012); }
  .problem-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 80px; align-items: start; }
  .problem-grid h2, .section-head h2, .principle-copy h2, .contact-panel h2 { margin-top: 16px; font-size: clamp(34px, 4.2vw, 58px); line-height: 1.03; letter-spacing: -0.046em; font-weight: 300; }
  .problem-copy { display: grid; gap: 22px; }
  .problem-copy p, .section-head p, .principle-copy p, .contact-panel p { font-size: 18px; line-height: 1.9; color: var(--muted); }

  .content-section { padding: 116px 0; }
  .section-head { max-width: 940px; margin-bottom: 46px; }
  .section-head p { margin-top: 22px; max-width: 820px; }
  .system-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
  .system-card { min-height: 286px; padding: 26px; border: 1px solid var(--line); border-radius: var(--radius-lg); background: var(--panel); transition: 180ms ease; }
  .system-card:hover { transform: translateY(-3px); border-color: var(--line-strong); background: rgba(255,255,255,0.05); }
  .card-index, .work-number { font-size: 11px; letter-spacing: 0.28em; color: rgba(255,255,255,0.3); }
  .system-card h3 { margin-top: 30px; font-size: 24px; line-height: 1.18; letter-spacing: -0.034em; font-weight: 300; }
  .system-card p { margin-top: 18px; color: var(--muted); font-size: 15px; line-height: 1.8; }

  .work-section { padding-top: 40px; }
  .work-list { border-top: 1px solid var(--line); }
  .work-item { display: grid; grid-template-columns: 90px 0.8fr 1.2fr; gap: 28px; padding: 30px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .work-tag { margin-bottom: 10px; font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: rgba(255,255,255,0.38); }
  .work-item h3 { font-size: 30px; line-height: 1.14; letter-spacing: -0.034em; font-weight: 300; }
  .work-item p { color: var(--muted); font-size: 16px; line-height: 1.85; }

  .principle-panel { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; padding: 48px; border: 1px solid var(--line); border-radius: var(--radius-xl); background: linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.018)); }
  .principle-copy p { margin-top: 22px; }
  .principle-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; align-content: center; }
  .principle-chip { min-height: 66px; border: 1px solid var(--line); border-radius: 999px; display: flex; align-items: center; justify-content: center; padding: 0 18px; background: rgba(0,0,0,0.12); color: rgba(255,255,255,0.72); font-size: 12px; text-transform: uppercase; letter-spacing: 0.19em; text-align: center; }

  .contact-section { padding: 60px 0 130px; }
  .contact-panel { max-width: 980px; margin: 0 auto; text-align: center; padding: 56px 42px; border: 1px solid var(--line); border-radius: var(--radius-xl); background: rgba(255,255,255,0.024); }
  .contact-panel p { max-width: 790px; margin: 24px auto 0; }
  .contact-panel .button { margin-top: 34px; }

  .site-footer { border-top: 1px solid var(--line); padding: 28px 0; }
  .footer-inner { display: flex; justify-content: space-between; gap: 20px; color: rgba(255,255,255,0.36); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; }

  @media (max-width: 1120px) {
    .hero-grid, .problem-grid, .principle-panel { grid-template-columns: 1fr; }
    .hero-visual-wrap { justify-content: flex-start; }
    .system-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .work-item { grid-template-columns: 70px 1fr; }
    .work-item p { grid-column: 2; }
  }

  @media (max-width: 820px) {
    .site-nav, .header-cta { display: none; }
    .container { width: min(calc(100% - 32px), var(--container)); }
    .hero-grid { padding-top: 64px; gap: 42px; }
    .hero-copy h1 { font-size: clamp(44px, 14vw, 62px); }
    .hero-body, .problem-copy p, .section-head p, .principle-copy p, .contact-panel p { font-size: 16px; line-height: 1.8; }
    .signal-row, .system-grid, .principle-grid { grid-template-columns: 1fr; }
    .control-panel { min-height: 520px; }
    .problem-section, .content-section { padding: 78px 0; }
    .work-item { grid-template-columns: 1fr; gap: 14px; }
    .work-item p { grid-column: auto; }
    .principle-panel, .contact-panel { padding: 34px 22px; }
    .footer-inner { flex-direction: column; align-items: flex-start; }
  }
`;

createRoot(document.getElementById("root")).render(<App />);
