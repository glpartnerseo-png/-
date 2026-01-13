
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, setIsAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '서비스 소개', path: '/services' },
    { name: '작업 갤러리', path: '/gallery' },
    { name: '단체세탁 문의', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-white">
              PRO<span className="text-[#013220]">CAM</span>
            </span>
            <span className="text-xs border border-white/20 px-1 text-gray-400">프로캠</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#013220] ${
                  location.pathname === link.path ? 'text-[#013220]' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`p-2 rounded-full transition-colors ${
                isAdmin ? 'bg-[#013220] text-white' : 'hover:bg-white/5 text-gray-500'
              }`}
              title="Admin Mode"
            >
              <ShieldCheck size={18} />
            </button>
            {isAdmin && (
              <Link to="/admin" className="text-xs bg-white text-black px-3 py-1 rounded font-bold uppercase">
                CMS
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-gray-300 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          {isAdmin && (
             <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-[#013220] font-bold"
            >
              관리자 모드 (CMS)
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
