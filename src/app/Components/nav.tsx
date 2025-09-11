'use client';

import React from 'react';

interface Route {
  label: string;
}

interface NavbarProps {
  routes: Record<string, Route>;
  onNavigate: (page: 'home' | 'about' | 'projects') => void;
  active: string;
}

const Navbar: React.FC<NavbarProps> = ({ routes, onNavigate, active }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-2">
          {Object.entries(routes).map(([key, route]) => (
            <button
              key={key}
              onClick={() => onNavigate(key as any)}
              className={`
                relative px-6 py-2.5 rounded-full font-medium text-sm
                transition-all duration-300 ease-in-out transform
                ${
                  active === key
                    ? 'bg-white text-black shadow-lg shadow-white/25 scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'
                }
                before:absolute before:inset-0 before:rounded-full 
                before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20
                before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-100
                active:scale-95
              `}
            >
              <span className="relative z-10">{route.label}</span>
              {active === key && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
              )}
            </button>
          ))}
        </div>
        
        {/* Animated underline for active state */}
        {/* <div className="relative mt-2 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent">
          <div 
            className="absolute h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{
              width: '60px',
              left: `calc(${Object.keys(routes).indexOf(active)} * (100% / ${Object.keys(routes).length}) + 50% - 30px)`,
            }}
          />
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;