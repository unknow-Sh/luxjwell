import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="page-cart">
        <div className="container">
          <motion.div
            className="cart-empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="section-title">Your cart is empty</h2>
            <p className="cart-empty-text">Add beautiful pieces from our shop.</p>
            <Link to="/shop" className="btn-hero">Browse Shop</Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-cart">
      <div className="container">
        <motion.h1
          className="page-title cart-page-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Shopping Cart
        </motion.h1>
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className="cart-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                layout
              >
                <div className="cart-row-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-row-info">
                  <h3 className="cart-row-name">{item.name}</h3>
                  <p className="cart-row-material">{item.material}</p>
                  <p className="cart-row-price">${item.price.toLocaleString()}</p>
                </div>
                <div className="cart-row-qty">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Decrease"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Increase"
                  >
                    +
                  </button>
                </div>
                <p className="cart-row-total">${(item.price * item.quantity).toLocaleString()}</p>
                <button
                  type="button"
                  className="cart-row-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove"
                >
                  ×
                </button>
              </motion.div>
            ))}
          </div>
          <motion.aside
            className="cart-summary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="summary-title">Summary</h3>
            <p className="summary-total">
              Total <strong>${cartTotal.toLocaleString()}</strong>
            </p>
            <Link to="/checkout" className="btn-checkout">
              Proceed to Checkout
            </Link>
            <Link to="/shop" className="cart-continue">Continue shopping</Link>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
