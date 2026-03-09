import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getProductById, getSimilarProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

function StarRating({ rating, reviews }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="product-rating large" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`star ${i <= full ? 'full' : i === full + 1 && half ? 'half' : ''}`}
        >
          ★
        </span>
      ))}
      <span className="rating-text">{rating} ({reviews} reviews)</span>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const item = getProductById(id);

  if (!item) {
    return (
      <div className="container page-product">
        <p>Product not found.</p>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

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
              alt={item.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="product-detail-info">
            <span className="product-material-tag">{item.material}</span>
            <h1 className="product-detail-title">{item.name}</h1>
            <StarRating rating={item.rating} reviews={item.reviews} />
            <p className="product-detail-price">${item.price.toLocaleString()}</p>
            <p className="product-detail-desc">
              A beautifully crafted piece from our collection. {item.material} construction
              ensures lasting elegance. Perfect for everyday wear or special occasions.
            </p>
            <div className="quantity-row">
              <label>Quantity</label>
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
              Add to Cart — ${(item.price * quantity).toLocaleString()}
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
              Similar Pieces
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
