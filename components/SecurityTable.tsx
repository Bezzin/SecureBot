import React from 'react';
import { Check, Minus, AlertTriangle } from 'lucide-react';

const SecurityTable: React.FC = () => {
  return (
    <section id="security" className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Choose Your Security Level</h2>
          <p className="text-gray-400">The wizard lets you select the balance between convenience and protection.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-left text-gray-500 font-normal">Feature</th>
                <th className="p-4 text-center min-w-[150px]">
                  <div className="flex flex-col items-center">
                    <span className="text-neon-cyan font-bold text-lg flex items-center">
                        🔒 Maximum
                    </span>
                    <span className="text-[10px] bg-neon-cyan/20 text-neon-cyan px-2 py-0.5 rounded mt-1">RECOMMENDED</span>
                  </div>
                </th>
                <th className="p-4 text-center min-w-[150px] text-gray-300 font-bold text-lg">⚖️ Balanced</th>
                <th className="p-4 text-center min-w-[150px] text-gray-400 font-bold text-lg">⚠️ Minimal</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {[
                { name: 'Sandboxing', max: 'All tools', bal: 'Non-main sessions', min: 'Disabled' },
                { name: 'File Access', max: 'Read-only', bal: 'Read/Write', min: 'Full Root' },
                { name: 'Browser Control', max: 'Disabled', bal: 'Disabled', min: 'Enabled' },
                { name: 'Elevated Tools', max: 'Blocked', bal: 'Blocked', min: 'Allowed' },
                { name: 'Network Access', max: 'Whitelist Only', bal: 'Public', min: 'Unrestricted' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-medium text-gray-300">{row.name}</td>
                  <td className="p-4 text-center text-neon-cyan bg-neon-cyan/5 font-medium">{row.max}</td>
                  <td className="p-4 text-center text-gray-300">{row.bal}</td>
                  <td className="p-4 text-center text-gray-500">{row.min}</td>
                </tr>
              ))}
              <tr className="border-b border-transparent">
                <td className="p-4 font-medium text-gray-300">Best For</td>
                <td className="p-4 text-center text-sm text-gray-400 bg-neon-cyan/5">Most Users</td>
                <td className="p-4 text-center text-sm text-gray-400">Power Users</td>
                <td className="p-4 text-center text-sm text-gray-400">Testing Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SecurityTable;