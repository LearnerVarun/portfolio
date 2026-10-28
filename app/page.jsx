'use client';

import { useState, useEffect } from 'react';

export default function PortfolioPage() {
  const [activeMarket, setActiveMarket] = useState('uk');
  const [activePhase, setActivePhase] = useState(1);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('varun.4891@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const phaseData = {
    uk: {
      1: {
        title: "Due Diligence & Scope Audit",
        focus: "Comprehensive audit of UK Defined Benefit scheme trust deeds, governing benefit rules, and historical payroll records.",
        deliverables: [
          "Transition Feasibility Matrix and Project Charter sign-off with UK Trustees",
          "GMP (Guaranteed Minimum Pension) scope assessment under Equalization statutory guidelines",
          "Standard Procedure Document (SPD) inventory and baseline variance report"
        ],
        risk: "Zero-defect legislative review to ensure all statutory pension obligations are accounted for prior to migration.",
        metrics: [
          "100% Documentation Sign-off by UK Stakeholders",
          "Defined Transition Milestones and SLA Benchmarks",
          "Data Profiling Schema Audit on SQL Server"
        ]
      },
      2: {
        title: "Process Mapping & Solution Design",
        focus: "As-Is to To-Be operational workflow engineering tailored for cross-geographical dual handling between UK and India.",
        deliverables: [
          "Detailed Process Map for benefit calculation, annual revaluations, and member transfers",
          "Actuarial formula verification scripts using Visual Basic (VB) models",
          "Exception handling protocols and client escalation matrix"
        ],
        risk: "Lean process simplification to eliminate redundant handover friction between onshore consultants and offshore delivery.",
        metrics: [
          "100% Process Maps peer-reviewed by Senior Consultants",
          "Turnaround time baseline target of 48 hours for standard pension transactions",
          "Sign-off from Risk & Compliance Committee"
        ]
      },
      3: {
        title: "Capacity Planning & Cohort Training",
        focus: "Talent acquisition, cohort training, and multi-line capacity scheduling across offshore delivery hubs.",
        deliverables: [
          "Full-time resource allocation plan across 3 UK retirement revenue lines",
          "Rigorous technical training curriculum covering UK pension statutes and system configurations",
          "Productivity matrix setup for real-time output tracking"
        ],
        risk: "Proactive attrition buffering and cross-skilling to guarantee unbroken operational continuity.",
        metrics: [
          "10-member operational core trained and certified in UK DB scheme rules",
          "100% Timesheet and work allocation system integration",
          "Shadowing completion rate of 100% prior to dual running"
        ]
      },
      4: {
        title: "Dual-Run Execution & System UAT",
        focus: "Parallel processing alongside incumbent UK teams to test calculation precision and SLA compliance.",
        deliverables: [
          "Quarterly and annual User Acceptance Testing (UAT) sign-off on upgraded platforms",
          "Dual-run calculation reconciliation logs with 0% margin for arithmetic error",
          "EASEL and SQL extraction load validations on live system instances"
        ],
        risk: "Comprehensive parallel run ensuring complete data fidelity before cutting over production.",
        metrics: [
          "99.8%+ Accuracy on actuarial calculation dual runs",
          "Turnaround compliance of 98%+ against target SLAs",
          "Formal sign-off by UK Lead Consultant and Client Project Manager"
        ]
      },
      5: {
        title: "Go-Live Governance & Steady State",
        focus: "Full operational cutover to Indian delivery teams with ongoing quality auditing and SLA oversight.",
        deliverables: [
          "Production handover ceremony and formal operational governance cadence",
          "Weekly stakeholder KPI dashboards and executive escalation reporting",
          "Continuous improvement backlog utilizing Lean Six Sigma methodologies"
        ],
        risk: "Strict internal quality audits ensuring permanent adherence to statutory pension plan parameters.",
        metrics: [
          "Steady-state service delivery maintained across all 3 UK revenue lines",
          "Zero critical compliance breaches post transition",
          "Long-term client trust confirmed through consecutive successful renewal cycles"
        ]
      }
    },
    us: {
      1: {
        title: "US Plan Scope & ERISA Due Diligence",
        focus: "Review of US Defined Benefit plan documentations, Qualified Domestic Relations Orders, and IRS/PBGC compliance.",
        deliverables: [
          "ERISA plan document verification and participant eligibility census audit",
          "US-to-India timezone handoff protocol and operational security sign-off",
          "Transition charter and executive stakeholder milestone schedule"
        ],
        risk: "Strict regulatory alignment with US federal pension compliance frameworks.",
        metrics: [
          "100% Plan rulebook confirmation by US Managing Consultants",
          "Audit baseline of participant historical service records",
          "Data privacy compliance sign-off"
        ]
      },
      2: {
        title: "US Process Mapping & Calibration",
        focus: "Standardizing calculation engines for early retirement reductions, lump sums, and joint annuities.",
        deliverables: [
          "US DB Benefit calculation flowcharts and standard operating guides",
          "Visual Basic actuarial workbook calibration against US actuarial tables",
          "Tiered escalation matrix for complex plan exceptions"
        ],
        risk: "Automated regression testing of benefit calculation engines.",
        metrics: [
          "100% Sample calculation sign-off across retirement scenarios",
          "Turnaround standard fixed for participant quote generation",
          "Quality auditor verification of formula logic"
        ]
      },
      3: {
        title: "US Market Operational Readiness",
        focus: "Staffing and operational readiness aligned to US Eastern and Central timezone delivery expectations.",
        deliverables: [
          "Dedicated US DB administration team allocation and shift alignment",
          "Comprehensive training in US pension tax withholding and reporting",
          "Productivity monitoring framework implementation"
        ],
        risk: "Cross-training to handle seasonal transaction spikes (calendar year-end benefit re-calculations).",
        metrics: [
          "100% Team qualification in US DB plan parameters",
          "Dual shift readiness for timely client response",
          "Shadow processing milestone clearance"
        ]
      },
      4: {
        title: "US Dual Run & Parallel Verification",
        focus: "Parallel dual-run testing on live participant requests to confirm identical results with onshore teams.",
        deliverables: [
          "Dual-run validation logs across multiple pension benefit options",
          "UAT sign-off for database interfaces and automated batch processing",
          "Disaster recovery and emergency cutover dry-run verification"
        ],
        risk: "Zero-tolerance for calculation discrepancy during side-by-side run.",
        metrics: [
          "100% Calculation accuracy on complex annuity reconciliations",
          "SLA turnaround adherence at or above 98.5%",
          "Formal joint cutover approval from US Operations Director"
        ]
      },
      5: {
        title: "US Go-Live & Post-Transition Cadence",
        focus: "Independent operational management of US Defined Benefit plan administration from Indian delivery centres.",
        deliverables: [
          "Operational handover completion and formal cutover release",
          "Bi-weekly client operations reviews and SLA scorecards",
          "Ongoing Six Sigma defect-prevention auditing"
        ],
        risk: "Continuous audit mechanisms to ensure total adherence to plan terms.",
        metrics: [
          "Sustained 99%+ processing quality on monthly benefit cycles",
          "Complete onshore client satisfaction rating",
          "Continuous workflow enhancements deployed"
        ]
      }
    }
  };

  const careerHistory = [
    {
      period: "2024 — Present",
      company: "Aon",
      role: "Senior Manager — UK Retirement Services",
      location: "Gurugram, Haryana, India",
      summary: "Senior operational leadership within UK Retirement & Data Solutions. Leading complex service delivery, client escalations, and cross-functional technology integrations while directing multi-team operations across international benefit revenue lines."
    },
    {
      period: "2023 — 2024",
      company: "Willis Towers Watson (WTW)",
      role: "Operations Manager — Client Projects & Installs (UK Market)",
      location: "Gurugram, Haryana, India",
      summary: "Led Client Projects & Installs team to maintain and update pension data for UK Defined Benefit schemes. Managed Guaranteed Minimum Pension (GMP) Reconciliation projects tied to statutory GMP Equalization Legislation. Provided technical pensions configuration on WTW systems and conducted quarterly and annual User Acceptance Testing (UAT) cycles."
    },
    {
      period: "2018 — 2023",
      company: "Aon Consulting",
      role: "Senior Manager & Manager — UK Retirement Services",
      location: "Noida, Uttar Pradesh, India",
      summary: "Advanced through three progressive appointments: Senior Manager (2022–2023) leading stakeholder management across multiple geographies and priority automation projects; Manager (2020–2022) directing a team of >10 colleagues across 3 major UK Retirement revenue lines; Senior Consultant II (2018–2020) delivering specialized scheme administration migrations."
    },
    {
      period: "2013 — 2018",
      company: "Conduent HR Services (formerly Xerox)",
      role: "Process Consultant & Senior Analyst",
      location: "Noida, Uttar Pradesh, India",
      summary: "Streamlined operational workflows and assisted critical business decision-making as Process Consultant (2018). Previously served as Senior Analyst (2013–2017) handling Defined Benefits administration, client migrations from US to India, and complex data verification."
    },
    {
      period: "2012 — 2013",
      company: "Fidelity Investments",
      role: "Senior Specialist",
      location: "India",
      summary: "Executed high-precision benefit reconciliations, calculation processing, and transaction verifications within tight turnaround schedules. Resolved retirement plan operational inquiries and performed asset reconciliations."
    },
    {
      period: "2010 — 2012",
      company: "Aon Consulting",
      role: "Actuarial Analyst",
      location: "India",
      summary: "Engineered and maintained actuarial calculation workbooks using Visual Basic (VB) applications. Modeled liability valuations and conducted comprehensive asset/liability reconciliation exercises."
    },
    {
      period: "2005 — 2010",
      company: "GE Capital",
      role: "Executive",
      location: "Gurugram, Haryana, India",
      summary: "Five years establishing foundational operational discipline, Six Sigma quality benchmarks, and client relationship management in financial services, consistently achieving top customer satisfaction ratings."
    }
  ];

  const currentPhase = phaseData[activeMarket][activePhase];

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">

      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
        <div className="container-custom py-4 flex items-center justify-between">
          <a href="#hero" className="no-underline flex items-baseline gap-3">
            <span className="font-bold text-lg text-[#0f172a] tracking-tight">Varun Gupta</span>
            <span className="text-sm text-[#64748b] hidden md:inline">Senior Manager · UK Retirement</span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#334155]">
            <a href="#about" className="hover:text-[#0f172a] transition-colors no-underline">Overview</a>
            <a href="#experience" className="hover:text-[#0f172a] transition-colors no-underline">Experience</a>
            <a href="#methodology" className="hover:text-[#0f172a] transition-colors no-underline">Methodology</a>
            <a href="#competencies" className="hover:text-[#0f172a] transition-colors no-underline">Competencies</a>
            <a href="#credentials" className="hover:text-[#0f172a] transition-colors no-underline">Credentials</a>
            <a href="#contact" className="hover:text-[#0f172a] transition-colors no-underline">Contact</a>
          </nav>

          <a 
            href="#contact" 
            className="btn-action bg-[#0f172a] hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded transition-colors no-underline inline-block"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="section-pad pt-4 md:pt-10">
        <div className="container-custom">
          
          <div className="max-w-4xl mb-8 hero-enter">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#0f172a] tracking-tight mb-4">
              Varun Gupta
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#334155] leading-snug mb-4">
              Senior Manager — UK Retirement Services &amp; Actuarial Data Solutions
            </p>
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-3xl mb-6">
              Over eighteen years directing complex offshore client transitions, actuarial modeling, and pension administration across UK and US Defined Benefit schemes from Delhi NCR, India.
            </p>

            {/* Direct Action Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/varun-gupta-12b23237/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-action bg-[#0f172a] hover:bg-slate-800 text-white px-6 py-3 rounded text-sm font-semibold transition-colors no-underline inline-flex items-center gap-2 min-h-[44px]"
              >
                Connect on LinkedIn ↗
              </a>
              <a 
                href="mailto:varun.4891@gmail.com" 
                className="btn-action bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] px-6 py-3 rounded text-sm font-semibold transition-colors no-underline inline-flex items-center gap-2 min-h-[44px]"
              >
                varun.4891@gmail.com
              </a>
              <a 
                href="https://github.com/LearnerVarun/portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-action bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] px-6 py-3 rounded text-sm font-semibold transition-colors no-underline inline-flex items-center gap-2 min-h-[44px]"
              >
                GitHub Project ↗
              </a>
            </div>
          </div>

          {/* Panoramic Hero Picture */}
          <div className="mt-6 rounded-xl overflow-hidden bg-[#f8fafc] hero-img-enter">
            <img 
              src="/assets/london.jpg" 
              alt="City of London financial district skyline" 
              className="w-full h-auto aspect-[21/9] object-cover block"
              width={1240}
              height={530}
            />
            <div className="p-4 bg-[#f8fafc] text-sm text-[#64748b]">
              City of London &amp; Canary Wharf — Primary corporate jurisdiction for UK Defined Benefit pension trustees, scheme administration migrations, and statutory GMP Equalization operations.
            </div>
          </div>

        </div>
      </section>

      {/* Section 1: Executive Overview */}
      <section id="about" className="section-pad section-tint">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14" data-reveal>
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-5">
                Operational Leadership &amp; Background
              </h2>
              <div className="space-y-3 text-sm text-[#64748b]">
                <p><strong>18+ Years</strong> Industry Experience</p>
                <p><strong>5 Global Firms</strong> (Aon, WTW, Xerox, Fidelity, GE)</p>
                <p><strong>UK &amp; US DB Schemes</strong> Technical Purview</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#334155] leading-relaxed">
              <p>
                With <strong>over 18 years of specialized work experience</strong> in the retirement services and financial operations industry, I lead operational transitions, actuarial modeling, and data solutions for major corporate Defined Benefit pension schemes.
              </p>
              <p>
                Throughout my tenure across <strong>Aon</strong>, <strong>Willis Towers Watson (WTW)</strong>, <strong>Conduent / Xerox</strong>, <strong>Fidelity Investments</strong>, and <strong>GE Capital</strong>, I have established and managed mission-critical offshore delivery operations bridging onshore trustees in the United Kingdom and United States with Indian analytical teams.
              </p>
              <p>
                My domain expertise encompasses UK and US Defined Benefit plan administration, trust deed rule interpretation, pension payroll, and complex <strong>Guaranteed Minimum Pension (GMP) Reconciliation</strong> projects aligned with statutory GMP Equalization legislation.
              </p>
            </div>
          </div>

          {/* 2 Photographic Frames */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal>
            <div className="rounded-xl overflow-hidden bg-white">
              <img 
                src="/assets/architecture.jpg" 
                alt="Institutional architecture lines" 
                className="w-full h-auto aspect-[16/10] object-cover block"
                width={600}
                height={375}
              />
              <div className="p-4 bg-white text-sm text-[#64748b]">
                Institutional Governance — Structured frameworks aligning UK legislation with offshore delivery centers.
              </div>
            </div>

            <div className="rounded-xl overflow-hidden bg-white">
              <img 
                src="/assets/ledger.jpg" 
                alt="Actuarial calculation ledgers and records" 
                className="w-full h-auto aspect-[16/10] object-cover block"
                width={600}
                height={375}
              />
              <div className="p-4 bg-white text-sm text-[#64748b]">
                Actuarial Ledger &amp; Records — High-precision audit trails for Guaranteed Minimum Pension recalculations.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Career History (Master Editorial Timeline) */}
      <section id="experience" className="section-pad">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-14" data-reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-3">
              Professional Career History
            </h2>
            <p className="text-base text-[#334155]">
              Chronological ledger of operational leadership, project migration, and actuarial consulting appointments across 18+ years.
            </p>
          </div>

          <div className="space-y-14">
            {careerHistory.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline" data-reveal>
                <div className="lg:col-span-3">
                  <span className="text-base font-bold text-[#0f172a] block">{item.period}</span>
                  <span className="text-sm text-[#64748b] block mt-1">{item.location}</span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-bold text-[#0f172a]">{item.company}</h3>
                  <p className="text-base font-medium text-[#1e40af] mt-1">{item.role}</p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-base text-[#334155] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 3: Transition & Migration Methodology (Interactive Chapter) */}
      <section id="methodology" className="section-pad section-dark">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-10" data-reveal>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3">
              Offshore Transition Methodology
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              The standardized 5-stage migration architecture deployed when transferring UK and US Defined Benefit pension administration offshore to India.
            </p>
          </div>

          {/* Model Switcher Buttons */}
          <div className="flex flex-wrap gap-4 mb-8" data-reveal>
            <button
              onClick={() => setActiveMarket('uk')}
              className={`btn-action px-5 py-3 rounded text-sm font-semibold transition-colors ${activeMarket === 'uk' ? 'bg-[#1e40af] text-white' : 'bg-[#111a2e] text-slate-300 hover:text-white'}`}
            >
              UK Defined Benefit Model (GMP &amp; Equalization)
            </button>
            <button
              onClick={() => setActiveMarket('us')}
              className={`btn-action px-5 py-3 rounded text-sm font-semibold transition-colors ${activeMarket === 'us' ? 'bg-[#1e40af] text-white' : 'bg-[#111a2e] text-slate-300 hover:text-white'}`}
            >
              US Defined Benefit Model (ERISA &amp; PBGC)
            </button>
          </div>

          {/* 5 Stages Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8" data-reveal>
            {["Due Diligence", "Process Mapping", "Capacity Planning", "Dual Run UAT", "Steady State"].map((name, index) => {
              const step = index + 1;
              return (
                <button
                  key={step}
                  onClick={() => setActivePhase(step)}
                  className={`btn-action p-4 rounded-lg text-left transition-colors ${activePhase === step ? 'bg-[#111a2e] text-white border-l-4 border-[#60a5fa]' : 'bg-[#0e1626] text-slate-400 hover:text-white'}`}
                >
                  <span className="block text-sm font-bold text-white">{name}</span>
                </button>
              );
            })}
          </div>

          {/* Stage Details Inspection Grid */}
          <div className="bg-[#111a2e] rounded-xl p-8 sm:p-12 mb-10" data-reveal>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              {currentPhase.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h4 className="text-sm font-bold text-slate-400 mb-2">
                  Primary operational focus
                </h4>
                <p className="text-base text-slate-200 leading-relaxed mb-8">
                  {currentPhase.focus}
                </p>

                <h4 className="text-sm font-bold text-slate-400 mb-2">
                  Governance deliverables
                </h4>
                <ul className="space-y-3 text-base text-slate-300">
                  {currentPhase.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span className="text-[#60a5fa] font-bold">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 mb-2">
                  Quality and risk parameters
                </h4>
                <p className="text-base text-slate-200 leading-relaxed mb-8">
                  {currentPhase.risk}
                </p>

                <h4 className="text-sm font-bold text-slate-400 mb-2">
                  Target SLAs and metrics
                </h4>
                <ul className="space-y-3 text-base text-slate-300">
                  {currentPhase.metrics.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-3">
                      <span className="text-[#60a5fa] font-bold">—</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Data Picture Anchor */}
          <div className="rounded-xl overflow-hidden bg-[#111a2e]" data-reveal>
            <img 
              src="/assets/data.jpg" 
              alt="Data solutions and system architecture" 
              className="w-full h-auto aspect-[21/9] object-cover block"
              width={1240}
              height={530}
            />
            <div className="p-4 bg-[#111a2e] text-sm text-slate-300">
              Technical Infrastructure — SQL Server pipelines, UNIX scripts, and EASEL actuarial models underpinning dual-run reconciliations.
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Core Competencies (Typographic Matrix) */}
      <section id="competencies" className="section-pad section-tint">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-14" data-reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-3">
              Core Competencies &amp; Purview
            </h2>
            <p className="text-base text-[#334155]">
              Specialized domain capabilities spanning actuarial modeling, international pensions, and large-scale team operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-reveal>
            <div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Transition Management</h3>
              <p className="text-sm text-[#334155] leading-relaxed mb-6">
                End-to-end stewardship of cross-geographical migrations from due diligence to steady-state SLAs.
              </p>
              <ul className="space-y-2 text-sm text-[#334155]">
                <li>— US &amp; UK Offshoring</li>
                <li>— As-Is &amp; To-Be Process Mapping</li>
                <li>— Capacity &amp; Shift Planning</li>
                <li>— SLA &amp; KPI Governance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Retirement &amp; Pensions</h3>
              <p className="text-sm text-[#334155] leading-relaxed mb-6">
                Deep command over Defined Benefit plan statutes, pension payrolls, and member calculations.
              </p>
              <ul className="space-y-2 text-sm text-[#334155]">
                <li>— UK &amp; US DB Scheme Rules</li>
                <li>— GMP Equalization &amp; Recs</li>
                <li>— Trust Deed Interpretation</li>
                <li>— Pension Payroll Cycles</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Stakeholder Leadership</h3>
              <p className="text-sm text-[#334155] leading-relaxed mb-6">
                Fostering sustained client partnership with UK and US stakeholders while mentoring operational cohorts.
              </p>
              <ul className="space-y-2 text-sm text-[#334155]">
                <li>— Direct Trustee &amp; Client Trust</li>
                <li>— 10+ Team Management</li>
                <li>— Performance Coaching</li>
                <li>— Risk &amp; Escalation Cadence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Technical Systems</h3>
              <p className="text-sm text-[#334155] leading-relaxed mb-6">
                Hands-on execution across database querying, operating environments, and calculation workbooks.
              </p>
              <ul className="space-y-2 text-sm text-[#334155]">
                <li>— SQL Server Data Extraction</li>
                <li>— UNIX Server Operations</li>
                <li>— EASEL Application Scripts</li>
                <li>— Visual Basic (VB) Modeling</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Education & Credentials */}
      <section id="credentials" className="section-pad">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-14" data-reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-3">
              Education &amp; Qualifications
            </h2>
            <p className="text-base text-[#334155]">
              Actuarial qualifications, quality excellence frameworks, and foundational university degree.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14" data-reveal>
            <div>
              <span className="text-sm font-semibold text-[#1e40af] block mb-2">Actuarial Science</span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Institute of Actuaries of India</h3>
              <p className="text-base text-[#334155] leading-relaxed">
                Pursuing professional actuarial qualifications. Successfully cleared <strong>CT-3</strong> (Probability &amp; Statistics) and <strong>CT-9</strong> (Business Awareness).
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-[#1e40af] block mb-2">Operational Excellence</span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Lean &amp; Six Sigma Trained</h3>
              <p className="text-base text-[#334155] leading-relaxed">
                Formally trained in Lean optimization, waste elimination, root-cause analysis, and Six Sigma data-driven quality frameworks.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-[#1e40af] block mb-2">University Degree</span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Bachelor of Science (B.Sc.)</h3>
              <p className="text-base text-[#334155] leading-relaxed">
                Chaudhary Charan Singh (CCS) University (2002–2005). Core scientific foundation fostering rigorous mathematical and analytical reasoning.
              </p>
            </div>
          </div>

          {/* Boardroom Picture Anchor */}
          <div className="rounded-xl overflow-hidden bg-[#f8fafc]" data-reveal>
            <img 
              src="/assets/boardroom.jpg" 
              alt="Institutional executive boardroom" 
              className="w-full h-auto aspect-[21/9] object-cover block"
              width={1240}
              height={530}
            />
            <div className="p-4 bg-[#f8fafc] text-sm text-[#64748b]">
              Executive Stewardship — Cultivating sustained onshore stakeholder trust and operational governance.
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Direct Contact */}
      <section id="contact" className="section-pad section-tint">
        <div className="container-custom max-w-4xl">
          
          <div className="text-center mb-10" data-reveal>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0f172a] mb-3">
              Direct Inquiries &amp; Engagement
            </h2>
            <p className="text-base sm:text-lg text-[#334155] max-w-2xl mx-auto">
              Available for executive discussions, international retirement transitions, and senior operational management inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8" data-reveal>
            <div className="p-6 bg-white rounded-xl">
              <span className="text-sm font-medium text-[#64748b] block mb-1">Direct Email</span>
              <span className="text-base font-bold text-[#0f172a] block">varun.4891@gmail.com</span>
              <button 
                onClick={copyEmail}
                className="mt-3 text-sm text-[#1e40af] font-semibold hover:underline block"
              >
                {copiedEmail ? "Copied to Clipboard! ✓" : "Copy Email Address"}
              </button>
            </div>

            <a 
              href="https://www.linkedin.com/in/varun-gupta-12b23237/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl no-underline hover:bg-slate-50 transition-colors block"
            >
              <span className="text-sm font-medium text-[#64748b] block mb-1">LinkedIn Profile</span>
              <span className="text-base font-bold text-[#0f172a] block">varun-gupta-12b23237 ↗</span>
              <span className="text-sm text-[#1e40af] font-semibold mt-3 block">View LinkedIn Profile</span>
            </a>

            <a 
              href="https://github.com/LearnerVarun/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl no-underline hover:bg-slate-50 transition-colors block"
            >
              <span className="text-sm font-medium text-[#64748b] block mb-1">GitHub Project</span>
              <span className="text-base font-bold text-[#0f172a] block">LearnerVarun/portfolio ↗</span>
              <span className="text-sm text-[#1e40af] font-semibold mt-3 block">Inspect Repository</span>
            </a>

            <div className="p-6 bg-white rounded-xl">
              <span className="text-sm font-medium text-[#64748b] block mb-1">Location &amp; Languages</span>
              <span className="text-base font-bold text-[#0f172a] block">Delhi NCR, India</span>
              <span className="text-sm text-[#64748b] mt-3 block">English &amp; Hindi (Professional Fluency)</span>
            </div>
          </div>

          <div className="text-center" data-reveal>
            <a 
              href="mailto:varun.4891@gmail.com" 
              className="btn-action bg-[#0f172a] hover:bg-slate-800 text-white px-8 py-4 rounded text-base font-semibold transition-colors no-underline inline-block min-h-[48px]"
            >
              Send an Email Directly
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white text-sm text-[#64748b]">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-semibold text-[#0f172a]">Varun Gupta</p>
            <p className="text-sm text-[#64748b] mt-0.5">Senior Manager — UK Retirement &amp; Data Solutions · © 2026</p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#hero" className="text-[#334155] hover:text-[#0f172a] no-underline">Back to Top ↑</a>
            <a href="https://www.linkedin.com/in/varun-gupta-12b23237/" target="_blank" rel="noopener noreferrer" className="text-[#334155] hover:text-[#0f172a] no-underline">LinkedIn</a>
            <a href="https://github.com/LearnerVarun/portfolio" target="_blank" rel="noopener noreferrer" className="text-[#334155] hover:text-[#0f172a] no-underline">GitHub</a>
            <a href="mailto:varun.4891@gmail.com" className="text-[#334155] hover:text-[#0f172a] no-underline">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
