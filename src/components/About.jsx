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
            I’m Ravi, a CMA-qualified professional with practical experience in Costing, 
            Auditing, Finance, Accounting, and Taxation.
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
              I have hands-on exposure to product costing, BOM analysis, cost records, MIS, 
              internal audits, GST, financial reporting, and tax compliance. Currently working 
              as a <strong style={{ color: 'var(--gold-400)' }}>Costing Executive at Shivam Autotech Ltd.</strong>, 
              I aim to leverage my technical knowledge and practical experience to contribute 
              to business growth and effective cost management.
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
