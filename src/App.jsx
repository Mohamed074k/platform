import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AcademicYearNavbar from './components/AcademicYearNavbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AcademicYearPage from './pages/AcademicYearPage';
import ProfilePage from './pages/ProfilePage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import Dashboard from './pages/Dashboard';
import CourseContentPage from './pages/CourseContentPage';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

function AppContent() {
  const location = useLocation();
  // Show AcademicYearNavbar on /years/* and /course/*
  const isAcademicYearPage = location.pathname.startsWith('/years/');
  const isCourseDetailsPage = location.pathname.startsWith('/course/');
  return (
    <>
      {(isAcademicYearPage || isCourseDetailsPage) ? <AcademicYearNavbar /> : <Navbar />}
             <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/years/:yearId" element={<AcademicYearPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/course/:courseId" element={<CourseDetailsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course-content/:courseId" element={<CourseContentPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router basename='/platform'>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App;
