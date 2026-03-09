import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, products, galleryImages } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Motion = motion;

const quote =
  'Whereas disregard and contempt for human rights have resulted in barbarous acts which have outraged the conscience of mankind.';

export default function Home() {
  const featured = products.slice(0, 4);
  const heroImage = galleryImages[0];
  const categoryImages = [galleryImages[1], galleryImages[4], galleryImages[6], galleryImages[9]];
  const bannerImage = galleryImages[2];
  const gallery = [galleryImages[3], galleryImages[5], galleryImages[7], galleryImages[8], galleryImages[10], galleryImages[4]];
  const recent = products.slice(4, 8);
  const collectionsBannerImage = galleryImages[11] || galleryImages[0];

  const promises = [
    { title: 'Certified Materials', desc: 'Ethical sourcing and verified quality.', icon: '◆' },
    { title: 'Free Shipping', desc: 'On orders over $250, worldwide.', icon: '⟡' },
    { title: '30‑Day Returns', desc: 'Easy returns. No questions asked.', icon: '◈' },
    { title: 'Secure Checkout', desc: 'Protected payments, every time.', icon: '⬡' },
  ];

  const testimonials = [
    { name: 'Aarav', text: 'The finishing is unreal. Feels like a piece of art.', meta: 'Verified buyer' },
    { name: 'Meera', text: 'Elegant, minimal, and the packaging was premium.', meta: 'Necklace collection' },
    { name: 'Zoya', text: 'Fast delivery and the shine is beautiful in sunlight.', meta: 'Bracelet set' },
  ];

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
            Luxe Jewels
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafted for the extraordinary
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/shop" className="btn-hero">
              Explore Collection
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
                  <span>Hand‑finished</span>
                  <span className="dot">•</span>
                  <span>Ethically sourced</span>
                  <span className="dot">•</span>
                  <span>Limited drops</span>
                  <span className="dot">•</span>
                  <span>New arrivals weekly</span>
                  <span className="dot">•</span>
                  <span>Gift‑ready packaging</span>
                  <span className="dot">•</span>
                  <span>Signature gold shader</span>
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
            {quote}
          </motion.blockquote>
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
            Buyer Promise
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

      <section className="categories-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Shop by Category
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
                  <span className="category-name">{cat.name}</span>
                  <span className="category-desc">{cat.description}</span>
                </Link>
              </motion.div>
            ))}
          </div>
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
              <p className="banner-eyebrow">Seasonal Drop</p>
              <h2 className="banner-title">Gold, but with attitude.</h2>
              <p className="banner-subtitle">
                Statement pieces made to catch the light — and keep it.
              </p>
              <div className="banner-actions">
                <Link to="/shop" className="btn-hero">
                  Shop New Arrivals
                </Link>
                <Link to="/about" className="btn-secondary">
                  Our Craft
                </Link>
              </div>
            </div>
          </motion.div>
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
              <h2 className="banner-title">The Entire Collection</h2>
              <p className="banner-subtitle">From minimal rings to heavy statement necklaces.</p>
              <Link to="/shop" className="btn-hero">View All Collection</Link>
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
            From Sketch to Shine
          </motion.h2>
          <div className="craft-grid">
            {[
              { t: 'Design', d: 'Bold silhouettes with fine detail.' },
              { t: 'Casting', d: 'Precision metalwork for perfect balance.' },
              { t: 'Setting', d: 'Secure stones and seamless alignment.' },
              { t: 'Polish', d: 'Hand finish for a mirror glow.' },
            ].map((s, i) => (
              <motion.div
                key={s.t}
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

      <section className="featured-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Pieces
          </motion.h2>
          <div className="products-grid">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <motion.div
            className="section-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/shop" className="btn-secondary">
              View All Jewelry
            </Link>
          </motion.div>
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
              Real Stories
            </motion.p>
            <motion.h2
              className="happy-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Happy Customers
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
              <h2 className="newsletter-title">Get early access to drops.</h2>
              <p className="newsletter-desc">
                New pieces, private offers, and styling notes — sent with restraint.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input id="email" type="email" placeholder="you@example.com" required />
              <button type="submit">Notify me</button>
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
            Studio Gallery
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
