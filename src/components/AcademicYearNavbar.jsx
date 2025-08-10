import React, { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import logoImage from '../images/logo.ec57654f06e8a768a566.png';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const mockUserName = 'محمد'; // Replace with backend user name

const AcademicYearNavbar = () => {
  const { isDarkMode } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressBarRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', direction: 'rtl', background: isDarkMode ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,1)', borderBottom: '1px solid var(--color-border)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000
      }}>
        {/* Right: Profile Icon with Dropdown */}
        <div ref={profileRef} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={() => setDropdownOpen((open) => !open)}
            aria-label="Open profile menu"
          >
            {/* SVG profile icon, color controlled by dark mode */}
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isDarkMode ? '#fbbf24' : '#0ea5e9'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
            </svg>
          </button>
          {dropdownOpen && (
            <div style={{ position: 'absolute', top: '110%', right: 0, background: isDarkMode ? '#1e293b' : 'white', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', borderRadius: '10px', minWidth: '220px', padding: '1rem 0', zIndex: 1001, textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {/* الصفحة الرئيسية */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.7rem 1.2rem', cursor: 'pointer', color: isDarkMode ? 'white' : '#222', fontWeight: 500 }}>
                {/* New classic home icon */}
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12V19a2 2 0 0 0 2 2h3m6 0h3a2 2 0 0 0 2-2V12M12 3l8 8-8-8-8 8"/><path d="M9 21V12h6v9"/></svg>
                الصفحة الرئيسية
              </div>
              {/* اهلا (user name) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.7rem 1.2rem', color: isDarkMode ? 'white' : '#222', fontWeight: 500 }}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="7" r="4"/><path d="M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/></svg>
                اهلا ({mockUserName})
              </div>
              {/* حسابي */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.7rem 1.2rem', cursor: 'pointer', color: isDarkMode ? 'white' : '#222', fontWeight: 500 }}
                onClick={() => { setDropdownOpen(false); navigate('/profile'); }}
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21h13a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v2a2 2 0 0 0 2 2z"/></svg>
                حسابي
              </div>
              {/* كورساتي */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.7rem 1.2rem', cursor: 'pointer', color: isDarkMode ? 'white' : '#222', fontWeight: 500 }}>
                {/* Book icon */}
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 1 4 16.5z"/></svg>
                كورساتي
              </div>
              {/* تسجيل الخروج */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.7rem 1.2rem', cursor: 'pointer', color: '#e11d48', fontWeight: 500 }}>
                <svg width="22" height="22" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                تسجيل الخروج
              </div>
            </div>
          )}
        </div>
        {/* Left: Dark mode toggle and logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ThemeToggle />
          <img  alt="LOGO" style={{ height: '38px', width: 'auto', cursor: 'pointer' }} />
        </div>
      </nav>
      {/* Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        className={`scroll-progress-bar${scrollProgress > 0 ? ' active' : ''}`}
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};

export default AcademicYearNavbar; 