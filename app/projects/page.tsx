import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import PageHeader from '@/components/PageHeader';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Project Showcase"
        subtitle="Exploring the frontiers of subsurface engineering across major infrastructure and resource projects."
        breadcrumb="Projects"
      />
      <Projects />
      <Footer />
    </main>
  );
}
