import React from 'react';
import Hero from '../components/Hero';
import Join from '../components/Join';
import SuggestedCourses from '../components/SuggestedCourses';
import AcademicYears from '../components/AcademicYears';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Join />
      <SuggestedCourses />
      <AcademicYears />
      <Footer />
    </>
  );
};

export default Home; 