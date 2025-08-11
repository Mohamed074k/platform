import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './CourseCard.css';

const CourseCard = ({ 
  courseImage, 
  courseName, 
  price = "199 ريال", 
  duration = "500 ساعة", 
  totalQuestions = "1500 سؤال",
  onEnroll 
}) => {
  const { isDarkMode } = useTheme();

  const handleEnroll = () => {
    if (onEnroll) {
      onEnroll();
    }
  };

  return (
    <div className={`course-card ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="course-card-image">
        <img src={courseImage} alt={courseName} />
      </div>
      <div className="course-card-content">
        <div className="course-price">{price}</div>
        <button className="enroll-button" onClick={handleEnroll}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          اشترك الان
        </button>
        <div className="course-duration">
          <div className="duration-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span>المحتوي</span>
          </div>
          <div className="duration-value">{duration}</div>
        </div>
        <div className="course-questions">اجمالي الأسئلة: {totalQuestions}</div>
      </div>
    </div>
  );
};

export default CourseCard; 