'use client';

import { motion, AnimatePresence } from 'framer-motion';
import TerminalWindow from '@/components/TerminalWindow';
import TerminalText from '@/components/TerminalText';
import { FaGithub, FaBook, FaGlobe } from 'react-icons/fa';
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
  caseStudyUrl?: string;
  githubUrl?: string;
  category: string;
  tags: ProjectTag[];
  referenceUrl?: string;
}

const projects: Project[] = [
  {
    title: "i4 Ops Infrastructure Security",
    description: "Founding-engineer work on zero-exfiltration infrastructure security for AI-era data risk. This portfolio intentionally keeps company architecture, customer context, and operational details private.",
    image: "/projects/i4-zero-exfiltration.svg",
    caseStudyUrl: "/projects/i4-ops-infrastructure-security",
    category: "Cybersecurity Infrastructure",
    tags: [
      { name: "Go", icon: "Go" },
      { name: "Python", icon: "Python" },
      { name: "Security", icon: "Security" },
      { name: "AWS", icon: "AWS" }
    ]
  },
  {
    title: "Dynamic Queue Adaptation",
    description: "Offline Python prototype for intent-aware music recommendation. It tests whether manual queue insertions can improve short-term ranking versus a static seed-only baseline, with deterministic artifacts and evaluation plots committed for reproducibility.",
    image: "/projects/dynamic-queue-adaptation.svg",
    caseStudyUrl: "/projects/dynamic-queue-adaptation",
    githubUrl: "https://github.com/VatsalGoel3/dynamic-queue-adaptation",
    category: "Recommender Systems",
    tags: [
      { name: "Python", icon: "Python" },
      { name: "Machine Learning", icon: "Machine Learning" },
      { name: "Ranking", icon: "AI" },
      { name: "Validation", icon: "Validation" }
    ]
  },
  {
    title: "AWS Powertools (TypeScript)",
    description: "Implemented JSON Schema validation utilities including a @validator decorator, recognized as a major contributor across 3+ public releases through review with AWS maintainers.",
    image: "/projects/aws-powertools-ts.png",
    githubUrl: "https://github.com/awslabs/aws-lambda-powertools-typescript",
    category: "Open Source",
    tags: [
      { name: "AWS", icon: "AWS" },
      { name: "Middy.js", icon: "Middleware" },
      { name: "Schema Validation", icon: "Validation" }
    ]
  },
  {
    title: "AWS Powertools (Python)",
    description: "Delivered 4+ production-ready schema utilities including AppSync/WebSocket event parsing and recursive DataMasking with 100% test coverage across 40+ unit tests.",
    image: "/projects/aws-powertools-py.png",
    githubUrl: "https://github.com/awslabs/aws-lambda-powertools-python",
    category: "Open Source",
    tags: [
      { name: "Python", icon: "Python" },
      { name: "Pydantic", icon: "Pydantic" },
      { name: "AWS", icon: "AWS" },
      { name: "AppSync", icon: "AppSync" },
      { name: "WebSocket", icon: "WebSocket" }
    ]
  },
  {
    title: "OpenTelemetry Go SDK",
    description: "CNCF OpenTelemetry Go work focused on distributed tracing and production observability patterns in public open-source telemetry infrastructure.",
    image: "/projects/opentelemetry-go.svg",
    caseStudyUrl: "/projects/opentelemetry-go-sdk",
    githubUrl: "https://github.com/open-telemetry/opentelemetry-go",
    category: "Open Source",
    tags: [
      { name: "Go", icon: "Go" },
      { name: "OpenTelemetry", icon: "OpenTelemetry" },
      { name: "Distributed Tracing", icon: "Tracing" },
      { name: "CNCF", icon: "Server" }
    ]
  },
  {
    title: "Digital Preservation Automation",
    description: "University of Utah data engineering workflows that reduced manual verification by 70% while maintaining 99.9% accuracy across 1M+ archival records through Python and Bash validation pipelines.",
    image: "/projects/digital-preservation.svg",
    category: "Data Engineering",
    tags: [
      { name: "Python", icon: "Python" },
      { name: "Automation", icon: "Automation" },
      { name: "Data Processing", icon: "Machine Learning" },
      { name: "Validation", icon: "Validation" }
    ]
  },
  {
    title: "DNS Server",
    description: "Built a recursive DNS resolver supporting AAAA & CNAME queries with 98% resolution accuracy. Improved response time by 35% using an in-memory LRU cache and optimized query delegation across DNS hierarchy.",
    image: "/projects/dns-server.jpg",
    githubUrl: "https://github.com/VatsalGoel3/dns-server-python",
    category: "System Design",
    tags: [
      { name: "Python", icon: "Python" },
      { name: "Socket Programming", icon: "Networking" },
      { name: "Caching", icon: "Caching" }
    ]
  },
  {
    title: "Raft Key-Value Store",
    description: "Built fault-tolerant distributed key-value store using Raft consensus, including leader election, log replication, and state-machine execution that resolved 95% of partition scenarios.",
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
            <TerminalText text="ls -la ~/projects" className="mb-4 text-sm opacity-80 hover:opacity-100 transition-opacity" />
            <div className="px-6 pb-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-3">Projects</h1>
                <p className="text-gray-400 text-lg">
                  A collection of my work in software development and system design
                </p>
              </motion.div>
            </div>
          </TerminalWindow>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <TerminalWindow title={`${project.title.toLowerCase()}.sh`} id={project.title.toLowerCase().replace(/\s+/g, '-')}> 
                    <TerminalText text={`cat ${project.title.toLowerCase()}_details.md`} className="mb-4 text-sm opacity-80 hover:opacity-100 transition-opacity" />
                    <div className="p-6" id={project.title.toLowerCase().replace(/\s+/g, '-')}> 
                      <div className="grid md:grid-cols-2 gap-8">

                        {/* Project Image */}
                        <div className="relative h-72 rounded-xl overflow-hidden bg-gray-800">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain object-center hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            quality={95}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/projects/placeholder.svg";
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
                                <span key={tag.name} className="flex items-center gap-1.5 px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full">
                                  {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
                                  {tag.name}
                                </span>
                              );
                            })}
                          </div>

                          {/* Links */}
                          <div className="flex flex-wrap gap-4">
                            {project.caseStudyUrl && (
                              <a href={project.caseStudyUrl} className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                                <FaBook className="w-5 h-5" aria-hidden="true" />
                                Read Case Study
                              </a>
                            )}
                            {project.githubUrl && (
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                                <FaGithub className="w-5 h-5" aria-hidden="true" />
                                View on GitHub
                              </a>
                            )}
                            {project.referenceUrl && (
                              <a href={project.referenceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                                {project.title.includes("Raft") ? (
                                  <>
                                    <FaBook className="w-5 h-5" aria-hidden="true" />
                                    View Reference Paper
                                  </>
                                ) : (
                                  <>
                                    <FaGlobe className="w-5 h-5" aria-hidden="true" />
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
