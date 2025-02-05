'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function NavLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [randomChars, setRandomChars] = useState(['V', 'G']);
  const router = useRouter();
  const pathname = usePathname();
  
  // Matrix-style character randomization
  useEffect(() => {
    if (isHovered) {
      const chars = '01></[]{}=+-*';
      const interval = setInterval(() => {
        setRandomChars(prev => 
          prev.map((_, i) => 
            Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : (i === 0 ? 'V' : 'G')
          )
        );
      }, 50);
      
      return () => clearInterval(interval);
    } else {
      setRandomChars(['V', 'G']);
    }
  }, [isHovered]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // If already on home page, reload to trigger animations
      window.location.href = '/';
    } else {
      // Normal navigation for other pages
      router.push('/');
    }
  };

  return (
    (<Link href="/" onClick={handleClick} legacyBehavior>
      <motion.div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Terminal Window Effect */}
        <div className="flex items-center bg-gray-900 rounded-lg px-4 py-2 border border-emerald-500/30">
          {/* Command Prompt */}
          <span className="text-emerald-500 mr-2">$</span>
          
          {/* Animated Text */}
          <div className="flex space-x-1">
            {randomChars.map((char, index) => (
              <motion.span
                key={index}
                className="font-mono text-lg font-bold"
                style={{ 
                  color: isHovered ? '#4ade80' : '#fff',
                  textShadow: isHovered ? '0 0 8px rgba(74, 222, 128, 0.5)' : 'none'
                }}
                animate={{ 
                  y: isHovered ? [-1, 1] : 0,
                  scale: isHovered ? [0.95, 1.05] : 1
                }}
                transition={{ 
                  duration: 0.2,
                  repeat: isHovered ? Infinity : 0,
                  repeatType: "reverse"
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Blinking Cursor */}
          <motion.span
            className="w-2 h-4 bg-emerald-500 ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: isHovered 
              ? '0 0 20px rgba(74, 222, 128, 0.3)' 
              : '0 0 0px rgba(74, 222, 128, 0)'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>)
  );
} 