import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-violet-500" />
            <span className="text-xl font-semibold text-gray-100">Reflectify</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-violet-400 transition-colors">Features</a>
            <a href="#resources" className="text-gray-300 hover:text-violet-400 transition-colors">Resources</a>
            <a href="#contact" className="text-gray-300 hover:text-violet-400 transition-colors">Contact</a>
            <button className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-violet-400"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-violet-400">Features</a>
              <a href="#resources" className="block px-3 py-2 text-gray-300 hover:text-violet-400">Resources</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-violet-400">Contact</a>
              <button className="w-full mt-2 bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}