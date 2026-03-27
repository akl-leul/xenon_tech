import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brand}>
          <h2 className="gradient-text">Xenon Tech</h2>
          <p>Premium Digital Solutions for Modern Brands.</p>
        </div>
        <div className={styles.linksGroup}>
          <h4 className={styles.groupTitle}>Services</h4>
          <div className={styles.links}>
            <Link href="#services">Development Services</Link>
            <Link href="#creative">Creatives</Link>
          </div>
        </div>
        <div className={styles.linksGroup}>
          <h4 className={styles.groupTitle}>Company</h4>
          <div className={styles.links}>
            <Link href="/pricing">Pricing</Link>
            <Link href="/works">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Xenon Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}
