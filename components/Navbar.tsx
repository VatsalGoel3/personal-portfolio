'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLogo from './NavLogo';
import { logEvent } from 'firebase/analytics';
import { getFirebaseAnalytics } from '@/utils/firebase';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handler for logging a resume click event
  const handleResumeClick = async () => {
    const analytics = await getFirebaseAnalytics();
    if (analytics) {
      logEvent(analytics, "resume_click", {
        page_path: window.location.pathname,
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLogo />
          
          {/* Desktop Menu */}
          <div className={`hidden sm:flex items-center space-x-8 transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <Link 
              href="/projects" 
              className="text-lg font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/experience" 
              className="text-lg font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experience
            </Link>
            <Link 
              href="/contact" 
              className="text-lg font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
            <a 
              href="/Vatsal_Goel_Resume.pdf" 
              className="px-5 py-2.5 rounded-full bg-emerald-600 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`sm:hidden p-2 transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/projects"
              className="block px-3 py-2 text-lg font-semibold text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="block px-3 py-2 text-lg font-semibold text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-lg font-semibold text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="/Vatsal_Goel_Resume.pdf"
              className="block px-3 py-2 text-lg font-semibold text-emerald-500 hover:text-emerald-400"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsMenuOpen(false);
                handleResumeClick();
              }}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
