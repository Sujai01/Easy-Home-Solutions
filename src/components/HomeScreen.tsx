import { ArrowRight, ArrowUpRight, Compass, Eye, MapPin, Sparkles, Layers, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS, MAIN_HERO_BG, PHILOSOPHY_PILLARS } from '../data';
import { Project } from '../types';

interface HomeScreenProps {
  onSelectProject: (projectId: string) => void;
  onConnectClick: () => void;
}

export default function HomeScreen({ onSelectProject, onConnectClick }: HomeScreenProps) {
  const [filter, setFilter] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Dynamic filter lists
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen relative overflow-x-hidden pt-16">
      
      {/* SECTION 1: HERO CINEMATIC HEADER */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden" id="atelier">
        
        {/* Background photo assets */}
        <div className="absolute inset-0 w-full h-full z-0">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 25, ease: "easeOut" }}
            src={MAIN_HERO_BG}
            alt="Easy Home Solutions Premium Living Room Atmosphere" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlays making reading text effortless in daylight */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-transparent to-surface/85" />
        </div>

        {/* Hero Copy */}
        <div className="relative z-10 text-center flex flex-col items-center px-6 md:px-16 mt-16 max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/20 bg-surface/40 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span className="font-label text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
              Quiet Luxury Architecture
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[84px] tracking-[-0.02em] text-primary font-normal leading-[1.05] text-center max-w-4xl"
            id="home-hero-title"
          >
            Architecture as <br />
            <span className="italic text-secondary font-light">Atmosphere.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-sans text-base sm:text-lg md:text-xl text-on-surface-variant mt-8 max-w-2xl font-light leading-relaxed"
            id="home-hero-desc"
          >
            Designing bespoke carbon-neutral sanctuaries that dissolve the stubborn boundary between the constructed environment and the wild natural world.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-10"
          >
            <button 
              onClick={() => handleScrollToSection('work')}
              className="btn-glass px-9 py-3.5 rounded-full font-label text-xs uppercase font-semibold text-primary inline-flex items-center gap-3 hover:scale-95 transition-transform cursor-pointer border border-secondary/25"
              id="hero-explore"
            >
              <span>Explore the Work</span>
              <ArrowRight className="w-3.5 h-3.5 text-secondary" />
            </button>
          </motion.div>
        </div>

        {/* Scroll helper */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
          <span className="font-label text-[9px] uppercase tracking-[0.3em] text-primary">
            Scroll to perceive
          </span>
          <div className="w-[1px] h-10 bg-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PORTFOLIO ARCHIVE & ASYMMETRICAL BENTO GRID */}
      <section className="py-24 sm:py-32 px-6 md:px-16 max-w-[1440px] mx-auto bg-surface" id="work">
        
        {/* Gallery Header specs */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8 pb-8 border-b border-secondary/10">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.25em] text-secondary font-bold block mb-3">
              01 — Selected Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-3xl text-primary font-normal tracking-[-0.01em] leading-tight max-w-3xl">
              Spaces that breathe and adapt.
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-4 xl:mt-0 bg-surface-container-low p-1.5 rounded-2xl border border-secondary/10 max-w-max">
            {['All', 'Residential', 'Public', 'Concept'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl font-label text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Symmetrical Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {filteredProjects.map((project, index) => {
            const gridClass = "flex flex-col";

            return (
              <div 
                key={project.id} 
                className={`${gridClass} group cursor-pointer`}
                onClick={() => onSelectProject(project.id)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                id={`project-card-${project.id}`}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[480px] mb-6 shadow-[0_20px_48px_rgba(31,21,12,0.04)] hover:shadow-[0_32px_64px_rgba(31,21,12,0.08)] transition-all duration-700">
                  
                  {/* Photo content */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:scale-105" 
                  />
                  
                  {/* Glassmorphic hover overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="btn-glass px-6 py-2.5 rounded-full flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform duration-500">
                      <Eye className="w-3.5 h-3.5 text-primary" />
                      <span className="font-label text-[10px] uppercase font-bold tracking-widest text-primary">
                        Examine Space
                      </span>
                    </div>
                  </div>

                  {/* Corner Index Tag */}
                  <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-lg border border-secondary/15">
                    <span className="font-mono text-xs font-semibold text-secondary">
                      {project.number}
                    </span>
                  </div>
                </div>

                {/* Typography alignment */}
                <div className="flex justify-between items-start px-1">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-primary font-normal tracking-tight group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-2 text-on-surface-variant font-light text-sm">
                      <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span>{project.subtitle}</span>
                    </div>
                  </div>

                  <span className="p-2 rounded-full border border-secondary/10 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden sm:block shrink-0">
                    <ArrowRight className="w-4 h-4 text-secondary stroke-[1.5]" />
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </section>

      {/* SECTION 3: THE STUDIO PHILOSOPHY (PILLARS OF REFINEMENT) */}
      <section className="py-24 sm:py-32 px-6 md:px-16 bg-surface-container-low border-y border-secondary/10" id="philosophy">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Title column */}
            <div className="lg:col-span-4 sticky top-24">
              <span className="font-label text-xs uppercase tracking-[0.25em] text-secondary font-bold block mb-3">
                Company Core
              </span>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary font-normal tracking-[-0.01em] leading-tight">
                Our Easy Home Solutions Creed
              </h3>
              <p className="font-body text-sm text-on-surface-variant mt-4 font-light leading-relaxed max-w-sm">
                We believe that architecture is a living organism. It has cycles, respirations, and temperatures. Here are the three tenets that drive our drafting processes.
              </p>
              
              <div className="mt-8 hidden lg:block">
                <button 
                  onClick={onConnectClick}
                  className="btn-glass px-7 py-3 rounded-full text-[10px] font-label uppercase font-bold tracking-widest text-primary hover:bg-primary hover:text-white border-secondary/20 cursor-pointer"
                >
                  Request Private Dossier
                </button>
              </div>
            </div>

            {/* Tenet Pillars column */}
            <div className="lg:col-span-8 space-y-12">
              {PHILOSOPHY_PILLARS.map((p, i) => (
                <div 
                  key={i} 
                  className="p-8 rounded-2xl bg-surface border border-secondary/10 shadow-sm flex flex-col sm:flex-row gap-6 sm:gap-8 items-start hover:border-secondary/20 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl border border-secondary/15 bg-surface-container flex items-center justify-center font-display text-xl font-bold text-secondary shrink-0">
                    {p.num}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display text-xl sm:text-2xl text-primary font-medium">
                      {p.title}
                    </h4>
                    <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: THE TECHNICAL FLOW PROCESS */}
      <section className="py-24 sm:py-32 px-6 md:px-16 max-w-7xl mx-auto" id="process">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label text-xs uppercase tracking-[0.25em] text-secondary font-bold block mb-3">
            Residential Craft
          </span>
          <h3 className="font-display text-3xl sm:text-4xl md:text-[50px] text-primary font-normal tracking-tight leading-tight">
            The Expert Solutions
          </h3>
          <p className="font-body text-sm text-on-surface-variant mt-3 font-light leading-relaxed">
            How we translate shifting natural dynamics—wind flow, sound refraction, sun elevation—into permanent, solid limestone forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Site Topology Scan",
              desc: "We analyze wind vortex velocities, cloud diffusion variables, and the terrain gradient contours of the destination landscape to map real environmental vectors."
            },
            {
              step: "02",
              title: "Computational Carving",
              desc: "Using customized generative models, we curve, sculpt, and hollow out our spaces dynamically to maximize solar heating, micro-ventilation, and pristine acoustics."
            },
            {
              step: "03",
              title: "Tectonic Assembly",
              desc: "Robotic millers carve the raw Tivoli limestone blocks, while local artisans assemble and refine bronze joinery with age-old hand-buffed finishes."
            }
          ].map((item, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl bg-surface-container-low border border-secondary/10 flex flex-col gap-6 hover:shadow-md transition-shadow">
              <span className="font-mono text-xs font-bold text-secondary tracking-widest block bg-surface px-3 py-1 rounded border border-secondary/10 max-w-max">
                PHASE {item.step}
              </span>
              <div>
                <h4 className="font-display text-xl text-primary font-medium mb-2">{item.title}</h4>
                <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION CODA */}
      <section className="py-20 bg-primary-container text-white py-24 px-6 md:px-16 text-center overflow-hidden relative">
        {/* Soft elegant mesh back */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <Compass className="w-10 h-10 text-secondary mx-auto stroke-[1.5] animate-spin" style={{ animationDuration: '6s' }} />
          <h3 className="font-display text-3xl sm:text-4xl md:text-[50px] text-white font-normal tracking-[-0.01em] leading-tight">
            Ready to shape your sanctuary?
          </h3>
          <p className="font-body text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Our atelier accepts only a highly curated set of private residential and cultural commissions annually to secure absolute structural and computational focus.
          </p>

          <div className="pt-4">
            <button 
              onClick={onConnectClick}
              className="px-8 py-3.5 rounded-full bg-white text-black font-label text-xs uppercase font-bold tracking-widest hover:bg-secondary hover:text-white transition-all cursor-pointer shadow-lg"
              id="footer-action-connect"
            >
              Initiate Spatial Study
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
