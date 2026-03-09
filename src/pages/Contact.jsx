import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page-contact">
      <motion.section
        className="contact-hero hero-shader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="contact-tagline">We’d love to hear from you.</p>
        </div>
      </motion.section>
      <div className="container">
        <motion.div
          className="contact-layout"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="contact-info">
            <h3 className="contact-heading">Get in touch</h3>
            <p className="contact-text">
              For inquiries about our collection, custom orders, or partnerships,
              please reach out. We typically respond within 24 hours.
            </p>
            <ul className="contact-details">
              <li><strong>Email</strong> hello@luxejewels.com</li>
              <li><strong>Phone</strong> +1 (555) 123-4567</li>
              <li><strong>Address</strong> 123 Jewel Lane, Suite 100</li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="your@email.com" />
            </label>
            <label>
              Message
              <textarea rows={5} placeholder="Your message" />
            </label>
            <button type="submit" className="btn-submit">Send message</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
