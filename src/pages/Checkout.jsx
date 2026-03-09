import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const { items, cartTotal } = useCart();

  return (
    <div className="page-checkout">
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Checkout
        </motion.h1>
        <motion.p
          className="checkout-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          This is a static demo. No payment is processed.
        </motion.p>
        <div className="checkout-layout">
          <motion.div
            className="checkout-form-wrap"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="form-section-title">Contact</h3>
              <label>
                Email
                <input type="email" placeholder="you@example.com" />
              </label>
              <h3 className="form-section-title">Shipping</h3>
              <label>
                Full name
                <input type="text" placeholder="Full name" />
              </label>
              <label>
                Address
                <input type="text" placeholder="Address" />
              </label>
              <div className="form-row">
                <label>
                  City
                  <input type="text" placeholder="City" />
                </label>
                <label>
                  ZIP
                  <input type="text" placeholder="ZIP" />
                </label>
              </div>
            </form>
          </motion.div>
          <motion.aside
            className="checkout-order"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="order-title">Order summary</h3>
            <ul className="order-list">
              {items.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <span className="order-item-name">{item.name} × {item.quantity}</span>
                  <span className="order-item-price">${(item.price * item.quantity).toLocaleString()}</span>
                </motion.li>
              ))}
            </ul>
            <p className="order-total">
              Total <strong>${cartTotal.toLocaleString()}</strong>
            </p>
            <button type="button" className="btn-place-order">
              Place order (demo)
            </button>
            <Link to="/cart" className="back-cart">Back to cart</Link>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
