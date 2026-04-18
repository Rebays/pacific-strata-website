import React from 'react';

const Contact = () => {
  return (
    <section className="py-32 px-8 bg-surface relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3">
          <h2 className="font-headline text-5xl font-extrabold text-primary mb-6">Contact Engineering</h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed">Ready to discuss your project requirements? Our technical team is available for comprehensive site consultations.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <span className="font-semibold">San Francisco, CA / Vancouver, BC</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <span className="font-semibold">contact@pacificstrata.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">phone</span>
              <span className="font-semibold">+1 (800) STRATA-01</span>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 bg-surface-container-low p-12 rounded-xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline mb-3">Full Name</label>
              <input className="w-full bg-white border-none rounded-lg focus:ring-2 focus:ring-primary p-4 transition-all" placeholder="Johnathan Miller" type="text" />
            </div>
            <div>
              <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline mb-3">Company</label>
              <input className="w-full bg-white border-none rounded-lg focus:ring-2 focus:ring-primary p-4 transition-all" placeholder="Engineering Firm Ltd." type="text" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline mb-3">Service Type</label>
              <select className="w-full bg-white border-none rounded-lg focus:ring-2 focus:ring-primary p-4 transition-all appearance-none">
                <option>Water Well Drilling</option>
                <option>Geotechnical Analysis</option>
                <option>Environmental Site Assessment</option>
                <option>Other Specialized Services</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline mb-3">Project Scope</label>
              <textarea className="w-full bg-white border-none rounded-lg focus:ring-2 focus:ring-primary p-4 transition-all" placeholder="Briefly describe your project goals..." rows={4}></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-primary text-white font-bold py-5 rounded-lg text-lg transition-transform active:scale-95 shadow-lg shadow-primary/20">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
