import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { categories, products, galleryImages } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';
import SwipeableProductStack from '../components/SwipeableProductStack';

export default function Home() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const featured = products.slice(0, 8);
  const heroImage = galleryImages[0];
  const categoryImages = [galleryImages[1], galleryImages[4], galleryImages[6], galleryImages[9]];
  const bannerImage = galleryImages[2];
  const gallery = [galleryImages[3], galleryImages[5], galleryImages[7], galleryImages[8], galleryImages[10], galleryImages[4]];
  const collectionsBannerImage = galleryImages[11] || galleryImages[0];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const promises = [
    { title: t('promises.certified.title'), desc: t('promises.certified.desc'), icon: '◆' },
    { title: t('promises.shipping.title'), desc: t('promises.shipping.desc'), icon: '⟡' },
    { title: t('promises.returns.title'), desc: t('promises.returns.desc'), icon: '◈' },
    { title: t('promises.secure.title'), desc: t('promises.secure.desc'), icon: '⬡' },
  ];

  const testimonials = t('testimonials', { returnObjects: true });

  return (
    <div className="page-home">
      <section className="hero hero-shader" style={{ '--hero-image': `url(${heroImage})` }}>
        <div className="hero-bg-pattern" aria-hidden="true" />
        <div className="container hero-inner">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/shop" className="btn-hero">
              {t('home.hero.cta')}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Brand highlights">
        <div className="container">
          <div className="marquee-card">
            <motion.div
              className="marquee-track"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
            >
              {Array.from({ length: 2 }).map((_, idx) => (
                <div className="marquee-row" key={idx}>
                  <span>{t('home.marquee.handFinished')}</span>
                  <span className="dot">•</span>
                  <span>{t('home.marquee.ethicallySourced')}</span>
                  <span className="dot">•</span>
                  <span>{t('home.marquee.limitedDrops')}</span>
                  <span className="dot">•</span>
                  <span>{t('home.marquee.newArrivals')}</span>
                  <span className="dot">•</span>
                  <span>{t('home.marquee.giftReady')}</span>
                  <span className="dot">•</span>
                  <span>{t('home.marquee.goldShader')}</span>
                  <span className="dot">•</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <motion.blockquote
            className="main-quote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {t('home.quote')}
          </motion.blockquote>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('home.categories.title')}
          </motion.h2>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={`/shop?category=${cat.slug}`}
                  className="category-card"
                  style={{ '--cat-image': `url(${categoryImages[i % categoryImages.length]})` }}
                >
                  <span className="category-name">{t(`categories.${cat.id}.name`)}</span>
                  <span className="category-desc">{t(`categories.${cat.id}.description`)}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('home.featured.title')}
          </motion.h2>

          {isMobile ? (
            <SwipeableProductStack products={featured} />
          ) : (
            <div className="products-grid">
              {featured.slice(0, 4).map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}

          <motion.div
            className="section-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ marginTop: isMobile ? '6rem' : '2rem' }}
          >
            <Link to="/shop" className="btn-secondary">
              {t('home.featured.viewAll')}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="promises-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {t('home.promise.title')}
          </motion.h2>
          <div className="promise-grid">
            {promises.map((p, i) => (
              <motion.article
                key={p.title}
                className="promise-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="promise-icon" aria-hidden="true">
                  {p.icon}
                </div>
                <h3 className="promise-title">{p.title}</h3>
                <p className="promise-desc">{p.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="heritage-section">
        <div className="container">
          <div className="heritage-grid">
            <motion.div
              className="heritage-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={galleryImages[8]} alt="Craftsmanship" />
            </motion.div>
            <motion.div
              className="heritage-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow">{t('home.heritage.eyebrow')}</p>
              <h2 className="section-title-left">{t('home.heritage.title')}</h2>
              <p>{t('home.heritage.desc')}</p>
              <Link to="/about" className="link-underlined">{t('home.heritage.cta')}</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="ethical-section">
        <div className="container">
          <motion.div
            className="ethical-banner"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="ethical-overlay">
              <h2 className="banner-title">{t('home.ethical.title')}</h2>
              <p>{t('home.ethical.desc')}</p>
              <div className="ethical-badges">
                <span>✦ {t('home.ethical.badges.fairTrade')}</span>
                <span>✦ {t('home.ethical.badges.conflictFree')}</span>
                <span>✦ {t('home.ethical.badges.recycledGold')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="banner-section" style={{ '--banner-image': `url(${bannerImage})` }}>
        <div className="container">
          <motion.div
            className="banner-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="banner-content">
              <p className="banner-eyebrow">{t('home.banner.eyebrow')}</p>
              <h2 className="banner-title">{t('home.banner.title')}</h2>
              <p className="banner-subtitle">
                {t('home.banner.subtitle')}
              </p>
              <div className="banner-actions">
                <Link to="/shop" className="btn-hero">
                  {t('home.banner.cta')}
                </Link>
                <Link to="/about" className="btn-secondary">
                  {t('home.banner.secondaryCta')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="craft-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {t('home.craft.title')}
          </motion.h2>
          <div className="craft-grid">
            {[
              { id: 'design', ...t('home.craft.steps.design', { returnObjects: true }) },
              { id: 'casting', ...t('home.craft.steps.casting', { returnObjects: true }) },
              { id: 'setting', ...t('home.craft.steps.setting', { returnObjects: true }) },
              { id: 'polish', ...t('home.craft.steps.polish', { returnObjects: true }) },
            ].map((s, i) => (
              <motion.div
                key={s.id}
                className="craft-step"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="craft-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="craft-title">{s.t}</h3>
                <p className="craft-desc">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gift-section">
        <div className="container">
          <div className="gift-header">
            <h2 className="section-title">{t('home.gift.title')}</h2>
            <p className="section-subtitle">{t('home.gift.subtitle')}</p>
          </div>
          <div className="gift-grid">
            {[
              { title: t('home.gift.categories.her'), img: galleryImages[1] },
              { title: t('home.gift.categories.him'), img: galleryImages[7] },
              { title: t('home.gift.categories.anniversary'), img: galleryImages[5] }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="gift-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="gift-img-wrap">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <Link to="/shop" className="btn-text">{t('home.gift.cta')} →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="collections-banner-section" style={{ '--bg-image': `url(${collectionsBannerImage})` }}>
        <div className="container">
          <motion.div
            className="collections-banner-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="collections-banner-content">
              <h2 className="banner-title">{t('home.collectionsBanner.title')}</h2>
              <p className="banner-subtitle">{t('home.collectionsBanner.subtitle')}</p>
              <Link to="/shop" className="btn-hero">{t('home.collectionsBanner.cta')}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="social-section">
        <div className="container">
          <h2 className="section-title">{t('home.social.title')}</h2>
          <p className="section-subtitle">{t('home.social.handle')}</p>
          <div className="social-grid">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                className="social-tile"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <img src={img} alt="Instagram post" />
                <div className="social-overlay">
                  <span>❤ 1.2k</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="happy-customers-section">
        <div className="happy-customers-bg" />
        <div className="container">
          <div className="happy-header">
            <motion.p
              className="happy-eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {t('home.customers.eyebrow')}
            </motion.p>
            <motion.h2
              className="happy-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {t('home.customers.title')}
            </motion.h2>
          </div>
          <div className="testimonial-slider">
            <div className="testimonial-grid">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.name}
                  className="testimonial-premium"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="quote-mark">“</span>
                  <blockquote className="testimonial-text">{t.text}</blockquote>
                  <figcaption className="testimonial-author">
                    <span className="t-name">{t.name}</span>
                    <span className="t-meta">{t.meta}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="store-locator-section">
        <div className="container">
          <div className="locator-card">
            <div className="locator-content">
              <h2 className="section-title-left">{t('home.store.title')}</h2>
              <p>{t('home.store.desc')}</p>
              <div className="locator-details">
                <p><strong>{t('home.store.location')}:</strong> 42 Golden St, London</p>
                <p><strong>{t('home.store.hours')}:</strong> Mon-Sat: 10am - 7pm</p>
              </div>
              <button className="btn-secondary">{t('home.store.cta')}</button>
            </div>
            <div className="locator-map">
              <img src={galleryImages[10]} alt="Shop front" />
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <motion.div
            className="newsletter-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="newsletter-copy">
              <h2 className="newsletter-title">{t('home.newsletter.title')}</h2>
              <p className="newsletter-desc">
                {t('home.newsletter.desc')}
              </p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <label className="sr-only" htmlFor="email">
                {t('home.newsletter.email')}
              </label>
              <input id="email" type="email" placeholder={t('home.newsletter.placeholder')} required />
              <button type="submit">{t('home.newsletter.cta')}</button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {t('home.gallery.title')}
          </motion.h2>
          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <motion.div
                key={`${src}-${i}`}
                className="gallery-tile"
                style={{ '--tile-image': `url(${src})` }}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                whileHover={{ scale: 1.02 }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
