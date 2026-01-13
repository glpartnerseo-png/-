
import React, { useState } from 'react';
import { Send, Phone, Clock } from 'lucide-react';
import { InquiryData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Group',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold font-serif mb-6">Inquiry</h1>
              <p className="text-gray-400 text-lg max-w-md">
                단체 세탁 견적 상담 및 명품 복원 문의를 남겨주시면 담당자가 빠른 시일 내에 연락드리겠습니다.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#013220]/20 rounded-full flex items-center justify-center text-[#013220] shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold">전화 상담</h4>
                  <p className="text-sm text-gray-500">0507-1324-2730 (실시간 유선 상담 가능)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#013220]/20 rounded-full flex items-center justify-center text-[#013220] shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold">운영 시간</h4>
                  <p className="text-sm text-gray-500">평일 09:00 - 18:00 (토/일 휴무)</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#0a0a0a] border border-white/5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#013220] mb-4">Quick Link</h4>
              <div className="flex gap-4">
                 <a href="https://talk.naver.com" className="flex-1 text-center py-3 bg-[#03C75A] text-white rounded font-bold text-sm">네이버 톡톡 상담</a>
                 <a href="https://pf.kakao.com" className="flex-1 text-center py-3 bg-[#FEE500] text-black rounded font-bold text-sm">카카오톡 문의</a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 relative overflow-hidden">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-[#013220] rounded-full flex items-center justify-center text-white">
                  <Send size={24} />
                </div>
                <h3 className="text-xl font-bold">문의가 접수되었습니다.</h3>
                <p className="text-gray-500">담당자가 곧 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">성함 / 업체명</label>
                    <input 
                      type="text" name="name" required
                      className="w-full bg-black border border-white/10 p-3 text-sm focus:outline-none focus:border-[#013220]" 
                      placeholder="이장균" 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">연락처</label>
                    <input 
                      type="tel" name="phone" required
                      className="w-full bg-black border border-white/10 p-3 text-sm focus:outline-none focus:border-[#013220]" 
                      placeholder="010-8200-2730" 
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">문의 서비스 선택</label>
                  <select 
                    name="serviceType"
                    className="w-full bg-black border border-white/10 p-3 text-sm focus:outline-none focus:border-[#013220] appearance-none"
                    onChange={handleChange}
                  >
                    <option value="Group">단체 세탁 (작업복, 침구류 등)</option>
                    <option value="Luxury">명품 세탁/복원 (핸드백, 의류 등)</option>
                    <option value="Other">기타 문의</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">문의 내용</label>
                  <textarea 
                    name="message" required
                    className="w-full bg-black border border-white/10 p-3 text-sm min-h-[150px] focus:outline-none focus:border-[#013220]" 
                    placeholder="문의하실 내용을 상세히 적어주세요."
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#013220] hover:bg-[#006400] text-white font-bold transition-all uppercase tracking-widest text-sm"
                >
                  문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
