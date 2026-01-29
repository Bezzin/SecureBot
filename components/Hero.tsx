import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Copy, Check, Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './Terminal.tsx';

const words = ["Hacked", "Pwned", "Exposed", "Breached"];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("curl -fsSL https://securebot.setup/install.sh | bash");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="z-10 order-2 lg:order-1">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-pink"></span>
            </span>
            <span className="text-xs md:text-sm text-gray-300 font-medium">Featured on Hacker News • 2.4k+ GitHub Stars</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Install MoltBot <br />
            Without Getting <br />
            <span className="relative inline-block text-neon-pink">
              [{words[currentWordIndex]}]
              <span className="absolute -inset-1 bg-neon-pink/20 blur-lg -z-10 animate-pulse"></span>
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
            The security-first setup wizard that does in 5 minutes what takes experts 2 hours. 
            <span className="text-white font-medium"> Maximum protection, minimum effort.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
              onClick={() => { document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}}
              className="group relative px-8 py-4 bg-white text-black font-bold rounded hover:scale-105 transition-transform duration-200 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded blur-md -z-10"></div>
              One-Click Install
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded text-white font-medium flex items-center justify-center transition-colors">
              <Play className="mr-2 w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center text-sm text-gray-500 space-x-6">
               <span className="flex items-center"><TerminalIcon className="w-4 h-4 mr-2" /> Ubuntu</span>
               <span className="flex items-center"><TerminalIcon className="w-4 h-4 mr-2" /> Debian</span>
               <span className="flex items-center"><TerminalIcon className="w-4 h-4 mr-2" /> macOS</span>
            </div>
            
            <div className="bg-[#121218] border border-white/10 rounded-lg p-4 flex items-center justify-between group max-w-md cursor-pointer hover:border-white/20 transition-colors" onClick={copyCommand}>
              <code className="text-neon-cyan font-mono text-sm truncate mr-4">
                curl -fsSL https://securebot.setup/install.sh | bash
              </code>
              <button className="text-gray-400 hover:text-white transition-colors">
                {copied ? <Check className="w-5 h-5 text-neon-green" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Terminal */}
        <div className="order-1 lg:order-2 relative perspective-1000">
          <div className="relative">
             {/* Decorative Elements around terminal */}
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-neon-cyan/20 rounded-full blur-xl animate-pulse"></div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-pink/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
             
             <Terminal />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;