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
    <div className="flex gap-4 py-4 justify-center  w-full sticky top-0 z-50">
      {Object.entries(routes).map(([key, route]) => (
        <button
          key={key}
          onClick={() => onNavigate(key as any)}
          className={`px-4 py-2 rounded ${
            active === key ? 'bg-white text-black' : 'text-white hover:bg-gray-700'
          }`}
        >
          {route.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
