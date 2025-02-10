'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaGlobe, FaLinkedin } from 'react-icons/fa';
import TerminalWindow from '@/components/TerminalWindow';
import TerminalText from '@/components/TerminalText';
import Link from 'next/link';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted (avoid hydration mismatch)
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
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TerminalWindow title="contact_details.sh">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-emerald-400 mb-4">Contact Information</h2>
                    <div className="space-y-4">
                      <a 
                        href="mailto:vatsal.goel@utah.edu"
                        className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group"
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                          <FaEnvelope className="w-5 h-5" />
                        </div>
                        vatsal.goel@utah.edu
                      </a>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="p-2 bg-gray-800 rounded-lg">
                          <FaMapMarkerAlt className="w-5 h-5" />
                        </div>
                        Salt Lake City, UT
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-emerald-400 mb-4">Social Links</h2>
                    <div className="space-y-4">
                      <Link href="/" className='flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group'>
                        <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                          <FaGlobe className="w-5 h-5" />
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
                          <FaGithub className="w-5 h-5" />
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
                          <FaLinkedin className="w-5 h-5" />
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
            >
              <TerminalWindow title="send_message.sh">
                <form className="space-y-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-gray-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-gray-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-gray-300"
                      placeholder="Your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </TerminalWindow>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
