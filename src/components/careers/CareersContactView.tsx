import React, { useState } from 'react';
import { JOB_OPENINGS } from '../../data/mockData';
import { JobOpening } from '../../types';
import { Briefcase, Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export const CareersContactView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'careers'>('contact');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'General Culinary Inquiry',
    message: '',
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Job application form state
  const [jobForm, setJobForm] = useState({
    applicantName: '',
    applicantEmail: '',
    applicantPhone: '',
    portfolioLink: '',
    coverNote: '',
  });
  const [jobSubmitted, setJobSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJobSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FAF6F0] text-[#1E2824] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D5] text-xs tracking-widest text-[#BA933E] uppercase font-mono font-semibold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#BA933E]" />
            CONVERSATIONS & COLLABORATIONS
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-[#182C24] tracking-tight">
            Connect With Lou & Tika
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed">
            Whether inquiring about bespoke catering, corporate food innovation with Sherif & Rasha, or joining our culinary team.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                activeTab === 'contact'
                  ? 'bg-[#233D33] text-white border-[#233D33] font-semibold'
                  : 'bg-white text-[#5E6963] border-[#E8E1D5] hover:text-[#233D33]'
              }`}
            >
              Contact Concierge
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                activeTab === 'careers'
                  ? 'bg-[#233D33] text-white border-[#233D33] font-semibold'
                  : 'bg-white text-[#5E6963] border-[#E8E1D5] hover:text-[#233D33]'
              }`}
            >
              Join Our Team ({JOB_OPENINGS.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Contact & Atelier Location */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E8E1D5] p-8 sm:p-10 shadow-xs">
              <h2 className="text-2xl font-serif-luxury font-bold text-[#182C24] mb-2">
                Send A Message
              </h2>
              <p className="text-xs text-[#5E6963] font-mono mb-8">
                Sherif & Rasha’s team responds within 24 business hours
              </p>

              {contactSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#182C24]">Message Received</h3>
                  <p className="text-xs text-[#5E6963] max-w-sm mx-auto mt-2">
                    Thank you for reaching out to Lou & Tika. We will review your note and be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactForm({ name: '', email: '', subject: 'General Culinary Inquiry', message: '' });
                    }}
                    className="mt-6 px-5 py-2 rounded-xl bg-[#233D33] text-white text-xs font-mono"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#5E6963] mb-1.5 uppercase font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Youssef Nabil"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-[#FAF6F0] border border-[#E8E1D5] rounded-xl px-4 py-3 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#5E6963] mb-1.5 uppercase font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-[#FAF6F0] border border-[#E8E1D5] rounded-xl px-4 py-3 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#5E6963] mb-1.5 uppercase font-semibold">
                      Inquiry Category
                    </label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full bg-[#FAF6F0] border border-[#E8E1D5] rounded-xl px-4 py-3 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    >
                      <option value="General Culinary Inquiry">General Inquiry</option>
                      <option value="Event Catering Inquiry">Event Catering Consultation</option>
                      <option value="B2B Food Innovation">B2B Food Innovation / Brand Partnership</option>
                      <option value="Ready-to-Cook Market">Ready-to-Cook Market Orders</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#5E6963] mb-1.5 uppercase font-semibold">
                      Message Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Share your occasion details, product questions, or collaboration ideas..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-[#FAF6F0] border border-[#E8E1D5] rounded-xl p-4 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-brand-green text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Atelier Details */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div className="p-8 rounded-3xl bg-white border border-[#E8E1D5] space-y-6 shadow-xs">
                <h3 className="text-xl font-serif-luxury font-bold text-[#182C24]">
                  Lou & Tika Atelier
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3 text-[#1E2824]">
                    <MapPin className="w-4 h-4 text-[#BA933E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#233D33] block">Atelier Location</span>
                      <span className="text-[#5E6963] leading-relaxed block">
                        New Cairo, Egypt
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[#1E2824]">
                    <Phone className="w-4 h-4 text-[#BA933E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#233D33] block">Direct Concierge</span>
                      <span className="text-[#5E6963] font-mono block">
                        +20 (0) 100 892 4110
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[#1E2824]">
                    <Mail className="w-4 h-4 text-[#BA933E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#233D33] block">Inquiries Email</span>
                      <span className="text-[#5E6963] font-mono block">
                        hello@louandtika.com
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[#1E2824]">
                    <Clock className="w-4 h-4 text-[#BA933E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#233D33] block">Catering Consultations</span>
                      <span className="text-[#5E6963] block">
                        Available by appointment Sunday through Thursday
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styled Atelier Image */}
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D5] bg-stone-100 aspect-[16/9] shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                  alt="Lou & Tika Cairo Atelier"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#233D33]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white flex justify-between items-center">
                  <span>Cairo Culinary Atelier</span>
                  <span className="text-[#BA933E]">Lou & Tika</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Careers */}
        {activeTab === 'careers' && (
          <div className="space-y-8">
            <div className="border-b border-[#E8E1D5] pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-serif-luxury font-bold text-[#182C24]">Current Openings</h2>
                <p className="text-xs font-mono text-[#5E6963] mt-0.5">
                  Join Sherif & Rasha’s team across catering, food innovation, and market production
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {JOB_OPENINGS.map((job) => (
                <div
                  key={job.id}
                  className="p-6 rounded-3xl bg-white border border-[#E8E1D5] flex flex-col justify-between hover:border-[#BA933E] transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-[#BA933E] font-semibold">{job.department}</span>
                      <span className="text-[#5E6963]">{job.type}</span>
                    </div>
                    <h3 className="text-xl font-serif-luxury font-bold text-[#182C24] mb-2">
                      {job.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#4B5563] font-normal line-clamp-3 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="space-y-1 text-[11px] text-[#1E2824] font-mono mb-4">
                      {job.requirements.slice(0, 2).map((r, i) => (
                        <div key={i} className="flex items-center gap-1.5 truncate">
                          <span className="text-[#BA933E]">•</span>
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setJobSubmitted(false);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#233D33] hover:text-white text-xs font-mono uppercase tracking-wider text-[#233D33] transition-all font-semibold flex items-center justify-center gap-2 border border-[#E8E1D5]"
                  >
                    <span>Apply For Position</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Job Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#182C24]/60 backdrop-blur-xs">
          <div className="relative w-full max-w-xl bg-[#FAF6F0] border border-[#E8E1D5] rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-[#1E2824]">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white text-[#233D33] hover:bg-[#E8E1D5] flex items-center justify-center"
            >
              ✕
            </button>

            <span className="text-xs font-mono uppercase text-[#BA933E] font-semibold mb-1 block">
              Join Our Brigade
            </span>
            <h3 className="text-2xl font-serif-luxury text-[#233D33] mb-1 font-medium">
              {selectedJob.title}
            </h3>
            <p className="text-xs text-[#5E6963] font-mono mb-6">
              {selectedJob.department} • {selectedJob.location}
            </p>

            {jobSubmitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto mb-3" />
                <h4 className="text-lg font-serif-luxury text-[#233D33]">Application Received</h4>
                <p className="text-xs text-[#5E6963] mt-2">
                  Thank you, {jobForm.applicantName}. Sherif & Rasha will review your details.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="mt-6 px-5 py-2 rounded-xl btn-brand-green text-xs font-mono uppercase font-semibold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleJobSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#5E6963] mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Salma Farouk"
                    value={jobForm.applicantName}
                    onChange={(e) => setJobForm({ ...jobForm, applicantName: e.target.value })}
                    className="w-full bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#5E6963] mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="salma@email.com"
                      value={jobForm.applicantEmail}
                      onChange={(e) => setJobForm({ ...jobForm, applicantEmail: e.target.value })}
                      className="w-full bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#5E6963] mb-1 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+20 10..."
                      value={jobForm.applicantPhone}
                      onChange={(e) => setJobForm({ ...jobForm, applicantPhone: e.target.value })}
                      className="w-full bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#5E6963] mb-1 font-semibold">
                    Cover Note / Experience
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your background and passion for food presentation..."
                    value={jobForm.coverNote}
                    onChange={(e) => setJobForm({ ...jobForm, coverNote: e.target.value })}
                    className="w-full bg-white border border-[#E8E1D5] rounded-xl p-3 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2.5 rounded-xl bg-white border border-[#E8E1D5] text-xs font-mono text-[#5E6963]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl btn-brand-green text-xs font-mono uppercase font-semibold"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
