import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className="relative pt-40 pb-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-surface-container-high/60 font-label text-xs uppercase tracking-widest mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-secondary-container font-black">{breadcrumb}</span>
          </nav>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-surface-container-high/80 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
