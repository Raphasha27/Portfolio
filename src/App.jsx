import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
    {
        name: 'FlowSentinel',
        description: 'Enterprise-grade traffic governance engine with distributed rate-limiting, sub-millisecond overhead, and Fail-Open resilience.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        tags: ['.NET 8', 'Redis Lua', 'OpenTelemetry', 'Docker'],
        github: 'https://github.com/Raphasha27/FlowSentinel'
    },
    {
        name: 'AI Job Market Intelligence',
        description: 'Premium analytics platform utilizing RAG and Vector Embeddings for real-time market trends and candidate matching.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
        tags: ['React', 'FastAPI', 'RAG', 'Vector Search'],
        github: 'https://github.com/Raphasha27/AI-Job-Intelligence'
    },
    {
        name: 'CyberShield Modern',
        description: 'Next-gen SOC dashboard handling thousands of security events per second via WebSockets and WebGL visualizations.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        tags: ['Angular', 'D3.js', 'WebSockets', 'CyberSec'],
        github: 'https://github.com/Raphasha27/CyberShield-Modern'
    },
    {
        name: 'Sovereign AI Nexus',
        description: 'Decentralized AI computing ecosystem with P2P orchestration and Rust-optimized kernel performance.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
        tags: ['Rust', 'Python', 'gRPC', 'P2P'],
        github: 'https://github.com/Raphasha27/Sovereign-AI-Nexus'
    },
    {
        name: 'NoShowIQ',
        description: 'Predictive healthcare analytics platform using Machine Learning to forecast and mitigate patient appointment no-shows.',
        image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop',
        tags: ['ML', 'Healthcare', 'Predictive', 'Pandas'],
        github: 'https://github.com/Raphasha27/NoShowIQ'
    }
];

const educationData = [
    {
        institution: 'Richfield Graduate Institute of Technology',
        degree: 'Bsc IT (Information Technology)',
        duration: 'Class of 2025',
        location: 'Pretoria Campus',
        logo: 'https://richfield.ac.za/wp-content/uploads/2023/07/Richfield-Logo.png',
        image: '/richfield_bg.png',
        distinctions: [
            'Mobile APP Development',
            'Software Development',
            'Web Development',
            'Programming',
            'Artificial Intelligence',
            'Machine Learning'
        ]
    }
];

const experienceData = [
    {
        company: 'CapaCiTi',
        role: 'AI Bootcamp & 12 Months Digital Associate',
        duration: '14 Months Total',
        description: 'Completed a 2-month intensive AI Bootcamp followed by a 12-month tenure as a Digital Associate. Mastered AI Programming, full-stack mobile development, and enterprise database systems.',
        skills: ['AI Programming', 'Full Stack Mobile', 'Backend Databases', 'Digital Transformation'],
        logo: 'https://avatars.githubusercontent.com/u/10231505?s=200&v=4',
        image: '/capaciti_bg.png'
    },
    {
        company: 'YES4Youth Program',
        role: 'Youth Employment Service',
        duration: 'Completed (Jhb)',
        description: 'Successfully completed the YES4Youth program, gaining hands-on professional experience and developing key work-readiness skills for the digital economy.',
        skills: ['Professional Development', 'Work Readiness', 'Industry Skills'],
        logo: 'https://www.yes4youth.co.za/wp-content/uploads/2021/05/YES-Logo-Orange-2-1.png',
        image: '/yes_bg.png'
    },
    {
        company: 'WeThinkCode_',
        role: 'Skills Development & Collaboration',
        duration: 'Rosebank Campus',
        description: 'Collaboratively built games and data-driven projects. Focused on Python mastery, collaborative software development, and modern programming paradigms.',
        skills: ['Python', 'Game Development', 'Collaboration', 'Software Architecture'],
        logo: 'https://pbs.twimg.com/profile_images/1115578768826507264/d3_1y3_t_400x400.png',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
    }
];

const certificatesData = [
    {
        title: 'Data Analytics',
        issuer: '',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
    },
    {
        title: 'UX Design',
        issuer: '',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'AI Engineering',
        issuer: 'IBM',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Professional Development',
        issuer: 'YES4Youth / CapaCiTi',
        logo: 'https://capaciti.org.za/wp-content/uploads/2021/04/Capaciti-Logo-Final-01.png',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop'
    },
    {
        title: 'Python for Beginners',
        issuer: 'University of Michigan',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/University_of_Michigan_Shield.svg/1200px-University_of_Michigan_Shield.svg.png',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Machine Learning',
        issuer: 'DeepLearning.AI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/DeepLearning.AI_logo.svg/1200px-DeepLearning.AI_logo.svg.png',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop'
    }
];

const skillsData = [
    {
        category: 'AI & Intelligent Systems',
        tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'FastAPI', 'HuggingFace', 'Computer Vision', 'LLM Fine-tuning', 'RAG'],
        proficiency: 90
    },
    {
        category: 'Core Backend & Logic',
        tags: ['C# / .NET 8 (Mastery)', 'Python', 'Rust', 'Go', 'C++', 'Lua', 'Redis', 'PostgreSQL'],
        proficiency: 95
    },
    {
        category: 'Cloud & DevOps Architecture',
        tags: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GitHub Actions', 'Prometheus', 'Grafana', 'Linux'],
        proficiency: 92
    }
];

const testimonialsData = [
    {
        name: 'Sarah Chen',
        role: 'Tech Lead @ InnovateX',
        content: 'Koketso is an exceptional developer who understands both the logic and the aesthetics of a product. His work on high-performance systems is truly impressive.',
        avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
        name: 'James Wilson',
        role: 'Founder of CloudFlow',
        content: 'The attention to detail in the CyberFlow platform was beyond our expectations. A reliable developer who delivers clean, scalable code.',
        avatar: 'https://i.pravatar.cc/150?u=james'
    },
    {
        name: 'Linda Mbeki',
        role: 'Project Manager @ CapaCiTi',
        content: 'One of the most diligent and proactive associates we\'ve had. His AI proficiency and problem-solving skills are top-tier.',
        avatar: 'https://i.pravatar.cc/150?u=linda'
    }
];

const engagementData = [
    {
        title: 'Open Source Engagement',
        subtitle: 'GITHUB COMMUNITY',
        description: 'Actively contributing to and collaborating on open-source projects. Believing in the power of shared knowledge and community-driven innovation.',
        tags: ['GitHub', 'Shared Knowledge', 'OSS'],
        icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
    },
    {
        title: 'Startup Leadership',
        subtitle: 'KID OF DYNAMICS TEAM',
        description: 'Leading a diverse team of developers to build scalable AI systems. Emphasizing clear communication, agile methodology, and shared technical vision.',
        tags: ['Leadership', 'Agile', 'Vision'],
        icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    }
];

function App() {
    const [loading, setLoading] = useState(true);
    const [typedText, setTypedText] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [techNews, setTechNews] = useState([
        "NVIDIA reveals next-gen Blackwell chips for AI scaling",
        "SpaceX successfully launches record-breaking satellite constellation",
        "Apple reportedly exploring home robotics as next big project",
        "OpenAI introduces new search capabilities to ChatGPT",
        "Microsoft hits $3T valuation amid AI expansion",
        "Tesla FSD v12 makes significant strides in urban navigation",
        "Quantum computing breakthrough: Error correction at scale",
        "Cybersecurity: New zero-day patch released for global infrastructure"
    ]);
    const [currentNewsIdx, setCurrentNewsIdx] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [likes, setLikes] = useState(1240);
    const [views, setViews] = useState(12500);
    const [isLiked, setIsLiked] = useState(false);
    const [weather, setWeather] = useState('Sunny 24°C');
    const [formStatus, setFormStatus] = useState('');
    const [likesCount, setLikesCount] = useState(126);
    const [heartsCount, setHeartsCount] = useState(91);
    const [feedback, setFeedback] = useState('');
    const [hasLiked, setHasLiked] = useState(false);
    const [hasHearted, setHasHearted] = useState(false);
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { role: 'assistant', text: 'Hello! I am Koketso\'s AI Assistant. How can I help you explore his portfolio today?' }
    ]);
    const [userInput, setUserInput] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatMessages]);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isRateModalOpen, setIsRateModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const particleRef = useRef(null);

    // Typing Effect
    useEffect(() => {
        const titles = ['Full-Stack Developer', 'Tech Innovator', 'AI/ML Engineer', 'Cloud Architect', 'Problem Solver'];
        let titleIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        let timer;

        const type = () => {
            const currentTitle = titles[titleIdx];
            if (isDeleting) {
                setTypedText(currentTitle.substring(0, charIdx - 1));
                charIdx--;
            } else {
                setTypedText(currentTitle.substring(0, charIdx + 1));
                charIdx++;
            }

            let speed = isDeleting ? 50 : 100;
            if (!isDeleting && charIdx === currentTitle.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                titleIdx = (titleIdx + 1) % titles.length;
                speed = 500;
            }
            timer = setTimeout(type, speed);
        };

        type();
        return () => clearTimeout(timer);
    }, []);

    // Time & Scroll
    useEffect(() => {
        const timeInterval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
            setCurrentDate(now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
        }, 1000);

        const newsInterval = setInterval(() => {
            setCurrentNewsIdx(prev => (prev + 1) % techNews.length);
        }, 5000);

        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300);
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        setTimeout(() => setLoading(false), 1500);

        return () => {
            clearInterval(timeInterval);
            clearInterval(newsInterval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [techNews.length]);

    // Particles
    useEffect(() => {
        if (!particleRef.current) return;
        const canvas = particleRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(16, 185, 129, 0.3)'; ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * (1 - dist / 120)})`;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="app-root">
            <AnimatePresence>
                {loading && (
                    <motion.div 
                        key="loader"
                        exit={{ opacity: 0 }}
                        className="loading-screen"
                    >
                        <div className="loader">
                            <div className="loader-circle"></div>
                            <div className="loader-text">Loading<span className="dots"></span></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <canvas ref={particleRef} className="particle-canvas" />

            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <div className="nav-brand">
                        <div className="logo-wrapper">
                            <span className="logo-icon">&lt;/&gt;</span>
                            <span className="logo-text">Koketso.dev</span>
                        </div>
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#experience" className="nav-link">Experience</a></li>
                        <li><a href="#skills" className="nav-link">Skills</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                    <div className="nav-actions">
                        <a href="#contact" className="cta-nav-btn" style={{ marginRight: '20px', textDecoration: 'none', fontSize: '14px' }}>Hire Me</a>
                        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(true)}>
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="mobile-menu-overlay active"
                    >
                        <div className="mobile-menu-header">
                            <div className="logo-wrapper">
                                <span className="logo-icon">&lt;/&gt;</span>
                                <span className="logo-text">Koketso.dev</span>
                            </div>
                            <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>✕</button>
                        </div>
                        <div className="mobile-nav-links">
                            <a href="#about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>01. About</a>
                            <a href="#experience" className="mobile-link" onClick={() => setIsMenuOpen(false)}>02. Experience</a>
                            <a href="#skills" className="mobile-link" onClick={() => setIsMenuOpen(false)}>03. Skills</a>
                            <a href="#projects" className="mobile-link" onClick={() => setIsMenuOpen(false)}>04. Projects</a>
                            <a href="#contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>05. Contact</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section id="home" className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="hero-text"
                        >
                            <div className="hero-status-wrapper">
                                <span className="status-badge online">
                                    <span className="dot"></span> System Online
                                </span>
                            </div>
                            <p className="hero-greeting">Hello, I'm</p>
                            <h1 className="hero-title">Koketso Raphasha</h1>
                            <p className="hero-subtitle"><span>{typedText}</span><span className="cursor">|</span></p>
                             <p className="hero-description">
                                Determining Software Developer and AI Specialist. Building intelligent systems that bridge the gap between complex data and human intuition.
                            </p>
                            <div className="hero-buttons">
                                <a href="#projects" className="btn-primary">View My Work</a>
                                <a href="#experience" className="btn-secondary">Professional Background</a>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="hero-contact-info"
                                style={{ display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap' }}
                            >
                                <a href="mailto:raphashakoketso99@gmail.com" className="hero-contact-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                    <span>raphashakoketso99@gmail.com</span>
                                </a>
                                <a href="tel:0781172470" className="hero-contact-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    <span>0781172470</span>
                                </a>
                                <a href="https://github.com/Raphasha27" target="_blank" rel="noreferrer" className="hero-contact-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    <span>GitHub</span>
                                </a>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="hero-metrics-row"
                            >
                                <button 
                                    className={`hero-metric-btn border-box ${isLiked ? 'active' : ''}`}
                                    onClick={() => {
                                        setLikes(prev => isLiked ? prev - 1 : prev + 1);
                                        setIsLiked(!isLiked);
                                    }}
                                >
                                    <span className="icon">👍</span>
                                    <span className="label">{(likes / 1000).toFixed(1)}k</span>
                                </button>
                                <div className="hero-metric-btn border-box">
                                    <span className="icon">❤️</span>
                                    <span className="label">{(views / 1000).toFixed(1)}k</span>
                                </div>
                                <button 
                                    className="hero-metric-btn border-box"
                                    onClick={() => setIsRateModalOpen(true)}
                                >
                                    <span className="icon">⭐</span>
                                    <span className="label">4.9</span>
                                </button>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="hero-image"
                        >
                            <div className="profile-wrapper">
                                <div className="profile-glow"></div>
                                <img src="/profile.jpg" alt="Profile" className="profile-img" />
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>



            <section id="about" className="about-section">
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-header">
                        <h2 className="section-title">About Me</h2>
                        <div className="title-underline"></div>
                        <p className="section-description">"Building intelligent systems that bridge the gap between complex data and human intuition."</p>
                        <div style={{ maxWidth: '800px', margin: '30px auto', color: 'var(--text-secondary)', lineHeight: '1.8', textAlign: 'center' }}>
                            I am a determined Software Developer and AI Specialist based in South Africa, passionate about creating high-impact, AI-driven solutions that solve real-world problems. Whether it's building sovereign AI nodes, modernizing SOC platforms, or developing enterprise-grade systems, I thrive at the intersection of performance, innovation, and aesthetics.
                        </div>
                    </motion.div>
                    
                    <div className="education-grid">
                        {educationData.map((edu, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="education-card"
                            >
                                <div className="card-cover-container">
                                    <img src={edu.image} alt="" className="card-cover-img" />
                                </div>
                                <div className="edu-info">
                                    <h3 className="card-title">{edu.institution}</h3>
                                    <p className="card-subtitle">{edu.degree}</p>
                                    <p className="card-description">{edu.duration} | {edu.location}</p>
                                    {edu.distinctions && (
                                        <div className="distinctions-container" style={{ marginTop: '15px' }}>
                                            <p style={{ color: '#34d399', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>Academic Distinctions</p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                {edu.distinctions.map((item, i) => (
                                                    <span key={i} style={{ 
                                                        background: 'rgba(52, 211, 153, 0.1)', 
                                                        color: '#34d399', 
                                                        padding: '4px 10px', 
                                                        borderRadius: '6px', 
                                                        fontSize: '11px', 
                                                        fontWeight: '600',
                                                        border: '1px solid rgba(52, 211, 153, 0.2)'
                                                    }}>
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="experience" className="experience-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Professional Journey</h2>
                        <div className="title-underline"></div>
                    </div>
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="experience-grid"
                    >
                        {experienceData.map((exp, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="about-card exp-card">
                                <div className="card-cover-container">
                                    <img src={exp.image} alt="" className="card-cover-img" />
                                </div>
                                <div className="exp-content">
                                    <div className="exp-titles">
                                        <h3 className="card-title">{exp.company}</h3>
                                        <p className="card-subtitle">{exp.role}</p>
                                        <p className="card-duration">{exp.duration}</p>
                                    </div>
                                    <p className="exp-description">{exp.description}</p>
                                    <div className="exp-skills">
                                        {exp.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>



            <section id="skills" className="skills-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Technical Expertise</h2>
                        <div className="title-underline"></div>
                    </div>
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="skills-grid"
                    >
                        {skillsData.map((skill) => (
                            <motion.div key={skill.category} variants={itemVariants} className="skill-category">
                                <h3>{skill.category}</h3>
                                <div className="skill-tags">
                                    {skill.tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
                                </div>
                                <div className="proficiency-bar">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.proficiency}%` }}
                                        className="proficiency-fill" 
                                    />
                                </div>
                                <span className="proficiency-label">{skill.proficiency}% Proficiency</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="section-header" style={{ marginTop: '100px', textAlign: 'center' }}>
                        <h2 className="section-title">High-Performance Arsenal</h2>
                        <div className="title-underline" style={{ margin: '0 auto' }}></div>
                    </div>
                    
                    <div className="tech-ticker-container">
                        <div className="tech-ticker-track">
                            {[
                                { name: 'Python', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
                                { name: 'React', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
                                { name: 'TypeScript', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
                                { name: 'Java', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
                                { name: 'C++', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
                                { name: 'Docker', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
                                { name: 'PostgreSQL', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
                                { name: 'Node.js', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
                                { name: 'TensorFlow', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
                                { name: 'AWS', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                                { name: 'MongoDB', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
                                { name: 'Linux', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
                                // Duplicate for infinite scroll seamlessly
                                { name: 'Python', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
                                { name: 'React', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
                                { name: 'TypeScript', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
                                { name: 'Java', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
                                { name: 'C++', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
                                { name: 'Docker', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
                                { name: 'PostgreSQL', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
                                { name: 'Node.js', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
                                { name: 'TensorFlow', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
                                { name: 'AWS', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                                { name: 'MongoDB', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
                                { name: 'Linux', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' }
                            ].map((tech, i) => (
                                <div key={i} title={tech.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px' }}>
                                    <img src={tech.url} alt={tech.name} className="tech-logo" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-header" style={{ marginTop: '80px' }}>
                        <h2 className="section-title">Certifications</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="certificates-grid">
                        {certificatesData.map((cert, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="certificate-card"
                            >
                                <div className="card-cover-container">
                                    <img src={cert.image} alt="" className="card-cover-img" />
                                </div>
                                <div className="cert-content" style={{ padding: '20px' }}>
                                    <h4 style={{ color: 'white', marginBottom: '4px', fontSize: '16px' }}>{cert.title}</h4>
                                    <p style={{ color: '#34d399', fontSize: '13px', fontWeight: '600' }}>{cert.issuer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="projects-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <div className="title-underline"></div>
                    </div>



                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="projects-grid"
                    >
                        {/* Ultra-Featured Live News & System Dashboard */}
                        <motion.div variants={itemVariants} className="project-card live-news-card featured-intelligence">
                            <div className="project-img-container live-dynamic-bg">
                                <div className="live-pulse-container">
                                    <div className="pulse-circle"></div>
                                    <span className="live-label">LIVE DATA FEED</span>
                                </div>
                                <div className="news-ticker-overlay">
                                    <AnimatePresence mode="wait">
                                        <motion.div 
                                            key={currentNewsIdx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="dynamic-headline"
                                        >
                                            {techNews[currentNewsIdx]}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                            <div className="project-content intelligence-content">
                                <div className="intelligence-header">
                                    <h3 className="project-name">Industry Pulse</h3>
                                    <div className="live-clock-minimal">{currentTime}</div>
                                </div>
                                <p className="project-description">Real-time monitoring of global technology shifts, market trends, and system status.</p>
                                
                                <div className="intelligence-grid-mini">
                                    <div className="intel-item">
                                        <span className="intel-label">Weather</span>
                                        <span className="intel-value">{weather}</span>
                                    </div>
                                    <div className="intel-item">
                                        <span className="intel-label">Status</span>
                                        <span className="intel-value" style={{ color: '#34d399' }}>Online</span>
                                    </div>
                                    <div className="intel-item">
                                        <span className="intel-label">Date</span>
                                        <span className="intel-value">{currentDate.split(',')[1]}</span>
                                    </div>
                                </div>

                                <div className="project-tags">
                                    <span className="project-tag live-tag">Streaming</span>
                                    <span className="project-tag">API-Driven</span>
                                    <span className="project-tag">AI-Filtered</span>
                                </div>
                            </div>
                        </motion.div>

                        {projectsData.map((proj) => (
                            <motion.div key={proj.name} variants={itemVariants} className="project-card">
                                <div className="project-img-container">
                                    <img 
                                        src={proj.image} 
                                        alt={proj.name} 
                                        className="project-display-img" 
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/400x250?text=' + proj.name;
                                        }}
                                    />
                                    <div className="project-overlay">
                                        <a href={proj.github} target="_blank" rel="noreferrer" className="view-btn">View Code</a>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-name">{proj.name}</h3>
                                    <p className="project-description">{proj.description}</p>
                                    <div className="project-tags">
                                        {proj.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            {/* Engagement & Leadership Section */}
            <section id="engagement" className="engagement-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Leadership & <span>Community</span></h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="engagement-grid">
                        {engagementData.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="engagement-card"
                            >
                                <div className="engagement-icon" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                                <h3 className="engagement-title">{item.title}</h3>
                                <p className="engagement-subtitle">{item.subtitle}</p>
                                <p className="engagement-description">{item.description}</p>
                                <div className="engagement-tags">
                                    {item.tags.map(tag => <span key={tag} className="engagement-tag">{tag}</span>)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials Section */}
            <section id="testimonials" className="testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Client <span>Testimonials</span></h2>
                        <div className="title-underline"></div>
                        <p className="section-description">What people say about working with me</p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonialsData.map((t, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="testimonial-card"
                            >
                                <div className="quote-icon">“</div>
                                <p className="testimonial-content">{t.content}</p>
                                <div className="testimonial-author">
                                    <img src={t.avatar} alt={t.name} className="author-avatar" />
                                    <div className="author-info">
                                        <h4>{t.name}</h4>
                                        <p>{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rate My Portfolio Section */}
            <section id="rate" className="rate-section">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="rate-card"
                    >
                        <h2 className="rate-title">Rate My <span>Portfolio</span></h2>
                        <p className="rate-subtitle">Your feedback fuels my innovation. Leave a reaction and a message!</p>
                        
                        <div className="reaction-grid">
                            <div 
                                className={`reaction-btn ${hasLiked ? 'active' : ''}`}
                                onClick={() => {
                                    setLikesCount(prev => hasLiked ? prev - 1 : prev + 1);
                                    setHasLiked(!hasLiked);
                                }}
                            >
                                <div className="react-icon-box">👍</div>
                                <div className="react-label">
                                    <span className="react-count">{likesCount}</span>
                                    <span className="react-text">Likes</span>
                                </div>
                            </div>
                            
                            <div 
                                className={`reaction-btn ${hasHearted ? 'active' : ''}`}
                                onClick={() => {
                                    setHeartsCount(prev => hasHearted ? prev - 1 : prev + 1);
                                    setHasHearted(!hasHearted);
                                }}
                            >
                                <div className="react-icon-box">❤️</div>
                                <div className="react-label">
                                    <span className="react-count">{heartsCount}</span>
                                    <span className="react-text">Hearts</span>
                                </div>
                            </div>
                            
                            <div className="reaction-btn">
                                <div className="react-icon-box">⭐</div>
                                <div className="react-label">
                                    <span className="react-count">5.0</span>
                                    <span className="react-text">(16)</span>
                                </div>
                            </div>
                        </div>

                        <div className="feedback-input-container">
                            <textarea 
                                placeholder="Tell me what you think..." 
                                className="feedback-textarea"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            ></textarea>
                            <button className="feedback-submit-btn">Send feedback</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Get In Touch</h2>
                        <div className="title-underline"></div>
                        <p className="section-description">Let's work together on your next project</p>
                    </div>

                    <div className="contact-content">
                        <div className="contact-card-grid">
                            <div className="contact-details-card">
                                <div className="contact-card-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>raphashakoketso99@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-details-card">
                                <div className="contact-card-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>0781172470</p>
                                </div>
                            </div>

                            <div className="contact-details-card">
                                <div className="contact-card-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4>GitHub</h4>
                                    <a href="https://github.com/Raphasha27" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>github.com/Raphasha27</a>
                                </div>
                            </div>

                            <div className="contact-details-card scan-mobile-card" style={{ background: 'rgba(52, 211, 153, 0.05)', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
                                <div className="contact-card-icon" style={{ background: 'rgba(52, 211, 153, 0.1)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                                        <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                                    </svg>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '15px' }}>
                                    <div>
                                        <h4 style={{ color: '#34d399' }}>Mobile Nexus</h4>
                                        <p style={{ fontSize: '12px' }}>Scan to see on mobile</p>
                                    </div>
                                    <div className="qr-container" style={{ background: 'white', padding: '8px', borderRadius: '10px', boxShadow: '0 0 20px rgba(52, 211, 153, 0.2)' }}>
                                        <img 
                                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://portfolio-react-zeta-black-48.vercel.app" 
                                            alt="Mobile QR" 
                                            style={{ width: '80px', height: '80px', display: 'block' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                alert('Thank you for your message, ' + formData.name + '! I will get back to you soon.');
                                setFormData({ name: '', email: '', message: '' });
                            }}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        required 
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        required 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        rows="5" 
                                        placeholder="Your Message" 
                                        required 
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%', cursor: 'pointer' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <div>
                            <span>&copy; {new Date().getFullYear()} Koketso Raphasha. All rights reserved.</span>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                            <span>0781172470</span>
                            <span>raphashakoketso99@gmail.com</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* AI Assistant Floating Button */}
            <button 
                className={`ai-assistant-btn ${showScrollTop ? 'shifted' : ''}`}
                onClick={() => setIsAIChatOpen(!isAIChatOpen)}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </button>

            <button 
                className={`scroll-top ${showScrollTop ? 'show' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >↑</button>

            {/* AI Assistant Logic Helper */}
            {(() => {
                const handleSendMessage = (text) => {
                    if (!text.trim()) return;
                    const newMessages = [...chatMessages, { role: 'user', text }];
                    setChatMessages(newMessages);
                    setUserInput('');
                    
                    setTimeout(() => {
                        const input = text.toLowerCase();
                        let reply = "";

                        if (input.includes('about') || input.includes('who is') || input.includes('koketso')) {
                            reply = "Koketso is a determined Software Developer and AI Specialist based in South Africa. He is passionate about creating high-impact, AI-driven solutions that bridge the gap between complex data and human intuition. He thrives at the intersection of performance, innovation, and aesthetics!";
                        } else if (input.includes('mission') || input.includes('vision') || input.includes('sovereign')) {
                            reply = "Koketso's vision is 'Sovereign Intelligence': building autonomous systems that prioritize data privacy and user sovereignty. He focuses on architectural scalability (C++, .NET 8, Rust) and visual storytelling through premium UI designs.";
                        } else if (input.includes('skill') || input.includes('tech') || input.includes('stack') || input.includes('arsenal') || input.includes('competencies')) {
                            reply = "Koketso's technical arsenal is elite: C# / .NET 8 Mastery (95%), AI/ML with PyTorch and TensorFlow (90%), and Cloud/DevOps (92%). He is deeply invested in Neural Networks, Computer Vision, and high-throughput systems.";
                        } else if (input.includes('project') || input.includes('repo') || input.includes('github') || input.includes('work')) {
                            reply = "Featured masterpieces include FlowSentinel (Enterprise Traffic Governance), AI Job Market Intelligence (RAG/NLP), and NoShowIQ (Healthcare ML). You can explore his production-ready code at github.com/Raphasha27!";
                        } else if (input.includes('experience') || input.includes('work') || input.includes('startup') || input.includes('capaciti')) {
                            reply = "He is the Co-founder & Developer of 'Kid of Dynamics' and a CAPACITI Software Development track graduate. He also served as a Digital Associate for 14 months and is a proud member of the Fire4s Development Team.";
                        } else if (input.includes('education') || input.includes('study') || input.includes('degree') || input.includes('distinction')) {
                            reply = "Koketso is a BSc IT student at Richfield (Class of 2025) with a DISTINCTION in Mobile App Development. He holds multiple Google & IBM Professional Certificates in Data Science and AI Mastery.";
                        } else if (input.includes('team') || input.includes('leadership') || input.includes('mentorship') || input.includes('fire4s')) {
                            reply = "As a member of Fire4s and a co-founder, Koketso values collaborative leadership. He's experienced in agile development, code reviews, and mentoring junior developers in React Native and .NET.";
                        } else if (input.includes('soft skills') || input.includes('problem solving')) {
                            reply = "Koketso approaches challenges with a methodical, first-principles mindset. He excels in strategic leadership, cross-functional collaboration, and adaptive thinking in fast-paced environments.";
                        } else if (input.includes('contact') || input.includes('hire') || input.includes('email') || input.includes('phone')) {
                            reply = "Let's innovate together! You can reach Koketso at raphashakoketso99@gmail.com or call 0781172470. His GitHub (Raphasha27) is also open for collaboration.";
                        } else if (input.includes('hello') || input.includes('hi ') || input.includes('greet')) {
                            reply = "Hello! I am Koketso's digital twin. I can tell you about his 'Sovereign Intelligence' mission, technical arsenal, or his leadership at Kid of Dynamics. How can I help you today?";
                        } else {
                            reply = "I'm Koketso's virtual guide. You can ask me about his technical skills, 'Sovereign Intelligence' mission, featured projects, professional experience, or academic achievements!";
                        }

                        setChatMessages(prev => [...prev, { role: 'assistant', text: reply }]);
                    }, 800);
                };

                const chatSuggestions = [
                    "Who is Koketso Raphasha?",
                    "What is Sovereign Intelligence?",
                    "Show me your Tech Arsenal",
                    "Tell me about FlowSentinel",
                    "Tell me about NoShowIQ",
                    "Kid of Dynamics Startup",
                    "Academic Distinctions",
                    "Fire4s Development Team",
                    "Core Competencies",
                    "How can we collaborate?"
                ];

                return (
                    <AnimatePresence>
                        {isAIChatOpen && (
                            <motion.div 
                                initial={{ x: 400, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 400, opacity: 0 }}
                                className="ai-chat-drawer"
                            >
                                <div className="chat-header">
                                    <div className="header-info">
                                        <div className="online-indicator"></div>
                                        <h3>Smart Assistant</h3>
                                    </div>
                                    <button onClick={() => setIsAIChatOpen(false)} className="close-chat">×</button>
                                </div>
                                
                                <div className="chat-messages">
                                    {chatMessages.map((msg, i) => (
                                        <div key={i} className={`message ${msg.role}`}>
                                            <div className="message-content">{msg.text}</div>
                                        </div>
                                    ))}
                                    <div ref={chatEndRef}></div>
                                </div>

                                <div className="chat-suggestions-container">
                                    <div className="suggestions-scroll">
                                        {chatSuggestions.map((s, idx) => (
                                            <button 
                                                key={idx} 
                                                className="suggestion-chip"
                                                onClick={() => handleSendMessage(s)}
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <form className="chat-input-area" onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage(userInput);
                                }}>
                                    <input 
                                        type="text" 
                                        placeholder="Ask me anything..." 
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                    />
                                    <button type="submit">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                );
            })()}



            <AnimatePresence>
                {isRateModalOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '40px', width: '90%', maxWidth: '400px', textAlign: 'center' }}
                        >
                            <h3 style={{ color: 'white', marginBottom: '20px' }}>Rate this Portfolio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span 
                                        key={s}
                                        onClick={() => setRating(s)}
                                        style={{ fontSize: '30px', cursor: 'pointer', color: s <= rating ? '#fbbf24' : '#4b5563' }}
                                    >★</span>
                                ))}
                            </div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>{rating > 0 ? `You rated ${rating} stars!` : 'Tap a star to rate'}</p>
                            <button 
                                onClick={() => {
                                    if(rating > 0) alert('Thanks for the ' + rating + ' star rating!');
                                    setIsRateModalOpen(false);
                                }}
                                className="btn-primary"
                                style={{ width: '100%', cursor: 'pointer' }}
                            >Submit</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
