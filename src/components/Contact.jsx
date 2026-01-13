import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="glass contact-container">
        <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="contact-inner"
        >
          <div className="contact-info">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
              Let's Scale <span className="gradient-text">Together</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
              Have a project in mind or just want to chat about AI and Intelligence? Drop me a message.
            </p>
            
            <div className="contact-methods">
              <div className="method">
                <Mail size={24} color="var(--primary)" />
                <div>
                  <h4>Email</h4>
                  <p>raphashakokets69@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="social-links-footer">
              <a href="#"><Github /></a>
              <a href="#"><Linkedin /></a>
              <a href="#"><Twitter /></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell me about your project" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .contact-container {
          padding: 60px;
          overflow: hidden;
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        .contact-methods {
          margin-top: 40px;
        }
        .method {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .method h4 {
          font-size: 1rem;
          color: var(--text-main);
        }
        .method p {
          color: var(--text-muted);
        }
        .social-links-footer {
          margin-top: 60px;
          display: flex;
          gap: 24px;
        }
        .social-links-footer svg {
          opacity: 0.6;
          transition: 0.2s;
          cursor: pointer;
        }
        .social-links-footer svg:hover {
          opacity: 1;
          color: var(--primary);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.05);
        }
        @media (max-width: 868px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-container {
            padding: 32px 24px;
          }
          h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
