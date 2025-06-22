import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import MenuToggle from './MenuToggle';
import logoImage from '../images/logo.ec57654f06e8a768a566.png';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, isMenuOpen, closeMenu } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressBarRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-dropdown') && !event.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);

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

  const handleSignupClick = () => {
    navigate('/signup');
    closeMenu();
  };

  const handleLoginClick = () => {
    navigate('/signin');
    closeMenu();
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <MenuToggle />
          {/* Mobile Dropdown Menu */}
          <div className={`mobile-menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
            <button className="btn btn-primary" onClick={handleSignupClick}>انشأ حسابك الان</button>
            <button className="btn btn-secondary" onClick={handleLoginClick}>تسجيل الدخول</button>
          </div>
        </div>

        {/* Logo Container - Center */}
        <div className="logo-container">
          <img 
            src={logoImage} 
            alt="الشعار" 
            className="logo-image" 
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
          {/* Theme Toggle behind logo for full screen */}
          <div className="toggle-behind-logo">
            <ThemeToggle />
          </div>
        </div>

        {/* Theme Toggle - Right (for mobile) */}
        <div className="toggle-container">
          <ThemeToggle />
        </div>

        {/* Desktop Buttons */}
        <div className="navbar-left">
          <button className="btn btn-primary" onClick={handleSignupClick}>انشأ حسابك الان</button>
          <button className="btn btn-secondary" onClick={handleLoginClick}>تسجيل الدخول</button>
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

export default Navbar; 