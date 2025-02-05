'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function ClientLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if the page is being loaded for the first time
    const handleBeforeUnload = () => {
      setIsFirstLoad(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Hide loading screen after 3 seconds maximum
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Changed from 5000 to 3000

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isFirstLoad && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <div 
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
} 