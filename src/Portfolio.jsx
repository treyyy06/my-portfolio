import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  ArrowUpRight,
  ArrowDown,
  X,
  Brain,
  TrendingUp,
  Atom,
  Zap,
  HeartPulse,
  Building2,
} from "lucide-react";

/* Brand icons aren't included in lucide-react anymore, so these are small inline SVGs. */
function GithubIcon({ size = 18, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...rest}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}
function LinkedinIcon({ size = 18, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...rest}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

/* ---------------------------------------------------------
   DATA — edit this block to update site content
--------------------------------------------------------- */

const PROFILE = {
  name: "Tarun Narayanan",
  role: "Data Science & ML Engineer",
  sub: "Integrated M.Tech, Computer Science (Business Analytics) — VIT Chennai",
  status: "Building AI, Machine Learning & Analytics projects",
  bio: "I work at the intersection of applied machine learning, quantitative forecasting, and embedded intelligence — equally comfortable tracing a signal through a vibration sensor as through a volatility model. My interests run from deep learning and time-series forecasting to hardware experiments and business analytics.",
  email: "rtn3912@gmail.com",
  github: "https://github.com/treyyy06",
  linkedin: "https://www.linkedin.com/in/tarun-narayanan-r-511a75235",
};

const STATS = [
  { label: "CGPA", value: "8.75" },
  { label: "Specialization", value: "Business Analytics" },
  { label: "Internships", value: "02 completed" },
];

const EXPERIENCE = [
  {
    org: "Green Tiger Mobility Pvt. Ltd.",
    role: "Project Manager Intern",
    time: "August 5, 2026 – Present",
    desc: "Currently working as a Project Manager Intern, coordinating with vendors, dealers, and internal teams to support smooth project execution and day-to-day operations. Responsible for coordinating CRM workflows, managing Google Business Profile and location mapping activities, supporting dealer onboarding and launch activities, and ensuring effective communication and follow-ups across stakeholders.",
  },
  {
    org: "Tiger Analytics",
    role: "DELVE AIML Intern",
    time: "May 2026 – July 2026",
    desc: "Worked on AI/ML and analytics-driven solutions in an enterprise environment, gaining hands-on experience with machine learning techniques, business intelligence applications, exploratory data analysis, data preprocessing, and machine learning model development.",
  },
  {
    org: "Tata Communications Ltd",
    role: "Data Engineer Intern",
    time: "June 2025 – July 2025",
    desc: "Built and maintained ETL pipelines for data ingestion, cleaning, and transformation, managed structured datasets using PostgreSQL, developed Power BI dashboards for operational decision-making, and documented data models, schemas, and workflow architecture including HLD/LLD.",
  },
];

// Each project can carry an optional repoUrl / demoUrl — omit or leave null if none.
const PROJECTS = [
  {
    id: "oa-grading",
    icon: HeartPulse,
    title: "Knee Osteoarthritis Severity Grading",
    desc: "Deep learning classifier that grades osteoarthritis severity from imaging data.",
    details:
      "Built a full deep learning pipeline around an EfficientNetB3 backbone to classify knee osteoarthritis severity from X-ray images, shipped as a complete GitHub repository — data pipeline, training, and evaluation included.",
    tags: ["Deep Learning", "CNN", "Medical Imaging"],
    repoUrl: null,
  },
  {
    id: "volatility",
    icon: TrendingUp,
    title: "Stock-Level Volatility Forecasting",
    desc: "Co-authored research comparing five volatility models across ten U.S. equities.",
    details:
      "Co-authored academic research benchmarking GARCH, GJR-GARCH, Random Forest, LSTM, and GRU models for stock-level volatility forecasting across ten U.S. equities, affiliated with VIT Chennai's CS&E department.",
    tags: ["GARCH / GJR-GARCH", "LSTM · GRU", "Quant Research"],
    repoUrl: null,
  },
  {
    id: "grover",
    icon: Atom,
    title: "Grover's Algorithm Anomaly Detector",
    desc: "Anomaly detection built on Grover's quantum search algorithm.",
    details:
      "Implements anomaly detection using Grover's search algorithm, built with PennyLane and Qiskit to explore quantum approaches to outlier detection.",
    tags: ["Qiskit", "PennyLane", "Quantum Computing"],
    repoUrl: null,
  },
  {
    id: "ev-wallet",
    icon: Zap,
    title: "EV Charging Wallet",
    desc: "Unified UPI + Web3 wallet with ML-driven dynamic pricing.",
    details:
      "A wallet system unifying UPI and Web3 payments for EV charging, paired with a dynamic pricing model driven by machine learning to adjust rates in real time.",
    tags: ["Web3", "UPI", "Dynamic Pricing"],
    repoUrl: null,
  },
  {
    id: "medihelper",
    icon: Brain,
    title: "MediHelper",
    desc: "AI-enabled health assistant platform powered by the Groq API.",
    details:
      "An AI-enabled health assistant platform built on the Groq API, designed to help users navigate health information and get quick, relevant guidance through a conversational interface.",
    tags: ["Groq API", "LLM", "Health Tech"],
    repoUrl: null,
  },
  {
    id: "hospital",
    icon: Building2,
    title: "Hospital Management Portal",
    desc: "Full-stack hospital administration system built with Spring Boot.",
    details:
      "A Spring Boot hospital management portal covering patient records, appointment scheduling, and staff/administrative workflows in a single full-stack system.",
    tags: ["Spring Boot", "Java", "Full-Stack"],
    repoUrl: null,
  },
];

const ALL_TAGS = ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))];

const SKILLS = [
  {
    group: "Languages & ML",
    items: [
      "Python",
      "SQL",
      "TensorFlow / Keras",
      "PyTorch",
      "Scikit-learn",
      "CNNs (EfficientNetB3)",
      "Medical Imaging",
    ],
  },
  {
    group: "Data & BI",
    items: ["Power BI", "DAX", "Power Query", "Snowflake", "Microsoft Fabric"],
  },
  {
    group: "Systems & Hardware",
    items: ["ESP32 / embedded signal processing", "Java / Spring Boot"],
  },
  {
    group: "Management & Operations",
    items: [
      "Project Coordination",
      "Stakeholder Management",
      "Vendor Management",
      "CRM Workflow Management",
      "Cross-functional Collaboration",
      "Operations Management",
      "Project Planning",
      "Business Operations",
    ],
  },
  {
    group: "Emerging",
    items: ["Qiskit", "PennyLane", "Web3 fundamentals"],
  },
];

/* ---------------------------------------------------------
   SIGNAL TRACE — signature element
--------------------------------------------------------- */

const TRACE_PATH =
  "M0,60 L20,60 L35,20 L50,95 L65,40 L80,60 L100,60 L118,75 L134,15 L150,85 L166,45 L184,60 L205,60 L222,30 L238,90 L254,50 L270,60 L292,60 L308,70 L324,25 L340,88 L356,42 L372,60 L394,60 L410,18 L426,92 L442,48 L458,60 L480,60 L498,72 L514,22 L530,86 L546,44 L562,60 L584,60 L600,60 L620,60 L635,20 L650,95 L665,40 L680,60 L700,60 L718,75 L734,15 L750,85 L766,45 L784,60 L800,60";

function SignalTrace({ amber = false, speed = 18 }) {
  return (
    <div className={`trace-viewport ${amber ? "trace-amber" : "trace-teal"}`}>
      <svg
        className="trace-track"
        style={{ animationDuration: `${speed}s` }}
        viewBox="0 0 1600 120"
        preserveAspectRatio="none"
      >
        <path d={TRACE_PATH} transform="translate(0,0)" />
        <path d={TRACE_PATH} transform="translate(800,0)" />
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------
   REVEAL WRAPPER — IntersectionObserver based fade/slide-in
--------------------------------------------------------- */

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------
   PROJECT MODAL
--------------------------------------------------------- */

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;
  const Icon = project.icon;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <div className="modal-icon">
          <Icon size={22} />
        </div>
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-desc">{project.details}</p>
        <div className="tag-row">
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        {project.repoUrl && (
          <a className="btn btn-primary" style={{ marginTop: 22 }} href={project.repoUrl} target="_blank" rel="noreferrer">
            View repository <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProjects =
    activeTag === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="portfolio-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .portfolio-root {
          --bg: #0a0d12;
          --bg-elevated: #10141c;
          --surface: #141924;
          --border: #232a38;
          --text-primary: #e7ebf3;
          --text-muted: #8892a6;
          --text-dim: #545c70;
          --teal: #6ee7c0;
          --teal-dim: rgba(110, 231, 192, 0.14);
          --amber: #f5b454;
          --amber-dim: rgba(245, 180, 84, 0.14);

          background: var(--bg);
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          line-height: 1.5;
          width: 100%;
          min-height: 100%;
          overflow-x: hidden;
          position: relative;
        }

        .portfolio-root * { box-sizing: border-box; }

        .portfolio-root h1, .portfolio-root h2, .portfolio-root h3 {
          font-family: 'Space Grotesk', sans-serif;
          margin: 0;
        }

        .mono { font-family: 'JetBrains Mono', monospace; }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--teal);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .eyebrow::before {
          content: '';
          width: 18px;
          height: 1px;
          background: var(--teal);
          display: inline-block;
        }

        .section {
          max-width: 1080px;
          margin: 0 auto;
          padding: 96px 24px;
        }

        /* NAV */
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
          background: rgba(10, 13, 18, 0.75);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-brand {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 8px var(--teal);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .nav-links {
          display: flex;
          gap: 28px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          letter-spacing: 0.03em;
        }
        .nav-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-links a:hover, .nav-links a:focus-visible { color: var(--teal); }

        /* HERO */
.hero {
  max-width: 1080px;
  margin: 0 auto;
  padding: 88px 24px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
        .hero-name {
          font-size: clamp(52px, 10vw, 90px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 0.95;
        }
        .hero-role {
          font-size: clamp(18px, 2.6vw, 24px);
          color: var(--text-primary);
          margin-top: 18px;
          font-weight: 500;
        }
        .hero-sub {
          color: var(--text-muted);
          font-size: 15px;
          margin-top: 6px;
        }
        .hero-bio {
  margin-top: 26px;
  max-width: 760px;
  color: var(--text-muted);
  font-size: 16px;
  text-align: center;
}
        .status-line {
          margin-top: 30px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13.5px;
          color: var(--teal);
        }
        .cursor-blink {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: var(--teal);
          margin-left: 4px;
          animation: blink 1s step-start infinite;
          vertical-align: middle;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .hero-cta {
          margin-top: 36px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.02em;
          padding: 12px 20px;
          border-radius: 3px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-primary);
          text-decoration: none;
          transition: border-color 0.2s ease, transform 0.15s ease, background 0.2s ease;
        }
        .btn:hover, .btn:focus-visible { border-color: var(--teal); transform: translateY(-1px); }
        .btn-primary {
          background: var(--teal-dim);
          border-color: var(--teal);
          color: var(--teal);
        }

        /* TRACE */
        .trace-viewport {
          width: 100%;
          overflow: hidden;
          margin-top: 56px;
          opacity: 0.85;
        }
        .trace-track {
          width: 1600px;
          height: 60px;
          display: block;
          animation: scroll-trace linear infinite;
          fill: none;
          stroke-width: 1.6;
        }
        .trace-teal .trace-track { stroke: var(--teal); }
        .trace-amber .trace-track { stroke: var(--amber); }
        @keyframes scroll-trace {
          from { transform: translateX(0); }
          to { transform: translateX(-800px); }
        }

        /* REVEAL */
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-visible { opacity: 1; transform: translateY(0); }

        /* ABOUT */
        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .about-text { color: var(--text-muted); font-size: 15.5px; }
        .stat-card {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 4px;
          padding: 16px 18px;
          margin-bottom: 12px;
        }
        .stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-dim);
        }
        .stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--teal);
          margin-top: 4px;
        }

        /* EXPERIENCE */
        .timeline { position: relative; padding-left: 28px; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 6px;
          bottom: 6px;
          width: 1px;
          background: linear-gradient(var(--teal), var(--border));
        }
        .timeline-item { position: relative; margin-bottom: 44px; }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -28px;
          top: 6px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--teal);
        }
        .timeline-org {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 19px;
          font-weight: 600;
        }
        .timeline-role { color: var(--text-muted); font-size: 14px; margin-top: 2px; }
        .timeline-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: var(--amber);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 6px;
        }
        .timeline-desc {
          margin: 14px 0 0;
          color: var(--text-muted);
          font-size: 14.5px;
        }

        /* PROJECT FILTERS */
        .filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 28px;
        }
        .filter-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--text-muted);
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 7px 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-chip:hover { border-color: var(--teal); color: var(--text-primary); }
        .filter-chip.active {
          border-color: var(--teal);
          background: var(--teal-dim);
          color: var(--teal);
        }

        /* PROJECTS */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .project-card {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 6px;
          padding: 24px;
          cursor: pointer;
          transition: border-color 0.2s ease, transform 0.2s ease;
          text-align: left;
          width: 100%;
        }
        .project-card:hover, .project-card:focus-visible { border-color: var(--teal); transform: translateY(-3px); }
        .project-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--teal);
        }
        .project-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
        }
        .project-desc {
          color: var(--text-muted);
          font-size: 14px;
          margin-top: 10px;
        }
        .project-more {
          margin-top: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: var(--text-dim);
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
        .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--amber);
          background: var(--amber-dim);
          border: 1px solid rgba(245, 180, 84, 0.3);
          border-radius: 3px;
          padding: 4px 8px;
        }

        /* MODAL */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(6, 8, 12, 0.72);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          z-index: 100;
        }
        .modal-card {
          position: relative;
          max-width: 520px;
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 32px;
        }
        .modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-close:hover { border-color: var(--teal); color: var(--teal); }
        .modal-icon {
          width: 44px;
          height: 44px;
          border-radius: 9px;
          background: var(--teal-dim);
          border: 1px solid var(--teal);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-title {
          font-size: 22px;
          font-weight: 600;
          margin-top: 18px;
        }
        .modal-desc {
          color: var(--text-muted);
          font-size: 14.5px;
          margin-top: 12px;
        }

        /* SKILLS */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .skill-group-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--amber);
          margin-bottom: 12px;
        }
        .skill-items { display: flex; flex-wrap: wrap; gap: 9px; }
        .skill-item {
          font-size: 13.5px;
          color: var(--text-primary);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 7px 12px;
        }

        /* CONTACT */
        .contact-inner { text-align: left; }
        .contact-title {
          font-size: clamp(32px, 5vw, 46px);
          font-weight: 700;
          letter-spacing: -0.02em;
          max-width: 620px;
        }
        .contact-links {
          margin-top: 32px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .icon-link {
          width: 44px;
          height: 44px;
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .icon-link:hover, .icon-link:focus-visible { border-color: var(--teal); color: var(--teal); }

        .footer {
          border-top: 1px solid var(--border);
          padding: 28px 24px;
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--text-dim);
        }

        /* FOCUS */
        .portfolio-root a:focus-visible,
        .portfolio-root button:focus-visible {
          outline: 2px solid var(--teal);
          outline-offset: 2px;
        }

        /* RESPONSIVE */
        @media (max-width: 720px) {
          .about-grid, .skills-grid { grid-template-columns: 1fr; }
          .project-grid { grid-template-columns: 1fr; }
          .section { padding: 64px 20px; }
          .hero { padding: 56px 20px 32px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .trace-track, .status-dot, .cursor-blink, .reveal { animation: none !important; transition: none !important; }
          .reveal { opacity: 1; transform: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            <span className="status-dot" />
            {PROFILE.name.toUpperCase()}
          </div>
          <div className="nav-links">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo("experience"); }}>Experience</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>Projects</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo("skills"); }}>Skills</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="eyebrow"></div>
        <h1 className="hero-name">{PROFILE.name.toUpperCase()}</h1>
        <div className="hero-role">{PROFILE.role}</div>
        <div className="hero-sub">{PROFILE.sub}</div>
        <p className="hero-bio">{PROFILE.bio}</p>
        <div className="status-line mono">
          &gt; {PROFILE.status}<span className="cursor-blink" />
        </div>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
            View projects <ArrowDown size={14} />
          </button>
          <a className="btn" href={`mailto:${PROFILE.email}`}>
            Get in touch <ArrowUpRight size={14} />
          </a>
        </div>
        <SignalTrace amber={false} speed={16} />
      </header>

      {/* ABOUT */}
      <section className="section" id="about">
        <Reveal>
          <div className="eyebrow">About</div>
          <div className="about-grid">
            <div className="about-text">
              <p>{PROFILE.bio}</p>
              <p style={{ marginTop: 14 }}>
                My work spans deep learning and computer vision, quantitative time-series
                forecasting, business intelligence, and embedded signal processing —
                different instruments picking up the same kind of signal.
              </p>
            </div>
            <div>
              {STATS.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <SignalTrace amber={true} speed={22} />

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <Reveal>
          <div className="eyebrow">Experience</div>
          <div className="timeline">
            {EXPERIENCE.map((e) => (
              <div className="timeline-item" key={e.org}>
                <div className="timeline-org">{e.org}</div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-time">{e.time}</div>
                <p className="timeline-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <Reveal>
          <div className="eyebrow">Projects</div>
          <div className="filter-row">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                className={`filter-chip ${activeTag === tag ? "active" : ""}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((p) => {
              const Icon = p.icon;
              return (
                <button
                  className="project-card"
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                >
                  <div className="project-icon">
                    <Icon size={18} />
                  </div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="tag-row">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-more">Read more <ArrowUpRight size={12} /></div>
                </button>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <Reveal>
          <div className="eyebrow">Skills</div>
          <div className="skills-grid">
            {SKILLS.map((g) => (
              <div key={g.group}>
                <div className="skill-group-title">{g.group}</div>
                <div className="skill-items">
                  {g.items.map((it) => (
                    <span className="skill-item" key={it}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <SignalTrace amber={false} speed={19} />

      {/* CONTACT */}
      <section className="section" id="contact">
        <Reveal>
          <div className="contact-inner">
            <div className="eyebrow">Contact</div>
            <div className="contact-title">Open to data science &amp; ML opportunities.</div>
            <div className="contact-links">
              <a className="icon-link" href={`mailto:${PROFILE.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
              <a className="icon-link" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a className="icon-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {PROFILE.name} — built with intent.
      </footer>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
