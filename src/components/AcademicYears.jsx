import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import course1Image from '../images/academic-year1.jpg';
import course2Image from '../images/academic-year2.jpg';
import course3Image from '../images/academic-year3.jpg';
import './AcademicYears.css';

const academicYears = [
  {
    id: 1,
    title: 'الصف الأول الثانوي',
    description: 'منهج شامل يغطي أساسيات علم الأحياء مع التركيز على المفاهيم الأساسية والتجارب العملية',
    image: course1Image,
    overlapText: '1',
    cardTitle: 'أساسيات علم الأحياء',
    cardDescription: 'تعلم المفاهيم الأساسية في علم الأحياء من خلال دروس تفاعلية وتجارب عملية مذهلة',
  },
  {
    id: 2,
    title: 'الصف الثاني الثانوي',
    description: 'تعمق في دراسة الأحياء مع التركيز على الأنظمة البيولوجية والتفاعلات الكيميائية',
    image: course2Image,
    overlapText: '2',
    cardTitle: 'الأنظمة البيولوجية',
    cardDescription: 'اكتشف تعقيدات الأنظمة البيولوجية وكيفية تفاعل الكائنات الحية مع بيئتها',
  },
  {
    id: 3,
    title: 'الصف الثالث الثانوي',
    description: 'تحضير شامل لامتحانات الثانوية العامة مع مراجعة شاملة وتمارين تطبيقية',
    image: course3Image,
    overlapText: '3',
    cardTitle: 'التحضير للثانوية العامة',
    cardDescription: 'استعد لامتحانات الثانوية العامة بثقة من خلال مراجعة شاملة وتمارين تطبيقية متقدمة',
  },
];

const AcademicYears = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleCardClick = (yearId) => {
    navigate(`/years/${yearId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`academic-years ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="academic-content">
        <div className="academic-title-section">
          <h2 className="academic-title">السنوات الدراسيه</h2>
        </div>
        <div className="academic-cards">
          {academicYears.map((year) => (
            <div key={year.id} className="academic-card-container">
              <div className="academic-card" onClick={() => handleCardClick(year.id)} style={{ cursor: 'pointer' }}>
                <div className="card-overlap">
                  <span className="overlap-text">{year.overlapText}</span>
                </div>
                <div className="card-image">
                  <img src={year.image} alt={year.title} />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <h3 className="overlay-title">{year.title}</h3>
                      <div className="overlay-line"></div>
                      <p className="overlay-description">{year.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-info-title">{year.cardTitle}</h3>
                <p className="card-info-description">{year.cardDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicYears;