
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory, Sparkles } from 'lucide-react';
import { SiteContent } from '../types';

interface HomeProps {
  content: SiteContent;
}

const Home: React.FC<HomeProps> = ({ content }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
            {content.heroTitle.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
            <span className="text-[#013220]"> PRO<span className="text-white">CAM</span></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-[#013220] hover:bg-[#006400] text-white font-bold rounded-sm transition-all flex items-center justify-center space-x-2"
            >
              <span>견적 문의하기</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-sm transition-all"
            >
              서비스 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="group relative bg-[#0a0a0a] border border-white/5 p-12 overflow-hidden hover:border-[#013220]/50 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles size={80} className="text-[#013220]" />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-[#013220] uppercase mb-4">Premium Restoration</h3>
              <h2 className="text-3xl font-bold mb-6">{content.service1Title}</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {content.service1Desc}
              </p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-[#013220]" />
                  <span>특수 오염 제거 및 원단 복원</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-[#013220]" />
                  <span>고급 가죽 염색 및 영양 공급</span>
                </li>
              </ul>
              <Link to="/gallery" className="inline-flex items-center space-x-2 text-white font-bold border-b border-[#013220] pb-1">
                <span>작업 사례 보기</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-[#0a0a0a] border border-white/5 p-12 overflow-hidden hover:border-[#013220]/50 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Factory size={80} className="text-[#013220]" />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-[#013220] uppercase mb-4">Massive Scale Laundry</h3>
              <h2 className="text-3xl font-bold mb-6">{content.service2Title}</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {content.service2Desc}
              </p>
              <ul className="space-y-3 mb-10 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-[#013220]" />
                  <span>기업형 대량 세탁 시스템 완비</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-[#013220]" />
                  <span>주기적 수거 및 배송 서비스</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center space-x-2 text-white font-bold border-b border-[#013220] pb-1">
                <span>단체 세탁 상담</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-[#013220] mb-2">20+</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#013220] mb-2">1,500+</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Monthly Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#013220] mb-2">2</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Massive Factories</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#013220] mb-2">99%</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Satisfaction Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
