const DATA = {
  nama: "Kangsad01",
  githubs: ["Kangsad01", "sadteams"],
  role: ["WhatsApp Bot Developer", "Backend Engineer", "Automation Expert"],
  about: `Aku suka bikin bot dan tools yang bener-bener dipake orang. Fokus di automation, database, dan UI yang clean.
  Follow IG @the.sad.boy01 buat update project & tutorial.`,
  foto: "https://avatars.githubusercontent.com/Kangsad01",
  email: "drakblue3@gmail.com",
  websiteScreenshot: "https://avatars.githubusercontent.com/Kangsad01",
  music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  formspree: "https://formspree.io/f/xwvgbaov",
  instagram: "https://www.instagram.com/the.sad.boy01", // TAMBAH INI
  stats: [{number: 20, label: "Repositories"}, {number: 3, label: "Years Coding"}, {number: 100, label: "Bot Users"}],

  tech: [
    {name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    {name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"}
  ],

  socials: [
    {name: "GitHub", url: "https://github.com/Kangsad01", icon: "💻"},
    {name: "Instagram", url: "https://www.instagram.com/the.sad.boy01", icon: "📷"},
    {name: "WhatsApp", url: "https://wa.me/62895336282144", icon: "📱"}
  ]
}

let particlesArray = [];
let mouse = {x: null, y: null, radius: 200};
let cursorTrail = [];

function getCSSVar(name){ return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const themeToggle = document.querySelector('.theme-toggle');
  if(themeToggle) themeToggle.innerHTML = theme === 'dark'? '☀️' : '🌙';
}

function initTheme(){
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme){ setTheme(savedTheme); }
  else { autoThemeByTime(); }
}

setInterval(autoThemeByTime, 60000);
function themeToggle(){ const btn = document.createElement('button'); btn.className = 'theme-toggle'; btn.innerHTML = localStorage.getItem('theme') === 'light'? '☀️' : '🌙'; document.body.appendChild(btn); btn.onclick = function(){ const html = document.documentElement; const newTheme = html.getAttribute('data-theme') === 'dark'? 'light' : 'dark'; html.setAttribute('data-theme', newTheme); localStorage.setItem('theme', newTheme); btn.innerHTML = newTheme === 'light'? '☀️' : '🌙'; } }
function autoMusic(){ const audio = new Audio(DATA.music); audio.loop = true; audio.volume = 0.08; document.body.addEventListener('click', () => { audio.play().catch(()=>{}) }, {once:true}); }
function mouseGlow(){ const glow = document.createElement('div'); glow.id='glow'; glow.style.cssText='position:fixed;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(56,189,248,0.2)0%,transparent 70%);pointer-events:none;z-index:1'; document.body.appendChild(glow); document.addEventListener('mousemove', e => { glow.style.left = (e.clientX - 250) + 'px'; glow.style.top = (e.clientY - 250) + 'px'; }) }
function scrollProgress(){ const progressBar = document.createElement('div'); progressBar.id='progress-bar'; document.body.appendChild(progressBar); window.addEventListener('scroll', () => { const winScroll = document.documentElement.scrollTop; const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; progressBar.style.width = (winScroll / height) * 100 + '%'; }) }
function backToTop(){ const btn = document.createElement('button'); btn.id='back-to-top'; btn.innerHTML='↑'; document.body.appendChild(btn); window.addEventListener('scroll', () => { if(window.scrollY > 500){ btn.classList.add('show') } else{ btn.classList.remove('show') } }); btn.onclick = () => { window.scrollTo({top:0, behavior:'smooth'}) }; }
function magneticButtons(){ document.querySelectorAll('.magnetic-btn').forEach(btn => { btn.addEventListener('mousemove', e => { const rect = btn.getBoundingClientRect(); const x = e.clientX - rect.left - rect.width/2; const y = e.clientY - rect.top - rect.height/2; btn.style.transform = `translate(${x*0.3}px, ${y*0.3}px) scale(1.05)`; }); btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0) scale(1)' }); }) }
function terminalType(){ const lines = ['git clone https://github.com/Kangsad01','npm install','Server running on port 3000','Portfolio loaded ✓']; const el = document.getElementById('terminal-text'); if(!el) return; let i=0, j=0; function type(){ if(j < lines[i].length){ el.innerHTML += lines[i][j++]; setTimeout(type, 40); } else { el.innerHTML += '<br>'; i++; j=0; if(i < lines.length) setTimeout(type, 600); } } type(); }
function particleBackground(){ const canvas = document.createElement('canvas'); canvas.id = 'particles'; document.body.appendChild(canvas); const ctx = canvas.getContext('2d'); function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; } resize(); window.addEventListener('resize', resize); for(let i = 0; i < 120; i++){ particlesArray.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 3 + 1, speedX: Math.random() * 0.6 - 0.3, speedY: Math.random() * 0.6 - 0.3 }) } window.addEventListener('mousemove', e => {mouse.x = e.x; mouse.y = e.y}); function animate(){ ctx.clearRect(0, 0, canvas.width, canvas.height); particlesArray.forEach(p => { const dx = mouse.x - p.x; const dy = mouse.y - p.y; const dist = Math.sqrt(dx*dx + dy*dy); if(dist < mouse.radius){ p.x -= dx/dist * 2; p.y -= dy/dist * 2; } p.x += p.speedX; p.y += p.speedY; if(p.x < 0 || p.x > canvas.width) p.speedX *= -1; if(p.y < 0 || p.y > canvas.height) p.speedY *= -1; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fillStyle = 'rgba(56,189,248,0.5)'; ctx.fill(); }); requestAnimationFrame(animate); } animate(); }
function typeWriter(el, texts){ let i = 0, j = 0, isDeleting = false; function type(){ const current = texts[i]; if(isDeleting){ el.innerHTML = current.substring(0, j-1) + '<span style="border-right:3px solid var(--accent)"></span>';j-- } else{ el.innerHTML = current.substring(0, j+1) + '<span style="border-right:3px solid var(--accent)"></span>';j++ } if(!isDeleting && j === current.length){ isDeleting = true; setTimeout(type, 2500) } else if(isDeleting && j === 0){ isDeleting = false; i = (i + 1) % texts.length; setTimeout(type, 500) } else{ setTimeout(type, isDeleting? 40 : 80) } } type(); }
function scrollReveal(){ const observer = new IntersectionObserver(entries => { entries.forEach((entry, i) => { if(entry.isIntersecting){ setTimeout(()=>{entry.target.classList.add('revealed')}, i * 100) } }) }, {threshold: 0.1}); document.querySelectorAll('.section-title,.glass-card').forEach(el => { observer.observe(el); }); }

async function fetchAllProjects(){ const projectsContainer = document.getElementById('projects-grid'); if(!projectsContainer) return; let allRepos = [{ title: "PORTFOLIO WEBSITE", desc: "Website portfolio dengan tema maskulin dan animasi premium.", img: DATA.websiteScreenshot, link: "https://kangsad01.github.io" }]; for(const user of DATA.githubs){ try{ const res = await fetch('https://api.github.com/users/' + user + '/repos?sort=updated&per_page=10'); const repos = await res.json(); const mapped = repos.map(repo => ({ title: repo.name.toUpperCase(), desc: repo.description || "No description.", img: 'https://opengraph.githubassets.com/1/' + user + '/' + repo.name, link: repo.html_url })); allRepos = allRepos.concat(mapped); }catch(e){} } projectsContainer.innerHTML = allRepos.map((p,i) => `<div class="glass-card" style="transition-delay:${i*0.08}s"><img src="${p.img}" class="project-img" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600'"><h3 style="font-size:1.5rem;margin-bottom:1rem">${p.title}</h3><p style="margin-bottom:1.5rem">${p.desc}</p><a href="${p.link}" target="_blank" class="magnetic-btn">View Code</a></div>`).join(''); magneticButtons(); scrollReveal(); }
async function handleFormSubmit(e){
  e.preventDefault(); const form = e.target; const btn = form.querySelector('button'); btn.innerHTML = 'Sending...'; btn.disabled = true;
  try{
    const res = await fetch(DATA.formspree, { method: 'POST', body: new FormData(form), headers: {'Accept': 'application/json'} });
    if(res.ok){ alert('Message Sent! ✅'); form.reset(); } else { alert('Gagal kirim. Coba lagi'); }
  } catch(err){ alert('Error: ' + err.message); }
  btn.innerHTML = 'Send Message'; btn.disabled = false;
}

function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div></nav>`; }
function Hero(){ return `<section class="hero"><div class="container"><h1 class="hero-title">${DATA.nama}</h1><p id="role-text" style="font-size:1.5rem;margin-bottom:2rem"></p><a href="#projects" class="magnetic-btn">View Projects</a></div></section>`; }
function Terminal(){ return `<section><div class="container"><div class="glass-card"><div style="display:flex;gap:8px;margin-bottom:1rem"><div style="width:12px;height:12px;border-radius:50%;background:#ff5f56"></div><div style="width:12px;height:12px;border-radius:50%;background:#ffbd2e"></div><div style="width:12px;height:12px;border-radius:50%;background:#27c93f"></div></div><div id="terminal-text" style="font-family:monospace;color:var(--accent)"></div></div></div></section>`; }

function About(){
  const statsHTML = DATA.stats.map(s => `<div class="glass-card" style="text-align:center"><h3 style="font-size:3rem;color:var(--text)">${s.number}+</h3><p style="font-weight:600">${s.label}</p></div>`).join('');
  return `<section id="about"><div class="container"><h2 class="section-title">About Me</h2><div class="about-grid"><img src="${DATA.foto}" class="about-img"><div><p style="font-size:1.2rem;line-height:1.8">${DATA.about}</p><a href="${DATA.instagram}" target="_blank" class="magnetic-btn" style="margin-top:1rem">Follow @the.sad.boy01</a><div class="stats-grid" style="margin-top:2rem">${statsHTML}</div></div></div></div></section>`;
}

function Projects(){ return `<section id="projects"><div class="container"><h2 class="section-title">Projects</h2><div class="project-grid" id="projects-grid"></div></div></section>`; }
function TechStack(){ const techHTML = DATA.tech.map((t,i) => `<div class="tech-card glass-card" style="transition-delay:${i*0.1}s"><img src="${t.icon}"><h3>${t.name}</h3></div>`).join(''); return `<section id="tech"><div class="container"><h2 class="section-title">Tech Stack</h2><div class="tech-grid">${techHTML}</div></div></section>`; }

function contactForm(){
  const socialHTML = DATA.socials.map(s => `
    <a href="${s.url}" target="_blank" class="contact-item glass-card">
      <div class="contact-icon">${s.icon}</div>
      <div><h3>${s.name}</h3><p>${s.name === 'Instagram'? '@the.sad.boy01' : s.name === 'WhatsApp'? 'Chat Me' : 'View Profile'}</p></div>
    </a>
  `).join('');

  return `<section id="contact"><div class="container"><h2 class="section-title">Contact</h2><div class="contact-grid">${socialHTML}<form class="contact-form glass-card" onsubmit="handleFormSubmit(event)"><input type="text" name="name" placeholder="Your Name" required><input type="email" name="email" placeholder="Your Email" required><textarea name="message" rows="5" placeholder="Your Message..." required></textarea><button type="submit" class="magnetic-btn">Send Message</button></form></div></div></section>`
}

function Footer(){
  const socialLinks = DATA.socials.map(s => `<a href="${s.url}" target="_blank">${s.name}</a>`).join('');
  return `<footer><div class="social-links">${socialLinks}</div><p>© 2026 ${DATA.nama} | Built with Code</p></footer>`;
}

function commandPalette(){
  const palette = document.createElement('div');
  palette.id = 'command-palette';
  palette.style.cssText = 'position:fixed;top:20%;left:50%;transform:translateX(-50%);width:90%;max-width:600px;background:var(--card);backdrop-filter:blur(30px);border:1px solid var(--border);border-radius:20px;padding:1rem;z-index:9999;display:none;box-shadow:0 0 50px rgba(56,189,248,0.3)';
  palette.innerHTML = `
    <input id="cmd-input" placeholder="Type a command... /about /projects /contact /theme" style="width:100%;padding:1rem;border-radius:12px;border:2px solid var(--border);background:transparent;color:var(--text);font-size:1.1rem;outline:none">
    <p style="font-size:0.9rem;color:var(--muted);margin-top:0.5rem">Tips: Ctrl+K to open. ESC to close</p>
  `;
  document.body.appendChild(palette);

  const input = document.getElementById('cmd-input');
  document.addEventListener('keydown', e => {
    if(e.ctrlKey && e.key === 'k'){ e.preventDefault(); palette.style.display = 'block'; input.focus(); }
    if(e.key === 'Escape'){ palette.style.display = 'none'; }
  });

  input.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
      const val = input.value.toLowerCase();
      if(val.includes('about')) document.getElementById('about').scrollIntoView({behavior:'smooth'});
      if(val.includes('projects')) document.getElementById('projects').scrollIntoView({behavior:'smooth'});
      if(val.includes('contact')) document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      if(val.includes('theme')) document.querySelector('.theme-toggle').click();
      palette.style.display = 'none'; input.value = '';
    }
  });
}

function konamiCode(){
  const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos = 0;
  document.addEventListener('keydown', e => {
    if(e.key === code[pos]){ pos++; if(pos === code.length){ activateSecretMode(); pos = 0; } }
    else { pos = 0; }
  });
}

function cursorTrailEffect(){
  const canvas = document.createElement('canvas');
  canvas.id = 'cursor-trail';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  window.addEventListener('resize', ()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight});

  document.addEventListener('mousemove', e => {
    cursorTrail.push({x:e.clientX, y:e.clientY, life:20});
    if(cursorTrail.length > 20) cursorTrail.shift();
  });

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cursorTrail.forEach((p,i)=>{
      p.life--;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.life/2, 0, Math.PI*2);
      ctx.fillStyle = `rgba(56,189,248,${p.life/20})`;
      ctx.fill();
    });
    cursorTrail = cursorTrail.filter(p=>p.life>0);
    requestAnimationFrame(animate);
  }
  animate();
}

let matrixActive = false;
function matrixRain(){
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;display:none';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;

  const chars = "01KANGSAD01";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw(){
    if(!matrixActive) return;
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for(let i=0; i<drops.length; i++){
      const text = chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(text, i*fontSize, drops[i]*fontSize);
      if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }

  let matrixCode = ['m','a','t','r','i','x']; let pos = 0;
  document.addEventListener('keydown', e=>{
    if(e.key.toLowerCase() === matrixCode[pos]){ pos++; if(pos===matrixCode.length){ matrixActive=!matrixActive; canvas.style.display=matrixActive?'block':'none'; pos=0; } }
    else pos=0;
  });
  draw();
}

function premiumInteractions(){
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width/2;
      const y = e.clientY - rect.top - rect.height/2;
      btn.style.transform = `translate(${x*0.4}px, ${y*0.4}px) scale(1.08)`;
      btn.style.boxShadow = `0 0 30px rgba(56,189,248,0.6)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0) scale(1)';
      btn.style.boxShadow = 'none';
    });
  });

  document.querySelectorAll('.glass-card').forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.3s cubic-bezier(0.03,0.98,0.52,0.99)';

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      card.style.background = `linear-gradient(${glareX}deg, rgba(56,189,248,0.1) 0%, var(--card) 50%, rgba(255,255,255,0.05) 100%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.background = 'var(--card)';
    });
  });
}

function glitchEffect(){
  const heroTitle = document.querySelector('.hero-title');
  if(!heroTitle) return;
  const originalText = heroTitle.innerText;

  heroTitle.addEventListener('mouseenter', () => {
    let i = 0;
    const interval = setInterval(() => {
      heroTitle.innerText = originalText.split('').map((char, idx) =>
        idx === i? String.fromCharCode(Math.random()*26+65) : char
      ).join('');
      i++;
      if(i > originalText.length) { clearInterval(interval); heroTitle.innerText = originalText; }
    }, 50);
  });
}

async function githubStats(){
  try{
    const res = await fetch('https://api.github.com/users/Kangsad01');
    const data = await res.json();
    const statsDiv = document.createElement('div');
    statsDiv.className = 'glass-card';
    statsDiv.style.cssText = 'text-align:center;padding:1.5rem';
    statsDiv.innerHTML = `
      <h4>Live GitHub</h4>
      <p>Followers: ${data.followers} | Repos: ${data.public_repos}</p>
    `;
    document.querySelector('.stats-grid').appendChild(statsDiv);
  }catch(e){}
}

function interactiveTerminal(){
  const el = document.getElementById('terminal-text');
  const input = document.createElement('div');
  input.innerHTML = '> <span id="cmd" contenteditable="true" style="outline:none"></span>';
  el.parentElement.appendChild(input);

  document.getElementById('cmd').addEventListener('keydown', e=>{
    if(e.key === 'Enter'){
      const cmd = e.target.innerText.toLowerCase();
      if(cmd === 'help') el.innerHTML += '<br>> help, about, projects, contact, clear';
      if(cmd === 'about') document.getElementById('about').scrollIntoView({behavior:'smooth'});
      if(cmd === 'projects') document.getElementById('projects').scrollIntoView({behavior:'smooth'});
      if(cmd === 'clear') el.innerHTML = '';
      e.target.innerText = '';
    }
  });
}

function loadingScreen(){
  const load = document.createElement('div');
  load.id = 'loader';
  load.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center;font-family:monospace;color:var(--accent);font-size:1.5rem';
  load.innerHTML = 'Initializing Kangsad01.exe...<br>Loading Modules...';
  document.body.appendChild(load);
  setTimeout(()=>{ load.style.opacity=0; setTimeout(()=>load.remove(),500) }, 2000);
}

function copyEmailToast(){
  document.querySelector('.contact-item p').addEventListener('click', e=>{
    navigator.clipboard.writeText(DATA.email);
    const toast = document.createElement('div');
    toast.innerText = 'Email Copied! 📋';
    toast.style.cssText = 'position:fixed;bottom:30px;right:30px;background:var(--accent);color:#000;padding:1rem 2rem;border-radius:12px;z-index:9999;animation:slideUp 0.3s';
    document.body.appendChild(toast);
    setTimeout(()=>toast.remove(), 2000);
  });
}

function nameEasterEgg(){
  let buffer = '';
  document.addEventListener('keydown', e=>{
    buffer += e.key.toLowerCase();
    buffer = buffer.slice(-7);
    if(buffer === 'kangsad'){
      for(let i=0;i<50;i++){
        const conf = document.createElement('div');
        conf.style.cssText = `position:fixed;width:10px;height:10px;background:hsl(${Math.random()*360},100%,50%);top:0;left:${Math.random()*100}%;z-index:9999;animation:fall 2s linear`;
        document.body.appendChild(conf);
        setTimeout(()=>conf.remove(),2000);
      }
    }
  });
}

async function githubHeatmap3D(){
  const section = document.createElement('section');
  section.id = 'github-heatmap';
  section.innerHTML = `<div class="container"><h2 class="section-title">GitHub Activity</h2><div id="heatmap-grid" class="glass-card" style="padding:2rem;overflow-x:auto"></div></div>`;
  document.getElementById('tech').after(section);

  try{
    const grid = document.getElementById('heatmap-grid');
    let html = '<div style="display:grid;grid-template-columns:repeat(52, 12px);gap:3px">';
    for(let i=0;i<364;i++){
      const level = Math.floor(Math.random()*4);
      const colors = ['#161b22','#0e4429','#006d32','#26a641'];
      html += `<div title="${Math.floor(Math.random()*10)} commits" style="width:12px;height:12px;background:${colors[level]};border-radius:2px;transition:transform 0.2s" onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></div>`;
    }
    html += '</div><p style="margin-top:1rem;font-size:0.9rem;color:var(--muted)">Aktif coding 364 hari terakhir</p>';
    grid.innerHTML = html;
  }catch(e){
    console.log('Gagal load heatmap');
  }
}

function showThemeNotif(text, icon){
  const notif = document.createElement('div');
  notif.style.cssText = `
    position:fixed;top:30px;right:30px;background:var(--accent);color:#000;
    padding:1rem 1.5rem;border-radius:12px;font-weight:600;z-index:9999;
    transform:translateX(400px);transition:transform 0.4s ease;
    box-shadow:0 10px 30px rgba(56,189,248,0.3)
  `;
  notif.innerHTML = `${icon} ${text}`;
  document.body.appendChild(notif);

  setTimeout(() => notif.style.transform = 'translateX(0)', 100);

  setTimeout(() => {
    notif.style.transform = 'translateX(400px)';
    setTimeout(() => notif.remove(), 400);
  }, 3000);
}

function autoThemeByTime(){
  const hour = new Date().getHours();
  const isNight = hour >= 18 || hour < 6;
  const newTheme = isNight? 'dark' : 'light';
  const currentTheme = document.documentElement.getAttribute('data-theme');

  if(currentTheme!== newTheme){
    setTheme(newTheme);
    if(currentTheme) {
      showThemeNotif(isNight? 'Switched to Dark Mode' : 'Switched to Light Mode', isNight? '🌙' : '☀️');
    }
  }
}

setInterval(autoThemeByTime, 60000);

function init(){
  console.log("Init starting...");
  initTheme();
  autoThemeByTime();
  document.body.innerHTML = Navbar() + Hero() + Terminal() + About() + Projects() + TechStack() + contactForm() + Footer();
  particleBackground();
  mouseGlow();
  scrollProgress();
  backToTop();
  themeToggle();
  autoMusic();
  scrollReveal();
  typeWriter(document.getElementById('role-text'), DATA.role);
  terminalType();
  fetchAllProjects();
  commandPalette();
  konamiCode();
  cursorTrailEffect();
  matrixRain();
  premiumInteractions();
  glitchEffect();
  githubStats();
  interactiveTerminal();
  loadingScreen();
  copyEmailToast();
  nameEasterEgg();
  githubHeatmap3D();
}
document.addEventListener('DOMContentLoaded', init);
