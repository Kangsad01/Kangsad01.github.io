const DATA = {
  nama: "Kangsad01",
  github: "sadteams",
  role: ["WhatsApp Bot Developer", "Backend Engineer", "Automation Expert", "Creative Coder"],
  about: "Aku suka bikin bot dan tools yang bener-bener dipake orang. Fokus di automation, database, dan UI yang clean.",
  foto: "https://avatars.githubusercontent.com/u/000000?v=4",
  stats: [{number: 20, label: "Repositories"}, {number: 3, label: "Years Coding"}, {number: 100, label: "Bot Users"}],
  tech: [
    {name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    {name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript-original.svg"},
    {name: "WhatsApp API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp-original.svg"}
  ],
  projects: [
    {title: "WEABOT - WA BOT", desc: "Bot WhatsApp multi-fitur dengan menu interaktif, sticker, dan game. Dibangun pake Node.js + Baileys.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600", link: "https://github.com/sadteams/Weabot/tree/update"},
    {title: "DATABASE SYSTEM", desc: "Sistem database untuk menyimpan data user, premium, dan log bot. Support MongoDB & JSON.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600", link: "https://github.com/sadteams/database"},
    {title: "PORTFOLIO WEBSITE", desc: "Website portfolio personal dengan efek glassmorphism, particle cursor, dan animasi liquid.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600", link: "https://kangsad01.github.io/"}
  ]
}

function injectCSS(){
  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap');
  :root{--bg:#0a000f;--text:#fff;--muted:#aaa;--accent:#ec4899;--card:rgba(255,255,255,0.08);--border:rgba(236,72,153,0.3)}
  *{margin:0;padding:0;box-sizing:border-box} html{scroll-behavior:smooth;cursor:none}
  body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--text)}
  #cursor{position:fixed;width:30px;height:30px;border:2px solid var(--accent);border-radius:50%;pointer-events:none;z-index:10001;mix-blend-mode:difference;transition:transform.2s}
  #cursor-dot{position:fixed;width:8px;height:8px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:10001}
  #liquid-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2}
 .container{max-width:1400px;margin:0 auto;padding:0 5%}
  nav{position:fixed;top:0;width:100%;padding:2rem 5%;display:flex;justify-content:space-between;background:var(--card);backdrop-filter:blur(20px);z-index:1000;border-bottom:1px solid var(--border)}
 .logo{font-weight:900;font-size:2rem;background:linear-gradient(90deg,#ec4899,#f472b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
 .liquid-btn{padding:1rem 2.5rem;border-radius:100px;font-weight:900;background:linear-gradient(90deg,#ec4899,#f472b6);color:#fff;text-decoration:none;border:none;cursor:pointer;box-shadow:0 0 30px rgba(236,72,153,0.5);display:inline-block;margin-top:1rem}
 .liquid-btn:hover{transform:scale(1.05)}
  section{padding:15rem 5%;min-height:100vh}
 .section-title{font-size:5rem;font-weight:900;text-align:center;margin-bottom:6rem;background:linear-gradient(90deg,#ec4899,#f472b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
 .hero{text-align:center}
 .hero-title{font-size:clamp(5rem, 12vw, 10rem);font-weight:900;text-shadow:0 0 80px rgba(236,72,153,0.5)}
 .hero-subtitle{font-size:2rem;color:var(--muted);margin:3rem 0;min-height:60px}
 .typing-cursor{display:inline-block;width:4px;height:2rem;background:#ec4899;animation:blink 1s infinite;margin-left:5px;vertical-align:middle}
  @keyframes blink{50%{opacity:0}}
 .glass-card{background:var(--card);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:30px;padding:3rem;transition:.5s}
 .glass-card:hover{transform:translateY(-20px);box-shadow:0 20px 60px rgba(236,72,153,0.3)}
 .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
 .about-img{width:100%;border-radius:30px;box-shadow:0 0 50px rgba(236,72,153,0.4)}
 .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:3rem}
 .stat-box{text-align:center;padding:3rem}
 .stat-box h3{font-size:4rem;color:var(--accent);font-weight:900}
 .project-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:4rem}
 .project-img{width:100%;height:350px;object-fit:cover;border-radius:20px;margin-bottom:2rem}
 .tech-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:3rem}
 .tech-card{text-align:center}
 .tech-card img{width:80px;height:80px;filter:drop-shadow(0 0 20px var(--accent))}
  @media(max-width:768px){
  .about-grid,.project-grid,.tech-grid{grid-template-columns:1fr}
  .hero-title{font-size:3.5rem}
  .section-title{font-size:3rem}
  }
  `;
  document.head.appendChild(Object.assign(document.createElement('style'), {innerHTML: css}));
}

function customCursor(){
  const cursor = document.createElement('div'); cursor.id='cursor'; document.body.appendChild(cursor);
  const dot = document.createElement('div'); dot.id='cursor-dot'; document.body.appendChild(dot);
  document.addEventListener('mousemove', e=>{
    cursor.style.left = e.clientX - 15 + 'px';
    cursor.style.top = e.clientY - 15 + 'px';
    dot.style.left = e.clientX - 4 + 'px';
    dot.style.top = e.clientY - 4 + 'px';
  })
}

function liquidBackground(){
  const canvas = document.createElement('canvas'); canvas.id='liquid-bg'; document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d'); canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  let time = 0;
  function animate(){ 
    time += 0.01;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width);
    gradient.addColorStop(0,'rgba(236,72,153,0.3)');
    gradient.addColorStop(1,'rgba(10,0,15,1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate)
  } animate();
}

function typeWriter(el, texts){ 
  let i = 0, j = 0, isDeleting = false; 
  function type(){ 
    const current = texts[i]; 
    if(isDeleting){el.innerHTML = current.substring(0, j-1) + '<span class="typing-cursor"></span>';j--}
    else{el.innerHTML = current.substring(0, j+1) + '<span class="typing-cursor"></span>';j++} 
    if(!isDeleting && j === current.length){isDeleting = true; setTimeout(type, 2000)}
    else if(isDeleting && j === 0){isDeleting = false; i = (i + 1) % texts.length; setTimeout(type, 500)}
    else{setTimeout(type, isDeleting? 50 : 100)}
  } 
  type() 
}

function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div></nav>`; }
function Hero(){ return `<section class="hero"><div class="container"><h1 class="hero-title">${DATA.nama}</h1><p class="hero-subtitle" id="role-text"></p><a href="#projects" class="liquid-btn">View Projects</a></div></section>`; }
function About(){ 
  const statsHTML = DATA.stats.map(s => `<div class="stat-box glass-card"><h3>${s.number}+</h3><p>${s.label}</p></div>`).join('');
  return `<section id="about"><div class="container"><h2 class="section-title">About</h2><div class="about-grid"><img src="${DATA.foto}" class="about-img"><div><p style="font-size:1.3rem;line-height:1.8;color:var(--muted)">${DATA.about}</p><div class="stats-grid">${statsHTML}</div></div></div></div></section>`; 
}
function Projects(){ 
  const projectHTML = DATA.projects.map(p => `<div class="project-card glass-card"><img src="${p.img}" class="project-img"><h3 style="font-size:2rem;margin-bottom:1rem">${p.title}</h3><p style="color:var(--muted);font-size:1.1rem;margin-bottom:1.5rem">${p.desc}</p><a href="${p.link}" target="_blank" class="liquid-btn">View Code</a></div>`).join('');
  return `<section id="projects"><div class="container"><h2 class="section-title">My Work</h2><div class="project-grid">${projectHTML}</div></div></section>`; 
}
function TechStack(){ 
  const techHTML = DATA.tech.map(t => `<div class="tech-card glass-card"><img src="${t.icon}"><h3>${t.name}</h3></div>`).join('');
  return `<section id="tech"><div class="container"><h2 class="section-title">Tech Stack</h2><div class="tech-grid">${techHTML}</div></section>`; 
}

function init(){
  injectCSS();
  liquidBackground();
  customCursor();
  document.body.innerHTML = Navbar() + Hero() + About() + Projects() + TechStack();
  typeWriter(document.getElementById('role-text'), DATA.role);
}
document.addEventListener('DOMContentLoaded', init);
