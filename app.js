// ========== 1. DATA KAMU ==========
const DATA = {
  nama: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder"],
  about: "Frontend Developer dari Surabaya yang suka bikin website interaktif dan animasi smooth. Fokus di React, Next.js, dan UI/UX yang memorable.",
  foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500", // GANTI PAKE FOTO KAMU
  stats: [{number: 8, label: "Projects Done"}, {number: 1, label: "Years Experience"}, {number: 5, label: "Happy Clients"}],
  tech: [
    {name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react-original.svg"},
    {name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
    {name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript-original.svg"},
    {name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
    {name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"},
    {name: "Framer", icon: "https://cdn.worldvectorlogo.com/logos/framer-1.svg"},
    {name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}
  ],
  projects: [
    {title: "PORTFOLIO V3", desc: "Portfolio personal dengan animasi GSAP, dark mode, dan responsive design.", tags: ["HTML", "CSS", "JavaScript", "GSAP"], link: "https://kangsad01.github.io", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600"},
    {title: "DASHBOARD ANALYTICS", desc: "Admin dashboard modern dengan chart real-time.", tags: ["React", "Tailwind", "Chart.js"], link: "https://github.com/Kangsad01", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"},
    {title: "SAAS LANDING PAGE", desc: "Landing page untuk produk SaaS dengan animasi scroll-trigger.", tags: ["Next.js", "Framer Motion"], link: "https://github.com/Kangsad01", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600"}
  ],
  blog: [], testimonials: [],
  social: {github:"https://github.com/Kangsad01", linkedin:"#", instagram:"https://www.instagram.com/the.sad.boy01"}
}

let theme = localStorage.getItem('theme') || 'dark';

// ========== 2. INJECT CSS ==========
function injectCSS(){
  const css = `
  :root{--bg:#030303;--text:#f5f5f5;--muted:#a0a0a0;--card:rgba(17,17,17,0.6);--accent:#9333ea;--accent2:#06b6d4;--border:rgba(255,255,255,0.1)}
  [data-theme='light']{--bg:#f5f5f5;--text:#030303;--muted:#525252;--card:rgba(255,255,255,0.6);--border:rgba(0,0,0,0.1)}
  *{margin:0;padding:0;box-sizing:border-box} html{scroll-behavior:smooth}
  body{font-family:'Satoshi',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden}
 .progress-bar-top{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent2));z-index:10001;transform-origin:left;transform:scaleX(0);transition:transform 0.1s}
 .cursor{position:fixed;width:8px;height:8px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:9999}
 .cursor-follower{position:fixed;width:40px;height:40px;border:2px solid var(--accent);border-radius:50%;pointer-events:none;z-index:9998;transition:transform.3s ease-out, width.3s, height.3s}
  #app{opacity:0;transition:opacity.5s} #app.loaded{opacity:1}
 .loader{position:fixed;inset:0;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center;font-size:3rem;font-weight:900;transition:opacity.5s}
 .loader.hidden{opacity:0;pointer-events:none} .glitch{position:relative}
 .glitch::before,.glitch::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%}
 .glitch::before{animation:glitch-1 0.5s infinite; color:var(--accent); z-index:-1}
 .glitch::after{animation:glitch-2 0.5s infinite; color:var(--accent2); z-index:-2}
  @keyframes glitch-1{0%,100%{clip-path:inset(0 0 80% 0)}50%{clip-path:inset(10% 0 10% 0);transform:translate(-2px,2px)}}
  @keyframes glitch-2{0%,100%{clip-path:inset(80% 0 0 0)}50%{clip-path:inset(10% 0 10% 0);transform:translate(2px,-2px)}}
  nav{position:fixed;top:0;width:100%;padding:2rem 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(3,3,3,0.1);backdrop-filter:blur(20px);z-index:1000;border-bottom:1px solid var(--border)}
 .logo{font-weight:900;font-size:1.5rem;letter-spacing:2px}
 .nav-links{display:flex;gap:2rem;list-style:none}
 .nav-links a{color:var(--muted);text-decoration:none}
 .nav-links a:hover{color:var(--text)}
  section{padding:10rem 5%;min-height:100vh}
 .section-title{font-size:3rem;font-weight:900;text-align:center;margin-bottom:4rem}
 .liquid-btn{padding:1rem 2.5rem;border-radius:50px;text-decoration:none;font-weight:700;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#fff;border:none;cursor:pointer;transition:all.3s}
 .liquid-btn:hover{transform:scale(1.05);box-shadow:0 0 30px rgba(147,51,234,0.5)}
 .hero{text-align:center}
 .hero-title{font-size:5rem;font-weight:900;line-height:1}
 .hero-subtitle{font-size:1.3rem;color:var(--muted);margin:2rem 0;max-width:600px;margin-left:auto;margin-right:auto}
 .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;max-width:1200px;margin:0 auto}
 .about-img{width:100%;border-radius:20px;border:2px solid var(--accent)}
 .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:3rem}
 .stat-box{text-align:center;padding:2rem;background:var(--card);border-radius:15px}
 .stat-box h3{font-size:2.5rem;color:var(--accent)}
 .tilt-card{background:var(--card);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:20px;transition:transform.3s}
 .project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}
 .project-card{overflow:hidden} .project-img{width:100%;height:250px;object-fit:cover;border-radius:15px 15px 0 0}
 .project-content{padding:2rem} .project-tags{display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0}
 .tag{border:1px solid var(--accent);color:var(--accent);padding:.3rem.8rem;border-radius:20px;font-size:.8rem}
 .tech-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:2rem}
 .tech-card{padding:2rem;text-align:center} .tech-card img{width:48px;height:48px;margin-bottom:1rem}
 .reveal{opacity:0;transform:translateY(50px);transition:all 1s} .reveal.active{opacity:1;transform:translateY(0)}
  @media(max-width:768px){.nav-links{display:none}.hero-title{font-size:3rem}.cursor,.cursor-follower{display:none}.about-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(Object.assign(document.createElement('style'), {innerHTML: css}));
}

// ========== 3. COMPONENTS ==========
function ProgressBar(){ const bar = document.createElement('div'); bar.className='progress-bar-top'; document.body.appendChild(bar); window.addEventListener('scroll', ()=>{const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight); bar.style.transform = `scaleX(${scrolled})`}) }
function Cursor(){ const c=document.createElement('div');c.className='cursor';const f=document.createElement('div');f.className='cursor-follower';document.body.appendChild(c);document.body.appendChild(f);document.addEventListener('mousemove',e=>{c.style.left=e.clientX-4+'px';c.style.top=e.clientY-4+'px';setTimeout(()=>{f.style.left=e.clientX-20+'px';f.style.top=e.clientY-20+'px'},80)}) }
function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div><ul class="nav-links"><li><a href="#hero">Home</a></li><li><a href="#about">About</a></li><li><a href="#projects">Work</a></li><li><a href="#tech">Skills</a></li><li><a href="#contact">Contact</a></li></ul><button class="liquid-btn" id="theme-toggle" style="padding:.5rem 1rem">Toggle</button></nav>`; }
function Hero(){ return `<section id="hero" class="hero"><h1 class="hero-title glitch" data-text="${DATA.nama}">${DATA.nama}</h1><p class="hero-subtitle" id="role-text"></p><p>${DATA.about}</p><div style="margin-top:2rem"><a href="#projects" class="liquid-btn">View My Work</a></div></section>`; }
function About(){ return `<section id="about" class="reveal"><h2 class="section-title">About Me</h2><div class="about-grid"><img src="${DATA.foto}" alt="Foto ${DATA.nama}" class="about-img tilt-card"><div><h3 style="font-size:2rem;margin-bottom:1rem">Halo, saya ${DATA.nama}</h3><p style="color:var(--muted);line-height:1.8">${DATA.about}</p><div class="stats-grid">${DATA.stats.map(s=>`<div class="stat-box"><h3>${s.number}+</h3><p>${s.label}</p></div>`).join('')}</div></div></div></section>`; }
function Projects(){ return `<section id="projects" class="reveal"><h2 class="section-title">Selected Work</h2><div class="project-grid">${DATA.projects.map(p=>`<div class="project-card tilt-card"><img src="${p.img}" class="project-img"/><div class="project-content"><h3>${p.title}</h3><p>${p.desc}</p><div class="project-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><a href="${p.link}" target="_blank" class="liquid-btn" style="padding:.7rem 1.5rem;font-size:.9rem;margin-top:1rem;display:inline-block">View Project</a></div></div>`).join('')}</div></section>`; }
function TechStack(){ return `<section id="tech" class="reveal"><h2 class="section-title">Tech Arsenal</h2><div class="tech-grid">${DATA.tech.map(t=>`<div class="tech-card tilt-card"><img src="${t.icon}"/><h3>${t.name}</h3></div>`).join('')}</div></section>`; }
function Contact(){ return `<section id="contact" class="reveal"><h2 class="section-title">Let's Build Something</h2><form action="https://formspree.io/f/xqkgyzab" method="POST" style="max-width:600px;margin:0 auto;display:flex;flex-direction:column;gap:1rem"><input name="name" placeholder="Name" required style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"><input name="email" type="email" placeholder="Email" required style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"><textarea name="message" placeholder="Message" rows="5" required style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"></textarea><button type="submit" class="liquid-btn">Send Message</button></form></section>`; }
function Footer(){ return `<footer style="text-align:center;padding:3rem;border-top:1px solid var(--border)"><p>© 2026 ${DATA.nama}. Crafted with obsession.</p></footer>`; }

// ========== 4. LOGIC FIXED ==========
function tiltEffect(){ document.querySelectorAll('.tilt-card').forEach(card=>{ card.addEventListener('mousemove', e=>{ const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top; const centerX = rect.width/2; const centerY = rect.height/2; const rotateX = (y - centerY)/10; const rotateY = (centerX - x)/10; card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`; }); card.addEventListener('mouseleave', ()=>{card.style.transform='perspective(1000px) rotateX(0) rotateY(0) scale(1)'}) }); }
function runObserver(){ const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('active')}})},{threshold:0.1}); document.querySelectorAll('.reveal').forEach(el=>observer.observe(el)); }

function init(){
  ProgressBar();
  Cursor();
  const app = document.getElementById('app');
  app.innerHTML = Navbar() + Hero() + About() + Projects() + TechStack() + Contact() + Footer();
  tiltEffect(); 
  runObserver();

  let i=0; const roleEl = document.getElementById('role-text'); 
  if(roleEl){ roleEl.innerText = DATA.role[0]; setInterval(()=>{i=(i+1)%DATA.role.length; roleEl.innerText = DATA.role[i]}, 2500); }

  const themeBtn = document.getElementById('theme-toggle');
  if(themeBtn){ themeBtn.onclick = () => { theme = theme === 'dark'? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); }; }

  // FIX ERROR: CEK DULU ADA GA ELEMENT NYA
  setTimeout(()=>{
    document.getElementById('loader')?.classList.add('hidden');
    document.getElementById('app')?.classList.add('loaded')
  }, 1200);
}

// ========== 5. START ==========
injectCSS();
document.documentElement.setAttribute('data-theme', theme);
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if(app){ app.innerHTML = `<div class="loader" id="loader"><div class="glitch" data-text="${DATA.nama}">${DATA.nama}</div></div>`; }
  init();
});
