// ========== 1. DATA ==========
const DATA = {
  nama: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder"],
  about: "Frontend Developer dari Surabaya yang suka bikin website interaktif dan animasi smooth. Fokus di React, Next.js, dan UI/UX.",
  stats: [{number: 8, label: "Projects Done"}, {number: 1, label: "Years Experience"}, {number: 5, label: "Happy Clients"}],
  tech: [
    {name: "React", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react-original.svg"},
    {name: "Next.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
    {name: "Tailwind", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
    {name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript-original.svg"},
    {name: "GSAP", level: 75, icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"},
    {name: "Figma", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}
  ],
  projects: [
    {
      title: "PORTFOLIO V3", 
      desc: "Portfolio personal dengan animasi GSAP, dark mode, dan responsive design.", 
      tags: ["HTML", "CSS", "JavaScript", "GSAP"], 
      link: "https://kangsad01.github.io", 
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500"
    },
    {
      title: "PROJECT DASHBOARD", 
      desc: "Admin dashboard modern dengan chart real-time dan UI clean.", 
      tags: ["React", "Tailwind", "Chart.js"], 
      link: "https://github.com/Kangsad01", 
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
    },
    {
      title: "LANDING PAGE SAAS", 
      desc: "Landing page untuk produk SaaS dengan animasi scroll.", 
      tags: ["Next.js", "Framer"], 
      link: "https://github.com/Kangsad01", 
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500"
    }
  ],
  blog: [], testimonials: [],
  social: {github:"https://github.com/Kangsad01", instagram:"https://www.instagram.com/the.sad.boy01"}
}

let theme = localStorage.getItem('theme') || 'dark';

// ========== 2. CSS ==========
function injectCSS(){
  const css = `
  :root{--bg:#030303;--text:#f5f5f5;--muted:#a0a0a0;--card:#111;--accent:#9333ea;--accent2:#06b6d4;--border:rgba(255,255,255,0.1)}
  [data-theme='light']{--bg:#f5f5f5;--text:#030303;--muted:#525252;--card:#fff;--border:rgba(0,0,0,0.1)}
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Satoshi',sans-serif;background:var(--bg);color:var(--text)}
  #app{opacity:0;transition:opacity.5s}
  #app.loaded{opacity:1}
  .loader{position:fixed;inset:0;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:900}
  .loader.hidden{opacity:0;pointer-events:none}
  nav{padding:2rem 5%;display:flex;justify-content:space-between}
  section{padding:8rem 5%;min-height:100vh}
  .section-title{font-size:2.5rem;font-weight:900;text-align:center;margin-bottom:3rem}
  .project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}
  .project-card{background:var(--card);border-radius:20px;padding:1.5rem}
  .reveal{opacity:0;transform:translateY(30px);transition:all.8s}
  .reveal.active{opacity:1;transform:translateY(0)}
  `;
  document.head.appendChild(Object.assign(document.createElement('style'), {innerHTML: css}));
}

// ========== 3. RENDER ==========
function render(){
  const app = document.getElementById('app');
  if(!app){console.error("#app not found"); return}
  
  app.innerHTML = `
    <nav><div>${DATA.nama}</div></nav>
    <section id="hero"><h1>${DATA.nama}</h1><p>${DATA.about}</p></section>
    <section id="projects" class="reveal"><h2 class="section-title">Projects</h2>
      <div class="project-grid">
        ${DATA.projects.map(p=>`<div class="project-card"><h3>${p.title}</h3><p>${p.desc}</p></div>`).join('')}
      </div>
    </section>
    <section id="tech" class="reveal"><h2 class="section-title">Tech</h2></section>
  `;
}

// ========== 4. LOGIC ==========
function init(){
  try{
    render();
    // Observer
    const observer = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active')})},{threshold:0.1});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    
    // Theme
    document.documentElement.setAttribute('data-theme', theme);
    
    // Hide loader
    setTimeout(()=>{
      const loader = document.getElementById('loader');
      if(loader) loader.classList.add('hidden');
      document.getElementById('app').classList.add('loaded');
    }, 800);
    
  }catch(err){
    console.error("INIT ERROR:", err);
    document.getElementById('app').innerHTML = `<h1 style="color:red;padding:5rem">Error: ${err.message}</h1>`;
  }
}

// ========== 5. START ==========
injectCSS();
document.getElementById('app').innerHTML = `<div class="loader" id="loader">${DATA.nama}</div>`;
document.addEventListener('DOMContentLoaded', init);
