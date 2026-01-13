
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { SiteContent } from './types';
import { INITIAL_CONTENT } from './constants';

const App: React.FC = () => {
  const [content, setContent] = useState<SiteContent>(INITIAL_CONTENT);
  const [isAdmin, setIsAdmin] = useState(false);

  // Simple "CMS" persistence simulation
  useEffect(() => {
    const saved = localStorage.getItem('procam_content');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem('procam_content', JSON.stringify(newContent));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#013220] selection:text-white">
        <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home content={content} />} />
            <Route path="/services" element={<Services content={content} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={
              isAdmin ? (
                <Admin content={content} onUpdate={updateContent} />
              ) : (
                <div className="h-[60vh] flex items-center justify-center">
                  <p className="text-gray-400">관리자 권한이 필요합니다.</p>
                </div>
              )
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
