import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="p-2 bg-neon-green/10 rounded-xl">
              <Leaf className="w-8 h-8 text-neon-green" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              NutriMind<span className="text-neon-green">.AI</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-neon-green transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#demo" className="text-gray-300 hover:text-neon-green transition-colors px-3 py-2 rounded-md text-sm font-medium">Live Demo</a>
              <a href="#students" className="text-gray-300 hover:text-neon-green transition-colors px-3 py-2 rounded-md text-sm font-medium">Student Mode</a>
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-neon-green text-black px-6 py-2.5 rounded-full font-semibold hover:bg-[#32e011] transition-colors box-glow"
              >
                Try Demo
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-neon-green block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-neon-green block px-3 py-2 rounded-md text-base font-medium">Live Demo</a>
            <a href="#students" className="text-gray-300 hover:text-neon-green block px-3 py-2 rounded-md text-base font-medium">Student Mode</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
