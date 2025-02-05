'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconMap, IconName } from '@/utils/icons';

interface ProjectTag {
  name: string;
  icon: IconName;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  tags: ProjectTag[];
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <Link href={`/projects#${title.toLowerCase().replace(/\s+/g, '-')}`} className="group relative block bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          quality={95}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/projects/placeholder.jpg";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => {
            const Icon = IconMap[tag.icon];
            return (
              <span
                key={tag.name}
                className="flex items-center gap-1.5 px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full"
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {tag.name}
              </span>
            );
          })}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/20 rounded-xl transition-colors duration-300" />
    </Link>
  );
} 