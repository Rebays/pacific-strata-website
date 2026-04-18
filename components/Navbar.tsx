import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/70 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <img
            alt="Pacific Strata Logo"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUu1Slm5rEsdiy6BIvf42EgjXUyzYX5xEOUFHfxUYNpkjWzfE_ToFVAj32EVRFJuKiif7TpOMXJ0w3PL-xXpeIm1q5Z_mVxVdySBAKRMLP0CU2DETgS9Q2I6EB95_D2ZAtxQTcKgsgxiI6gxQxxTHbVMU90YAGVMesqBM5aSSnB9mabWJyfDTF09S0W2UOVr5SaJQzBPAUsaskUXhydOMUP57IY_DEDzOyrDx_9KtfD5uL4-U-VKsQd9HRjK1Hpx10MqABAHE3QA"
          />
          <span className="font-headline text-xl font-black tracking-tighter text-sky-950">PACIFIC STRATA</span>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Link className="text-sky-900 hover:text-sky-950 transition-colors font-headline tracking-tight text-sm font-semibold uppercase" href="/capabilities">Services</Link>
        <Link className="text-sky-800/60 hover:text-sky-950 transition-colors font-headline tracking-tight text-sm font-semibold uppercase" href="/projects">Projects</Link>
        <Link className="text-sky-800/60 hover:text-sky-950 transition-colors font-headline tracking-tight text-sm font-semibold uppercase" href="/expertise">About</Link>
        <Link className="text-sky-800/60 hover:text-sky-950 transition-colors font-headline tracking-tight text-sm font-semibold uppercase" href="/contact">Contact</Link>
      </div>
      <Link href="/contact" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold tracking-tight transition-transform scale-95 active:scale-90">
        Request Quote
      </Link>
    </nav>
  );
};

export default Navbar;
