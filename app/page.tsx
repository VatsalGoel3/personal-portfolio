'use client';

import { 
  FaGithub, FaCode, FaServer, FaTools,
  FaPython, FaJava, FaJs, FaReact, FaAws, FaDocker, FaLinkedin, FaArrowRight
} from "react-icons/fa";
import { 
  SiTypescript, SiGo, SiKubernetes, 
  SiTerraform, SiFlask, SiMysql, SiFastapi, SiPydantic, SiC, SiPostgresql, SiRedis
} from "react-icons/si";
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import ProfileImage from '@/components/ProfileImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalText from '@/components/TerminalText';
import TerminalWindow from '@/components/TerminalWindow';
import { useEffect, useState } from 'react';
import { IconName } from "@/utils/icons";
import Link from "next/link";

const skills = {
  languages: [
    { name: "Python", icon: FaPython, level: "Advanced" },
    { name: "Go", icon: SiGo, level: "Advanced" },
    { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
    { name: "Java", icon: FaJava, level: "Intermediate" },
    { name: "SQL", icon: SiMysql, level: "Intermediate" },
    { name: "C", icon: SiC, level: "Intermediate" }
  ],
  frameworks: [
    { name: "FastAPI", icon: SiFastapi, level: "Advanced" },
    { name: "Flask", icon: SiFlask, level: "Advanced" },
    { name: "Node.js", icon: FaJs, level: "Advanced" },
    { name: "React", icon: FaReact, level: "Intermediate" },
    { name: "Pydantic", icon: SiPydantic, level: "Advanced" }
  ],
  tools: [
    { name: "AWS", icon: FaAws, level: "Advanced" },
    { name: "Docker", icon: FaDocker, level: "Advanced" },
    { name: "Kubernetes", icon: SiKubernetes, level: "Intermediate" },
    { name: "Terraform", icon: SiTerraform, level: "Intermediate" },
    { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
    { name: "Redis", icon: SiRedis, level: "Intermediate" },
    { name: "Git", icon: FaGithub, level: "Advanced" },
    { name: "CI/CD", icon: FaCode, level: "Advanced" }
  ]
};

const selectedImpact = [
  {
    metric: "AWS",
    label: "release notes",
    detail: "Recognized for public Powertools contributions across Python and TypeScript"
  },
  {
    metric: "CNCF",
    label: "observability",
    detail: "Public OpenTelemetry work in Go-based telemetry infrastructure"
  },
  {
    metric: "3/4",
    label: "scenarios improved",
    detail: "Intent-aware reranker improved alignment in reproducible offline evaluation"
  },
  {
    metric: "1M+",
    label: "records validated",
    detail: "Automated archival data verification with 99.9% accuracy"
  }
];

const featuredProjects = [
  {
    title: "i4 Ops Infrastructure Security",
    description: "Founding-engineer work on zero-exfiltration infrastructure security for AI-era data risk, described only at a public-safe product level.",
    image: "/projects/i4-zero-exfiltration.svg",
    href: "/projects/i4-ops-infrastructure-security",
    tags: [
      { name: "Go", icon: "Go" as IconName },
      { name: "Python", icon: "Python" as IconName },
      { name: "Security", icon: "Security" as IconName },
      { name: "AWS", icon: "AWS" as IconName }
    ]
  },
  {
    title: "OpenTelemetry Go SDK",
    description: "CNCF OpenTelemetry Go SDK contributions focused on telemetry pipeline behavior and production observability for distributed systems.",
    image: "/projects/opentelemetry-go.svg",
    href: "/projects/opentelemetry-go-sdk",
    githubUrl: "https://github.com/open-telemetry/opentelemetry-go",
    tags: [
      { name: "Go", icon: "Go" as IconName },
      { name: "OpenTelemetry", icon: "OpenTelemetry" as IconName },
      { name: "Distributed Tracing", icon: "Tracing" as IconName },
      { name: "CNCF", icon: "Server" as IconName }
    ]
  },
  {
    title: "Dynamic Queue Adaptation",
    description: "Offline Python prototype testing whether manual queue insertions can improve short-term recommendation intent alignment versus a static seed-only baseline.",
    image: "/projects/dynamic-queue-adaptation.svg",
    href: "/projects/dynamic-queue-adaptation",
    githubUrl: "https://github.com/VatsalGoel3/dynamic-queue-adaptation",
    tags: [
      { name: "Python", icon: "Python" as IconName },
      { name: "AI", icon: "AI" as IconName },
      { name: "Ranking", icon: "Machine Learning" as IconName },
      { name: "Evaluation", icon: "Validation" as IconName }
    ]
  }
];

export default function Home() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsFirstLoad(true);
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      setIsFirstLoad(false);
    }
  }, [setIsFirstLoad]);

  return (
    <main>
    {/* Hero Section - Light */}
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 sm:py-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left"
            initial={{ opacity: 0, y: isFirstLoad ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: isFirstLoad ? 0.8 : 0.6,
              delay: isFirstLoad ? 0.2 : 0
            }}
          >
            <div className="flex-1 space-y-6 sm:space-y-10">
              
              {/* Main Heading */}
              <motion.div 
                className="space-y-4 sm:space-y-6 pt-8 sm:pt-12"
                initial={{ opacity: 0, y: isFirstLoad ? 20 : 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: isFirstLoad ? 0.8 : 0.6,
                  delay: isFirstLoad ? 0.4 : 0.2 
                }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                  Vatsal Goel
                </h1>
                <span className="block text-emerald-600 mt-2 sm:mt-4 text-2xl sm:text-5xl lg:text-7xl font-semibold">
                  Founding Engineer
                </span>
                <p className="text-2xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 text-transparent bg-clip-text leading-snug sm:leading-tight break-words">
                  Infra security | Cloud systems | Open-source observability
                </p>
              </motion.div>
              
              {/* Bio */}
              <motion.p 
                className="text-lg sm:text-xl md:text-1.5xl text-gray-600 leading-relaxed max-w-xl mx-auto sm:mx-0 tracking-wide"
                initial={{ opacity: 0, y: isFirstLoad ? 20 : 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: isFirstLoad ? 0.8 : 0.6,
                  delay: isFirstLoad ? 0.6 : 0.4 
                }}
              >
                Hi, I&apos;m Vatsal Goel, a founding engineer at i4 Ops working at the intersection of infrastructure security, 
                cloud systems, and AI-era data risk. I keep company implementation details private here and focus on public-safe 
                product outcomes, open-source work, and reproducible projects.
                <span className="block mt-3 sm:mt-4">
                  I&apos;m also an AWS Powertools maintainer and CNCF OpenTelemetry contributor, with a Master&apos;s in Computer Science 
                  from the University of Utah and a product-minded focus on taking MVPs toward market-ready systems.
                </span>
              </motion.p>

              {/* Social Links */}
              <motion.div 
                className="flex gap-6 pt-4 justify-center sm:justify-start"
                initial={{ opacity: 0, y: isFirstLoad ? 20 : 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: isFirstLoad ? 0.8 : 0.6,
                  delay: isFirstLoad ? 0.8 : 0.6 
                }}
              >
                <a
                  href="https://github.com/VatsalGoel3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <FaGithub className="w-10 h-10" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vatsal-goel3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <FaLinkedin className="w-10 h-10" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div 
              className="flex-shrink-0 p-4 sm:p-8"
              initial={{ opacity: 0, scale: isFirstLoad ? 0.8 : 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: isFirstLoad ? 0.8 : 0.6,
                delay: isFirstLoad ? 0.6 : 0.4 
              }}
            >
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20"></div>
                <ProfileImage className="relative w-64 h-64 sm:w-96 sm:h-96 lg:w-112 lg:h-112" />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>

      {/* Selected Impact Section */}
      <ScrollAnimation>
        <section className="relative py-14 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedImpact.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-lg border border-gray-200 bg-white/90 p-5 shadow-sm"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-emerald-600">{item.metric}</span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">{item.label}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Skills Section */}
      <ScrollAnimation>
        <section className="relative py-20 bg-[#0a192f]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_2px,transparent_1px),linear-gradient(to_bottom,#ffffff05_2px,transparent_1px)] bg-[size:24px_24px] bg-fixed" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TerminalWindow title="skills.sh" className="mb-12">
              <TerminalText 
                text="cat skills_and_technologies.md" 
                className="mb-8"
              />

              <div className="text-white px-6 pb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    A comprehensive toolkit for building scalable and secure applications
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-4">
                  {Object.entries(skills).map(([category, items], categoryIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        ease: "easeOut",
                        delay: categoryIndex * 0.1
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 text-emerald-400 border-b border-gray-700/50 pb-4">
                        {category === 'languages' && <FaCode className="w-6 h-6" aria-hidden="true" />}
                        {category === 'frameworks' && <FaServer className="w-6 h-6" aria-hidden="true" />}
                        {category === 'tools' && <FaTools className="w-6 h-6" aria-hidden="true" />}
                        <h3 className="text-2xl font-bold capitalize">
                          {category}
                        </h3>
                      </div>
                      
                      <div className="space-y-3">
                        {items.map((skill) => (
                          <motion.div
                            key={skill.name}
                            className="group relative overflow-hidden bg-gray-800/30 backdrop-blur-sm rounded-xl p-3 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50"
                          >
                            <div className="flex items-center gap-4">
                              <div className="p-2 bg-gray-900/50 rounded-lg">
                                <skill.icon className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                                  {skill.name}
                                </h4>
                                <p className="text-sm text-gray-400">{skill.level}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          </div>
        </section>
      </ScrollAnimation>

      {/* Projects Section */}
      <ScrollAnimation>
        <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_1px),linear-gradient(to_bottom,#80808012_2px,transparent_1px)] bg-[size:24px_24px] bg-fixed" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TerminalWindow title="projects.sh">
              <TerminalText 
                text="ls -la featured_projects/" 
                className="mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layoutId={`project-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                >
                  View all projects
                  <FaArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </TerminalWindow>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Section */}
      <ScrollAnimation>
        <section className="relative py-10 bg-gray-900 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_2px,transparent_1px),linear-gradient(to_bottom,#ffffff05_2px,transparent_1px)] bg-[size:24px_24px] bg-fixed" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TerminalWindow title="contact.sh">
              <TerminalText 
                text="echo 'Let's connect!'" 
                className="mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-gray-300 mb-8">
                    I&apos;m always interested in hearing about new projects and opportunities. 
                    Feel free to reach out if you&apos;d like to connect!
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:goelvt3@gmail.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      goelvt3@gmail.com
                    </a>
                    
                    <a 
                      href="https://github.com/VatsalGoel3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" aria-hidden="true" />
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/vatsal-goel3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                      LinkedIn
                    </a>
                  </div>
                </div>
                
                <div>
                  <ContactForm />
                </div>
              </div>
            </TerminalWindow>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
