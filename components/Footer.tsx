
import React, { useState } from 'react';
import { Download, Github, Mail, ShieldAlert } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black via-[#0a0a0f] to-black z-0"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-[300px] bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Final CTA */}
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 italic tracking-tighter">Ready to MoltBot Responsibly?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            5 minutes to a secure setup. No expertise required. Choose the self-hosted script or our managed cloud.
          </p>
          
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={() => document.getElementById('install')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-5 bg-gradient-to-r from-neon-cyan to-blue-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center">
                <Download className="mr-2 w-6 h-6" />
                Get Setup Script
              </button>
              <button onClick={() => alert('Managed Cloud solution coming soon!')} className="px-10 py-5 bg-white/5 border border-neon-pink/50 text-neon-pink font-bold text-lg rounded-full hover:scale-105 transition-transform hover:bg-neon-pink/10 flex items-center">
                <ShieldAlert className="mr-2 w-6 h-6" />
                Managed Cloud
              </button>
            </div>
            
            <div className="flex flex-col items-center gap-2">
               <span className="text-sm text-gray-500">Need help? <a href="#" onClick={() => alert('Please email support@securebot.vip to book a security consultant.')} className="text-neon-cyan border-b border-neon-cyan/30 hover:border-neon-cyan transition-colors">Book a Security Consultant →</a></span>
               <div className="flex items-center mt-4 bg-white/5 p-1 pr-4 rounded-full border border-white/10 group focus-within:border-neon-cyan transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 ml-1">
                     <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Security updates in your inbox" 
                    className="bg-transparent border-none outline-none text-sm text-gray-200 w-48"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={() => alert(`Submitting email: ${email || 'No email entered'}`)} className="text-neon-cyan font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">Join</button>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center mb-4 md:mb-0">
             <span className="text-2xl mr-2">🦞</span>
             <span>Made with love by the community</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
             <a href="#" onClick={() => alert('Enterprise solutions coming soon!')} className="hover:text-neon-cyan transition-colors">Enterprise</a>
             <a href="#" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-neon-cyan transition-colors">Documentation</a>
             <a href="#" onClick={() => document.getElementById('security')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-neon-cyan transition-colors">Security Guide</a>
             <a href="#" onClick={() => alert('Privacy Policy coming soon!')} className="hover:text-neon-cyan transition-colors">Privacy</a>
          </div>

          <div className="text-xs text-center md:text-right max-w-xs">
            Not affiliated with MoltBot or Anthropic. 
            The setup wizard is free; managed hosting is optional.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
