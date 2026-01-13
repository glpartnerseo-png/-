
import React, { useState } from 'react';
import { GALLERY_DATA } from '../constants.tsx';
import { Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Luxury' | 'Group'>('All');

  const filteredItems = filter === 'All' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === filter);

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <h1 className="text-4xl font-bold font-serif mb-4">Portfolio</h1>
            <p className="text-gray-400">프로캠의 놀라운 복원력을 직접 확인해보세요.</p>
          </div>
          <div className="flex bg-[#0a0a0a] border border-white/5 rounded-sm p-1">
            {['All', 'Luxury', 'Group'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 text-xs font-bold transition-all ${
                  filter === cat ? 'bg-[#013220] text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                {cat === 'All' ? '전체' : cat === 'Luxury' ? '명품복원' : '단체세탁'}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden">
              <div className="flex">
                <div className="w-1/2 relative overflow-hidden border-r border-black">
                   <img src={item.beforeImg} alt="Before" className="w-full h-64 object-cover grayscale" />
                   <div className="absolute top-2 left-2 bg-black/60 text-[8px] px-1 py-0.5 text-white uppercase tracking-tighter">Before</div>
                </div>
                <div className="w-1/2 relative overflow-hidden">
                   <img src={item.afterImg} alt="After" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 right-2 bg-[#013220]/80 text-[8px] px-1 py-0.5 text-white uppercase tracking-tighter">After</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-[#013220] font-bold uppercase tracking-widest">{item.category} Restoration</span>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                  </div>
                  <button className="text-gray-500 hover:text-white transition-colors">
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
