'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import { ArrowLeft, Send, CheckCircle, Smartphone, Globe, BarChart3, Clock } from 'lucide-react';

function RegisterForm() {
  const searchParams = useSearchParams();
  const packParam = searchParams.get('pack');
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    projectType: 'essential',
    budget: '$5k - $15k',
    timeline: '1-3 months',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (packParam) {
      setFormData(prev => ({ ...prev, projectType: packParam }));
    }
  }, [packParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulation of submission since backend is removed
      console.log('Submission data:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <CheckCircle size={64} className={styles.successIcon} />
        <h1 className={styles.title}>Request Received!</h1>
        <p className={styles.description}>
          Thank you for choosing Xenon Tech. One of our project managers will reach out to you within 24 hours to discuss your {formData.projectType} project.
        </p>
        <Link href="/" className={styles.backButton}>
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h1 className={styles.title}>Start Your <span className="gradient-text">Project</span></h1>
        <p className={styles.subtitle}>Fill out the form below and let's build something exceptional together.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Work Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="john@company.com" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.labelWithIcon}><Smartphone size={14} /> Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="+1 (555) 000-0000" 
              required 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company (Optional)</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              placeholder="TechCorp Inc."
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="website" className={styles.labelWithIcon}><Globe size={14} /> Current Website (Optional)</label>
            <input 
              type="url" 
              id="website" 
              name="website" 
              placeholder="https://example.com"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="projectType">Project Interest</label>
            <select 
              id="projectType" 
              name="projectType" 
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="starter">Starter Pack</option>
              <option value="essential">Essential Pack</option>
              <option value="pro">Pro Pack</option>
              <option value="custom">Custom Web Application</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="budget" className={styles.labelWithIcon}><BarChart3 size={14} /> Estimated Budget</label>
            <select 
              id="budget" 
              name="budget" 
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="<$1k">Under $1,000</option>
              <option value="$1k - $5k">$1,000 - $5,000</option>
              <option value="$5k - $15k">$5,000 - $15,000</option>
              <option value="$15k+">$15,000+</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="timeline" className={styles.labelWithIcon}><Clock size={14} /> Expected Timeline</label>
            <select 
              id="timeline" 
              name="timeline" 
              value={formData.timeline}
              onChange={handleChange}
              required
            >
              <option value="<1 month">Under 1 Month</option>
              <option value="1-3 months">1 - 3 Months</option>
              <option value="3-6 months">3 - 6 Months</option>
              <option value="6+ months">6+ Months</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Project Details</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            placeholder="Tell us about your vision, goals, and any specific requirements..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? 'Sending...' : (
            <>
              Submit Project Request <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <Link href="/" className={styles.goBack}>
        <ArrowLeft size={20} /> Back to Home
      </Link>
      
      <Suspense fallback={<div className={styles.loading}>Loading information...</div>}>
        <RegisterForm />
      </Suspense>
    </main>
  );
}
