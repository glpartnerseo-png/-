
import React from 'react';
import { SiteContent } from '../types';
import { Check } from 'lucide-react';

interface ServicesProps {
  content: SiteContent;
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const luxuryDetails = [
    "명품 핸드백 복원 및 염색 (샤넬, 루이비통, 구찌 등)",
    "고급 가죽 의류 클리닝 및 에센셜 영양 공급",
    "명품 패딩 세탁 및 충전재 복원 (몽클레르, 캐나다구스 등)",
    "오래된 얼룩 제거 및 황변 현상 복원",
    "명품 신발(스니커즈, 구두) 정밀 세척"
  ];

  const groupDetails = [
    "공장 작업복 및 소방복 특수 살균 세탁",
    "병원 및 연구소 실험복 위생 관리",
    "연수원, 기숙사, 호텔 대량 침구류 세탁",
    "군부대 및 관공서 대규모 세탁 수주",
    "정기 수거/배송 및 철저한 수량 검수 시스템"
  ];

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Service Overview</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">프로캠만의 독보적인 기술력으로 제공하는 프리미엄 세탁 솔루션입니다.</p>
        </header>

        <div className="space-y-24">
          {/* Luxury Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-[#013220]"></span>
                {content.service1Title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {content.service1Desc} 프로캠의 장인들은 수년간 쌓아온 노하우로 명품의 가치를 지켜드립니다.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {luxuryDetails.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-gray-300">
                    <Check className="text-[#013220] mt-1 flex-shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1590736962235-905f9038d172?auto=format&fit=crop&q=80" alt="Luxury Laundry" className="rounded-lg shadow-2xl opacity-80" />
            </div>
          </div>

          {/* Group Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?auto=format&fit=crop&q=80" alt="Industrial Laundry" className="rounded-lg shadow-2xl opacity-80" />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-[#013220]"></span>
                {content.service2Title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {content.service2Desc} 대량 세탁의 효율성과 완벽한 품질 관리를 동시에 보장합니다.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {groupDetails.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-gray-300">
                    <Check className="text-[#013220] mt-1 flex-shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
