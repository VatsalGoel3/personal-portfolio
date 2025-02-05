'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TerminalTextProps {
  text: string;
  className?: string;
  prefix?: string;
  typingSpeed?: number;
  showCursor?: boolean;
}

export default function TerminalText({ 
  text, 
  className = "", 
  prefix = "$",
  typingSpeed = 50,
  showCursor = true 
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    if (isTyping) {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }
  }, [text, typingSpeed, isTyping]);

  return (
    <div className={`font-mono ${className}`}>
      <div className="flex items-center space-x-2">
        <span className="text-emerald-500">{prefix}</span>
        <span>{displayedText}</span>
        {showCursor && (
          <motion.span
            className="w-2 h-4 bg-emerald-500"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </div>
    </div>
  );
} 