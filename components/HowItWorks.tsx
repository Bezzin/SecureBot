import React from 'react';
import { Download, TerminalSquare, ShieldCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="install" className="py-24 bg-[#050508] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Secure in Three Steps</h2>
          <p className="text-gray-400">From zero to secure AI assistant in under 5 minutes.</p>
        </div>

        <div className="relative">
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
                curl -O https://securebot.setup/install.sh
              </div>
              <p className="text-sm text-gray-400">One command. No dependencies to install first. We handle Node.js and Docker.</p>
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
      </div>
    </section>
  );
};

export default HowItWorks;