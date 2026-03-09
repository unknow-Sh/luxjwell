import { Link, useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Layout.css';

const Motion = motion;

export default function Layout() {
  const location = useLocation();
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { to: '/', label: 'Home', active: location.pathname === '/' },
      { to: '/shop', label: 'Shop', active: location.pathname.startsWith('/shop') },
      { to: '/about', label: 'About', active: location.pathname === '/about' },
      { to: '/contact', label: 'Contact', active: location.pathname === '/contact' },
    ],
    [location.pathname]
  );

  return (
    <div className="app">
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-rail" aria-hidden="true" />
        <motion.div
          className="header-inner container"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="logo" aria-label="Luxe Jewels home">
            <span className="logo-mark" aria-hidden="true">
              ✦
            </span>
            <span className="logo-text">Luxe Jewels</span>
          </Link>

          <div className="header-actions">
            <nav className="nav nav-desktop" aria-label="Primary">
              {navItems.map((i) => (
                <Link key={i.to} to={i.to} className={i.active ? 'active' : ''}>
                  {i.label}
                </Link>
              ))}
            </nav>

            <Link to="/cart" className="cart-link" aria-label="Cart">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cart-icon"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="cart-text">Cart</span>
              {cartCount > 0 && (
                <motion.span
                  className="cart-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={cartCount}
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            <button
              type="button"
              className="menu-btn"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="menu-lines" aria-hidden="true">
                <span className={mobileOpen ? 'line top open' : 'line top'} />
                <span className={mobileOpen ? 'line mid open' : 'line mid'} />
                <span className={mobileOpen ? 'line bot open' : 'line bot'} />
              </span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.button
                type="button"
                className="mobile-overlay"
                aria-label="Close menu overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
              />
              <motion.nav
                className="nav nav-mobile"
                aria-label="Mobile"
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <div className="mobile-panel">
                  {navItems.map((i) => (
                    <Link
                      key={i.to}
                      to={i.to}
                      className={i.active ? 'active' : ''}
                      onClick={() => setMobileOpen(false)}
                    >
                      {i.label}
                    </Link>
                  ))}
                  <div className="mobile-divider" />
                  <Link to="/cart" className="mobile-cart" onClick={() => setMobileOpen(false)}>
                    Cart {cartCount > 0 ? `(${cartCount})` : ''}
                  </Link>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo-text">Luxe Jewels</span>
            <p className="tagline">Crafted for the extraordinary.</p>
          </div>
          <div className="footer-links">
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Luxe Jewels. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
