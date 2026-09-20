/* ============================================================
   Genshin Academic Homepage — JavaScript
   Starfield · Publications · Music Player · Gallery · Interactions
   ============================================================ */

// ==================== CONFIGURATION ====================
// Publication metadata synchronized with public ORCID 0009-0007-3191-1375 on 2026-09-19.
// Research projects are retained from the existing homepage and counted separately.
const MANUAL_PAPERS = [
    {
        id: '2606.10359',
        title: 'ReflectiChain: Epistemic Grounding in LLM-Driven World Models for Supply Chain Resilience',
        authors: ['Jia Luo'],
        year: 2026,
        date: '2026-06-10',
        abstract: 'Introduces REFLECTICHAIN, a framework bridging the epistemic gap between LLMs and RL for supply chain resilience. Features a Generative Supply Chain World Model (SC-WM) with 6D graph-latent space encoding and Double-Loop Learning that separates epistemic from aleatoric uncertainty. On the Semi-Sim benchmark (10-node semiconductor network), improves Rationale Consistency Score by 33.0% (p < 0.0001, d = 2.78) and maintains 82.3% operability under adversarial shocks.',
        venue: 'EIML@ICML 2026 Workshop (Poster)',
        isProject: false,
    },
    {
        id: null,
        title: 'ReflectiChain: Mitigating Semantic-Execution Drift in Long-Horizon LLM Agents via Retrospective Reflection and Double-Loop Policy Adaptation',
        authors: ['Jia Luo', 'Min Liu', 'Zixin Huang', 'Zikan Ke', 'Qing Wang'],
        year: 2026,
        date: '2026-08-04',
        doi: '10.3390/electronics15153452',
        abstract: 'LLM agents in long-horizon planning often exhibit Semantic-Execution Drift (SED), where executed actions progressively deviate from original language constraints. We model SED as a stochastic drift process: D(t+1) = αD(t) + ε(t) + βP(t), and show that policies with α < 1 induce semantic contraction. We propose ReflectiChain, integrating Retrospective Reflection, a Latent World Model, and Double-Loop Policy Adaptation. We introduce Sema-Sim, a multi-agent supply chain benchmark with 10 policy constraints, 6 adversarial perturbations, and 30-step horizons, plus the Semantic Fidelity Index (SFI). On DeepSeek-V3.2 across 7 reasoning strategies, ReflectiChain achieves SFI of 88.7 and stable contraction (α = 0.823). Validated on Qwen3.5-122B and Qwen2.5-72B.',
        venue: 'Electronics, 2026 · Journal article',
        isProject: false,
    },
    {
        id: '2607.26903',
        title: 'From Passive Video to Editable Experience: Physically Grounded Experience Synthesis for Embodied Intelligence',
        authors: ['Jia Luo'],
        year: 2026,
        abstract: 'Converts passive human demonstration videos into robot-learnable editable experiences via graph-based intermediate representations (Task Graph → Affordance & Constraint Graphs → Robot Planning Graph), a hierarchical affordance latent space for object-agnostic generalization, and a closed-loop physics verifier ensuring kinematic and collision validity.',
        venue: 'Research Project · arXiv:2607.26903 [cs.AI] · Under submission to AAAI 2027',
        isProject: true,
    },
    {
        id: '2607.27994',
        title: 'SKIMIX: Multi-Agent Harness-Time Scaling with Skill Mixture for Dynamic Harness Engineering',
        authors: ['Jia Luo'],
        year: 2026,
        abstract: 'Proposes a multi-agent collaboration framework where agents with distinct skill portfolios refine outputs iteratively, combining embedding-based skill retrieval, submodular anti-dilution routing, and adaptive skill evolution. Retains 92% peak performance at 500 agents vs. 67% without this mechanism.',
        venue: 'Research Project · arXiv:2607.27994 [cs.AI] · Under submission to AAAI 2027',
        isProject: true,
    },
    {
        id: null,
        title: 'A Multi-Strategy Ensemble-Enhanced BERT-LSTM Model and its Application to Sentiment Analysis',
        authors: ['Jiachen Gao', 'Jia Luo', 'Mingjia Yang'],
        year: 2025,
        date: '2025-09-27',
        doi: '10.1109/iciscae66104.2025.11307278',
        venue: '2025 IEEE 8th International Conference on Information Systems and Computer Aided Education (ICISCAE)',
        isProject: false,
    },
    {
        id: null,
        title: "Forecasting Growth and Exploring Trends in China's Pet Food Industry: A Multidimensional Analysis",
        authors: ['Jia Luo'],
        year: 2025,
        date: '2025-03-17',
        doi: '10.54097/pb6mdj82',
        abstract: 'Analyzes market demand, growth trends, and international policy influences in China’s pet food industry using exponential smoothing, multivariate regression, ARIMA models, and PEST analysis.',
        venue: 'Highlights in Business, Economics and Management, 2025 · Journal article',
        isProject: false,
    },
];

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    initStarfield();
    initNavbar();
    initMobileNav();
    initSmoothScroll();
    initScrollReveal();
    initMusicPlayer();
    loadPapers();
    initPaperFilter();
});

// ==================== STARFIELD ====================
function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let stars = [];
    let shootingStars = [];
    const STAR_COUNT = 250;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', () => { resize(); stars = createStars(); });

    function createStars() {
        const arr = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            arr.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.6 + 0.3,
                opacity: Math.random(),
                speed: Math.random() * 0.015 + 0.003,
                phase: Math.random() * Math.PI * 2,
                driftX: (Math.random() - 0.5) * 0.2,
                driftY: (Math.random() - 0.5) * 0.2,
                bright: Math.random() < 0.12,
            });
        }
        return arr;
    }

    function spawnShootingStar() {
        shootingStars.push({
            x: Math.random() * canvas.width * 0.8,
            y: Math.random() * canvas.height * 0.4,
            len: Math.random() * 100 + 50,
            speed: Math.random() * 7 + 5,
            opacity: 1,
            angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        });
    }

    stars = createStars();
    setInterval(spawnShootingStar, 5000);
    spawnShootingStar();

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Stars
        stars.forEach(s => {
            s.phase += s.speed;
            s.opacity = 0.25 + Math.sin(s.phase) * 0.5 + 0.25;
            s.x += s.driftX * 0.005;
            s.y += s.driftY * 0.005;
            if (s.x < 0) s.x = canvas.width;
            if (s.x > canvas.width) s.x = 0;
            if (s.y < 0) s.y = canvas.height;
            if (s.y > canvas.height) s.y = 0;

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

            if (s.bright) {
                ctx.fillStyle = `rgba(180, 200, 240, ${s.opacity * 0.9})`;
                ctx.fill();
                // Cross glow for bright stars
                ctx.strokeStyle = `rgba(180, 200, 240, ${s.opacity * 0.2})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(s.x - s.r * 4, s.y); ctx.lineTo(s.x + s.r * 4, s.y);
                ctx.moveTo(s.x, s.y - s.r * 4); ctx.lineTo(s.x, s.y + s.r * 4);
                ctx.stroke();
            } else {
                ctx.fillStyle = `rgba(200, 200, 220, ${s.opacity})`;
                ctx.fill();
            }
        });

        // Shooting stars
        shootingStars = shootingStars.filter(ss => {
            ss.x += Math.cos(ss.angle) * ss.speed;
            ss.y += Math.sin(ss.angle) * ss.speed;
            ss.opacity -= 0.012;
            if (ss.opacity <= 0) return false;

            const grad = ctx.createLinearGradient(
                ss.x, ss.y,
                ss.x - Math.cos(ss.angle) * ss.len,
                ss.y - Math.sin(ss.angle) * ss.len
            );
            grad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.beginPath();
            ctx.moveTo(ss.x, ss.y);
            ctx.lineTo(ss.x - Math.cos(ss.angle) * ss.len, ss.y - Math.sin(ss.angle) * ss.len);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            return true;
        });

        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
}

// ==================== NAVBAR ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
}

function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => links.classList.remove('open'));
    });
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !links.contains(e.target)) {
            links.classList.remove('open');
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.genshin-card, .paper-card, .contact-card, .gallery-card, .wallpaper-item')
        .forEach(el => observer.observe(el));
}

// ==================== MUSIC PLAYER ====================
function initMusicPlayer() {
    const toggleBtn = document.getElementById('music-toggle');
    const infoPanel = document.getElementById('music-info');
    const playBtn = document.getElementById('music-play');
    const volumeSlider = document.getElementById('music-volume');

    if (!toggleBtn || !infoPanel) return;

    let isPlaying = false;
    let player = null;

    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('yt-player', {
            events: {
                'onReady': () => {
                    player.setVolume(30);
                    player.playVideo();
                    isPlaying = true;
                    toggleBtn.classList.add('playing');
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                },
                'onStateChange': (event) => {
                    if (event.data === YT.PlayerState.ENDED) {
                        player.playVideo(); // Loop
                    }
                }
            }
        });
    };

    // Toggle info panel
    toggleBtn.addEventListener('click', () => {
        infoPanel.classList.toggle('open');
    });

    // Play/Pause
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (!player) return;
            if (isPlaying) {
                player.pauseVideo();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                toggleBtn.classList.remove('playing');
            } else {
                player.playVideo();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                toggleBtn.classList.add('playing');
            }
            isPlaying = !isPlaying;
        });
    }

    // Volume
    if (volumeSlider) {
        volumeSlider.addEventListener('input', () => {
            if (player) player.setVolume(volumeSlider.value);
        });
    }

    // Close panel on outside click
    document.addEventListener('click', (e) => {
        if (!toggleBtn.contains(e.target) && !infoPanel.contains(e.target)) {
            infoPanel.classList.remove('open');
        }
    });
}

// ==================== PUBLICATIONS ====================
function loadPapers() {
    // Use the curated records so same-name arXiv authors cannot alter this profile.
    const papers = MANUAL_PAPERS.map(paper => ({
        ...paper,
        pdfUrl: paper.id ? `https://arxiv.org/pdf/${paper.id}` : null,
        arxivUrl: paper.id ? `https://arxiv.org/abs/${paper.id}` : null,
        doiUrl: paper.doi ? `https://doi.org/${paper.doi}` : null,
    }));
    papers.sort((a, b) => (b.date || `${b.year}-01-01`).localeCompare(a.date || `${a.year}-01-01`)
        || a.title.localeCompare(b.title));

    const loading = document.getElementById('pub-loading');
    if (loading) loading.style.display = 'none';
    const countEl = document.getElementById('paper-count');
    if (countEl) countEl.textContent = papers.filter(p => !p.isProject).length;
    const projectCountEl = document.getElementById('project-count');
    if (projectCountEl) projectCountEl.textContent = papers.filter(p => p.isProject).length;

    window._allPapers = papers;
    applyFilters();
}

function renderPapers(papers) {
    const list = document.getElementById('pub-list');
    if (!list) return;

    const empty = document.getElementById('pub-empty');
    if (empty) {
        empty.style.display = papers.length ? 'none' : 'block';
        empty.querySelector('p').textContent = 'No matching publications or projects.';
    }

    list.innerHTML = papers.map((paper, idx) => {
        const authorStr = paper.authors.map(a => {
            const lower = a.toLowerCase();
            const isMe = (lower.includes('jia') && lower.includes('luo')) || lower.includes('j.luo');
            return isMe ? `<span class="me"><u>${a}</u></span>` : a;
        }).join(', ');

        const hasArxiv = Boolean(paper.arxivUrl);
        const isProject = paper.isProject;

        return `
        <div class="paper-card fade-in-up${isProject ? ' project-card' : ''}" style="animation-delay:${idx * 0.08}s" data-year="${paper.year}">
            <span class="paper-year">${paper.year}</span>
            ${isProject ? '<span class="paper-badge project-badge"><i class="fas fa-flask"></i> Research Project</span>' : ''}
            <h3 class="paper-title">${paper.title}</h3>
            <p class="paper-authors">${authorStr}</p>
            ${paper.venue ? `<span class="paper-venue"><i class="fas ${isProject ? 'fa-diagram-project' : 'fa-trophy'}"></i> ${paper.venue}</span>` : ''}
            ${paper.abstract ? `<p class="paper-abstract">${paper.abstract}</p>` : ''}
            <div class="paper-links">
                ${hasArxiv ? `
                <a href="${paper.pdfUrl}" target="_blank" rel="noopener noreferrer" class="paper-link paper-link-pdf">
                    <i class="fas fa-file-pdf"></i> PDF
                </a>
                <a href="${paper.arxivUrl}" target="_blank" rel="noopener noreferrer" class="paper-link paper-link-arxiv">
                    <i class="fas fa-external-link-alt"></i> arXiv
                </a>` : ''}
                ${paper.doiUrl ? `
                <a href="${paper.doiUrl}" target="_blank" rel="noopener noreferrer" class="paper-link paper-link-arxiv">
                    <i class="fas fa-external-link-alt"></i> DOI
                </a>` : ''}
                ${paper.abstract ? `
                <button class="paper-link paper-link-abs" onclick="toggleAbstract(this)" aria-label="Toggle abstract">
                    <i class="fas fa-chevron-down"></i> Abstract
                </button>` : ''}
            </div>
        </div>`;
    }).join('');
}

function toggleAbstract(btn) {
    const card = btn.closest('.paper-card');
    card.classList.toggle('expanded');
    const icon = btn.querySelector('i');
    if (card.classList.contains('expanded')) {
        btn.innerHTML = '<i class="fas fa-chevron-up"></i> Hide';
    } else {
        btn.innerHTML = '<i class="fas fa-chevron-down"></i> Abstract';
    }
}

// ==================== PAPER FILTER ====================
function initPaperFilter() {
    const search = document.getElementById('pub-search');
    const filterBtns = document.querySelectorAll('.f-btn');

    if (search) search.addEventListener('input', applyFilters);
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilters();
        });
    });
}

function applyFilters() {
    const papers = window._allPapers || [];
    const term = (document.getElementById('pub-search')?.value || '').toLowerCase();
    const activeFilter = document.querySelector('.f-btn.active')?.dataset?.filter || 'all';

    let filtered = papers;

    if (activeFilter === 'publications') {
        filtered = filtered.filter(p => !p.isProject);
    } else if (activeFilter === 'projects') {
        filtered = filtered.filter(p => p.isProject);
    } else if (activeFilter !== 'all') {
        // Year filter
        filtered = filtered.filter(p => p.year === parseInt(activeFilter));
    }

    if (term) {
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(term) ||
            p.authors.some(a => a.toLowerCase().includes(term)) ||
            (p.abstract && p.abstract.toLowerCase().includes(term))
        );
    }
    renderPapers(filtered);
}

// ==================== KEYBOARD EASTER EGG ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'g' && !e.target.closest('input, textarea')) {
        document.body.style.transition = 'filter 0.5s ease';
        document.body.style.filter = 'brightness(1.25) saturate(1.15)';
        setTimeout(() => {
            document.body.style.filter = '';
            setTimeout(() => { document.body.style.transition = ''; }, 500);
        }, 350);
    }
});
