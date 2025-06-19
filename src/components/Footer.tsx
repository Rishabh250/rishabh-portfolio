'use client';

import { Heart, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Rishabh Bansal
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AI-Focused Full Stack Developer passionate about building scalable 
              applications and intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:rishu25bansal@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={18} />
                <span>rishu25bansal@gmail.com</span>
              </a>
              
              <a
                href="https://linkedin.com/in/rishabh-bansal-5a08b496"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Rishabh Bansal. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;