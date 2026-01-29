
import React from 'react';
import { Check, Shield, Zap, Globe } from 'lucide-react';

const SecurityTable: React.FC = () => {
  return (
    <section id="security" className="py-24 px-6 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From DIY manual configuration to our fully-managed, zero-maintenance cloud environment.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0a0a0f] shadow-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 text-left text-gray-500 font-normal">Features & Support</th>
                <th className="p-6 text-center min-w-[180px]">
                  <div className="flex flex-col items-center">
                    <span className="text-gray-400 font-bold text-lg mb-1">Standard</span>
                    <span className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded uppercase tracking-widest">Self-Hosted</span>
                  </div>
                </th>
                <th className="p-6 text-center min-w-[180px] bg-neon-cyan/5 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-cyan text-black font-bold text-[10px] px-3 py-1 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] uppercase tracking-tighter">
                    Most Popular
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-neon-cyan font-bold text-lg mb-1 flex items-center">
                        <Shield className="w-4 h-4 mr-2" /> Hardened
                    </span>
                    <span className="text-[10px] bg-neon-cyan/20 text-neon-cyan px-2 py-0.5 rounded uppercase tracking-widest">Self-Hosted</span>
                  </div>
                </th>
                <th className="p-6 text-center min-w-[180px] border-l border-white/5">
                  <div className="flex flex-col items-center">
                    <span className="text-neon-pink font-bold text-lg mb-1 flex items-center">
                        <Zap className="w-4 h-4 mr-2" /> Cloud
                    </span>
                    <span className="text-[10px] bg-neon-pink/20 text-neon-pink px-2 py-0.5 rounded uppercase tracking-widest">Managed</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {[
                { name: 'Automated Setup', std: 'Full Script', hard: 'Full Script', cloud: 'Instant' },
                { name: 'Firewall Config', std: 'Manual', hard: 'Auto-Hardened', cloud: 'Isolated VPC' },
                { name: 'Docker Sandbox', std: 'Optional', hard: 'Mandatory', cloud: 'gVisor Isolation' },
                { name: 'VPN Integration', std: 'None', hard: 'Tailscale Ready', cloud: 'Built-in Wireguard' },
                { name: 'Updates & Patches', std: 'Manual', hard: 'Manual', cloud: 'Automatic' },
                { name: 'Concierge Support', std: 'Community', hard: 'Discord', cloud: '24/7 Priority' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-gray-300">{row.name}</td>
                  <td className="p-6 text-center text-gray-500">{row.std}</td>
                  <td className="p-6 text-center text-neon-cyan bg-neon-cyan/5 font-medium">{row.hard}</td>
                  <td className="p-6 text-center text-neon-pink font-medium">{row.cloud}</td>
                </tr>
              ))}
              <tr className="border-b border-transparent">
                <td className="p-6 font-medium text-gray-300">Cost</td>
                <td className="p-6 text-center text-lg font-bold text-white">$0</td>
                <td className="p-6 text-center text-lg font-bold text-neon-cyan bg-neon-cyan/5">$0</td>
                <td className="p-6 text-center text-lg font-bold text-neon-pink">$19<span className="text-xs font-normal text-gray-500">/mo</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
           <button className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors">
              Continue with Free Setup
           </button>
           <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-neon-pink to-purple-600 text-white font-bold rounded-lg shadow-[0_0_25px_rgba(255,0,170,0.3)] hover:scale-105 transition-all">
              Launch Managed Cloud Instance
           </button>
        </div>
      </div>
    </section>
  );
};

export default SecurityTable;
