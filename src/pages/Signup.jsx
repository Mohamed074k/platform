import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Signup.css';
import signupImage from '../images/WhatsApp Image 2025-08-10 at 22.16.51_7de8d6e2.jpg';
import Footer from '../components/Footer';

const Signup = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    fatherPhoneNumber: '',
    gender: '',
    government: '',
    academicYear: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const governments = [
    'القاهرة',
    'الجيزة',
    'الإسكندرية',
    'الشرقية',
    'الغربية',
    'المنوفية',
    'القليوبية',
    'البحيرة',
    'كفر الشيخ',
    'الدمياط',
    'الدقهلية',
    'الشرقية',
    'بورسعيد',
    'الإسماعيلية',
    'السويس',
    'بني سويف',
    'الفيوم',
    'المنيا',
    'أسيوط',
    'سوهاج',
    'قنا',
    'الأقصر',
    'أسوان',
    'البحر الأحمر',
    'الوادي الجديد',
    'مطروح',
    'شمال سيناء',
    'جنوب سيناء'
  ];

  const academicYears = [
    'الصف الأول الثانوي',
    'الصف الثاني الثانوي',
    'الصف الثالث الثانوي'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className={`signup-page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="signup-container">
        {/* Left Image Section */}
        <div className="signup-image-section">
          <img src={signupImage} alt="Signup Visual" className="signup-image" />
        </div>
        {/* Right Form Section */}
        <div className="signup-form-section">
          <div className="form-container">
            <h1 className="signup-title">انشء حسابك الان</h1>
            <div className="signup-subtitle">
              ادخل بيانلتك بشكل صحيح للحصول علي افضل تجربه داخل الموقع
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
              {/* Name Fields - First Name and Last Name side by side */}
              <div className="form-row">
                <div className="form-group floating-label-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label htmlFor="firstName" style={{ display: "flex", alignItems: "center", gap: "0.3rem"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                      <circle cx="12" cy="8" r="4" stroke="#2196f3" strokeWidth="2" fill="none"/>
                      <path d="M4 20c0-3.3137 3.134-6 7-6s7 2.6863 7 6" stroke="#2196f3" strokeWidth="2" fill="none"/>
                    </svg>
                    الاسم الأول
                  </label>
                </div>
                <div className="form-group floating-label-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label htmlFor="lastName" style={{ display: "flex", alignItems: "center", gap: "0.3rem"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                      <circle cx="12" cy="8" r="4" stroke="#2196f3" strokeWidth="2" fill="none"/>
                      <path d="M4 20c0-3.3137 3.134-6 7-6s7 2.6863 7 6" stroke="#2196f3" strokeWidth="2" fill="none"/>
                    </svg>
                    اسم العائلة
                  </label>
                </div>
              </div>
              {/* Phone Fields - Phone Number and Father's Phone side by side */}
              <div className="form-row">
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
                  <label htmlFor="phoneNumber" style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.37 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    رقم الهاتف
                  </label>
                </div>
                <div className="form-group floating-label-group">
                  <input
                    type="tel"
                    id="fatherPhoneNumber"
                    name="fatherPhoneNumber"
                    value={formData.fatherPhoneNumber}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label htmlFor="fatherPhoneNumber" style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.37 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    رقم هاتف ولي الأمر
                  </label>
                </div>
              </div>
              {/* Gender Dropdown */}
              <div className="form-group floating-label-group">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden></option>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
                <label htmlFor="gender" style={{"width":"3rem"}}>الجنس</label>
              </div>
              {/* Government Dropdown */}
              <div className="form-group floating-label-group">
                <select
                  id="government"
                  name="government"
                  value={formData.government}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden></option>
                  {governments.map((gov, index) => (
                    <option key={index} value={gov}>{gov}</option>
                  ))}
                </select>
                <label htmlFor="government" style={{"width":"4rem"}}>المحافظة</label>
              </div>
              {/* Academic Year Dropdown */}
              <div className="form-group floating-label-group">
                <select
                  id="academicYear"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden></option>
                  {academicYears.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </select>
                <label htmlFor="academicYear" style={{"width":"5.5rem"}}>السنة الدراسية</label>
              </div>
              {/* Email Field */}
              <div className="form-group floating-label-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor="email">@البريد الإلكتروني</label>
              </div>
              {/* Password Fields - Password and Confirm Password side by side */}
              <div className="form-row">
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
                  <label htmlFor="password" style={{ display: "flex", alignItems: "center", gap: "0.3rem"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                      <path d="M17 11V7a5 5 0 0 0-10 0v4" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="3" y="11" width="18" height="10" rx="2" stroke="#2196f3" strokeWidth="2" strokeLinejoin="round"/>
                      <circle cx="12" cy="16" r="1" fill="#2196f3"/>
                    </svg>
                    كلمة المرور
                  </label>
                </div>
                <div className="form-group floating-label-group">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label htmlFor="confirmPassword" style={{ display: "flex", alignItems: "center", gap: "0.3rem"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                      <path d="M17 11V7a5 5 0 0 0-10 0v4" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="3" y="11" width="18" height="10" rx="2" stroke="#2196f3" strokeWidth="2" strokeLinejoin="round"/>
                      <circle cx="12" cy="16" r="1" fill="#2196f3"/>
                    </svg>
                    تأكيد كلمة المرور
                  </label>
                </div>
              </div>
              {/* Submit Button */}
              <button type="submit" className="signup-button">
                انشء حسابك
              </button>
            </form>
            {/* Login Link */}
            <div className="login-link">
              <p>
                هل يوجد لديك حساب بالفعل؟{' '}
                <button onClick={handleLoginClick} className="login-link-btn">
                  ادخل الي حاسبك الان!
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup; 