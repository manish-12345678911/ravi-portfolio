import { motion } from 'framer-motion';
import { Layers, Calculator, PlayCircle, TrendingUp, ExternalLink } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Inventory Valuation',
    category: 'Cost Accounting & Standards',
    description: 'Executed comprehensive inventory valuation for Raw Materials, WIP, and Finished Goods in compliance with Cost Accounting Standards and AS-2 / Ind AS 2, standardizing item valuation and resolving stock variances.',
    tech: ['Inventory Costing', 'BOM Verification', 'AS-2 / Ind AS 2', 'ERP / SAP', 'Advanced Excel'],
    icon: <Layers size={24} />,
    color: '#facc15',
    metrics: '100% Audit Compliance',
  },
  {
    title: 'PPH Updation (Parts Per Hour)',
    category: 'Manufacturing Costing',
    description: 'Analyzed and updated production line Parts Per Hour (PPH) metrics and cycle times across shop-floor operations to ensure accurate machine hour rate calculation, labor cost absorption, and operational costing.',
    tech: ['PPH Rate Analysis', 'Machine Hour Rate', 'Operational Costing', 'Capacity Planning'],
    icon: <Calculator size={24} />,
    color: '#38bdf8',
    metrics: 'Enhanced Costing Accuracy',
  },
  {
    title: 'Cost Run',
    category: 'Product Costing & ERP Execution',
    description: 'Executed periodic standard product cost runs in ERP, integrating updated Bills of Materials (BOM), routings, overhead allocation keys, and raw material pricing for precise unit costing and margin control.',
    tech: ['Standard Costing', 'ERP Cost Run', 'BOM & Routing', 'Overhead Allocation'],
    icon: <PlayCircle size={24} />,
    color: '#34d399',
    metrics: 'Automated Product Costing',
  },
  {
    title: 'Pricing Differences',
    category: 'Variance Analysis & Reconciliation',
    description: 'Performed thorough variance analysis on sales and purchase pricing differences against approved cost sheets and purchase orders, identifying price variances and resolving debit/credit note discrepancies.',
    tech: ['Price Variance Analysis', 'Cost Sheets', 'Debit/Credit Notes', 'MIS Dashboards'],
    icon: <TrendingUp size={24} />,
    color: '#a78bfa',
    metrics: 'Zero Revenue Leakage',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ margin: '0 auto 1rem' }}>My Projects</div>
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Practical projects demonstrating my ability to solve real financial challenges using analytical tools and domain expertise.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="project-card__top">
                <div className="project-card__icon" style={{ color: project.color, background: `${project.color}15` }}>
                  {project.icon}
                </div>
                <span className="project-card__category">{project.category}</span>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__metric">
                <TrendingUp size={14} />
                <span>{project.metrics}</span>
              </div>

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-card__tech-tag">{t}</span>
                ))}
              </div>

              <a href="#" className="project-card__link">
                View Details <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
