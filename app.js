const DATA = {
  nama: "Kangsad01",
  github: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder"],
  about: "Frontend Developer dari Surabaya yang suka bikin website interaktif dan animasi smooth. Fokus di React, Next.js, dan UI/UX yang memorable.",
  foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
  stats: [{number: 8, label: "Projects Done"}, {number: 1, label: "Years Experience"}, {number: 5, label: "Happy Clients"}],
  tech: [
    {name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react-original.svg"},
    {name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
    {name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
    {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript-original.svg"}
  ],
  projects: [
    {title: "PORTFOLIO V3", desc: "Portfolio personal dengan animasi GSAP, dark mode, dan responsive design.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600"},
    {title: "DASHBOARD ANALYTICS", desc: "Admin dashboard modern dengan chart real-time.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"},
    {title: "SAAS LANDING PAGE", desc: "Landing page untuk produk SaaS dengan animasi scroll-trigger.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600"}
  ]
}

let theme = localStorage.getItem('theme') || 'dark';
let audioCtx;

function injectCSS(){
  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;700;900&display=swap');
  :root{--bg:#030303;--text:#f5f5f5;--muted:#a0a0a0;--accent:#9333ea;--accent2:#06b6d4;--card:rgba(17,17,17,0.6);--border:rgba(255,255,255,0.1)}
  [data-theme='light']{--bg:#f5f5f5;--text:#030303;--muted:#525252;--card:rgba(255,255,255,0.6);--border:rgba(0,0,0,0.1)}
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{font-family:'Satoshi',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden}
  
  #liquid-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;filter:blur(100px);opacity:0.4}
  #spotlight{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none}

 .container{max-width:1200px;margin:0 auto;padding:0 5%}
  nav{position:fixed;top:0;width:100%;padding:2rem 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(3,3,3,0.1);backdrop-filter:blur(20px);z-index:1000;border-bottom:1px solid var(--border)}
 .logo{font-weight:900;font-size:1.5rem;letter-spacing:2px}
 .liquid-btn{padding:1rem 2.5rem;border-radius:50px;text-decoration:none;font-weight:700;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#fff;border:none;cursor:pointer;transition:.3s}
 .liquid-btn:hover{transform:scale(1.05);box-shadow:0 0 30px rgba(147,51,234,0.5)}

  section{padding:10rem 5%;min-height:100vh;display:flex;flex-direction:column;justify-content:center}
 .section-title{font-size:3rem;font-weight:900;text-align:center;margin-bottom:4rem}

 .hero{text-align:center}
 .hero-title{font-size:clamp(3rem, 8vw, 6rem);font-weight:900;line-height:1.1;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
 .hero-subtitle{font-size:1.5rem;color:var(--muted);margin:2rem 0;min-height:40px}

 .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
 .about-img{width:100%;border-radius:20px;border:2px solid var(--accent)}
 .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:3rem}
 .stat-box{text-align:center;padding:2rem;background:var(--card);border-radius:15px;border:1px solid var(--border);backdrop-filter:blur(20px)}
 .stat-box h3{font-size:2.5rem;color:var(--accent);font-weight:900}

 .project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}
 .project-card{overflow:hidden;background:var(--card);border:1px solid var(--border);border-radius:20px;backdrop-filter:blur(20px);transition:.3s}
 .project-card:hover{transform:translateY(-10px)}
 .project-img{width:100%;height:250px;object-fit:cover}
 .project-content{padding:2rem}

 .tech-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:2rem}
 .tech-card{padding:2rem;text-align:center;background:var(--card);border:1px solid var(--border);border-radius:20px;backdrop-filter:blur(20px);transition:.3s}
 .tech-card:hover{transform:translateY(-5px);border-color:var(--accent)}
 .tech-card img{width:48px;height:48px;margin-bottom:1rem}

 .github-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem}
 .github-card{padding:2rem;text-align:center;background:var(--card);border-radius:15px;border:1px solid var(--border)}

 .terminal{position:fixed;bottom:0;left:0;width:100%;height:40%;background:rgba(0,0,0,0.9);backdrop-filter:blur(20px);border-top:2px solid var(--accent);transform:translateY(100%);transition:transform.3s;z-index:10000;padding:1rem;color:#0f0;font-family:monospace}
 .terminal.open{transform:translateY(0)}
 .terminal-input{background:transparent;border:none;color:#0ff;width:100%;outline:none;font-size:1rem}

 .confetti{position:fixed;width:10px;height:10px;pointer-events:none;z-index:10001}
 .typing-cursor{display:inline-block;width:3px;background:var(--accent);animation:blink 1s infinite}
  @keyframes blink{50%{opacity:0}}
  
  @media(max-width:768px){
   .about-grid{grid-template-columns:1fr}
   .nav-links{display:none}
   .hero-title{font-size:3rem}
   .stats-grid{grid-template-columns:1fr}
  }
  `;
  document.head.appendChild(Object.assign(document.createElement('style'), {innerHTML: css}));
}

// FITUR
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
  window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight})
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
  term.innerHTML = '> Welcome to Terminal<br>> Type help<br><div id="term-output"></div>> <input class="terminal-input" id="term-input">';
  document.body.appendChild(term);
  document.addEventListener('keydown', e=>{ if(e.ctrlKey && e.key==='k'){ e.preventDefault(); term.classList.toggle('open'); document.getElementById('term-input').focus(); } });
}

function playSound(freq=440){ if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.frequency.value = freq; gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2); osc.start(); osc.stop(audioCtx.currentTime + 0.2); }
function shootConfetti(){ for(let i=0;i<50;i++){ const c=document.createElement('div'); c.className='confetti'; c.style.left=Math.random()*100+'%'; c.style.background=`hsl(${Math.random()*360},100%,50%)`; document.body.appendChild(c); c.animate([{transform:'translateY(0)'},{transform:`translateY(${window.innerHeight}px) rotate(720deg)`}],{duration:2000}); setTimeout(()=>c.remove(),2000) }

// COMPONENTS
function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div><button class="liquid-btn" id="theme-toggle" style="padding:.5rem 1rem">Toggle Theme</button></nav>`; }
function Hero(){ return `<section id="hero" class="hero"><div class="container"><h1 class="hero-title">${DATA.nama}</h1><p class="hero-subtitle" id="role-text"></p><p>${DATA.about}</p><div style="margin-top:2rem"><a href="#projects" class="liquid-btn">View My Work</a></div></div></section>`; }
function About(){ 
  const statsHTML = DATA.stats.map(s => `<div class="stat-box"><h3>${s.number}+</h3><p>${s.label}</p></div>`).join('');
  return `<section id="about"><div class="container"><h2 class="section-title">About Me</h2><div class="about-grid"><img src="${DATA.foto}" class="about-img"><div><h3 style="font-size:2rem;margin-bottom:1rem">Halo, saya ${DATA.nama}</h3><p style="color:var(--muted);line-height:1.8">${DATA.about}</p><div class="stats-grid">${statsHTML}</div></div></div></div></section>`; 
}
function Projects(){ 
  const projectHTML = DATA.projects.map(p => `<div class="project-card"><img src="${p.img}" class="project-img"><div class="project-content"><h3>${p.title}</h3><p>${p.desc}</p></div></div>`).join('');
  return `<section id="projects"><div class="container"><h2 class="section-title">Selected Work</h2><div class="project-grid">${projectHTML}</div></div></section>`; 
}
function TechStack(){ 
  const techHTML = DATA.tech.map(t => `<div class="tech-card"><img src="${t.icon}"><h3>${t.name}</h3></div>`).join('');
  return `<section id="tech"><div class="container"><h2 class="section-title">Live GitHub Stats</h2><div class="github-stats"><div class="github-card"><h3 id="github-repos">0</h3><p>Repositories</p></div><div class="github-card"><h3 id="github-followers">0</h3><p>Followers</p></div><div class="github-card"><h3>⭐</h3><p>Creative</p></div></div><h2 class="section-title" style="margin-top:4rem">Tech Arsenal</h2><div class="tech-grid">${techHTML}</div></div></section>`; 
}
function Contact(){ return `<section id="contact"><div class="container"><h2 class="section-title">Let's Build Something</h2><form id="contact-form" style="max-width:600px;margin:0 auto;display:flex;flex-direction:column;gap:1rem"><input name="name" placeholder="Name" required style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"><input name="email" type="email" placeholder="Email" required style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"><textarea name="message" placeholder="Message" rows="5" required style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"></textarea><button type="submit" class="liquid-btn">Send Message</button></form></div></section>`; }
function Footer(){ return `<footer style="text-align:center;padding:3rem;border-top:1px solid var(--border)"><p>© 2026 ${DATA.nama}. Press Ctrl+K for Terminal</p></footer>`; }

function typeWriter(el, texts){ let i=0,j=0,isDeleting=false; function type(){ const current=texts[i]; if(isDeleting){el.innerHTML=current.substring(0,j-1)+'<span class="typing-cursor"></span>';j--}else{el.innerHTML=current.substring(0,j+1)+'<span class="typing-cursor"></span>';j++} if(!isDeleting&&j===current.length){isDeleting=true;setTimeout(type,2000)}else if(isDeleting&&j===0){isDeleting=false;i=(i+1)%texts.length;setTimeout(type,500)}else{setTimeout(type,isDeleting?50:100)}} type() }

function init(){
  injectCSS();
  liquidBackground(); spotlightCursor(); terminalMode();
  document.body.innerHTML = Navbar() + Hero() + About() + Projects() + TechStack() + Contact() + Footer();
  
  typeWriter(document.getElementById('role-text'), DATA.role);
  fetchGithubStats();

  document.getElementById('theme-toggle').onclick = () => { playSound(400); theme = theme === 'dark'? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); };

  document.getElementById('contact-form').onsubmit = (e)=>{ 
    e.preventDefault(); playSound(800); shootConfetti(); alert('Message Sent! 🚀'); e.target.reset();
  }
}

document.addEventListener('DOMContentLoaded', init)
