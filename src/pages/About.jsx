import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <div className="page-about">
      <motion.section
        className="about-hero hero-shader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1 className="page-title">About Luxe Jewels</h1>
          <p className="about-tagline">Where craftsmanship meets timeless design.</p>
        </div>
      </motion.section>
      <div className="container">
        <motion.section
          className="about-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="content-heading">Our Story</h2>
          <p>
            Luxe Jewels was founded on the belief that every piece of jewelry should tell a story.
            We source the finest materials and work with skilled artisans to create pieces that
            last generations. From classic solitaires to contemporary designs, our collection
            celebrates both tradition and innovation.
          </p>
          <p>
            We are committed to ethical sourcing and sustainable practices. Every piece is
            crafted with care and designed to be worn and cherished for a lifetime.
          </p>
        </motion.section>
        <motion.section
          className="about-values"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="content-heading">What We Stand For</h2>
          <ul className="values-list">
            <li><strong>Quality</strong> — Only the finest materials and craftsmanship.</li>
            <li><strong>Integrity</strong> — Transparent sourcing and fair practices.</li>
            <li><strong>Beauty</strong> — Designs that stand the test of time.</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
