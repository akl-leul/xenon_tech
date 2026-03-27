'use client';

import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false);
    
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } else {
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  const getActiveIcon = () => {
    switch(theme) {
      case 'light': return <Sun size={16} strokeWidth={2.5} />;
      case 'dark': return <Moon size={16} strokeWidth={2.5} />;
      default: return <Monitor size={16} strokeWidth={2.5} />;
    }
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button 
        className={styles.toggleBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme"
      >
        {getActiveIcon()}
        <span className={styles.themeName}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </span>
        <ChevronDown 
          size={14} 
          className={`${styles.chevron} ${isOpen ? styles.open : ''}`} 
        />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <button 
            className={`${styles.dropdownItem} ${theme === 'light' ? styles.active : ''}`} 
            onClick={() => changeTheme('light')}
          >
            <Sun size={14} /> Light
          </button>
          <button 
            className={`${styles.dropdownItem} ${theme === 'dark' ? styles.active : ''}`} 
            onClick={() => changeTheme('dark')}
          >
            <Moon size={14} /> Dark
          </button>
          <button 
            className={`${styles.dropdownItem} ${theme === 'system' ? styles.active : ''}`} 
            onClick={() => changeTheme('system')}
          >
            <Monitor size={14} /> System
          </button>
        </div>
      )}
    </div>
  );
}
