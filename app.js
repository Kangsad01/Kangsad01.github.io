// DATA KAMU EDIT DI SINI AJA
const DATA = {
  nama: "John Doe",
  job: ["Developer", "Designer", "Freelancer"],
  about: "Saya Frontend Developer dengan 3+ tahun pengalaman. Spesialis React, Next.js, Tailwind.",
  projects: [
    {title: "Analytics Dashboard", desc: "Dashboard real-time dengan Chart.js", tags: ["React", "Tailwind"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"},
    {title: "SaaS Landing Page", desc: "Landing page modern dengan animasi", tags: ["Next.js", "Framer"], img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072"},
    {title: "WhatsApp Bot Panel", desc: "Panel untuk manage WA Bot", tags: ["NodeJS", "Baileys"], img: "https://images.unsplash.com/photo-1511376777862-611b54f68947?q=80&w=2070"}
  ],
  skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Node.js"]
}

// 1. INJECT CSS PAKE JS
const style = document.createElement('style');
style.innerHTML = `
  :root{--bg:#050505;--card:#0f0f0f;--text:#f5f5f5;--muted:#a1a1aa;--a1:#a855f7;--a2:#38bdf8}
  *{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',sans-serif;scroll-behavior:smooth}
  body{background:var(--bg);color:var(--text)}
  nav{position:fixed;top:0;width:100%;padding:20px 8%;display:flex;justify-content:space-between;align-items:center;background:rgba(5,5,5,0.6);backdrop-filter:blur(12px);z-index:100}
 .logo{font-weight:800;font-size:24px;background:linear-gradient(90deg,var(--a1),var(--a2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
 .nav-links{display:flex;gap:30px;list-style:none}
 .nav-links a{color:var(--muted);text-decoration:none}
 .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer}
 .hamburger span{width:25px;height:3px;background:var(--text)}
 .mobile-menu{display:none;position:absolute;top:70px;right:8%;background:var(--card);padding:20px;border-radius:12px;flex-direction:column;gap:15px}
 .mobile-menu.show{display:flex}
  section{padding:120px 8%;min-height:100vh}
 .fade{opacity:0;transform:translateY(40px);transition:1s}
 .fade.show{opacity:1;transform:translateY(0)}
  #home{display:flex;align-items:center;justify-content:space-between;gap:50px}
 .gradient{background:linear-gradient(90deg,var(--a1),var(--a2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
 .btn{padding:14px 28px;border-radius:10px;background:linear-gradient(90deg,var(--a1),var(--a2));color:#fff;border:none;cursor:pointer}
 .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;margin-top:40px}
 .card{background:var(--card);padding:20px;border-radius:20px;border:1px solid #1a1a1a}
 .card img{width:100%;height:180px;object-fit:cover;border-radius:12px}
 .tags span{font-size:0.8rem;padding:6px 12px;background:#1a1a1a;border-radius:20px;margin-right:5px}
  @media(max-width:900px){.nav-links{display:none}.hamburger{display:flex}#home{flex-direction:column;text-align:center}}
`;
document.head.appendChild(style);

// 2. FUNGSI UTAMA RENDER
const app = document.getElementById('app');

function render(){
  app.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${About()}
    ${Projects()}
    ${Skills()}
    ${Contact()}
    ${Footer()}
  `;
  initJS(); // jalanin animasi setelah render
}

// 3. COMPONENT PAKE FUNCTION JS
function Navbar(){
  return `
  <nav>
    <div class="logo">Portfolio.</div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li><li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li><li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a>
      <a href="#skills">Skills</a><a href="#contact">Contact</a>
    </div>
  </nav>`;
}

function Hero(){
  return `
  <section id="home" class="fade">
    <div>
      <p>Hi, I'm</p>
      <h1 style="font-size:4rem"><span class="gradient" id="typing"></span></h1>
      <p style="color:var(--muted);margin:20px 0">Creative Frontend Developer based in Indonesia.</p>
      <button class="btn" onclick="document.getElementById('projects').scrollIntoView()">View Work</button>
    </div>
    <img src="https://i.imgur.com/8Km9tLL.png" style="width:350px;border-radius:30px">
  </section>`;
}

function About(){
  return `<section id="about" class="fade"><h2>About <span class="gradient">Me</span></h2><p style="color:var(--muted);margin-top:20px;max-width:700px">${DATA.about}</p></section>`;
}

function Projects(){
  return `
  <section id="projects" class="fade">
    <h2>Featured <span class="gradient">Projects</span></h2>
    <div class="grid">
      ${DATA.projects.map(p => `
        <div class="card">
          <img src="${p.img}">
          <h3>${p.title}</h3>
          <p style="color:var(--muted)">${p.desc}</p>
          <div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
        </div>
      `).join('')}
    </div>
  </section>`;
}

function Skills(){
  return `
  <section id="skills" class="fade">
    <h2>My <span class="gradient">Skills</span></h2>
    <div class="grid">${DATA.skills.map(s=>`<div class="card" style="text-align:center">${s}</div>`).join('')}</div>
  </section>`;
}

function Contact(){
  return `
  <section id="contact" class="fade">
    <h2>Get In <span class="gradient">Touch</span></h2>
    <form onsubmit="alert('Pesan Terkirim!');return false" style="max-width:500px;margin-top:30px">
      <input placeholder="Nama" required style="width:100%;padding:14px;margin-bottom:15px;background:#111;border:1px solid #333;color:var(--text);border-radius:10px">
      <input type="email" placeholder="Email" required style="width:100%;padding:14px;margin-bottom:15px;background:#111;border:1px solid #333;color:var(--text);border-radius:10px">
      <textarea placeholder="Pesan" required style="width:100%;padding:14px;margin-bottom:15px;background:#111;border:1px solid #333;color:var(--text);border-radius:10px"></textarea>
      <button class="btn">Kirim</button>
    </form>
  </section>`;
}

function Footer(){
  return `<footer style="text-align:center;padding:50px;color:var(--muted)">© 2026 ${DATA.nama}</footer>`;
}

// 4. LOGIC JS: ANIMASI, MENU, DLL
function initJS(){
  // Hamburger
  window.toggleMenu = () => document.getElementById('mobileMenu').classList.toggle('show');

  // Typing
  let i=0,j=0,del=false;
  function type(){
    const el = document.getElementById('typing');
    if(!el) return;
    el.innerText = DATA.job[i].substring(0,j);
    if(!del && j++ === DATA.job[i].length){del=true;setTimeout(type,1500);return}
    if(del && j-- === 0){del=false;i=(i+1)%DATA.job.length}
    setTimeout(type, del?80:120)
  }
  type();

  // Scroll Fade
  const obs = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('show')})},{threshold:0.15});
  document.querySelectorAll('.fade').forEach(el=>obs.observe(el));
}

// JALANKAN
render();
