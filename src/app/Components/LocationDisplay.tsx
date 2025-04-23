"use client";

// LocationDisplay.jsx
import React from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';

const LocationDisplay = () => {
  // Sri Lanka location data
  const locationData = {
    country: "Sri Lanka",
    region: "South Asia",
    capital: "Colombo",
    coordinates: "7.8731° N, 80.7718° E",
    languages: ["Sinhala", "English"],
    timezone: "GMT+5:30"
  };

  return (
    <div className="max-w-md mx-auto bg-black rounded-xl shadow-lg overflow-hidden md:max-w-2xl my-8 border-2 border-cyan-300">
      <div className="md:flex">
        <div className="p-6 w-full">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-cyan-300">{locationData.country}</h2>
            <div className="ml-2 px-2 py-1 bg-black text-cyan-300 text-xs font-semibold rounded-full border border-cyan-300">
              {locationData.region}
            </div>
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-start">
              <div className="w-20 text-sm font-medium text-gray-400">Location</div>
              <div className="flex-1 text-cyan-300">{locationData.coordinates}</div>
            </div>
            
            <div className="flex items-start">
              <div className="w-20 text-sm font-medium text-gray-400">Languages</div>
              <div className="flex-1 text-cyan-300">{locationData.languages.join(", ")}</div>
            </div>
            
            <div className="flex items-start">
              <div className="w-20 text-sm font-medium text-gray-400">Timezone</div>
              <div className="flex-1 text-cyan-300">{locationData.timezone}</div>
            </div>
          </div>
          
          <div className="mt-6 flex  justify-center">
            <a 
              href="/assets/Sadeepa-Sri-Rohanasinghe-Resume.pdf" 
              download 
              className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-cyan-300 border-2 border-cyan-300 rounded-md shadow-md transition-all duration-500 ease-in-out hover:bg-cyan-300 hover:text-black"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-cyan-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease-in-out"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease-in-out">
                <Download className="w-5 h-5 mx-3" />
              </span>
              <span className="relative flex items-center group-hover:translate-x-[-10px] transition-all duration-500 ease-in-out">
                Download Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDisplay;