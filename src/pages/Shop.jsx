import { useSearchParams, Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, products, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shop.css';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get('category') || '';
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const FiltersContent = () => (
    <>
      <h3 className="filter-title">Categories</h3>
      <ul className="filter-list">
        <li>
          <Link
            to="/shop"
            className={!categorySlug ? 'active' : ''}
            onClick={() => setShowMobileFilters(false)}
          >
            All
          </Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              to={`/shop?category=${cat.slug}`}
              className={categorySlug === cat.slug ? 'active' : ''}
              onClick={() => setShowMobileFilters(false)}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="filter-title">Price</h3>
      <div className="price-filter">
        <label>
          Min $<input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange(([_, max]) => [Number(e.target.value) || 0, max])}
            min={0}
          />
        </label>
        <label>
          Max $<input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange(([min]) => [min, Number(e.target.value) || 3000])}
            min={0}
          />
        </label>
      </div>
    </>
  );

  const filtered = useMemo(() => {
    let list = categorySlug
      ? getProductsByCategory(categorySlug)
      : products;
    if (sortBy === 'price-low') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
  }, [categorySlug, sortBy, priceRange]);

  return (
    <div className="page-shop">
      <motion.section
        className="shop-hero hero-shader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1 className="page-title">Shop Jewelry</h1>
          <p className="page-subtitle">Discover our collection of fine pieces.</p>
        </div>
      </motion.section>

      <div className="container shop-layout">
        <motion.aside
          className="shop-filters desktop-only"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <FiltersContent />
        </motion.aside>

        <AnimatePresence>
          {showMobileFilters && (
            <>
              <motion.div
                className="filter-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowMobileFilters(false)}
              />
              <motion.aside
                className="filter-drawer-mobile"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div className="drawer-header">
                  <h3 className="drawer-title">Filters</h3>
                  <button
                    className="close-drawer"
                    onClick={() => setShowMobileFilters(false)}
                    aria-label="Close filters"
                  >
                    ×
                  </button>
                </div>
                <div className="drawer-content">
                  <FiltersContent />
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <div className="shop-main">
          <div className="shop-toolbar">
            <div className="toolbar-left">
              <button
                className="mobile-filter-btn"
                onClick={() => setShowMobileFilters(true)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M7 12h10M10 18h4" />
                </svg>
                Filter
              </button>
              <span className="results-count">{filtered.length} pieces</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          <AnimatePresence mode="popLayout">
            {filtered.length ? (
              <motion.div
                className="products-grid"
                layout
                initial={false}
              >
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i % 8} />
                ))}
              </motion.div>
            ) : (
              <motion.p
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No pieces match your filters. Try adjusting price or category.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
