import React, { useState, useEffect } from 'react';
import { PhoneCall, X, Zap, Sparkles } from 'lucide-react';
import styles from './FloatingBlackFridayCTA.module.css';

interface FloatingBlackFridayCTAProps {
  onCallClick: () => void;
}

export default function FloatingBlackFridayCTA({ onCallClick }: FloatingBlackFridayCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    onCallClick();
    window.location.href = 'tel:+251912345678';
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(() => setIsDismissed(true), 500);
  };

  if (isDismissed) return null;

  return (
    <div className={`${styles.floatingWrapper} ${isVisible ? styles.show : styles.hide}`}>
      <div className={styles.ctaCard}>
        <button className={styles.closeBtn} onClick={handleDismiss} aria-label="Dismiss">
          <X size={16} />
        </button>

        <div className={styles.badge}>
          <Zap size={12} fill="currentColor" />
          <span>FREE DEAL</span>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <Sparkles className={styles.sparkle} size={16} />
            <h4 className={styles.promoText}>100% FREE</h4>
          </div>

          <p className={styles.mainTitle}>Try it for free now</p>

          <a
            href="tel:+251912345678"
            className={styles.callButton}
            onClick={handleCall}
          >
            <PhoneCall size={18} />
            <span>CLAIM OFFER NOW</span>
          </a>
        </div>

        <div className={styles.timerBar}>
          <div className={styles.timerFill}></div>
        </div>
      </div>
    </div>
  );
}
