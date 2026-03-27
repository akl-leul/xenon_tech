'use client';

import { PhoneCall, Tag } from 'lucide-react';
import styles from './Hero.module.css';
import { useCall } from '@/components/ClientWrapper';

export default function Hero() {
  const { initiateCall } = useCall();

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    initiateCall();
    window.location.href = 'tel:+251912345678';
  };
  return (
    <section className={styles.heroOuter}>
      <div className={styles.heroInner}>
        
        {/* Luxurious background glowing orbs */}
        <div className={styles.glowOrbPrimary}></div>
        <div className={styles.glowOrbSecondary}></div>
        <div className={styles.glowGrid}></div>

        <div className={`container ${styles.heroContainer}`}>
          
          <div className={`${styles.content} fade-in`}>
            
            <div className={styles.premiumBadge}>
              <span className={styles.pulseDot}></span>
              <span>Premium Tech & AI Agency</span>
            </div>

            <h1 className={styles.title}>
              Engineering <a href="tel:+251912345678" className={styles.boldTag} onClick={handleCall}>
                Bold <span className={styles.freeTag}><Tag size={16} fill="currentColor" /> FREE</span>
              </a> Ideas<br/>
              Scaling <span className={styles.highlightGreen}>Success</span>
            </h1>
            
            <p className={styles.subtitle}>
              Elite full-stack development, <strong className={styles.highlightText}>Advanced AI-driven solutions & Products</strong>, and custom automation for visionary global high-growth brands.
            </p>


          </div>
          
        </div>
      </div>
    </section>
  );
}
