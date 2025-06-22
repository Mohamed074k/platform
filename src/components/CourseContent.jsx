import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './CourseContent.css';

const CourseContent = () => {
  const { isDarkMode } = useTheme();
  const [openLecture, setOpenLecture] = useState(null);
  const [openVideo, setOpenVideo] = useState(null);

  const courseContent = [
    {
      id: 1,
      title: "المحاضرة الأولى",
      videos: [
        {
          id: 1,
          title: "استفتاح سنة جديدة مع دفعة العباقرة",
          description: "وصف الفيديو: مقدمة شاملة للكورس وأهدافه",
          duration: "45 دقيقة",
          views: "1,250 مشاهدة",
          watchTime: "38,500 دقيقة"
        },
        {
          id: 2,
          title: "أساسيات علم الأحياء",
          description: "وصف الفيديو: شرح المفاهيم الأساسية في علم الأحياء",
          duration: "60 دقيقة",
          views: "980 مشاهدة",
          watchTime: "52,800 دقيقة"
        },
        {
          id: 3,
          title: "التجارب العملية الأولى",
          description: "وصف الفيديو: تطبيق عملي للمفاهيم النظرية",
          duration: "30 دقيقة",
          views: "750 مشاهدة",
          watchTime: "22,500 دقيقة"
        }
      ]
    },
    {
      id: 2,
      title: "المحاضرة الثانية",
      videos: [
        {
          id: 4,
          title: "الخلية الحية",
          description: "وصف الفيديو: دراسة تفصيلية لبنية الخلية",
          duration: "55 دقيقة",
          views: "890 مشاهدة",
          watchTime: "48,950 دقيقة"
        },
        {
          id: 5,
          title: "الأنسجة الحيوانية",
          description: "وصف الفيديو: أنواع الأنسجة ووظائفها",
          duration: "40 دقيقة",
          views: "720 مشاهدة",
          watchTime: "28,800 دقيقة"
        }
      ]
    },
    {
      id: 3,
      title: "المحاضرة الثالثة",
      videos: [
        {
          id: 6,
          title: "الجهاز الهضمي",
          description: "وصف الفيديو: دراسة شاملة للجهاز الهضمي",
          duration: "70 دقيقة",
          views: "1,100 مشاهدة",
          watchTime: "77,000 دقيقة"
        },
        {
          id: 7,
          title: "الجهاز التنفسي",
          description: "وصف الفيديو: آلية التنفس وتبادل الغازات",
          duration: "50 دقيقة",
          views: "850 مشاهدة",
          watchTime: "42,500 دقيقة"
        }
      ]
    }
  ];

  const toggleLecture = (lectureId) => {
    setOpenLecture(openLecture === lectureId ? null : lectureId);
    setOpenVideo(null);
  };

  const toggleVideo = (videoId) => {
    setOpenVideo(openVideo === videoId ? null : videoId);
  };

  return (
    <div className={`course-content-section ${isDarkMode ? 'dark' : 'light'}`}>
      <h3 className="course-content-title">محتوي الكورس</h3>
      
      <div className="content-accordion">
        {courseContent.map((lecture) => (
          <div key={lecture.id} className="lecture-item">
            <button
              className={`lecture-header ${openLecture === lecture.id ? 'active' : ''}`}
              onClick={() => toggleLecture(lecture.id)}
            >
              <div className="lecture-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                </svg>
                <span className="lecture-title">{lecture.title}</span>
              </div>
              <svg 
                className={`expand-icon ${openLecture === lecture.id ? 'active' : ''}`}
                width="20" height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            
            {openLecture === lecture.id && (
              <div className="lecture-content">
                {lecture.videos.map((video) => (
                  <div key={video.id} className="video-item">
                    <button
                      className={`video-header ${openVideo === video.id ? 'active' : ''}`}
                      onClick={() => toggleVideo(video.id)}
                    >
                      <div className="video-info">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="23,7 16,12 23,17 23,7"></polygon>
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                        <span className="video-title">{video.title}</span>
                      </div>
                      <svg 
                        className={`expand-icon ${openVideo === video.id ? 'active' : ''}`}
                        width="16" height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <polyline points="6,9 12,15 18,9"></polyline>
                      </svg>
                    </button>
                    
                    {openVideo === video.id && (
                      <div className="video-details">
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14,2 14,8 20,8"></polyline>
                          </svg>
                          <span className="detail-label">الوصف:</span>
                          <span className="detail-value">{video.description}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                          </svg>
                          <span className="detail-label">مدة الفيديو:</span>
                          <span className="detail-value">{video.duration}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span className="detail-label">اجمالي عدد المشاهدات:</span>
                          <span className="detail-value">{video.views}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                          </svg>
                          <span className="detail-label">اجمالي وقت المشاهدة:</span>
                          <span className="detail-value">{video.watchTime}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent; 