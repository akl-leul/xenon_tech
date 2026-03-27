'use client';

import React from 'react';
import styles from './works.module.css';
import { ExternalLink, Globe, Code, Layout, Smartphone } from 'lucide-react';

const projects = [
  {
    title: "Virtual Campus Tour",
    url: "tour.sitedu.info",
    link: "https://tour.sitedu.info",
    image: "https://api.microlink.io/?url=https://tour.sitedu.info&screenshot=true&meta=false&embed=screenshot.url",
    category: "Interactive Web Experience",
    description: "A panoramic immersive virtual mapping and 360-degree interactive system.",
  },
  {
    title: "SIT Student Body Council",
    url: "sitsbc.vercel.app",
    link: "https://sitsbc.vercel.app",
    image: "https://api.microlink.io/?url=https://sitsbc.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    category: "Full-Stack Web Platform",
    description: "Dynamic portal for student council operations, engagement, and administration.",
  },
  {
    title: "Pharma Delivery & Catalog",
    url: "pharmabyleul.vercel.app",
    link: "https://pharmbyleul.vercel.app/",
    image: "https://api.microlink.io/?url=https://pharmbyleul.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    category: "E-Commerce System",
    description: "Modern pharmaceutical delivery experience with optimized search and filtering.",
  },
  {
    title: "Chronicle",
    url: "dev-write.netlify.app",
    link: "https://dev-write.netlify.app",
    image: "https://api.microlink.io/?url=https://dev-write.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    category: "Full-Stack Social Media App",
    description: "A dynamic social media platform for developers to share their thoughts and ideas.",

  },
  {
    title: "YWMDSBS",
    url: "ywmdsbs-eight.vercel.app/",
    link: "https://ywmdsbs-eight.vercel.app/",
    image: "https://api.microlink.io/?url=https://ywmdsbs-eight.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    category: "Full-Stack Web Platform",
    description: "Dynamic portal for YWMDSBS students, teacher, and parents grade and school management system.",
  },
  {
    title: "Coming Soon...",
    url: "Next Project",
    link: "#",
    image: null,
    category: "Future Work",
    description: "We are always building new extraordinary digital products.",
  }
];

export default function WorksPage() {
  return (
    <div className={styles.worksOuter}>
      <div className={styles.glowOrb}></div>

      <section className={`container ${styles.hero}`}>
        <h1 className={styles.title}>
          Selected <span className="gradient-text">Works</span>
        </h1>
        <p className={styles.subtitle}>
          A collection of high-performance digital products and AI-driven solutions engineered for excellence.
        </p>
      </section>

      <section className={`container ${styles.gridSection}`}>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={project.url || index} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={styles.projectImage}
                      loading="lazy" 
                    />
                  ) : (
                    <div className={styles.noImage}>Coming Soon</div>
                  )}
                  <div className={styles.cardOverlay}>
                    <div className={styles.cardActions}>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                        <Globe size={20} />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.category}>{project.category}</span>
                  {project.url && <span className={styles.urlDisplay}>{project.url}</span>}
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={`container ${styles.bannerInner}`}>
          <h2>Have a <span className="gradient-text">Bold</span> Project in Mind?</h2>
          <p>Let's engineer your success together. Our team is ready to scale your vision.</p>
          <button className={styles.largeCta}>Start a Conversation</button>
        </div>
      </section>
    </div>
  );
}
