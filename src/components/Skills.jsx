import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Technical Skills',
    emoji: '💻',
    skills: [
      { name: 'Cost Accounting', level: 92 },
      { name: 'Financial Analysis', level: 90 },
      { name: 'Budgeting & Forecasting', level: 88 },
      { name: 'Tally ERP 9 / Prime', level: 85 },
      { name: 'Advanced Excel', level: 92 },
      { name: 'SAP (Basics)', level: 70 },
    ],
  },
  {
    title: 'Core Competencies',
    emoji: '🎯',
    skills: [
      { name: 'Management Accounting', level: 90 },
      { name: 'Tax Compliance (GST, Income Tax)', level: 85 },
      { name: 'Audit & Assurance', level: 82 },
      { name: 'Corporate Law', level: 78 },
      { name: 'Strategic Financial Management', level: 88 },
      { name: 'Performance Evaluation', level: 85 },
    ],
  },
  {
    title: 'Soft Skills',
    emoji: '🤝',
    skills: [
      { name: 'Analytical Thinking', level: 95 },
      { name: 'Communication', level: 88 },
      { name: 'Leadership', level: 82 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 88 },
      { name: 'Time Management', level: 85 },
    ],
  },
];

const tools = [
  'MS Excel', 'Tally Prime', 'SAP', 'Power BI', 'Google Sheets', 
  'MS Word', 'MS PowerPoint', 'QuickBooks', 'Zoho Books', 'Python (Basics)',
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ margin: '0 auto 1rem' }}>My Skills</div>
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A comprehensive skill set combining CMA domain knowledge with modern financial tools and analytics.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              className="skills__category glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.6 }}
            >
              <div className="skills__category-header">
                <span className="skills__category-emoji">{category.emoji}</span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>
              <div className="skills__list">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="skills__item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.05 }}
                  >
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <motion.div
                        className="skills__bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.1 + si * 0.08, duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills__tools"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="skills__tools-title">Tools & Software</h3>
          <div className="skills__tools-grid">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                className="skills__tool-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
