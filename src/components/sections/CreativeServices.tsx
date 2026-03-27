import styles from './CreativeServices.module.css';
import { Palette, Video } from 'lucide-react';

const services = [
  {
    title: "Graphic Design",
    icon: <Palette strokeWidth={1.5} size={48} />,
    description: "Visual identities, branding, and digital assets that communicate your core message.",
    tools: "Adobe Illustrator & Photoshop",
    skills: "Brand Identity, Typography, Color Theory, Vector Graphics"
  },
  {
    title: "Video Editing",
    icon: <Video strokeWidth={1.5} size={48} />,
    description: "Engaging and dynamic visual storytelling to captivate your audience.",
    tools: "Adobe Premiere Pro, After Effects, CapCut",
    skills: "Cutting & Trimming, Transitions, Color Grading, Audio Sync, Motion Graphics"
  }
];

export default function CreativeServices() {
  return (
    <section id="creative" className={`container ${styles.section}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Creative <span className="gradient-text">Services</span></h2>
        <p className={styles.subtitle}>Bringing your vision to life with pixel-perfect design and dynamic motion.</p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={`glass ${styles.card}`}>
            <div className={styles.icon}>{service.icon}</div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              
              <div className={styles.meta}>
                <div className={styles.metaGroup}>
                  <strong>Tools</strong>
                  <p>{service.tools}</p>
                </div>
                <div className={styles.metaGroup}>
                  <strong>Skills</strong>
                  <p>{service.skills}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
