import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import SquareGridCanvas from './SquareGridCanvas';
import './Hero.css';

const keywords = [
  'Finance Expert',
  'Cost Accountant',
  'Financial Analyst',
  'Cost Optimizer',
  'Strategic Planner',
  'Valuation Specialist',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentKeyword = keywords[keywordIndex];

    let timer;
    if (!isDeleting) {
      if (text.length < currentKeyword.length) {
        timer = setTimeout(() => {
          setText(currentKeyword.slice(0, text.length + 1));
        }, 85);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentKeyword.slice(0, text.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setKeywordIndex((prev) => (prev + 1) % keywords.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, keywordIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Animated background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <SquareGridCanvas cellSize={48} />
      </div>

      <div className="hero__content container">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="hero__title">
            <span className="hero__title-line">Hi, I'm</span>
            <span className="hero__title-name">Ravi Kumar</span>
            <span className="hero__title-role">
              CMA Professional &{' '}
              <span className="hero__title-highlight">
                {text}
                <span className="hero__typewriter-cursor">|</span>
              </span>
            </span>
          </h1>

          <p className="hero__description">
            A passionate Cost & Management Accountant with expertise in financial analysis, 
            cost optimization, and strategic planning. Ready to bring analytical excellence 
            and value-driven insights to your organization.
          </p>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">CMA</span>
              <span className="hero__stat-label">Certified</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">3+</span>
              <span className="hero__stat-label">Internships</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">10+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
          </div>

          <div className="hero__actions">
            <a href="#contact" className="btn-gold" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Mail size={18} />
              Get In Touch
            </a>
            <a href="/resume.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer">
              <FileText size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar">
              <img
                src={profileImg}
                alt="Ravi Kumar - CMA Professional"
                className="hero__avatar-img"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll-btn"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
