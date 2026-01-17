import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, User, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "👋 Hello! I'm Koketso's personal AI assistant. I can provide detailed insights about his expertise, projects, and professional journey. What would you like to know?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const getIntelligentResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    // Advanced Skills Query
    if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack') || lowerInput.includes('language')) {
      return {
        text: "🚀 **Technical Expertise Analysis:**\n\n**Core Proficiencies:**\n• Full-Stack: React (92%), Next.js, Java (85%), Spring Boot (80%)\n• AI/ML: Python (90%), TensorFlow, PyTorch, LLM Fine-tuning\n• Cloud & DevOps: Docker, Kubernetes (75%), AWS, CI/CD\n• Languages: Python, JavaScript/TypeScript (88%), Java, Go (70%), C++\n\n**Specialized Knowledge:**\n✓ Microservices architecture & distributed systems\n✓ Neural network design & deep learning\n✓ Real-time data processing with Kafka\n✓ Database optimization (SQL & NoSQL)\n\nKoketso combines theoretical computer science knowledge with practical implementation experience across 20+ production systems.",
        confidence: 0.95
      };
    }
    
    // Deep Project Insights
    if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('portfolio') || lowerInput.includes('built')) {
      return {
        text: "💼 **Project Portfolio Highlights:**\n\n**FlowSentinel** - High-performance API Gateway\n→ Handles 10k+ req/s with <1ms latency\n→ Distributed rate limiting using Redis\n→ 500+ active enterprise users\n\n**EduStream Pro** - AI Learning Platform\n→ Custom TensorFlow model (85% accuracy)\n→ NLP-powered content generation\n→ 2k+ students, 150+ courses\n\n**CycleSync** - Rental Management System\n→ 5k+ bookings processed\n→ Real-time GPS tracking\n→ Stripe payment integration\n\n**FinAxis** - Financial Processor\n→ 100k+ transactions secured\n→ ML fraud detection (94% accuracy)\n→ Event-driven architecture with Kafka\n\nEach project demonstrates full-stack capabilities, scalability design, and production-ready code quality.",
        confidence: 0.98
      };
    }
    
    // Contact & Collaboration
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach') || lowerInput.includes('hire') || lowerInput.includes('available')) {
      return {
        text: "📧 **Get in Touch:**\n\n**Professional Channels:**\n• Click 'Get In Touch' button below for direct contact\n• LinkedIn: Professional network & recommendations\n• GitHub: Open-source contributions & code samples\n\n**Location:** Centurion, South Africa\n**Availability:** Open to full-time, contract, and consulting opportunities\n**Work Preference:** Remote-first, with flexibility for on-site collaboration\n\n**Response Time:** Typically within 24 hours on weekdays\n\nFor urgent inquiries, LinkedIn messaging is recommended for fastest response.",
        confidence: 0.92
      };
    }
    
    // Experience & Background
    if (lowerInput.includes('experience') || lowerInput.includes('history') || lowerInput.includes('background') || lowerInput.includes('journey')) {
      return {
        text: "💪 **Professional Journey:**\n\n**Current Roles:**\n• Co-founder @ Kid of Dynamics (Tech Startup)\n• Software Developer & AI Specialist\n• Active member: CAPACITI Tech Program\n• Contributor: Fire4s Developer Group\n• Participant: YES4Youth Initiative\n\n**Experience Highlights:**\n✓ 3+ years in professional software development\n✓ Led full-stack projects from conception to deployment\n✓ Architected microservices handling 100k+ daily users\n✓ Trained neural networks achieving 85-94% accuracy\n✓ Mentored junior developers in modern web technologies\n\n**Impact:**\nBuilt systems processing millions of transactions, serving thousands of users across multiple continents, with 99.9% uptime.",
        confidence: 0.94
      };
    }
    
    // Education & Certifications
    if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('study') || lowerInput.includes('university') || lowerInput.includes('certifi')) {
      return {
        text: "🎓 **Academic & Professional Credentials:**\n\n**Formal Education:**\n• BSc Computer Science (Distinction)\n  → Focus: Algorithms, AI, Distributed Systems\n  → GPA: Top 10% of cohort\n\n**Professional Certifications:**\n• Google Advanced Machine Learning Specialization\n  → Deep Learning, NLP, Computer Vision\n• Mobile Application Development (Distinction)\n  → React Native, Flutter, Native Android\n• AWS Solutions Architect (In Progress)\n\n**Continuous Learning:**\nActive on Coursera, completing advanced courses in:\n→ Neural Networks & Deep Learning\n→ Cloud Architecture\n→ Advanced Algorithm Design\n\nCombines theoretical foundations with practical, production-ready skills.",
        confidence: 0.96
      };
    }
    
    // AI & Machine Learning Specific
    if (lowerInput.includes('ai') || lowerInput.includes('machine learning') || lowerInput.includes('neural') || lowerInput.includes('model') || lowerInput.includes('ml')) {
      return {
        text: "🤖 **AI & Machine Learning Expertise:**\n\n**Frameworks & Tools:**\n• TensorFlow 2.x - Production model deployment\n• PyTorch - Research & experimentation\n• Scikit-learn - Classical ML algorithms\n• Keras - Rapid prototyping\n\n**Implemented Models:**\n✓ LSTM networks for time-series prediction (85% accuracy)\n✓ RandomForest for fraud detection (94% accuracy)\n✓ CNN for image classification\n✓ NLP transformers for content generation\n✓ Recommendation systems (collaborative filtering)\n\n**Real-World Applications:**\n→ Student performance prediction algorithms\n→ Financial fraud detection systems\n→ Automated content personalization\n→ Real-time anomaly detection\n\n**Research Interests:**\nLarge Language Models, Reinforcement Learning, Edge AI",
        confidence: 0.97
      };
    }
    
    // Greeting
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey') || lowerInput === 'hi' || lowerInput === 'hello') {
      return {
        text: "Hello! 👋\n\nI'm Koketso's intelligent assistant, trained to provide detailed information about his professional background.\n\n**I can help you with:**\n• Technical skills & expertise levels\n• Detailed project breakdowns\n• Professional experience & achievements\n• Education & certifications\n• Contact & collaboration opportunities\n\n**Example questions:**\n→ \"What are his AI/ML capabilities?\"\n→ \"Tell me about the FlowSentinel project\"\n→ \"How can I contact him?\"\n\nFeel free to ask anything!",
        confidence: 0.99
      };
    }

    // Default intelligent response
    return {
      text: "🎯 **Intelligent Analysis:**\n\nI understand you're interested in learning more. I'm Koketso's personal AI assistant with deep knowledge about his professional capabilities.\n\n**Quick Overview:**\n• 3+ years software engineering experience\n• Expertise in full-stack development & AI/ML\n• 20+ production projects deployed\n• BSc Computer Science (Distinction)\n• Active in tech community leadership\n\n**I can provide detailed insights on:**\n→ Technical skills & proficiency levels\n→ Specific project implementations & architectures\n→ Professional journey & achievements\n→ How to connect for opportunities\n\n**Try asking:**\n\"What technologies does he specialize in?\"\n\"Tell me about his AI projects\"\n\"How can I reach out for collaboration?\"\n\nWhat specific area interests you most?",
      confidence: 0.85
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const response = getIntelligentResponse(inputValue);
      setMessages(prev => [...prev, { type: 'bot', text: response.text }]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative"
          >
            <Bot className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-slate-900"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-50"></div>
          </motion.button>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="w-[calc(100vw-32px)] sm:w-96 h-[500px] sm:h-[600px] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex flex-col backdrop-blur-xl"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">AI Assistant</p>
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online & Ready
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg transition-colors text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'bot' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-slate-700'}`}>
                    {msg.type === 'bot' ? <Sparkles className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-slate-300" />}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl max-w-[80%] shadow-md ${msg.type === 'bot' ? 'bg-slate-800 text-slate-200 rounded-tl-none' : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none'}`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-slate-800 rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-4 border-t border-slate-700 bg-slate-800/50 rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about skills, projects, experience..."
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all text-white placeholder-slate-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
