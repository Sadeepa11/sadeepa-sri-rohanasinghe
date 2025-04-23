'use client';

import React, { useState } from 'react';
import Navbar from './Components/nav';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor';
// import About from './Pages/me';
// import Projects from './Pages/Projects';
// import Skills from './Pages/Skills';
import Me from './Pages/me';
import AnimatedAbout from './Pages/about';
import Projects from './Pages/projects';

const routes = {
  home: { label: 'Home' },
  about: { label: 'About' },
  projects: { label: 'Projects' },

};

export default function Home() {
  const [activePage, setActivePage] = useState<'home' | 'about' | 'projects' >('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Me />;
      case 'about':
        return <AnimatedAbout/>;
      case 'projects':
        return <Projects/>;
      default:
        return <Me />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans flex flex-col items-center justify-start">
      <Navbar routes={routes} onNavigate={setActivePage} active={activePage} />

      {/* <SplashCursor/> */}

      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 py-10">
        {renderContent()}
      </div>
    </div>
  );
}
