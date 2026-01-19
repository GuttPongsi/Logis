import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Content from './pages/Content';
import Innovations from './pages/Innovations';
import CaseStudies from './pages/CaseStudies';
import Recommendations from './pages/Recommendations';
import References from './pages/References';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.TOPIC:
        return <Content />;
      case Page.INNOVATIONS:
        return <Innovations />;
      case Page.CASE_STUDIES:
        return <CaseStudies />;
      case Page.RECOMMENDATIONS:
        return <Recommendations />;
      case Page.REFERENCES:
        return <References />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-grow animate-fade-in">
        {renderPage()}
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 dark:text-slate-400">
          <p className="font-medium">© 2025 AI in Logistics Project</p>
          <p className="text-sm mt-2">
            พัฒนาโดยนักศึกษาคณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยสวนดุสิต
          </p>
          <p className="text-xs mt-1 text-slate-400">
            อ้างอิงข้อมูลจากรายงานวิชาการ: Enhancing TMS with AI for Comprehensive Transport Planning and Tracking
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;