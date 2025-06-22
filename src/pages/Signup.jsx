import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Signup.css';

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
        {/* Form Section - Centered */}
        <div className="signup-form-section">
          <div className="form-container">
            <h1 className="signup-title">انشء حسابك الان</h1>
            
            <form onSubmit={handleSubmit} className="signup-form">
              {/* Name Fields - First Name and Last Name side by side */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">الاسم الأول</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="أدخل اسمك الأول"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">اسم العائلة</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="أدخل اسم العائلة"
                  />
                </div>
              </div>

              {/* Phone Fields - Phone Number and Father's Phone side by side */}
              <div className="form-row">
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
                <div className="form-group">
                  <label htmlFor="fatherPhoneNumber">رقم هاتف الأب</label>
                  <input
                    type="tel"
                    id="fatherPhoneNumber"
                    name="fatherPhoneNumber"
                    value={formData.fatherPhoneNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="أدخل رقم هاتف الأب"
                  />
                </div>
              </div>

              {/* Gender Dropdown */}
              <div className="form-group">
                <label htmlFor="gender">الجنس</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">اختر الجنس</option>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>

              {/* Government Dropdown */}
              <div className="form-group">
                <label htmlFor="government">المحافظة</label>
                <select
                  id="government"
                  name="government"
                  value={formData.government}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">اختر المحافظة</option>
                  {governments.map((gov, index) => (
                    <option key={index} value={gov}>{gov}</option>
                  ))}
                </select>
              </div>

              {/* Academic Year Dropdown */}
              <div className="form-group">
                <label htmlFor="academicYear">السنة الدراسية</label>
                <select
                  id="academicYear"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">اختر السنة الدراسية</option>
                  {academicYears.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              {/* Password Fields */}
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

              <div className="form-group">
                <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="أعد إدخال كلمة المرور"
                />
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
    </div>
  );
};

export default Signup; 