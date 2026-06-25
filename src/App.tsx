/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import EntranceScreen from './components/EntranceScreen';
import HomeScreen from './components/HomeScreen';
import ProjectScreen from './components/ProjectScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConnectModal from './components/ConnectModal';
import { AppScreen } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('entrance');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isConnectOpen, setIsConnectOpen] = useState<boolean>(false);

  // Synchronize CSS custom properties or theme selectors when dark mode toggles
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      // Override default theme CSS variables dynamically for fully customized dark luxury palettes
      root.style.setProperty('--color-background', '#0a0a0a');
      root.style.setProperty('--color-on-background', '#fff8f0');
      root.style.setProperty('--color-surface', '#12100a');
      root.style.setProperty('--color-on-surface', '#fcf6ed');
      root.style.setProperty('--color-surface-container', '#1e1b13');
      root.style.setProperty('--color-surface-container-low', '#16140e');
      root.style.setProperty('--color-primary', '#ffffff');
      root.style.setProperty('--color-secondary', '#e1c0a7');
      root.style.setProperty('--color-on-surface-variant', '#eae1d4');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--color-background', '#fff8f0');
      root.style.setProperty('--color-on-background', '#1e1b13');
      root.style.setProperty('--color-surface', '#fff8f0');
      root.style.setProperty('--color-on-surface', '#1e1b13');
      root.style.setProperty('--color-surface-container', '#f5ede0');
      root.style.setProperty('--color-surface-container-low', '#fbf3e5');
      root.style.setProperty('--color-primary', '#000000');
      root.style.setProperty('--color-secondary', '#735945');
      root.style.setProperty('--color-on-surface-variant', '#444748');
    }
  }, [isDarkMode]);

  const handleEnterSpace = () => {
    setCurrentScreen('home');
    // Scroll window back to top on transitions
    window.scrollTo({ top: 0 });
  };

  const handleSelectProject = (projectId: string) => {
    if (projectId === 'aether-pavilion') {
      setCurrentScreen('project');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // In a real gallery, we can showcase details about Provence too
      // For precision layout accuracy we keep focus on the Aether Pavilion specification!
      setCurrentScreen('project');
      window.scrollTo({ top: 0 });
    }
  };

  const handleBackToEntrance = () => {
    setCurrentScreen('entrance');
    window.scrollTo({ top: 0 });
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentScreen !== 'home') {
      setCurrentScreen('home');
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-700 bg-background text-on-background`}>
      
      {/* Dynamic persistent floating Navbar when outside splash screen */}
      {currentScreen !== 'entrance' && (
        <Navbar 
          currentScreen={currentScreen}
          setScreen={setCurrentScreen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          onConnectClick={() => setIsConnectOpen(true)}
        />
      )}

      {/* Screen Routing with elegant AnimatePresence transitions */}
      <AnimatePresence mode="wait">
        {currentScreen === 'entrance' && (
          <motion.div
            key="entrance-screen"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transform: 'scale(1.01)', transition: { duration: 0.8, ease: 'easeInOut' } }}
          >
            <EntranceScreen onEnter={handleEnterSpace} />
          </motion.div>
        )}

        {currentScreen === 'home' && (
          <motion.div
            key="home-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HomeScreen 
              onSelectProject={handleSelectProject} 
              onConnectClick={() => setIsConnectOpen(true)}
            />
            <Footer 
              onBackToEntrance={handleBackToEntrance}
              onNavigateSection={handleNavigateSection}
            />
          </motion.div>
        )}

        {currentScreen === 'project' && (
          <motion.div
            key="project-screen"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ProjectScreen 
              onBack={() => setCurrentScreen('home')}
              onConnectClick={() => setIsConnectOpen(true)}
            />
            <Footer 
              onBackToEntrance={handleBackToEntrance}
              onNavigateSection={handleNavigateSection}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Connect Intake overlay */}
      <ConnectModal 
        isOpen={isConnectOpen} 
        onClose={() => setIsConnectOpen(false)} 
      />

    </div>
  );
}
