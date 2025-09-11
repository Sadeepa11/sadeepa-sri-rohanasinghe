'use client';

import { useState, useEffect, useRef } from 'react';
import RotatingText from "../blocks/Animations/TextAnimations/RotatingText/RotatingText";
import Image from 'next/image';
import ContactDetails from "../Components/ContactDetails";
import LocationDisplay from '../Components/LocationDisplay';
import { Sparkles, Download, MessageCircle, ArrowDown} from 'lucide-react';
import { motion } from 'framer-motion';
import { SiReact } from 'react-icons/si';


function Me() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    const contactTimer = setTimeout(() => setContactVisible(true), 800);
    return () => {
      clearTimeout(timer);
      clearTimeout(contactTimer);
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center px-6 mt-20 overflow-hidden">
      
      {/* Floating particles background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl">
        
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-10"
        >
          {/* Profile Image with tilt */}
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 8 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
            className="relative group"
          >
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 blur-md opacity-60 group-hover:opacity-90 animate-spin-slow"></div>
            <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-cyan-300 shadow-2xl">
              <Image
                src="/assets/me.jpg"
                alt="Sadeepa Sri Rohanasinghe"
                width={320}
                height={320}
                className={`object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                priority
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </motion.div>

          {/* Name + Rotating Text */}
          <div className="text-center lg:text-left space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <span className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-300 bg-clip-text text-transparent">
                I am
              </span>
              <div className="relative min-w-[280px] h-[80px] flex items-center justify-center">
                <RotatingText
                  texts={[
                    'Sadeepa',
                    'React.js Developer',
                    'Next.js Enthusiast',
                    'Frontend Engineer',
                    'Creative Coder',
                    'Quick Learner',
                  ]}
                  mainClassName="text-3xl sm:text-4xl md:text-6xl font-bold px-6 py-3 bg-gradient-to-r from-cyan-300 to-blue-400 text-black rounded-2xl shadow-2xl"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                />
              </div>
            </div>

            {/* Typewriter subtitle */}
            <p className="text-lg text-gray-300 font-medium max-w-lg mx-auto lg:mx-0">
              <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-cyan-300 pr-2">
                Crafting sleek, modern & scalable web apps 🚀
              </span>
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
              <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-300/20 rounded-full text-sm text-cyan-200">React.js</span>
              <span className="px-4 py-2 bg-blue-400/10 border border-blue-300/20 rounded-full text-sm text-blue-200">Next.js</span>
              <span className="px-4 py-2 bg-purple-400/10 border border-purple-300/20 rounded-full text-sm text-purple-200">TypeScript</span>
              <span className="px-4 py-2 bg-green-400/10 border border-green-300/20 rounded-full text-sm text-green-200">Tailwind CSS</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/assets/Sadeepa-Sri-Rohansinghe-Resume.pdf"
              download
              className="bg-gradient-to-r from-cyan-300 to-blue-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:from-cyan-400 hover:to-blue-500 transition"
            >
              <Download size={20} className="inline mr-2" />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:from-purple-500 hover:to-pink-600 transition"
            >
              <MessageCircle size={20} className="inline mr-2" />
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right side (Contact card) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: contactVisible ? 1 : 0, x: contactVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          id="contact"
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          <div className="relative w-full max-w-xl p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-6">
              Let’s Connect
            </h2>
            <p className="text-gray-300 mb-6">
              Open for collaborations, internships & exciting projects.  
              Drop me a message and let’s build something amazing ✨
            </p>
            <ContactDetails />
            <div className="mt-8 flex items-center justify-center text-gray-400">
              <ArrowDown size={16} className="animate-bounce mr-2" />
              <span className="text-sm">Available for new opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Me;
