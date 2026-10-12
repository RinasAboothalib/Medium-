import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventMarquee } from './components/EventMarquee';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { EventsSection } from './components/EventsSection';
import { AboutSection } from './components/AboutSection';
import { NewsSection } from './components/NewsSection';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { EventModal } from './components/EventModal';
import { FLAGSHIP_EVENTS_DATA } from './data/websiteData';
import { FlagshipEvent } from './types';
import { Layers, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [viewMode, setViewMode] = useState<'separated' | 'continuous'>('separated');
  const [prefilledService, setPrefilledService] = useState<string | undefined>();
  const [prefilledEvent, setPrefilledEvent] = useState<string | undefined>();
  const [marqueeModalEvent, setMarqueeModalEvent] = useState<FlagshipEvent | null>(null);

  // Navigate to page/section and sync browser URL hash
  const navigateToSection = useCallback((sectionId: string, updateHash: boolean = true) => {
    setActiveSection(sectionId);

    // In continuous mode, scroll to the element
    if (viewMode === 'continuous') {
      const element = document.getElementById(sectionId);
      if (element) {
        const navOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      // In separated page mode, scroll to top of content under nav header
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (updateHash && window.location.hash !== `#${sectionId}`) {
      window.history.pushState(null, '', `#${sectionId}`);
    }
  }, [viewMode]);

  // Handle URL hash on initial load and browser back/forward popstate
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'services', 'events', 'about', 'info-center', 'enquiry'].includes(hash)) {
        setActiveSection(hash);
      }
    };

    if (window.location.hash) {
      setTimeout(handleHash, 100);
    }

    window.addEventListener('popstate', handleHash);
    return () => window.removeEventListener('popstate', handleHash);
  }, []);

  const handleSelectService = (serviceId: string) => {
    setPrefilledService(serviceId);
    navigateToSection('enquiry');
  };

  const handleEnquireEvent = (eventTitle: string) => {
    setPrefilledEvent(eventTitle);
    navigateToSection('enquiry');
  };

  const handleMarqueeSelect = (eventId: string) => {
    const matched = FLAGSHIP_EVENTS_DATA.find((e) => e.id === eventId);
    if (matched) {
      setMarqueeModalEvent(matched);
    } else {
      navigateToSection('events');
    }
  };

  const PAGE_TITLES: Record<string, { title: string; subtitle: string; category: string }> = {
    home: {
      title: 'MEDIUM Events Pvt Ltd',
      subtitle: 'Turnkey Event Management & Full-Suite Creative Solutions in the Maldives',
      category: 'Official Agency Portal',
    },
    services: {
      title: 'Our Core Services',
      subtitle: 'Events, Analytics-Driven Advertising, Design & Applications, Creative Consultancy',
      category: 'Capabilities Directory',
    },
    events: {
      title: 'Flagship Exhibitions & Industry Forums',
      subtitle: 'National Expos including Maldives Marine Expo, Build Expo, CIF 2026, and MMIF',
      category: 'National Event Portfolio',
    },
    about: {
      title: 'About MEDIUM & Credibility',
      subtitle: '60+ Years Cumulative Management Pedigree & Institutional Endorsements',
      category: 'Executive Provenance',
    },
    'info-center': {
      title: 'Info Center & Press Releases',
      subtitle: 'Official announcements, event schedules, and industry updates',
      category: 'Media & Bulletins',
    },
    enquiry: {
      title: 'Project & Event Enquiry',
      subtitle: 'Direct collaboration with MEDIUM Operations in Malé, Maldives',
      category: 'Direct Engagement',
    },
  };

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Upgraded Sticky Navbar with Royal Blue Theme */}
      <Navbar activeSection={activeSection} onNavigate={navigateToSection} />

      {/* Page Separation Controller Bar Under Nav Header */}
      <div className="pt-24 pb-3 border-b border-white/06 bg-[#070b19]/90 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Breadcrumb / Active Page Indicator */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Section:</span>
            <span className="px-2.5 py-0.5 rounded bg-[#12229D]/60 border border-blue-400/40 text-blue-200 font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {PAGE_TITLES[activeSection]?.category || 'Page View'}
            </span>
            <span className="text-slate-400 hidden md:inline">•</span>
            <span className="text-slate-200 font-medium hidden md:inline">
              {PAGE_TITLES[activeSection]?.title}
            </span>
          </div>

          {/* Page Display Mode Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 hidden sm:inline">View Mode:</span>
            <div className="flex p-0.5 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-medium">
              <button
                onClick={() => setViewMode('separated')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'separated'
                    ? 'bg-[#12229D] text-white shadow font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="View page details separated individually"
              >
                Separated Page View
              </button>
              <button
                onClick={() => setViewMode('continuous')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'continuous'
                    ? 'bg-[#12229D] text-white shadow font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Scroll continuously through all pages"
              >
                Continuous Flow
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow">
        {viewMode === 'separated' ? (
          /* ========================================================
             SEPARATED PAGE DETAILS MODE (Under Nav Header)
             ======================================================== */
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* PAGE 1: HOME */}
              {activeSection === 'home' && (
                <div>
                  {/* Hero (with 2nd image badge removed) */}
                  <Hero onNavigate={navigateToSection} />

                  {/* 1st Image Details: Two Rows Moving in Opposite Directions under Suitable Headings */}
                  <EventMarquee onSelectEvent={handleMarqueeSelect} />

                  {/* Experience & Credibility Metrics */}
                  <StatsBar />

                  {/* Quick Pathways to Separated Pages */}
                  <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-2 block">
                        Direct Navigation
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Explore MEDIUM Capabilities & Portfolios
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div
                        onClick={() => navigateToSection('services')}
                        className="glass-card p-6 rounded-2xl border border-white/08 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                      >
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-2">
                          Core Services
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                          Events, Advertising & Design
                        </h3>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          Analytics-driven marketing, creative consultancy, and turnkey event staging in the Maldives.
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                          <span>View Separated Services Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div
                        onClick={() => navigateToSection('events')}
                        className="glass-card p-6 rounded-2xl border border-white/08 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                      >
                        <span className="text-xs font-bold uppercase tracking-wider text-yellow-300 block mb-2">
                          Flagship Expos
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                          National Expos & Industry Forums
                        </h3>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          Maldives Marine Expo, Construction Industry Forum CIF 2026, Build Expo, and MMIF.
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-300 group-hover:translate-x-1 transition-transform">
                          <span>View Separated Events Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div
                        onClick={() => navigateToSection('enquiry')}
                        className="glass-card p-6 rounded-2xl border border-white/08 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                      >
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-2">
                          Project Collaboration
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                          Submit Your Project Brief
                        </h3>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          Reach MEDIUM Operations directly in Malé for sponsorship, booth bookings, or corporate campaigns.
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                          <span>Open Project Enquiry Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* PAGE 2: SERVICES */}
              {activeSection === 'services' && (
                <div className="pt-4">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d1852] to-[#070b19] border border-blue-500/30 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block mb-1">
                          Page Detail: Services Directory
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                          Full-Suite Marketing, Events & Design Solutions
                        </h1>
                      </div>
                      <button
                        onClick={() => navigateToSection('enquiry')}
                        className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#12229D] hover:bg-[#1a38c9] border border-blue-400/40 shadow cursor-pointer whitespace-nowrap"
                      >
                        Request Proposal
                      </button>
                    </div>
                  </div>
                  <ServicesSection onSelectService={handleSelectService} />
                </div>
              )}

              {/* PAGE 3: FLAGSHIP EVENTS */}
              {activeSection === 'events' && (
                <div className="pt-4">
                  {/* Moving Ticker under header banner */}
                  <EventMarquee onSelectEvent={handleMarqueeSelect} />
                  <EventsSection onEnquireEvent={handleEnquireEvent} />
                </div>
              )}

              {/* PAGE 4: ABOUT & CREDIBILITY */}
              {activeSection === 'about' && (
                <div className="pt-4">
                  <StatsBar />
                  <AboutSection />
                </div>
              )}

              {/* PAGE 5: INFO CENTER / NEWS */}
              {activeSection === 'info-center' && (
                <div className="pt-4">
                  <NewsSection onEnquire={() => navigateToSection('enquiry')} />
                </div>
              )}

              {/* PAGE 6: ENQUIRY */}
              {activeSection === 'enquiry' && (
                <div className="pt-4">
                  <EnquiryForm prefilledService={prefilledService} prefilledEvent={prefilledEvent} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          /* ========================================================
             CONTINUOUS FLOW MODE (All sections with smooth scroll)
             ======================================================== */
          <div>
            <Hero onNavigate={navigateToSection} />
            <EventMarquee onSelectEvent={handleMarqueeSelect} />
            <StatsBar />
            <ServicesSection onSelectService={handleSelectService} />
            <EventsSection onEnquireEvent={handleEnquireEvent} />
            <AboutSection />
            <NewsSection onEnquire={() => navigateToSection('enquiry')} />
            <EnquiryForm prefilledService={prefilledService} prefilledEvent={prefilledEvent} />
          </div>
        )}
      </main>

      {/* Event Details Modal triggered from Marquee */}
      <EventModal
        event={marqueeModalEvent}
        onClose={() => setMarqueeModalEvent(null)}
        onEnquire={handleEnquireEvent}
      />

      {/* Footer */}
      <Footer onNavigate={navigateToSection} />
    </div>
  );
}
