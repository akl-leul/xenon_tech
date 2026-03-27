import React, { useEffect, useState } from 'react';
import { Phone, X, CheckCircle2, Clock } from 'lucide-react';
import styles from './CallFeedback.module.css';

interface CallFeedbackProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function CallFeedback({ isVisible, onClose }: CallFeedbackProps) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        // Optional: Auto-close after 10 seconds
        // onClose();
      }, 10000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  return (
    <div className={`${styles.overlay} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        
        <div className={styles.iconWrapper}>
          <Phone className={styles.phoneIcon} size={32} />
          <div className={styles.pulseRing}></div>
        </div>

        <h3 className={styles.title}>Connecting...</h3>
        
        <div className={styles.messages}>
          <div className={styles.messageItem}>
            <CheckCircle2 size={18} className={styles.successIcon} />
            <p>Thanks for calling Xenon Tech!</p>
          </div>
          <div className={styles.messageItem}>
            <Clock size={18} className={styles.infoIcon} />
            <p>If we didn't answer, we will respond in 1-2 hours.</p>
          </div>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>

        <button className={styles.confirmBtn} onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}
