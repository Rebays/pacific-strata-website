import React from 'react';

const Expertise = () => {
  return (
    <section className="py-32 px-8 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
            <img
              className="w-full aspect-[4/5] object-cover"
              alt="Close-up of a high-tech drill core sample showing distinct geological layers"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIUzLmG9r7f8Oe3oeppf-Hwto79ysDl1vPMQWYhtFhUbf5Nmp1HVi3q-jZqLGGMka3-NOvnM_8WmZjJr-hdfAe1Ja0X3n152ly7Xu_1DzqiHQChoyJI5pyisuHI-67P3IG7QNnaYepM3HreD7ThNXEO-qinn1vlLHbLepvWl0Y0z7T6phfTpSSkMACbiEGqcX1lJfkFJvy792x5SNZVu2R20AKFr-cupGYmdWfjMU3HJDXR2BFWI5bOM8EbgW4LIfHUMzTZsygqA"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-surface-container-highest -z-10 rounded-lg"></div>
          <div className="absolute -top-10 -left-10 w-1/2 h-1/2 border-l border-t border-outline-variant/30 -z-10"></div>
        </div>
        <div className="w-full md:w-1/2">
          <span className="font-label text-sm font-black text-secondary tracking-widest uppercase mb-4 block">The Pacific Standard</span>
          <h2 className="font-headline text-5xl font-extrabold text-primary mb-8 leading-tight">Why Choose Our Expertise</h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container-highest rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Technical Excellence</h4>
                <p className="text-on-surface-variant font-light">We utilize the latest Tier 1 drilling technology and proprietary subsurface imaging protocols for unmatched accuracy.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container-highest rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Safety Standards</h4>
                <p className="text-on-surface-variant font-light">Our rigorous safety management system (SMS) ensures zero-incident performance on the most demanding sites.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container-highest rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>nature_people</span>
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Sustainable Practices</h4>
                <p className="text-on-surface-variant font-light">Minimum footprint operations focused on aquifer protection and long-term environmental stewardship.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
