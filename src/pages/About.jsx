import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './About.css';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="page-about">
      <motion.section
        className="about-hero hero-shader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1 className="page-title">{t('about.title')}</h1>
          <p className="about-tagline">{t('about.tagline')}</p>
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
          <h2 className="content-heading">{t('about.story.title')}</h2>
          <p>{t('about.story.p1')}</p>
          <p>{t('about.story.p2')}</p>
        </motion.section>
        <motion.section
          className="about-values"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="content-heading">{t('about.values.title')}</h2>
          <ul className="values-list">
            <li><strong>{t('about.values.quality.t')}</strong> — {t('about.values.quality.d')}</li>
            <li><strong>{t('about.values.integrity.t')}</strong> — {t('about.values.integrity.d')}</li>
            <li><strong>{t('about.values.beauty.t')}</strong> — {t('about.values.beauty.d')}</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
