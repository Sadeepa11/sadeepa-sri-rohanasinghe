"use client"

import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight, Code, Database, Globe } from 'lucide-react';

export default function AnimatedAbout() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const pathRef = useRef(null);
  
  useEffect(() => 
    {
    setIsVisible(true);
    
    // Animate signature when component is visible
    if (pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();
      
      // Set up the starting position
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      
      // Trigger the animation
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 2.5s ease-in-out';
        path.style.strokeDashoffset = '0';
      }, 1500);
    }
  }, []);

  return (
    <div className="w-full mx-auto p-8 text-gray-200">
      <div 
        ref={aboutRef}
        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex items-center mb-6 space-x-3">
          <div className="bg-cyan-300 text-black p-3 rounded-full">
            <Code size={24} />
          </div>
          <h2 className="text-3xl font-bold text-cyan-300">About Me</h2>
        </div>
        
        <div className="space-y-4 mb-8">
          <p className="leading-relaxed">
            Hi there! 👋 I'm <span className="text-cyan-300 font-bold">Sadeepa</span>, a passionate <span className="text-cyan-300">Full Stack Software Engineering undergraduate</span> from Sri Lanka, currently 23 years old. With a strong foundation in both front-end and back-end technologies, I specialize in creating clean, responsive, and user-friendly web applications.
          </p>
          
          <p className="leading-relaxed">
            I love turning ideas into reality through code and constantly challenge myself to learn new tools and technologies.
          </p>
          
          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 mt-6">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center">
              <Globe size={18} className="mr-2" /> 
              Frontend Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-black text-cyan-300 text-sm rounded-full border border-cyan-300 flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  {tech}
                </span>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center">
              <Database size={18} className="mr-2" /> 
              Backend Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'MongoDB', 'PHP', 'MySQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-black text-cyan-300 text-sm rounded-full border border-cyan-300 flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <p className="leading-relaxed mt-6">
            I'm always excited to work on innovative projects, collaborate with creative minds, and contribute to impactful software solutions. Whether it's crafting seamless user interfaces or building robust back-end systems, I enjoy every step of the development process.
          </p>
          
          <p className="text-lg font-medium mt-4 text-cyan-300">
            Let's build something amazing together!
          </p>
        </div>
        
        {/* Signature Animation */}
        <div className="mt-8 flex justify-end">
          <div className="w-48 h-24 relative">
            <svg 
              viewBox="0 0 240 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                ref={pathRef}
                d="M20,50 C30,30 40,70 50,50 C60,30 65,45 75,40 C85,35 90,50 100,45 
                    C110,40 110,20 120,30 C130,40 130,50 140,45 C150,40 155,20 165,25 
                    C175,30 175,50 185,45 C195,40 200,30 210,40 C220,50 210,35 220,45"
                stroke="#67e8f9"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <text x="170" y="85" className="text-sm" fill="#67e8f9">Sadeepa</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}