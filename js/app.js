/**
 * DORUK TOPCU - PORTFOLIO & INTERACTIVE CV APPLICATION SCRIPT
 * High-performance interactive features: particle canvas background, typewriter effect,
 * project search/filtering, command palette (Ctrl+K), bibtex citation modal, theme switcher.
 */

// ==========================================================================
// 1. DATA REPOSITORIES (Full Master Document Content)
// ==========================================================================
const PROJECTS_DATA = [
  // ML / Bioinformatics
  {
    id: "asap-ml",
    title: "ASAP-ML: Antibiogram Prediction",
    category: "bioinformatics",
    categoryLabel: "ML & Bioinformatics",
    description: "Evaluated 10 Machine Learning algorithms on bacterial data from ARDB, CARD, and NCBI Pathogen Browser for antimicrobial resistance prediction. Published in IEEE TCBB (2026).",
    tags: ["Python", "Machine Learning", "Bioinformatics", "IEEE TCBB", "Scikit-Learn"],
    github: "https://github.com/doruktopcu/ASAP-Antibiotic-Susceptibility-and-Antibiogram-Prediction"
  },
  {
    id: "asap-llm",
    title: "ASAP-LLM Interpretation Engine",
    category: "bioinformatics",
    categoryLabel: "ML & Bioinformatics",
    description: "Integrates Large Language Models with ASAP-ML pipeline for improved antibiogram prediction accuracy and biological interpretability.",
    tags: ["LLM", "Python", "RAG", "Bioinformatics", "PyTorch"],
    github: "https://github.com/doruktopcu/ASAP-LLM"
  },
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
    id: "vadp",
    title: "VADP - Variant Analysis Pathogen Detection",
    category: "bioinformatics",
    categoryLabel: "ML & Bioinformatics",
    description: "Automated variant analysis framework for rapid identification and characterization of infectious pathogen strains.",
    tags: ["Variant Analysis", "Pathogen AI", "Bioinformatics", "Python"],
    github: "https://github.com/doruktopcu/VADP-Variant-Analysis-Detecting-Pathogens"
  },
  {
    id: "gilm",
    title: "GILM - Genetics Interpreter Language Model",
    category: "bioinformatics",
    categoryLabel: "ML & Bioinformatics",
    description: "Custom transformer architecture and language modeling applied to genomic sequences and genetics data interpretation.",
    tags: ["Genomics LLM", "Transformers", "Python", "PyTorch"],
    github: "https://github.com/doruktopcu/GILM-Genetics-Interpreter-Language-Model"
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
    description: "Computer vision lesion monitor predicting dangerous skin moles and tracking pigment changes over time.",
    tags: ["Computer Vision", "Health Tech", "Python", "TensorFlow"],
    github: "https://github.com/doruktopcu/Ben-Mole-Tracker"
  },

  // Computer Vision & Perception
  {
    id: "ccskde",
    title: "CCSKDE / Scene-SKDE Traffic Hazard Detection",
    category: "vision",
    categoryLabel: "Vision & Perception",
    description: "Context-Conditioned Sequential Keypoint Density Estimation for real-time traffic hazard and anomaly forecasting (CMP719).",
    tags: ["Computer Vision", "Traffic AI", "Keypoint Estimation", "PyTorch"],
    github: "https://github.com/doruktopcu/CCSKDE"
  },
  {
    id: "carla-iot",
    title: "CARLA Simulation IoT Telemetry",
    category: "vision",
    categoryLabel: "Vision & Perception",
    description: "CARLA autonomous driving simulator integrated with real-time IoT telemetry pipelines for cooperative vehicle safety.",
    tags: ["CARLA", "Autonomous Driving", "IoT", "Python", "C++"],
    github: "https://github.com/doruktopcu/CARLA_IOT"
  },
  {
    id: "road-satellite",
    title: "Road SatelLite Monitor",
    category: "vision",
    categoryLabel: "Vision & Perception",
    description: "Satellite and drone aerial imagery vehicle detection, traffic density estimation, and infrastructure tracking.",
    tags: ["Aerial Vision", "YOLO", "GIS", "Python", "OpenCV"],
    github: "https://github.com/doruktopcu/Road-SatelLite"
  },
  {
    id: "tsl-v-ai",
    title: "TSL-V-AI Sign Language Translator",
    category: "vision",
    categoryLabel: "Vision & Perception",
    description: "Real-time Turkish Sign Language recognition system translating live video streams into text and audio.",
    tags: ["Sign Language AI", "MediaPipe", "OpenCV", "Python"],
    github: "https://github.com/doruktopcu/TSL-V-AI"
  },
  {
    id: "lip-reader",
    title: "Visual Speech Lip Reader",
    category: "vision",
    categoryLabel: "Vision & Perception",
    description: "Neural visual speech recognition model transcribing spoken words strictly from mouth motion video sequences.",
    tags: ["Lip Reading", "Sequence Modeling", "Computer Vision", "PyTorch"],
    github: "https://github.com/doruktopcu/Lip-Reader"
  },

  // Web & Full-Stack
  {
    id: "snapshot-ai",
    title: "Snapshot AI Platform (Flatiron Software)",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Founding developer & QA Lead for enterprise full-stack platform ingesting source control & project management data into LLM RAG pipelines.",
    tags: ["NestJS", "GraphQL", "React", "TypeScript", "AWS", "LLM RAG"],
    github: "https://github.com/doruktopcu"
  },
  {
    id: "sahiplendir",
    title: "Sahiplendir Pet Adoption Platform",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Live public web application facilitating pet rehoming, adoption listings, and rescue organization outreach.",
    tags: ["Full-Stack", "JavaScript", "HTML/CSS", "Web App"],
    github: "https://github.com/doruktopcu/sahiplendir.com"
  },
  {
    id: "universal-clipboard",
    title: "Plugin Universal Clipboard",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Cross-device browser extension enabling seamless cloud clipboard synchronization with end-to-end encryption.",
    tags: ["Browser Extension", "JavaScript", "WebAPI"],
    github: "https://github.com/doruktopcu/Plugin-Universal-Clipboard"
  },
  {
    id: "digital-headshot",
    title: "Digital Headshot Contact Exchange",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "NFC and Bluetooth contact sharing application for instant digital business card exchange.",
    tags: ["WebBluetooth", "NFC", "JavaScript", "Mobile Web"],
    github: "https://github.com/doruktopcu/Digital-Headshot"
  },

  // IoT & Simulation
  {
    id: "iot-air-quality",
    title: "IoT Indoor Air Quality Simulator",
    category: "iot",
    categoryLabel: "IoT & Simulation",
    description: "Multi-room indoor air-quality sensor simulation tracking CO2, particulate matter, and humidity across 3 rooms, kitchen, and hallway.",
    tags: ["IoT", "Sensors", "MQTT", "Python", "Data Viz"],
    github: "https://github.com/doruktopcu/IoT-Project-1"
  },
  {
    id: "iot-smart-farm",
    title: "Smart Agriculture Sensor Array",
    category: "iot",
    categoryLabel: "IoT & Simulation",
    description: "Automated farm field sensor network monitoring soil moisture and pH with intelligent dynamic sprinkler actuation.",
    tags: ["Smart Farming", "IoT", "Telemetry", "Python"],
    github: "https://github.com/doruktopcu/IoT-Project-2"
  },
  {
    id: "dynamo-fitness",
    title: "Dynamo Fitness Power Tracking",
    category: "iot",
    categoryLabel: "IoT & Simulation",
    description: "Next-gen IoT telemetry system recording green kinetic energy generated by gym equipment users.",
    tags: ["NGIoT", "Telemetry", "Clean Tech", "Embedded Systems"],
    github: "https://github.com/doruktopcu/DynamoFitness-NGIoT-Project"
  },

  // Security & Games
  {
    id: "radaway",
    title: "RadAway Radiation Monitoring",
    category: "security",
    categoryLabel: "Security & Games",
    description: "Clinical radiation dosage sensor monitoring network with real-time exposure threshold alerts across clinic rooms.",
    tags: ["Radiation Safety", "IoT Alerting", "Python", "Sensors"],
    github: "https://github.com/doruktopcu/RadAway"
  },
  {
    id: "virtual-guard",
    title: "Virtual Guard Anomaly Detector",
    category: "security",
    categoryLabel: "Security & Games",
    description: "CCTV automated surveillance stream analyzer detecting perimeter breaches and workplace hazards.",
    tags: ["Computer Vision", "Surveillance AI", "YOLO", "Security"],
    github: "https://github.com/doruktopcu/Virtual-Guard"
  },
  {
    id: "whos-story",
    title: "Who's Story Narrative Engine",
    category: "games",
    categoryLabel: "Security & Games",
    description: "Interactive narrative game engine featuring dynamic perspective-switching characters and branching choices.",
    tags: ["Game Dev", "Interactive Story", "JavaScript", "HTML5 Canvas"],
    github: "https://github.com/doruktopcu/Who-s-Story"
  },
  {
    id: "personalized-npcs",
    title: "Adaptive Learning NPCs",
    category: "games",
    categoryLabel: "Security & Games",
    description: "Game AI architecture where non-player characters observe player tactical tendencies and adapt strategies dynamically.",
    tags: ["Game AI", "Reinforcement Learning", "Behavior Trees", "Python"],
    github: "https://github.com/doruktopcu/Personalized-NPCs"
  }
];

const CERTIFICATIONS_DATA = [
  {
    title: "Claude Certified Architect - Foundations",
    provider: "Anthropic",
    date: "Issued Jun 2026 · Expires Jun 2027",
    category: "ai"
  },
  {
    title: "Google Cloud Digital Leader",
    provider: "Google",
    date: "Issued May 2026 · Expires May 2029",
    category: "cloud"
  },
  {
    title: "AWS Certified Machine Learning – Specialty",
    provider: "Amazon Web Services (AWS)",
    date: "Issued Aug 2025",
    category: "aws"
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    provider: "Amazon Web Services (AWS)",
    date: "Issued Aug 2023 · ID: YMX5G031WM4EQ6C9",
    category: "aws"
  },
  {
    title: "AWS Partner: Generative AI Essentials",
    provider: "Amazon Web Services (AWS)",
    date: "Issued Apr 2025",
    category: "aws"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services (AWS)",
    date: "Issued Jun 2023 · ID: 4VCKYD1CV1V4QRKL",
    category: "aws"
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
    title: "API ve API Testi",
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
      const searchHaystack = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase();
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

    this.gridContainer.innerHTML = filtered.map(project => `
      <div class="project-card">
        <div>
          <span class="project-category-badge">${project.categoryLabel}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
        </div>
        <div>
          <div class="tag-container" style="margin-bottom: 1.25rem;">
            ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
              <i class="fab fa-github"></i> Repository <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ==========================================================================
// 5. CERTIFICATIONS RENDERER
// ==========================================================================
function renderCertifications() {
  const certContainer = document.getElementById('certifications-grid');
  if (!certContainer) return;

  certContainer.innerHTML = CERTIFICATIONS_DATA.map(cert => `
    <div class="cert-card">
      <div class="cert-icon">
        <i class="${getCertIcon(cert.category)}"></i>
      </div>
      <div class="cert-details">
        <h4>${cert.title}</h4>
        <div class="cert-provider">${cert.provider}</div>
        <div class="cert-date">${cert.date}</div>
      </div>
    </div>
  `).join('');
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
      { name: "Jump to Publication Spotlight", anchor: "#publication", icon: "fa-book" },
      { name: "Jump to Experience & Education", anchor: "#timeline", icon: "fa-briefcase" },
      { name: "Jump to Interactive Projects", anchor: "#projects", icon: "fa-code-branch" },
      { name: "Jump to Skills Matrix", anchor: "#skills", icon: "fa-layer-group" },
      { name: "Jump to Certifications Gallery", anchor: "#certifications", icon: "fa-certificate" },
      { name: "Jump to Contact", anchor: "#contact", icon: "fa-envelope" }
    ];

    sections.forEach(s => {
      if (!q || s.name.toLowerCase().includes(q)) {
        items.push({ title: s.name, type: "Navigation", icon: s.icon, action: () => { window.location.hash = s.anchor; this.close(); } });
      }
    });

    // Projects
    PROJECTS_DATA.forEach(p => {
      if (!q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q))) {
        items.push({
          title: p.title,
          type: `Project (${p.categoryLabel})`,
          icon: "fa-laptop-code",
          action: () => { window.open(p.github, '_blank'); this.close(); }
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

function setupCopyEmail() {
  const copyEmailBtn = document.getElementById('btn-copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText("doruktopcu5@gmail.com");
      showToast("Email address copied to clipboard!");
    });
  }
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
      "Full-Stack QA Lead & Scrum Master (Snapshot AI)",
      "AWS Certified Machine Learning Specialist"
    ], 2200);
  }

  new ProjectsEngine();
  renderCertifications();
  setupTimelineTabs();
  new CommandPalette();
  setupBibtexModal();
  setupCopyEmail();
  setupThemeToggler();
  setupScrollSpy();
});
