'use client';

import Image from 'next/image';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = "w-96 h-96" }: ProfileImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/profile.jpg"
        alt="Vatsal Goel"
        fill
        className="rounded-full object-cover shadow-2xl"
        priority
      />
    </div>
  );
} 