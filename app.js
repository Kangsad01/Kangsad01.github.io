const DATA = {
  nama: "Kangsad01",
  github: "Kangsad01",
  role: ["Frontend Developer", "UI/UX Magician", "Animation Freak", "Pixel Perfectionist"],
  about: "Aku bukan cuma coding. Aku bikin emosi lewat animasi. Setiap hover, scroll, dan klik harus berasa.",
  foto: "https://media.discordapp.net/attachments/476921568291848205/681629039772958807/20200224_172700.jpg", // <-- GANTI PAKE FOTO KAMU
  stats: [{number: 15, label: "Projects"}, {number: 3, label: "Years Exp"}, {number: 100, label: "Satisfaction"}],
  tech: [
    {name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react-original.svg"},
    {name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg"},
    {name: "GSAP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/greensock/greensock-original.svg"},
    {name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"}
  ],
  projects: [
    {title: "PINK SAAS LANDING", desc: "Landing page SaaS dengan gradient pink + animasi Lottie.", img: "https://images.unsplash.com/photo-1558655146-364adaf7fcc9?w=600"},
    {title: "GLASSMORPH DASHBOARD", desc: "Dashboard dengan efek kaca + blur + particle.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"},
    {title: "3D INTERACTIVE HERO", desc: "Hero section dengan object 3D yang ngikutin mouse.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600"}
  ]
}

let theme = 'dark';
let particles = [];

function injectCSS(){
  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap');
  :root{--bg:#0a000f;--text:#fff;--muted:#aaa;--accent:#ec4899;--accent2:#f472b6;--card:rgba(255,255,255,0.08);--border:rgba(236,72,153,0.3)}
  *{margin:0;padding:0;box-sizing:border-box} html{scroll-behavior:smooth;cursor:none}
  body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden}
  
  #cursor{position:fixed;width:30px;height:30px;border:2px solid var(--accent);border-radius:50%;pointer-events:none;z-index:10001;transition:transform.2s;mix-blend-mode:difference}
  #cursor-dot{position:fixed;width:8px;height:8px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:10001}
 .particle{position:fixed;width:4px;height:4px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:9999}

  #liquid-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2}
.container{max-width:1400px;margin:0 auto;padding:0 5%}
  nav{position:fixed;top:0;width:100%;padding:2rem 5%;display:flex;justify-content:space-between;background:var(--card);backdrop-filter:blur(20px);z-index:1000;border-bottom:1px solid var(--border)}
.logo{font-weight:900;font-size:2rem;background:linear-gradient(90deg,#ec4899,#f472b6,#ec4899);background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shine 3s linear infinite}
  @keyframes shine{0%{background-position:0%}100%{background-position:200%}}
.liquid-btn{padding:1.2rem 3rem;border-radius:100px;font-weight:900;background:linear-gradient(90deg,#ec4899,#f472b6);color:#fff;border:none;cursor:pointer;box-shadow:0 0 30px rgba(236,72,153,0.5);transition:.3s}
.liquid-btn:hover{transform:scale(1.05);box-shadow:0 0 50px rgba(236,72,153,0.8)}

  section{padding:15rem 5%;min-height:100vh}
.section-title{font-size:5rem;font-weight:900;text-align:center;margin-bottom:6rem;background:linear-gradient(90deg,#ec4899,#f472b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}

.hero{text-align:center}
.hero-title{font-size:clamp(5rem, 12vw, 10rem);font-weight:900;line-height:0.9;text-shadow:0 0 80px rgba(236,72,153,0.5)}
.hero-subtitle{font-size:2rem;color:var(--muted);margin:3rem 0;min-height:60px}

.glass-card{background:var(--card);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:30px;padding:3rem;transition:.5s}
.glass-card:hover{transform:translateY(-20px);border-color:var(--accent);box-shadow:0 20px 60px rgba(236,72,153,0.3)}

.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
.about-img{width:100%;border-radius:30px;box-shadow:0 0 50px rgba(236,72,153,0.4)}
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:3rem}
.stat-box{text-align:center;padding:3rem}
.stat-box h3{font-size:4rem;color:var(--accent);font-weight:900}

.project-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:4rem}
.project-card{overflow:hidden}
.project-img{width:100%;height:350px;object-fit:cover;border-radius:20px;margin-bottom:2rem}

.tech-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:3rem}
.tech-card{text-align:center}
.tech-card img{width:80px;height:80px;margin-bottom:1.5rem;filter:drop-shadow(0 0 20px var(--accent))}
  
  @media(max-width:768px){
 .about-grid,.project-grid,.tech-grid{grid-template-columns:1fr}
 .hero-title{font-size:3.5rem}
 .section-title{font-size:3rem}
  }
  `;
  document.head.appendChild(Object.assign(document.createElement('style'), {innerHTML: css}));
}

// CUSTOM CURSOR + PARTICLE TRAIL
function customCursor(){
  const cursor = document.createElement('div'); cursor.id='cursor'; document.body.appendChild(cursor);
  const dot = document.createElement('div'); dot.id='cursor-dot'; document.body.appendChild(dot);
  
  document.addEventListener('mousemove', e=>{
    cursor.style.left = e.clientX - 15 + 'px';
    cursor.style.top = e.clientY - 15 + 'px';
    dot.style.left = e.clientX - 4 + 'px';
    dot.style.top = e.clientY - 4 + 'px';
    
    // Particle trail
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = e.clientX + 'px';
    p.style.top = e.clientY + 'px';
    document.body.appendChild(p);
    p.animate([{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(0)'}],{duration:800});
    setTimeout(()=>p.remove(),800);
  })
}

// ANIMATED LIQUID BACKGROUND
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
    
    for(let i=0;i<3;i++){
      ctx.beginPath();
      ctx.arc(canvas.width/2 + Math.sin(time+i)*200, canvas.height/2 + Math.cos(time+i)*200, 300, 0, Math.PI*2);
      ctx.fillStyle = `rgba(244,114,182,${0.1-i*0.02})`;
      ctx.fill();
    }
    requestAnimationFrame(animate)
  } animate();
}

async function fetchGithubStats(){
  try{
    const res = await fetch(`https://api.github.com/users/${DATA.github}`);
    const data = await res.json();
    if(document.getElementById('github-repos')){
      document.getElementById('github-repos').innerText = data.public_repos;
      document.getElementById('github-followers').innerText = data.followers;
    }
  }catch(e){}
}

function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div></nav>`; }
function Hero(){ return `<section class="hero"><div class="container"><h1 class="hero-title">${DATA.nama}</h1><p class="hero-subtitle" id="role-text"></p><a href="#projects" class="liquid-btn">See My Work</a></div></section>`; }
function About(){ 
  const statsHTML = DATA.stats.map(s => `<div class="stat-box glass-card"><h3>${s.number}+</h3><p>${s.label}</p></div>`).join('');
  return `<section><div class="container"><h2 class="section-title">About</h2><div class="about-grid"><img src="${DATA.foto}" class="about-img"><div><p style="font-size:1.3rem;line-height:1.8;color:var(--muted)">${DATA.about}</p><div class="stats-grid">${statsHTML}</div></div></div></div></section>`; 
}
function Projects(){ 
  const projectHTML = DATA.projects.map(p => `<div class="project-card glass-card"><img src="${p.img}" class="project-img"><h3 style="font-size:2rem;margin-bottom:1rem">${p.title}</h3><p style="color:var(--muted);font-size:1.1rem">${p.desc}</p></div>`).join('');
  return `<section id="projects"><div class="container"><h2 class="section-title">Work</h2><div class="project-grid">${projectHTML}</div></div></section>`; 
}
function TechStack(){ 
  const techHTML = DATA.tech.map(t => `<div class="tech-card glass-card"><img src="${t.icon}"><h3>${t.name}</h3></div>`).join('');
  return `<section><div class="container"><h2 class="section-title">Stack</h2><div class="tech-grid">${techHTML}</div></section>`; 
}

function typeWriter(el, texts){ let i=0,j=0; function type(){ el.innerHTML = texts[i].substring(0,j++) + '<span style="color:#ec4899">|</span>'; if(j>texts[i].length){i=(i+1)%texts.length;j=0} setTimeout(type,120) } type() }

function init(){
  injectCSS();
  liquidBackground();
  customCursor();
  document.body.innerHTML = Navbar() + Hero() + About() + Projects() + TechStack();
  
  typeWriter(document.getElementById('role-text'), DATA.role);
  fetchGithubStats();
}

document.addEventListener('DOMContentLoaded', init);
