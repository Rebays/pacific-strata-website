import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[921px] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Cinematic wide shot of a massive specialized drilling rig at dawn"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRdjM3JTb-iu6HTqY4BpF0sxFxf7RweRnNUior0Rnyl-juUqcG89maAYUXvd6tMhJBzOK_hc8P1A2-OR9j4PbnrVP7H53kNy2jg3N8sPeEP2w_Gcy0HO94Gusl8ABtLwZpFAslH4muZJfl4xoAAjzaRi8XsOfSF18WhGv500NBPDW8aNSQfXFMheGiDZJurD-WIexq6aorebii9Z8p3tmYa1QGHH4vDBvp0L4hq72zlrnK1HzuRxZEWMnR2Ap4Inefh7iiVwrP9g"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="strata-scroll-bar"></div>
            <span className="font-label text-sm uppercase tracking-widest text-secondary-container font-bold">Engineering Excellence</span>
          </div>
          <h1 className="font-headline text-6xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tighter mb-6">
            Precision Engineering for Subsurface Success.
          </h1>
          <p className="text-xl text-surface-container-high/90 max-w-lg mb-10 leading-relaxed font-light">
            Leading experts in specialized drilling and water resource management across the Pacific. We unveil the structures beneath the surface.
          </p>
          <div className="flex gap-4">
            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
              Request a Quote
            </button>
            <button className="glass-panel text-white px-8 py-4 rounded-lg font-bold text-lg outline-variant/20 outline-1 border border-white/20">
              Our Capabilities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
