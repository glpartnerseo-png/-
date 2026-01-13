
import React, { useState } from 'react';
import { SiteContent } from '../types';
import { Save, Settings, Layout, Image, MessageSquare } from 'lucide-react';

interface AdminProps {
  content: SiteContent;
  onUpdate: (newContent: SiteContent) => void;
}

const Admin: React.FC<AdminProps> = ({ content, onUpdate }) => {
  const [formData, setFormData] = useState<SiteContent>(content);
  const [activeTab, setActiveTab] = useState<'content' | 'posts' | 'settings'>('content');

  const handleSave = () => {
    onUpdate(formData);
    alert('설정이 저장되었습니다.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-64 space-y-2">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded ${activeTab === 'content' ? 'bg-[#013220] text-white' : 'hover:bg-white/5 text-gray-400'}`}
          >
            <Layout size={18} />
            <span>메인 콘텐츠 관리</span>
          </button>
          <button 
             onClick={() => setActiveTab('posts')}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded ${activeTab === 'posts' ? 'bg-[#013220] text-white' : 'hover:bg-white/5 text-gray-400'}`}
          >
            <Image size={18} />
            <span>작업 갤러리 관리</span>
          </button>
          <button 
             onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded ${activeTab === 'settings' ? 'bg-[#013220] text-white' : 'hover:bg-white/5 text-gray-400'}`}
          >
            <Settings size={18} />
            <span>사이트 기본 설정</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#0a0a0a] border border-white/5 p-8 rounded-sm">
          <header className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
            <div>
              <h2 className="text-2xl font-bold">Admin Dashboard</h2>
              <p className="text-gray-500 text-sm">PROCAM 사이트의 실시간 콘텐츠 관리 시스템</p>
            </div>
            <button 
              onClick={handleSave}
              className="px-6 py-2 bg-[#013220] hover:bg-[#006400] text-white text-sm font-bold flex items-center space-x-2 rounded transition-all"
            >
              <Save size={16} />
              <span>저장하기</span>
            </button>
          </header>

          {activeTab === 'content' && (
            <div className="space-y-8 animate-in slide-in-from-bottom-2 duration-300">
              <section className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#013220]">Hero Section</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">메인 타이틀</label>
                    <textarea 
                      name="heroTitle"
                      value={formData.heroTitle}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 p-3 text-sm focus:border-[#013220] outline-none h-24"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">서브 타이틀</label>
                    <input 
                      type="text" 
                      name="heroSubtitle"
                      value={formData.heroSubtitle}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 p-3 text-sm focus:border-[#013220] outline-none"
                    />
                  </div>
                </div>
              </section>

              <section className="space-y-4 pt-8 border-t border-white/5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#013220]">Service Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-xs text-white">Service 1 (Luxury)</p>
                    <input 
                      type="text" 
                      name="service1Title"
                      value={formData.service1Title}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 p-3 text-sm focus:border-[#013220] outline-none font-bold"
                    />
                    <textarea 
                      name="service1Desc"
                      value={formData.service1Desc}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 p-3 text-sm focus:border-[#013220] outline-none h-32"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-white">Service 2 (Group)</p>
                    <input 
                      type="text" 
                      name="service2Title"
                      value={formData.service2Title}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 p-3 text-sm focus:border-[#013220] outline-none font-bold"
                    />
                    <textarea 
                      name="service2Desc"
                      value={formData.service2Desc}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 p-3 text-sm focus:border-[#013220] outline-none h-32"
                    />
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="py-20 text-center space-y-4 text-gray-500 animate-in slide-in-from-bottom-2 duration-300">
               <Image size={48} className="mx-auto opacity-20" />
               <p>갤러리 관리 기능은 개발 중입니다.</p>
               <p className="text-xs italic">이미지 업로드 및 순서 변경 기능을 준비하고 있습니다.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-8 animate-in slide-in-from-bottom-2 duration-300">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs text-gray-500 mb-1">사이트명</label>
                    <input type="text" defaultValue="PROCAM" className="w-full bg-black border border-white/10 p-3 text-sm" />
                 </div>
                 <div>
                    <label className="block text-xs text-gray-500 mb-1">포인트 컬러</label>
                    <div className="flex gap-2">
                       <div className="w-10 h-10 bg-[#013220] border border-white/20"></div>
                       <input type="text" defaultValue="#013220" className="flex-1 bg-black border border-white/10 p-3 text-sm" />
                    </div>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
