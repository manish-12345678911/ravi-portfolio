import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <div className="footer__logo">
              <span className="footer__logo-icon">RK</span>
              <span className="footer__logo-text">Ravi Kumar</span>
            </div>
            <p className="footer__tagline">
              CMA Professional · Finance & Accounting Expert
            </p>
          </div>

          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <motion.button
            className="footer__scroll-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Ravi Kumar. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <Heart size={14} className="footer__heart" /> for campus placement
          </p>
        </div>
      </div>
    </footer>
  );
}
