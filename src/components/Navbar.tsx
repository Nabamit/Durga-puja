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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: isScrolled ? 'rgba(7, 9, 21, 0.88)' : 'rgba(7, 9, 21, 0.55)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(201, 162, 75, 0.15)',
        transition: 'var(--transition-smooth)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.8rem',
          paddingBottom: '0.8rem',
        }}
      >
        {/* Brand Identity — Exactly Matching Pujo Smriti Header */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.75rem',
            textAlign: 'left',
            padding: 0,
          }}
        >
          <span
            lang="bn"
            className="font-bn"
            style={{
              fontSize: '1.35rem',
              color: '#ffd98a',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            দুয়েরপল্লী
          </span>

          <span
            className="font-display brand-english"
            style={{
              fontSize: '1.15rem',
              letterSpacing: '0.22em',
              color: 'var(--cream)',
              fontWeight: 500,
            }}
          >
            DUYERPALLY
          </span>

          <span
            className="font-ui desktop-only-inline"
            style={{
              fontSize: '0.72rem',
              color: 'rgba(239, 227, 204, 0.5)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderLeft: '1px solid rgba(201, 162, 75, 0.3)',
              paddingLeft: '0.65rem',
              marginLeft: '0.2rem',
            }}
          >
            70th Year · 1956 - 2026
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem',
              listStyle: 'none',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isActive ? '#ffd98a' : 'rgba(239, 227, 204, 0.8)',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.92rem',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      padding: '0.25rem 0',
                      position: 'relative',
                      transition: 'color 0.2s ease',
                      borderBottom: isActive ? '2px solid #ffd98a' : '2px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#ffd98a';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'rgba(239, 227, 204, 0.8)';
                    }}
                  >
                    <span className="font-bn">{link.labelBn}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Dhak Audio Player Widget */}
          <AudioPlayer />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="mobile-only" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
          <AudioPlayer />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(11, 14, 31, 0.85)',
              border: '1px solid rgba(201, 162, 75, 0.35)',
              color: 'var(--cream)',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Top Scroll Indicator Line (Pujo Smriti Signature) */}
      <div
        aria-hidden="true"
        style={{
          height: '2px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, var(--sindoor), var(--gold), var(--gold-light))',
          transition: 'width 0.1s ease-out',
        }}
      />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(7, 9, 21, 0.98)',
            borderTop: '1px solid var(--ink-border)',
            padding: '1.25rem 1.5rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'grid', gap: '0.65rem' }}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: activeSection === link.id ? 'rgba(201, 162, 75, 0.15)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeSection === link.id ? 'var(--gold)' : 'transparent',
                    borderRadius: '8px',
                    color: activeSection === link.id ? '#ffd98a' : 'var(--paper)',
                    fontFamily: 'var(--font-bn)',
                    fontSize: '1.05rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
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
