import { motion } from 'motion/react';
import {Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B0B0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C3BFF] to-[#FF2E88] flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-white">PULSE-NYC</span>
            </div>
            <p className="text-white/60 mb-6 max-w-md">
              Feel the city after dark. Real-time nightlife tracking for New York City.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.instagram.com/pulse.live.nyc/"
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#6C3BFF] transition-colors"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </motion.a>
            
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#FF2E88] transition-colors"
              >
                <Mail className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-white/60 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#download" className="text-white/60 hover:text-white transition-colors">
                  Download
                </a>
              </li>
             
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} PULSE-NYC. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            {/* <a href="#" className="text-white/40 hover:text-white transition-colors">
              Terms of Service
            </a> */}
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </a>
            
          </div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-[#6C3BFF] blur-[100px] opacity-10" />
    </footer>
  );
}
