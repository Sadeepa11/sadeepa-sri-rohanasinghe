// pages/projects.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ldEngImage from "/public/assets/projects/ldEng.png";
import smartIQImage from "/public/assets/projects/smartIQ.png";
import techMartImage from "/public/assets/projects/techMart.png";
import lLoveImage from "/public/assets/projects/lLove.png";
import meImage from "/public/assets/projects/me.png";
import Image from 'next/image';



export default function Projects() {
  const [theme, setTheme] = useState('cyan'); // Keeping the theme as 'cyan'




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
      image: meImage, // Use a unique image here instead of repeating
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://project-demo.com",
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
      description: "A responsive website for a construction company",
      image: lLoveImage,
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://lavender-love-paradisecom.vercel.app/",
      githubLink: "https://github.com/Sadeepa11/lavender-love-paradise"
    }
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
    // Other themes can be added here if needed
  };

  const currentTheme = themeClasses[theme]; // Use the current theme

  return (
    <div className={`min-h-screen ${currentTheme.mainBg}`}>
      <Head>
        <title>Sadeepa Sri Rohanasinghe | Projects</title>
        <meta name="description" content="Software engineering projects by Sadeepa Sri Rohanasinghe" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className={`text-4xl font-bold text-center mb-4 ${currentTheme.text}`}>My Projects</h1>
        <p className={`text-center ${currentTheme.subtext} mb-8 max-w-2xl mx-auto`}>
          Explore my recent software engineering projects and applications. Each project demonstrates different skills and technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`${currentTheme.card} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800`}>
              <div className="relative h-56 w-full">
                {/* Placeholder for project image */}

                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />


              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${currentTheme.text}`}>{project.title}</h3>
                <p className={`${currentTheme.subtext} mb-4`}>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className={`px-3 py-1 ${currentTheme.tagBg} ${currentTheme.tagText} text-sm rounded-full`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Link href={project.demoLink} className={`px-4 py-2 ${currentTheme.button} rounded-lg transition flex-1 text-center`}>
                    Live Demo
                  </Link>
                  <Link href={project.githubLink} className={`px-4 py-2 ${currentTheme.buttonOutline} rounded-lg transition flex-1 text-center`}>
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
