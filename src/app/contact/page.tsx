'use client';

import React from 'react';
import styles from './contact.module.css';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className={styles.contactOuter}>
      <div className={styles.glowOrb}></div>
      <div className={styles.glowOrb2}></div>
      
      <section className={`container ${styles.hero}`}>
        <h1 className={styles.title}>
          Let's Start a <span className="gradient-text">Project</span>
        </h1>
        <p className={styles.subtitle}>
          Have an idea that's ready to take flight? Reach out and let's engineer something bold.
        </p>
      </section>

      <section className={`container ${styles.contentGrid}`}>
        {/* Left Side: Contact Info */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Mail /></div>
              <div className={styles.infoText}>
                <label>Email Us</label>
                <p>ayfokrukasahunleul@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Phone /></div>
              <div className={styles.infoText}>
                <label>Call Us</label>
                <p>+251 963 889 227</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Clock /></div>
              <div className={styles.infoText}>
                <label>Response Time</label>
                <p>Typically within 2-4 hours</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><MapPin /></div>
              <div className={styles.infoText}>
                <label>Location</label>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          <div className={styles.socialStrip}>
            <div className={styles.socialItem}><Globe size={20} /> Website</div>
            <div className={styles.socialItem}><MessageSquare size={20} /> LinkedIn</div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className={styles.formSection}>
          <form className={styles.premiumForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" />
              <div className={styles.line}></div>
            </div>
            
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" />
              <div className={styles.line}></div>
            </div>

            <div className={styles.formGroup}>
              <select defaultValue="">
                <option value="" disabled>Select Service</option>
                <option value="dev">Software Development</option>
                <option value="ai">AI Integration</option>
                <option value="design">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
              <div className={styles.line}></div>
            </div>

            <div className={styles.formGroup}>
              <textarea placeholder="Tell us about your project..." rows={5}></textarea>
              <div className={styles.line}></div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message <Send size={18} className={styles.sendIcon} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
