import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Join from '../components/Join';
import SuggestedCourses from '../components/SuggestedCourses';
import AcademicYears from '../components/AcademicYears';
import Footer from '../components/Footer';
import ScrollArrow from '../components/ScrollArrow';
import Loader from '../components/Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        background: '#fff',
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0
      }}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Join />
      <SuggestedCourses />
      <AcademicYears />
      <Footer />
      <ScrollArrow />
    </>
  );
};

export default Home; 