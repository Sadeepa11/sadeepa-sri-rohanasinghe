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
// import Squares from './Squares';
import Squares from './blocks/Backgrounds/Squares/Squares';
import Particles from './blocks/Backgrounds/Particles/Particles';


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

<div className="absolute inset-0 z-0">
{/* <div style={{ width: '100vw', height: '100%', position: 'relative' }}> */}
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={1000}
    particleSpread={30}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>

{/* </div> */}

{/* <div className="absolute inset-0 z-0">
 <Squares 
          speed={1} 
          squareSize={100}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>        */}
      <Navbar routes={routes} onNavigate={setActivePage} active={activePage} />

    



      {/* <SplashCursor/> */}

      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 py-10">
        {renderContent()}
      </div>
    </div>
  );
}
