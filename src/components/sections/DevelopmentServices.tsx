import styles from './DevelopmentServices.module.css';
import { Monitor, Smartphone, Bot, MessageSquare } from 'lucide-react';

const services = [
  {
    title: "Full-Stack Web Development",
    icon: <Monitor strokeWidth={1.5} size={32} />,
    description: "End-to-end web solutions built for scale, speed, and premium user experience.",
    tech: "Next.js, TypeScript, React, Node.js, MERN Stack, Python, HTML5/CSS3/JS, MySQL, PostgreSQL, MongoDB, AWS, Vercel, Docker, CI/CD, RESTful APIs"
  },
  {
    title: "Full-Stack Mobile App Development",
    icon: <Smartphone strokeWidth={1.5} size={32} />,
    description: "Cross-platform and native mobile experiences that engage and perform.",
    tech: "Flutter (Dart), React Native, Python (Django/FastAPI), Firebase, SQL Databases"
  },
  {
    title: "AI Integration & Automation",
    icon: <Bot strokeWidth={1.5} size={32} />,
    description: "Intelligent systems to automate workflows and enhance business capabilities.",
    tech: "OpenAI API, Anthropic Claude, Custom AI Chatbots, GitHub Copilot Workflows"
  },
  {
    title: "Telegram Bot Development",
    icon: <MessageSquare strokeWidth={1.5} size={32} />,
    description: "Custom bots for community engagement, moderation, and process automation.",
    tech: "Python, Node-Telegram-Bot-API, Automated Media Processing"
  }
];

export default function DevelopmentServices() {
  return (
    <section id="services" className={`container ${styles.section}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Development <span className="gradient-text">Services</span></h2>
        <p className={styles.subtitle}>Engineering robust digital products from web platforms to AI automations.</p>
      </div>
      
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={`glass ${styles.card}`}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
            <div className={styles.techStack}>
              <strong>Technologies & Tools</strong>
              <p>{service.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
