import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './SuggestedCourses.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import courseImg1 from '../images/suggested-courses1.jpg';
import courseImg2 from '../images/suggested-courses2.jpg';
import courseImg3 from '../images/suggested-courses3.jpg';

const slides = [
  {
    image: courseImg1,
    title: 'أساسيات علم الأحياء',
    price: '150 ج.م',
  },
  {
    image: courseImg2,
    title: 'الأنظمة البيولوجية',
    price: '200 ج.م',
  },
  {
    image: courseImg3,
    title: 'التحضير للثانوية العامة',
    price: '250 ج.م',
  },
];

const SuggestedCourses = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`suggested-courses ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="courses-content slider-layout">
        <div className="courses-text">
          <h2 className="courses-title">الكورسات المقترحه</h2>
          <p className="courses-description">
            اكتشف مجموعة متنوعة من الكورسات المميزة في علم الأحياء، مصممة خصيصاً لطلاب الثانوية العامة. 
            كورسات تفاعلية مع شرح مبسط وأمثلة عملية لضمان الفهم الجيد والتحصيل الممتاز.
          </p>
        </div>
        <div className="courses-slider-container">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            className="courses-swiper"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="slide-bg" style={{ backgroundImage: `url(${slide.image})` }}>
                  <div className="slide-hover-info">
                    <span className="slide-price">{slide.price}</span>
                    <button className="slide-btn primary">الدخول الي الكورس</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SuggestedCourses; 