/**
 * DORUK TOPCU - PORTFOLIO & INTERACTIVE CV APPLICATION SCRIPT
 * High-performance interactive features: particle canvas background, typewriter effect,
 * project search/filtering, command palette (Ctrl+K), bibtex citation modal, theme switcher.
 */

// ==========================================================================
// 1. DATA REPOSITORIES (Full Master Document Content)
// ==========================================================================
const PROJECTS_DATA = [
  // Chrome Extensions
  {
    id: "ext-coffee-brew-tracker",
    title: "Coffee Brew Tracker",
    category: "extensions",
    categoryLabel: "Chrome Extension",
    version: "1.0.0",
    description: "Personal brewing companion for home baristas and coffee enthusiasts. Features 10+ brewing methods (V60, AeroPress, French Press, Chemex, Moka Pot), 1-click expert recipe presets, automatic golden brew ratio calculator, precision bloom timer with audio alerts, custom recipe logs, and 100% offline local storage.",
    tags: ["Chrome Extension", "Interactive Timer", "Coffee Brewing", "Local Storage", "Productivity"],
    storeUrl: "https://chromewebstore.google.com/detail/lhmdbaeiipojbmbmockjenddjjbiifjb?utm_source=item-share-cb"
  },
  {
    id: "ext-deep-hour",
    title: "DeepHour",
    category: "extensions",
    categoryLabel: "Chrome Extension",
    version: "1.0.0",
    description: "Privacy-first study and deep work timer running 100% locally with zero tracking. Features 7 scientific focus methods (Classic Pomodoro, 50/10, 90/20 Deep Work, 52/17, Flowtime, Animedoro, Study & Recall), custom interval builder, persistent background clock, goal tracking, and 12-week consistency heatmaps.",
    tags: ["Chrome Extension", "Deep Work", "Pomodoro & Flowtime", "Analytics", "Privacy-First"],
    storeUrl: "https://chromewebstore.google.com/detail/deep-hour/fokflkiijjopnkfhjpbecfjpoigepgie"
  },
  {
    id: "ext-personalized-profiler",
    title: "Personalized Profiler",
    category: "extensions",
    categoryLabel: "Chrome Extension",
    version: "1.2.0",
    description: "100% client-side browsing persona and privacy analytics engine. Computes 10 data-driven browsing personas, renders exportable canvas cards, analyzes 24x7 activity heatmaps and digital wellbeing trends, inspects cookie security, and synthesizes paste-ready AI context profiles for Claude & ChatGPT—with zero network requests.",
    tags: ["Chrome Extension", "Local Analytics", "Privacy Inspector", "Canvas Export", "AI Context Generator"],
    storeUrl: "https://chromewebstore.google.com/detail/personalized-profiler/llnkcaooodbcdeinpfgcbjaehblfaflf"
  },
  {
    id: "ext-bookworm",
    title: "BookWorm",
    category: "extensions",
    categoryLabel: "Chrome Extension",
    version: "1.0.0",
    description: "Universal 1-click book-saving and personal reading list manager. Automatically extracts book titles, authors, cover art, and descriptions across any bookstore or library catalog into customizable shelves (Want to Read, Currently Reading, Favorites), with manual entry options and JSON backup/export.",
    tags: ["Chrome Extension", "Book Tracking", "Web Scraper", "Local Storage", "Privacy"],
    storeUrl: "https://chromewebstore.google.com/detail/jlfijhekfaidjomhknecaonjdakpdaan?utm_source=item-share-cb"
  },
  {
    id: "ext-number-theory-lab",
    title: "Number Theory Lab",
    category: "extensions",
    categoryLabel: "Chrome Extension",
    version: "1.0.0",
    description: "Interactive computational suite for elementary number theory featuring arbitrary-precision arithmetic. Includes 9 step-by-step mathematical solvers (Extended Euclidean GCD/LCM, Linear Diophantine, Congruences, CRT, Euler's φ & Möbius μ, Prime Factorization, Legendre Symbol), sequence formula workbench, and searchable theorem guide.",
    tags: ["Chrome Extension", "Number Theory", "Exact Math", "Arbitrary-Precision", "Interactive Solvers"],
    storeUrl: "https://chromewebstore.google.com/detail/cidhiojfmleajnapbmdhnopendepaigj?utm_source=item-share-cb"
  },
  {
    id: "ext-badgesaver-credly",
    title: "BadgeSaver for Credly",
    category: "extensions",
    categoryLabel: "Chrome Extension",
    version: "1.0.0",
    description: "100% offline digital credential manager and wishlist for Credly certifications. Features 1-click badge & public wallet bulk saver with high-res artwork, customizable learning path builder with live progress tracking, auto-domain categorization (Cloud, Cybersecurity, AI/ML, DevOps), and JSON/CSV/Markdown export.",
    tags: ["Chrome Extension", "Credly", "Certifications", "Career Roadmaps", "Markdown Export"],
    storeUrl: "https://chromewebstore.google.com/detail/mnfoakgnggceojadogcechdoohfancnd?utm_source=item-share-cb"
  },
  {
    id: "ext-eye-health-tracker",
    title: "EyeHealthTracker",
    category: "extensions",
    categoryLabel: "Chrome Extension",
    version: "1.1.1",
    description: "Ergonomic wellness extension combating digital eye strain with guided 20-20-20 rule micro-break reminders, interactive 20-second break timer, customizable daily eye-care exercise habits, activity calendar tracking, high-DPI full-screen desktop mode, and an educational Eye Wiki.",
    tags: ["Chrome Extension", "Health & Wellness", "20-20-20 Rule", "Break Reminder", "Habit Tracker"],
    storeUrl: "https://chromewebstore.google.com/detail/ghfkfobnmmhpaonmjmokbaalgdhbinbb?utm_source=item-share-cb"
  },

  // ML / Bioinformatics
  {
    id: "missvarpath",
    title: "MissVarPath Missense Predictor",
    category: "bioinformatics",
    categoryLabel: "ML & Bioinformatics",
    description: "Missense variant pathogenicity predictor utilizing OpenCravat and ClinVar data pipelines for genomic mutation impact scoring.",
    tags: ["Genomics", "ClinVar", "OpenCravat", "Python", "Variant Analysis"],
    github: "https://github.com/doruktopcu/MissVarPath-Missense-Detection"
  },
  {
    id: "brain-tumor",
    title: "Brain Tumor Detector",
    category: "bioinformatics",
    categoryLabel: "ML & Bioinformatics",
    description: "Deep learning MRI scan classifier for automatic brain tumor segment identification (Hacettepe CMP684 term project).",
    tags: ["Deep Learning", "CNN", "Medical Imaging", "PyTorch"],
    github: "https://github.com/doruktopcu/Brain-Tumor-Detector"
  },
  {
    id: "ben-mole",
    title: "Ben Mole Tracker",
    category: "bioinformatics",
    categoryLabel: "ML & Bioinformatics",
    description: "Computer vision lesion monitor predicting dangerous skin moles and tracking pigment changes over time.<br><span style=\"display: block; margin-top: 0.35rem; color: var(--accent-cyan); font-weight: 600;\"><i class=\"fas fa-hourglass-half\"></i> Status: In Progress</span>",
    tags: ["Computer Vision", "Health Tech", "Python", "TensorFlow", "In Progress"],
    github: "https://github.com/doruktopcu/Ben-Mole-Tracker"
  },

  // Computer Vision & Perception
  {
    id: "rrem",
    title: "RREM: Real-time Road Elements Monitor",
    category: "vision",
    categoryLabel: "Vision & Perception",
    description: "Advanced Driver Assistance System (ADAS) leveraging YOLO11 optimized for Apple Silicon (MPS) and NVIDIA CUDA. Delivers real-time alerts across 20 distinct classes (vulnerable road users, animal hazards, infrastructure anomalies like potholes and fire) with multi-zone hazard assessment logic (0.835 mAP@50).",
    tags: ["YOLO11", "Computer Vision", "ADAS", "Object Detection", "CUDA", "PyTorch"],
    github: "https://github.com/doruktopcu/RREM-Real-time-Road-Elements-Monitor"
  },
  {
    id: "ccskde",
    title: "CCSKDE / Scene-SKDE Traffic Hazard Detection",
    category: "vision",
    categoryLabel: "Vision & Perception",
    description: "Context-Conditioned Sequential Keypoint Density Estimation for real-time traffic hazard and anomaly forecasting.",
    tags: ["Computer Vision", "Traffic AI", "Keypoint Estimation", "PyTorch"],
    github: "https://github.com/doruktopcu/CCSKDE"
  }
];

const CERTIFICATIONS_DATA = [
  {
    title: "Claude Certified Architect - Foundations",
    provider: "Anthropic",
    date: "Issued Jun 2026 · Expires Jun 2027",
    category: "ai",
    credlyId: "7ae4b821-8edc-4d40-811d-4396f29df51e",
    credentialUrl: "https://www.credly.com/badges/7ae4b821-8edc-4d40-811d-4396f29df51e/public_url"
  },
  {
    title: "Google Cloud Digital Leader",
    provider: "Google",
    date: "Issued May 2026 · Expires May 2029",
    category: "cloud",
    credlyId: "1b3cc2a1-985b-4f07-9427-b82588cce87c"
  },
  {
    title: "AWS Certified Machine Learning – Specialty",
    provider: "Amazon Web Services (AWS)",
    date: "Issued Aug 2025",
    category: "aws",
    credlyId: "d69137e2-59d9-4847-987d-1ed79c8a7c08"
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    provider: "Amazon Web Services (AWS)",
    date: "Issued Aug 2023 · ID: YMX5G031WM4EQ6C9",
    category: "aws",
    credlyId: "f6a41f4d-8bf2-466a-89ee-42c7375965c2"
  },
  {
    title: "AWS Partner: Generative AI Essentials",
    provider: "Amazon Web Services (AWS)",
    date: "Issued Apr 2025",
    category: "aws",
    credlyId: "e4786224-fa0f-48a0-b6fb-1955b422efd3"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services (AWS)",
    date: "Issued Jun 2023 · ID: 4VCKYD1CV1V4QRKL",
    category: "aws",
    credlyId: "6bf63baa-b381-4214-940e-8f119285bb32"
  },
  {
    title: "NestJS Zero to Hero - Modern Back-End",
    provider: "Udemy",
    date: "Issued Apr 2023",
    category: "web"
  },
  {
    title: "Meta Front-End Development Specialization",
    provider: "Meta (Coursera)",
    date: "Issued Aug 2022",
    category: "web"
  },
  {
    title: "Machine Learning by Andrew Ng",
    provider: "Stanford / Coursera",
    date: "Issued Jan 2022",
    category: "ai"
  },
  {
    title: "API and API Testing",
    provider: "BTK Akademi",
    date: "Issued Jul 2022",
    category: "qa"
  },
  {
    title: "Python & TensorFlow for Data Science",
    provider: "BTK Akademi",
    date: "Issued Jan 2022",
    category: "ai"
  },
  {
    title: "Image Processing Track",
    provider: "DataCamp",
    date: "Issued Mar 2022",
    category: "vision"
  }
];

// ==========================================================================
// 2. CANVAS BACKGROUND ANIMATION (Constellation Mesh)
// ==========================================================================
class ConstellationCanvas {
  constructor() {
    this.canvas = document.getElementById('bg-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 65;
    this.maxDistance = 140;
    this.mouse = { x: null, y: null, radius: 180 };

    this.init();
    this.animate();
    this.bindEvents();
  }

  init() {
    this.resize();
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.4 + 0.2
      });
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      // Update global CSS mouse variables for card spotlight
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const particleColor = isDark ? '0, 242, 254' : '127, 0, 255';

    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Mouse interactivity
      if (this.mouse.x !== null) {
        let dx = this.mouse.x - p.x;
        let dy = this.mouse.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          let force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${particleColor}, ${p.baseAlpha})`;
      this.ctx.fill();

      // Connect lines
      for (let j = i + 1; j < this.particles.length; j++) {
        let p2 = this.particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          let alpha = (1 - dist / this.maxDistance) * 0.25;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(${particleColor}, ${alpha})`;
          this.ctx.lineWidth = 0.75;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// ==========================================================================
// 3. HERO TYPEWRITER ANIMATION
// ==========================================================================
class TypewriterEffect {
  constructor(element, phrases, period = 2000) {
    this.element = element;
    this.phrases = phrases;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.loopNum = 0;
    this.isDeleting = false;
    if (this.element) this.tick();
  }

  tick() {
    let i = this.loopNum % this.phrases.length;
    let fullTxt = this.phrases[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = `<span class="wrap">${this.txt}</span><span class="typewriter-cursor"></span>`;

    let delta = 120 - Math.random() * 60;
    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 400;
    }

    setTimeout(() => this.tick(), delta);
  }
}

// ==========================================================================
// 4. PROJECT RENDERER & INTERACTIVE FILTER ENGINE
// ==========================================================================
class ProjectsEngine {
  constructor() {
    this.gridContainer = document.getElementById('projects-grid');
    this.searchInput = document.getElementById('project-search');
    this.filterChips = document.querySelectorAll('.filter-chip');
    this.currentCategory = 'all';
    this.currentSearch = '';

    if (this.gridContainer) {
      this.render();
      this.bindEvents();
    }
  }

  bindEvents() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.currentSearch = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    this.filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentCategory = chip.dataset.category || 'all';
        this.render();
      });
    });
  }

  render() {
    const filtered = PROJECTS_DATA.filter(project => {
      const matchesCategory = (this.currentCategory === 'all') || (project.category === this.currentCategory);
      const searchHaystack = `${project.title} ${project.description} ${project.tags.join(' ')} ${project.categoryLabel}`.toLowerCase();
      const matchesSearch = !this.currentSearch || searchHaystack.includes(this.currentSearch);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      this.gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fas fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem; display: block;"></i>
          <p style="font-size: 1.1rem;">No matching projects found for "${this.currentSearch}".</p>
        </div>
      `;
      return;
    }

    this.gridContainer.innerHTML = filtered.map(project => {
      const isExtension = project.category === 'extensions' || !!project.storeUrl;
      return `
      <div class="project-card">
        <div>
          <div class="project-card-header">
            <span class="project-category-badge ${isExtension ? 'badge-extension' : ''}">${project.categoryLabel}</span>
            ${project.version ? `<span class="project-version-badge"><i class="fas fa-code-branch"></i> v${project.version}</span>` : ''}
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
        </div>
        <div>
          <div class="tag-container" style="margin-bottom: 1.25rem;">
            ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            ${isExtension ? `
              <a href="${project.storeUrl || project.github}" target="_blank" rel="noopener noreferrer" class="project-link project-link-store">
                <i class="fab fa-chrome"></i> Chrome Web Store <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
              </a>
            ` : `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                <i class="fab fa-github"></i> Repository <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
              </a>
            `}
          </div>
        </div>
      </div>
    `;
    }).join('');
  }
}

// ==========================================================================
// 5. CERTIFICATIONS RENDERER
// ==========================================================================
function renderCertifications() {
  const certContainer = document.getElementById('certifications-grid');
  if (!certContainer) return;

  certContainer.innerHTML = CERTIFICATIONS_DATA.map(cert => `
    <div class="cert-card ${cert.credlyId ? 'has-credly' : ''}">
      ${cert.credlyId ? `
        <div class="credly-badge-wrapper">
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="${cert.credlyId}" data-share-badge-host="https://www.credly.com"></div>
        </div>
      ` : `
        <div class="cert-icon">
          <i class="${getCertIcon(cert.category)}"></i>
        </div>
      `}
      <div class="cert-details">
        <h4>${cert.title}</h4>
        <div class="cert-provider">${cert.provider}</div>
        <div class="cert-date">${cert.date}</div>
        ${cert.credentialUrl ? `
          <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
            Verify Credential <i class="fas fa-external-link-alt"></i>
          </a>
        ` : (cert.credlyId ? `
          <a href="https://www.credly.com/badges/${cert.credlyId}/public_url" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
            Verify Credential <i class="fas fa-external-link-alt"></i>
          </a>
        ` : '')}
      </div>
    </div>
  `).join('');

  loadCredlyEmbedScript();
}

function loadCredlyEmbedScript() {
  const existing = document.getElementById('credly-embed-script');
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.id = 'credly-embed-script';
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
  document.body.appendChild(script);
}

function getCertIcon(cat) {
  switch (cat) {
    case 'aws': return 'fab fa-aws';
    case 'cloud': return 'fas fa-cloud';
    case 'ai': return 'fas fa-brain';
    case 'web': return 'fas fa-code';
    case 'qa': return 'fas fa-vial';
    default: return 'fas fa-certificate';
  }
}

// ==========================================================================
// 6. TIMELINE TAB SWITCHER
// ==========================================================================
function setupTimelineTabs() {
  const tabBtns = document.querySelectorAll('.timeline-tabs .tab-btn');
  const expTimeline = document.getElementById('timeline-experience');
  const eduTimeline = document.getElementById('timeline-education');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.target;
      if (target === 'experience') {
        expTimeline.style.display = 'block';
        eduTimeline.style.display = 'none';
      } else {
        expTimeline.style.display = 'none';
        eduTimeline.style.display = 'block';
      }
    });
  });
}

// ==========================================================================
// 7. COMMAND PALETTE (CTRL+K / CMD+K) & SEARCH MODAL
// ==========================================================================
class CommandPalette {
  constructor() {
    this.modal = document.getElementById('cmd-palette-modal');
    this.input = document.getElementById('cmd-palette-input');
    this.results = document.getElementById('cmd-palette-results');
    this.triggerBtn = document.getElementById('cmd-trigger-btn');
    this.closeBtn = document.getElementById('cmd-modal-close');

    if (this.modal) {
      this.bindEvents();
    }
  }

  bindEvents() {
    // Keyboard Shortcut
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      }
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });

    if (this.triggerBtn) {
      this.triggerBtn.addEventListener('click', () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    if (this.input) {
      this.input.addEventListener('input', (e) => this.search(e.target.value));
    }
  }

  toggle() {
    if (this.isOpen()) this.close();
    else this.open();
  }

  isOpen() {
    return this.modal.classList.contains('active');
  }

  open() {
    this.modal.classList.add('active');
    if (this.input) {
      this.input.value = '';
      this.input.focus();
      this.search('');
    }
  }

  close() {
    this.modal.classList.remove('active');
  }

  search(query) {
    const q = query.toLowerCase().trim();
    const items = [];

    // Navigation section links
    const sections = [
      { name: "Jump to Experience & Education", anchor: "#timeline", icon: "fa-briefcase" },
      { name: "Jump to Publication Spotlight", anchor: "#publication", icon: "fa-book" },
      { name: "Jump to Interactive Projects", anchor: "#projects", icon: "fa-code-branch" },
      { name: "Jump to Skills Matrix", anchor: "#skills", icon: "fa-layer-group" },
      { name: "Jump to Certifications Gallery", anchor: "#certifications", icon: "fa-certificate" }
    ];

    sections.forEach(s => {
      if (!q || s.name.toLowerCase().includes(q)) {
        items.push({ title: s.name, type: "Navigation", icon: s.icon, action: () => { window.location.hash = s.anchor; this.close(); } });
      }
    });

    // Projects
    PROJECTS_DATA.forEach(p => {
      if (!q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q))) {
        const isExt = p.category === 'extensions' || !!p.storeUrl;
        items.push({
          title: p.title,
          type: `Project (${p.categoryLabel})`,
          icon: isExt ? "fa-puzzle-piece" : "fa-laptop-code",
          action: () => { window.open(p.storeUrl || p.github, '_blank'); this.close(); }
        });
      }
    });

    // Certifications
    CERTIFICATIONS_DATA.forEach(c => {
      if (!q || c.title.toLowerCase().includes(q) || c.provider.toLowerCase().includes(q)) {
        items.push({
          title: `${c.title} - ${c.provider}`,
          type: "Certification",
          icon: "fa-award",
          action: () => { window.location.hash = "#certifications"; this.close(); }
        });
      }
    });

    if (items.length === 0) {
      this.results.innerHTML = `<li style="padding: 1rem; color: var(--text-muted); text-align: center;">No quick matches found for "${query}"</li>`;
      return;
    }

    this.results.innerHTML = items.slice(0, 8).map((item, idx) => `
      <li class="cmd-item" data-idx="${idx}">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <i class="fas ${item.icon}" style="color: var(--accent-cyan);"></i>
          <div>
            <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-primary);">${item.title}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${item.type}</div>
          </div>
        </div>
        <i class="fas fa-chevron-right" style="font-size: 0.75rem; color: var(--text-muted);"></i>
      </li>
    `).join('');

    // Attach click listeners to command items
    this.results.querySelectorAll('.cmd-item').forEach((el, idx) => {
      el.addEventListener('click', () => items[idx].action());
    });
  }
}

// ==========================================================================
// 8. BIBTEX MODAL & COPY UTILITIES
// ==========================================================================
const BIBTEX_CITATION = `@article{topcu2026asap,
  title={ASAP-ML: Antibiotic Susceptibility and Antibiogram Prediction With Machine Learning Methods},
  author={Topcu, Doruk and Akcapinar Sezer, Ebru},
  journal={IEEE Transactions on Computational Biology and Bioinformatics},
  volume={23},
  number={1},
  pages={65--74},
  year={2026},
  publisher={IEEE},
  doi={10.1109/TCBBIO.2025.3634090}
}`;

function setupBibtexModal() {
  const bibtexBtn = document.getElementById('btn-bibtex');
  const modal = document.getElementById('bibtex-modal');
  const closeBtn = document.getElementById('bibtex-modal-close');
  const copyBtn = document.getElementById('btn-copy-bibtex');
  const codeEl = document.getElementById('bibtex-code');

  if (codeEl) codeEl.textContent = BIBTEX_CITATION;

  if (bibtexBtn && modal) {
    bibtexBtn.addEventListener('click', () => modal.classList.add('active'));
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(BIBTEX_CITATION);
      showToast("BibTeX Citation copied to clipboard!");
    });
  }
}

function setupProfileImageModal() {
  const trigger = document.getElementById('profile-avatar-trigger');
  const imgEl = document.querySelector('.profile-avatar-img');
  const modal = document.getElementById('image-lightbox-modal');
  const closeBtn = document.getElementById('image-lightbox-close');

  const openModal = () => {
    if (modal) modal.classList.add('active');
  };

  if (trigger) trigger.addEventListener('click', openModal);
  if (imgEl) imgEl.addEventListener('click', openModal);

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('image-lightbox-content')) {
        modal.classList.remove('active');
      }
    });
  }
}

function setupCopyEmail() {
  // Contact section disabled
}

// Toast Notifications
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-emerald);"></i> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================================================
// 9. THEME TOGGLER (Dark / Light Mode)
// ==========================================================================
function setupThemeToggler() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('dt_theme') || 'dark';

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('dt_theme', next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} theme mode.`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle-btn i');
  if (!icon) return;
  if (theme === 'light') {
    icon.className = 'fas fa-moon';
  } else {
    icon.className = 'fas fa-sun';
  }
}

function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('mobile-active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
        const icon = menuBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
}

// ==========================================================================
// 10. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
// ==========================================================================
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// ==========================================================================
// 11. INITIALIZATION ON DOM CONTENT LOADED
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  new ConstellationCanvas();

  const typewriterEl = document.getElementById('typewriter-text');
  if (typewriterEl) {
    new TypewriterEffect(typewriterEl, [
      "Computer Engineering PhD Candidate @ Hacettepe",
      "Antimicrobial Resistance ML & Bioinformatics Researcher",
      "QA & Scrum Master",
      "AWS Certified Machine Learning Specialist"
    ], 2200);
  }

  new ProjectsEngine();
  renderCertifications();
  setupTimelineTabs();
  new CommandPalette();
  setupBibtexModal();
  setupProfileImageModal();
  setupMobileMenu();
  setupCopyEmail();
  setupThemeToggler();
  setupScrollSpy();
});
