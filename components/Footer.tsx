import React from 'react';
import { Download, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black via-[#0a0a0f] to-black z-0"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-[300px] bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Final CTA */}
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Ready to MoltBot Responsibly?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            5 minutes to a secure setup. No expertise required.
          </p>
          
          <div className="flex flex-col items-center">
            <button className="px-10 py-5 bg-gradient-to-r from-neon-cyan to-blue-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center mb-4">
               <Download className="mr-2 w-6 h-6" />
               Download Setup Wizard
            </button>
            <span className="text-sm text-gray-500">Works on Ubuntu, Debian, and macOS</span>
            
            <div className="mt-8 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
               <Github className="w-5 h-5" />
               <span className="border-b border-gray-600 hover:border-white">View source on GitHub →</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center mb-4 md:mb-0">
             <span className="text-2xl mr-2">🦞</span>
             <span>Made with love by the community</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
             <a href="#" className="hover:text-neon-cyan transition-colors">GitHub</a>
             <a href="#" className="hover:text-neon-cyan transition-colors">Documentation</a>
             <a href="#" className="hover:text-neon-cyan transition-colors">Security Guide</a>
             <a href="#" className="hover:text-neon-cyan transition-colors">Report Issue</a>
          </div>

          <div className="text-xs">
            Not affiliated with MoltBot or Anthropic
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;