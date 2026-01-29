
import React from 'react';
import { Download, TerminalSquare, ShieldCheck, Server, ExternalLink } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="install" className="py-24 bg-[#050508] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Secure in Three Steps</h2>
          <p className="text-gray-400">From zero to secure AI assistant in under 5 minutes.</p>
        </div>

        <div className="relative mb-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-green opacity-30"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Step 1 */}
            <div className="relative group">
              <div className="w-24 h-24 mx-auto bg-[#0a0a0f] border border-neon-cyan/30 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-neon-cyan transition-colors shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                <Download className="w-10 h-10 text-neon-cyan" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-cyan text-black font-bold rounded-full flex items-center justify-center text-sm">1</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Download</h3>
              <div className="bg-[#121218] rounded p-3 text-left font-mono text-xs text-gray-300 border border-white/10 mb-4 overflow-x-auto">
                curl -O https://securebot.vip/install.sh
              </div>
              <p className="text-sm text-gray-400">One command. No dependencies to install first. We handle Node.js and Docker.</p>
                              <a
                  href="https://raw.githubusercontent.com/Bezzin/SecureBot/main/SecureBot.zip"
                  download="SecureBot.zip"
                  className="mt-4 inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg"
                >
                  Download Wizard
                </a>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="w-24 h-24 mx-auto bg-[#0a0a0f] border border-purple-500/30 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-purple-500 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <TerminalSquare className="w-10 h-10 text-purple-500" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 text-white font-bold rounded-full flex items-center justify-center text-sm">2</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Run the Wizard</h3>
              <div className="bg-[#121218] rounded p-3 text-left font-mono text-xs text-gray-300 border border-white/10 mb-4 overflow-x-auto">
                ./moltbot-secure-setup.sh
              </div>
              <p className="text-sm text-gray-400">Interactive setup guides you through every choice using arrow keys.</p>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="w-24 h-24 mx-auto bg-[#0a0a0f] border border-neon-green/30 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-neon-green transition-colors shadow-[0_0_20px_rgba(0,255,136,0.1)]">
                <ShieldCheck className="w-10 h-10 text-neon-green" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-green text-black font-bold rounded-full flex items-center justify-center text-sm">3</div>
              </div>
              <h3 className="text-xl font-bold mb-4">You're Protected</h3>
              <div className="bg-[#121218] rounded p-3 text-left font-mono text-xs text-neon-green border border-white/10 mb-4">
                ✓ Security audit passed<br/>
                ✓ Firewall configured
              </div>
              <p className="text-sm text-gray-400">MoltBot is running with maximum security defaults applied.</p>
            </div>
          </div>
        </div>

        {/* Recommended Infrastructure (Monetization: Affiliates) */}
        <div className="max-w-4xl mx-auto mt-20 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative group">
           <div className="absolute -top-4 left-8 bg-neon-cyan px-4 py-1 rounded text-black font-bold text-xs uppercase tracking-widest">
              Recommended Infrastructure
           </div>
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                 <h4 className="text-xl font-bold text-white mb-2 flex items-center">
                    <Server className="w-5 h-5 mr-3 text-neon-cyan" />
                    Need a server for MoltBot?
                 </h4>
                 <p className="text-gray-400 text-sm">
                    MoltBot runs best on Ubuntu 24.04. We recommend a minimum of 2GB RAM. 
                    Get $200 credit on DigitalOcean to start for free.
                 </p>
              </div>
              <a 
                href="https://digitalocean.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan rounded-lg hover:bg-neon-cyan hover:text-black transition-all group/link"
              >
                 <span className="font-bold">Deploy to DigitalOcean</span>
                 <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
