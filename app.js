const DATA = {
  nama: "Kangsad01",
  githubs: ["Kangsad01", "sadteams"],
  role: ["WhatsApp Bot Developer", "Backend Engineer", "Automation Expert"],
  about: "Aku suka bikin bot dan tools yang bener-bener dipake orang. Fokus di automation, database, dan UI yang clean.",
  foto: "https://avatars.githubusercontent.com/Kangsad01",
  email: "kangsad01@gmail.com",
  websiteScreenshot: "https://avatars.githubusercontent.com/Kangsad01", // GANTI PAKE SS KAMU
  stats: [{number: 20, label: "Repositories"}, {number: 3, label: "Years Coding"}, {number: 100, label: "Bot Users"}],
  tech: [
    {name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    {name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"}
  ],
  projects: []
}

let particlesArray = [];
let mouse = {x: null, y: null, radius: 150};

function playClickSound(){ try{ const audio = new AudioContext(); const osc = audio.createOscillator(); osc.type = 'sine'; osc.frequency.setValueAtTime(800, audio.currentTime); osc.connect(audio.destination); osc.start(); osc.stop(audio.currentTime + 0.1); }catch(e){} }
document.addEventListener('click', playClickSound);

function themeToggle(){ 
  const btn = document.createElement('button'); 
  btn.className = 'theme-toggle magnetic-btn'; 
  btn.innerHTML = '🌙'; 
  document.querySelector('nav').appendChild(btn); 
  btn.onclick = function(){ 
    const html = document.documentElement; 
    if(html.getAttribute('data-theme') === 'dark'){ 
      html.setAttribute('data-theme','light'); 
      btn.innerHTML = '☀️'; 
    } else{ 
      html.setAttribute('data-theme','dark'); 
      btn.innerHTML = '🌙'; 
    } 
  } 
} // <-- INI KURUNG YANG KEMARIN KURANG

function mouseGlow(){ const glow = document.createElement('div'); glow.id='glow'; document.body.appendChild(glow); document.addEventListener('mousemove', e => { glow.style.left = (e.clientX - 200) + 'px'; glow.style.top = (e.clientY - 200) + 'px'; }) }
function customCursor(){ const cursor = document.createElement('div'); cursor.id='cursor'; document.body.appendChild(cursor); const dot = document.createElement('div'); dot.id='cursor-dot'; document.body.appendChild(dot); document.addEventListener('mousemove', e => { cursor.style.left = (e.clientX - 15) + 'px'; cursor.style.top = (e.clientY - 15) + 'px'; dot.style.left = (e.clientX - 4) + 'px'; dot.style.top = (e.clientY - 4) + 'px'; }) }
function scrollProgress(){ const progressBar = document.createElement('div'); progressBar.id='progress-bar'; document.body.appendChild(progressBar); window.addEventListener('scroll', () => { const winScroll = document.documentElement.scrollTop; const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; progressBar.style.width = (winScroll / height) * 100 + '%'; }) }
function backToTop(){ const btn = document.createElement('button'); btn.id='back-to-top'; btn.innerHTML='↑'; document.body.appendChild(btn); window.addEventListener('scroll', () => { if(window.scrollY > 500){ btn.classList.add('show') } else{ btn.classList.remove('show') } }); btn.onclick = () => { window.scrollTo({top:0, behavior:'smooth'}) }; }
function magneticButtons(){ document.querySelectorAll('.magnetic-btn').forEach(btn => { btn.addEventListener('mousemove', e => { const rect = btn.getBoundingClientRect(); const x = e.clientX - rect.left - rect.width/2; const y = e.clientY - rect.top - rect.height/2; btn.style.transform = `translate(${x*0.3}px, ${y*0.3}px)`; }); btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)' }); }) }
function terminalType(){ const lines = ['git clone https://github.com/Kangsad01','npm install && npm run dev','Building amazing things...','Portfolio loaded successfully ✓']; const el = document.getElementById('terminal-text'); if(!el) return; let i=0, j=0; function type(){ if(j < lines[i].length){ el.innerHTML += lines[i][j++]; setTimeout(type, 50); } else { el.innerHTML += '<br>'; i++; j=0; if(i < lines.length) setTimeout(type, 800); } } type(); }
function liquidBackground(){ const canvas = document.createElement('canvas'); canvas.id='liquid-bg'; document.body.appendChild(canvas); const ctx = canvas.getContext('2d'); canvas.width=window.innerWidth; canvas.height=window.innerHeight; let time = 0; function animate(){ time += 0.01; ctx.clearRect(0,0,canvas.width,canvas.height); const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width); gradient.addColorStop(0,'rgba(236,72,153,0.3)'); gradient.addColorStop(1,'rgba(10,0,15,1)'); ctx.fillStyle = gradient; ctx.fillRect(0,0,canvas.width,canvas.height); requestAnimationFrame(animate); } animate(); }
function particleBackground(){ 
  const canvas = document.createElement('canvas'); 
  canvas.id = 'particles'; 
  document.querySelector('.hero').appendChild(canvas); 
  const ctx = canvas.getContext('2d'); 
  canvas.width = window.innerWidth; 
  canvas.height = window.innerHeight; 
  
  for(let i = 0; i < 80; i++){ 
    particlesArray.push({ 
      x: Math.random() * canvas.width, 
      y: Math.random() * canvas.height, 
      size: Math.random() * 2 + 1, 
      speedX: Math.random() * 0.5 - 0.25, 
      speedY: Math.random() * 0.5 - 0.25 
    }) 
  } 
  
  window.addEventListener('mousemove', e => {mouse.x = e.x; mouse.y = e.y}); 
  
  function animate(){ 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    particlesArray.forEach(p => { 
      const dx = mouse.x - p.x; 
      const dy = mouse.y - p.y; 
      const dist = Math.sqrt(dx*dx + dy*dy); 
      if(dist < mouse.radius){ 
        p.x -= dx/dist * 2; 
        p.y -= dy/dist * 2; 
      } 
      p.x += p.speedX; 
      p.y += p.speedY; 
      if(p.x < 0 || p.x > canvas.width) p.speedX *= -1; 
      if(p.y < 0 || p.y > canvas.height) p.speedY *= -1; 
      ctx.beginPath(); 
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); 
      ctx.fillStyle = 'rgba(236,72,153,0.5)'; 
      ctx.fill(); 
    }); // <-- INI KURUNG TUTUP FOREACH YANG KEMARIN ILANG
    
    requestAnimationFrame(animate); 
  } 
  animate(); 
}
function typeWriter(el, texts){ let i = 0, j = 0, isDeleting = false; function type(){ const current = texts[i]; if(isDeleting){ el.innerHTML = current.substring(0, j-1) + '<span class="typing-cursor"></span>';j-- } else{ el.innerHTML = current.substring(0, j+1) + '<span class="typing-cursor"></span>';j++ } if(!isDeleting && j === current.length){ isDeleting = true; setTimeout(type, 2000) } else if(isDeleting && j === 0){ isDeleting = false; i = (i + 1) % texts.length; setTimeout(type, 500) } else{ setTimeout(type, isDeleting? 50 : 100) } } type() }
function scrollReveal(){ const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('revealed'); if(entry.target.querySelector('.counter')){ animateCounter(entry.target.querySelector('.counter')); } } }) }, {threshold: 0.1}); document.querySelectorAll('.section-title,.glass-card').forEach(el => { observer.observe(el); }); }
function animateCounter(el){ const target = +el.getAttribute('data-target'); let count = 0; const inc = target / 100; const update = () => { count += inc; if(count < target){ el.innerText = Math.ceil(count); requestAnimationFrame(update) } else{ el.innerText = target + '+' } }; update(); }

async function fetchAllProjects(){ 
  const projectsContainer = document.getElementById('projects-grid'); 
  if(!projectsContainer) return; 
  projectsContainer.innerHTML = '<p class="loading">Loading projects...</p>'; 
  let allRepos = []; 
  
  allRepos.push({
    title: "PORTFOLIO WEBSITE",
    desc: "Website portfolio ini. Dibuat dengan HTML, CSS, JS Vanilla + efek liquid + particle.",
    img: DATA.websiteScreenshot,
    link: "https://kangsad01.github.io"
  });

  for(const user of DATA.githubs){ 
    try{ 
      const res = await fetch('https://api.github.com/users/' + user + '/repos?sort=updated&per_page=11'); 
      const repos = await res.json(); 
      const mapped = repos.map(repo => ({ title: repo.name.toUpperCase(), desc: repo.description || "No description. Click to view code.", img: 'https://opengraph.githubassets.com/1/' + user + '/' + repo.name, link: repo.html_url })); 
      allRepos = allRepos.concat(mapped); 
    }catch(e){console.log(e)} 
  } 
  
  const projectHTML = allRepos.map((p,i) => `<div class="project-card glass-card" style="transition-delay:${i*0.05}s"><img src="${p.img}" class="project-img" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600'"><h3 style="font-size:1.5rem;margin-bottom:1rem">${p.title}</h3><p style="color:var(--muted);font-size:1rem;margin-bottom:1.5rem;min-height:60px">${p.desc}</p><a href="${p.link}" target="_blank" class="magnetic-btn">View Code</a></div>`).join(''); 
  projectsContainer.innerHTML = projectHTML; 
  magneticButtons(); 
  scrollReveal(); 
}

function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div></nav>`; }
function Hero(){ return `<section class="hero"><div class="container"><h1 class="hero-title glitch" data-text="${DATA.nama}">${DATA.nama}</h1><p class="hero-subtitle" id="role-text"></p><a href="#projects" class="magnetic-btn">View Projects</a></div></section>`; }
function Terminal(){ return `<section><div class="container"><div class="terminal glass-card"><div class="terminal-header"><div class="terminal-dot dot-red"></div><div class="terminal-dot dot-yellow"></div><div class="terminal-dot dot-green"></div></div><div class="terminal-body" id="terminal-text"></div></div></div></section>`; }
function About(){ const statsHTML = DATA.stats.map(s => `<div class="stat-box glass-card"><h3 class="counter" data-target="${s.number}">0</h3><p>${s.label}</p></div>`).join(''); return `<section id="about"><div class="container"><h2 class="section-title">About</h2><div class="about-grid"><img src="${DATA.foto}" class="about-img"><div><p style="font-size:1.3rem;line-height:1.8;color:var(--muted)">${DATA.about}</p><div class="stats-grid">${statsHTML}</div></div></div></div></section>`; }
function Projects(){ return `<section id="projects"><div class="container"><h2 class="section-title">All My Projects</h2><div class="project-grid" id="projects-grid"></div></div></section>`; }
function TechStack(){ const techHTML = DATA.tech.map((t,i) => `<div class="tech-card glass-card" style="transition-delay:${i*0.1}s"><img src="${t.icon}"><h3>${t.name}</h3></div>`).join(''); return `<section id="tech"><div class="container"><h2 class="section-title">Tech Stack</h2><div class="tech-grid">${techHTML}</div></section>`; }
function contactForm(){ return `<section id="contact"><div class="container"><h2 class="section-title">Contact Me</h2><div class="contact-grid"><div class="glass-card"><h3>Email Langsung</h3><p style="color:var(--muted);margin:1rem 0">${DATA.email}</p><a href="mailto:${DATA.email}" class="magnetic-btn">Kirim Email</a></div><form class="contact-form glass-card" onsubmit="alert('Pesan terkirim! Nanti aku balas via email');return false"><input type="text" placeholder="Nama Kamu" required><input type="email" placeholder="Email Kamu" required><textarea rows="5" placeholder="Pesan..." required></textarea><button type="submit" class="magnetic-btn">Kirim Pesan</button></form></div></div></section>` }
function Footer(){ return `<footer><div class="container"><div class="social-links"><a href="https://github.com/${DATA.githubs[0]}" target="_blank">GH</a><a href="https://github.com/${DATA.githubs[1]}" target="_blank">TEAM</a><a href="mailto:${DATA.email}">@</a></div><p style="color:var(--muted);position:relative;z-index:2">© 2026 ${DATA.nama}. Crafted with 💖 + Code</p></div></footer>`; }

function init(){ 
  liquidBackground();
  mouseGlow(); 
  customCursor(); 
  scrollProgress(); 
  backToTop(); 
  document.body.innerHTML = Navbar() + Hero() + Terminal() + About() + Projects() + TechStack() + contactForm() + Footer(); 
  themeToggle();
  particleBackground();
  typeWriter(document.getElementById('role-text'), DATA.role); 
  fetchAllProjects(); 
  magneticButtons();
  setTimeout(() => {scrollReveal(); terminalType();}, 500); 
}
document.addEventListener('DOMContentLoaded', init);
