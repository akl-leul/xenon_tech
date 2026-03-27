'use client';

import styles from './Showcase.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

export default function Showcase() {
  return (
    <section id="showcase" className={`${styles.section}`}>
      <div className={`container ${styles.header}`}>
        <h2 className={styles.title}>Featured <span className="gradient-text">Work</span></h2>
        <p className={styles.subtitle}>Swipe globally to explore our production environments.</p>
      </div>

      <div className={styles.carouselContainer}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: -40,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.swiper}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                <div className={styles.imagePlaceholder}>

                  <div className={styles.mockBrowser}>
                    <div className={styles.browserHeader}>
                      <span className={styles.mockBrowserDots}>
                        <i></i><i></i><i></i>
                      </span>
                      <span className={styles.urlDisplay}>{project.url}</span>
                    </div>

                    <div className={styles.browserBody}>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className={styles.previewImage}
                          loading="lazy"
                        />
                      ) : (
                        <div className={styles.placeholderPattern}>
                          <span>Confidential</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={styles.overlay}>
                    <div className={styles.viewBadge}>Visit Live Site ↗</div>
                  </div>
                </div>

                <div className={styles.projectInfo}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
