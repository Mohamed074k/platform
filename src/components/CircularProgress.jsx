import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ percentage, title, subtitle, color = '#0ea5e9' }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-item-container">
      <div className="progress-circle-wrapper">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring-circle background"
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="progress-ring-circle progress"
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            style={{
              stroke: color,
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        <span className="progress-text">{`${percentage}%`}</span>
      </div>
      <div className="progress-label-container">
        <p className="progress-title">{title}</p>
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