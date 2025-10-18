
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import EnrollmentGuideSection from './components/EnrollmentGuideSection';
import JobAlertsSection from './components/JobAlertsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-gray-200 font-sans">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <EnrollmentGuideSection />
        <JobAlertsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
