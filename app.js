const DATA = {
  nama: "Kangsad01",
  githubs: ["Kangsad01", "sadteams"],
  role: ["WhatsApp Bot Developer", "Backend Engineer", "Automation Expert"],
  about: "Aku suka bikin bot dan tools yang bener-bener dipake orang. Fokus di automation, database, dan UI yang clean.",
  foto: "https://avatars.githubusercontent.com/Kangsad01",
  email: "kangsad01@gmail.com",
  stats: [{number: 20, label: "Repositories"}, {number: 3, label: "Years Coding"}, {number: 100, label: "Bot Users"}],
 tech: [
  {name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
  {name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
  {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
  {name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"}
],
  projects: []
}

function mouseGlow(){
  const glow = document.createElement('div');
  glow.id='glow';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', function(e){
    glow.style.left = (e.clientX - 200) + 'px';
    glow.style.top = (e.clientY - 200) + 'px';
  })
}

function magneticButtons(){
  document.querySelectorAll('.magnetic-btn').forEach(function(btn){
    btn.addEventListener('mousemove', function(e){
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width/2;
      const y = e.clientY - rect.top - rect.height/2;
      btn.style.transform = 'translate(' + (x*0.3) + 'px, ' + (y*0.3) + 'px)';
    });
    btn.addEventListener('mouseleave', function(){
      btn.style.transform = 'translate(0,0)'
    });
  })
}

function terminalType(){
  const lines = ['git clone https://github.com/Kangsad01','npm install && npm run dev','Building amazing things...','Portfolio loaded successfully ✓'];
  const el = document.getElementById('terminal-text');
  if(!el) return;
  let i=0, j=0;
  function type(){
    if(j < lines[i].length){
      el.innerHTML += lines[i][j++];
      setTimeout(type, 50);
    } else {
      el.innerHTML += '<br>';
      i++; j=0;
      if(i < lines.length) setTimeout(type, 800);
    }
  }
  type();
}

async function fetchAllProjects(){
  const projectsContainer = document.getElementById('projects-grid');
  if(!projectsContainer) return;
  projectsContainer.innerHTML = '<p class="loading">Loading projects...</p>';
  let allRepos = [];
  for(const user of DATA.githubs){
    try{
      const res = await fetch('https://api.github.com/users/' + user + '/repos?sort=updated&per_page=12');
      const repos = await res.json();
      const mapped = repos.map(function(repo){
        return {
          title: repo.name.toUpperCase(),
          desc: repo.description || "No description. Click to view code.",
          img: 'https://opengraph.githubassets.com/1/' + user + '/' + repo.name,
          link: repo.html_url
        }
      });
      allRepos = allRepos.concat(mapped);
    }catch(e){console.log(e)}
  }
  const projectHTML = allRepos.map(function(p,i){
    return '<div class="project-card glass-card" style="transition-delay:' + (i*0.05) + 's"><img src="' + p.img + '" class="project-img" onerror="this.src=\'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600\'"><h3 style="font-size:1.5rem;margin-bottom:1rem">' + p.title + '</h3><p style="color:var(--muted);font-size:1rem;margin-bottom:1.5rem;min-height:60px">' + p.desc + '</p><a href="' + p.link + '" target="_blank" class="magnetic-btn">View Code</a></div>'
  }).join('');
  projectsContainer.innerHTML = projectHTML;
  magneticButtons();
  scrollReveal();
}

function scrollProgress(){
  const progressBar = document.createElement('div');
  progressBar.id='progress-bar';
  document.body.appendChild(progressBar);
  window.addEventListener('scroll', function(){
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  })
}

function scrollReveal(){
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        if(entry.target.querySelector('.counter')){
          animateCounter(entry.target.querySelector('.counter'));
        }
      }
    })
  }, {threshold: 0.1});
  document.querySelectorAll('.section-title,.glass-card').forEach(function(el){
    observer.observe(el);
  });
}

function animateCounter(el){
  const target = +el.getAttribute('data-target');
  let count = 0;
  const inc = target / 100;
  const update = function(){
    count += inc;
    if(count < target){
      el.innerText = Math.ceil(count);
      requestAnimationFrame(update)
    } else{
      el.innerText = target + '+'
    }
  };
  update();
}

function backToTop(){
  const btn = document.createElement('button');
  btn.id='back-to-top';
  btn.innerHTML='↑';
  document.body.appendChild(btn);
  window.addEventListener('scroll', function(){
    if(window.scrollY > 500){ btn.classList.add('show') }
    else{ btn.classList.remove('show') }
  });
  btn.onclick = function(){ window.scrollTo({top:0, behavior:'smooth'}) };
}

function customCursor(){
  const cursor = document.createElement('div');
  cursor.id='cursor';
  document.body.appendChild(cursor);
  const dot = document.createElement('div');
  dot.id='cursor-dot';
  document.body.appendChild(dot);
  document.addEventListener('mousemove', function(e){
    cursor.style.left = (e.clientX - 15) + 'px';
    cursor.style.top = (e.clientY - 15) + 'px';
    dot.style.left = (e.clientX - 4) + 'px';
    dot.style.top = (e.clientY - 4) + 'px';
  })
}

function liquidBackground(){
  const canvas = document.createElement('canvas');
  canvas.id='liquid-bg';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  let time = 0;
  function animate(){
    time += 0.01;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width);
    gradient.addColorStop(0,'rgba(236,72,153,0.3)');
    gradient.addColorStop(1,'rgba(10,0,15,1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate)
  }
  animate();
}

function particleBackground(){
  const canvas = document.createElement('canvas');
  canvas.id = 'particles';
  document.querySelector('.hero').appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 80;
  
  for(let i = 0; i < particleCount; i++){
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      color: 'rgba(236,72,153,' + (Math.random() * 0.5 + 0.2) + ')'
    })
  }
  
  function animateParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      
      if(p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if(p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    })
    
    // Garis penghubung antar particle
    for(let i = 0; i < particles.length; i++){
      for(let j = i; j < particles.length; j++){
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if(dist < 120){
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(236,72,153,' + (0.2 - dist/600) + ')';
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(animateParticles);
  }
  
  animateParticles();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  })
}

function typeWriter(el, texts){
  let i = 0, j = 0, isDeleting = false;
  function type(){
    const current = texts[i];
    if(isDeleting){
      el.innerHTML = current.substring(0, j-1) + '<span class="typing-cursor"></span>';j--
    } else{
      el.innerHTML = current.substring(0, j+1) + '<span class="typing-cursor"></span>';j++
    }
    if(!isDeleting && j === current.length){
      isDeleting = true;
      setTimeout(type, 2000)
    } else if(isDeleting && j === 0){
      isDeleting = false;
      i = (i + 1) % texts.length;
      setTimeout(type, 500)
    } else{
      setTimeout(type, isDeleting? 50 : 100)
    }
  }
  type()
}

function Navbar(){ return '<nav><div class="logo">' + DATA.nama + '</div></nav>'; }
function Hero(){ return '<section class="hero"><div class="container"><h1 class="hero-title">' + DATA.nama + '</h1><p class="hero-subtitle" id="role-text"></p><a href="#projects" class="magnetic-btn">View Projects</a></div></section>'; }
function Terminal(){ return '<section><div class="container"><div class="terminal glass-card"><div class="terminal-header"><div class="terminal-dot dot-red"></div><div class="terminal-dot dot-yellow"></div><div class="terminal-dot dot-green"></div></div><div class="terminal-body" id="terminal-text"></div></div></div></section>'; }
function About(){
  const statsHTML = DATA.stats.map(function(s){ return '<div class="stat-box glass-card"><h3 class="counter" data-target="' + s.number + '">0</h3><p>' + s.label + '</p></div>' }).join('');
  return '<section id="about"><div class="container"><h2 class="section-title">About</h2><div class="about-grid"><img src="' + DATA.foto + '" class="about-img"><div><p style="font-size:1.3rem;line-height:1.8;color:var(--muted)">' + DATA.about + '</p><div class="stats-grid">' + statsHTML + '</div></div></div></div></section>';
}
function Projects(){ return '<section id="projects"><div class="container"><h2 class="section-title">All My Projects</h2><div class="project-grid" id="projects-grid"></div></div></section>'; }
function TechStack(){
  const techHTML = DATA.tech.map(function(t,i){ return '<div class="tech-card glass-card" style="transition-delay:' + (i*0.1) + 's"><img src="' + t.icon + '"><h3>' + t.name + '</h3></div>' }).join('');
  return '<section id="tech"><div class="container"><h2 class="section-title">Tech Stack</h2><div class="tech-grid">' + techHTML + '</div></section>';
}
function Footer(){ 
  return '<footer><div class="container"><div class="social-links"><a href="https://github.com/' + DATA.githubs[0] + '" target="_blank">GH</a><a href="https://github.com/' + DATA.githubs[1] + '" target="_blank">TEAM</a><a href="mailto:' + DATA.email + '">@</a></div><p style="color:var(--muted);position:relative;z-index:2">© 2026 ' + DATA.nama + '. Crafted with 💖 + Code</p></div></footer>'; 
}
function init(){ 
  liquidBackground();
  mouseGlow(); 
  customCursor(); 
  scrollProgress(); 
  backToTop(); 
  
  // 1. RENDER HTML DULU
  document.body.innerHTML = Navbar() + Hero() + Terminal() + About() + Projects() + TechStack() + Footer(); 
  
  // 2. BARU JALANIN EFFECT SETELAH HTML ADA
  particleBackground(); // PINDAH KE SINI
  typeWriter(document.getElementById('role-text'), DATA.role); 
  fetchAllProjects(); 
  setTimeout(function(){scrollReveal(); terminalType();}, 500); 
}

document.addEventListener('DOMContentLoaded', init);
