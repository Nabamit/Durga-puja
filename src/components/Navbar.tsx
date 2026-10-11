import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', labelBn: 'মূল পাতা', labelEn: 'Home' },
    { id: 'page-intro', labelBn: 'ইতিহাস ও বার্তা', labelEn: 'Legacy' },
    { id: 'page-schedule', labelBn: 'পূজোর নির্ঘণ্ট', labelEn: 'Schedule' },
    { id: 'festive-studio', labelBn: 'শারদীয় স্টুডিও', labelEn: 'Smriti Studio' },
    { id: 'page-committee', labelBn: 'পরিচালন সমিতি', labelEn: 'Committee' },
    { id: 'page-budget', labelBn: 'বাজেট ও হিসাব', labelEn: 'Budget' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#c9a24b]/20 ${
        isScrolled ? 'bg-[#070915]/90 backdrop-blur-md' : 'bg-[#070915]/65 backdrop-blur-sm'
      }`}
    >
      <div className="navbar-container max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 h-16 flex items-center justify-between gap-4">
        {/* Brand Identity — Authentic Bengali Committee Name (No English DUYERPALLY) */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="navbar-brand-btn flex items-center gap-2 text-left cursor-pointer shrink min-w-0 bg-transparent border-0 p-0"
        >
          <span
            lang="bn"
            className="font-bn text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#ffd98a] tracking-wide shrink min-w-0 truncate drop-shadow-[0_0_12px_rgba(201,162,75,0.25)]"
            title="দুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা কমিটি"
          >
            দুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা কমিটি
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-5 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`font-bn text-sm font-medium transition-colors cursor-pointer py-1 border-b-2 bg-transparent ${
                      isActive
                        ? 'text-[#ffd98a] border-[#ffd98a]'
                        : 'text-[#efe3cc]/80 border-transparent hover:text-[#ffd98a]'
                    }`}
                  >
                    {link.labelBn}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Dhak Audio Player Widget */}
          <AudioPlayer />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-2.5 shrink-0">
          <AudioPlayer />
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-[#c9a24b]/35 bg-[#0b0e1f]/85 text-[#faf5ea] flex items-center justify-center cursor-pointer shrink-0 hover:border-[#ffd98a] transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Top Scroll Indicator Line (Pujo Smriti Signature) */}
      <div
        aria-hidden="true"
        className="h-[2px] bg-gradient-to-r from-[#b3261e] via-[#c9a24b] to-[#ffd98a] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070915]/95 backdrop-blur-xl border-t border-[#c9a24b]/20 px-4 py-4 animate-fadeIn">
          <ul className="grid gap-2 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full px-4 py-3 text-left font-bn text-base rounded-lg border transition-all cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-[#c9a24b]/15 border-[#c9a24b] text-[#ffd98a]'
                      : 'border-transparent text-[#efe3cc] hover:bg-white/5'
                  }`}
                >
                  {link.labelBn} ({link.labelEn})
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
