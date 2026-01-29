import React from 'react';
import { X, Check, ShieldAlert } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-black/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            MoltBot Is Amazing. <br/>
            <span className="text-red-500">Misconfigured MoltBot Is Dangerous.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bad Way */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-red-500/40 transition-colors">
             <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <ShieldAlert className="w-24 h-24 text-red-500" />
             </div>
             <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center">
                <X className="w-6 h-6 mr-2" /> WITHOUT This Wizard
             </h3>
             <ul className="space-y-4">
                {[
                  "Exposed admin ports to public internet",
                  "Plaintext API keys & credentials",
                  "Root access to host filesystem",
                  "No sandboxing for code execution",
                  "2+ hours of manual configuration",
                  "\"Hope for the best\" security strategy"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-400">
                    <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
             </ul>
          </div>

          {/* Good Way */}
          <div className="bg-neon-green/5 border border-neon-green/20 rounded-2xl p-8 relative overflow-hidden group hover:border-neon-green/40 transition-colors shadow-[0_0_50px_rgba(0,255,136,0.05)]">
             <h3 className="text-xl font-bold text-neon-green mb-6 flex items-center">
                <Check className="w-6 h-6 mr-2" /> WITH This Wizard
             </h3>
             <ul className="space-y-4">
                {[
                  "Firewall locked down (UFW + Docker fix)",
                  "Secure token authentication & storage",
                  "Containerized isolation for all tasks",
                  "Tailscale VPN integration by default",
                  "5 minutes automated setup",
                  "Full Security Audit included"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-200">
                    <Check className="w-5 h-5 text-neon-green mr-3 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="glass-card p-6 md:p-8 rounded-xl border-l-4 border-neon-cyan relative">
            <p className="text-lg md:text-xl text-gray-300 italic mb-4">
              "Security researchers found hundreds of MoltBot instances exposing unauthenticated admin ports... secrets stored in plaintext."
            </p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-neon-cyan text-sm">— BleepingComputer, January 2026</span>
              <div className="h-px bg-white/10 flex-1 ml-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;