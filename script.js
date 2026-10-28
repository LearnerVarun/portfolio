// ==========================================================================
// Varun Gupta - Executive Portfolio Interactive Logic
// Live Transition Scope Explorer, Career History selector & Motion Layer
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Transition Scope & Phase Explorer (Live Thing) ---
  const phaseData = {
    uk: {
      1: {
        title: "Phase 1: Due Diligence & Scope Definition",
        focus: "Thorough audit of UK Defined Benefit scheme trust deeds, benefit rules, and historical payroll records.",
        deliverables: [
          "Transition Feasibility Matrix and Project Charter sign-off with UK Trustees",
          "GMP (Guaranteed Minimum Pension) scope assessment under Equalization statutory guidelines",
          "Standard Procedure Document (SPD) inventory and baseline variance report"
        ],
        risk: "Zero-defect legislative review to ensure all statutory requirements are accounted for upfront.",
        metrics: [
          "100% Documentation Sign-off by UK Stakeholders",
          "Defined Transition Milestones and SLA Benchmarks",
          "Data Profiling Schema Audit on SQL Server"
        ]
      },
      2: {
        title: "Phase 2: Process Mapping & Solution Design",
        focus: "As-Is to To-Be operational workflow engineering tailored for cross-geographical dual handling.",
        deliverables: [
          "Detailed Process Map for benefit calculation, annual revaluations, and member transfers",
          "Actuarial formula verification scripts using Visual Basic (VB) models",
          "Exception handling protocols and client escalation matrix"
        ],
        risk: "Lean process simplification to eliminate redundant handover friction between UK and India teams.",
        metrics: [
          "100% Process Maps peer-reviewed by Senior Consultants",
          "Turnaround time baseline target of 48 hours for standard pension transactions",
          "Sign-off from Risk & Compliance Committee"
        ]
      },
      3: {
        title: "Phase 3: Capacity Planning & Recruitment",
        focus: "Talent acquisition, cohort training, and multi-line capacity scheduling across offshore hubs.",
        deliverables: [
          "Full-time resource allocation plan across 3 UK retirement revenue lines",
          "Rigorous technical training curriculum covering UK pension statutes and system configurations",
          "Productivity matrix setup for real-time output tracking"
        ],
        risk: "Proactive attrition buffering and cross-skilling to guarantee unbroken service continuity.",
        metrics: [
          "10-member operational core trained and certified in UK DB scheme rules",
          "100% Timesheet and work allocation system integration",
          "Shadowing completion rate of 100% prior to dual running"
        ]
      },
      4: {
        title: "Phase 4: UAT & Dual-Run Execution",
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
        title: "Phase 5: Go-Live Governance & Steady State",
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
        title: "Phase 1: US Plan Scope & ERISA Regulatory Due Diligence",
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
        title: "Phase 2: US Process Mapping & Actuarial Workbook Calibration",
        focus: "Standardizing calculation engines for early retirement reductions, lump sums, and joint annuities.",
        deliverables: [
          "US DB Benefit calculation flowcharts and standard operating guides",
          "Visual Basic actuarial workbook calibration against US actuarial tables",
          "Tiered escalation matrix for complex plan exceptions"
        ],
        risk: "Automated regression testing of benefit calculation engines.",
        metrics: [
          "100% Sample calculation sign-off across early/normal retirement scenarios",
          "Turnaround standard fixed for participant quote generation",
          "Quality auditor verification of formula logic"
        ]
      },
      3: {
        title: "Phase 3: US Market Capacity & Team Operational Readiness",
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
        title: "Phase 4: US Dual Run & System UAT Verification",
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
        title: "Phase 5: US Go-Live & Post-Transition Governance",
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

  let currentMarket = 'uk';
  let currentPhase = 1;

  const btnUk = document.getElementById('btn-uk-model');
  const btnUs = document.getElementById('btn-us-model');
  const phaseNodes = document.querySelectorAll('.phase-node');
  
  const titleEl = document.getElementById('active-phase-title');
  const focusDescEl = document.getElementById('detail-focus-desc');
  const deliverablesEl = document.getElementById('detail-deliverables-list');
  const riskDescEl = document.getElementById('detail-risk-desc');
  const metricsEl = document.getElementById('detail-metrics-list');

  function updateToolDisplay() {
    const data = phaseData[currentMarket][currentPhase];
    if (!data) return;

    if (titleEl) titleEl.textContent = data.title;
    if (focusDescEl) focusDescEl.textContent = data.focus;
    if (riskDescEl) riskDescEl.textContent = data.risk;

    if (deliverablesEl) {
      deliverablesEl.innerHTML = '';
      data.deliverables.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        deliverablesEl.appendChild(li);
      });
    }

    if (metricsEl) {
      metricsEl.innerHTML = '';
      data.metrics.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        metricsEl.appendChild(li);
      });
    }

    phaseNodes.forEach(node => {
      const p = parseInt(node.getAttribute('data-phase'), 10);
      if (p === currentPhase) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });
  }

  if (btnUk && btnUs) {
    btnUk.addEventListener('click', () => {
      currentMarket = 'uk';
      btnUk.classList.add('active');
      btnUs.classList.remove('active');
      updateToolDisplay();
    });

    btnUs.addEventListener('click', () => {
      currentMarket = 'us';
      btnUs.classList.add('active');
      btnUk.classList.remove('active');
      updateToolDisplay();
    });
  }

  phaseNodes.forEach(node => {
    node.addEventListener('click', () => {
      currentPhase = parseInt(node.getAttribute('data-phase'), 10);
      updateToolDisplay();
    });
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        currentPhase = parseInt(node.getAttribute('data-phase'), 10);
        updateToolDisplay();
      }
    });
  });

  // --- 2. Career Experience Selection ---
  const careerEntries = document.querySelectorAll('.career-entry');
  careerEntries.forEach(entry => {
    entry.addEventListener('click', () => {
      careerEntries.forEach(e => e.classList.remove('is-active'));
      entry.classList.add('is-active');
    });
  });

  // --- 3. Motion Layer (Staggered Entrance on Scroll) ---
  const movingNodes = document.querySelectorAll('.fade-in-node');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    movingNodes.forEach((node, idx) => {
      node.style.opacity = '0';
      node.style.transform = 'translateY(24px)';
      node.style.transition = `opacity 0.5s ease ${(idx % 4) * 0.08}s, transform 0.5s ease ${(idx % 4) * 0.08}s`;
      observer.observe(node);
    });
  }

});
