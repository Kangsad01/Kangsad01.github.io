const DATA = {
  nama: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder"],
  about: "I build pixel-perfect, engaging, and accessible digital experiences. Currently focused on React, Next.js, and motion.",
  projects: [
    {title: "Project Alpha", desc: "Dashboard modern dengan data visualisasi real-time", tags: ["React", "Tailwind", "Chart.js"], link: "https://github.com/Kangsad01", img: "https://telegra.ph/file/6ea54729b0ca7cf6a7246.jpg"},
    {title: "Project Beta", desc: "Landing page SaaS dengan animasi smooth", tags: ["Next.js", "Framer", "GSAP"], link: "https://github.com/Kangsad01", img: "https://telegra.ph/file/9fabb4dec8e1f858003ae.jpg"},
    {title: "Project Gamma", desc: "Aplikasi web responsive dengan UI clean", tags: ["JavaScript", "CSS", "API"], link: "https://github.com/Kangsad01", img: "https://telegra.ph/file/dc04e52fac202eeea19d6.jpg"}
  ],
  testimonials: [
    {name: "Ahmad", job: "CEO Startup", text: "Kerjaannya rapi banget dan hasilnya melebihi ekspektasi. Highly recommended!", avatar: "https://i.pravatar.cc/100?img=1"},
    {name: "Sinta", job: "Product Manager", text: "Komunikasi lancar, deadline tepat waktu. UI/UX nya keren abis.", avatar: "https://i.pravatar.cc/100?img=5"},
    {name: "Riko", job: "Freelancer", text: "Code nya clean dan gampang di maintain. Top developer!", avatar: "https://i.pravatar.cc/100?img=8"}
  ],
  social: {github:"https://github.com/Kangsad01", linkedin:"#", instagram:"#"}
}

let theme = localStorage.getItem('theme') || 'dark';

function injectCSS(){
document.head.innerHTML += `<style>
  :root{--bg:#030303;--card:#0A0A0A;--text:#EDEDED;--muted:#888;--p1:#9333ea;--p2:#06b6d4}
  [data-theme="light"]{--bg:#F8F8F8;--card:#FFFFFF;--text:#111;--muted:#666;--p1:#7e22ce;--p2:#0891b2}
  *{margin:0;padding:0;box-sizing:border-box;font-family:'Satoshi',sans-serif;scroll-behavior:smooth;cursor:none}
  body{background:var(--bg);color:var(--text);overflow-x:hidden;transition:0.3s}
.loader{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center;transition:1s}
.loader.hide{opacity:0;pointer-events:none}
.loader-text{font-size:2rem;font-weight:900;background:linear-gradient(90deg,var(--p1),var(--p2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:pulse 1.5s infinite}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
.blob{position:fixed;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(147,51,234,0.2) 0%,transparent 70%);filter:blur(120px);z-index:-1;pointer-events:none}
  nav{position:fixed;top:0;width:100%;padding:30px 8%;display:flex;justify-content:space-between;align-items:center;z-index:100;transition:0.3s}
  nav.scrolled{background:rgba(var(--bg-rgb),0.7);backdrop-filter:blur(20px);padding:20px 8%}
.logo{font-size:28px;font-weight:900;background:linear-gradient(90deg,var(--p1),var(--p2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;gap:30px;list-style:none;align-items:center}
.nav-links a{color:var(--muted);text-decoration:none;font-weight:500;transition:0.3s;display:flex;align-items:center;gap:5px}
.nav-links a:hover{color:var(--text)}
.theme-btn,.pdf-btn{background:var(--card);border:1px solid #333;padding:10px 14px;border-radius:10px;cursor:pointer;color:var(--text);font-weight:600;display:flex;align-items:center;gap:8px}
.hamburger{display:none;flex-direction:column;gap:6px;cursor:pointer}
.hamburger span{width:28px;height:2px;background:var(--text);transition:0.3s}
.mobile-menu{position:fixed;top:0;right:-100%;width:70%;height:100vh;background:var(--card);padding:100px 40px;transition:0.5s;border-left:1px solid #333;z-index:99}
.mobile-menu.show{right:0}
.mobile-menu a{color:var(--text);text-decoration:none;font-size:1.5rem;display:flex;align-items:center;gap:10px;margin:20px 0}
  section{padding:160px 8%;min-height:100vh}
.reveal{opacity:0;transform:translateY(60px);transition:1.2s cubic-bezier(0.16,1,0.3,1)}
.reveal.show{opacity:1;transform:translateY(0)}
  #home{display:flex;align-items:center;min-height:100vh;gap:50px}
.hero h1{font-size:5.5rem;font-weight:900;line-height:1.1}
.gradient{background:linear-gradient(90deg,var(--p1),var(--p2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{color:var(--muted);font-size:1.2rem;margin:30px 0;max-width:600px}
.btn{padding:16px 32px;border-radius:12px;background:linear-gradient(90deg,var(--p1),var(--p2));color:#fff;border:none;font-weight:700;font-size:1rem;transition:0.3s}
.btn:hover{transform:scale(1.05)}
.hero-img{position:relative}
.hero-img img{width:380px;border-radius:30px;box-shadow:0 20px 60px rgba(6,182,212,0.3);transition:transform 0.3s}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:40px;margin-top:60px}
.card{background:var(--card);border-radius:24px;padding:25px;border:1px solid #333;transition:0.5s}
.card:hover{transform:translateY(-10px);border-color:var(--p2);box-shadow:0 20px 50px rgba(6,182,212,0.2)}
.card img{width:100%;height:220px;object-fit:cover;border-radius:16px}
.tags{display:flex;gap:10px;margin-top:15px;flex-wrap:wrap}
.tags span{padding:8px 16px;background:var(--bg);border-radius:50px;font-size:0.85rem;color:var(--muted)}
.testi-card{background:var(--card);padding:30px;border-radius:20px;border:1px solid #333}
.testi-header{display:flex;align-items:center;gap:15px;margin-bottom:20px}
.testi-header img{width:50px;height:50px;border-radius:50%}
.socials{display:flex;gap:20px;margin-top:20px}
.socials a{color:var(--muted)}
.cursor{position:fixed;width:20px;height:20px;border:2px solid var(--p2);border-radius:50%;pointer-events:none;z-index:9999;transition:0.1s;mix-blend-mode:difference}
 @media(max-width:1000px){.nav-links{display:none}.hamburger{display:flex}.hero h1{font-size:3.5rem}.cursor{display:none}#home{flex-direction:column;text-align:center}}
</style>`;
}
injectCSS();

document.documentElement.setAttribute('data-theme', theme);
document.documentElement.style.setProperty('--bg-rgb', theme === 'dark'? '3,3,3' : '248,248,248');

const app = document.getElementById('app');
app.innerHTML = `
  <div class="loader" id="loader"><div class="loader-text">${DATA.nama}</div></div>
  <div class="cursor"></div>
  <div class="blob" id="blob"></div>
  <div id="pdf-content">
  ${Navbar()}
  ${Hero()}
  ${About()}
  ${Projects()}
  ${Testimonials()}
  ${Contact()}
  ${Footer()}
  </div>
`;
init();

function Navbar(){
  return `<nav id="navbar">
    <div class="logo">K01.</div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li><li><a href="#about">About</a></li>
      <li><a href="#projects">Work</a></li><li><a href="#testimonials">Testi</a></li><li><a href="#contact">Contact</a></li>
      <li><a href="${DATA.social.github}" target="_blank"><i data-lucide="github"></i> Github</a></li>
      <li><button class="pdf-btn" onclick="exportPDF()"><i data-lucide="download"></i> PDF</button></li>
      <li><button class="theme-btn" onclick="toggleTheme()"><i data-lucide="${theme==='dark'?'sun':'moon'}"></i></button></li>
    </ul>
    <div style="display:flex;gap:15px;align-items:center">
      <button class="pdf-btn" onclick="exportPDF()"><i data-lucide="download"></i></button>
      <button class="theme-btn" onclick="toggleTheme()"><i data-lucide="${theme==='dark'?'sun':'moon'}"></i></button>
      <div class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="#home" onclick="toggleMenu()">Home</a>
      <a href="#about" onclick="toggleMenu()">About</a>
      <a href="#projects" onclick="toggleMenu()">Work</a>
      <a href="#testimonials" onclick="toggleMenu()">Testi</a>
      <a href="#contact" onclick="toggleMenu()">Contact</a>
      <a href="${DATA.social.github}" target="_blank"><i data-lucide="github"></i> Github</a>
      <a href="#" onclick="exportPDF()"><i data-lucide="download"></i> Export PDF</a>
    </div>
  </nav>`
}
function Hero(){
  return `<section id="home">
    <div class="hero reveal">
      <p style="color:var(--muted)">Hello, I'm</p>
      <h1><span class="gradient" id="typing"></span></h1>
      <p>${DATA.about}</p>
      <div style="display:flex;gap:15px">
        <button class="btn magnetic" onclick="document.getElementById('projects').scrollIntoView()">View My Work</button>
        <button class="btn magnetic" style="background:var(--card);color:var(--text);border:1px solid #333" onclick="window.open('${DATA.social.github}')">Github</button>
      </div>
    </div>
    <div class="hero-img reveal" id="parallax-img">
      <img src="https://i.imgur.com/8Km9tLL.png" alt="hero">
    </div>
  </section>`
}
function About(){ return `<section id="about" class="reveal"><h2 style="font-size:3rem">About <span class="gradient">Me</span></h2><p style="color:var(--muted);margin-top:30px;max-width:700px;font-size:1.1rem;line-height:1.8">${DATA.about}</p></section>` }
function Projects(){ return `<section id="projects" class="reveal"><h2 style="font-size:3rem">Selected <span class="gradient">Work</span></h2><div class="grid">${DATA.projects.map(p=>`<div class="card magnetic" onclick="window.open('${p.link}')"><img src="${p.img}"><h3 style="margin:20px 0 10px">${p.title}</h3><p style="color:var(--muted)">${p.desc}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>`).join('')}</div></section>` }
function Testimonials(){ return `<section id="testimonials" class="reveal"><h2 style="font-size:3rem">What Clients <span class="gradient">Say</span></h2><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">${DATA.testimonials.map(t=>`<div class="testi-card magnetic"><div class="testi-header"><img src="${t.avatar}"><div><h4>${t.name}</h4><p style="color:var(--muted);font-size:0.9rem">${t.job}</p></div></div><p style="color:var(--muted);line-height:1.7">"${t.text}"</p></div>`).join('')}</div></section>` }
function Contact(){ return `<section id="contact" class="reveal"><h2 style="font-size:3rem">Get In <span class="gradient">Touch</span></h2><form onsubmit="alert('Pesan Terkirim!');return false" style="max-width:600px;margin-top:40px"><input placeholder="Nama" required style="width:100%;padding:16px;margin-bottom:20px;background:var(--card);border:1px solid #333;color:var(--text);border-radius:12px"><input type="email" placeholder="Email" required style="width:100%;padding:16px;margin-bottom:20px;background:var(--card);border:1px solid #333;color:var(--text);border-radius:12px"><textarea placeholder="Pesan" rows="5" required style="width:100%;padding:16px;margin-bottom:20px;background:var(--card);border:1px solid #333;color:var(--text);border-radius:12px"></textarea><button class="btn magnetic">Kirim Pesan</button></form></section>` }
function Footer(){
  return `<footer style="text-align:center;padding:60px 8%;border-top:1px solid #333;color:var(--muted)">
    <div class="socials" style="justify-content:center">
      <a href="${DATA.social.github}" target="_blank"><i data-lucide="github"></i></a>
      <a href="${DATA.social.linkedin}" target="_blank"><i data-lucide="linkedin"></i></a>
      <a href="${DATA.social.instagram}" target="_blank"><i data-lucide="instagram"></i></a>
    </div>
    <p style="margin-top:20px">© 2026 ${DATA.nama}. Crafted with ❤️</p>
  </footer>`
}

// LOGIC
function init(){
  lucide.createIcons();

  window.toggleTheme = () => {
    theme = theme === 'dark'? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.setProperty('--bg-rgb', theme === 'dark'? '3,3,3' : '248,248,248');
    localStorage.setItem('theme', theme);
    location.reload();
  }

  // EXPORT PDF 1 KLIK
  window.exportPDF = () => {
    const element = document.getElementById('pdf-content');
    const opt = {
      margin: 0.5,
      filename: `${DATA.nama}-Portfolio.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  }

  window.addEventListener('load', ()=>{
    setTimeout(()=>document.getElementById('loader').classList.add('hide'), 1500)
  })

  const parallaxImg = document.getElementById('parallax-img');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(parallaxImg){
      parallaxImg.style.transform = `translateY(${scrollY * 0.2}px) rotateX(${scrollY * 0.05}deg)`;
    }
  });

  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  })
  document.querySelectorAll('.magnetic').forEach(el=>{
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX-rect.left-rect.width/2)/10}px, ${(e.clientY-rect.top-rect.height/2)/10}px)`
    })
    el.addEventListener('mouseleave', ()=>el.style.transform='translate(0,0)')
  })

  const blob = document.getElementById('blob');
  document.addEventListener('mousemove', e=>{
    blob.style.left = e.clientX - 300 + 'px';
    blob.style.top = e.clientY - 300 + 'px';
  })

  window.addEventListener('scroll', ()=>{
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50)
  })
  window.toggleMenu = ()=>document.getElementById('mobileMenu').classList.toggle('show');

  let i=0,j=0,del=false;
  function type(){
    const el = document.getElementById('typing');
    if(!el) return;
    el.innerText = DATA.role[i].substring(0,j);
    if(!del && j++ === DATA.role[i].length){del=true;setTimeout(type,2000);return}
    if(del && j-- === 0){del=false;i=(i+1)%DATA.role.length}
    setTimeout(type, del?60:100)
  }
  type();

  const obs = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('show')})},{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}
