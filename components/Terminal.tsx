import React, { useState, useEffect, useRef } from 'react';
import type { TerminalLine } from '../types.ts';

const lines: TerminalLine[] = [
  { text: "curl -fsSL https://securebot.setup/install.sh | bash", color: "text-neon-pink", delay: 0 },
  { text: "🦞 MoltBot Secure Setup Wizard initializing...", color: "text-white", delay: 800 },
  { text: "✓ Node.js 22 installed", color: "text-neon-green", delay: 1500 },
  { text: "✓ Docker configured", color: "text-neon-green", delay: 2000 },
  { text: "✓ Firewall enabled (SSH only)", color: "text-neon-green", delay: 2400 },
  { text: "✓ Tailscale connected", color: "text-neon-green", delay: 2800 },
  { text: "✓ MoltBot installed", color: "text-neon-green", delay: 3200 },
  { text: "✓ Sandbox mode: MAXIMUM", color: "text-neon-cyan", delay: 3600 },
  { text: "✓ Gateway token generated", color: "text-neon-green", delay: 4000 },
  { text: "", color: "text-white", delay: 4200 },
  { text: "🔒 Security Audit: PASSED", color: "text-neon-cyan", delay: 4500 },
  { text: "", color: "text-white", delay: 4600 },
  { text: "Your MoltBot is ready at http://127.0.0.1:18789", color: "text-white", delay: 4800 },
];

const Terminal: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    // Reset logic
    setVisibleLines([]);
    
    // Play sequence
    lines.forEach((line) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, line.delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []); // Empty dependency array means it runs once.

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0f0f16] rounded-lg border border-white/10 shadow-2xl overflow-hidden font-mono text-sm md:text-base relative group">
      {/* Window Controls */}
      <div className="bg-[#1a1a24] px-4 py-2 flex items-center space-x-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <div className="ml-4 text-xs text-gray-500 flex-1 text-center font-sans">bash — 80x24</div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={scrollRef}
        className="p-6 h-[400px] overflow-y-auto custom-scrollbar flex flex-col space-y-1"
      >
        {visibleLines.map((line, index) => (
          <div key={index} className={`${line.color} whitespace-pre-wrap break-all`}>
             {line.text === "✓ Sandbox mode: MAXIMUM" ? (
                 <span>✓ Sandbox mode: <span className="font-bold border border-neon-cyan px-1 bg-neon-cyan/10">MAXIMUM</span></span>
             ) : (
                line.text
             )}
          </div>
        ))}
        <div className="flex items-center text-neon-pink">
          <span className="mr-2">➜</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
      
      {/* Reflection effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Terminal;