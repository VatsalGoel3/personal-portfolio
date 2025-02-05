'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function TerminalWindow({ title, children, id, className }: TerminalWindowProps) {
  return (
    <motion.div 
      id={id}
      className={`bg-gray-900 rounded-lg overflow-hidden border border-gray-700 ${className ?? ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-gray-400 text-sm font-mono">~/vatsal/{title}</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-gray-300">
        {children}
      </div>

      {/* Scan Lines Effect */}
      <div className="absolute inset-0 pointer-events-none bg-scan-lines opacity-5" />
    </motion.div>
  );
} 