import React from 'react';
import { useTheme } from '../context/ThemeContext';
import teacherImage from '../images/aymanHomePage.86ad748ab3f3809ad288.png';
import './Hero.css';

const Hero = () => {
  const nextYear = new Date().getFullYear() + 1;
  const { isDarkMode } = useTheme();

  return (
    <div className={`hero ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="hero-content">
        <h1>د/محمد ايمن</h1>
        <p className="batch">اهلا دفعة <span>{nextYear}</span></p>
        <p className="description">لكل ما يتعلق بمنهج الاحياء بالثانويه العامه</p>
      </div>
      <div className="hero-image">
        <img 
          src={teacherImage} 
          alt="د/محمد ايمن" 
        />
      </div>
    </div>
  );
};

export default Hero; 