'use client';

import React from 'react';
import styles from './pricing.module.css';
import PricingCalculator from '@/components/sections/PricingCalculator';
import { HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Depending on the complexity, a Starter pack takes 2 weeks, while Essential and Pro packs typically range from 4 to 8 weeks."
  },
  {
    q: "Do you offer maintenance after launch?",
    a: "Yes, every pack includes a period of free maintenance. We also offer monthly retainers for ongoing support and updates."
  },
  {
    q: "Can I upgrade my pack later?",
    a: "Absolutely. You can start with a Starter pack and upgrade as your business scales. We'll simply adjust the scope and pricing."
  }
];

export default function PricingPage() {
  return (
    <div className={styles.pricingOuter}>
      <div className={styles.glowOrb}></div>
      
      <section className={`container ${styles.hero}`}>
        <h1 className={styles.title}>
          Transparent <span className="gradient-text">Investment</span>
        </h1>
        <p className={styles.subtitle}>
          No hidden fees. No surprises. Just high-performance digital engineering tailored to your business goals.
        </p>
      </section>

      <PricingCalculator />

      <section className={`container ${styles.faqSection}`}>
        <div className={styles.faqHeader}>
          <h2>Common <span className="gradient-text">Questions</span></h2>
          <p>Everything you need to know about our pricing and process.</p>
        </div>
        
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3><HelpCircle size={20} className={styles.qIcon} /> {faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.customBanner}>
        <div className={`container ${styles.bannerInner}`}>
          <div className={styles.bannerContent}>
            <h2>Need a <span className="gradient-text">Custom</span> Enterprise Solution?</h2>
            <p>For large-scale platforms, complex AI integrations, or unique architectural requirements, we offer bespoke pricing.</p>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Sales <ArrowRight size={20} />
            </Link>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.miniFeature}><CheckCircle2 size={18} /> Dedicated Architect</div>
            <div className={styles.miniFeature}><CheckCircle2 size={18} /> SLA Guarantees</div>
            <div className={styles.miniFeature}><CheckCircle2 size={18} /> Source Code Ownership</div>
          </div>
        </div>
      </section>
    </div>
  );
}
