import React from 'react';
import { useTheme } from '../context/ThemeContext';
import joinImage from '../images/join-bg1.8a81836e76fd6087ff19.png';
import './Join.css';

const Join = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`join ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="join-background">
        <img src={joinImage} alt="Join Background" className="background-image" />
        <div className="background-overlay"></div>
      </div>
      
      <div className="join-content">
        <div className="join-buttons">
          <button className="join-btn join-primary">
            انضم الينا الان!
          </button>
          <button className="join-btn join-secondary">
            شراء المذكرات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join; 