import { ArrowLeft, ChevronRight, CornerDownRight, Compass, Shield, Heart, HelpCircle, HardDrive, Cpu, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS, CONCEPT_MODEL_IMG, INTERIOR_INTERSTITIAL_IMG, MASTER_MATERIALS } from '../data';

interface ProjectScreenProps {
  onBack: () => void;
  onConnectClick: () => void;
}

export default function ProjectScreen({ onBack, onConnectClick }: ProjectScreenProps) {
  const [activeTab, setActiveTab] = useState<string>('concept');
  const [copiedSpec, setCopiedSpec] = useState(false);

  const handleCopySpec = () => {
    navigator.clipboard.writeText("Big Sur Registry Location Code: 35.9892° N, 121.4921° W");
    setCopiedSpec(true);
    setTimeout(() => setCopiedSpec(false), 2000);
  };

  const handleScrollToId = (id: string, tabName: string) => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const projectDetails = PROJECTS.find(p => p.id === 'aether-pavilion') || PROJECTS[0];

  return (
    <div className="bg-background text-on-background min-h-screen relative pt-16 selection:bg-secondary-container selection:text-on-secondary-container">
      
      {/* Floating Return helper */}
      <div className="fixed top-24 left-6 z-40">
        <button 
          onClick={onBack}
          className="btn-glass p-3 sm:px-5 sm:py-2.5 rounded-full inline-flex items-center gap-2 group cursor-pointer hover:scale-95 transition-all text-xs font-label uppercase tracking-wider font-semibold border border-secondary/20 bg-surface/80"
          id="back-to-gallery-floating"
        >
          <ArrowLeft className="w-4 h-4 text-secondary group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Collection Archive</span>
        </button>
      </div>

      {/* SECTION 1: HERO CINEMATIC HEADER */}
      <header className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 25, ease: "easeOut" }}
            src={projectDetails.image} 
            alt="The Aether Pavilion Oceanic Horizon" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Atmospheric gradient overlay mimicking volumetric morning fog shadows */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
        </div>

        {/* Cinematic copy */}
        <div className="relative z-10 text-center px-6 md:px-16 mt-20 max-w-5xl mx-auto space-y-4">
          <span className="block font-label text-xs uppercase text-secondary font-bold tracking-[0.3em] uppercase">
            Project 04 — Big Sur Coastal Study
          </span>
          <h1 className="font-display text-5xl sm:text-7xl md:text-[84px] text-primary font-normal tracking-[-0.02em] leading-[1.05]" id="project-title">
            The Aether <br className="hidden md:inline" />Pavilion
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed pt-2">
            A study in material honesty and spatial fluidity. Where the physical boundaries between interior sanctuary and wild ocean contours dissolve into pure, flowing atmosphere.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button 
              onClick={() => handleScrollToId('concept-area', 'concept')}
              className="btn-glass px-6 py-2.5 rounded-full text-[10px] font-label uppercase tracking-widest text-primary hover:border-primary/50 cursor-pointer"
            >
              Explore blueprints
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 text-on-surface-variant font-light animate-bounce">
          <span className="font-label text-[9px] uppercase tracking-[0.2em]">Scroll to inspect</span>
          <CornerDownRight className="w-3.5 h-3.5 rotate-90 text-secondary" />
        </div>
      </header>

      {/* SECTION 2: SUB-STICKY SPEC NAV */}
      <div className="sticky top-0 z-30 w-full bg-surface/80 backdrop-blur-md border-b border-surface-variant/50 transition-all duration-300" id="section-nav">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4.5 flex justify-start gap-8 overflow-x-auto no-scrollbar">
          {[
            { id: 'concept-area', label: 'Concept Design', tab: 'concept' },
            { id: 'materials-area', label: 'Material Language', tab: 'materials' },
            { id: 'experience-area', label: 'Spatial Detail', tab: 'experience' },
            { id: 'specifications-area', label: 'Tectonic Specs', tab: 'specs' }
          ].map(lnk => (
            <button
              key={lnk.id}
              onClick={() => handleScrollToId(lnk.id, lnk.tab)}
              className={`font-label text-[11px] uppercase tracking-widest whitespace-nowrap transition-all border-b-2 pb-1.5 cursor-pointer ${
                activeTab === lnk.tab 
                  ? 'text-primary border-secondary font-bold' 
                  : 'text-on-surface-variant hover:text-primary border-transparent'
              }`}
            >
              {lnk.label}
            </button>
          ))}
        </div>
      </div>

      <main className="w-full">
        
        {/* SECTION 3: CONCEPT STUDY (ORGANIC FLOW) */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto" id="concept-area">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Descriptive texts */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-label text-xs uppercase tracking-[0.25em] text-secondary font-bold block">
                The Contour Design
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary font-normal tracking-[-0.01em] leading-tight">
                Organic Flow
              </h2>
              <div className="w-12 h-[1.5px] bg-secondary" />
              
              <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light">
                The master structural envelope was computed not from standard grid drafting geometries, but derived purely from simulating wind forces carving through ancient, solid Big Sur granite formations over a millennium.
              </p>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light">
                Every custom-milled curve serves dual ecological purposes: directing golden hour sunlight reflection deep into the cozy hearth-core while deflecting the extreme coastal storm winds.
              </p>

              <div className="pt-4 border-t border-secondary/10 flex flex-col sm:flex-row gap-6">
                <div>
                  <span className="block text-[10px] font-label uppercase tracking-[0.15em] text-on-surface-variant">Client Spec</span>
                  <span className="font-display text-lg text-primary font-medium">Oceanic Preservation Trust</span>
                </div>
                <div>
                  <span className="block text-[10px] font-label uppercase tracking-[0.15em] text-on-surface-variant">Orientation</span>
                  <span className="font-display text-lg text-primary font-medium">True Southwest 240°</span>
                </div>
              </div>
            </div>

            {/* Asymmetric Image Layout of Concept Model */}
            <div className="lg:col-span-6 lg:col-start-7 relative mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_56px_rgba(31,21,12,0.06)] bg-surface-container-low">
                <img 
                  src={CONCEPT_MODEL_IMG} 
                  alt="Architectural Physical Contour Model" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Floating glass stats tag */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-surface/90 border border-secondary/20 p-5 rounded-2xl shadow-xl w-48 backdrop-blur-md">
                <span className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-bold mb-1">
                  Site Area Scope
                </span>
                <span className="block font-display text-3xl sm:text-4xl text-primary font-medium">
                  12,400
                </span>
                <span className="font-label text-[10px] tracking-widest text-secondary font-bold">
                  SQ FT SURFACE
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: INTERSTITIAL IMMERSIVE FULL-WIDTH SPLIT */}
        <section className="w-full h-[620px] relative overflow-hidden" id="experience-area">
          <img 
            src={INTERIOR_INTERSTITIAL_IMG} 
            alt="The Aether Pavilion Interior Lounge Furnishing" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black/5" />
          {/* Inline floating quote */}
          <div className="absolute bottom-10 right-6 sm:right-16 bg-surface/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl max-w-md border border-secondary/15 shadow-xl">
            <span className="font-label text-[9px] uppercase tracking-widest text-secondary font-bold block mb-2">Interpreting Space</span>
            <p className="font-display text-lg sm:text-xl text-primary font-light italic leading-relaxed">
              &ldquo;The glass wall is not a barrier; it is a soft lens through which the sky and forest perform their daily theatrical migrations.&rdquo;
            </p>
          </div>
        </section>

        {/* SECTION 5: MATERIALS BENTO GRID ("HONEST SURFACES") */}
        <section className="py-24 px-6 md:px-16 bg-surface-container-low" id="materials-area">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-16 text-center space-y-2">
              <span className="font-label text-xs uppercase tracking-[0.25em] text-secondary font-bold block">
                Materiality Map
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary font-normal tracking-[-0.01em] leading-tight">
                Honest Surfaces
              </h2>
              <p className="font-body text-sm text-on-surface-variant font-light max-w-xl mx-auto leading-relaxed">
                We craft spaces with a highly constrained system of textures, utilizing the physical properties of natural stones, patinating metals, and heavy glass.
              </p>
            </div>

            {/* Grid structure */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* Large Travertine card - spans 2 cols on tablet/desktop */}
              <div className="md:col-span-2 rounded-2xl overflow-hidden relative group shadow-[0_24px_48px_rgba(31,21,12,0.04)] h-[340px]">
                <img 
                  src={MASTER_MATERIALS[0].image} 
                  alt={MASTER_MATERIALS[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Text card overlay shadows */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                  <h3 className="font-display text-xl sm:text-2xl text-white font-normal tracking-tight mb-2">
                    {MASTER_MATERIALS[0].name}
                  </h3>
                  <p className="font-sans text-sm text-white/85 max-w-lg font-light leading-relaxed">
                    {MASTER_MATERIALS[0].description}
                  </p>
                </div>
              </div>

              {/* Bronze Detail portrait card */}
              <div className="rounded-2xl overflow-hidden relative group shadow-[0_24px_48px_rgba(31,21,12,0.04)] h-[340px]">
                <img 
                  src={MASTER_MATERIALS[1].image} 
                  alt={MASTER_MATERIALS[1].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="font-display text-2xl text-white font-medium mb-1">
                    {MASTER_MATERIALS[1].name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {MASTER_MATERIALS[1].description}
                  </p>
                </div>
              </div>

              {/* Translucent Cast Glass card */}
              <div className="rounded-2xl overflow-hidden relative group shadow-[0_24px_48px_rgba(31,21,12,0.04)] h-[340px]">
                <img 
                  src={MASTER_MATERIALS[2].image} 
                  alt={MASTER_MATERIALS[2].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="font-display text-2xl text-white font-medium mb-1">
                    {MASTER_MATERIALS[2].name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {MASTER_MATERIALS[2].description}
                  </p>
                </div>
              </div>

              {/* Environmental Carbon Energy static text card - Spans 2 cols */}
              <div className="md:col-span-2 rounded-2xl bg-surface border border-secondary/15 p-8 sm:p-10 flex flex-col justify-center gap-4 hover:border-secondary/30 transition-colors h-[340px]">
                <div className="w-12 h-12 rounded-xl bg-surface-container border border-secondary/10 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-primary font-normal tracking-tight mb-2">
                    Embodied Energy Map
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed max-w-xl">
                    By strictly limiting our structural palette to just three organic, locally acquired materials, we dramatically compressed the logistics-related emissions of the construction sequence, generating a structure that feels as though it grew natively out of the Big Sur coast rather than being assembled from a remote source.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 6: SPECS & BLUEPRINT TABLE (TACTILE BLUEPRINT DETAILS) */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto" id="specifications-area">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 sticky top-24 space-y-4">
              <span className="font-label text-xs uppercase tracking-[0.25em] text-secondary font-bold block">
                The Ledger Archive
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-primary font-black uppercase tracking-[-0.03em] leading-[0.9]">
                Architectural Specifications
              </h2>
              <p className="font-body text-sm text-on-surface-variant font-light leading-relaxed">
                Fine details logging the computational boundaries, material loads, and orientation vectors of Project 04.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={handleCopySpec}
                  className="btn-glass px-5 py-2 rounded-xl text-[10px] font-label uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  {copiedSpec ? 'Registry code copied' : 'Copy site registry code'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 bg-surface-container-low rounded-3xl border border-secondary/10 p-6 sm:p-10">
              <div className="divide-y divide-secondary/15">
                {[
                  { label: "Commission Designation", val: "The Aether Pavilion — Big Sur, California" },
                  { label: "Primary Material Loads", val: "Tivoli Travertine (420 tons), Natural Aged Bronze (18 tons)" },
                  { label: "Envelope Boundary Class", val: "Passive Solar Respiration Enclosure" },
                  { label: "Preservation Grade", val: "LEED Platinum Level / Zero Carbon Embodiment" },
                  { label: "Orientation Angle Ref", val: "Azimuth 238° Southwest, True Pitch +4°" },
                  { label: "Registry Designation Code", val: "BM-PAC-2026-BIG-SUR" }
                ].map((spec, i) => (
                  <div key={i} className="py-5 sm:py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      {spec.label}
                    </span>
                    <span className="font-display text-base text-primary font-medium">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER CALL-BACK INTERACTIVE BAR */}
      <div className="bg-surface py-16 border-t border-secondary/15 px-6 shrink-0 text-center">
        <div className="max-w-xl mx-auto space-y-5">
          <h4 className="font-display text-2xl sm:text-3xl font-normal tracking-tight text-primary">Conclude Exhibition</h4>
          <p className="font-body text-sm text-on-surface-variant font-light leading-relaxed">
            Exit the Aether Pavilion detail blueprints to browse the Provence, France or Spatial Concept studies.
          </p>
          
          <div className="pt-3 flex justify-center gap-4">
            <button 
              onClick={onBack}
              className="px-8 py-3 rounded-full bg-primary text-white font-label text-xs uppercase font-bold tracking-widest hover:bg-secondary transition-all cursor-pointer"
            >
              Back to Collection
            </button>
            <button 
              onClick={onConnectClick}
              className="btn-glass px-6 py-3 rounded-full text-xs font-label uppercase tracking-widest text-primary cursor-pointer border border-secondary/20"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
