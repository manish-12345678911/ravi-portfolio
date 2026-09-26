import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const education = [
  {
    degree: 'CMA (Cost & Management Accountant)',
    institution: 'The Institute of Cost Accountants of India (ICMAI)',
    period: '2021 – 2024',
    location: 'India',
    grade: 'Cleared Both Groups',
    highlights: ['Cost Accounting', 'Financial Management', 'Strategic Management', 'Corporate Law & Compliance'],
    icon: <Award size={24} />,
  },
  {
    degree: 'B.Com (Honours) in Accounting & Finance',
    institution: 'Delhi University',
    period: '2020 – 2023',
    location: 'New Delhi, India',
    grade: 'CGPA: 8.5 / 10',
    highlights: ['Financial Accounting', 'Business Statistics', 'Taxation', 'Corporate Finance'],
    icon: <GraduationCap size={24} />,
  },
  {
    degree: 'Senior Secondary (Class XII - Commerce)',
    institution: 'Kendriya Vidyalaya',
    period: '2018 – 2020',
    location: 'New Delhi, India',
    grade: '92% in CBSE Board',
    highlights: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
    icon: <GraduationCap size={24} />,
  },
];

const certifications = [
  { name: 'CMA Certification – ICMAI', issuer: 'ICMAI', year: '2024', color: '#facc15' },
  { name: 'Advanced Excel for Finance', issuer: 'Coursera', year: '2023', color: '#38bdf8' },
  { name: 'Financial Modelling & Valuation', issuer: 'Udemy', year: '2023', color: '#a78bfa' },
  { name: 'GST Certification Course', issuer: 'ICAI', year: '2023', color: '#34d399' },
  { name: 'Tally ERP 9 Professional', issuer: 'Tally Education', year: '2022', color: '#fb923c' },
  { name: 'Power BI for Business Analytics', issuer: 'Microsoft', year: '2024', color: '#f472b6' },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ margin: '0 auto 1rem' }}>Education & Certifications</div>
          <h2 className="section-title">Education & <span className="highlight">Certification</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A strong academic foundation complemented by industry-recognized certifications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="edu__timeline">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              className={`edu__item ${i % 2 === 0 ? 'edu__item--left' : 'edu__item--right'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="edu__card glass-card">
                <div className="edu__card-icon">{item.icon}</div>
                <h3 className="edu__card-degree">{item.degree}</h3>
                <p className="edu__card-institution">{item.institution}</p>
                <div className="edu__card-meta">
                  <span className="edu__card-meta-item">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                  <span className="edu__card-meta-item">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>
                <div className="edu__card-grade">{item.grade}</div>
                <div className="edu__card-tags">
                  {item.highlights.map((h) => (
                    <span key={h} className="edu__card-tag">{h}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="edu__cert-heading">Professional Certifications</h3>
          <div className="edu__certs-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="edu__cert glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="edu__cert-dot" style={{ background: cert.color }} />
                <div className="edu__cert-info">
                  <h4 className="edu__cert-name">{cert.name}</h4>
                  <p className="edu__cert-issuer">{cert.issuer} · {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
