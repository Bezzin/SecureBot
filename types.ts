import React from 'react';

export interface TerminalLine {
  text: string;
  color?: 'text-neon-green' | 'text-neon-cyan' | 'text-neon-pink' | 'text-white' | 'text-gray-400';
  delay?: number;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'cyan' | 'pink' | 'green';
}

export interface FaqItem {
  question: string;
  answer: string;
}