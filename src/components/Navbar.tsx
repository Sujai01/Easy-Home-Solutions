import { Compass, Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AppScreen } from '../types';

interface NavbarProps {
  currentScreen: AppScreen;
  setScreen: (screen: AppScreen) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onConnectClick: () => void;
}

export default function Navbar({
  currentScreen,
  setScreen,
  isDarkMode,
  setIsDarkMode,
  onConnectClick
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentScreen !== 'home') {
      setScreen('home');
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-full border border-secondary/15 bg-surface/30 backdrop-blur-2xl shadow-[0_24px_48px_rgba(31,21,12,0.06)] z-50 transition-all duration-700">
      <div className="flex justify-between items-center px-6 md:px-8 py-3.5">
        
        {/* Brand Logo */}
        <button 
          onClick={() => setScreen('entrance')} 
          className="font-display text-2xl tracking-tight text-primary cursor-pointer font-normal hover:text-secondary transition-all flex items-center gap-1.5"
          id="logo-button"
        >
          <span>Easy Home Solutions</span>
          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavClick('atelier')} 
            className="text-on-surface-variant/80 hover:text-primary font-label text-xs font-semibold uppercase tracking-[0.15em] transition-all cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('philosophy')} 
            className="text-on-surface-variant/80 hover:text-primary font-label text-xs font-semibold uppercase tracking-[0.15em] transition-all cursor-pointer"
          >
            Philosophy
          </button>
          <button 
            onClick={() => handleNavClick('work')} 
            className="text-primary hover:text-secondary font-label text-xs font-semibold uppercase tracking-[0.15em] transition-all relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-secondary after:rounded-full cursor-pointer"
          >
            Work
          </button>
          <button 
            onClick={() => handleNavClick('process')} 
            className="text-on-surface-variant/80 hover:text-primary font-label text-xs font-semibold uppercase tracking-[0.15em] transition-all cursor-pointer"
          >
            Process
          </button>
          <button 
            onClick={() => handleNavClick('materials')} 
            className="text-on-surface-variant/80 hover:text-primary font-label text-xs font-semibold uppercase tracking-[0.15em] transition-all cursor-pointer"
          >
            Materials
          </button>
        </nav>

        {/* Action Triggers */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-full border border-secondary/20 hover:bg-surface-variant transition-colors text-primary"
            title={isDarkMode ? "Switch to Light Ivory" : "Switch to Nocturnal Bronze"}
            id="theme-toggler"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button 
            onClick={onConnectClick}
            className="btn-glass px-7 py-2.5 rounded-full font-label text-xs uppercase font-semibold text-primary items-center justify-center tracking-[0.15em] hover:scale-95 transition-transform cursor-pointer"
            id="nav-connect-button"
          >
            Connect
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-full border border-secondary/20 bg-surface/40 backdrop-blur-md text-primary"
            id="theme-toggler-mobile"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full border border-secondary/20 bg-surface/40 backdrop-blur-md text-primary focus:outline-none"
            id="mobile-menu-toggler"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mb-4 p-6 rounded-2xl bg-surface/95 backdrop-blur-3xl border border-secondary/15 flex flex-col gap-5 animate-elegantFadeInUp">
          <button 
            onClick={() => handleNavClick('atelier')} 
            className="text-left py-2 border-b border-secondary/10 text-on-surface font-label text-sm uppercase tracking-wider"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('philosophy')} 
            className="text-left py-2 border-b border-secondary/10 text-on-surface font-label text-sm uppercase tracking-wider"
          >
            Philosophy
          </button>
          <button 
            onClick={() => handleNavClick('work')} 
            className="text-left py-2 border-b border-secondary/10 text-secondary font-label text-sm uppercase tracking-wider font-semibold"
          >
            Work
          </button>
          <button 
            onClick={() => handleNavClick('process')} 
            className="text-left py-2 border-b border-secondary/10 text-on-surface font-label text-sm uppercase tracking-wider"
          >
            Process
          </button>
          <button 
            onClick={() => handleNavClick('materials')} 
            className="text-left py-2 border-b border-secondary/10 text-on-surface font-label text-sm uppercase tracking-wider"
          >
            Materials
          </button>

          <div className="flex flex-col gap-3 pt-2">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onConnectClick();
              }}
              className="w-full btn-glass text-center py-3.5 rounded-xl font-label text-xs uppercase font-bold text-primary tracking-widest"
              id="mobile-connect-button"
            >
              Connect
            </button>
            <button
              onClick={() => setScreen('entrance')}
              className="w-full text-center py-2 text-xs font-label text-on-surface-variant font-medium tracking-wide"
            >
              Return to Entrance Arches
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
