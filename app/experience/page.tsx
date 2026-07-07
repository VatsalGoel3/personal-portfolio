'use client';

import ScrollAnimation from '@/components/ScrollAnimation';
import TerminalWindow from '@/components/TerminalWindow';
import TerminalText from '@/components/TerminalText';
import { motion } from 'framer-motion';
import { FaAws, FaPython, FaReact, FaDocker, FaGithub, FaMapMarkerAlt, FaCalendarAlt, FaJava, FaDatabase, FaUsers, FaVideo, FaProjectDiagram, FaTerminal, FaCogs, FaPlug, FaBolt, FaPaintBrush, FaCubes, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import { SiKubernetes, SiPostgresql, SiNodedotjs, SiSpringboot, SiMysql, SiRedis, SiTensorflow, SiAdobecreativecloud, SiTerraform, SiGo } from 'react-icons/si';

// Map of technology names to their icons
const techIcons = {
  "Python": FaPython,
  "AWS": FaAws,
  "GitHub Actions": FaGithub,
  "React": FaReact,
  "Node.js": SiNodedotjs,
  "Docker": FaDocker,
  "Kubernetes": SiKubernetes,
  "PostgreSQL": SiPostgresql,
  "Java": FaJava,
  "Spring Boot": SiSpringboot,
  "MySQL": SiMysql,
  "Redis": SiRedis,
  "ML": SiTensorflow,
  "Data Processing": FaDatabase,
  "Video Processing": FaVideo,
  "Team Leadership": FaUsers,
  "Content Optimization": SiAdobecreativecloud,
  "Workflow Management": FaProjectDiagram,
  "SQL": FaDatabase,
  "REST API": FaDatabase,
  "Figma": SiNodedotjs,
  "Bash": FaTerminal,
  "Automation": FaCogs,
  "API Integration": FaPlug,
  "Performance Optimization": FaBolt,
  "UX/UI": FaPaintBrush,
  "Microservices": FaCubes,
  "React.js": FaReact,
  "REST APIs": FaDatabase,
  "Adobe Creative Cloud": SiAdobecreativecloud,
  "Terraform": SiTerraform,
  "Security": FaShieldAlt,
  "Go": SiGo,
  "Infrastructure Security": FaShieldAlt,
  "Cloud Systems": FaAws,
  "AI Risk Scoring": SiTensorflow,
  "Observability": FaNetworkWired,
  "Product Engineering": FaCogs,
};

const experiences = [
  {
    title: "Founding Engineer",
    company: "i4 Ops",
    date: "Jul 2025 - Present",
    location: "Fully remote",
    description: [
      "Building public-safe zero-exfiltration infrastructure security products for AI-era data risk at an early-stage startup",
      "Working across Go, Python, cloud infrastructure, and product engineering while keeping company implementation details private",
      "Collaborating with the founding team on security architecture, customer discovery, roadmap tradeoffs, and production delivery",
      "Applying observability, secure-by-design engineering, and automation practices to infrastructure security workflows"
    ],
    tech: ["Go", "Python", "AWS", "Kubernetes", "Terraform", "Infrastructure Security", "Cloud Systems", "Observability", "Product Engineering"]
  },
  {
    title: "Software Engineer",
    company: "University of Utah",
    date: "Oct 2023 – May 2025",
    location: "Salt Lake City, UT",
    description: [
      "Reduced manual data verification effort by 70% while maintaining 99.9% accuracy across 1M+ records by engineering automated Python validation workflows",
      "Improved digital preservation integrity for 1M+ archival records by building automated metadata extraction and validation pipelines in Python and Bash that caught schema violations before ingest"
    ],
    tech: ["Python", "AWS", "Data Processing", "Bash", "Automation", "API Integration"]
  },
  {
    title: "Software Engineer – Full Stack",
    company: "XGRO Technologies",
    date: "Oct 2021 – Oct 2022",
    location: "Pune, India",
    description: [
      "Shipped 3 full-stack e-commerce platforms handling 10K+ daily transactions using React and SQL-backed REST APIs, scaling to 2x traffic growth without infrastructure changes",
      "Reduced page load times by 30% and bounce rates by 12% by optimizing SQL execution plans, implementing Redis caching, and restructuring API payloads",
      "Increased user engagement by 25% through responsive product UI redesigns in Figma and CSS that improved mobile conversion"
    ],
    tech: ["React.js", "Node.js", "SQL", "REST APIs", "Redis", "Performance Optimization", "UX/UI"]
  }
];

// Helper function to highlight metrics in text
function highlightMetrics(text: string, className = 'text-emerald-400 font-semibold') {
  return text.replace(
    /(\d+\+?%|\d+[KkMm]\+|\d+\.\d+|\d+\+)/g,
    match => `<span class="${className}">${match}</span>`
  );
}

export default function Experience() {
  return (
    (<main className="pt-16">
      <ScrollAnimation>
        <section className="relative py-12 bg-[#0a192f]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_2px,transparent_1px),linear-gradient(to_bottom,#ffffff05_2px,transparent_1px)] bg-[size:24px_24px] bg-fixed" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <TerminalWindow title="experience.sh" className="mb-8">
              <TerminalText 
                text="cat work_experience.md" 
                className="mb-4 text-sm opacity-80 hover:opacity-100 transition-opacity"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-6"
              >
                <h1 className="text-3xl font-bold text-white mb-3">Work Experience</h1>
                <p className="text-gray-400 text-sm">
                  A journey through my professional experiences and contributions
                </p>
              </motion.div>
            </TerminalWindow>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <TerminalWindow 
                    title={exp.company.toLowerCase().replace(/\s+/g, '-') + '.sh'}
                    className="transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,255,127,0.2)]"
                  >
                    <div className="space-y-5">
                      {/* Header */}
                      <div className="border-b border-gray-700/50 pb-3">
                        <h3 className="text-xl font-bold text-emerald-400 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap justify-between items-center gap-2">
                          <span className="text-gray-300">{exp.company}</span>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <FaMapMarkerAlt className="w-3 h-3" aria-hidden="true" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaCalendarAlt className="w-3 h-3" aria-hidden="true" />
                              {exp.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-4">
                        {exp.description.map((item, i) => (
                          <div key={i} className="group">
                            <p className="text-gray-300 leading-relaxed hover:text-gray-100 transition-colors pl-4"
                               dangerouslySetInnerHTML={{ 
                                 __html: highlightMetrics(item, 'text-emerald-400 font-semibold') 
                               }}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.tech.map((tech) => {
                          const Icon = techIcons[tech as keyof typeof techIcons];
                          return (
                            <span
                              key={tech}
                              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 
                                       text-emerald-400 rounded-full border border-emerald-500/20 hover:border-emerald-500/40 
                                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(0,255,127,0.2)]"
                            >
                              {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </TerminalWindow>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>)
  );
} 
