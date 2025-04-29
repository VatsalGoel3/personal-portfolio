'use client';

import { 
  FaGithub, FaCode, FaServer, FaTools,
  FaPython, FaJava, FaJs, FaReact, FaAws, FaDocker, FaLinkedin
} from "react-icons/fa";
import { 
  SiCplusplus, SiGo, SiTensorflow, SiKubernetes, 
  SiTerraform, SiFlask, SiExpress, SiMysql 
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

const skills = {
  languages: [
    { name: "C/C++", icon: SiCplusplus, level: "Advanced" },
    { name: "Python", icon: FaPython, level: "Advanced" },
    { name: "JavaScript", icon: FaJs, level: "Intermediate" },
    { name: "Java", icon: FaJava, level: "Intermediate" },
    { name: "SQL", icon: SiMysql, level: "Intermediate" },
    { name: "Go", icon: SiGo, level: "Familiar" }
  ],
  frameworks: [
    { name: "Flask", icon: SiFlask, level: "Advanced" },
    { name: "Node.js", icon: FaJs, level: "Advanced" },
    { name: "Express.js", icon: SiExpress, level: "Advanced" },
    { name: "React", icon: FaReact, level: "Intermediate" },
    { name: "TensorFlow", icon: SiTensorflow, level: "Intermediate" }
  ],
  tools: [
    { name: "AWS", icon: FaAws, level: "Advanced" },
    { name: "Docker", icon: FaDocker, level: "Advanced" },
    { name: "Kubernetes", icon: SiKubernetes, level: "Intermediate" },
    { name: "Terraform", icon: SiTerraform, level: "Intermediate" },
    { name: "Git", icon: FaGithub, level: "Advanced" },
    { name: "Bash", icon: FaCode, level: "Advanced" }
  ]
};

const featuredProjects = [
  {
    title: "AWS Powertools (TypeScript)",
    description: "Open-source contributions to AWS Powertools for Lambda (TypeScript), including JSON Schema validation, @validator decorator, and Middy.js middleware integration. Featured in 3+ AWS release notes.",
    image: "/projects/aws-powertools-ts.png",
    githubUrl: "https://github.com/awslabs/aws-lambda-powertools-typescript",
    tags: [
      { name: "TypeScript", icon: "TypeScript" as IconName },
      { name: "AWS", icon: "AWS" as IconName },
      { name: "Middy.js", icon: "Middleware" as IconName },
      { name: "Validation", icon: "Validation" as IconName }
    ]
  },
  {
    title: "CineMatch",
    description: "Movie recommendation system using collaborative filtering and sentiment analysis to provide personalized movie suggestions.",
    image: "/projects/cinematch.jpg",
    githubUrl: "https://github.com/VatsalGoel3/CineMatch",
    tags: [
      { name: "Flask", icon: "Flask" as IconName },
      { name: "React", icon: "React" as IconName },
      { name: "MySQL", icon: "MySQL" as IconName },
      { name: "Python", icon: "Python" as IconName },
      { name: "Machine Learning", icon: "Machine Learning" as IconName }
    ]
  },
  {
    title: "Raft Key-Value Store",
    description: "Distributed key-value store using Raft consensus protocol for fault tolerance and consistent data replication.",
    image: "/projects/raft-kv.jpg",
    tags: [
      { name: "Go", icon: "Go" as IconName },
      { name: "Distributed Systems", icon: "Distributed Systems" as IconName },
      { name: "Raft", icon: "Raft" as IconName },
      { name: "Consensus", icon: "Consensus" as IconName }
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
                  Software Engineer
                </span>
                <p className="text-2xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 text-transparent bg-clip-text leading-snug sm:leading-tight break-words">
                  Engineering Scalable Cloud Solutions • Cybersecurity • AI-Driven Automation
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
                Hi, I&apos;m Vatsal Goel, a Software Engineer passionate about building scalable cloud systems, 
                securing data, and driving automation. With experience in software development, cybersecurity, 
                and cloud computing, I specialize in crafting efficient, high-performance solutions. 
                <span className="block mt-3 sm:mt-4">
                  Currently pursuing my Master&apos;s in Computer Science at the University of Utah, 
                  I&apos;ve worked on projects ranging from automation workflows to large-scale distributed systems. 
                  Let&apos;s connect and build something impactful!
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
                  className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <FaGithub className="w-10 h-10" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vatsal-goel3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <FaLinkedin className="w-10 h-10" />
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
                        {category === 'languages' && <FaCode className="w-6 h-6" />}
                        {category === 'frameworks' && <FaServer className="w-6 h-6" />}
                        {category === 'tools' && <FaTools className="w-6 h-6" />}
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
                                <skill.icon className="w-5 h-5 text-emerald-400" />
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
                      href="mailto:vatsal.goel@utah.edu"
                      className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      vatsal.goel@utah.edu
                    </a>
                    
                    <a 
                      href="https://github.com/VatsalGoel3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/vatsal-goel3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
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
