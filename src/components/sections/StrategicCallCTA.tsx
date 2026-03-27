'use client';

import { PhoneCall, PhoneCall as PhoneIcon, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import styles from './StrategicCallCTA.module.css';
import { useCall } from '@/components/ClientWrapper';

export default function StrategicCallCTA() {
  const { initiateCall } = useCall();

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    initiateCall();
    window.location.href = 'tel:+251912345678';
  };

  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.glassCard}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <Sparkles size={14} />
              <span>Limited Time Offer</span>
            </div>

            <h2 className={styles.title}>
              Ready to <span className={styles.gradientText}>Scale</span> Your Vision?
            </h2>

            <p className={styles.subtitle}>
              Get a custom technical roadmap and a <strong className={styles.bold}>100% Free</strong> on your initial consultation. Our experts are standing by.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <ShieldCheck size={18} className={styles.featureIcon} />
                <span>Expert Guidance</span>
              </div>
              <div className={styles.feature}>
                <Zap size={18} className={styles.featureIcon} />
                <span>Rapid Execution</span>
              </div>
            </div>

            <a
              href="tel:+251912345678"
              className={styles.callButton}
              onClick={handleCall}
            >
              <PhoneCall size={20} />
              <span>Call Now for 100% Free</span>
            </a>

            <p className={styles.finePrint}>
              Available 24/7 for urgent inquiries. Response time &lt; 2 hours.
            </p>
          </div>

          <div className={styles.visuals}>
            <div className={styles.glowCircle}></div>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.incomingCall}>
                  <div className={styles.avatar}>XT</div>
                  <div className={styles.callerName}>Xenon Tech</div>
                  <div className={styles.pulseWaves}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
