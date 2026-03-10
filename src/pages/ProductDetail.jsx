import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getProductById, getSimilarProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

function StarRating({ rating, reviews }) {
  const { t } = useTranslation();
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="product-rating large" aria-label={t('product.rating', { rating })}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`star ${i <= full ? 'full' : i === full + 1 && half ? 'half' : ''}`}
        >
          ★
        </span>
      ))}
      <span className="rating-text">{rating} ({reviews} {t('product.reviews')})</span>
    </div>
  );
}

export default function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const item = getProductById(id);

  if (!item) {
    return (
      <div className="container page-product">
        <p>{t('product.notFound')}</p>
        <Link to="/shop">{t('product.backToShop')}</Link>
      </div>
    );
  }

  const translatedName = t(`products.${item.id}.name`, { defaultValue: item.name });
  const translatedMaterial = t(`products.${item.id}.material`, { defaultValue: item.material });
  const similar = getSimilarProducts(item.id, item.category);

  return (
    <div className="page-product">
      <div className="container">
        <motion.div
          className="product-detail-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="product-gallery">
            <motion.img
              key={item.image}
              src={item.image}
              alt={translatedName}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="product-detail-info">
            <span className="product-material-tag">{translatedMaterial}</span>
            <h1 className="product-detail-title">{translatedName}</h1>
            <StarRating rating={item.rating} reviews={item.reviews} />
            <p className="product-detail-price">${item.price.toLocaleString()}</p>
            <p className="product-detail-desc">
              {t('product.description', { material: translatedMaterial })}
            </p>
            <div className="quantity-row">
              <label>{t('product.quantity')}</label>
              <div className="quantity-controls">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            <motion.button
              type="button"
              className="btn-add-cart-large"
              onClick={() => addToCart(item, quantity)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('product.addToCart')} — ${(item.price * quantity).toLocaleString()}
            </motion.button>
          </div>
        </motion.div>

        {similar.length > 0 && (
          <section className="similar-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('product.similar')}
            </motion.h2>
            <div className="similar-grid">
              {similar.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
