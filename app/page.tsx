import Image from "next/image";
import Link from "next/link";
import { 
  FaGithub, FaLinkedin, FaCode, FaServer, FaTools,
  FaPython, FaJava, FaJs, FaReact, FaAws, FaDocker 
} from "react-icons/fa";
import { 
  SiCplusplus, SiGo, SiTensorflow, SiKubernetes, 
  SiTerraform, SiFlask, SiExpress, SiMysql 
} from "react-icons/si";
import ProjectCard from '@/components/ProjectCard';
import TimelineItem from '@/components/TimelineItem';
import ContactForm from '@/components/ContactForm';
import ProfileImage from '@/components/ProfileImage';
import { FEATURES } from '@/config/features';

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
    title: "CineMatch",
    description: "A Flask and React-based movie recommendation system using collaborative filtering & sentiment analysis for personalized suggestions.",
    image: "/projects/cinematch.jpg",
    githubUrl: "https://github.com/VatsalGoel3/cinematch",
    tags: ["Flask", "React", "MySQL", "Python", "Machine Learning"]
  },
  {
    title: "DNS Server",
    description: "High-performance DNS server built with Python handling 5K queries/second with optimized caching and recursive query support.",
    image: "/projects/dns-server.jpg",
    githubUrl: "https://github.com/VatsalGoel3/dns-server",
    tags: ["Python", "Networking", "RFC Standards", "Caching"]
  },
  {
    title: "Raft Key-Value Store",
    description: "Fault-tolerant distributed key-value storage system using Raft consensus protocol with leader election and log replication.",
    image: "/projects/raft-kv.jpg",
    tags: ["Go", "Distributed Systems", "Raft", "Consensus"]
  }
];

function SkillsSection({ skills }: { skills: typeof skills }) {
  if (FEATURES.ENHANCED_SKILLS_UI) {
    return (
      <section className="bg-gradient-to-b from-gray-900 to-[#0a192f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable and secure applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-8">
                <div className="flex items-center gap-3 text-emerald-400 border-b border-gray-800 pb-4">
                  {category === 'languages' && <FaCode className="w-6 h-6" />}
                  {category === 'frameworks' && <FaServer className="w-6 h-6" />}
                  {category === 'tools' && <FaTools className="w-6 h-6" />}
                  <h3 className="text-2xl font-bold capitalize">
                    {category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-800 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gray-900 rounded-lg">
                          <skill.icon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-400">{skill.level}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="h-1.5 w-20 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-400 rounded-full"
                              style={{
                                width: skill.level === 'Advanced' ? '100%' : 
                                      skill.level === 'Intermediate' ? '66%' : '33%'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-emerald-500 mb-4 flex items-center gap-2">
              <FaCode className="w-5 h-5" /> Languages
            </h3>
            <div className="space-y-2">
              {skills.languages.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-gray-300 p-2 rounded hover:bg-gray-800"
                >
                  <skill.icon className="w-5 h-5 text-emerald-400" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-emerald-500 mb-4 flex items-center gap-2">
              <FaServer className="w-5 h-5" /> Frameworks
            </h3>
            <div className="space-y-2">
              {skills.frameworks.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-gray-300 p-2 rounded hover:bg-gray-800"
                >
                  <skill.icon className="w-5 h-5 text-emerald-400" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-emerald-500 mb-4 flex items-center gap-2">
              <FaTools className="w-5 h-5" /> Tools & Platforms
            </h3>
            <div className="space-y-2">
              {skills.tools.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-gray-300 p-2 rounded hover:bg-gray-800"
                >
                  <skill.icon className="w-5 h-5 text-emerald-400" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Vatsal Goel
              <span className="block text-emerald-500 mt-4">
                Software Engineer
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gray-100 via-emerald-400 to-emerald-600 text-transparent bg-clip-text whitespace-nowrap">
              Engineering Scalable Cloud Solutions • Cybersecurity • AI-Driven Automation
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/VatsalGoel3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/vatsal-goel3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <ProfileImage />
          </div>
        </div>
      </section>

      <SkillsSection skills={skills} />

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-400 mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Feel free to reach out if you'd like to connect!
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:vatsal.goel@utah.edu"
                    className="flex items-center gap-3 text-gray-300 hover:text-emerald-500 transition-colors"
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
                    className="flex items-center gap-3 text-gray-300 hover:text-emerald-500 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    GitHub
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/vatsal-goel3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-emerald-500 transition-colors"
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
          </div>
        </div>
      </section>
    </div>
  );
}
