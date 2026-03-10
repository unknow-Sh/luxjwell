import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';
import './SwipeableProductStack.css';

export default function SwipeableProductStack({ products }) {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDragEnd = (event, info) => {
        const swipeThreshold = 50;
        const velocityThreshold = 500;

        // Check for swipe based on distance or velocity
        if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
            nextCard();
        } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
            nextCard();
        }
    };

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const stackSize = 3;
    const visibleProducts = [];
    for (let i = 0; i < stackSize; i++) {
        const index = (currentIndex + i) % products.length;
        visibleProducts.push({ ...products[index], stackIndex: i });
    }

    return (
        <div className="swipe-stack-wrapper">
            <div className="swipe-stack-container">
                <AnimatePresence mode="popLayout" initial={false}>
                    {visibleProducts.map((product, i) => {
                        const isTop = i === 0;
                        return (
                            <motion.div
                                key={product.id}
                                className={`swipe-card-wrapper ${isTop ? 'top-card' : ''}`}
                                style={{
                                    zIndex: products.length - i,
                                }}
                                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                                animate={{
                                    scale: 1 - i * 0.05,
                                    y: i * 12,
                                    opacity: 1,
                                }}
                                exit={{
                                    x: isTop ? (Math.random() > 0.5 ? 800 : -800) : 0,
                                    opacity: 0,
                                    rotate: isTop ? (Math.random() > 0.5 ? 45 : -45) : 0,
                                    transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                                drag={isTop ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={isTop ? handleDragEnd : undefined}
                                whileDrag={{ scale: 1.02, cursor: 'grabbing' }}
                            >
                                <ProductCard product={product} />
                                {isTop && (
                                    <div className="swipe-hint">
                                        <span>{t('swipe.hint')}</span>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
