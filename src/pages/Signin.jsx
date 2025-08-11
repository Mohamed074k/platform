import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
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
        {/* Form Section - Centered */}
        <div className="signin-form-section">
          <div className="form-container">
            <h1 className="signin-title">تسجيل الدخول</h1>
            
            <form onSubmit={handleSubmit} className="signin-form">
              {/* Phone Number Field */}
              <div className="form-group">
                <label htmlFor="phoneNumber">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password">كلمة المرور</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="أدخل كلمة المرور"
                />
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