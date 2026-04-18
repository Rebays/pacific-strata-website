import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Expertise from '@/components/Expertise';
import PageHeader from '@/components/PageHeader';

export default function ExpertisePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Why Choose Our Expertise"
        subtitle="Unmatched precision and safety standards driven by decades of experience in the Pacific rim."
        breadcrumb="About Us"
      />
      <Expertise />
      <Footer />
    </main>
  );
}
