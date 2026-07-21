const DATA = {
  nama: "Kangsad01",
  githubs: ["Kangsad01", "sadteams"],
  role: ["WhatsApp Bot Developer", "Backend Engineer", "Automation Expert"],
  about: "Aku suka bikin bot dan tools yang bener-bener dipake orang. Fokus di automation, database, dan UI yang clean.",
  foto: "https://avatars.githubusercontent.com/Kangsad01",
  email: "drakblue3@gmail.com",
  websiteScreenshot: "https://avatars.githubusercontent.com/Kangsad01",
  music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  formspree: "https://formspree.io/f/xwvgbaov",
  stats: [{number: 20, label: "Repositories"}, {number: 3, label: "Years Coding"}, {number: 100, label: "Bot Users"}],
  tech: [
    {name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    {name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"}
  ]
}

let particlesArray = [];
let mouse = {x: null, y: null, radius: 150};

function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}

function themeToggle() {
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.innerHTML = localStorage.getItem('theme') === 'light' ? '☀️' : '🌙';
  btn.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'dark';
    const newTheme = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    btn.innerHTML = newTheme === 'light' ? '☀️' : '🌙';
  });
  if (document.body) {
    document.body.appendChild(btn);
  }
}

function autoMusic() {
  const audio = new Audio(DATA.music);
  audio.loop = true;
  audio.volume = 0.08;
  document.body.addEventListener('click', () => {
    audio.play().catch(() => {});
  }, {once: true});
}

function mouseGlow() {
  const glow = document.createElement('div');
  glow.id = 'glow';
  glow.style.cssText = 'position:fixed;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(100,200,255,0.3),transparent);pointer-events:none;z-index:-1;';
  document.body.appendChild(glow);
  
  document.addEventListener('mousemove', (e) => {
    glow.style.left = (e.clientX - 250) + 'px';
    glow.style.top = (e.clientY - 250) + 'px';
  });
}

function scrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.id = 'progress-bar';
  progressBar.style.cssText = 'position:fixed;top:0;left:0;height:4px;background:linear-gradient(90deg,#00d4ff,#0099ff);z-index:9999;';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const winScroll = (document.body.scrollTop || document.documentElement.scrollTop);
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

function backToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.innerHTML = '↑';
  btn.style.cssText = 'position:fixed;bottom:20px;right:20px;width:50px;height:50px;border:none;border-radius:50%;background:#00d4ff;cursor:pointer;z-index:99;display:none;';
  document.body.appendChild(btn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}

function magneticButtons() {
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

function terminalType() {
  const lines = [
    'git clone https://github.com/Kangsad01',
    'npm install',
    'Server running on port 3000',
    'Portfolio loaded ✓'
  ];
  const el = document.getElementById('terminal-text');
  if (!el) return;
  
  let lineIndex = 0;
  function typeLine() {
    if (lineIndex >= lines.length) return;
    const line = document.createElement('div');
    el.appendChild(line);
    let charIndex = 0;
    
    function typeChar() {
      if (charIndex < lines[lineIndex].length) {
        line.textContent += lines[lineIndex][charIndex];
        charIndex++;
        setTimeout(typeChar, 50);
      } else {
        lineIndex++;
        setTimeout(typeLine, 500);
      }
    }
    typeChar();
  }
  typeLine();
}

function liquidBackground() {
  const canvas = document.createElement('canvas');
  canvas.id = 'liquid-bg';
  canvas.style.cssText = 'position:fixed;top:0;left:0;z-index:-2;';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Canvas context tidak tersedia');
    return;
  }
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let time = 0;
  function animate() {
    time += 0.01;
    ctx.fillStyle = 'rgba(255,255,255,0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = 'rgba(0,212,255,0.1)';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 50) {
        const y = canvas.height / 2 + Math.sin((x + time * 50) / 100 + i) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    
    requestAnimationFrame(animate);
  }
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

function particleBackground() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particles';
  canvas.style.cssText = 'position:fixed;top:0;left:0;z-index:-1;';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Particle canvas context tidak tersedia');
    return;
  }
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  
  particlesArray = [];
  for (let i = 0; i < 50; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 2
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,212,255,0.5)';
    
    particlesArray.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      
      ctx.fillRect(p.x, p.y, p.size, p.size);
      
      if (mouse.x !== null && mouse.y !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * 2;
          p.y += Math.sin(angle) * 2;
        }
      }
    });
    
    requestAnimationFrame(animate);
  }
  animate();
  
  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  
  document.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });
  
  window.addEventListener('resize', resize);
}

function typeWriter(el, texts) {
  let i = 0, j = 0, isDeleting = false;
  
  function type() {
    const current = texts[i];
    
    if (isDeleting) {
      el.innerHTML = current.substring(0, j - 1) + '<span style="border-right:3px solid #00d4ff;animation:blink 0.7s infinite;"></span>';
      j--;
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
      }
    } else {
      el.innerHTML = current.substring(0, j + 1) + '<span style="border-right:3px solid #00d4ff;animation:blink 0.7s infinite;"></span>';
      j++;
      if (j === current.length) {
        isDeleting = true;
      }
    }
    
    setTimeout(type, isDeleting ? 50 : 150);
  }
  
  type();
}

function scrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, i * 100);
      }
    });
  });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');
  
  // Validasi form
  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const message = form.querySelector('[name="message"]');
  
  if (!name || !name.value.trim()) {
    alert('Nama tidak boleh kosong');
    return;
  }
  
  if (!email || !email.value.trim() || !email.value.includes('@')) {
    alert('Email tidak valid');
    return;
  }
  
  if (!message || !message.value.trim()) {
    alert('Pesan tidak boleh kosong');
    return;
  }
  
  btn.innerHTML = 'Sending...';
  btn.disabled = true;
  
  try {
    const res = await fetch(DATA.formspree, {
      method: 'POST',
      body: new FormData(form),
      headers: {'Accept': 'application/json'}
    });
    
    if (res.ok) {
      alert('Message Sent! ✅');
      form.reset();
    } else {
      alert('Gagal kirim. Coba lagi');
    }
  } catch (err) {
    alert('Error: ' + (err.message || 'Terjadi kesalahan'));
  } finally {
    btn.innerHTML = 'Send Message';
    btn.disabled = false;
  }
}

async function fetchAllProjects() {
  const projectsContainer = document.getElementById('projects-grid');
  if (!projectsContainer) return;
  
  let allRepos = [
    {
      title: "PORTFOLIO WEBSITE",
      desc: "Website portfolio modern dengan animasi",
      link: "https://github.com/Kangsad01/Kangsad01.github.io"
    },
    {
      title: "WHATSAPP BOT",
      desc: "Bot WhatsApp dengan fitur automation",
      link: "https://github.com/Kangsad01"
    },
    {
      title: "AUTOMATION TOOLS",
      desc: "Tools untuk automation tasks",
      link: "https://github.com/Kangsad01"
    }
  ];
  
  projectsContainer.innerHTML = allRepos.map((project, i) => `
    <div class="project-card glass-card reveal" style="animation-delay:${i * 0.2}s">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <a href="${project.link}" target="_blank" class="magnetic-btn">View Project</a>
    </div>
  `).join('');
  
  magneticButtons();
}

function Navbar() {
  return `<nav><div class="logo">${DATA.nama}</div></nav>`;
}

function Hero() {
  return `
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">${DATA.nama}</h1>
        <p id="role-text" style="font-size:1.5rem;margin-bottom:2rem"></p>
        <a href="#projects" class="magnetic-btn">Lihat Project</a>
      </div>
    </section>
  `;
}

function Terminal() {
  return `
    <section>
      <div class="container">
        <div class="glass-card">
          <div style="display:flex;gap:8px;margin-bottom:1rem">
            <div style="width:12px;height:12px;border-radius:50%;background:#ff5f57"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#febc2e"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#28c940"></div>
          </div>
          <div id="terminal-text" style="font-family:monospace;color:#00d4ff;"></div>
        </div>
      </div>
    </section>
  `;
}

function About() {
  const statsHTML = DATA.stats.map(s => `
    <div class="glass-card" style="text-align:center">
      <h3 style="font-size:3rem;color:var(--accent)">${s.number}+</h3>
      <p style="font-weight:600">${s.label}</p>
    </div>
  `).join('');
  
  return `
    <section id="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <p>${DATA.about}</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem">
          ${statsHTML}
        </div>
      </div>
    </section>
  `;
}

function Projects() {
  return `
    <section id="projects">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="project-grid" id="projects-grid"></div>
      </div>
    </section>
  `;
}

function TechStack() {
  const techHTML = DATA.tech.map((t, i) => `
    <div class="tech-card glass-card" style="transition-delay:${i * 0.1}s">
      <img src="${t.icon}" alt="${t.name}">
      <h3>${t.name}</h3>
    </div>
  `).join('');
  
  return `
    <section id="tech">
      <div class="container">
        <h2 class="section-title">Tech Stack</h2>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem">
          ${techHTML}
        </div>
      </div>
    </section>
  `;
}

function contactForm() {
  return `
    <section id="contact">
      <div class="container">
        <h2 class="section-title">Contact</h2>
        <div class="contact-grid">
          <div>
            <div class="contact-item glass-card">
              <div class="contact-icon">📧</div>
              <h3>Email</h3>
              <p>${DATA.email}</p>
            </div>
          </div>
          <div>
            <form onsubmit="handleFormSubmit(event)" class="glass-card">
              <input type="text" name="name" placeholder="Nama" required style="width:100%;padding:10px;margin:10px 0;border:1px solid #00d4ff;border-radius:5px;background:rgba(0,212,255,0.1);color:white">
              <input type="email" name="email" placeholder="Email" required style="width:100%;padding:10px;margin:10px 0;border:1px solid #00d4ff;border-radius:5px;background:rgba(0,212,255,0.1);color:white">
              <textarea name="message" placeholder="Pesan" required style="width:100%;padding:10px;margin:10px 0;border:1px solid #00d4ff;border-radius:5px;background:rgba(0,212,255,0.1);color:white;min-height:100px"></textarea>
              <button type="submit" class="magnetic-btn" style="width:100%;padding:10px;margin-top:10px">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

function Footer() {
  return `
    <footer>
      <div class="social-links">
        <a href="https://github.com/${DATA.githubs[0]}" target="_blank">GitHub</a>
      </div>
      <p>© 2026 ${DATA.nama} | Built with Code</p>
    </footer>
  `;
}

function init() {
  initTheme();
  document.body.innerHTML = Navbar() + Hero() + Terminal() + About() + Projects() + TechStack() + contactForm() + Footer();
  
  liquidBackground();
  particleBackground();
  mouseGlow();
  scrollProgress();
  backToTop();
  themeToggle();
  autoMusic();
  scrollReveal();
  
  const roleEl = document.getElementById('role-text');
  if (roleEl) {
    typeWriter(roleEl, DATA.role);
  }
  
  terminalType();
  fetchAllProjects();
}

document.addEventListener('DOMContentLoaded', init);
