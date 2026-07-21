const DATA = {
  nama: "Kangsad01",
  github: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder", "Pixel Perfect"],
  about: "Aku suka mengubah ide liar jadi website yang hidup. Fokus di animasi, performa, dan UX yang bikin user bilang 'anjir keren'.",
  foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
  stats: [{number: 12, label: "Projects"}, {number: 2, label: "Years Exp"}, {number: 98, label: "Client Rate"}],
  tech: [
    {name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react-original.svg"},
    {name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
    {name: "GSAP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/greensock/greensock-original.svg"},
    {name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"}
  ],
  projects: [
    {title: "NEON DASHBOARD", desc: "Admin dashboard dengan neon glow + real-time chart.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600", link: "#"},
    {title: "AI LANDING PAGE", desc: "Landing page AI dengan animasi scroll yang cinematic.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600", link: "#"},
    {title: "3D PORTFOLIO", desc: "Portfolio dengan object 3D yang bisa dirotasi pake mouse.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600", link: "#"}
  ]
}

let theme = localStorage.getItem('theme') || 'dark';

function injectCSS(){
  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;700;900&family=Satoshi:wght@400;700&display=swap');
  :root{--bg:#020202;--text:#fff;--muted:#888;--accent:#a855f7;--accent2:#22d3ee;--card:rgba(255,255,255,0.05);--border:rgba(255,255,255,0.1)}
  [data-theme='light']{--bg:#f8f8f8;--text:#020202;--muted:#666;--card:rgba(0,0,0,0.05)}
  *{margin:0;padding:0;box-sizing:border-box} html{scroll-behavior:smooth}
  body{font-family:'Satoshi',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden}
  
  #liquid-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;filter:blur(120px);opacity:0.5}
 .noise{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;opacity:0.03;pointer-events:none;background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')}

 .container{max-width:1300px;margin:0 auto;padding:0 5%}
  nav{position:fixed;top:0;width:100%;padding:2rem 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(2,2,2,0.1);backdrop-filter:blur(20px);z-index:1000;border-bottom:1px solid var(--border);transition:.3s}
 .logo{font-family:'Clash Display';font-weight:900;font-size:1.8rem;letter-spacing:3px;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
 .liquid-btn{padding:1rem 2.5rem;border-radius:100px;text-decoration:none;font-weight:700;background:linear-gradient(90deg,var(--accent),var(--accent2));color:#fff;border:none;cursor:pointer;position:relative;overflow:hidden;transition:.3s}
 .liquid-btn:hover{transform:translateY(-3px);box-shadow:0 10px 40px rgba(168,85,247,0.4)}

  section{padding:12rem 5%;min-height:100vh}
 .section-title{font-family:'Clash Display';font-size:4rem;font-weight:900;text-align:center;margin-bottom:5rem;opacity:0;transform:translateY(50px)}
 .section-title.revealed{opacity:1;transform:translateY(0);transition:1s}

 .hero{text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}
 .hero-title{font-family:'Clash Display';font-size:clamp(4rem, 10vw, 8rem);font-weight:900;line-height:1;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:gradient 3s ease infinite}
  @keyframes gradient{0%{filter:hue-rotate(0)}50%{filter:hue-rotate(30deg)}100%{filter:hue-rotate(0)}}
 .hero-subtitle{font-size:1.8rem;color:var(--muted);margin:2rem 0;min-height:50px}

 .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
 .about-img{width:100%;border-radius:30px;border:2px solid transparent;background:linear-gradient(var(--bg),var(--bg)) padding-box, linear-gradient(45deg,var(--accent),var(--accent2)) border-box;transform:perspective(1000px) rotateY(-10deg);transition:.5s}
 .about-img:hover{transform:perspective(1000px) rotateY(0)}
 .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:3rem}
 .stat-box{text-align:center;padding:2.5rem;background:var(--card);border-radius:20px;border:1px solid var(--border);backdrop-filter:blur(20px);transition:.3s}
 .stat-box:hover{transform:translateY(-10px);border-color:var(--accent)}
 .stat-box h3{font-family:'Clash Display';font-size:3rem;color:var(--accent);font-weight:900}

 .project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:3rem}
 .project-card{overflow:hidden;background:var(--card);border:1px solid var(--border);border-radius:30px;backdrop-filter:blur(20px);transition:.5s;opacity:0;transform:translateY(50px)}
 .project-card.revealed{opacity:1;transform:translateY(0)}
 .project-card:hover{transform:translateY(-15px) scale(1.02);box-shadow:0 20px 50px rgba(168,85,247,0.2)}
 .project-img{width:100%;height:300px;object-fit:cover;transition:.5s}
 .project-card:hover.project-img{transform:scale(1.1)}
 .project-content{padding:2.5rem}

 .tech-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:2rem}
 .tech-card{padding:3rem 2rem;text-align:center;background:var(--card);border:1px solid var(--border);border-radius:25px;backdrop-filter:blur(20px);transition:.3s;opacity:0;transform:scale(0.8)}
 .tech-card.revealed{opacity:1;transform:scale(1)}
 .tech-card:hover{transform:translateY(-10px) rotate(3deg);border-color:var(--accent);box-shadow:0 0 30px rgba(168,85,247,0.3)}
 .tech-card img{width:64px;height:64px;margin-bottom:1rem;filter:drop-shadow(0 0 10px var(--accent))}

 .github-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
 .github-card{padding:2.5rem;text-align:center;background:var(--card);border-radius:20px;border:1px solid var(--border)}

 .typing-cursor{display:inline-block;width:4px;height:1.8rem;background:var(--accent);animation:blink 1s infinite;margin-left:5px}
  @keyframes blink{50%{opacity:0}}
  
  @media(max-width:768px){
  .about-grid{grid-template-columns:1fr}
  .hero-title{font-size:3rem}
  .section-title{font-size:2.5rem}
  .stats-grid{grid-template-columns:1fr}
  }
  `;
  document.head.appendChild(Object.assign(document.createElement('style'), {innerHTML: css}));
}

// BACKGROUND + NOISE
function initBackground(){
  const canvas = document.createElement('canvas'); canvas.id='liquid-bg'; document.body.appendChild(canvas);
  const noise = document.createElement('div'); noise.className='noise'; document.body.appendChild(noise);
  const ctx = canvas.getContext('2d'); canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  let blobs = [{x:300,y:300,r:300},{x:1000,y:500,r:400},{x:600,y:800,r:250}];
  function animate(){ ctx.clearRect(0,0,canvas.width,canvas.height);
    const gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    gradient.addColorStop(0,'#a855f7'); gradient.addColorStop(1,'#22d3ee');
    blobs.forEach(b=>{ b.x += Math.sin(Date.now()/2000+b.r)*1; b.y += Math.cos(Date.now()/2000+b.r)*1;
      ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fillStyle=gradient; ctx.fill();
    }); requestAnimationFrame(animate)
  } animate();
}

// SCROLL REVEAL
function scrollReveal(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('revealed') } })
  },{threshold:0.2});
  document.querySelectorAll('.section-title,.project-card,.tech-card').forEach(el=>observer.observe(el));
}

// 3D TILT
function tiltEffect(){
  document.querySelectorAll('.tech-card,.project-card').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; const y = e.clientY - rect.top;
      const centerX = rect.width/2; const centerY = rect.height/2;
      const rotateX = (y - centerY)/10; const rotateY = (centerX - x)/10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    })
    card.addEventListener('mouseleave', ()=>{ card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)' })
  })
}

async function fetchGithubStats(){
  try{
    const res = await fetch(`https://api.github.com/users/${DATA.github}`);
    const data = await res.json();
    document.getElementById('github-repos').innerText = data.public_repos;
    document.getElementById('github-followers').innerText = data.followers;
  }catch(e){}

// COMPONENTS
function Navbar(){ return `<nav><div class="logo">${DATA.nama}</div><button class="liquid-btn" id="theme-toggle" style="padding:.8rem 1.5rem;font-size:.9rem">Theme</button></nav>`; }
function Hero(){ return `<section id="hero" class="hero"><div class="container"><h1 class="hero-title">${DATA.nama}</h1><p class="hero-subtitle" id="role-text"></p><p style="max-width:600px;color:var(--muted);font-size:1.2rem;margin:2rem auto">${DATA.about}</p><div style="margin-top:3rem"><a href="#projects" class="liquid-btn">Explore Work</a></div></div></section>`; }
function About(){ 
  const statsHTML = DATA.stats.map(s => `<div class="stat-box"><h3>${s.number}+</h3><p>${s.label}</p></div>`).join('');
  return `<section id="about"><div class="container"><h2 class="section-title">About Me</h2><div class="about-grid"><img src="${DATA.foto}" class="about-img"><div><h3 style="font-family:'Clash Display';font-size:2.5rem;margin-bottom:1rem">Building Digital Experiences</h3><p style="color:var(--muted);line-height:1.8;font-size:1.1rem">${DATA.about}</p><div class="stats-grid">${statsHTML}</div></div></div></div></section>`; 
}
function Projects(){ 
  const projectHTML = DATA.projects.map((p,i) => `<div class="project-card" style="transition-delay:${i*0.1}s"><img src="${p.img}" class="project-img"><div class="project-content"><h3 style="font-size:1.5rem;margin-bottom:1rem">${p.title}</h3><p style="color:var(--muted)">${p.desc}</p></div></div>`).join('');
  return `<section id="projects"><div class="container"><h2 class="section-title">Selected Work</h2><div class="project-grid">${projectHTML}</div></div></section>`; 
}
function TechStack(){ 
  const techHTML = DATA.tech.map((t,i) => `<div class="tech-card" style="transition-delay:${i*0.1}s"><img src="${t.icon}"><h3>${t.name}</h3></div>`).join('');
  return `<section id="tech"><div class="container"><h2 class="section-title">Live GitHub Stats</h2><div class="github-stats"><div class="github-card"><h3 id="github-repos">0</h3><p>Repositories</p></div><div class="github-card"><h3 id="github-followers">0</h3><p>Followers</p></div><div class="github-card"><h3>⚡</h3><p>Active</p></div></div><h2 class="section-title" style="margin-top:6rem">Tech Stack</h2><div class="tech-grid">${techHTML}</div></div></section>`; 
}
function Contact(){ return `<section id="contact"><div class="container"><h2 class="section-title">Let's Create Magic</h2><form id="contact-form" style="max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:1.5rem"><input name="name" placeholder="Your Name" required style="padding:1.2rem;background:var(--card);border:1px solid var(--border);border-radius:15px;color:var(--text);font-size:1rem"><input name="email" type="email" placeholder="Your Email" required style="padding:1.2rem;background:var(--card);border:1px solid var(--border);border-radius:15px;color:var(--text);font-size:1rem"><textarea name="message" placeholder="Your Message" rows="5" required style="padding:1.2rem;background:var(--card);border:1px solid var(--border);border-radius:15px;color:var(--text);font-size:1rem"></textarea><button type="submit" class="liquid-btn">Send Message</button></form></div></section>`; }

function typeWriter(el, texts){ let i=0,j=0,isDeleting=false; function type(){ const current=texts[i]; if(isDeleting){el.innerHTML=current.substring(0,j-1)+'<span class="typing-cursor"></span>';j--}else{el.innerHTML=current.substring(0,j+1)+'<span class="typing-cursor"></span>';j++} if(!isDeleting&&j===current.length){isDeleting=true;setTimeout(type,2000)}else if(isDeleting&&j===0){isDeleting=false;i=(i+1)%texts.length;setTimeout(type,500)}else{setTimeout(type,isDeleting?50:100)}} type() }

function init(){
  injectCSS();
  initBackground();
  document.body.innerHTML = Navbar() + Hero() + About() + Projects() + TechStack() + Contact();
  
  typeWriter(document.getElementById('role-text'), DATA.role);
  fetchGithubStats();
  scrollReveal();
  setTimeout(tiltEffect, 1000);

  document.getElementById('theme-toggle').onclick = () => { theme = theme === 'dark'? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); };
}

document.addEventListener('DOMContentLoaded', init);
