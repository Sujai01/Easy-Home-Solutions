import { X, Check, Compass, Sparkles } from 'lucide-react';
import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    scale: '10k-50k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'residential',
      scale: '10k-50k',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Dialog Body */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative w-full max-w-xl rounded-3xl bg-surface border border-secondary/15 p-6 md:p-8 shadow-[0_24px_64px_rgba(31,21,12,0.18)] z-10 text-on-surface overflow-hidden"
            id="connect-modal-container"
          >
            {/* Soft decorative background patterns */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            {/* Close trigger */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-secondary/15 hover:bg-surface-variant transition-colors group cursor-pointer"
              id="close-connect-modal"
            >
              <X className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center bg-surface-container mb-4">
                    <Compass className="w-5 h-5 text-secondary animate-pulse" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-primary font-normal tracking-[-0.01em]">Private Inquiry</h3>
                  <p className="font-body text-sm text-on-surface-variant font-light mt-1.5">
                    Connect with our lead architects to initiate a customized spatial study or request invitations to private gallery previews.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant text-xs font-semibold block mb-2">
                      Your Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alaric Sterling"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-container-low border border-secondary/10 rounded-xl px-4 py-3 text-sm focus:border-secondary focus:outline-none transition-colors shadow-inner"
                      id="input-name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant text-xs font-semibold block mb-2">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. alaric@sterling.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-surface-container-low border border-secondary/10 rounded-xl px-4 py-3 text-sm focus:border-secondary focus:outline-none transition-colors"
                        id="input-email"
                      />
                    </div>
                    <div>
                      <label className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant text-xs font-semibold block mb-2">
                        Phone (Optional)
                      </label>
                      <input 
                        type="tel" 
                        placeholder="e.g. +1 (555) 019-2834"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-surface-container-low border border-secondary/10 rounded-xl px-4 py-3 text-sm focus:border-secondary focus:outline-none transition-colors"
                        id="input-phone"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant text-xs font-semibold block mb-2">
                      Inquiry Focus
                    </label>
                    <select 
                      value={formData.projectType}
                      onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-surface-container-low border border-secondary/10 rounded-xl px-4 py-3 text-sm focus:border-secondary focus:outline-none transition-colors text-on-surface font-light cursor-pointer"
                      id="input-projectType"
                    >
                      <option value="residential">Residential Masterpieces & Villas</option>
                      <option value="exhibition">Exhibition & Public Pavilions</option>
                      <option value="spatial">Spatial Consulting & Dynamic Layouts</option>
                      <option value="furniture">Artisanal Furniture Commissioning</option>
                    </select>
                  </div>

                  {/* Scale size */}
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant text-xs font-semibold block mb-2">
                      Approximate Structural Scale
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Studio Detail', value: 'detail' },
                        { label: 'Medium Scale', value: 'medium' },
                        { label: 'Estate / Pavilion', value: 'estate' }
                      ].map(item => (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, scale: item.value })}
                          className={`py-2 px-3 text-xs rounded-lg font-label uppercase tracking-wider border transition-all cursor-pointer ${
                            formData.scale === item.value 
                              ? 'border-secondary bg-secondary/10 font-bold text-secondary' 
                              : 'border-secondary/10 bg-surface-container-low hover:border-secondary/20 text-on-surface-variant'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Statement message */}
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant text-xs font-semibold block mb-2">
                      The Spatial Vision (Message)
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Describe the environment, natural dynamics, or location you seek to harmonize..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-surface-container-low border border-secondary/10 rounded-xl px-4 py-3 text-sm focus:border-secondary focus:outline-none transition-colors"
                      id="input-message"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-glass bg-primary hover:bg-secondary hover:text-white border-none py-3.5 rounded-xl font-label text-xs uppercase font-semibold text-white tracking-[0.2em] transition-all disabled:opacity-50 cursor-pointer"
                    id="submit-inquiry"
                  >
                    {isSubmitting ? 'Transmitting brief...' : 'Transmit Inquiry'}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
                id="inquiry-success"
              >
                <div className="w-16 h-16 rounded-full border border-secondary bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-display text-3xl text-primary font-medium tracking-tight">Transmission complete</h4>
                <p className="font-body text-sm text-on-surface-variant font-light max-w-sm mx-auto mt-3 leading-relaxed">
                  We have logged your spatial inquiry under registry code <span className="font-bold text-primary font-mono select-all">#BM-{Math.floor(100000 + Math.random() * 900000)}</span>.
                </p>
                <p className="font-body text-sm text-on-surface-variant font-light max-w-sm mx-auto mt-2 leading-relaxed">
                  A representative counselor will reach out to invite you to standard review or secure private previews of materials.
                </p>

                <div className="flex gap-3 justify-center items-center mt-10 w-full max-w-xs">
                  <button 
                    onClick={onClose}
                    className="flex-1 btn-glass text-center py-3 rounded-lg font-label text-xs uppercase tracking-widest text-primary hover:scale-98 transition-transform cursor-pointer"
                  >
                    Close
                  </button>
                  <button 
                    onClick={handleReset}
                    className="flex-1 text-center py-3 text-xs font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
