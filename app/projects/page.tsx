'use client';

import { motion, AnimatePresence } from 'framer-motion';
import TerminalWindow from '@/components/TerminalWindow';
import TerminalText from '@/components/TerminalText';
// Removed unused imports: FaCode, FaServer, FaDatabase
import { FaGithub, FaLinkedin, FaBook, FaGlobe } from 'react-icons/fa';
import { IconName, IconMap } from '@/utils/icons';
import Image from 'next/image';

interface ProjectTag {
  name: string;
  icon: IconName;
}

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  category: string;
  tags: ProjectTag[];
  referenceUrl?: string;
}

const projects: Project[] = [
  {
    title: "CineMatch",
    description: "Movie recommendation system using collaborative filtering and sentiment analysis to provide personalized movie suggestions.",
    image: "/projects/cinematch.jpg",
    githubUrl: "https://github.com/VatsalGoel3/CineMatch",
    category: "Machine Learning",
    tags: [
      { name: "Flask", icon: "Flask" },
      { name: "React", icon: "React" },
      { name: "MySQL", icon: "MySQL" },
      { name: "Python", icon: "Python" },
      { name: "Machine Learning", icon: "Machine Learning" }
    ]
  },
  {
    title: "DNS Server",
    description: "Custom DNS server implementation with recursive query support and optimized caching, handling 5K queries per second.",
    image: "/projects/dns-server.jpg",
    githubUrl: "https://github.com/VatsalGoel3/dns-server-python",
    category: "System Design",
    tags: [
      { name: "Python", icon: "Python" },
      { name: "Networking", icon: "Networking" },
      { name: "RFC Standards", icon: "RFC" },
      { name: "Caching", icon: "Caching" }
    ]
  },
  {
    title: "To-Do List",
    description: "A simple and functional to-do list application built with ReactJS, showcasing the essential features of a task management tool while exploring React&apos;s core capabilities.",
    image: "/projects/reactjs-todolist.jpg",
    githubUrl: "https://github.com/VatsalGoel3/reactjs-todolist",
    category: "Web Development",
    tags: [
      { name: "React", icon: "React" },
      { name: "JavaScript", icon: "JavaScript" },
      { name: "CSS", icon: "CSS" },
      { name: "HTML", icon: "HTML" }
    ],
    referenceUrl: "https://vt-reactjs-todolist.netlify.app"
  },
  {
    title: "Cosmos Daily",
    description: "A ReactJS-based web application that integrates with NASA&apos;s API to showcase daily astronomical images, space discoveries, and celestial events.",
    image: "/projects/reactjs-nasa-api-app.jpg",
    githubUrl: "https://github.com/VatsalGoel3/reactjs-nasa-api-app",
    category: "Web Development",
    tags: [
      { name: "React", icon: "React" },
      { name: "API Integration", icon: "API" },
      { name: "JavaScript", icon: "JavaScript" },
      { name: "CSS", icon: "CSS" }
    ],
    referenceUrl: "https://vt-reactjs-cosmos-daily.netlify.app"
  },
  {
    title: "Raft Key-Value Store",
    description: "Distributed key-value store using Raft consensus protocol for fault tolerance and consistent data replication.",
    image: "/projects/raft-kv.jpg",
    category: "System Design",
    referenceUrl: "https://pdos.csail.mit.edu/6.824/papers/raft-extended.pdf",
    tags: [
      { name: "Go", icon: "Go" },
      { name: "Distributed Systems", icon: "Distributed Systems" },
      { name: "Raft", icon: "Raft" },
      { name: "Consensus", icon: "Consensus" }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      <section className="relative min-h-screen bg-[#0a192f]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_2px,transparent_1px),linear-gradient(to_bottom,#ffffff05_2px,transparent_1px)] bg-[size:24px_24px] bg-fixed" />
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <TerminalWindow title="projects.sh" className="mb-8">
            <TerminalText 
              text="ls -la ~/projects" 
              className="mb-4 text-sm opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="px-6 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl font-bold text-white mb-3">Projects</h1>
                <p className="text-gray-400 text-lg">
                  A collection of my work in software development and system design
                </p>
              </motion.div>
            </div>
          </TerminalWindow>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8">
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TerminalWindow title={`${project.title.toLowerCase()}.sh`} id={project.title.toLowerCase().replace(/\s+/g, '-')} >
                    <TerminalText 
                      text={`cat ${project.title.toLowerCase()}_details.md`}
                      className="mb-4 text-sm opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <div className="p-6" id={project.title.toLowerCase().replace(/\s+/g, '-')}>
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Project Image */}
                        <div className="relative h-64 rounded-xl overflow-hidden bg-gray-800">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-center hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            quality={95}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/projects/placeholder.jpg";
                            }}
                          />
                        </div>

                        {/* Project Details */}
                        <div className="space-y-4">
                          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                          <p className="text-gray-400">{project.description}</p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => {
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

                          {/* Links */}
                          <div className="flex flex-wrap gap-4">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                              >
                                <FaGithub className="w-5 h-5" />
                                View on GitHub
                              </a>
                            )}
                            {project.referenceUrl && (
                              <a
                                href={project.referenceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                              >
                                {project.title === "Raft Key-Value Store" ? (
                                  <>
                                    <FaBook className="w-5 h-5" />
                                    View Reference Paper
                                  </>
                                ) : (
                                  <>
                                    <FaGlobe className="w-5 h-5" />
                                    View Live Demo
                                  </>
                                )}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TerminalWindow>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
