import { Compass, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ENTER_PAGE_BG } from '../data';

interface EntranceScreenProps {
  onEnter: () => void;
}

export default function EntranceScreen({ onEnter }: EntranceScreenProps) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background select-none">
      
      {/* Immersive Background with slow zoom parallax effect */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Soft shadow gradients mapping exactly to early dawn/sculptural shadows */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/25 via-surface/40 to-surface/85 z-10 mix-blend-normal" />
        <div className="absolute inset-0 bg-black/5 z-5" />
        <motion.img 
          initial={{ scale: 1.02 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 30, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          src={ENTER_PAGE_BG}
          alt="Easy Home Solutions Living Room Interior" 
          className="w-full h-full object-cover object-center transform origin-center"
        />
      </div>

      {/* Foreground Content Canvas */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between items-center py-10 px-6 md:px-16 text-center">
        
        {/* Top Branding / Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-full border border-secondary/25 flex items-center justify-center bg-surface/40 backdrop-blur-md shadow-sm">
            <Compass className="w-5 h-5 text-primary stroke-[1.5]" />
          </div>
        </motion.div>

        {/* Centerpiece Hero Slogan & Button */}
        <div className="max-w-5xl mx-auto space-y-10 flex flex-col items-center my-auto relative z-20">
          
          {/* Animated Headline with high-contrast serif and editorial layout */}
          <div className="flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold mb-4 font-label"
            >
              Residential Series — Vol. I
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-primary font-normal tracking-[-0.02em] leading-[1.1] sm:leading-[100%] text-center max-w-4xl"
              id="entrance-title"
            >
              Easy Home <span className="italic text-secondary font-light">Solutions</span>
            </motion.h1>
          </div>

          {/* Subheadline detailing Luxury architecture */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.1, ease: "easeOut" }}
            className="font-sans text-base sm:text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed pt-2"
            id="entrance-subtitle"
          >
            Crafting tranquil residential sanctuaries where modern architectural precision meets effortless luxury living.
          </motion.p>

          {/* Start Project inspired circular button / horizontal button */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.3, ease: "easeOut" }}
            className="pt-6"
          >
            <button 
              onClick={onEnter}
              className="btn-glass px-12 py-4.5 rounded-full inline-flex items-center justify-center group cursor-pointer border border-secondary/30 hover:bg-secondary hover:text-white"
              id="enter-button"
            >
              <span className="font-label text-xs font-bold tracking-[0.25em] uppercase text-primary group-hover:text-white transition-colors">
                ENTER THE SPACE
              </span>
              <ArrowRight className="ml-3.5 w-4 h-4 text-primary group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 stroke-[2.5]" />
            </button>
          </motion.div>
        </div>

        {/* Brutalist Vertical Sideline Labels (matching the Design HTML pattern) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.45em] text-on-surface-variant/45 hidden lg:block select-none pointer-events-none font-label">
          Sensory Architecture & Organic Fusion
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.45em] text-on-surface-variant/45 hidden lg:block select-none pointer-events-none font-label">
          Tectonic Assembly / Est. 2026
        </div>

        {/* Vintage background watermark (matching the 2024 watermark in the Design HTML) */}
        <div className="absolute bottom-16 right-[-20px] opacity-[0.06] pointer-events-none select-none z-10 hidden md:block">
          <span className="font-display font-black text-[240px] lg:text-[280px] leading-none uppercase tracking-tighter">
            2026
          </span>
        </div>

        {/* Bottom Atmospheric Scent Detail */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="mb-4"
        >
          <p className="font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-semibold">
            Private Gallery Exhibition
          </p>
        </motion.div>
      </div>
    </div>
  );
}
