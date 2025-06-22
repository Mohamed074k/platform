import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme';
import './ThemeDemo.css';

const ThemeDemo = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="theme-demo">
      <h2>Theme System Demo</h2>
      
      <div className="demo-section">
        <h3>Colors</h3>
        <div className="color-grid">
          <div className="color-item primary">Primary: {theme.colors.primary}</div>
          <div className="color-item background">Background: {theme.colors[isDarkMode ? 'dark' : 'light'].background}</div>
          <div className="color-item text">Text: {theme.colors.text[isDarkMode ? 'dark' : 'light'].primary}</div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Typography</h3>
        <div className="typography-demo">
          <p className="text-xs">Extra Small Text (12px)</p>
          <p className="text-sm">Small Text (14px)</p>
          <p className="text-base">Base Text (16px)</p>
          <p className="text-lg">Large Text (18px)</p>
          <p className="text-xl">Extra Large Text (20px)</p>
          <p className="text-2xl">2XL Text (24px)</p>
        </div>
      </div>

      <div className="demo-section">
        <h3>Spacing</h3>
        <div className="spacing-demo">
          <div className="spacing-item xs">XS Spacing (4px)</div>
          <div className="spacing-item sm">SM Spacing (8px)</div>
          <div className="spacing-item base">Base Spacing (16px)</div>
          <div className="spacing-item lg">LG Spacing (24px)</div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Buttons</h3>
        <div className="button-demo">
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-success">Success Button</button>
          <button className="btn btn-warning">Warning Button</button>
        </div>
      </div>
    </div>
  );
};

export default ThemeDemo; 