'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './PricingCalculator.module.css';

type Currency = 'EUR' | 'USD' | 'ETB';

const EXCHANGE_RATES = {
  EUR: 1,
  USD: 1.08,
  ETB: 135,
};

const CURRENCY_SYMBOLS = {
  EUR: '€',
  USD: '$',
  ETB: 'ETB',
};

type PricingPack = {
  id: string;
  name: string;
  description: string;
  priceEUR: number;
  image: string;
  highlighted?: boolean;
  included: string[];
  notIncluded: string[];
};

const PACKS: PricingPack[] = [
  {
    id: 'starter',
    name: 'Starter Pack',
    description: 'Launch your online business quickly with a simple and impactful page.',
    priceEUR: 900,
    image: '/images/pricing/starter.png',
    included: [
      'Multi-page site (Up to 5 pages)',
      'Custom Design & Branding',
      'Responsive design (Desktop/Mobile)',
      'Basic SEO & performance setup',
      'Standard content integration',
      '2 revisions included',
      'Maintenance & Support (15 days)',
    ],
    notIncluded: [
      'Local SEO & Google Business profile',
      'Advanced features',
      'Unlimited revisions',
      'Site handover guide',
    ],
  },
  {
    id: 'essential',
    name: 'Essential Pack',
    description: 'A strategic site to generate more clients and develop your local visibility.',
    priceEUR: 1500,
    image: '/images/pricing/essential.png',
    highlighted: true,
    included: [
      'Advanced showcase (Up to 12 pages)',
      'Bespoke visual identity & UI/UX',
      'Advanced Local SEO optimization',
      'Custom content strategy & production',
      'Responsive (PC, tablet, mobile)',
      'Unlimited revisions included',
      'Site handover & basic guide',
      'Maintenance and support (1 month)',
    ],
    notIncluded: [
      'Advanced features (E-commerce/Dashboards)',
      'Advanced local SEO optimization',
      'Google Business profile optimization',
    ],
  },
  {
    id: 'pro',
    name: 'Pro Pack',
    description: 'A transformative digital hub designed for maximum conversion and business expansion.',
    priceEUR: 2200,
    image: '/images/pricing/pro.png',
    included: [
      'Unlimited pages (Flexible scope)',
      'Bespoke visual identity & Premium UI',
      'Advanced SEO & Local Growth system',
      'High-end 3D & Interactive elements',
      'Full content strategy & copywriting',
      'Google Business & Local optimized profile',
      'Unlimited revisions included',
      'Maintenance and support (2 months)',
      'Site handover & Technical training',
    ],
    notIncluded: [],
  },
];

export default function PricingCalculator() {
  const [currency, setCurrency] = useState<Currency>('EUR');

  const formatPrice = (priceEUR: number) => {
    const converted = priceEUR * EXCHANGE_RATES[currency];
    const symbol = CURRENCY_SYMBOLS[currency];

    if (currency === 'ETB') {
      return `${Math.round(converted).toLocaleString()} ${symbol}`;
    }
    return `${symbol}${Math.round(converted).toLocaleString()}`;
  };

  return (
    <section className={styles.calculatorSection} id="pricing">
      <div className={styles.bgBlob} />
      <div className={styles.bgBlob2} />

      <div className="container">
        <div className={styles.header}>
          <h2 className={`${styles.title} fade-in`}>
            Premium <span className="gradient-text">Pricing</span>
          </h2>
          <p className={styles.subtitle}>
            Transparent solutions tailored to your business stage. Choose the plan that fits your vision and ambition.
          </p>

          <div className={styles.currencyToggleContainer}>
            <div className={styles.currencyToggle}>
              {(['EUR', 'USD', 'ETB'] as Currency[]).map((cur) => (
                <button
                  key={cur}
                  className={`${styles.toggleBtn} ${currency === cur ? styles.active : ''}`}
                  onClick={() => setCurrency(cur)}
                >
                  {cur}
                </button>
              ))}
              <div
                className={styles.toggleSlider}
                style={{
                  width: '33.33%',
                  transform: `translateX(${currency === 'EUR' ? '0' : currency === 'USD' ? '100%' : '200%'})`
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.packsGrid}>
          {PACKS.map((pack) => (
            <div
              key={pack.id}
              className={`
                ${styles.packCard} 
                ${pack.id === 'essential' ? styles.essential : ''} 
                ${pack.id === 'pro' ? styles.pro : ''} 
                ${pack.highlighted ? styles.highlighted : ''} 
                fade-in
              `}
            >
              {pack.highlighted && <div className={styles.popularBadge}>Most Chosen</div>}

              <div className={styles.packImageContainer}>
                <img src={pack.image} alt={pack.name} className={styles.packImage} />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.packHeader}>
                <h3 className={styles.packName}>{pack.name}</h3>
                <p className={styles.packDesc}>{pack.description}</p>
                {/* <div className={styles.packPrice}>
                  <span className={styles.priceValue}>{formatPrice(pack.priceEUR)}</span>
                </div> */}
              </div>

              <div className={styles.packFeatures}>
                <div className={styles.featureGroup}>
                  <h4 className={styles.groupTitle}>Included</h4>
                  <ul className={styles.featureList}>
                    {pack.included.map((item, index) => (
                      <li key={index} className={styles.featureItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {pack.notIncluded.length > 0 && (
                  <div className={styles.featureGroup}>
                    <h4 className={styles.groupTitle}>Not Included</h4>
                    <ul className={styles.featureList}>
                      {pack.notIncluded.map((item, index) => (
                        <li key={index} className={`${styles.featureItem} ${styles.excluded}`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.crossIcon}>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className={styles.packFooter}>
                <Link href={`/contact?plan=${pack.id}`} className={styles.ctaButton}>
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
