"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Dynamic threshold: End of Hero on homepage, 80px on sub-pages
      const threshold = pathname === '/' ? window.innerHeight - 100 : 80;
      setScrolled(currentScrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Determine classes based on state
  const isTransparent = !scrolled && pathname === '/';

  const navClasses = `
    flex fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 ease-in-out px-8 py-4 rounded-2xl mx-auto top-6
    ${isTransparent
      ? 'bg-transparent border-transparent shadow-none'
      : 'bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl shadow-primary/10'
    }
  `;

  const textClasses = isTransparent ? 'text-white' : 'text-sky-950';
  const mutedTextClasses = isTransparent ? 'text-white/70' : 'text-sky-800/60';

  return (
    <nav className={navClasses}>
      <div className=" items-center gap-3 ">
        <Link href="/" className="flex items-center gap-3">
          <img
            alt="Pacific Strata Logo"
            className={`h-10 w-auto transition-all ${isTransparent ? 'brightness-0 invert' : ''}`}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUu1Slm5rEsdiy6BIvf42EgjXUyzYX5xEOUFHfxUYNpkjWzfE_ToFVAj32EVRFJuKiif7TpOMXJ0w3PL-xXpeIm1q5Z_mVxVdySBAKRMLP0CU2DETgS9Q2I6EB95_D2ZAtxQTcKgsgxiI6gxQxxTHbVMU90YAGVMesqBM5aSSnB9mabWJyfDTF09S0W2UOVr5SaJQzBPAUsaskUXhydOMUP57IY_DEDzOyrDx_9KtfD5uL4-U-VKsQd9HRjK1Hpx10MqABAHE3QA"
          />
          <span className={`font-headline text-xl font-black tracking-tighter transition-colors ${textClasses}`}>PACIFIC STRATA</span>
        </Link>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center gap-16">
        <Link className={`hover:opacity-100 transition-all font-headline tracking-tight text-sm font-semibold uppercase ${textClasses}`} href="/capabilities">Services</Link>
        <Link className={`hover:opacity-100 transition-all font-headline tracking-tight text-sm font-semibold uppercase ${mutedTextClasses}`} href="/projects">Projects</Link>
        <Link className={`hover:opacity-100 transition-all font-headline tracking-tight text-sm font-semibold uppercase ${mutedTextClasses}`} href="/expertise">About</Link>

      </div>
      <Link href="/contact" className={`px-6 py-2 rounded-lg font-semibold tracking-tight transition-all scale-95 active:scale-90 ${isTransparent ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
