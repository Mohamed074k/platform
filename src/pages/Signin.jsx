import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import academicYear1 from '../images/academic-year1.jpg';
import './Signin.css';

const Signin = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signin submission here
    console.log('Signin form submitted:', formData);
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className={`signin-page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="signin-container">
        {/* Right Form Section Only */}
        <div className="signin-form-section">
          <div className="form-container">
            <h1 className="signin-title">تسجيل الدخول</h1>
            <div className="signin-subtitle">ادخل رقم الهاتف وكلمة السر لتسجيل الدخول</div>
            <form onSubmit={handleSubmit} className="signin-form">
              {/* Phone Number Field */}
              <div className="form-group floating-label-group">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor="phoneNumber" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.37 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  رقم الهاتف
                </label>
              </div>
              {/* Password Field */}
              <div className="form-group floating-label-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor="password" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                    <path d="M17 11V7a5 5 0 0 0-10 0v4" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="11" width="18" height="10" rx="2" stroke="#2196f3" strokeWidth="2" strokeLinejoin="round"/>
                    <circle cx="12" cy="16" r="1" fill="#2196f3"/>
                  </svg>
                  كلمة المرور
                </label>
              </div>
              {/* Submit Button */}
              <button type="submit" className="signin-button">
                تسجيل الدخول
              </button>
            </form>
            {/* Signup Link */}
            <div className="signup-link">
              <p>
                ليس لديك حساب؟{' '}
                <button onClick={handleSignupClick} className="signup-link-btn">
                  انشء حسابك الان!
                </button>
              </p>
            </div>
            {/* Back to Home */}
            <div className="back-home">
              <button onClick={handleBackToHome} className="back-home-btn">
                العودة للرئيسية
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin; 