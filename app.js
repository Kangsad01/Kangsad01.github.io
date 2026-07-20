// ========== 1. DATA ==========
const DATA = {
  nama: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder", "Motion Artist"],
  about: "I craft digital experiences that feel alive. Merging code, design, and motion to build interfaces that people remember.",
  stats: [{number: 20, label: "Projects Done"}, {number: 3, label: "Years Experience"}, {number: 15, label: "Happy Clients"}],
  tech: [
    {name: "React", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react-original.svg"},
    {name: "Next.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
    {name: "Tailwind", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
    {name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript-original.svg"},
    {name: "TypeScript", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
    {name: "GSAP", level: 75, icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"},
    {name: "Framer", level: 70, icon: "https://cdn.worldvectorlogo.com/logos/framer-1.svg"},
    {name: "Figma", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}
  ],
  projects: [
    {title: "NEXUS DASHBOARD", desc: "Data visualization platform with real-time analytics", tags: ["React", "D3.js", "WebGL"], link: "https://github.com/Kangsad01", img: "https://telegra.ph/file/6ea54729b0ca7cf6a7246.jpg"},
    {title: "AURORA SAAS", desc: "Landing page with scroll-triggered animations", tags: ["Next.js", "Framer", "GSAP"], link: "https://github.com/Kangsad01", img: "https://telegra.ph/file/9fabb4dec8e1f858003ae.jpg"},
    {title: "ORBIT APP", desc: "Mobile-first web app with glassmorphism UI", tags: ["JavaScript", "CSS", "API"], link: "https://github.com/Kangsad01", img: "https://telegra.ph/file/dc04e52fac202eeea19d6.jpg"}
  ],
  blog: [
    {title: "The Art of Micro-Interactions", date: "20 Apr 2026", desc: "How small details create big emotional impact.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500", link: "#"},
    {title: "Building with GSAP & ScrollTrigger", date: "15 Apr 2026", desc: "Creating cinematic scroll experiences.", img: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=500", link: "#"},
    {title: "Glassmorphism in 2026", date: "10 Apr 2026", desc: "Modern UI trends that actually work.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500", link: "#"}
  ],
  testimonials: [
    {name: "Ahmad", job: "CEO @ Startup", text: "This portfolio hits different. The animations are insane.", avatar: "https://i.pravatar.cc/100?img=1"},
    {name: "Sinta", job: "Product Lead", text: "Best frontend portfolio I've seen this year. Hire this guy.", avatar: "https://i.pravatar.cc/100?img=5"}
  ],
  social: {github:"https://github.com/Kangsad01", linkedin:"#", instagram:"https://www.instagram.com/the.sad.boy01"}
}

let theme = localStorage.getItem('theme') || 'dark';

// ========== 2. CSS UNIK + GRAIN + GLITCH ==========
function injectCSS(){
  const css = `
  :root{--bg:#030303;--text:#f5f5f5;--muted:#a0a0a0;--card:rgba(17,17,17,0.5);--accent:#9333ea;--accent2:#06b6d4;--border:rgba(255,255,255,0.1)}
  [data-theme='light']{--bg:#f5f5f5;--text:#030303;--muted:#525252;--card:rgba(255,255,255,0.5);--border:rgba(0,0,0,0.1)}
  *{margin:0;padding:0;box-sizing:border-box;cursor:none}
  html{scroll-behavior:smooth}
  body{font-family:'Satoshi',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden}
  body::before{content:'';position:fixed;inset:0;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.03"/></svg>');z-index:-1;pointer-events:none}
  
  .progress-bar-top{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent2));z-index:10001;transform-origin:left;transform:scaleX(0)}
  .cursor{position:fixed;width:8px;height:8px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:9999;mix-blend-mode:difference}
  .cursor-follower{position:fixed;width:40px;height:40px;border:2px solid var(--accent);border-radius:50%;pointer-events:none;z-index:9998;transition:transform.3s ease-out, width.3s, height.3s}
  
  #app{opacity:0;transition:opacity.5s}
  #app.loaded{opacity:1}
  .loader{position:fixed;inset:0;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center;transition:opacity.5s}
  .loader.hidden{opacity:0;pointer-events:none}
  .glitch{position:relative;font-size:4rem;font-weight:900}
  .glitch::before,.glitch::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%}
  .glitch::before{animation:glitch-1 0.5s infinite; color:var(--accent); z-index:-1}
  .glitch::after{animation:glitch-2 0.5s infinite; color:var(--accent2); z-index:-2}
  @keyframes glitch-1{0%,100%{clip-path:inset(0 0 80% 0)}50%{clip-path:inset(10% 0 10% 0);transform:translate(-2px,2px)}}
  @keyframes glitch-2{0%,100%{clip-path:inset(80% 0 0 0)}50%{clip-path:inset(10% 0 10% 0);transform:translate(2px,-2px)}}
  
  nav{position:fixed;top:0;width:100%;padding:2rem 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(3,3,3,0.1);backdrop-filter:blur(20px);z-index:1000;border-bottom:1px solid var(--border);transition:.3s}
  nav.scrolled{padding:1rem 5%}
  .logo{font-weight:900;font-size:1.5rem;letter-spacing:2px}
  .nav-links{display:flex;gap:2rem;list-style:none}
  .nav-links a{color:var(--muted);text-decoration:none;transition:.3s;position:relative}
  .nav-links a:hover{color:var(--text)}
  
  section{padding:10rem 5%;min-height:100vh}
  .section-title{font-size:3rem;font-weight:900;text-align:center;margin-bottom:4rem}
  
  .liquid-btn{padding:1rem 2.5rem;border-radius:50px;text-decoration:none;font-weight:700;position:relative;overflow:hidden;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#fff;border:none;transition:.3s}
  .liquid-btn::before{content:'';position:absolute;top:0;left:-100%;width:200%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);transition:.5s}
  .liquid-btn:hover::before{left:100%}
  .liquid-btn:hover{transform:scale(1.05);box-shadow:0 0 30px rgba(147,51,234,0.5)}
  
  .hero{text-align:center;position:relative}
  .hero-title{font-size:5rem;font-weight:900;line-height:1}
  .gradient-text{background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  .hero-subtitle{font-size:1.3rem;color:var(--muted);margin:2rem 0;max-width:600px;margin-left:auto;margin-right:auto}
  
  .tilt-card{background:var(--card);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:20px;transition:transform.3s;transform-style:preserve-3d}
  .tilt-card:hover{transform:translateY(-10px) rotateX(5deg)}
  
  .project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}
  .project-card{overflow:hidden}
  .project-img{width:100%;height:250px;object-fit:cover;transition:.5s}
  .project-card:hover .project-img{transform:scale(1.1)}
  .project-content{padding:2rem}
  .project-tags{display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0}
  .tag{border:1px solid var(--accent);color:var(--accent);padding:.3rem.8rem;border-radius:20px;font-size:.8rem}
  
  .reveal{opacity:0;transform:translateY(50px);transition:all 1s cubic-bezier(0.16, 1, 0.3, 1)}
  .reveal.active{opacity:1;transform:translateY(0)}
  
  @media(max-width:768px){.nav-links{display:none}.hero-title{font-size:3rem}.cursor,.cursor-follower{display:none}}
  `;
  const style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
}

// ========== 3. COMPONENTS ==========
function ProgressBar(){ const bar = document.createElement('div'); bar.className='progress-bar-top'; document.body.appendChild(bar); window.addEventListener('scroll', ()=>{const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight); bar.style.transform = `scaleX(${scrolled})`}) }

function Cursor(){ const c=document.createElement('div');c.className='cursor';const f=document.createElement('div');f.className='cursor-follower';document.body.appendChild(c);document.body.appendChild(f);document.addEventListener('mousemove',e=>{c.style.left=e.clientX-4+'px';c.style.top=e.clientY-4+'px';setTimeout(()=>{f.style.left=e.clientX-20+'px';f.style.top=e.clientY-20+'px'},80)}); document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>{f.style.width='60px';f.style.height='60px'});el.addEventListener('mouseleave',()=>{f.style.width='40px';f.style.height='40px'})}) }

function Skeleton(){ return `<nav></nav><main><section id="hero"></section><section id="projects"></section><section id="tech"></section><section id="blog"></section><section id="contact"></section></main><footer></footer>`; }

function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div><ul class="nav-links"><li><a href="#hero">Home</a></li><li><a href="#projects">Work</a></li><li><a href="#tech">Skills</a></li><li><a href="#contact">Contact</a></li></ul><button class="liquid-btn" id="theme-toggle" style="padding:.5rem 1rem">Toggle</button></nav>`; }

function Hero(){ return `<section id="hero" class="hero"><h1 class="hero-title glitch" data-text="${DATA.nama}">${DATA.nama}</h1><p class="hero-subtitle" id="role-text"></p><p>${DATA.about}</p><div style="margin-top:2rem"><a href="#projects" class="liquid-btn">Explore Work</a></div></section>`; }

function Projects(){ return `<section id="projects" class="reveal"><h2 class="section-title">Selected Work</h2><div class="project-grid">${DATA.projects.map(p=>`<div class="project-card tilt-card"><img src="${p.img}" class="project-img"/><div class="project-content"><h3>${p.title}</h3><p>${p.desc}</p><div class="project-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div></div>`).join('')}</div></section>`; }

function TechStack(){ return `<section id="tech" class="reveal"><h2 class="section-title">Tech Arsenal</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:2rem">${DATA.tech.map(t=>`<div class="tilt-card" style="padding:2rem;text-align:center"><img src="${t.icon}" style="width:48px;height:48px;margin-bottom:1rem"/><h3>${t.name}</h3></div>`).join('')}</div></section>`; }

function Contact(){ return `<section id="contact" class="reveal"><h2 class="section-title">Let's Build Something</h2><form action="https://formspree.io/f/xwvgbaov" method="POST" style="max-width:600px;margin:0 auto;display:flex;flex-direction:column;gap:1rem"><input name="name" placeholder="Name" style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"><input name="email" type="email" placeholder="Email" style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"><textarea name="message" placeholder="Message" rows="5" style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"></textarea><button type="submit" class="liquid-btn">Send Message</button></form></section>`; }

function Footer(){ return `<footer style="text-align:center;padding:3rem"><p>© 2026 ${DATA.nama}. Crafted with obsession.</p></footer>`; }

// ========== 4. LOGIC ==========
function tiltEffect(){
  document.querySelectorAll('.tilt-card').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width/2;
      const centerY = rect.height/2;
      const rotateX = (y - centerY)/10;
      const rotateY = (centerX - x)/10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', ()=>{card.style.transform='perspective(1000px) rotateX(0) rotateY(0) scale(1)'});
  });
}

function runAllObservers(){
  const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('active');observer.unobserve(entry.target)}})},{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}

function init(){
  ProgressBar();
  Cursor();
  const app = document.getElementById('app');
  app.innerHTML = Navbar() + Hero() + Projects() + TechStack() + Contact() + Footer();
  lucide.createIcons();
  tiltEffect();
  runAllObservers();
  
  let i=0;
  const roleEl = document.getElementById('role-text');
  setInterval(()=>{roleEl.innerText = DATA.role[i]; i=(i+1)%DATA.role.length}, 2500);
  
  document.getElementById('theme-toggle').onclick = () => {
    theme = theme === 'dark'? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  
  window.addEventListener('scroll', ()=>{document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50)});
  
  setTimeout(()=>{document.getElementById('loader').classList.add('hidden');app.classList.add('loaded')}, 800);
}

// ========== 5. JALANIN ==========
injectCSS();
document.documentElement.setAttribute('data-theme', theme);
document.getElementById('app').innerHTML = `<div class="loader" id="loader"><div class="glitch" data-text="${DATA.nama}">${DATA.nama}</div></div><div id="pdf-content">${Skeleton()}</div>`;
init();
