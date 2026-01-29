import React, { useState, useEffect, useRef } from 'react';
import { Shield, Box, Lock, Network, Key, Bot, MessageCircle, Check, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const [securityLevel, setSecurityLevel] = useState<'max' | 'balanced' | 'min'>('max');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // For Auto Tokens randomization
  const [tokenChars, setTokenChars] = useState<string[]>(['a', 'X', '7', '$', 'k', 'L', '9', '#']);
  const chars = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&*';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const cards = document.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              (card as HTMLElement).style.transitionDelay = `${index * 100}ms`;
              card.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Token Randomizer Logic
    const interval = setInterval(() => {
      setTokenChars(prev => prev.map(char => 
        Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char
      ));
    }, 100);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const getRotation = () => {
    switch (securityLevel) {
      case 'max': return '-60deg';
      case 'balanced': return '0deg';
      case 'min': return '60deg';
      default: return '-60deg';
    }
  };

  return (
    <section ref={sectionRef} id="features" className="py-24 px-4 md:px-6 relative overflow-hidden bg-[#0a0a0f]">
      <style>{`
        .feature-card {
          background: linear-gradient(135deg, rgba(20, 20, 35, 0.6), rgba(15, 15, 25, 0.8));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(30px);
        }
        .feature-card.visible { opacity: 1; transform: translateY(0); }
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 240, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 240, 255, 0.1);
        }
        .gradient-text {
          background: linear-gradient(135deg, #00f0ff, #ff00aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Docker Containment */
        .containment-box {
          background: linear-gradient(135deg, rgba(255, 50, 50, 0.1), rgba(255, 100, 50, 0.05));
          border: 2px solid rgba(255, 80, 80, 0.4);
          box-shadow: 0 0 30px rgba(255, 80, 80, 0.2), inset 0 0 30px rgba(255, 80, 80, 0.1);
          animation: pulse-danger 2s ease-in-out infinite;
        }
        @keyframes pulse-danger {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 80, 80, 0.2), inset 0 0 20px rgba(255, 80, 80, 0.1); }
          50% { box-shadow: 0 0 30px rgba(255, 80, 80, 0.3), inset 0 0 30px rgba(255, 80, 80, 0.15); }
        }
        .scan-line {
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #ff6b6b, transparent);
          animation: scan 2s linear infinite;
        }
        @keyframes scan { 0% { top: 0; opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .energy-line {
          width: 2px; height: 100%;
          background: linear-gradient(to bottom, #ff6b6b, #00f0ff);
          animation: energy-flow 1s ease-in-out infinite;
          border-radius: 2px;
        }
        @keyframes energy-flow { 0%, 100% { transform: scaleY(0.3); opacity: 0.3; } 50% { transform: scaleY(1); opacity: 1; } }

        /* Firewall Animations */
        @keyframes attack {
          0% { transform: translateX(-20px); opacity: 0; }
          30% { transform: translateX(40px); opacity: 1; }
          50% { transform: translateX(60px); opacity: 1; }
          51% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes allow {
          0%, 40% { opacity: 0; transform: translateX(-10px); }
          60% { opacity: 1; transform: translateX(0); }
          100% { opacity: 1; transform: translateX(20px); }
        }
        @keyframes shield-pulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        /* Tailscale Tunnel */
        @keyframes tunnel-scroll { 0% { transform: translateX(-20px); } 100% { transform: translateX(0); } }
        @keyframes packet-travel {
          0% { left: 0; opacity: 0; transform: scale(0.5); }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; transform: scale(1); }
          100% { left: calc(100% - 10px); opacity: 0; transform: scale(0.5); }
        }

        /* Token Progress */
        @keyframes progress-fill {
          0% { width: 0; }
          50% { width: 100%; }
          51% { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
        .dial-needle {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: bottom center;
        }
      `}</style>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-4 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-4 tracking-wide">
            ⚡ Enterprise-grade protection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Security That <span className="gradient-text">Actually Makes Sense</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Six layers of protection, configured automatically in under 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: THREE SECURITY LEVELS */}
          <div className="feature-card col-span-1 md:col-span-2 lg:col-span-3 p-8 flex flex-col md:flex-row items-center md:items-start gap-8 group">
             <div className="flex-1 w-full z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/5 border border-neon-cyan/30 flex items-center justify-center mb-6 text-neon-cyan">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Three Security Levels</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Start locked down. Loosen only if you need to.
                  <span className="block mt-2 text-sm text-gray-500">
                    {securityLevel === 'max' && "✓ Full network isolation, read-only file system."}
                    {securityLevel === 'balanced' && "✓ Controlled access to specific folders."}
                    {securityLevel === 'min' && "⚠️ Full system access (not recommended)."}
                  </span>
                </p>
                <div className="flex space-x-2 bg-black/40 p-1 rounded-lg inline-flex border border-white/5">
                  {(['max', 'balanced', 'min'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setSecurityLevel(level)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        securityLevel === level 
                          ? 'bg-neon-cyan/20 text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]' 
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
             </div>
             <div className="relative w-64 h-40 flex items-end justify-center shrink-0 mt-4 md:mt-0">
                <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent rounded-full blur-2xl"></div>
                <div className="w-48 h-24 bg-[#0a0a0f] border-t-8 border-r-8 border-l-8 border-gray-800 rounded-t-full relative overflow-hidden">
                   <div className="absolute inset-0 opacity-30" style={{ background: 'conic-gradient(from 180deg, #00f0ff 0deg, #00f0ff 60deg, #a855f7 120deg, #ff00aa 180deg)' }}></div>
                </div>
                <div className="dial-needle absolute bottom-0 left-1/2 w-1.5 h-20 bg-gradient-to-t from-neon-pink to-neon-cyan rounded-full z-10 shadow-[0_0_15px_#00f0ff]" style={{ transform: `translateX(-50%) rotate(${getRotation()})` }}>
                  <div className="absolute -top-1 -left-1 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                </div>
                <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full z-20 border border-gray-500"></div>
                <div className="absolute -bottom-8 w-full flex justify-between px-2 text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                   <span className={securityLevel === 'max' ? 'text-neon-cyan' : ''}>Max</span>
                   <span className={securityLevel === 'balanced' ? 'text-purple-400' : ''}>Bal</span>
                   <span className={securityLevel === 'min' ? 'text-neon-pink' : ''}>Min</span>
                </div>
             </div>
          </div>

          {/* CARD 2: DOCKER SANDBOXING - REDESIGNED */}
          <div className="feature-card col-span-1 lg:col-span-1 p-6 flex flex-col group">
            <div className="h-44 relative mb-6 flex flex-col items-center justify-center">
              <div className="containment-box w-full relative rounded-xl p-4 font-mono text-xs overflow-hidden">
                <div className="scan-line"></div>
                <div className="relative z-10 text-[#ff6b6b]">
                  <span className="opacity-50 mr-1">$</span> rm -rf /*
                  <span className="animate-pulse ml-1">▊</span>
                </div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 80, 80, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 80, 80, 0.2) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
              </div>
              
              <div className="flex gap-2 my-3 h-6">
                <div className="energy-line" style={{ animationDelay: '0s' }}></div>
                <div className="energy-line" style={{ animationDelay: '0.2s' }}></div>
                <div className="energy-line" style={{ animationDelay: '0.4s' }}></div>
              </div>

              <div className="flex items-center gap-2 px-4 py-1.5 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full">
                <span className="text-neon-cyan text-lg leading-none">∅</span>
                <span className="text-neon-cyan text-[10px] font-bold uppercase tracking-widest">Contained</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Docker Sandboxing</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Complete isolation. Dangerous commands can't touch your host system.</p>
          </div>

          {/* CARD 3: FIREWALL CONFIG - REDESIGNED */}
          <div className="feature-card col-span-1 lg:col-span-1 p-6 flex flex-col group">
            <div className="h-44 relative mb-6 flex items-center justify-center overflow-hidden">
              {/* Attacks */}
              <div className="absolute left-0 w-1/3 h-full flex flex-col justify-around py-8">
                {[0, 0.5, 1].map((delay, i) => (
                  <div key={i} className="flex items-center" style={{ animation: `attack 2s ease-in-out infinite`, animationDelay: `${delay}s` }}>
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></div>
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-red-500"></div>
                    <span className="text-red-500 font-bold text-xs ml-1">✕</span>
                  </div>
                ))}
              </div>
              {/* Shield */}
              <div className="relative z-10">
                <div className="text-4xl filter drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">🛡️</div>
                <div className="absolute inset-[-8px] border-2 border-neon-cyan/30 rounded-full" style={{ animation: 'shield-pulse 2s ease-out infinite' }}></div>
              </div>
              {/* Allowed */}
              <div className="absolute right-0 w-1/4 h-full flex items-center">
                <div className="flex items-center" style={{ animation: 'allow 2s ease-in-out infinite', animationDelay: '0.3s' }}>
                  <div className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_8px_#00ff88]"></div>
                  <span className="text-neon-green font-bold text-xs ml-1">✓</span>
                  <span className="text-neon-green font-mono text-[8px] ml-1">:22</span>
                </div>
              </div>
            </div>
            <div className="bg-black/40 rounded-lg p-3 mb-4 space-y-1.5 border border-white/5">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-neon-green"></div> SSH (22)</div>
                <span className="text-neon-green font-bold">ALLOW</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono">
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> All others</div>
                <span className="text-red-500 font-bold">BLOCK</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Firewall Auto-Config</h3>
            <p className="text-sm text-gray-400">UFW hardened with Docker bypass fix automatically applied.</p>
          </div>

          {/* CARD 4: KIMI PRICING */}
          <div className="feature-card col-span-1 md:col-span-2 lg:col-span-2 p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
             <div className="relative z-10 flex-1">
                <div className="inline-flex items-center space-x-2 mb-2">
                   <Bot className="w-5 h-5 text-neon-pink" />
                   <span className="text-neon-pink font-mono text-sm font-bold tracking-wider uppercase">Value Choice</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Kimi K2.5 Configured</h3>
                <p className="text-gray-400 text-sm mb-4">Powerful 1T parameter model via OpenRouter.</p>
                <div className="inline-block px-3 py-1 rounded bg-neon-green/20 text-neon-green text-xs font-bold border border-neon-green/30">94% Cheaper than GPT-4</div>
             </div>
             <div className="relative z-10 w-full md:w-1/2 h-32 flex items-end justify-between px-4 pb-2 border-b border-white/10">
                <div className="w-[25%] group relative flex flex-col items-center justify-end h-full">
                   <span className="text-[10px] text-gray-500 mb-1 opacity-0 group-hover:opacity-100">$10.00</span>
                   <div className="w-full bg-gray-700/50 rounded-t-sm h-full group-hover:bg-gray-700"></div>
                   <span className="text-[10px] text-gray-500 mt-2 font-mono">GPT-4</span>
                </div>
                <div className="w-[25%] group relative flex flex-col items-center justify-end h-full">
                   <span className="text-[10px] text-gray-500 mb-1 opacity-0 group-hover:opacity-100">$3.00</span>
                   <div className="w-full bg-gray-700/50 rounded-t-sm h-[30%] group-hover:bg-gray-700"></div>
                   <span className="text-[10px] text-gray-500 mt-2 font-mono">Claude</span>
                </div>
                <div className="w-[25%] group relative flex flex-col items-center justify-end h-full">
                   <span className="text-xs text-neon-pink font-bold mb-1 -mt-6 absolute -top-4">$0.60</span>
                   <div className="w-full bg-neon-pink rounded-t-sm h-[6%] shadow-[0_0_15px_#ff00aa] transition-all duration-1000"></div>
                   <span className="text-[10px] text-neon-pink mt-2 font-bold font-mono">Kimi</span>
                </div>
             </div>
          </div>

          {/* CARD 5: AUTO TOKENS - REDESIGNED */}
          <div className="feature-card col-span-1 lg:col-span-1 p-6 flex flex-col group">
            <div className="h-44 flex flex-col items-center justify-center gap-4 mb-6">
              <div className="w-full bg-black/50 border border-orange-500/30 rounded-lg p-3 relative overflow-hidden">
                <div className="flex justify-center gap-1 font-mono text-lg font-bold text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">
                  {tokenChars.map((char, i) => (
                    <span key={i} className="inline-block transition-opacity duration-75">{char}</span>
                  ))}
                  <span className="opacity-50">...</span>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300" style={{ animation: 'progress-fill 2s ease-in-out infinite' }}></div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                <span className="text-lg">🔐</span>
                <span className="font-mono font-bold text-orange-500 text-xl">256</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold">bits</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-neon-green/10 border border-dashed border-neon-green/30 rounded">
                <span className="text-neon-green font-bold text-xs">✓</span>
                <span className="text-neon-green text-[10px] font-bold">Secure Gateway Generated</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Auto Tokens</h3>
            <p className="text-sm text-gray-400">Cryptographically secure 32-byte keys generated automatically.</p>
          </div>

          {/* CARD 6: TAILSCALE READY - REDESIGNED */}
          <div className="feature-card col-span-1 lg:col-span-1 p-6 flex flex-col group">
            <div className="h-44 flex flex-col justify-center gap-6 mb-6">
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">🌍</span>
                  <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Public Web</span>
                </div>
                <div className="flex-1 mx-4 h-8 relative flex items-center justify-center">
                   <div className="absolute inset-0 h-1 bg-neon-cyan/10 rounded overflow-hidden">
                      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0, 240, 255, 0.5) 10px, rgba(0, 240, 255, 0.5) 20px)', animation: 'tunnel-scroll 1s linear infinite' }}></div>
                   </div>
                   {[0, 0.5, 1].map((delay, i) => (
                      <div key={i} className="absolute w-2.5 h-2.5 bg-gradient-to-br from-neon-cyan to-neon-green rounded shadow-[0_0_12px_#00f0ff]" style={{ animation: 'packet-travel 2s ease-in-out infinite', animationDelay: `${delay}s` }}></div>
                   ))}
                   <div className="relative z-10 bg-[#1a1a2e] px-2 py-1 rounded border border-neon-cyan/40 text-sm shadow-[0_0_15px_rgba(0,240,255,0.2)]">🔒</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">🏠</span>
                  <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Your Bot</span>
                </div>
              </div>
              <div className="mx-auto flex items-center gap-3 px-4 py-2 bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg">
                <span className="text-xs">🔒</span>
                <span className="font-mono text-neon-cyan text-sm font-bold">100.x.x.x</span>
                <span className="text-[8px] bg-neon-green/20 text-neon-green px-1.5 py-0.5 rounded font-bold uppercase">Private</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Tailscale Ready</h3>
            <p className="text-sm text-gray-400">Secure encrypted tunnel. Access from anywhere with zero exposed ports.</p>
          </div>

          {/* CARD 7: CHAT INTEGRATION */}
          <div className="feature-card col-span-1 md:col-span-2 lg:col-span-3 p-8 flex flex-col md:flex-row items-center justify-between group">
             <div className="mb-6 md:mb-0 md:mr-8 flex-1">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                   <MessageCircle className="w-6 h-6 mr-3 text-green-400" />
                   Chat Integrations
                </h3>
                <p className="text-gray-400 text-sm">WhatsApp + Telegram with pairing-first security. Unknown numbers are blocked by default.</p>
             </div>
             <div className="flex space-x-4">
                <div className="bg-gray-800 rounded-2xl rounded-bl-none p-4 relative border border-white/5 shadow-lg max-w-[160px] transform group-hover:-translate-y-2 transition-transform duration-300">
                   <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-[10px] text-gray-500 uppercase">WhatsApp</span>
                   </div>
                   <div className="h-2 w-20 bg-gray-600 rounded mb-2"></div>
                   <div className="h-2 w-12 bg-gray-600 rounded"></div>
                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#151520]">
                      <Lock className="w-3 h-3 text-white" />
                   </div>
                </div>
                <div className="bg-neon-cyan/10 rounded-2xl rounded-br-none p-4 relative border border-neon-cyan/20 shadow-lg max-w-[160px] transform translate-y-4 group-hover:translate-y-2 transition-transform duration-300 delay-100">
                   <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
                      <span className="text-[10px] text-neon-cyan uppercase">Telegram</span>
                   </div>
                   <div className="h-2 w-24 bg-neon-cyan/30 rounded mb-2"></div>
                   <div className="h-2 w-16 bg-neon-cyan/30 rounded"></div>
                   <div className="absolute -top-2 -left-2 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center border-2 border-[#151520]">
                      <Check className="w-3 h-3 text-black" />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;