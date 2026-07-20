// ========== 1. DATA KAMU ==========
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
    {name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript-original.svg"},
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
    {title: "Cara Membuat Parallax Scroll di Vanilla JS", date: "20 Apr 2026", desc: "Tutorial lengkap membuat efek parallax tanpa library.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500", link: "#"},
    {title: "10 Animasi GSAP yang Wajib Kamu Tau", date: "15 Apr 2026", desc: "Kumpulan animasi GSAP paling keren buat bikin website jadi hidup.", img: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=500", link: "#"},
    {title: "Dark Mode Toggle Pake LocalStorage", date: "10 Apr 2026", desc: "Simpan tema user biar ga reset pas reload.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500", link: "#"}
  ],
  testimonials: [
    {name: "Ahmad", job: "CEO Startup", text: "Kerjaannya rapi banget dan hasilnya melebihi ekspektasi.", avatar: "https://i.pravatar.cc/100?img=1"},
    {name: "Sinta", job: "Product Manager", text: "Komunikasi lancar, deadline tepat waktu. UI/UX nya keren abis.", avatar: "https://i.pravatar.cc/100?img=5"}
  ],
  social: {github:"https://github.com/Kangsad01", linkedin:"#", instagram:"https://www.instagram.com/the.sad.boy01"}
}

let theme = localStorage.getItem('theme') || 'dark';

// ========== 2. CSS ==========
function injectCSS(){
  const css = `
  :root{--bg:#030303;--text:#f5f5f5;--muted:#a0a0a0;--card:#111;--accent:#9333ea;--accent2:#06b6d4;--border:rgba(255,255,255,0.1)}
  [data-theme='light']{--bg:#f5f5f5;--text:#030303;--muted:#525252;--card:#fff;--border:rgba(0,0,0,0.1)}
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Satoshi',sans-serif;background:var(--bg);color:var(--text);transition:background.3s,color.3s;overflow-x:hidden}
  #app{opacity:0;transition:opacity.5s}
  #app.loaded{opacity:1}
 .loader{position:fixed;inset:0;background:var(--bg);z-index:9999;display:flex;align-items:center;justify-content:center;transition:opacity.5s}
 .loader.hidden{opacity:0;pointer-events:none}
 .loader-text{font-size:2rem;font-weight:900;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  nav{position:fixed;top:0;width:100%;padding:1.5rem 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(3,3,3,0.5);backdrop-filter:blur(10px);z-index:1000;border-bottom:1px solid var(--border)}
 .logo{display:flex;align-items:center;gap:.5rem;font-weight:900;font-size:1.2rem}
 .nav-links{display:flex;gap:2rem;list-style:none}
 .nav-links a{color:var(--muted);text-decoration:none;transition:.3s}
 .nav-links a:hover{color:var(--text)}
 .theme-toggle{background:none;border:1px solid var(--border);color:var(--text);padding:.5rem;border-radius:50%;cursor:pointer}
 .hamburger{display:none;background:none;border:none;color:var(--text);cursor:pointer}
  section{padding:8rem 5%;min-height:100vh;display:flex;flex-direction:column;justify-content:center}
 .section-title{font-size:2.5rem;font-weight:900;text-align:center;margin-bottom:3rem}
 .btn{padding:.8rem 2rem;border-radius:12px;text-decoration:none;font-weight:700;transition:.3s;border:1px solid var(--border);display:inline-flex;align-items:center;gap:.5rem}
 .btn-primary{background:linear-gradient(90deg,var(--accent),var(--accent2));color:#fff}
 .hero{position:relative;text-align:center}
 .hero-bg{position:absolute;inset:0;z-index:-1;opacity:.3}
 .hero-title{font-size:4rem;font-weight:900;line-height:1.1}
 .gradient-text{background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
 .hero-subtitle{font-size:1.5rem;color:var(--muted);margin:1rem 0}
 .hero-buttons{display:flex;gap:1rem;justify-content:center;margin:2rem 0}
 .stats{display:flex;justify-content:center;gap:3rem;margin-top:4rem}
 .stat-card{text-align:center}
 .stat-number{font-size:3rem;font-weight:900}
 .about-content{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}
 .about-img{width:100%;border-radius:20px}
 .tech-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}
 .tech-card{background:var(--card);padding:1.5rem;border-radius:16px;border:1px solid var(--border)}
 .tech-header{display:flex;align-items:center;gap:1rem;margin-bottom:1rem}
 .tech-icon{width:32px;height:32px}
 .progress-bar{height:8px;background:var(--border);border-radius:10px;overflow:hidden}
 .progress-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));width:0;transition:width 1.5s ease-out}
 .project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}
 .project-card{background:var(--card);border-radius:20px;overflow:hidden;border:1px solid var(--border)}
 .project-img{width:100%;height:200px;object-fit:cover}
 .project-content{padding:1.5rem}
 .project-tags{display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0}
 .tag{background:rgba(147,51,234,0.2);color:var(--accent);padding:.3rem.8rem;border-radius:20px;font-size:.8rem}
 .blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}
 .blog-card{background:var(--card);border-radius:20px;overflow:hidden;border:1px solid var(--border)}
 .blog-img{width:100%;height:200px;object-fit:cover}
 .blog-content{padding:1.5rem}
 .blog-date{color:var(--muted);font-size:.9rem}
 .testimonial-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}
 .testimonial-card{background:var(--card);padding:2rem;border-radius:20px;border:1px solid var(--border)}
 .testimonial-header{display:flex;align-items:center;gap:1rem;margin-bottom:1rem}
 .testimonial-avatar{width:50px;height:50px;border-radius:50%}
 .contact-wrapper{display:grid;grid-template-columns:1fr 1fr;gap:3rem}
 .contact-form{display:flex;flex-direction:column;gap:1rem}
 .contact-form input,.contact-form textarea{padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:inherit}
  footer{text-align:center;padding:3rem 5%;border-top:1px solid var(--border)}
 .social-links{display:flex;justify-content:center;gap:1.5rem;margin:1rem 0}
 .social-links a{color:var(--muted)}
 .reveal{opacity:0;transform:translateY(30px);transition:all.8s ease-out}
 .reveal.active{opacity:1;transform:translateY(0)}
  @media(max-width:768px){.nav-links{display:none}.hamburger{display:block}.about-content,.contact-wrapper{grid-template-columns:1fr}.hero-title{font-size:2.5rem}}
  `;
  const style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
}

// ========== 3. COMPONENTS ==========
function Skeleton(){
  return `<nav id="navbar"></nav><main><section id="hero"></section><section id="about"></section><section id="tech"></section><section id="projects"></section><section id="blog"></section><section id="testimonials"></section><section id="contact"></section></main><footer id="footer"></footer>`;
}

function Navbar(){
  return `<nav id="navbar"><div class="logo"><svg width="35" height="35" viewBox="0 0 100 100"><defs><linearGradient id="logoGrad" x1="0" y1="0" x2="100" y2="100"><stop offset="0" stop-color="#9333ea"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs><rect width="100" height="100" rx="20" fill="var(--card)"/><text x="50" y="65" font-size="50" font-family="Satoshi" font-weight="900" text-anchor="middle" fill="url(#logoGrad)">K01</text></svg><span>${DATA.nama}</span></div><ul class="nav-links"><li><a href="#hero">Home</a></li><li><a href="#about">About</a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li></ul><div class="nav-actions"><button class="theme-toggle" id="theme-toggle"><i data-lucide="sun"></i></button><button class="hamburger" id="hamburger"><i data-lucide="menu"></i></button></div></nav>`;
}

function Hero(){
  return `<section id="hero" class="hero"><canvas id="hero-bg" class="hero-bg"></canvas><h1 class="hero-title">I build <span id="role-text" class="gradient-text"></span></h1><p class="hero-subtitle">${DATA.about}</p><div class="hero-buttons"><a href="#projects" class="btn btn-primary">View Work <i data-lucide="arrow-right"></i></a><button class="btn" id="download-cv"><i data-lucide="download"></i> Download CV</button></div><div class="stats">${DATA.stats.map(s=>`<div class="stat-card"><div class="stat-number" data-target="${s.number}">0</div><div>${s.label}</div></div>`).join('')}</div></section>`;
}

function About(){ return `<section id="about" class="reveal"><h2 class="section-title">About Me</h2><div class="about-content"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500" class="about-img"/><div><p>${DATA.about}</p></div></div></section>`; }
function TechStack(){ return `<section id="tech" class="reveal"><h2 class="section-title">Tech Stack</h2><div class="tech-grid">${DATA.tech.map(t=>`<div class="tech-card"><div class="tech-header"><img src="${t.icon}" class="tech-icon"/><h3>${t.name}</h3></div><div class="progress-bar"><div class="progress-fill" data-level="${t.level}"></div></div></div>`).join('')}</div></section>`; }
function Projects(){ return `<section id="projects" class="reveal"><h2 class="section-title">Featured Projects</h2><div class="project-grid">${DATA.projects.map(p=>`<div class="project-card"><img src="${p.img}" class="project-img"/><div class="project-content"><h3>${p.title}</h3><p>${p.desc}</p><div class="project-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><a href="${p.link}" class="btn">View Project</a></div></div>`).join('')}</div></section>`; }
function Blog(){ return `<section id="blog" class="reveal"><h2 class="section-title">Latest Articles</h2><div class="blog-grid">${DATA.blog.map(b=>`<div class="blog-card"><img src="${b.img}" class="blog-img"/><div class="blog-content"><p class="blog-date">${b.date}</p><h3>${b.title}</h3><p>${b.desc}</p></div></div>`).join('')}</div></section>`; }
function Testimonials(){ return `<section id="testimonials" class="reveal"><h2 class="section-title">What Clients Say</h2><div class="testimonial-grid">${DATA.testimonials.map(t=>`<div class="testimonial-card"><div class="testimonial-header"><img src="${t.avatar}" class="testimonial-avatar"/><div><h4>${t.name}</h4><p>${t.job}</p></div></div><p>"${t.text}"</p></div>`).join('')}</div></section>`; }
function Contact(){ return `<section id="contact" class="reveal"><h2 class="section-title">Get In Touch</h2><div class="contact-wrapper"><div><h3>Let's work together</h3><p>I'm always open to discussing new projects or creative ideas.</p></div><form class="contact-form" action="https://formspree.io/f/xqkgyzab" method="POST"><input name="name" placeholder="Your Name" required><input name="email" type="email" placeholder="Your Email" required><textarea name="message" placeholder="Your Message" rows="5" required></textarea><button type="submit" class="btn btn-primary">Send Message</button></form></div></section>`; }
function Footer(){ return `<footer id="footer"><div class="social-links"><a href="${DATA.social.github}"><i data-lucide="github"></i></a><a href="${DATA.social.instagram}"><i data-lucide="instagram"></i></a></div><p>© 2026 ${DATA.nama}. All rights reserved.</p></footer>`; }

// ========== 4. LOGIC ==========
function runAllObservers(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('active');
        entry.target.querySelectorAll('.progress-fill').forEach(bar=>{
          bar.style.width = bar.dataset.level + '%';
        });
        entry.target.querySelectorAll('.stat-number').forEach(num=>{
          let target = +num.dataset.target;
          let count = 0;
          const timer = setInterval(()=>{
            count++;
            num.innerText = count;
            if(count >= target) clearInterval(timer);
          }, 50);
        });
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.2});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}

function init(){
  const app = document.getElementById('app');
  if(!app) return;
  app.innerHTML = Navbar() + Hero() + About() + TechStack() + Projects() + Blog() + Testimonials() + Contact() + Footer();
  lucide.createIcons();
  runAllObservers();
  
  document.getElementById('theme-toggle').onclick = () => {
    theme = theme === 'dark'? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  
  document.getElementById('download-cv').onclick = () => {
    html2pdf().from(document.getElementById('pdf-content')).save('CV-Kangsad01.pdf');
  };
  
  let i = 0;
  setInterval(()=>{
    document.getElementById('role-text').innerText = DATA.role[i];
    i = (i + 1) % DATA.role.length;
  }, 2000);
  
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hidden');
    app.classList.add('loaded');
  }, 1000);
}

// ========== 5. JALANIN ==========
injectCSS();
document.documentElement.setAttribute('data-theme', theme);
document.getElementById('app').innerHTML = `<div class="loader" id="loader"><div class="loader-text">${DATA.nama}</div></div><div id="pdf-content">${Skeleton()}</div>`;
init();
