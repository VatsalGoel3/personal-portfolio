'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const loadingLines = [
    'INITIALIZING CLOUD PROTOCOLS...',
    'SECURING PERIMETER WITH KUBERNETES...',
    'AUTOMATING ALL THE THINGS...',
    'DEPLOYING DISTRIBUTED AWESOMENESS...',
    'COMPILING PORTFOLIO V2.0...',
    'READY TO INNOVATE! 🚀'
  ];

  useEffect(() => {
    const typeWriter = (text: string, index: number) => {
      if (index < text.length) {
        setLoadingText((prev) => prev + text.charAt(index));
        setTimeout(() => typeWriter(text, index + 1), 25);
      } else if (currentLine < loadingLines.length - 1) {
        setTimeout(() => {
          setLoadingText('');
          setCurrentLine(prev => prev + 1);
        }, 400);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete();
        }, 600);
      }
    };

    typeWriter(loadingLines[currentLine], 0);

    const maxLoadingTime = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, 5000);

    return () => {
      clearTimeout(maxLoadingTime);
    };
  }, [currentLine, onLoadingComplete]);

  if (!isLoading) return null;

  const progress = (currentLine / loadingLines.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
        style={{
          background: 'radial-gradient(circle, #000000 0%, #111111 100%)',
        }}
      >
        <div className="relative max-w-2xl w-full">
          {/* CRT Screen Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full animate-scan" />
          </div>

          {/* Monitor Frame */}
          <div className="bg-gray-800 rounded-lg p-8 border-8 border-gray-700 shadow-2xl">
            {/* Screen Content */}
            <div className="bg-black p-6 rounded font-mono relative overflow-hidden">
              {/* Scan Lines */}
              <div className="absolute inset-0 pointer-events-none bg-scan-lines opacity-10" />
              
              {/* Monitor Glare */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />

              {/* Content */}
              <div className="relative">
                <div className="text-[#33ff33] text-lg">
                  {loadingLines.slice(0, currentLine).map((line, index) => (
                    <div key={index} className="mb-2 pixel-font">{line}</div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="pixel-font"
                  >
                    {loadingText}
                    <motion.span
                      animate={{ opacity: [0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                      className="inline-block w-3 h-5 bg-[#33ff33] ml-1"
                    />
                  </motion.div>
                </div>

                {/* 8-bit Progress Bar */}
                <div className="mt-8 mb-2 text-[#33ff33] text-sm pixel-font">
                  LOADING PROGRESS:
                </div>
                <div className="h-6 bg-[#001100] border-2 border-[#33ff33] p-1">
                  <div 
                    className="h-full bg-[#33ff33] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  >
                    {Array.from({ length: Math.floor(progress / 10) }).map((_, i) => (
                      <div 
                        key={i}
                        className="inline-block h-full w-2 bg-[#001100] mx-px"
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-2 text-[#33ff33] text-sm pixel-font text-right">
                  {Math.round(progress)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 