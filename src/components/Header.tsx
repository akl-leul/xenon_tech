'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} transition-all`}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo} onClick={closeMenus}>
          <span className={styles.logoIcon}>
            <span className={styles.dotOrange}></span>
            <span className={styles.dashOrange}></span>
            <span className={styles.dashWhite}></span>
          </span>
          Xenon Tech
        </Link>

        {/* Desktop & Mobile Nav */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <button
            className={styles.mobileCloseBtn}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <ul className={styles.navList}>
            <li
              className={`${styles.navItem} ${styles.hasDropdown}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`${styles.navLink} ${styles.dropdownTrigger}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services <ChevronDown size={16} className={`${styles.chevron} ${dropdownOpen ? styles.rotated : ''}`} />
              </button>

              <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.show : ''}`}>
                <Link href="#services" className={styles.dropdownItem} onClick={closeMenus}>
                  Development Services
                </Link>
                <Link href="#creative" className={styles.dropdownItem} onClick={closeMenus}>
                  Creatives
                </Link>
              </div>
            </li>
            <li><Link href="/pricing" className={styles.navLink} onClick={closeMenus}>Pricing</Link></li>
            <li><Link href="/works" className={styles.navLink} onClick={closeMenus}>Portfolio</Link></li>
            <li><Link href="/contact" className={styles.navLink} onClick={closeMenus}>Contact</Link></li>
          </ul>
          <div className={styles.actions}>
            <ThemeToggle />
            <Link href="/register" className={styles.ctaButton} onClick={closeMenus}>
              Registered &rarr;
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileOpenBtn}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

      </div>
    </header>
  );
}
