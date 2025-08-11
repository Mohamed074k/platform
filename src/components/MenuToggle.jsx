import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './MenuToggle.css';

const MenuToggle = ({ className = '' }) => {
  const { isMenuOpen, toggleMenu, isMobile } = useTheme();

  if (!isMobile) {
    return null; // Don't render on desktop
  }

  return (
    <button
      className={`menu-toggle ${className} ${isMenuOpen ? 'open' : ''}`}
      onClick={toggleMenu}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      title={isMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMenuOpen}
    >
      <div className="hamburger">
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </div>
    </button>
  );
};

export default MenuToggle; 