"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight, Code, Database, Globe, User, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const aboutRef = useRef(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    // Trigger main animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Trigger card animations after main content
    const cardTimer = setTimeout(() => {
      setAnimateCards(true);
    }, 600);

    // Signature animation
    if (pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();

      path.style.strokeDasharray = length.toString();
      path.style.strokeDashoffset = length.toString();

      requestAnimationFrame(() => {
        setTimeout(() => {
          path.style.transition = 'stroke-dashoffset 2.5s ease-in-out';
          path.style.strokeDashoffset = '0';
        }, 1200);
      });
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(cardTimer);
    };
  }, []);

  const frontendTech = ['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS'];
  const backendTech = ['Node.js', 'Express', 'MongoDB', 'PHP', 'MySQL'];

  return (
    <section className="w-full mx-auto p-8 mt-2 text-gray-200 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>

      <div
        ref={aboutRef}
        className={`relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Enhanced Header */}
        <header className="flex items-center justify-center mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-full blur-sm opacity-75 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-cyan-300 to-blue-400 text-black p-4 rounded-full shadow-lg shadow-cyan-300/25">
                  <User size={32} />
                </div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-300 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mx-auto"></div>
          </div>
        </header>

        {/* Main Content with Glassmorphism */}
        <div className="max-w-4xl mx-auto">
          <article className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl shadow-black/20 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Introduction Paragraphs */}
            <div className="space-y-6 mb-8">
              <p className="text-lg leading-relaxed">
                Hi there! <span className="text-2xl">👋</span> I'm <span className="text-cyan-300 font-bold text-xl bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Sadeepa</span>, a passionate{' '}
                <span className="text-cyan-300 font-semibold">Full Stack Software Engineering undergraduate</span> from Sri Lanka,
                currently 23 years old. With a strong foundation in both front-end and back-end technologies, I specialize
                in creating clean, responsive, and user-friendly web applications.
              </p>

              <p className="text-lg leading-relaxed">
                I love turning ideas into reality through code and constantly challenge myself to learn new tools and
                technologies. <span className="inline-flex items-center"><Sparkles size={20} className="text-cyan-300 mx-1" /></span>
              </p>
            </div>

            {/* Technology Sections */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              
              {/* Frontend Technologies */}
              <div className={`transition-all duration-700 ease-out ${animateCards ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-cyan-300/10 transition-all duration-500 h-full">
                  <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                    <div className="bg-cyan-300/20 p-2 rounded-lg mr-3">
                      <Globe size={20} className="text-cyan-300" />
                    </div>
                    Frontend Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendTech.map((tech, index) => (
                      <span
                        key={tech}
                        className={`px-3 py-2 bg-gradient-to-r from-cyan-300/20 to-blue-400/20 border border-cyan-300/30 text-cyan-300 text-sm rounded-full backdrop-blur-sm flex items-center hover:from-cyan-300/30 hover:to-blue-400/30 transition-all duration-300 transform hover:scale-105 ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${index * 100 + 200}ms` }}
                      >
                        <ChevronRight size={14} className="mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backend Technologies */}
              <div className={`transition-all duration-700 ease-out ${animateCards ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-purple-400/10 transition-all duration-500 h-full">
                  <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                    <div className="bg-purple-400/20 p-2 rounded-lg mr-3">
                      <Database size={20} className="text-purple-300" />
                    </div>
                    Backend Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {backendTech.map((tech, index) => (
                      <span
                        key={tech}
                        className={`px-3 py-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-300/30 text-purple-300 text-sm rounded-full backdrop-blur-sm flex items-center hover:from-purple-400/30 hover:to-pink-400/30 transition-all duration-300 transform hover:scale-105 ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${index * 100 + 400}ms` }}
                      >
                        <ChevronRight size={14} className="mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Paragraphs */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm always excited to work on innovative projects, collaborate with creative minds, and contribute to
                impactful software solutions. Whether it's crafting seamless user interfaces or building robust back-end
                systems, I enjoy every step of the development process.
              </p>

              <div className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Let's build something amazing together!
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Enhanced Signature Animation */}
        <div className={`mt-12 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="w-64 h-28 relative">
              <svg
                viewBox="0 0 240 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#67e8f9" />
                    <stop offset="50%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <path
                  ref={pathRef}
                  d="M20,50 C30,30 40,70 50,50 C60,30 65,45 75,40 C85,35 90,50 100,45 
                      C110,40 110,20 120,30 C130,40 130,50 140,45 C150,40 155,20 165,25 
                      C175,30 175,50 185,45 C195,40 200,30 210,40 C220,50 210,35 220,45"
                  stroke="url(#signatureGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  filter="drop-shadow(0 0 8px rgba(103, 232, 249, 0.3))"
                />
                <text 
                  x="170" 
                  y="85" 
                  className="text-sm font-medium" 
                  fill="url(#signatureGradient)"
                >
                  Sadeepa
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-gray-300 mb-4">Ready to start your next project?</p>
            <button className="bg-gradient-to-r from-cyan-300 to-blue-400 text-black px-8 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-300/25">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;