import Footer from './components/Footer'
import { motion } from "framer-motion";
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import CommandPalette from './components/CommandPalette';
import TechMarquee from './components/TechMarquee';

const Terminal = lazy(() => import('./components/Terminal'));
const Experience = lazy(() => import('./components/Experience'));
const Roles = lazy(() => import('./components/Roles'));
const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const CIStatus = lazy(() => import('./components/CIStatus'));
const Contact = lazy(() => import('./components/Contact'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ChatAssistant = lazy(() => import('./components/ChatAssistant'));
const Services = lazy(() => import('./components/Services'));
const HireMe = lazy(() => import('./components/HireMe'));
const Map = lazy(() => import('./components/Map'));

function App() {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#000814] text-[#e0f2f1] min-h-screen selection:bg-emerald-500/20 selection:text-emerald-200 relative overflow-x-clip">
      {/* Subtle ambient gradient background */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(0, 255, 156, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(59, 130, 246, 0.06) 0%, transparent 60%)'
        }} />
      </div>

      <CustomCursor />
      <Navbar setCmdOpen={setCmdOpen} />

      <main className="pb-16 sm:pb-24 relative z-10">
        <ErrorBoundary>
          <section>
            <Hero />
          </section>
        </ErrorBoundary>

        <ErrorBoundary>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <About />
          </motion.section>
        </ErrorBoundary>

        <Suspense fallback={<div className="w-full min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" /></div>}>
          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Experience />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative py-16 sm:py-24 overflow-hidden"
            >
              <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10 flex flex-col gap-16 sm:gap-24">
                <TechMarquee />
                <Roles />
              </div>
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Certifications />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 sm:py-24"
            >
              <Services />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 sm:py-24"
            >
              <Projects />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pb-16 sm:pb-24"
            >
              <CIStatus />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <section className="px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24">
              <Terminal />
            </section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Map />
            </motion.div>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Testimonials />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <HireMe />
            </motion.section>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Contact />
            </motion.section>
          </ErrorBoundary>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      <Suspense fallback={null}>
        <ErrorBoundary>
          <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
        </ErrorBoundary>
        <ErrorBoundary>
          <ChatAssistant />
        </ErrorBoundary>
      </Suspense>
      <ScrollToTop />
    </div>
  );
}

const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 500) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-4 sm:bottom-8 sm:left-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-50 active:scale-95 border border-[#00FF9C]/40 bg-[#00FF9C]/10 text-[#00FF9C] shadow-[0_0_20px_rgba(0,255,156,0.3)] hover:shadow-[0_0_30px_rgba(0,255,156,0.5)] hover:bg-[#00FF9C]/20 transition-all"
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default App;

