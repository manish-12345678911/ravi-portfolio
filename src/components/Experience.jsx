import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Finance Intern',
    company: 'Deloitte India',
    period: 'Jun 2024 – Aug 2024',
    location: 'New Delhi, India',
    type: 'Internship',
    points: [
      'Assisted in preparing financial statements and management reports for 5+ clients',
      'Conducted cost-benefit analysis resulting in 15% operational cost savings recommendations',
      'Supported the audit team with reconciliation of accounts and variance analysis',
      'Created automated Excel dashboards for monthly financial performance tracking',
    ],
  },
  {
    role: 'Accounts Trainee',
    company: 'KPMG India',
    period: 'Jan 2024 – Mar 2024',
    location: 'Gurugram, India',
    type: 'Internship',
    points: [
      'Managed accounts payable/receivable processes for a portfolio of 10+ clients',
      'Prepared and filed GST returns ensuring 100% compliance within deadlines',
      'Assisted in internal audit procedures and documentation',
      'Developed proficiency in Tally ERP and SAP for accounting operations',
    ],
  },
  {
    role: 'Finance Research Intern',
    company: 'ICMAI Research Foundation',
    period: 'Jul 2023 – Sep 2023',
    location: 'Kolkata, India',
    type: 'Internship',
    points: [
      'Researched industry trends in cost management practices across manufacturing sector',
      'Compiled data and contributed to research papers on cost optimization strategies',
      'Analyzed financial data of 20+ companies for benchmarking studies',
      'Presented findings to senior researchers, receiving commendation for analytical rigor',
    ],
  },
];

const achievements = [
  { emoji: '🏆', text: 'Rank Holder in CMA Intermediate – Top 50 All India' },
  { emoji: '🥇', text: 'Gold Medal in Inter-College Finance Quiz Competition' },
  { emoji: '📜', text: 'Best Paper Presentation at National Commerce Fest' },
  { emoji: '⭐', text: 'Dean\'s List – Consistent Academic Excellence (4 semesters)' },
  { emoji: '🎯', text: 'Led Finance Club as President – Organized 10+ workshops' },
  { emoji: '📊', text: 'Published article on "Cost Optimization in Indian SMEs"' },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ margin: '0 auto 1rem' }}>Experience & Achievements</div>
          <h2 className="section-title">My <span className="highlight">Experience</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Internship experiences at top firms and notable achievements that showcase my professional growth.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="exp__list">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              className="exp__card glass-card"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="exp__card-header">
                <div className="exp__card-icon">
                  <Briefcase size={22} />
                </div>
                <div className="exp__card-info">
                  <h3 className="exp__card-role">{exp.role}</h3>
                  <p className="exp__card-company">{exp.company}</p>
                  <div className="exp__card-meta">
                    <span><Calendar size={13} /> {exp.period}</span>
                    <span><MapPin size={13} /> {exp.location}</span>
                    <span className="exp__card-type">{exp.type}</span>
                  </div>
                </div>
              </div>
              <ul className="exp__card-points">
                {exp.points.map((point, pi) => (
                  <li key={pi}>
                    <ChevronRight size={14} className="exp__point-icon" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          className="achievements"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="achievements__title">Key <span className="achievements__highlight">Achievements</span></h3>
          <div className="achievements__grid">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.text}
                className="achievement__item glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="achievement__emoji">{ach.emoji}</span>
                <p className="achievement__text">{ach.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
