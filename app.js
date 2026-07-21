const DATA = {
  nama: "Kangsad01",
  github: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder"],
  about: "Frontend Developer dari Surabaya yang suka bikin website interaktif dan animasi smooth.",
  foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
  stats: [{number: 8, label: "Projects Done"}, {number: 1, label: "Years Experience"}, {number: 5, label: "Happy Clients"}],
  tech: [
    {name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react-original.svg"},
    {name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
    {name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript-original.svg"}
  ],
  projects: [
    {title: "PORTFOLIO V3", desc: "Portfolio personal dengan animasi GSAP.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600"},
    {title: "DASHBOARD ANALYTICS", desc: "Admin dashboard modern.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"}
  ]
}

let theme = localStorage.getItem('theme') || 'dark';
let audioCtx;

function injectCSS(){
  const css = `
  :root{--bg:#030303;--text:#f5f5f5;--muted:#a0a0a0;--accent:#9333ea;--accent2:#06b6d4;--card:rgba(17,17,17,0.6);--border:rgba(255,255,255,0.1)}
  [data-theme='light']{--bg:#f5f5f5;--text:#030303;--muted:#525252;--card:rgba(255,255,255,0.6);--border:rgba(0,0,0,0.1)}
  *{margin:0;padding:0;box-sizing:border-box} html{scroll-behavior:smooth}
  body{font-family:sans-serif;background:var(--bg);color:var(--text)}
  #liquid-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;filter:blur(100px);opacity:0.4}
  #spotlight{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none}
.container{max-width:1200px;margin:0 auto;padding:0 5%}
  nav{position:fixed;top:0;width:100%;padding:2rem 5%;display:flex;justify-content:space-between;background:rgba(0,0,0,0.2);backdrop-filter:blur(20px);z-index:1000}
.liquid-btn{padding:1rem 2.5rem;border-radius:50px;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#fff;border:none;cursor:pointer}
  section{padding:10rem 5%;min-height:100vh}
.section-title{font-size:3rem;font-weight:900;text-align:center;margin-bottom:4rem}
.hero{text-align:center}.hero-title{font-size:4rem;font-weight:900}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem}
.project-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem}
.project-card{background:var(--card);border-radius:20px;overflow:hidden}
.project-img{width:100%;height:200px;object-fit:cover}
.project-content{padding:2rem}
.tech-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem}
.tech-card{padding:2rem;text-align:center;background:var(--card);border-radius:20px}
.github-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
.github-card{padding:2rem;text-align:center;background:var(--card);border-radius:15px}
  `;
  document.head.appendChild(Object.assign(document.createElement('style'), {innerHTML: css}));
}

function liquidBackground(){
  const canvas = document.createElement('canvas'); canvas.id='liquid-bg'; document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d'); canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  let blobs = [{x:300,y:300,r:250},{x:800,y:400,r:300}];
  function animate(){ ctx.clearRect(0,0,canvas.width,canvas.height);
    const gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    gradient.addColorStop(0,'#9333ea'); gradient.addColorStop(1,'#06b6d4');
    blobs.forEach(b=>{ b.x += Math.sin(Date.now()/1000+b.r)*0.5; b.y += Math.cos(Date.now()/1000+b.r)*0.5;
      ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fillStyle=gradient; ctx.fill();
    }); requestAnimationFrame(animate)
  } animate();
}

function spotlightCursor(){
  const spotlight = document.createElement('div'); spotlight.id='spotlight'; document.body.appendChild(spotlight);
  document.addEventListener('mousemove', e=>{
    spotlight.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 150px, rgba(0,0,0,0.85) 400px)`
  })
}

async function fetchGithubStats(){
  try{
    const res = await fetch(`https://api.github.com/users/${DATA.github}`);
    const data = await res.json();
    document.getElementById('github-repos').innerText = data.public_repos;
    document.getElementById('github-followers').innerText = data.followers;
  }catch(e){}
}

function terminalMode(){
  const term = document.createElement('div'); term.className='terminal'; 
  term.innerHTML = '> Welcome Terminal<br>> <input class="terminal-input" id="term-input">';
  document.body.appendChild(term);
  document.addEventListener('keydown', e=>{ if(e.ctrlKey && e.key==='k'){ e.preventDefault(); term.classList.toggle('open'); } });
}

function playSound(freq=440){ if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.frequency.value = freq; gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2); osc.start(); osc.stop(audioCtx.currentTime + 0.2); }

function shootConfetti(){ 
  for(let i=0;i<30;i++){ 
    const c=document.createElement('div'); 
    c.className='confetti'; 
    c.style.left=Math.random()*100+'%'; 
    document.body.appendChild(c); 
    setTimeout(()=>c.remove(),2000) 
  } 
} // <- INI PENTING: UDAH DITUTUP

function Navbar(){ return `<nav><div>${DATA.nama}</div><button class="liquid-btn" id="theme-toggle">Toggle</button></nav>`; }
function Hero(){ return `<section class="hero"><div class="container"><h1 class="hero-title">${DATA.nama}</h1><p id="role-text"></p></div></section>`; }
function About(){ return `<section><div class="container"><h2 class="section-title">About</h2><div class="about-grid"><img src="${DATA.foto}" style="width:100%;border-radius:20px"><p>${DATA.about}</p></div></div></section>`; }
function Projects(){ 
  let html = '';
  DATA.projects.forEach(p=>{ html += `<div class="project-card"><img src="${p.img}" class="project-img"><div class="project-content"><h3>${p.title}</h3><p>${p.desc}</p></div></div>` });
  return `<section><div class="container"><h2 class="section-title">Projects</h2><div class="project-grid">${html}</div></div></section>`; 
}
function TechStack(){ 
  let techHTML = '';
  DATA.tech.forEach(t=>{ techHTML += `<div class="tech-card"><img src="${t.icon}" style="width:48px"><h3>${t.name}</h3></div>` });
  return `<section><div class="container"><h2 class="section-title">GitHub Stats</h2><div class="github-stats"><div class="github-card"><h3 id="github-repos">0</h3><p>Repos</p></div><div class="github-card"><h3 id="github-followers">0</h3><p>Followers</p></div></div><h2 class="section-title">Tech</h2><div class="tech-grid">${techHTML}</div></div></section>`; 
}
function Contact(){ return `<section><div class="container"><h2 class="section-title">Contact</h2><form id="contact-form"><button type="submit" class="liquid-btn">Send</button></form></div></section>`; }

function typeWriter(el, texts){ let i=0,j=0; function type(){ el.innerHTML = texts[i].substring(0,j++) + '|'; if(j>texts[i].length){i=(i+1)%texts.length;j=0} setTimeout(type,150) } type() }

function init(){
  injectCSS();
  liquidBackground(); spotlightCursor(); terminalMode();
  document.body.innerHTML = Navbar() + Hero() + About() + Projects() + TechStack() + Contact();
  
  typeWriter(document.getElementById('role-text'), DATA.role);
  fetchGithubStats();

  document.getElementById('theme-toggle').onclick = () => { theme = theme === 'dark'? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', theme); };

  document.getElementById('contact-form').onsubmit = (e)=>{ 
    e.preventDefault(); playSound(800); shootConfetti(); alert('Sent!')
  }
}

document.addEventListener('DOMContentLoaded', init);
