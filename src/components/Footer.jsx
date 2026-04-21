import React from 'react';
import { Leaf, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="p-2 bg-neon-green/10 rounded-xl">
              <Leaf className="w-6 h-6 text-neon-green" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              NutriMind<span className="text-neon-green">.AI</span>
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-neon-green transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-neon-green transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-neon-green transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NutriMind AI. Built for Prompt-a-thon Challenge.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
