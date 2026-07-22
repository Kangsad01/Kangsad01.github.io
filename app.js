const DATA = {
  nama: "Kangsad01",
  githubs: ["Kangsad01", "sadteams"],
  role: ["WhatsApp Bot Developer", "Backend Engineer", "Automation Expert"],
  about: "Aku suka bikin bot dan tools yang bener-bener dipake orang. Fokus di automation, database, dan UI yang clean.",
  foto: "https://avatars.githubusercontent.com/Kangsad01",
  email: "drakblue3@gmail.com",
  websiteScreenshot: "https://avatars.githubusercontent.com/Kangsad01",
  formspree: "https://formspree.io/f/xwvgbaov",
  stats: [{number: 20, label: "Repositories"}, {number: 3, label: "Years Coding"}, {number: 100, label: "Bot Users"}],
  tech: [
    {name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    {name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"}
  ]
}

let particlesArray = []; let mouse = {x: null, y: null, radius: 120};

function initTheme(){ const saved = localStorage.getItem('theme') || 'dark'; document.documentElement.setAttribute('data-theme', saved); }
function themeToggle(){ const btn = document.createElement('button'); btn.className = 'theme-toggle'; btn.innerHTML = localStorage.getItem('theme') === 'light'? '☀️' : '🌙'; document.body.appendChild(btn); btn.onclick = function(){ const html = document.documentElement; const newTheme = html.getAttribute('data-theme') === 'dark'? 'light' : 'dark'; html.setAttribute('data-theme', newTheme); localStorage.setItem('theme', newTheme); btn.innerHTML = newTheme === 'light'? '☀️' : '🌙'; } }
function scrollProgress(){ const progressBar = document.createElement('div'); progressBar.id='progress-bar'; document.body.appendChild(progressBar); window.addEventListener('scroll', () => { const winScroll = document.documentElement.scrollTop; const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; progressBar.style.width = (winScroll / height) * 100 + '%'; }) }
function backToTop(){ const btn = document.createElement('button'); btn.id='back-to-top'; btn.innerHTML='↑'; document.body.appendChild(btn); window.addEventListener('scroll', () => { if(window.scrollY > 500){ btn.classList.add('show') } else{ btn.classList.remove('show') } }); btn.onclick = () => { window.scrollTo({top:0, behavior:'smooth'}) }; }

function particleBackground(){
  const canvas = document.createElement('canvas'); canvas.id = 'particles'; document.body.appendChild(canvas); const ctx = canvas.getContext('2d');
  function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  for(let i = 0; i < 80; i++){ particlesArray.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 2.5 + 1, speedX: Math.random() * 0.5 - 0.25, speedY: Math.random() * 0.5 - 0.25 }) }
  window.addEventListener('mousemove', e => {mouse.x = e.x; mouse.y = e.y}); window.addEventListener('touchmove', e => {mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY});
  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); const color = getComputedStyle(document.documentElement).getPropertyValue('--text').trim();
    particlesArray.forEach(p => { const dx = mouse.x - p.x; const dy = mouse.y - p.y; const dist = Math.sqrt(dx*dx + dy*dy); if(dist < mouse.radius){ p.x -= dx/dist * 1.5; p.y -= dy/dist * 1.5; } p.x += p.speedX; p.y += p.speedY; if(p.x < 0 || p.x > canvas.width) p.speedX *= -1; if(p.y < 0 || p.y > canvas.height) p.speedY *= -1; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fillStyle = color + '66'; ctx.fill(); });
    requestAnimationFrame(animate);
  }
  animate();
}

function scrollReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('revealed'); } });
  }, {threshold: 0.1});
  document.querySelectorAll('.glass-card,.section-title').forEach(el => observer.observe(el));
}

function typeWriter(el, texts){
  if(!el) return; let i = 0, j = 0, isDeleting = false;
  function type(){ const current = texts[i]; el.innerHTML = current.substring(0, j) + '<span style="border-right:3px solid var(--text)"></span>'; if(!isDeleting && j < current.length){ j++; setTimeout(type, 80) } else if(isDeleting && j > 0){ j--; setTimeout(type, 40) } else if(!isDeleting && j === current.length){ isDeleting = true; setTimeout(type, 2000) } else { isDeleting = false; i = (i + 1) % texts.length; setTimeout(type, 500) } }
  type();
}

async function handleFormSubmit(e){
  e.preventDefault(); const form = e.target; const btn = form.querySelector('button'); btn.innerHTML = 'Sending...'; btn.disabled = true;
  try{ const res = await fetch(DATA.formspree, { method: 'POST', body: new FormData(form), headers: {'Accept': 'application/json'} }); if(res.ok){ alert('Message Sent! ✅'); form.reset(); } else { alert('Gagal kirim. Coba lagi'); }catch(err){ alert('Error: ' + err.message); }
  btn.innerHTML = 'Send Message'; btn.disabled = false;
}

async function fetchAllProjects(){
  const projectsContainer = document.getElementById('projects-grid'); if(!projectsContainer) return;
  let allRepos = [{ title: "PORTFOLIO WEBSITE", desc: "Website portfolio dengan tema maskulin dan animasi premium.", img: DATA.websiteScreenshot, link: "https://kangsad01.github.io" }];
  for(const user of DATA.githubs){
    try{ const res = await fetch('https://api.github.com/users/' + user + '/repos?sort=updated&per_page=10'); const repos = await res.json(); const mapped = repos.map(repo => ({ title: repo.name.toUpperCase(), desc: repo.description || "No description.", img: 'https://opengraph.githubassets.com/1/' + user + '/' + repo.name, link: repo.html_url })); allRepos = allRepos.concat(mapped); }catch(e){}
  }
  projectsContainer.innerHTML = allRepos.map((p,i) => `<div class="glass-card" style="transition-delay:${i*0.08}s"><img src="${p.img}" class="project-img" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600'"><h3>${p.title}</h3><p style="margin-bottom:1.5rem">${p.desc}</p><a href="${p.link}" target="_blank" class="magnetic-btn">View Code</a></div>`).join('');
}

function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div></nav>`; }
function Hero(){ return `<section class="hero"><div class="container"><h1 class="hero-title">${DATA.nama}</h1><p id="role-text" style="font-size:1.5rem;margin-bottom:2rem"></p><a href="#projects" class="magnetic-btn">View Projects</a></div></section>`; }
function About(){ const statsHTML = DATA.stats.map(s => `<div class="glass-card" style="text-align:center"><h3 style="font-size:3rem;color:var(--text)">${s.number}+</h3><p style="font-weight:600">${s.label}</p></div>`).join(''); return `<section id="about"><div class="container"><h2 class="section-title">About Me</h2><div class="about-grid"><img src="${DATA.foto}" class="about-img"><div><p style="font-size:1.2rem;line-height:1.8">${DATA.about}</p><div class="stats-grid" style="margin-top:2rem">${statsHTML}</div></div></div></div></section>`; }
function Projects(){ return `<section id="projects"><div class="container"><h2 class="section-title">Projects</h2><div class="project-grid" id="projects-grid"></div></div></section>`; }
function TechStack(){ const techHTML = DATA.tech.map((t,i) => `<div class="tech-card glass-card" style="transition-delay:${i*0.1}s"><img src="${t.icon}"><h3>${t.name}</h3></div>`).join(''); return `<section id="tech"><div class="container"><h2 class="section-title">Tech Stack</h2><div class="tech-grid">${techHTML}</div></div></section>`; }
function contactForm(){ return `<section id="contact"><div class="container"><h2 class="section-title">Contact</h2><div class="contact-grid"><div><div class="contact-item glass-card"><div class="contact-icon">📧</div><div><h3>Email</h3><p>${DATA.email}</p></div></div></div><form class="contact-form glass-card" onsubmit="handleFormSubmit(event)"><input type="text" name="name" placeholder="Your Name" required><input type="email" name="email" placeholder="Your Email" required><textarea name="message" rows="5" placeholder="Your Message..." required></textarea><button type="submit" class="magnetic-btn">Send Message</button></form></div></div></section>` }
function Footer(){ return `<footer><div class="social-links"><a href="https://github.com/${DATA.githubs[0]}" target="_blank">GitHub</a></div><p>© 2026 ${DATA.nama} | Built with Code</p></footer>`; }

function init(){
  initTheme();
  document.body.innerHTML = Navbar() + Hero() + About() + Projects() + TechStack() + contactForm() + Footer();
  particleBackground();
  scrollProgress();
  backToTop();
  themeToggle();
  scrollReveal(); // INI YANG BIKIN MUNCUL
  typeWriter(document.getElementById('role-text'), DATA.role);
  fetchAllProjects();
}
document.addEventListener('DOMContentLoaded', init);
