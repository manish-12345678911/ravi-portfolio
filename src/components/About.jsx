import { motion } from 'framer-motion';
import { Target, TrendingUp, BookOpen, Award } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './About.css';

const highlights = [
  { icon: <Target size={22} />, title: 'Goal-Oriented', desc: 'Driven by measurable outcomes and strategic thinking' },
  { icon: <TrendingUp size={22} />, title: 'Analytical Mind', desc: 'Strong expertise in data analysis and financial modelling' },
  { icon: <BookOpen size={22} />, title: 'Continuous Learner', desc: 'Always upgrading skills through certifications and courses' },
  { icon: <Award size={22} />, title: 'Top Performer', desc: 'Consistently among the top achievers in academics' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <p className="section-subtitle">
            I'm Ravi Kumar, a CMA-qualified professional with a deep passion for cost 
            management, financial analysis, and strategic business advisory. Currently 
            preparing for campus placement, I bring a combination of strong academic 
            foundations and practical experience.
          </p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="about__image-wrapper">
              <div className="about__image-frame">
                <img
                  src={profileImg}
                  alt="Ravi Kumar - CMA Professional"
                  className="about__image"
                />
              </div>
              <div className="about__exp-badge">
                <span className="about__exp-number">CMA</span>
                <span className="about__exp-text">Qualified</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >

            <p className="about__detail">
              With hands-on experience in budgeting, variance analysis, and cost optimization 
              gained through internships at leading firms, I am equipped to add immediate value 
              to finance teams. My approach combines analytical rigor with clear communication 
              to turn complex data into actionable insights.
            </p>

            <div className="about__highlights">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="about__highlight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <div className="about__highlight-icon">{item.icon}</div>
                  <div>
                    <h4 className="about__highlight-title">{item.title}</h4>
                    <p className="about__highlight-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
