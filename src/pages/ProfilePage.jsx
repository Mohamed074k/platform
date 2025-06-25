import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import './ProfilePage.css';
// import profileBgImage from '../images/bg-profile.png';
import userIconForTitle from '../images/user.7bdee0126bf9ff6341797210b7b70031.svg';
// import profileIcon from '../images/profile.4f0b46ea2f6c3af275655ed738cbb0b3.svg';
import CircularProgress from '../components/CircularProgress';
// import userAvatar from '../images/teacher-avatar.jpg';

const mockUser = {
  name: 'أسامة السيد',
  email: 'osama@example.com',
  phone: '123-456-7890',
};

// Mock courses for demonstration
const mockCourses = [
  {
    id: 1,
    name: 'الكورس السنوي - أساسيات الأحياء',
    description: 'منهج شامل يغطي جميع أساسيات علم الأحياء للصف الأول الثانوي مع تدريبات عملية.',
    image: '../images/academic-year1.jpg',
  },
  {
    id: 2,
    name: 'الكورس السنوي - تدريبات متقدمة',
    description: 'تدريبات عملية متقدمة لتعزيز الفهم وتطوير المهارات.',
    // image: require('../images/academic-year2.jpg'),
  },
  {
    id: 3,
    name: 'الكورس السنوي - مراجعة نهائية',
    description: 'مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
    // image: require('../images/academic-year3.jpg'),
  },
];

const ProfilePage = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('ملف المستخدم');

  return (
    <div className={`profile-page ${isDarkMode ? 'dark' : ''}`}>
      {/* Top Section with Background */}
      <div className="profile-header">
        <div className="profile-header-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="profile-container">
        {/* Right Sidebar */}
        <div className="profile-sidebar">
          <div className={`sidebar-item${activeTab === 'ملف المستخدم' ? ' active' : ''}`} onClick={() => setActiveTab('ملف المستخدم')}>ملف المستخدم</div>
          <div className={`sidebar-item${activeTab === 'كورساتي' ? ' active' : ''}`} onClick={() => setActiveTab('كورساتي')}>كورساتي</div>
          <div className={`sidebar-item${activeTab === 'نتائج الامتحانات' ? ' active' : ''}`} onClick={() => setActiveTab('نتائج الامتحانات')}>نتائج الامتحانات</div>
          <div className={`sidebar-item${activeTab === 'نتائج الواجب' ? ' active' : ''}`} onClick={() => setActiveTab('نتائج الواجب')}>نتائج الواجب</div>
        </div>

        {/* Left Content */}
        <div className="profile-content">
          {activeTab === 'ملف المستخدم' && (
            <div className="user-profile-section">
              <div className="section-title-container">
                <img src={userIconForTitle} alt="user icon" className="section-title-icon" />
                <h3>ملف المستخدم</h3>
              </div>
              <div className="user-details-card">
                <div className="user-info">
                  <div className="user-info-details">
                    <div className="user-info-item">
                      <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      <span>{mockUser.name}</span>
                    </div>
                    <div className="user-info-item">
                      <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      <span>{mockUser.email}</span>
                    </div>
                    <div className="user-info-item">
                      <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      <span>{mockUser.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course Statistics Section */}
              <div className="course-stats-section">
                <div className="section-divider"></div>
                <h3 className="stats-title">احصاءيات كورساتك</h3>
                <div className="stats-container">
                  <CircularProgress
                    percentage={0}
                    title="عدد الفيديوهات اللي شوفتها"
                    subtitle="0 فيديو من 0"
                    color="#22c55e"
                  />
                  <CircularProgress
                    percentage={0}
                    title="عدد الاختبارات اللي خلصتها"
                    subtitle="0 امتحان من 0"
                    color="#f97316"
                  />
                  <CircularProgress
                    percentage={0}
                    title="متوسط النتائج"
                    color="#3b82f6"
                  />
                </div>
              </div>
            </div>
          )}
          {activeTab === 'كورساتي' && (
            <div className="courses-list-section">
              <h3 className="courses-list-title">كورساتي</h3>
              {mockCourses.length === 0 ? (
                <div className="no-courses-message">انت لم تشترك في اي كورسات حتي الان</div>
              ) : (
                <div className="courses-list">
                  {mockCourses.map(course => (
                    <div key={course.id} className="course-card-profile-vertical">
                      <img src={course.image} alt={course.name} className="course-card-profile-img-vertical" />
                      <div className="course-card-profile-info-vertical">
                        <h4>{course.name}</h4>
                        <p>{course.description}</p>
                        <button className="enrolled-btn" disabled>انت مشترك في هذا الكورس</button>
                        <button className="go-to-course-btn">الدخول الي الكورس</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage; 