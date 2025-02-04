'use client';

import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="relative w-96 h-96 rounded-full border-4 border-emerald-500 overflow-hidden">
      <Image
        src="/profile.jpg"
        alt="Profile"
        fill
        className="object-cover hover:scale-110 transition-transform duration-300"
        priority
        sizes="(max-width: 768px) 100vw, 384px"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://via.placeholder.com/400";
        }}
      />
    </div>
  );
} 