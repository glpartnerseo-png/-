
import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const seoKeywords = [
    "단체세탁", "작업복세탁", "대량세탁", "연수원세탁", "기숙사세탁",
    "소방복세탁", "실험복세탁", "단체이불세탁", "침구류세탁"
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Social */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter">
              PRO<span className="text-[#013220]">CAM</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              최고의 기술력과 최신 설비로 고객님의 소중한 의류와 기업의 자산을 완벽하게 관리합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#013220] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://pf.kakao.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#013220] transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#013220]">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span>대표번호: 0507-1324-2730</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span>직통: 010-8200-2730</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <span>dltnduslsy@naver.com</span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#013220]">Our Factories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">제1공장 (미추홀구)</p>
                <p className="text-xs text-gray-500">인천 미추홀구 경인북길357번길 13</p>
                <p className="text-[10px] text-gray-600">사업자: 121-10-73129</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">제2공장 (만석동)</p>
                <p className="text-xs text-gray-500">인천 동구 만석동 2-501</p>
                <p className="text-[10px] text-gray-600">사업자: 299-72-00247</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Tags */}
        <div className="flex flex-wrap gap-2 mb-12 py-6 border-y border-white/5">
          {seoKeywords.map((keyword) => (
            <span key={keyword} className="text-[10px] text-gray-600 border border-white/10 px-2 py-1 rounded">
              #{keyword}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 space-y-4 md:space-y-0">
          <p>© 2024 PROCAM. All rights reserved. | 대표자: 이장균</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
