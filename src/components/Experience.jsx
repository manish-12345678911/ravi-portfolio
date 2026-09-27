import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Costing Executive',
    company: 'Shivam Autotech Ltd.',
    period: 'Aug 2026 – Present',
    location: 'Gurugram, Haryana',
    type: 'Current Role',
    points: [
      'Spearheading product costing calculations, standard cost runs, and variance analysis in ERP.',
      'Performing BOM (Bill of Materials) analysis and routing verification to optimize machine hour and labor cost absorption.',
      'Managing production line Parts Per Hour (PPH) rate updations and monitoring shop-floor material consumption.',
      'Leading monthly inventory valuation for Raw Materials, WIP, and Finished Goods to ensure financial reporting accuracy.',
    ],
  },
  {
    role: 'Finance Executive',
    company: 'SK Goel & Associates',
    period: 'Jan 2026 – Jul 2026',
    location: 'New Delhi, India',
    type: 'Professional',
    points: [
      'Computed Advance Tax liabilities and ensured timely, accurate statutory direct tax compliance.',
      'Prepared and filed monthly GST returns (GSTR-1 & GSTR-3B) with comprehensive ITC reconciliations.',
      'Formulated comprehensive project financial reports incorporating historical trend analysis and future business projections.',
      'Assessed statutory applicability of Government incentive schemes and CSR provisions under the Companies Act.',
      'Handled books finalization and led preparation of annual Financial Statements for corporate clients.',
    ],
  },
  {
    role: 'Finance Trainee',
    company: 'VMR & Company',
    period: 'Feb 2025 – Sep 2025',
    location: 'New Delhi, India',
    type: 'Traineeship',
    points: [
      'Conducted statutory audits for multiple corporate entities ensuring rigorous adherence to Accounting Standards.',
      'Assisted in Concurrent Bank Audits for bank branches, verifying transaction accuracy and regulatory compliance.',
      'Performed internal audits, tested internal financial controls (IFC), and reported operational risk gaps to management.',
      'Filed timely and accurate GST & Income Tax returns for corporate clients, partnership firms, and individuals.',
      'Facilitated GST, MSME registrations, and statutory compliance filings for EPFO and ESIC.',
    ],
  },
  {
    role: 'Cost & Management Trainee',
    company: 'Sanjay Gupta & Associates',
    period: 'Apr 2023 – Aug 2024',
    location: 'New Delhi, India',
    type: 'Traineeship',
    points: [
      'Executed Cost Audits across Telecom, Manufacturing, and Power industries for leading organizations including DLF, Tata Power, APL Apollo, C&S Electric, and Avantec Aircon.',
      'Maintained cost accounting records in accordance with mandatory Cost Accounting Standards (CAS) and Companies Act.',
      'Determined product costing utilizing BOM analysis, raw material consumption norms, direct labor hours, and manufacturing overheads.',
      'Prepared Accounting Separation Reports (ASR) for the telecom industry, reconciled with Cost Audit Reports and financial statements.',
      'Compiled Insolvency & Bankruptcy data, performed creditor claim verifications, drafted audit replies, and prepared Board-level MIS reports.',
    ],
  },
];

const achievements = [
  { emoji: '🏆', text: 'CMA Qualified – Cleared all stages (Foundation, Intermediate & Final) under ICMAI' },
  { emoji: '🏭', text: 'Conducted Cost Audits for Leading Firms: DLF, Tata Power, APL Apollo, C&S Electric' },
  { emoji: '💼', text: 'Active Costing Executive driving ERP standard cost runs & BOM optimization at Shivam Autotech' },
  { emoji: '🎓', text: 'B.Com (Prog.) from University of Delhi with 7.348 CGPA' },
  { emoji: '💻', text: 'Diploma in Computer Application (DCA) – JTTI Institute' },
  { emoji: '📊', text: 'Comprehensive expertise in Accounting Standards, CAS, GST Act-2017 & Companies Act-2013' },
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
