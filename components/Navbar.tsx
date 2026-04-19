"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Dynamic threshold: End of Hero on homepage, 80px on sub-pages
      const threshold = pathname === '/' ? (typeof window !== 'undefined' ? window.innerHeight - 100 : 800) : 80;
      setScrolled(currentScrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Determine classes based on state
  const isTransparent = !scrolled && pathname === '/';

  const navClasses = `
    flex fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 ease-in-out px-4 md:px-8 py-3 md:py-4 rounded-2xl mx-auto top-6
    ${isTransparent
      ? 'bg-transparent border-transparent shadow-none'
      : 'bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl shadow-primary/10'
    }
  `;

  const textClasses = isTransparent ? 'text-white' : 'text-sky-950';
  const mutedTextClasses = isTransparent ? 'text-white/70' : 'text-sky-800/60';

  return (
    <>
      <nav className={navClasses}>
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 md:gap-3" onClick={() => setIsMenuOpen(false)}>
            <img
              alt="Pacific Strata Logo"
              className={`h-8 md:h-24 w-auto transition-all ${isTransparent ? 'brightness-0 invert' : ''}`}
              src={isTransparent ? "/strata-logo-white.png" : "/strata-logo-color.png"}
            />
            {/* <span className={`font-headline text-lg md:text-xl font-black tracking-tighter transition-colors ${textClasses}`}>PACIFIC STRATA</span> */}
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-16">
          <Link className={`hover:opacity-100 transition-all font-headline tracking-tight text-sm font-semibold uppercase ${textClasses}`} href="/capabilities">Services</Link>
          <Link className={`hover:opacity-100 transition-all font-headline tracking-tight text-sm font-semibold uppercase ${mutedTextClasses}`} href="/projects">Projects</Link>
          <Link className={`hover:opacity-100 transition-all font-headline tracking-tight text-sm font-semibold uppercase ${mutedTextClasses}`} href="/expertise">About</Link>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <Link href="/contact" className={`hidden md:block px-6 py-2 rounded-lg font-semibold tracking-tight transition-all scale-95 active:scale-90 ${isTransparent ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
            Contact Us
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${textClasses}`}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>

        <div className={`
          absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl p-8 shadow-2xl transition-all duration-500
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
        `}>
          <div className="flex flex-col gap-6">
            <Link
              href="/capabilities"
              className="font-headline text-2xl font-bold text-sky-950 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Services <span className="material-symbols-outlined text-sky-200">arrow_forward</span>
            </Link>
            <Link
              href="/projects"
              className="font-headline text-2xl font-bold text-sky-950 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects <span className="material-symbols-outlined text-sky-200">arrow_forward</span>
            </Link>
            <Link
              href="/expertise"
              className="font-headline text-2xl font-bold text-sky-950 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              About <span className="material-symbols-outlined text-sky-200">arrow_forward</span>
            </Link>
            <div className="h-px bg-slate-100 my-2"></div>
            <Link
              href="/contact"
              className="bg-primary text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
