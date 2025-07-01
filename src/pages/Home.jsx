import React from 'react';
import Hero from '../components/Hero';
import Join from '../components/Join';
import SuggestedCourses from '../components/SuggestedCourses';
import AcademicYears from '../components/AcademicYears';
import Footer from '../components/Footer';
import ScrollArrow from '../components/ScrollArrow';

const Home = () => {
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