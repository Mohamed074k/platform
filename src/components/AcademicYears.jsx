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
     description: 'منهج شامل يغطي أساسيات علم الأحياء مع التركيز على المفاهيم الأساسية والتجارب العملية',
    image: course1Image,
    overlapText: '1',
    cardTitle: '  الصف الأول الثانوي  ',
    cardDescription: 'تعلم المفاهيم الأساسية في علم الأحياء من خلال دروس تفاعلية وتجارب عملية مذهلة',
  },
  {
    id: 2,
     description: 'تعمق في دراسة الأحياء مع التركيز على الأنظمة البيولوجية والتفاعلات الكيميائية',
    image: course2Image,
    overlapText: '2',
    cardTitle: '  الصف الثاني الثانوي',
    cardDescription: 'اكتشف تعقيدات الأنظمة البيولوجية وكيفية تفاعل الكائنات الحية مع بيئتها',
  },
  {
    id: 3,
     description: 'تحضير شامل لامتحانات الثانوية العامة مع مراجعة شاملة وتمارين تطبيقية',
    image: course3Image,
    overlapText: '3',
    cardTitle: ' الصف الثالث الثانوي',
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
          <div className="academic-title-overlap-container">
            <span className="academic-title-overlap">السنوات الدراسيه</span>
            <h2 className="academic-title">السنوات الدراسيه</h2>
          </div>
        </div>
        <div className="academic-cards new-animated-cards">
          {academicYears.map((year) => (
            <div key={year.id} className="animated-card">
              <div className="animated-card-circle">
                {year.overlapText}
              </div>
              <div className="animated-card-image">
                <img src={year.image} alt={year.cardTitle} />
              </div>
              <div className="animated-card-details">
                <div className="animated-card-center">
                  <h3 className="animated-card-title">{year.cardTitle}</h3>
                  <p className="animated-card-description">{year.cardDescription}</p>
                  <button className="animated-card-btn" onClick={() => handleCardClick(year.id)}>
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicYears;