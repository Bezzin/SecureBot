import React, { useState } from 'react';
import { Menu, X, Github, Star } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-2xl">🦞</span>
          <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-pink">
            SecureBot Setup
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {['Features', 'Security', 'Install', 'FAQ'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {/* CTA & Github */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span className="flex items-center bg-white/5 px-2 py-1 rounded-full text-xs group-hover:bg-white/10 transition-colors">
              <Star className="w-3 h-3 mr-1 text-yellow-400 fill-yellow-400" />
              2.4k
            </span>
          </a>
          <button
            onClick={() => scrollToSection('install')}
            className="px-5 py-2 bg-white/5 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-black font-semibold rounded transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col space-y-4">
          {['Features', 'Security', 'Install', 'FAQ'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-gray-300 hover:text-neon-cyan py-2 text-lg font-medium"
            >
              {item}
            </button>
          ))}
          <div className="h-px bg-white/10 my-2"></div>
          <button onClick={() => scrollToSection('install')} className="w-full py-3 bg-gradient-to-r from-neon-cyan to-blue-500 text-black font-bold rounded">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;