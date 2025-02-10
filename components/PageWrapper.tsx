'use client';

import { useEffect } from 'react';

export default function PageWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.removeAttribute('data-new-gr-c-s-check-loaded');
      body.removeAttribute('data-gr-ext-installed');
    }
  }, []);

  return <>{children}</>;
} 