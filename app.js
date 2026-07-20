const DATA = {
  nama: "Kangsad01",
  role: ["Frontend Developer", "UI Designer", "Creative Coder"],
  about: "I build pixel-perfect, engaging, and accessible digital experiences. Currently focused on React, Next.js, and motion.",
  stats: [
    {number: 15, label: "Projects Done"},
    {number: 3, label: "Years Experience"},
    {number: 10, label: "Happy Clients"}
  ],
  tech: [
    {name: "React", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react-original.svg"},
    {name: "Next.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
    {name: "Tailwind", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
    {name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name: "TypeScript", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
    {name: "GSAP", level: 75, icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"},
    {name: "Framer", level: 70, icon: "https://cdn.worldvectorlogo.com/logos/framer-1.svg"},
    {name: "Figma", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}
  ],
  projects: [
    {title: "Project Alpha", desc: "Dashboard modern dengan data visualisasi real-time", tags: ["React", "Tailwind", "Chart.js"], link: "https://github.com/Kangsad01", img: "https://telegra.ph/file/6ea54729b0ca7cf6a7246.jpg"},
    {title: "Project Beta", desc: "Landing page SaaS dengan animasi smooth", tags: ["Next.js", "Framer", "GSAP"], link: "https://github.com/Kangsad01", img: "https://telegra.ph/file/9fabb4dec8e1f858003ae.jpg"},
    {title: "Project Gamma", desc: "Aplikasi web responsive dengan UI clean", tags: ["JavaScript", "CSS", "API"], link: "https://github.com/Kangsad01", img: "https://telegra.ph/file/dc04e52fac202eeea19d6.jpg"}
  ],
  blog: [
    {title: "Cara Membuat Parallax Scroll di Vanilla JS", date: "20 Apr 2026", desc: "Tutorial lengkap membuat efek parallax tanpa library. Cocok buat portfolio kamu.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500", link: "#"},
    {title: "10 Animasi GSAP yang Wajib Kamu Tau", date: "15 Apr 2026", desc: "Kumpulan animasi GSAP paling keren buat bikin website jadi hidup.", img: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=500", link: "#"},
    {title: "Dark Mode Toggle Pake LocalStorage", date: "10 Apr 2026", desc: "Simpan tema user biar ga reset pas reload. Code cuma 5 baris.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500", link: "#"}
  ],
  testimonials: [
    {name: "Ahmad", job: "CEO Startup", text: "Kerjaannya rapi banget dan hasilnya melebihi ekspektasi. Highly recommended!", avatar: "https://i.pravatar.cc/100?img=1"},
    {name: "Sinta", job: "Product Manager", text: "Komunikasi lancar, deadline tepat waktu. UI/UX nya keren abis.", avatar: "https://i.pravatar.cc/100?img=5"},
    {name: "Riko", job: "Freelancer", text: "Code nya clean dan gampang di maintain. Top developer!", avatar: "https://i.pravatar.cc/100?img=8"}
  ],
  social: {github:"https://github.com/Kangsad01", linkedin:"#", instagram:"https://www.instagram.com/the.sad.boy01"}
}

let theme = localStorage.getItem('theme') || 'dark';

function injectCSS(){
document.head.innerHTML += `<style>
  :root{--bg:#030303;--card:#0A0A0A;--text:#EDEDED;--muted:#888;--p1:#9333ea;--p2:#06b6d4}
  [data-theme="light"]{--bg:#F8F8F8;--card:#FFFFFF;--text:#111;--muted:#666;--p1:#7e22ce;--p2:#0891b2}
  *{margin:0;padding:0;box-sizing:border-box;font-family:'Satoshi',sans-serif;scroll-behavior:smooth;cursor:none}
  body{background:var(--bg);color:var(--text);overflow-x:hidden;transition:0.3s}
 .trail{position:fixed;width:8px;height:8px;border-radius:50%;background:var(--p2);pointer-events:none;z-index:9998;box-shadow:0 0 20px var(--p2);opacity:0.7}
 .loader{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center;transition:1s}
 .loader.hide{opacity:0;pointer-events:none}
 .loader-text{font-size:2rem;font-weight:900;background:linear-gradient(90deg,var(--p1),var(--p2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:pulse 1.5s infinite}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
 .blob{position:fixed;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(147,51,234,0.2) 0%,transparent 70%);filter:blur(120px);z-index:-1;pointer-events:none}
  nav{position:fixed;top:0;width:100%;padding:30px 8%;display:flex;justify-content:space-between;align-items:center;z-index:100;transition:0.4s}
  nav.scrolled{background:rgba(var(--bg-rgb),0.6);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.1)}
 .logo{font-size:28px;font-weight:900;background:linear-gradient(90deg,var(--p1),var(--p2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
 .nav-links{display:flex;gap:30px;list-style:none;align-items:center}
 .nav-links a{color:var(--muted);text-decoration:none;font-weight:500;transition:0.3s;display:flex;align-items:center;gap:5px}
 .nav-links a:hover{color:var(--text)}
 .theme-btn,.pdf-btn{background:rgba(var(--card-rgb),0.5);backdrop-filter:blur(10px);border:1px solid #333;padding:10px 14px;border-radius:10px;cursor:pointer;color:var(--text);font-weight:600;display:flex;align-items:center;gap:8px;transition:0.3s}
 .theme-btn:hover,.pdf-btn:hover{border-color:var(--p2)}
 .hamburger{display:none;flex-direction:column;gap:6px;cursor:pointer;z-index:101}
 .hamburger span{width:28px;height:2px;background:var(--text);transition:0.3s}
 .hamburger.active span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
 .hamburger.active span:nth-child(2){opacity:0}
 .hamburger.active span:nth-child(3){transform:rotate(-45deg) translate(7px,-6px)}
 .mobile-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(5px);z-index:98;opacity:0;pointer-events:none;transition:0.3s}
 .mobile-overlay.show{opacity:1;pointer-events:auto}
 .mobile-menu{position:fixed;top:0;right:-100%;width:75%;max-width:350px;height:100vh;background:rgba(var(--card-rgb),0.8);backdrop-filter:blur(20px);padding:80px 40px;transition:0.5s cubic-bezier(0.77,0,0.175,1);border-left:1px solid rgba(255,255,255,0.1);z-index:99}
 .mobile-menu.show{right:0}
 .mobile-menu a{color:var(--text);text-decoration:none;font-size:1.5rem;display:flex;align-items:center;gap:15px;margin:25px 0;font-weight:600}
  section{padding:160px 8%;min-height:100vh}
 .reveal{opacity:0;transform:translateY(60px);transition:1.2s cubic-bezier(0.16,1,0.3,1)}
 .reveal.show{opacity:1;transform:translateY(0)}
  #home{display:flex;align-items:center;min-height:100vh;gap:50px}
 .hero h1{font-size:5.5rem;font-weight:900;line-height:1.1}
 .gradient{background:linear-gradient(90deg,var(--p1),var(--p2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
 .hero p{color:var(--muted);font-size:1.2rem;margin:30px 0;max-width:600px}
 .btn{padding:16px 32px;border-radius:12px;background:linear-gradient(90deg,var(--p1),var(--p2));color:#fff;border:none;font-weight:700;font-size:1rem;transition:0.3s}
 .btn:hover{transform:scale(1.05);box-shadow:0 0 30px rgba(147,51,234,0.5)}
 .hero-img{position:relative}
 .hero-img img{width:380px;border-radius:30px;box-shadow:0 20px 60px rgba(6,182,212,0.3);transition:transform 0.3s}
 .stats{display:flex;gap:60px;margin-top:60px}
 .stat h3{font-size:3rem;font-weight:900}
 .tech-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:30px;margin-top:60px}
 .tech-card{background:rgba(var(--card-rgb),0.5);backdrop-filter:blur(10px);border:1px solid #333;border-radius:20px;padding:30px;text-align:center;transition:0.4s;perspective:1000px}
 .tech-card:hover{transform:translateY(-10px) rotateX(5deg);border-color:var(--p2);box-shadow:0 20px 40px rgba(6,182,212,0.3)}
 .tech-card img{width:60px;height:60px;margin-bottom:15px;filter:grayscale(1);transition:0.3s}
 .tech-card:hover img{filter:grayscale(0);transform:scale(1.1)}
 .tech-progress{height:6px;background:var(--bg);border-radius:50px;margin-top:15px;overflow:hidden}
 .tech-progress-fill{height:100%;background:linear-gradient(90deg,var(--p1),var(--p2));width:0;transition:width 1.5s}
 .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:40px;margin-top:60px}
 .card{background:rgba(var(--card-rgb),0.5);backdrop-filter:blur(10px);border-radius:24px;padding:25px;border:1px solid #333;transition:0.5s}
 .card:hover{transform:translateY(-10px);border-color:var(--p2);box-shadow:0 0 40px rgba(6,182,212,0.3)}
 .card img{width:100%;height:220px;object-fit:cover;border-radius:16px}
 .tags{display:flex;gap:10px;margin-top:15px;flex-wrap:wrap}
 .tags span{padding:8px 16px;background:var(--bg);border-radius:50px;font-size:0.85rem;color:var(--muted)}
 .blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:40px;margin-top:60px}
 .blog-card{background:rgba(var(--card-rgb),0.5);backdrop-filter:blur(10px);border-radius:20px;overflow:hidden;border:1px solid #333;transition:0.4s}
 .blog-card:hover{transform:translateY(-10px);border-color:var(--p2);box-shadow:0 20px 50px rgba(147,51,234,0.3)}
 .blog-card img{width:100%;height:200px;object-fit:cover}
 .blog-content{padding:25px}
 .blog-date{color:var(--p2);font-size:0.85rem;font-weight:600}
 .blog-card h3{margin:10px 0 15px;font-size:1.3rem}
 .blog-card p{color:var(--muted);line-height:1.7;margin-bottom:20px}
 .blog-link{color:var(--p1);font-weight:700;text-decoration:none;display:flex;align-items:center;gap:8px}
 .testi-card{background:rgba(var(--card-rgb),0.5);backdrop-filter:blur(10px);padding:30px;border-radius:20px;border:1px solid #333}
 .testi-header{display:flex;align-items:center;gap:15px;margin-bottom:20px}
 .testi-header img{width:50px;height:50px;border-radius:50%}
 .socials{display:flex;gap:20px;margin-top:20px}
 .socials a{color:var(--muted)}
 .cursor{position:fixed;width:20px;height:20px;border:2px solid var(--p2);border-radius:50%;pointer-events:none;z-index:9999;transition:0.1s;mix-blend-mode:difference}
 .easter{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:4rem;font-weight:900;display:none;z-index:10000;background:linear-gradient(90deg,var(--p1),var(--p2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  /* SKELETON */
 .skeleton{animation:pulse 1.5s infinite;background:linear-gradient(90deg,#222 25%,#333 50%,#222 75%);background-size:200% 100%;border-radius:12px}
  [data-theme="light"].skeleton{background:linear-gradient(90deg,#eee 25%,#ddd 50%,#eee 75%);background-size:200% 100%}
 .skeleton-text{height:20px;margin:10px 0}
 .skeleton-title{height:40px;width:60%;margin:20px 0}
 .skeleton-card{height:300px}
 .skeleton-img{height:200px;width:100%}
  @media(max-width:1000px){.nav-links{display:none}.hamburger{display:flex}.hero h1{font-size:3.5rem}.cursor{display:none}.trail{display:none}#home{flex-direction:column;text-align:center}.stats{justify-content:center}}
</style>`;
}
injectCSS();

document.documentElement.setAttribute('data-theme', theme);
document.documentElement.style.setProperty('--bg-rgb', theme === 'dark'? '3,3,3' : '248,248,248');
document.documentElement.style.setProperty('--card-rgb', theme === 'dark'? '10,10,10' : '255,255,255');

const app = document.getElementById('app');
app.innerHTML = `<div class="loader" id="loader"><div class="loader-text">${DATA.nama}</div></div><div class="cursor"></div><div class="blob" id="blob"></div><div class="easter" id="easter">🎉 GG EZ 🎉</div><div class="mobile-overlay" id="mobileOverlay" onclick="toggleMenu()"></div><div id="pdf-content">${Skeleton()}</div>`;
init();

function Skeleton(){ return `${Navbar()}<section id="home"><div class="hero"><div class="skeleton skeleton-text" style="width:100px"></div><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text"></div><div class="skeleton skeleton-text" style="width:80%"></div></div><div class="hero-img"><div class="skeleton skeleton-img" style="width:380px;height:380px;border-radius:30px"></div></div></section><section><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text"></div><div class="skeleton skeleton-text"></div></section><section><div class="skeleton skeleton-title"></div><div class="tech-grid">${[1,2,3,4,5,6,7,8].map(()=>`<div class="skeleton skeleton-card"></div>`).join('')}</div></section><section><div class="skeleton skeleton-title"></div><div class="grid">${[1,2,3].map(()=>`<div class="skeleton skeleton-card"></div>`).join('')}</div></section><section><div class="skeleton skeleton-title"></div><div class="blog-grid">${[1,2,3].map(()=>`<div class="skeleton skeleton-card"></div>`).join('')}</div></section>` }

function Navbar(){ return `<nav id="navbar"><div class="logo">K01.</div><ul class="nav-links"><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#tech">Tech</a></li><li><a href="#projects">Work</a></li><li><a href="#blog">Blog</a></li><li><a href="#testimonials">Testi</a></li><li><a href="#contact">Contact</a></li><li><a href="${DATA.social.github}" target="_blank"><i data-lucide="github"></i></a></li><li><button class="pdf-btn" onclick="exportPDF()"><i data-lucide="download"></i> PDF</button></li><li><button class="theme-btn" onclick="toggleTheme()"><i data-lucide="${theme==='dark'?'sun':'moon'}"></i></button></li></ul><div style="display:flex;gap:15px;align-items:center"><button class="pdf-btn" onclick="exportPDF()"><i data-lucide="download"></i></button><button class="theme-btn" onclick="toggleTheme()"><i data-lucide="${theme==='dark'?'sun':'moon'}"></i></button><div class="hamburger" id="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div></div><div class="mobile-menu" id="mobileMenu"><a href="#home" onclick="toggleMenu()"><i data-lucide="home"></i> Home</a><a href="#about" onclick="toggleMenu()"><i data-lucide="user"></i> About</a><a href="#tech" onclick="toggleMenu()"><i data-lucide="code"></i> Tech Stack</a><a href="#projects" onclick="toggleMenu()"><i data-lucide="briefcase"></i> Work</a><a href="#blog" onclick="toggleMenu()"><i data-lucide="book-open"></i> Blog</a><a href="#testimonials" onclick="toggleMenu()"><i data-lucide="message-square"></i> Testi</a><a href="#contact" onclick="toggleMenu()"><i data-lucide="mail"></i> Contact</a><a href="${DATA.social.github}" target="_blank"><i data-lucide="github"></i> Github</a><a href="${DATA.social.instagram}" target="_blank"><i data-lucide="instagram"></i> Instagram</a><a href="#" onclick="exportPDF()"><i data-lucide="download"></i> Export PDF</a></div></nav>` }
function Hero(){ return `<section id="home"><div class="hero reveal"><p style="color:var(--muted)">Hello, I'm</p><h1><span class="gradient" id="typing"></span></h1><p>${DATA.about}</p><div style="display:flex;gap:15px;flex-wrap:wrap"><button class="btn magnetic" onclick="document.getElementById('projects').scrollIntoView()">View My Work</button><button class="btn magnetic" style="background:var(--card);color:var(--text);border:1px solid #333" onclick="window.open('${DATA.social.github}')">Github</button></div><div class="stats">${DATA.stats.map(s=>`<div class="stat"><h3 class="counter" data-target="${s.number}">0</h3><p style="color:var(--muted)">${s.label}</p></div>`).join('')}</div></div><div class="hero-img reveal" id="parallax-img"><img src="https://i.imgur.com/8Km9tLL.png" alt="hero"></div></section>` }
function About(){ return `<section id="about" class="reveal"><h2 style="font-size:3rem">About <span class="gradient">Me</span></h2><p style="color:var(--muted);margin-top:30px;max-width:700px;font-size:1.1rem;line-height:1.8">${DATA.about}</p></section>` }
function TechStack(){ return `<section id="tech" class="reveal"><h2 style="font-size:3rem">Tech <span class="gradient">Stack</span></h2><div class="tech-grid">${DATA.tech.map(t=>`<div class="tech-card magnetic"><img src="${t.icon}" alt="${t.name}"><h4>${t.name}</h4><div class="tech-progress"><div class="tech-progress-fill" data-level="${t.level}"></div></div></div>`).join('')}</div></section>` }
function Projects(){ return `<section id="projects" class="reveal"><h2 style="font-size:3rem">Selected <span class="gradient">Work</span></h2><div class="grid">${DATA.projects.map(p=>`<div class="card magnetic" onclick="window.open('${p.link}')"><img src="${p.img}"><h3 style="margin:20px 0 10px">${p.title}</h3><p style="color:var(--muted)">${p.desc}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>`).join('')}</div></section>` }
function Blog(){ return `<section id="blog" class="reveal"><h2 style="font-size:3rem">Latest <span class="gradient">Articles</span></h2><div class="blog-grid">${DATA.blog.map(b=>`<div class="blog-card magnetic"><img src="${b.img}" alt="${b.title}"><div class="blog-content"><p class="blog-date">${b.date}</p><h3>${b.title}</h3><p>${b.desc}</p><a href="${b.link}" class="blog-link">Read More <i data-lucide="arrow-right"></i></a></div></div>`).join('')}</div></section>` }
function Testimonials(){ return `<section id="testimonials" class="reveal"><h2 style="font-size:3rem">What Clients <span class="gradient">Say</span></h2><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">${DATA.testimonials.map(t=>`<div class="testi-card magnetic"><div class="testi-header"><img src="${t.avatar}"><div><h4>${t.name}</h4><p style="color:var(--muted);font-size:0.9rem">${t.job}</p></div></div><p style="color:var(--muted);line-height:1.7">"${t.text}"</p></div>`).join('')}</div></section>` }
function Contact(){ return `<section id="contact" class="reveal"><h2 style="font-size:3rem">Get In <span class="gradient">Touch</span></h2><form id="contact-form" action="https://formspree.io/f/xwvgbaov" method="POST" style="max-width:600px;margin-top:40px"><input name="name" placeholder="Nama" required style="width:100%;padding:16px;margin-bottom:20px;background:var(--card);border:1px solid #333;color:var(--text);border-radius:12px"><input name="email" type="email" placeholder="Email" required style="width:100%;padding:16px;margin-bottom:20px;background:var(--card);border:1px solid #333;color:var(--text);border-radius:12px"><textarea name="message" placeholder="Pesan" rows="5" required style="width:100%;padding:16px;margin-bottom:20px;background:var(--card);border:1px solid #333;color:var(--text);border-radius:12px"></textarea><button type="submit" class="btn magnetic" id="submit-btn">Kirim Pesan</button><p id="form-status" style="margin-top:15px;color:var(--muted)"></p></form></section>` }
function Footer(){ return `<footer style="text-align:center;padding:60px 8%;border-top:1px solid #333;color:var(--muted)"><div class="socials" style="justify-content:center"><a href="${DATA.social.github}" target="_blank"><i data-lucide="github"></i></a><a href="${DATA.social.instagram}" target="_blank"><i data-lucide="instagram"></i></a><a href="${DATA.social.linkedin}" target="_blank"><i data-lucide="linkedin"></i></a></div><p style="margin-top:20px">© 2026 ${DATA.nama}. Crafted with ❤️</p></footer>` }

function init(){
  const app = document.getElementById('app');
if(!app) return; // biar ga error kalau ga ketemu
  lucide.createIcons();
  setTimeout(() => {
    document.getElementById('pdf-content').innerHTML = `${Navbar()}${Hero()}${About()}${TechStack()}${Projects()}${Blog()}${Testimonials()}${Contact()}${Footer()}`;
    lucide.createIcons(); runAllObservers();
  }, 1200);

  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']; let konamiIndex = 0;
  document.addEventListener('keydown', e => { if(e.key === konami[konamiIndex]){ konamiIndex++; if(konamiIndex === konami.length){ document.getElementById('easter').style.display='block'; setTimeout(()=>document.getElementById('easter').style.display='none',2000); konamiIndex=0; } else { konamiIndex=0; } })
  window.toggleMenu = () => { document.getElementById('mobileMenu').classList.toggle('show'); document.getElementById('mobileOverlay').classList.toggle('show'); document.getElementById('hamburger').classList.toggle('active'); document.body.style.overflow = document.body.style.overflow === 'hidden'? 'auto' : 'hidden'; }

  const ga = document.createElement('script'); ga.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; document.head.appendChild(ga); window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXX');
  document.addEventListener('mousemove', e => { const trail = document.createElement('div'); trail.className = 'trail'; trail.style.left = e.clientX + 'px'; trail.style.top = e.clientY + 'px'; document.body.appendChild(trail); setTimeout(() => trail.remove(), 800); })
  window.toggleTheme = () => { theme = theme === 'dark'? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', theme); document.documentElement.style.setProperty('--bg-rgb', theme === 'dark'? '3,3,3' : '248,248,248'); document.documentElement.style.setProperty('--card-rgb', theme === 'dark'? '10,10,10' : '255,255,255'); localStorage.setItem('theme', theme); location.reload(); }
  window.exportPDF = () => { const element = document.getElementById('pdf-content'); const opt = { margin: 0.5, filename: `${DATA.nama}-Portfolio.pdf`, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }; html2pdf().set(opt).from(element).save(); }
  window.addEventListener('load', ()=>{ setTimeout(()=>document.getElementById('loader').classList.add('hide'), 1500) })
  const parallaxImg = document.getElementById('parallax-img'); window.addEventListener('scroll', () => { const scrollY = window.scrollY; if(parallaxImg){ parallaxImg.style.transform = `translateY(${scrollY * 0.2}px) rotateX(${scrollY * 0.05}deg)`; } });
  const cursor = document.querySelector('.cursor'); document.addEventListener('mousemove', e => { cursor.style.left = e.clientX - 10 + 'px'; cursor.style.top = e.clientY - 10 + 'px'; })
  document.querySelectorAll('.magnetic').forEach(el=>{ el.addEventListener('mousemove', e => { const rect = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX-rect.left-rect.width/2)/10}px, ${(e.clientY-rect.top-rect.height/2)/10}px)` }); el.addEventListener('mouseleave', ()=>el.style.transform='translate(0,0)') })
  const blob = document.getElementById('blob'); document.addEventListener('mousemove', e=>{ blob.style.left = e.clientX - 300 + 'px'; blob.style.top = e.clientY - 300 + 'px'; })
  window.addEventListener('scroll', ()=>{ document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50) })
  let i=0,j=0,del=false; function type(){ const el = document.getElementById('typing'); if(!el) return; el.innerText = DATA.role[i].substring(0,j); if(!del && j++ === DATA.role[i].length){del=true;setTimeout(type,2000);return} if(del && j-- === 0){del=false;i=(i+1)%DATA.role.length} setTimeout(type, del?60:100) } type();

  const form = document.getElementById('contact-form'); const status = document.getElementById('form-status'); if(form){ form.addEventListener('submit', async (e) => { e.preventDefault(); const data = new FormData(form); const btn = document.getElementById('submit-btn'); btn.innerText = "Mengirim..."; btn.disabled = true; const response = await fetch(form.action, { method: form.method, body: data, headers: { 'Accept': 'application/json' } }); if (response.ok) { status.innerText = "✅ Pesan terkirim! Aku bakal reply via email."; status.style.color = "var(--p2)"; form.reset(); } else { status.innerText = "❌ Gagal kirim. Coba lagi ya."; status.style.color = "red"; } btn.innerText = "Kirim Pesan"; btn.disabled = false; }); }
}

function runAllObservers(){
  const techObs = new IntersectionObserver((entries)=>{ entries.forEach(entry=>{ if(entry.isIntersecting){ document.querySelectorAll('.tech-progress-fill').forEach(bar=>{ bar.style.width = bar.getAttribute('data-level') + '%' }) } }) },{threshold:0.3}); if(document.getElementById('tech')) techObs.observe(document.getElementById('tech'));
  const counters = document.querySelectorAll('.counter'); const counterObs = new IntersectionObserver((entries)=>{ entries.forEach(entry=>{ if(entry.isIntersecting){ const counter = entry.target; const target = +counter.getAttribute('data-target'); let count = 0; const inc = target / 100; const update = () => { count += inc; if(count < target){ counter.innerText = Math.ceil(count); setTimeout(update, 20) } else { counter.innerText = target + '+' } }; update(); counterObs.unobserve(counter); } }) },{threshold:0.5}); counters.forEach(c=>counterObs.observe(c));
  const obs = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('show')})},{threshold:0.1}); document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}
