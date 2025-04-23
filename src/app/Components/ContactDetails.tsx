// ContactDetails.jsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, MessageCircle, Github } from 'lucide-react';

const ContactDetails = () => {
  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg p-6 my-8">
      <h2 className="text-2xl font-bold text-center text-cyan-300 mb-6">Connect With Me</h2>
      
      <div className="space-y-4">
        {/* GitHub */}
        <Link href="https://github.com/Sadeepa11" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center p-3 rounded-lg transition-colors cursor-pointer">
            <Github className="w-6 h-6 text-gray-800 mr-3" />
            <div>
              <p className="font-medium text-white">GitHub</p>
              <span className="text-sm text-gray-500">Sadeepa11</span>
            </div>
          </div>
        </Link>
        
        {/* Facebook */}
        <Link href="https://web.facebook.com/sadeeparohanasinghe" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center p-3 rounded-lg transition-colors cursor-pointer">
            <Facebook className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-white">Facebook</p>
              <span className="text-sm text-gray-500">Sadeepa Sri Rohanasinghe</span>
            </div>
          </div>
        </Link>
        
        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/sadeepa-sri-rohanasinghe/" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center p-3 rounded-lg transition-colors cursor-pointer">
            <Linkedin className="w-6 h-6 text-blue-700 mr-3" />
            <div>
              <p className="font-medium text-white">LinkedIn</p>
              <span className="text-sm text-gray-500">Sadeepa Sri Rohanasinghe</span>
            </div>
          </div>
        </Link>
        
        {/* WhatsApp */}
        <Link href="https://wa.me/94705103507" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center p-3 rounded-lg  transition-colors cursor-pointer">
            <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <p className="font-medium text-white">WhatsApp</p>
              <span className="text-sm text-gray-500">+94 705103507</span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ContactDetails;