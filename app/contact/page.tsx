'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaGlobe, FaLinkedin } from 'react-icons/fa';
import TerminalWindow from '@/components/TerminalWindow';
import TerminalText from '@/components/TerminalText';
import Link from 'next/link';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatches
  if (!mounted) {
    return null;
  }

  // Handle form submission via Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');
    
    try {
      const res = await fetch('https://formspree.io/f/xdkalggb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setResponseMessage('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Failed to send message. Please try again later.');
        console.error('Submission error:', res.statusText);
      }
    } catch (error) {
      setResponseMessage('An error occurred while sending your message.');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                      <Link href="/" className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
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
                <div className="min-h-[300px] flex flex-col justify-between">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        required
                        className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        required
                        className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        required
                        className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="Your message here..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                  {/* Reserve space for the response message */}
                  <p className="text-center text-sm text-gray-300 mt-2 h-8">
                    {responseMessage || <span>&nbsp;</span>}
                  </p>
                </div>
              </TerminalWindow>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
