import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

function StarRating({ rating }) {
  const { t } = useTranslation();
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="product-rating" aria-label={t('product.rating', { rating })}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`star ${i <= full ? 'full' : i === full + 1 && half ? 'half' : ''}`}
        >
          ★
        </span>
      ))}
      <span className="rating-text">{rating}</span>
    </div>
  );
}

export default function ProductCard({ product, index = 0 }) {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  // Dynamic content based on language
  const translatedName = t(`products.${product.id}.name`, { defaultValue: product.name });
  const translatedMaterial = t(`products.${product.id}.material`, { defaultValue: product.material });

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
    >
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-wrap">
          <img src={product.image} alt={translatedName} />
          <span className="product-material">{translatedMaterial}</span>
        </div>
        <div className="product-info">
          <h3 className="product-name">{translatedName}</h3>
          <StarRating rating={product.rating} />
          <p className="product-reviews">{product.reviews} {t('product.reviews')}</p>
          <p className="product-price">${product.price.toLocaleString()}</p>
        </div>
      </Link>
      <motion.button
        type="button"
        className="btn-add-cart"
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {t('product.addToCart')}
      </motion.button>
    </motion.article>
  );
}
