import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="page-contact">
      <motion.section
        className="contact-hero hero-shader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1 className="page-title">{t('contact.title')}</h1>
          <p className="contact-tagline">{t('contact.tagline')}</p>
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
            <h3 className="contact-heading">{t('contact.info.title')}</h3>
            <p className="contact-text">
              {t('contact.info.desc')}
            </p>
            <ul className="contact-details">
              <li><strong>{t('contact.info.email')}</strong> hello@luxejewels.com</li>
              <li><strong>{t('contact.info.phone')}</strong> +1 (555) 123-4567</li>
              <li><strong>{t('contact.info.address')}</strong> 123 Jewel Lane, Suite 100</li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              {t('contact.form.name')}
              <input type="text" placeholder={t('contact.form.namePlaceholder')} />
            </label>
            <label>
              {t('contact.form.email')}
              <input type="email" placeholder={t('contact.form.emailPlaceholder')} />
            </label>
            <label>
              {t('contact.form.message')}
              <textarea rows={5} placeholder={t('contact.form.messagePlaceholder')} />
            </label>
            <button type="submit" className="btn-submit">{t('contact.form.submit')}</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
