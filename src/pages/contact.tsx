import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, Mail, MapPin, MessageSquare } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

import { useState } from 'react';

export function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      {/* Back to Home Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C3BFF] to-[#FF2E88] flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold text-white">PULSE-NYC</span>
          </Link>
          
          <Link 
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(108,59,255,0.3)]"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF2E88] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#00E0FF] rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white" style={{ fontSize: '72px', fontWeight: '700' }}>
              Get in <span className="bg-gradient-to-r from-[#6C3BFF] via-[#00E0FF] to-[#FF2E88] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto" style={{ fontSize: '20px' }}>
              Have questions? Want to partner with us? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            {[
              {
                icon: Mail,
                title: 'Email Us',
                content: 'pulse.live.nyc@gmail.com',
                subtext: 'We reply within 72 hours',
                color: '#6C3BFF',
                link: 'mailto:pulse.live.nyc@gmail.com'
              },
              {
                icon: FaInstagram,
                title: 'Follow Us',
                content: '@pulse.live.nyc',
                subtext: 'Stay updated on Instagram',
                color: '#FF2E88',
                link: 'https://www.instagram.com/pulse.live.nyc/'
              },
              {
                icon: MapPin,
                title: 'Based in',
                content: 'New York City',
                subtext: 'The city that never sleeps',
                color: '#00E0FF',
                link: null
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    backgroundColor: `${item.color}20`,
                    boxShadow: `0 0 30px ${item.color}40`
                  }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontSize: '20px', fontWeight: '700' }}>
                  {item.title}
                </h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium mb-1 block hover:text-white transition-colors"
                    style={{ color: item.color, fontSize: '18px' }}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-lg font-medium mb-1" style={{ color: item.color, fontSize: '18px' }}>
                    {item.content}
                  </p>
                )}
                <p className="text-white/50 text-sm" style={{ fontSize: '14px' }}>
                  {item.subtext}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative p-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C3BFF] rounded-full blur-[100px] opacity-10" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C3BFF] to-[#FF2E88] flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontSize: '32px', fontWeight: '700' }}>
                    Send us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 mb-2 font-medium" style={{ fontSize: '14px', fontWeight: '500' }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all"
                        placeholder="John Doe"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2 font-medium" style={{ fontSize: '14px', fontWeight: '500' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all"
                        placeholder="john@example.com"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 font-medium" style={{ fontSize: '14px', fontWeight: '500' }}>
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all"
                      style={{ fontSize: '16px' }}
                    >
                      <option value="" className="bg-[#0B0B0F]">Select a subject</option>
                      <option value="general" className="bg-[#0B0B0F]">General Inquiry</option>
                      <option value="partnership" className="bg-[#0B0B0F]">Partnership</option>
                      <option value="support" className="bg-[#0B0B0F]">Support</option>
                      <option value="feedback" className="bg-[#0B0B0F]">Feedback</option>
                      <option value="press" className="bg-[#0B0B0F]">Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 font-medium" style={{ fontSize: '14px', fontWeight: '500' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/20 transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#6C3BFF] to-[#FF2E88] text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(108,59,255,0.6)] transition-all duration-200"
                    style={{ fontSize: '18px', fontWeight: '700' }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
