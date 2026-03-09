import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="product-rating" aria-label={`Rating: ${rating} out of 5`}>
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
  const { addToCart } = useCart();

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
          <img src={product.image} alt={product.name} />
          <span className="product-material">{product.material}</span>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <StarRating rating={product.rating} />
          <p className="product-reviews">{product.reviews} reviews</p>
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
        Add to Cart
      </motion.button>
    </motion.article>
  );
}
