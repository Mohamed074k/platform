import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './CourseContent.css';

const RealCourseContent = ({ content }) => {
  const { isDarkMode } = useTheme();
  const [activeVideo, setActiveVideo] = useState(null); // Track which video is open
  const [openLecture, setOpenLecture] = useState(null); // Track which lecture toggle is open

  const handleOpenLecture = (lecture) => {
    setActiveVideo(lecture);
  };

  const handleBack = () => {
    setActiveVideo(null);
  };

  const handleToggleLecture = (key) => {
    setOpenLecture(openLecture === key ? null : key);
  };

  const renderLectures = (lectures, parentKey = '') => (
    <div className="content-accordion">
      {lectures.map((lecture) => {
        const key = parentKey + lecture.id;
        const hasSubLectures = Array.isArray(lecture.subLectures) && lecture.subLectures.length > 0;
        return (
          <div key={key} className="lecture-item">
            <button
              className={`lecture-header ${openLecture === key ? 'active' : ''}`}
              onClick={() => handleToggleLecture(key)}
            >
              <div className="lecture-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                </svg>
                <span className="lecture-title">{lecture.name}</span>
              </div>
              <svg 
                className={`expand-icon ${openLecture === key ? 'active' : ''}`}
                width="20" height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            {openLecture === key && (
              <div className="lecture-content">
                {/* Detail item: Lecture name and open button */}
                {lecture.videoUrl && (
                  <div className="detail-item">
                    <span className="detail-label">اسم المحاضرة:</span>
                    <span className="detail-value">{lecture.name}</span>
                    <button
                      className="open-lecture-btn"
                      onClick={() => handleOpenLecture(lecture)}
                    >
                      فتح المحاضرة
                    </button>
                  </div>
                )}
                {/* Detail item: Download file */}
                {lecture.fileUrl && (
                  <div className="detail-item">
                    <span className="detail-label">تحميل ملف المحاضرة:</span>
                    <a
                      className="download-lecture-btn"
                      href={lecture.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      تحميل الملف
                    </a>
                  </div>
                )}
                {/* Detail item: Exam */}
                {lecture.examUrl && (
                  <div className="detail-item">
                    <span className="detail-label">امتحان المحاضرة:</span>
                    <a
                      className="open-lecture-btn"
                      href={lecture.examUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      دخول الامتحان
                    </a>
                  </div>
                )}
                {/* Render sub-lectures recursively if present */}
                {hasSubLectures && renderLectures(lecture.subLectures, key + '-')}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={`course-content-section ${isDarkMode ? 'dark' : 'light'}`}>
      <h3 className="course-content-title">المحتوى الفعلي للكورس</h3>
      {activeVideo ? (
        <div className="centered-video-content" style={{margin: '40px auto', textAlign: 'center'}}>
          <button className="back-btn" onClick={handleBack} style={{marginBottom: 24}}>&larr; رجوع</button>
          <h2 style={{textAlign: 'center'}}>{activeVideo.name}</h2>
          {activeVideo.videoUrl && activeVideo.videoUrl.includes('youtu') ? (
            <iframe
              width="100%"
              height="400"
              style={{ display: 'block', margin: '0 auto', maxWidth: '90%', maxHeight: '60vh', borderRadius: '12px' }}
              src={
                activeVideo.videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/').split('?')[0]
              }
              title={activeVideo.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              src={activeVideo.videoUrl}
              controls
              autoPlay
              style={{ display: 'block', margin: '0 auto', maxWidth: '90%', maxHeight: '60vh', borderRadius: '12px' }}
            />
          )}
        </div>
      ) : (
        renderLectures(content)
      )}
    </div>
  );
};

export default RealCourseContent; 