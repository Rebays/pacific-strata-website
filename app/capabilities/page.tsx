import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Capabilities from '@/components/Capabilities';
import PageHeader from '@/components/PageHeader';

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Technical Solutions for Complex Strata"
        subtitle="We combine geophysical analysis with state-of-the-art drilling technology to deliver results where others can't."
        breadcrumb="Services"
      />
      <Capabilities />
      <Footer />
    </main>
  );
}
