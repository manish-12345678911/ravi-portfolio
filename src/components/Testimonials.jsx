import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Mr. Arun Sharma',
    role: 'Senior Manager, Finance – Deloitte India',
    text: 'Ravi demonstrated exceptional analytical skills during his internship. His ability to quickly grasp complex financial models and deliver actionable insights was impressive. He\'s a natural problem solver with great attention to detail.',
    initials: 'AS',
  },
  {
    name: 'Dr. Priya Mehta',
    role: 'Professor of Finance – Delhi University',
    text: 'Ravi has been one of the most dedicated students I\'ve taught. His research on cost optimization in Indian SMEs was published and well-received. He combines academic rigor with practical thinking – a rare combination.',
    initials: 'PM',
  },
  {
    name: 'Mr. Vikram Patel',
    role: 'Audit Lead – KPMG India',
    text: 'Working with Ravi was a pleasure. He brought fresh perspectives to our audit processes and was proactive in learning. His proficiency in Tally and Excel macros significantly improved our team\'s efficiency.',
    initials: 'VP',
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [[active, direction], setActive] = useState([0, 0]);

  const paginate = useCallback((newDirection) => {
    setActive(([prev]) => {
      const next = (prev + newDirection + testimonials.length) % testimonials.length;
      return [next, newDirection];
    });
  }, []);

  // Auto-play with pause on hover
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, paginate]);

  const goTo = (index) => {
    setActive(([prev]) => [index, index > prev ? 1 : -1]);
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ margin: '0 auto 1rem' }}>Testimonials</div>
          <h2 className="section-title"><span className="highlight">Testimonials</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Feedback from mentors, professors, and industry professionals I've had the privilege to work with.
          </p>
        </motion.div>

        <motion.div
          className="testimonials__slider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="testimonials__card glass-card">
            <div className="testimonials__quote-icon">
              <Quote size={32} />
            </div>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="testimonials__text">{testimonials[active].text}</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">{testimonials[active].initials}</div>
                  <div>
                    <h4 className="testimonials__name">{testimonials[active].name}</h4>
                    <p className="testimonials__role">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonials__controls">
            <button
              className="testimonials__arrow"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonials__arrow"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
