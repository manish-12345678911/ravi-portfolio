import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'ravi.kumar@email.com', href: 'mailto:ravi.kumar@email.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'New Delhi, India', href: null },
    { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/ravikumar', href: 'https://linkedin.com/in/ravikumar' },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ margin: '0 auto 1rem' }}>Get In Touch</div>
          <h2 className="section-title">Contact <span className="highlight">Me</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Interested in discussing opportunities? I'd love to hear from you. 
            Feel free to reach out for campus placement inquiries, collaborations, or just a chat.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Contact Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-desc">
              I'm currently seeking campus placement opportunities in finance, accounting, 
              and cost management. Don't hesitate to reach out!
            </p>

            <div className="contact__info-list">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact__info-item">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__info-value" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__availability">
              <span className="contact__availability-dot" />
              Available for immediate placement
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Campus Placement Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about the opportunity..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-gold contact__submit" disabled={submitted}>
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
