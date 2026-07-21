const DATA = {
  nama: "Kangsad01",
  github: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder"],
  about: "Frontend Developer dari Surabaya yang suka bikin website interaktif.",
  foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
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
  const css = `:root{--bg:#030303;--text:#f5f5f5;--accent:#9333ea;--accent2:#06b6d4;--card:rgba(17,17,17,0.6);--border:rgba(255,255,255,0.1)}
  [data-theme='light']{--bg:#f5f5f5;--text:#030303;--card:rgba(255,255,255,0.6)}
  body{font-family:sans-serif;background:var(--bg);color:var(--text);margin:0}
  #liquid-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;filter:blur(80px)}
  #spotlight{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none}
  nav{position:fixed;top:0;width:100%;padding:2rem 5%;display:flex;justify-content:space-between;background:rgba(0,0,0,0.2);backdrop-filter:blur(20px);z-index:1000}
  section{padding:10rem 5%;min-height:100vh}
 .liquid-btn{padding:1rem 2.5rem;border-radius:50px;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#fff;border:none;cursor:pointer}
 .terminal{position:fixed;bottom:0;left:0;width:100%;height:40%;background:#000;border-top:2px solid var(--accent);transform:translateY(100%);transition:.3s;z-index:10000;padding:1rem;color:#0f0;font-family:monospace}
 .terminal.open{transform:translateY(0)}
 .terminal-input{background:transparent;border:none;color:#0ff;width:100%;outline:none}
 .github-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
 .github-card{padding:1.5rem;text-align:center;background:var(--card);border-radius:15px}
 .tilt-card{background:var(--card);border:1px solid var(--border);border-radius:20px;transition:.3s}
 .confetti{position:fixed;width:10px;height:10px;pointer-events:none;z-index:10001}
  `;
  document.head.appendChild(Object.assign(document.createElement('style'), {innerHTML: css}));
}

// FITUR 1: LIQUID BG
function liquidBackground(){
  const canvas = document.createElement('canvas'); canvas.id='liquid-bg'; document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d'); canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  let blobs = [{x:300,y:300,r:250},{x:800,y:400,r:300},{x:500,y:700,r:200}];
  function animate(){ ctx.clearRect(0,0,canvas.width,canvas.height);
    const gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    gradient.addColorStop(0,'#9333ea'); gradient.addColorStop(1,'#06b6d4');
    blobs.forEach(b=>{ b.x += Math.sin(Date.now()/1000+b.r)*0.5; b.y += Math.cos(Date.now()/1000+b.r)*0.5;
      ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fillStyle=gradient; ctx.fill();
    }); requestAnimationFrame(animate)
  } animate();
}

// FITUR 2: SPOTLIGHT
function spotlightCursor(){
  const spotlight = document.createElement('div'); spotlight.id='spotlight'; document.body.appendChild(spotlight);
  document.addEventListener('mousemove', e=>{
    spotlight.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 100px, rgba(0,0,0,0.9) 300px)`
  })
}

// FITUR 3: GITHUB
async function fetchGithubStats(){
  try{
    const res = await fetch(`https://api.github.com/users/${DATA.github}`);
    const data = await res.json();
    document.getElementById('github-repos').innerText = data.public_repos;
    document.getElementById('github-followers').innerText = data.followers;
  }catch(e){}
}

// FITUR 4: TERMINAL
function terminalMode(){
  const term = document.createElement('div'); term.className='terminal'; 
  term.innerHTML = '> Welcome Terminal<br>> Type help<br><div id="term-output"></div>> <input class="terminal-input" id="term-input">';
  document.body.appendChild(term);
  document.addEventListener('keydown', e=>{ if(e.ctrlKey && e.key==='k'){ e.preventDefault(); term.classList.toggle('open'); } });
}

// FITUR 5: CONFETTI
function playSound(freq=440){ if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.frequency.value = freq; gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2); osc.start(); osc.stop(audioCtx.currentTime + 0.2); }
function shootConfetti(){ for(let i=0;i<30;i++){ const c=document.createElement('div'); c.className='confetti'; c.style.left=Math.random()*100+'%'; c.style.top='0'; c.style.background=`hsl(${Math.random()*360},100%,50%)`; document.body.appendChild(c); c.animate([{transform:'translateY(0)'},{transform:`translateY(${window.innerHeight}px)`}],{duration:2000}); setTimeout(()=>c.remove(),2000) } }

// COMPONENTS
function Navbar(){ return `<nav><div>${DATA.nama}</div><button class="liquid-btn" id="theme-toggle">Toggle</button></nav>`; }
function Hero(){ return `<section><h1>${DATA.nama}</h1><p id="role-text"></p><button class="liquid-btn">Hire Me</button></section>`; }
function Projects(){ 
  let html = '';
  DATA.projects.forEach(p=>{ html += `<div class="tilt-card"><img src="${p.img}" style="width:100%;height:200px;object-fit:cover"><h3>${p.title}</h3><p>${p.desc}</p></div>` });
  return `<section id="projects"><h2>Projects</h2><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:2rem">${html}</div></section>`; 
}
function TechStack(){ 
  let techHTML = '';
  DATA.tech.forEach(t=>{ techHTML += `<div class="tilt-card" style="padding:2rem;text-align:center"><img src="${t.icon}" style="width:48px"><h3>${t.name}</h3></div>` });
  return `<section id="tech"><h2>GitHub Stats</h2><div class="github-stats"><div class="github-card"><h3 id="github-repos">0</h3><p>Repos</p></div><div class="github-card"><h3 id="github-followers">0</h3><p>Followers</p></div><div class="github-card"><h3>⭐</h3><p>Stars</p></div></div><h2>Tech</h2><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2rem">${techHTML}</div></section>`; 
}
function Contact(){ return `<section><h2>Contact</h2><form id="contact-form"><input placeholder="Name" required><button type="submit" class="liquid-btn">Send</button></form></section>`; }

function typeWriter(el, texts){ let i=0,j=0; function type(){ el.innerHTML = texts[i].substring(0,j++) + '|'; if(j>texts[i].length){i=(i+1)%texts.length;j=0} setTimeout(type,150) } type() }

function init(){
  injectCSS();
  liquidBackground(); spotlightCursor(); terminalMode();
  document.body.innerHTML += Navbar() + Hero() + Projects() + TechStack() + Contact();
  
  typeWriter(document.getElementById('role-text'), DATA.role);
  fetchGithubStats();

  document.getElementById('theme-toggle').onclick = () => { theme = theme === 'dark'? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', theme); };

  document.getElementById('contact-form').onsubmit = (e)=>{ 
    e.preventDefault(); playSound(800); shootConfetti(); alert('Sent!')
  }
}

document.addEventListener('DOMContentLoaded', init);
