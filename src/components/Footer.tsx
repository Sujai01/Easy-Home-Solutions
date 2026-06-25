import { Compass, Mail, Globe, MapPin } from 'lucide-react';

interface FooterProps {
  onBackToEntrance: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({ onBackToEntrance, onNavigateSection }: FooterProps) {
  return (
    <footer className="bg-surface text-on-surface border-t border-secondary/15 py-16 px-6 md:px-16" id="footer-section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Brand Coda */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-secondary/20 flex items-center justify-center bg-surface-container">
              <Compass className="w-4 h-4 text-secondary" />
            </div>
            <span className="font-display text-lg tracking-tight text-primary font-medium flex items-center gap-1">
              <span>Easy Home Solutions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
            </span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-sm font-light leading-relaxed">
            A boutique collective providing tranquil, modern home solutions that celebrate comfort, natural light, and genuine quality.
          </p>
        </div>

        {/* Studio Locations */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
            Our Service Locations
          </h4>
          <ul className="space-y-2 font-sans text-xs text-on-surface-variant font-light">
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Provence, France</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Kyoto, Japan</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Big Sur, USA</span>
            </li>
          </ul>
        </div>

        {/* Atelier Channels */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
            Direct Channels
          </h4>
          <ul className="space-y-2 font-sans text-xs text-on-surface-variant font-light">
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-secondary shrink-0" />
              <a href="mailto:inquire@easyhomesolutions.com" className="hover:text-primary transition-colors select-all">
                inquire@easyhomesolutions.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span className="select-all">registry.easyhomesolutions.com</span>
            </li>
          </ul>
        </div>

        {/* Quick Nav */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
            Navigation
          </h4>
          <div className="flex flex-col gap-2 font-sans text-xs text-on-surface-variant font-light">
            <button 
              onClick={onBackToEntrance}
              className="text-left hover:text-primary transition-colors cursor-pointer"
            >
              Entrance Arch Portal
            </button>
            <button 
              onClick={() => onNavigateSection('atelier')}
              className="text-left hover:text-primary transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={() => onNavigateSection('work')}
              className="text-left hover:text-primary transition-colors cursor-pointer"
            >
              Selected Collection
            </button>
            <button 
              onClick={() => onNavigateSection('philosophy')}
              className="text-left hover:text-primary transition-colors cursor-pointer"
            >
              Tenet Creed
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-secondary/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-sans text-on-surface-variant font-light">
        <span>
          © 2026 Easy Home Solutions. All rights reserved.
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-secondary">
          Volumetric Harmony Index 1.00
        </span>
      </div>
    </footer>
  );
}
