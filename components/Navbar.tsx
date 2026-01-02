
import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [logoError, setLogoError] = useState(false);
  
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white border-b border-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {!logoError ? (
              <img 
                src="https://tse4.mm.bing.net/th/id/OIP.nSCpDD--NsPRgN0xZF-rowHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="VRT Management Group" 
                className="h-14 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-vrt-red flex items-center justify-center bg-white flex-shrink-0">
                  <div className="w-7 h-7 bg-vrt-red rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-serif text-2xl font-black tracking-tighter text-vrt-red leading-none">VRT</span>
                  <span className="font-serif text-[11px] font-normal tracking-tight text-vrt-gray leading-tight mt-0.5">Management Group</span>
                </div>
              </div>
            )}
          </div>
          <span className="hidden md:block text-vrt-gray text-sm font-medium">/</span>
          <span className="font-serif text-lg md:text-xl font-black tracking-tighter text-vrt-black">Entrepreneur Growth Alliance</span>
        </div>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => scrollTo('training-areas')}
            className="hidden sm:block text-[11px] font-black uppercase tracking-[0.2em] text-vrt-gray hover:text-vrt-red transition-colors"
          >
            What’s Included
          </button>
          <button className="bg-vrt-red text-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-vrt-black transition-all">
            Book Strategy Call
          </button>
        </div>
      </div>
    </nav>
  );
};
