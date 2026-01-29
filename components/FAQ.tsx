import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../types.ts';

const faqData: FaqItem[] = [
  {
    question: "Is this official MoltBot software?",
    answer: "This is a community project that automates secure installation of the official MoltBot. We follow all security best practices from MoltBot's documentation."
  },
  {
    question: "Why should I trust this script?",
    answer: "The entire script is open source. Read every line before running. We encourage security review. No telemetry, no tracking, no funny business."
  },
  {
    question: "What if I want to change settings later?",
    answer: "Everything is stored in ~/.moltbot/moltbot.json. Edit anytime or re-run the wizard to reconfigure."
  },
  {
    question: "Does this work on Windows?",
    answer: "Not directly. Use WSL2 (Windows Subsystem for Linux) with Ubuntu, then run the wizard inside WSL for the best experience."
  },
  {
    question: "How much does MoltBot cost to run?",
    answer: "MoltBot itself is free. You pay for AI tokens. With Kimi K2.5 via OpenRouter, expect $10-30/month for light use, which is significantly cheaper than major competitors."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-[#08080c]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-display text-4xl font-bold mb-12 text-center">Questions? We've Got Answers.</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-white/10 rounded-lg bg-[#121218] overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg text-gray-200">{item.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;