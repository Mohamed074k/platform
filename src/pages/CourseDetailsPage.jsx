import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useParams } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import CourseContent from '../components/CourseContent';
import Footer from '../components/Footer';
import './CourseDetailsPage.css';
import course1Image from '../images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5.jpg';
// import bgProfileImage from '../images/bg-profile.png';

const CourseDetailsPage = () => {
  const { isDarkMode } = useTheme();
  const { courseId } = useParams();

  // Mock course data - in real app this would come from API
  const courseData = {
    id: courseId,
    name: "كورس الأحياء الأساسي - الفصل الأول",
    description: "كورس شامل في علم الأحياء للثانوية العامة، يغطي جميع المفاهيم الأساسية بطريقة مبسطة ومفهومة مع أمثلة عملية وتطبيقات واقعية.",
    stats: {
      videos: 320,
      exams: 96,
      assignments: 45,
      files: 128
    },
    descriptionItems: [
      "شرح مفصل لجميع الدروس مع أمثلة عملية",
      "أكثر من 320 فيديو تعليمي عالي الجودة",
      "96 امتحان تفاعلي مع التصحيح التلقائي",
      "45 واجب منزلي لتعزيز الفهم",
      "128 ملف PDF للتحميل والمراجعة",
      "شهادة إتمام معتمدة",
      "دعم فني على مدار الساعة",
      "مجموعة واتساب للطلاب للتفاعل مع المعلم"
    ]
  };

  const handleEnroll = () => {
    // Handle enrollment logic here
    console.log('Enrolling in course:', courseId);
    // You can add navigation, API calls, or other logic here
  };

  return (
    <div className={`course-details-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header Section with Yellow Background */}
      <div className="course-header">
        <div className="course-header-overlay"></div>
        <div className="course-stats-container">
          <div className="stats-grid">
            <div className="stat-item videos">
              <div className="stat-left">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="23,7 16,12 23,17 23,7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <div className="stat-number">+{courseData.stats.videos}</div>
              </div>
              <div className="stat-separator"></div>
              <div className="stat-right">
                <div className="stat-label">فيديوهات</div>
              </div>
            </div>

            <div className="stat-item exams">
              <div className="stat-left">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <div className="stat-number">+{courseData.stats.exams}</div>
              </div>
              <div className="stat-separator"></div>
              <div className="stat-right">
                <div className="stat-label">امتحانات</div>
              </div>
            </div>

            <div className="stat-item assignments">
              <div className="stat-left">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <div className="stat-number">+{courseData.stats.assignments}</div>
              </div>
              <div className="stat-separator"></div>
              <div className="stat-right">
                <div className="stat-label">واجبات</div>
              </div>
            </div>

            <div className="stat-item files">
              <div className="stat-left">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                  </svg>
                </div>
                <div className="stat-number">+{courseData.stats.files}</div>
              </div>
              <div className="stat-separator"></div>
              <div className="stat-right">
                <div className="stat-label">ملفات</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="course-content">
        <div className="course-info-container">
          {/* Course Name */}
          <h1 className="course-name">{courseData.name}</h1>
          
          {/* Course Description */}
          <div className="course-description-section">
            <p className="course-description">{courseData.description}</p>
          </div>

          {/* Course Features List */}
          <div className="course-features-section">
            <div className="features-container">
              <div className="features-content">
                <h3 className="features-title">مميزات الكورس</h3>
                <div className="features-list">
                  {courseData.descriptionItems.map((item, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"></polyline>
                        </svg>
                      </div>
                      <span className="feature-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Course Card */}
              <CourseCard
                courseImage={course1Image}
                courseName={courseData.name}
                price="199 ريال"
                duration="500 ساعة"
                totalQuestions="1500 سؤال"
                onEnroll={handleEnroll}
              />
            </div>
          </div>

          {/* Course Content */}
          <CourseContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailsPage; 