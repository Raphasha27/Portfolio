// ── DIGITAL TWIN AI CHAT ──
const KB = {
  'tech stack': "My core stack: **C# / .NET 8**, **Rust**, **C**, **Python**, **React**, **Vite**, **Framer Motion**. AI/ML: PyTorch, TensorFlow, LangChain, RAG. Cloud: Azure, AWS, Docker, Kubernetes. I build end-to-end — from raw memory in C to multi-agent AI pipelines. 🔧",
  'projects': "I've built **9 real projects** mapped to 9 AI Roles:\n\n⚡ FlowSentinel (.NET 8)\n🔐 CyberShield SOC\n🏥 NoShowIQ (Healthcare AI)\n🏙️ Kirov Connect (Civic AI)\n🎟️ SeatLock (Zero-downtime)\n📚 EduStream-Pro-ICT\n🐝 SupportHive-C (C engine)\n🌐 Sovereign-AI-Nexus\n📡 RepoPulse (Autonomous monitor)",
  'hire': "Koketso is available for **freelance**, **full-time**, and **collaboration** opportunities. 📩 raphashakoketso9@gmail.com | 📞 0781172470\n\nHe specializes in autonomous systems, AI infrastructure, and high-performance backend engineering.",
  'experience': "Koketso graduated with **distinction** from Richfield Graduate Institute (BSc Computer Science). Since 2025 he's been running **Kirov Dynamics Technology** — designing autonomous agentic infrastructure across C, Python, Go, and TypeScript. Also an active open-source contributor on GitHub (raphasha27).",
  'roles': "The **9 AI Roles** framework maps his expertise to production systems:\n\n1. Systems Architect → Sovereign-AI-Nexus\n2. Agent Orchestrator → Nexus-v2\n3. Product Builder → NoShowIQ\n4. Automation Strategist → Kirov Connect\n5. Infrastructure Engineer → FlowSentinel\n6. Reliability Engineer → SeatLock\n7. Governance Specialist → CyberShield\n8. Security Specialist → CyberShield SOC\n9. Solutions Engineer → EduStream-Pro-ICT",
  'contact': "Best ways to reach Koketso:\n📩 raphashakoketso9@gmail.com\n📞 0781172470\n⬡ github.com/Raphasha27\n🌍 portfolio-react-zeta-black-48.vercel.app",
  'vercel': "Live portfolio deployed at: 🌍 portfolio-react-zeta-black-48.vercel.app — built with React + Vite + Framer Motion.",
  'about': "Koketso Raphasha is a South African software engineer building **'the foundational infrastructure for the African Digital Future'**. He builds systems that observe, diagnose, and optimize themselves — from low-level C engines to high-level multi-agent AI reflection loops.",
};
function botReply(text) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.textContent = '...';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(() => { div.textContent = text; msgs.scrollTop = msgs.scrollHeight; }, 600);
}
function userMsg(text) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function handleChat(q) {
  const lower = q.toLowerCase();
  let reply = "Great question! I don't have a specific answer for that yet. Try asking about: tech stack, projects, experience, the 9 roles, or how to hire Koketso. 😊";
  for (const [key, val] of Object.entries(KB)) {
    if (lower.includes(key)) { reply = val; break; }
  }
  userMsg(q);
  botReply(reply);
}
document.getElementById('chat-send')?.addEventListener('click', () => {
  const inp = document.getElementById('chat-input');
  if (inp.value.trim()) { handleChat(inp.value.trim()); inp.value = ''; }
});
document.getElementById('chat-input')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') { document.getElementById('chat-send').click(); }
});
document.querySelectorAll('.chat-suggestion').forEach(s => {
  s.addEventListener('click', () => handleChat(s.textContent.replace('?','')));
});
const chatPanel = document.getElementById('chat-panel');
document.getElementById('chat-fab')?.addEventListener('click', () => chatPanel.classList.toggle('open'));
document.getElementById('chat-close')?.addEventListener('click', () => chatPanel.classList.remove('open'));

// ── NAV ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinks.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
  scrollTopBtn?.classList.toggle('show', window.scrollY > 400);

  // Skill bars
  document.querySelectorAll('.skill-bar-fill:not(.animated)').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.dataset.pct;
      bar.classList.add('animated');
    }
  });
});

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => navList.classList.toggle('mobile-open'));

// Smooth close nav on link click
navLinks.forEach(a => a.addEventListener('click', () => navList.classList.remove('mobile-open')));

// Scroll top
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Typed effect
const typed = document.getElementById('typed-text');
const phrases = ['Digital Solutions', 'Autonomous Systems', 'Scalable APIs', 'AI Pipelines'];
let pi = 0, ci = 0, deleting = false;
function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    typed.textContent = phrase.slice(0, ++ci);
    if (ci === phrase.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typed.textContent = phrase.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 60 : 90);
}
if (typed) type();

// Form submit
document.getElementById('contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#00c88a';
  setTimeout(() => { btn.textContent = 'Send Message →'; btn.style.background = ''; e.target.reset(); }, 3000);
});
