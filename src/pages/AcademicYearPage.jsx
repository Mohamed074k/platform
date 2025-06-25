import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AcademicYearNavbar from '../components/AcademicYearNavbar';
import SuggestedCourses from '../components/SuggestedCourses';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import academicYear1Img from '../images/academic-year1.jpg';
import academicYear2Img from '../images/academic-year2.jpg';
import academicYear3Img from '../images/academic-year3.jpg';
import './AcademicYearPage.css';

// Mock user name (replace with backend data later)
const mockUserName = 'محمد';

const yearTitles = {
  1: 'الصف الاول الثانوي',
  2: 'الصف الثاني الثانوي',
  3: 'الصف الثالث الثانوي',
};

const allAnnualCourses = {
  1: [
    {
      id: 1,
      name: 'الكورس السنوي - أساسيات الأحياء',
      description: 'منهج شامل يغطي جميع أساسيات علم الأحياء للصف الأول الثانوي مع تدريبات عملية.',
      image: academicYear1Img,
    },
    {
      id: 2,
      name: 'الكورس السنوي - تدريبات متقدمة',
      description: 'تدريبات عملية متقدمة لتعزيز الفهم وتطوير المهارات.',
      image: academicYear1Img,
    },
    {
      id: 3,
      name: 'الكورس السنوي - مراجعة نهائية',
      description: 'مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
      image: academicYear1Img,
    },
  ],
  2: [
    {
      id: 1,
      name: 'الكورس السنوي - الأنظمة البيولوجية',
      description: 'تعمق في دراسة الأنظمة البيولوجية والتفاعلات الكيميائية للصف الثاني الثانوي.',
      image: academicYear2Img,
    },
    {
      id: 2,
      name: 'الكورس السنوي - مراجعة شاملة',
      description: 'مراجعة شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
      image: academicYear2Img,
    },
    {
      id: 3,
      name: 'الكورس السنوي - تدريبات تطبيقية',
      description: 'تدريبات تطبيقية متقدمة لتعزيز الفهم.',
      image: academicYear2Img,
    },
  ],
  3: [
    {
      id: 1,
      name: 'الكورس السنوي - التحضير للثانوية العامة',
      description: 'تحضير شامل لامتحانات الثانوية العامة مع مراجعة شاملة وتمارين تطبيقية.',
      image: academicYear3Img,
    },
    {
      id: 2,
      name: 'الكورس السنوي - بنك الأسئلة',
      description: 'بنك أسئلة شامل لجميع الدروس مع حلول نموذجية.',
      image: academicYear3Img,
    },
    {
      id: 3,
      name: 'الكورس السنوي - مراجعة نهائية',
      description: 'مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
      image: academicYear3Img,
    },
  ],
};

const allFaslCourses = {
  1: [
    { id: 1, name: 'كورس الفصل الأول', description: 'شرح مفصل لجميع دروس الفصل الأول مع تدريبات.', image: academicYear1Img },
    { id: 2, name: 'كورس الفصل الثاني', description: 'شرح مفصل لجميع دروس الفصل الثاني مع تدريبات.', image: academicYear1Img },
    { id: 3, name: 'كورس الفصل الثالث', description: 'شرح مفصل لجميع دروس الفصل الثالث مع تدريبات.', image: academicYear1Img },
  ],
  2: [
    { id: 1, name: 'كورس الفصل الأول', description: 'شرح مفصل لجميع دروس الفصل الأول مع تدريبات.', image: academicYear2Img },
    { id: 2, name: 'كورس الفصل الثاني', description: 'شرح مفصل لجميع دروس الفصل الثاني مع تدريبات.', image: academicYear2Img },
    { id: 3, name: 'كورس الفصل الثالث', description: 'شرح مفصل لجميع دروس الفصل الثالث مع تدريبات.', image: academicYear2Img },
  ],
  3: [
    { id: 1, name: 'كورس الفصل الأول', description: 'شرح مفصل لجميع دروس الفصل الأول مع تدريبات.', image: academicYear3Img },
    { id: 2, name: 'كورس الفصل الثاني', description: 'شرح مفصل لجميع دروس الفصل الثاني مع تدريبات.', image: academicYear3Img },
    { id: 3, name: 'كورس الفصل الثالث', description: 'شرح مفصل لجميع دروس الفصل الثالث مع تدريبات.', image: academicYear3Img },
  ],
};

const allWeeklyLectures = {
  1: [
    { id: 1, name: 'المحاضرة الأسبوعية 1', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: academicYear1Img },
    { id: 2, name: 'المحاضرة الأسبوعية 2', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: academicYear1Img },
    { id: 3, name: 'المحاضرة الأسبوعية 3', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: academicYear1Img },
  ],
  2: [
    { id: 1, name: 'المحاضرة الأسبوعية 1', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: academicYear2Img },
    { id: 2, name: 'المحاضرة الأسبوعية 2', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: academicYear2Img },
    { id: 3, name: 'المحاضرة الأسبوعية 3', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: academicYear2Img },
  ],
  3: [
    { id: 1, name: 'المحاضرة الأسبوعية 1', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: academicYear3Img },
    { id: 2, name: 'المحاضرة الأسبوعية 2', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: academicYear3Img },
    { id: 3, name: 'المحاضرة الأسبوعية 3', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: academicYear3Img },
  ],
};

const AcademicYearPage = () => {
  const { isDarkMode } = useTheme();
  const { yearId } = useParams();
  const navigate = useNavigate();
  const yearTitle = yearTitles[yearId];
  const annualCourses = allAnnualCourses[yearId];
  const faslCourses = allFaslCourses[yearId];
  const weeklyLectures = allWeeklyLectures[yearId];

  // Toggle state for each section
  const [showAnnual, setShowAnnual] = useState(true);
  const [showFasl, setShowFasl] = useState(false);
  const [showWeekly, setShowWeekly] = useState(false);

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  if (!yearTitle) {
    return <div className={`academic-year-page ${isDarkMode ? 'dark' : 'light'}`}><AcademicYearNavbar /><main className="academic-year-main"><section className="academic-year-welcome-section"><h1>الصف الدراسي غير موجود</h1></section></main></div>;
  }

  return (
    <div className={`academic-year-page ${isDarkMode ? 'dark' : 'light'}`}>
      <AcademicYearNavbar />
      <main className="academic-year-main">
        {/* Welcome Section */}
        <section className="academic-year-welcome-section">
          <h1 className="academic-year-title"> <span className="skewed-name-bg">{mockUserName}</span> اهلا</h1>
          <h2 className="academic-year-subtitle">مرحبا بك في منصه د/محمد ايمن</h2>
          <div className="academic-year-actions">
            <div className="academic-year-desc">للدخول علي اشتراكاتك</div>
            <button className="academic-year-btn">اشتراكاتك</button>
            <div className="academic-year-browse">او تصفح الكورسات للاشتراك بكورس جديد</div>
          </div>
        </section>
        {/* Suggested Courses Section */}
        <section className="academic-year-suggested-section">
          <SuggestedCourses />
        </section>
        {/* Academic Year Courses Section */}
        <section className="academic-year-courses-section">
          <div className="academic-year-main-title-overlap-container">
            <span className="academic-year-main-title-overlap">{yearTitle}</span>
            <h2 className="academic-year-main-title">{yearTitle}</h2>
          </div>
          <h3 className="academic-year-courses-title">احدث الكورسات</h3>
          <button className="toggle-section-btn" onClick={() => setShowAnnual((v) => !v)}>
            <span>{showAnnual ? '▼' : '►'}</span> الكورس السنوي
          </button>
          {showAnnual && (
            <div className="academic-cards" style={{ justifyContent: 'center' }}>
              {annualCourses && annualCourses.map((course) => (
                <div key={course.id} className="academic-card-container">
                  <div className="academic-card">
                    <div className="card-image">
                      <img src={course.image} alt={course.name} />
                    </div>
                    <div className="academic-card-info-box">
                      <h5 className="academic-card-info-title">{course.name}</h5>
                      <p className="academic-card-info-desc">{course.description}</p>
                      <div className="academic-card-info-actions">
                        <button className="academic-card-btn primary">اشترك الان</button>
                        <button 
                          className="academic-card-btn secondary"
                          onClick={() => handleCourseClick(course.id)}
                        >
                          الدخول الي الكورس
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        {/* Fasl Courses Section */}
        <section className="academic-year-courses-section">
          <button className="toggle-section-btn" onClick={() => setShowFasl((v) => !v)}>
            <span>{showFasl ? '▼' : '►'}</span> كورسات الفصول
          </button>
          {showFasl && (
            <div className="academic-cards" style={{ justifyContent: 'center' }}>
              {faslCourses && faslCourses.map((course) => (
                <div key={course.id} className="academic-card-container">
                  <div className="academic-card">
                    <div className="card-image">
                      <img src={course.image} alt={course.name} />
                    </div>
                    <div className="academic-card-info-box">
                      <h5 className="academic-card-info-title">{course.name}</h5>
                      <p className="academic-card-info-desc">{course.description}</p>
                      <div className="academic-card-info-actions">
                        <button className="academic-card-btn primary">اشترك الان</button>
                        <button 
                          className="academic-card-btn secondary"
                          onClick={() => handleCourseClick(course.id)}
                        >
                          الدخول الي الكورس
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        {/* Weekly Lectures Section */}
        <section className="academic-year-courses-section">
          <button className="toggle-section-btn" onClick={() => setShowWeekly((v) => !v)}>
            <span>{showWeekly ? '▼' : '►'}</span> المحاضرات الاسبوعيه
          </button>
          {showWeekly && (
            <div className="academic-cards" style={{ justifyContent: 'center' }}>
              {weeklyLectures && weeklyLectures.map((course) => (
                <div key={course.id} className="academic-card-container">
                  <div className="academic-card">
                    <div className="card-image">
                      <img src={course.image} alt={course.name} />
                    </div>
                    <div className="academic-card-info-box">
                      <h5 className="academic-card-info-title">{course.name}</h5>
                      <p className="academic-card-info-desc">{course.description}</p>
                      <div className="academic-card-info-actions">
                        <button className="academic-card-btn primary">اشترك الان</button>
                        <button 
                          className="academic-card-btn secondary"
                          onClick={() => handleCourseClick(course.id)}
                        >
                          الدخول الي الكورس
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicYearPage;