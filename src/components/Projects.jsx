import { motion } from 'framer-motion';
import { ExternalLink, BarChart3, FileSpreadsheet, PieChart, TrendingUp, Calculator, Database } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Financial Dashboard for SME',
    category: 'Financial Analysis',
    description: 'Developed a comprehensive financial dashboard using Excel and Power BI to visualize KPIs, revenue trends, and expense breakdowns for a small manufacturing business.',
    tech: ['Power BI', 'Excel', 'Data Modeling'],
    icon: <BarChart3 size={24} />,
    color: '#facc15',
    metrics: '40% faster reporting',
  },
  {
    title: 'Cost Variance Analysis System',
    category: 'Cost Accounting',
    description: 'Built an automated cost variance analysis tool that identifies material, labor, and overhead variances, enabling real-time cost control and decision-making.',
    tech: ['Advanced Excel', 'VBA Macros', 'Tally'],
    icon: <Calculator size={24} />,
    color: '#38bdf8',
    metrics: '25% cost reduction identified',
  },
  {
    title: 'GST Compliance Tracker',
    category: 'Tax Compliance',
    description: 'Designed a GST compliance tracking system to automate GSTR filing reminders, input tax credit reconciliation, and generate compliance reports.',
    tech: ['Excel', 'Tally Prime', 'Google Sheets'],
    icon: <FileSpreadsheet size={24} />,
    color: '#34d399',
    metrics: '100% filing accuracy',
  },
  {
    title: 'Budget Forecasting Model',
    category: 'Budgeting',
    description: 'Created a dynamic budget forecasting model using statistical methods and historical data analysis to predict quarterly revenues and expenses for a mid-size firm.',
    tech: ['Excel', 'Python', 'Power BI'],
    icon: <TrendingUp size={24} />,
    color: '#a78bfa',
    metrics: '95% forecast accuracy',
  },
  {
    title: 'Working Capital Optimization',
    category: 'Financial Management',
    description: 'Analyzed working capital components (inventory, receivables, payables) and proposed optimization strategies that improved cash flow by ₹15L annually.',
    tech: ['Financial Analysis', 'Excel', 'Ratio Analysis'],
    icon: <PieChart size={24} />,
    color: '#fb923c',
    metrics: '₹15L cash flow improvement',
  },
  {
    title: 'Inventory Costing System',
    category: 'Cost Management',
    description: 'Implemented FIFO, LIFO, and weighted average costing methods in a unified system to help a retail chain optimize inventory valuation and reduce holding costs.',
    tech: ['Tally', 'Excel', 'SAP Basics'],
    icon: <Database size={24} />,
    color: '#f472b6',
    metrics: '18% holding cost reduced',
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
