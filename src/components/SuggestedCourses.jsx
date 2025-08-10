import React, { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import './SuggestedCourses.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import courseImg1 from '../images/WhatsApp Image 2025-08-10 at 22.16.51_7de8d6e2.jpg';
import courseImg2 from '../images/WhatsApp Image 2025-08-10 at 22.16.51_7de8d6e2.jpg';
import courseImg3 from '../images/WhatsApp Image 2025-08-10 at 22.16.51_7de8d6e2.jpg';
import bioImg from '../images/Bio.d0a62f414cac4e017f94e402fe9643c5.svg';

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
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className={`suggested-courses ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="courses-content slider-layout">
        <div className="courses-text">
          <h2 className="courses-title">
            <motion.img 
              src={bioImg} 
              alt="bio" 
              className="lamp-icon lamp-icon-right"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.05, 1],
                filter: [
                  "brightness(1) hue-rotate(0deg)",
                  "brightness(1.2) hue-rotate(30deg)",
                  "brightness(1) hue-rotate(0deg)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.3,
                filter: "brightness(1.5) hue-rotate(60deg)",
                transition: { duration: 0.4 }
              }}
            />
            <span className="courses-title-white">الكورسات</span>
            <span> </span>
            <span className="courses-title-blue">المقترحه</span>
            <motion.img 
              src={bioImg} 
              alt="bio" 
              className="lamp-icon lamp-icon-left"
              animate={{
                y: [0, 8, 0],
                scale: [1, 1.05, 1],
                filter: [
                  "brightness(1) hue-rotate(0deg)",
                  "brightness(1.2) hue-rotate(-30deg)",
                  "brightness(1) hue-rotate(0deg)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{
                scale: 1.3,
                filter: "brightness(1.5) hue-rotate(-60deg)",
                transition: { duration: 0.4 }
              }}
            />
          </h2>
          <p className="courses-description">
            اكتشف مجموعة متنوعة من الكورسات المميزة في علم الأحياء، مصممة خصيصاً لطلاب الثانوية العامة. 
            كورسات تفاعلية مع شرح مبسط وأمثلة عملية لضمان الفهم الجيد والتحصيل الممتاز.
          </p>
        </div>
        <div 
          className="courses-slider-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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