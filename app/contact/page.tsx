import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import PageHeader from '@/components/PageHeader';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Contact Engineering"
        subtitle="Ready to discuss your project requirements? Our technical team is available for comprehensive site consultations."
        breadcrumb="Contact"
      />
      <Contact />
      <Footer />
    </main>
  );
}
