import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-sky-200/60 font-body py-16 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <span className="font-headline text-2xl font-black text-white">PACIFIC STRATA</span>
          <p className="text-sm leading-relaxed">Precision-driven subsurface engineering for complex projects throughout the Pacific rim. Integrity in every layer.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined opacity-60 hover:opacity-100 transition-opacity cursor-pointer">public</span>
            <span className="material-symbols-outlined opacity-60 hover:opacity-100 transition-opacity cursor-pointer">monitoring</span>
            <span className="material-symbols-outlined opacity-60 hover:opacity-100 transition-opacity cursor-pointer">hub</span>
          </div>
        </div>
        <div>
          <h4 className="text-orange-400 font-bold mb-6">Expertise</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Technical Drilling</li>
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Hydrogeology</li>
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Site Analysis</li>
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Core Sampling</li>
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-orange-400 transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Environmental Impact</li>
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Technical Reports</li>
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Privacy Policy</li>
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Terms of Service</li>
            <li className="hover:text-orange-400 transition-colors cursor-pointer">Safety Protocol</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>© 2024 Pacific Strata Engineering. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="opacity-80 hover:opacity-100 transition-opacity">Built with Precision.</span>
          <span className="opacity-80 hover:opacity-100 transition-opacity">Licensed Professional Engineers.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
