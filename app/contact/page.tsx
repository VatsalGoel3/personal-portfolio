'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaGlobe, FaLaptopCode, FaLinkedin } from 'react-icons/fa';
import TerminalWindow from '@/components/TerminalWindow';
import TerminalText from '@/components/TerminalText';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatches
  if (!mounted) {
    return null;
  }

  return (
    <main className="pt-16">
      <section className="relative min-h-[calc(100vh-4rem)] bg-[#0a192f] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_2px,transparent_1px),linear-gradient(to_bottom,#ffffff05_2px,transparent_1px)] bg-[size:24px_24px] bg-fixed" />
        
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Section Header */}
          <TerminalWindow title="contact.sh" className="mb-8">
            <TerminalText 
              text="cat contact_info.md" 
              className="mb-4 text-sm opacity-80 hover:opacity-100 transition-opacity"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <h1 className="text-4xl font-bold text-white mb-3">Let&apos;s Connect</h1>
              <p className="text-gray-400 text-lg">
                I&apos;m always open to new opportunities and interesting projects
              </p>
            </motion.div>
          </TerminalWindow>

          {/* Contact Content */}
          <div className="grid items-stretch md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TerminalWindow title="contact_details.sh" className="h-full">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div>
                    <h2 className="text-xl font-bold text-emerald-400 mb-4">Contact Information</h2>
                    <div className="space-y-4">
                      <a 
                        href="mailto:goelvt3@gmail.com"
                        className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group"
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                          <FaEnvelope className="w-5 h-5" aria-hidden="true" />
                        </div>
                        goelvt3@gmail.com
                      </a>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="p-2 bg-gray-800 rounded-lg">
                          <FaLaptopCode className="w-5 h-5" aria-hidden="true" />
                        </div>
                        Fully remote
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-emerald-400 mb-4">Social Links</h2>
                    <div className="space-y-4">
                      <Link href="/" className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
                        <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                          <FaGlobe className="w-5 h-5" aria-hidden="true" />
                        </div>
                        Portfolio Website
                      </Link>
                      <a 
                        href="https://github.com/VatsalGoel3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group"
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                          <FaGithub className="w-5 h-5" aria-hidden="true" />
                        </div>
                        GitHub
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/vatsal-goel3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group"
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                          <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                        </div>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TerminalWindow title="send_message.sh" className="h-full">
                <div className="flex h-full min-h-[300px] flex-col justify-between">
                  <ContactForm />
                </div>
              </TerminalWindow>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
