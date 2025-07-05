import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ percentage = 0, title = '', subtitle = '', color = '#3b82f6' }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-item-container">
      <div className="progress-circle-wrapper">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring-circle background"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="progress-ring-circle progress"
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="progress-text">{percentage}%</div>
      </div>
      <div className="progress-label-container">
        <h4 className="progress-title">{title}</h4>
        {subtitle && (
          <p className="progress-subtitle" style={{ backgroundColor: color }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default CircularProgress; 