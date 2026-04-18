import React from 'react';

const Capabilities = () => {
  return (
    <section className="py-32 px-8 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Technical Solutions for Complex Strata.
            </h2>
            <p className="text-on-surface-variant text-lg">We combine geophysical analysis with state-of-the-art drilling technology to deliver results where others can't.</p>
          </div>
          <div className="font-label text-sm font-bold uppercase tracking-[0.2em] text-outline">Section 01 // Capabilities</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative bg-surface-container-lowest p-8 rounded-xl shadow-none hover:shadow-2xl transition-all duration-500 overflow-hidden border border-transparent hover:border-outline-variant/20">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">water_drop</span>
              <h3 className="font-headline text-2xl font-bold text-primary mb-4">Water Well</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">Sustainable water access solutions utilizing advanced aquifer mapping and high-precision extraction systems.</p>
              <a className="inline-flex items-center gap-2 font-bold text-secondary group-hover:gap-4 transition-all" href="#">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="absolute bottom-0 right-0 opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[120px]">waves</span>
            </div>
          </div>
          <div className="group relative bg-primary p-8 rounded-xl shadow-none overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-secondary-container mb-6 block">engineering</span>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Geotechnical</h3>
              <p className="text-surface-container-high/70 leading-relaxed mb-6">Detailed subsurface characterization and foundation engineering for infrastructure development in complex terrains.</p>
              <a className="inline-flex items-center gap-2 font-bold text-secondary-container group-hover:gap-4 transition-all" href="#">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[120px] text-white">architecture</span>
            </div>
          </div>
          <div className="group relative bg-surface-container-lowest p-8 rounded-xl shadow-none hover:shadow-2xl transition-all duration-500 overflow-hidden border border-transparent hover:border-outline-variant/20">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6 block">diamond</span>
              <h3 className="font-headline text-2xl font-bold text-primary mb-4">Mineral Exploration</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">Precision sampling and resource definition designed to meet the highest regulatory and industry standards.</p>
              <a className="inline-flex items-center gap-2 font-bold text-secondary group-hover:gap-4 transition-all" href="#">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="absolute bottom-0 right-0 opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[120px]">mining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
