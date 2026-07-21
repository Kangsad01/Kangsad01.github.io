const DATA = {
  nama: "Kangsad01",
  githubs: ["Kangsad01", "sadteams"],
  role: ["WhatsApp Bot Developer", "Backend Engineer", "Automation Expert"],
  about: "Aku suka bikin bot dan tools yang bener-bener dipake orang. Fokus di automation, database, dan UI yang clean.",
  foto: "https://avatars.githubusercontent.com/Kangsad01",
  email: "kangsad01@gmail.com",
  stats: [{number: 20, label: "Repositories"}, {number: 3, label: "Years Coding"}, {number: 100, label: "Bot Users"}],
  tech: [
    {name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    {name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript-original.svg"},
    {name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"}
  ],
  projects: []
}

let particlesArray = [];
let mouse = {x: null, y: null, radius: 150};

function playClickSound(){
  const audio = new AudioContext();
  const osc = audio.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, audio.currentTime);
  osc.connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + 0.1);
}
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
}

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
      // MOUSE REPELLER
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < mouse.radius){
        p.x -= dx/dist * 2;
        p.y -= dy/dist * 2;
      }
      
      p.x += p.speedX; p.y += p.speedY;
      if(p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if(p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(236,72,153,0.5)';
      ctx.fill();
    })
    requestAnimationFrame(animate);
  }
  animate();
}

function contactForm(){
  return '<section id="contact"><div class="container"><h2 class="section-title">Contact Me</h2><div class="contact-grid"><div class="glass-card"><h3>Email Langsung</h3><p style="color:var(--muted);margin:1rem 0">' + DATA.email + '</p><a href="mailto:' + DATA.email + '" class="magnetic-btn">Kirim Email</a></div><form class="contact-form glass-card" onsubmit="alert(\'Pesan terkirim! Nanti aku balas via email\');return false"><input type="text" placeholder="Nama Kamu" required><input type="email" placeholder="Email Kamu" required><textarea rows="5" placeholder="Pesan..." required></textarea><button type="submit" class="magnetic-btn">Kirim Pesan</button></form></div></div></section>'
}

function Navbar(){ return '<nav><div class="logo">' + DATA.nama + '</div></nav>'; }
function Hero(){ return '<section class="hero"><div class="container"><h1 class="hero-title glitch" data-text="' + DATA.nama + '">' + DATA.nama + '</h1><p class="hero-subtitle" id="role-text"></p><a href="#projects" class="magnetic-btn">View Projects</a></div></section>'; }
function Terminal(){ return '<section><div class="container"><div class="terminal glass-card"><div class="terminal-header"><div class="terminal-dot dot-red"></div><div class="terminal-dot dot-yellow"></div><div class="terminal-dot dot-green"></div></div><div class="terminal-body" id="terminal-text"></div></div></div></section>'; }
function About(){ const statsHTML = DATA.stats.map(function(s){ return '<div class="stat-box glass-card"><h3 class="counter" data-target="' + s.number + '">0</h3><p>' + s.label + '</p></div>' }).join(''); return '<section id="about"><div class="container"><h2 class="section-title">About</h2><div class="about-grid"><img src="' + DATA.foto + '" class="about-img"><div><p style="font-size:1.3rem;line-height:1.8;color:var(--muted)">' + DATA.about + '</p><div class="stats-grid">' + statsHTML + '</div></div></div></div></section>'; }
function Projects(){ return '<section id="projects"><div class="container"><h2 class="section-title">All My Projects</h2><div class="project-grid" id="projects-grid"></div></div></section>'; }
function TechStack(){ const techHTML = DATA.tech.map(function(t,i){ return '<div class="tech-card glass-card" style="transition-delay:' + (i*0.1) + 's"><img src="' + t.icon + '"><h3>' + t.name + '</h3></div>' }).join(''); return '<section id="tech"><div class="container"><h2 class="section-title">Tech Stack</h2><div class="tech-grid">' + techHTML + '</div></section>'; }
function Footer(){ return '<footer><div class="container"><div class="social-links"><a href="https://github.com/' + DATA.githubs[0] + '" target="_blank">GH</a><a href="https://github.com/' + DATA.githubs[1] + '" target="_blank">TEAM</a><a href="mailto:' + DATA.email + '">@</a></div><p style="color:var(--muted);position:relative;z-index:2">© 2026 ' + DATA.nama + '. Crafted with 💖 + Code</p></div></footer>'; }

// FUNGSI LAIN TETAP SAMA: mouseGlow, magneticButtons, terminalType, fetchAllProjects, scrollProgress, scrollReveal, animateCounter, backToTop, customCursor, liquidBackground, typeWriter

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
  setTimeout(function(){scrollReveal(); terminalType();}, 500); 
}

document.addEventListener('DOMContentLoaded', init);
