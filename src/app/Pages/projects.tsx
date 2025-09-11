// pages/projects.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ldEngImage from "/public/assets/projects/ldEng.png";
import smartIQImage from "/public/assets/projects/smartIQ.png";
import techMartImage from "/public/assets/projects/techMart.png";
import lLoveImage from "/public/assets/projects/lLove.png";
import acnuImage from "/public/assets/projects/acnu.png";
import perfusionImage from "/public/assets/projects/perfusion.png";
import meImage from "/public/assets/projects/me.png";
import Image from 'next/image';

export default function Projects() {
  const [theme, setTheme] = useState<keyof typeof themeClasses>('cyan');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "LD Engineering",
      description: "Web site for water pumps selling company",
      image: ldEngImage,
      tags: ["React.js", "Bootstrap"],
      demoLink: "https://www.ldengineering.net/",
      githubLink: "https://github.com/Sadeepa11/ld--eng-final"
    },
    {
      id: 2,
      title: "Smart IQ",
      description: "A wonderful web application for an electronic device selling shop.",
      image: smartIQImage,
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      demoLink: "https://www.smartIQ.lk/",
      githubLink: "https://github.com/Sadeepa11/smartIQ"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills.",
      image: meImage,
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://sadeepa-sri-rohanasinghe-39s6.vercel.app/",
      githubLink: "https://github.com/Sadeepa11/sadeepa-sri-rohanasinghe"
    },
    {
      id: 4,
      title: "Techmart Engineering",
      description: "A responsive website for a construction company",
      image: techMartImage,
      tags: ["React.js", "Tailwind CSS"],
      demoLink: "https://tech-mart-rho.vercel.app/",
      githubLink: "https://github.com/Sadeepa11/tech-mart"
    },
    {
      id: 5,
      title: "LavenderLove Paradise",
      description: "A responsive website for a Flower Shop",
      image: lLoveImage,
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://lavender-love-paradisecom.vercel.app/",
      githubLink: "https://github.com/Sadeepa11/lavender-love-paradise"
    },
    {
      id: 6,
      title: "ALL CEYLON NURSES' UNION",
      description: "A responsive website for ACNU",
      image: acnuImage,
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "VPS Hosting"],
      demoLink: "https://www.acnu.lk/",
      githubLink: "https://github.com/Sadeepa11/nurse-gov"
    },
    {
      id: 7,
      title: "Perfusion Lanka",
      description: "A responsive website for a Perfusionist Association",
      image: perfusionImage,
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "VPS Hosting"],
      demoLink: "https://www.perfusion.lk/",
      githubLink: "https://github.com/Sadeepa11/-Government-Perfusionist-Association"
    },
  ];

  const themeClasses = {
    cyan: {
      background: "bg-black",
      text: "text-white",
      subtext: "text-gray-300",
      card: "bg-gray-900",
      tagBg: "bg-cyan-300",
      tagText: "text-black",
      button: "bg-cyan-300 text-black hover:bg-cyan-400",
      buttonOutline: "border border-cyan-300 text-cyan-300 hover:bg-gray-800",
      mainBg: "bg-black",
      gradient: "from-cyan-300 to-cyan-500"
    },
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`min-h-screen ${currentTheme.mainBg} relative overflow-hidden`}>
      <Head>
        <title>Sadeepa Sri Rohanasinghe | Projects</title>
        <meta name="description" content="Software engineering projects by Sadeepa Sri Rohanasinghe" />
      </Head>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>

      <main className={`container mx-auto px-4 py-16 relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header Section with Enhanced Design */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-300 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my recent software engineering projects and applications. Each project demonstrates different skills and technologies with modern design principles.
          </p>
        </div>

        {/* Projects Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl shadow-black/20 hover:shadow-cyan-300/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                
                {/* Image Container with Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Overlay with Quick Actions */}
                  <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-500 ${
                    hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    <Link 
                      href={project.demoLink}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full hover:bg-cyan-300 hover:text-black transition-all duration-300 transform hover:scale-110"
                    >
                      Preview
                    </Link>
                    <Link 
                      href={project.githubLink}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                    >
                      Code
                    </Link>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1.5 bg-gradient-to-r from-cyan-300/20 to-blue-400/20 border border-cyan-300/30 text-cyan-300 text-sm rounded-full backdrop-blur-sm hover:from-cyan-300/30 hover:to-blue-400/30 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <Link 
                      href={project.demoLink}
                      className="flex-1 bg-gradient-to-r from-cyan-300 to-blue-400 text-black px-4 py-3 rounded-xl font-semibold text-center hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-300/25"
                    >
                      Visit Site
                    </Link>
                    <Link 
                      href={project.githubLink}
                      className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-xl font-semibold text-center hover:bg-white/20 hover:border-cyan-300/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <button className="bg-gradient-to-r from-cyan-300 to-blue-400 text-black px-8 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-300/25">
              Get In Touch
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}