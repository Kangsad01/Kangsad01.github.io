// ========== 1. DATA KAMU ==========
const DATA = {
  nama: "Kangsad01",
  github: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder", "GSAP Animator"],
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
    {title: "PORTFOLIO V3", desc: "Portfolio personal dengan animasi GSAP, dark mode, dan responsive design.", tags: ["HTML", "CSS", "JavaScript", "GSAP"], link: "https://kangsad01.github.io", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600"},
    {title: "DASHBOARD ANALYTICS", desc: "Admin dashboard modern dengan chart real-time.", tags: ["React", "Tailwind", "Chart.js"], link: "https://github.com/Kangsad01", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"}
  ],
  social: {github:"https://github.com/Kangsad01", linkedin:"#", instagram:"https://www.instagram.com/the.sad.boy01"}
}

let theme = localStorage.getItem('theme') || 'dark';
let audioCtx;

// ========== 2. INJECT CSS ==========
function injectCSS(){
  const css = `
  :root{--bg:#030303;--text:#f5f5f5;--muted:#a0a0a0;--card:rgba(17,17,17,0.6);--accent:#9333ea;--accent2:#06b6d4;--border:rgba(255,255,255,0.1)}
  [data-theme='light']{--bg:#f5f5f5;--text:#030303;--muted:#525252;--card:rgba(255,255,255,0.6);--border:rgba(0,0,0,0.1)}
  *{margin:0;padding:0;box-sizing:border-box} html{scroll-behavior:smooth}
  body{font-family:'Satoshi',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden}
  #liquid-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;filter:blur(80px)}
  #spotlight{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;background:radial-gradient(circle at 50% 50%, transparent 10%, rgba(0,0,0,0.9) 20%)}
  .progress-bar-top{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent2));z-index:10001;transform-origin:left;transform:scaleX(0)}
  .cursor{position:fixed;width:8px;height:8px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:9999}
  .cursor-follower{position:fixed;width:40px;height:40px;border:2px solid var(--accent);border-radius:50%;pointer-events:none;z-index:9998;transition:transform.3s ease-out}
  #app{opacity:0;transition:opacity.5s} #app.loaded{opacity:1}
  .loader{position:fixed;inset:0;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center;font-size:3rem;font-weight:900}
  .loader.hidden{opacity:0;pointer-events:none}
  nav{position:fixed;top:0;width:100%;padding:2rem 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(3,3,3,0.1);backdrop-filter:blur(20px);z-index:1000;border-bottom:1px solid var(--border)}
  .logo{font-weight:900;font-size:1.5rem;letter-spacing:2px}
  .nav-links{display:flex;gap:2rem;list-style:none}
  section{padding:10rem 5%;min-height:100vh}
  .section-title{font-size:3rem;font-weight:900;text-align:center;margin-bottom:4rem}
  .liquid-btn{padding:1rem 2.5rem;border-radius:50px;text-decoration:none;font-weight:700;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#fff;border:none;cursor:pointer}
  .hero{text-align:center}.hero-title{font-size:5rem;font-weight:900;line-height:1}
  .hero-subtitle{font-size:1.3rem;color:var(--muted);margin:2rem 0;min-height:30px}
  .typing-cursor{display:inline-block;width:3px;background:var(--accent);animation:blink 1s infinite}
  @keyframes blink{50%{opacity:0}}
  .github-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem}
  .github-card{padding:1.5rem;text-align:center;background:var(--card);border-radius:15px;border:1px solid var(--border)}
  .terminal{position:fixed;bottom:0;left:0;width:100%;height:40%;background:rgba(0,0,0,0.9);backdrop-filter:blur(20px);border-top:2px solid var(--accent);transform:translateY(100%);transition:transform.3s;z-index:10000;font-family:monospace;padding:1rem;overflow-y:auto}
  .terminal.open{transform:translateY(0)}
  .terminal-input{background:transparent;border:none;color:var(--accent2);width:100%;outline:none;font-size:1rem}
  .toast{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(100px);background:var(--accent);color:#fff;padding:1rem 2rem;border-radius:12px;opacity:0;transition:all.3s;z-index:10000}
  .toast.show{transform:translateX(-50%) translateY(0);opacity:1}
  .confetti{position:fixed;width:10px;height:10px;background:var(--accent);pointer-events:none;z-index:10001}
  .reveal{opacity:0;transform:translateY(50px);transition:all 1s}.reveal.active{opacity:1;transform:translateY(0)}
  .tilt-card{background:var(--card);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:20px;transition:transform.3s}
  @media(max-width:768px){.nav-links{display:none}.hero-title{font-size:3rem}.cursor,.cursor-follower{display:none}}
  `;
  document.head.appendChild(Object.assign(document.createElement('style'), {innerHTML: css}));
}

// ========== 3. FITUR PAKET CREATIVE DEV ==========
function liquidBackground(){
  const canvas = document.createElement('canvas'); canvas.id='liquid-bg'; document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d'); canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  let blobs = []; for(let i=0;i<3;i++){ blobs.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:200+Math.random()*100}) }
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
    spotlight.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 10%, rgba(0,0,0,0.9) 20%)`
  })
}

async function fetchGithubStats(){
  try{
    const res = await fetch(`https://api.github.com/users/${DATA.github}`);
    const data = await res.json();
    const reposEl = document.getElementById('github-repos');
    const followersEl = document.getElementById('github-followers');
    if(reposEl) reposEl.innerText = data.public_repos;
    if(followersEl) followersEl.innerText = data.followers;
  }catch(e){console.log('Github API error')}
}

function terminalMode(){
  const term = document.createElement('div'); term.className='terminal'; term.innerHTML=`<p>> Welcome to ${DATA.nama} Terminal v1.0</p><p>> Type 'help' for commands</p><div id="term-output"></div><p>> <input class="terminal-input" id="term-input"></p>`;
  document.body.appendChild(term);
  document.addEventListener('keydown', e=>{ if(e.ctrlKey && e.key==='k'){ e.preventDefault(); term.classList.toggle('open'); document.getElementById('term-input')?.focus() } });
  const input = document.getElementById('term-input');
  if(input){
    input.onkeydown = (e)=>{
      if(e.key==='Enter'){
        const cmd = e.target.value; document.getElementById('term-output').innerHTML += `<p>> ${cmd}</p>`;
        if(cmd==='help'){document.getElementById('term-output').innerHTML += `<p>projects, about, contact, clear</p>`}
        if(cmd==='projects'){window.scrollTo({top:document.getElementById('projects')?.offsetTop,behavior:'smooth'})}
        if(cmd==='clear'){document.getElementById('term-output').innerHTML=''}
        e.target.value='';
      }
    }
  }
}

function playSound(freq=440){ if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); osc.frequency.value = freq; gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3); osc.start(); osc.stop(audioCtx.currentTime + 0.3); }
function shootConfetti(){ for(let i=0;i<50;i++){ const c=document.createElement('div'); c.className='confetti'; c.style.left=Math.random()*100+'%'; c.style.background=`hsl(${Math.random()*360},100%,50%)`; document.body.appendChild(c); c.animate([{transform:'translateY(0) rotate(0deg)',opacity:1},{transform:`translateY(${window.innerHeight}px) rotate(720deg)`,opacity:0}],{duration:2000}); setTimeout(()=>c.remove(),2000) } }

// ========== 4. COMPONENTS ==========
function ProgressBar(){ const bar = document.createElement('div'); bar.className='progress-bar-top'; document.body.appendChild(bar); window.addEventListener('scroll', ()=>{const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight); bar.style.transform = `scaleX(${scrolled})`}) }
function Cursor(){ const c=document.createElement('div');c.className='cursor';const f=document.createElement('div');f.className='cursor-follower';document.body.appendChild(c);document.body.appendChild(f);document.addEventListener('mousemove',e=>{c.style.left=e.clientX-4+'px';c.style.top=e.clientY-4+'px';setTimeout(()=>{f.style.left=e.clientX-20+'px';f.style.top=e.clientY-20+'px'},80)}) }
function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div><ul class="nav-links"><li><a href="#hero">Home</a></li><li><a href="#projects">Work</a></li><li><a href="#tech">Skills</a></li><li><a href="#contact">Contact</a></li></ul><button class="liquid-btn" id="theme-toggle" style="padding:.5rem 1rem">Toggle</button></nav>`; }
function Hero(){ return `<section id="hero" class="hero"><h1 class="hero-title">${DATA.nama}</h1><p class="hero-subtitle" id="role-text"></p><p>${DATA.about}</p><div style="margin-top:2rem"><a href="#projects" class="liquid-btn">View My Work</a></div></section>`; }
function Projects(){ return `<section id="projects" class="reveal"><h2 class="section-title">Selected Work</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem">${DATA.projects.map(p=>`<div class="project-card tilt-card"><img src="${p.img}" style="width:100%;height:250px;object-fit:cover;border-radius:15px 15px 0 0"/><div style="padding:2rem"><h3>${p.title}</h3><p>${p.desc}</p></div></div>`).join('')}</div></section>`; }
function TechStack(){ 
  const techHTML = DATA.tech.map(t=>`<div class="tech-card tilt-card" style="padding:2rem;text-align:center"><img src="${t.icon}" style="width:48px;height:48px"/><h3>${t.name}</h3></div>`).join('');
  return `<section id="tech" class="reveal"><h2 class="section-title">Live GitHub Stats</h2><div class="github-stats"><div class="github-card"><h3 id="github-repos">0</h3><p>Repositories</p></div><div class="github-card"><h3 id="github-followers">0</h3><p>Followers</p></div><div class="github-card"><h3>⭐</h3><p>Creative</p></div></div><h2 class="section-title" style="margin-top:4rem">Tech Arsenal</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:2rem">${techHTML}</div></section>`; 
}
function Contact(){ return `<section id="contact" class="reveal"><h2 class="section-title">Let's Build Something</h2><form id="contact-form" style="max-width:600px;margin:0 auto;display:flex;flex-direction:column;gap:1rem"><input name="name" placeholder="Name" required style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"><input name="email" type="email" placeholder="Email" required style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"><textarea name="message" placeholder="Message" rows="5" required style="padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text)"></textarea><button type="submit" class="liquid-btn">Send Message</button></form></section>`; }
function Footer(){ return `<footer style="text-align:center;padding:3rem;border-top:1px solid var(--border)"><p>© 2026 ${DATA.nama}. Press Ctrl+K for Terminal</p></footer>`; }

// ========== 5. LOGIC ==========
function typeWriter(element, texts, speed=100){ let i=0,j=0,isDeleting=false; function type(){ const current=texts[i]; if(isDeleting){element.innerHTML=current.substring(0,j-1)+'<span class="typing-cursor"></span>';j--}else{element.innerHTML=current.substring(0,j+1)+'<span class="typing-cursor"></span>';j++} if(!isDeleting&&j===current.length){isDeleting=true;setTimeout(type,2000)}else if(isDeleting&&j===0){isDeleting=false;i=(i+1)%texts.length;setTimeout(type,500)}else{setTimeout(type,isDeleting?50:speed)}} type() }
function tiltEffect(){ document.querySelectorAll('.tilt-card').forEach(card=>{ card.addEventListener('mousemove', e=>{ const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top; const centerX = rect.width/2; const centerY = rect.height/2; const rotateX = (y - centerY)/10; const rotateY = (centerX - x)/10; card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`; }); card.addEventListener('mouseleave', ()=>{card.style.transform='perspective(1000px) rotateX(0) rotateY(0) scale(1)'}) }); }
function runObserver(){ const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('active')}})},{threshold:0.1}); document.querySelectorAll('.reveal').forEach(el=>observer.observe(el)); }

function init(){
  ProgressBar(); Cursor(); liquidBackground(); spotlightCursor(); terminalMode();
  const app = document.getElementById('app');
  app.innerHTML = Navbar() + Hero() + Projects() + TechStack() + Contact() + Footer();
  tiltEffect(); runObserver(); fetchGithubStats();

  const roleEl = document.getElementById('role-text'); 
  if(roleEl){ typeWriter(roleEl, DATA.role); }

  document.getElementById('theme-toggle').onclick = () => { playSound(400); theme = theme === 'dark'? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); };

  document.getElementById('contact-form').onsubmit = (e)=>{ 
    e.preventDefault(); 
    playSound(800); 
    shootConfetti();
    const toast = document.createElement('div'); toast.className='toast'; toast.innerText='Message sent! 🚀'; document.body.appendChild(toast);
    setTimeout(()=>toast.classList.add('show'),100); setTimeout(()=>{toast.classList.remove('show'); setTimeout(()=>toast.remove(),300)},3000);
    e.target.reset() 
  }

  setTimeout(()=>{document.getElementById('loader')?.classList.add('hidden');app?.classList.add('loaded')},1000);
}

// ========== 6. START ==========
injectCSS();
document.documentElement.setAttribute('data-theme', theme);
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if(app){ app.innerHTML = `<div class="loader" id="loader"><div>${DATA.nama}</div></div>`; }
  init();
});
