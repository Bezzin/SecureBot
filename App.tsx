import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProblemSolution from './components/ProblemSolution.tsx';
import Features from './components/Features.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import SecurityTable from './components/SecurityTable.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/10 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-pink/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar isScrolled={isScrolled} />
        <main>
          <Hero />
          <ProblemSolution />
          <Features />
          <HowItWorks />
          <SecurityTable />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;