import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProceduralHero } from './components/ProceduralHero';
import { Page1Introduction } from './components/Page1Introduction';
import { Page2Schedule } from './components/Page2Schedule';
import { FestiveExperienceStudio } from './components/FestiveExperienceStudio';
import { Page3Committee } from './components/Page3Committee';
import { Page4Budget } from './components/Page4Budget';
import { Footer } from './components/Footer';
import { OpeningCeremony } from './components/OpeningCeremony';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showOpening, setShowOpening] = useState<boolean>(() => {
    // Show opening ceremony on fresh visit
    try {
      return !sessionStorage.getItem('duyerpally:opened');
    } catch {
      return true;
    }
  });

  const handleOpeningDone = () => {
    try {
      sessionStorage.setItem('duyerpally:opened', '1');
    } catch {
      // Ignore sessionStorage issues if in sandbox
    }
    setShowOpening(false);
  };

  const handleReplayOpening = () => {
    setShowOpening(true);
  };

  // Scroll to section smoothly with header offset compensation
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  // Intersection observer to automatically update active navbar tab while scrolling
  useEffect(() => {
    const sections = ['hero', 'page-intro', 'page-schedule', 'festive-studio', 'page-committee', 'page-budget'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--ink-950)' }}>
      {/* Film Grain Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Opening Ceremony ("মা আসছেন...") Screen Modal */}
      {showOpening && <OpeningCeremony onDone={handleOpeningDone} />}

      {/* Floating Glassmorphism Sticky Navbar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        {/* Procedural Hero Banner */}
        <ProceduralHero onNavigate={scrollToSection} />

        {/* Page 1: Introduction, 70-Year Legacy (1956–2026) & Theme */}
        <Page1Introduction />

        {/* Page 2: Sacred Schedule & Puja Timings (Mahalaya to Dashami & Ratan Babu Ghat) */}
        <Page2Schedule />

        {/* Interactive Pujo Smriti Experience Studio: Quiz, Letter to Maa Durga & Greeting Cards */}
        <FestiveExperienceStudio />

        {/* Page 3: Core Committee Leadership, Executive Body & Youth Wing */}
        <Page3Committee />

        {/* Page 4: Transparent Budget, Audited Expenditures & Community Notice */}
        <Page4Budget />
      </main>

      {/* Festive Footer with Replay Opening feature */}
      <Footer onNavigate={scrollToSection} onReplayOpening={handleReplayOpening} />
    </div>
  );
};

export default App;
