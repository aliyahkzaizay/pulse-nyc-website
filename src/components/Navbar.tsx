import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // closes menu after click
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/5 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C3BFF] to-[#FF2E88] flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          </div>
          <span className="text-xl font-bold text-white">PULSE-NYC</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-white/80 hover:text-white transition-colors"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollToSection('download')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Download
          </button>
          <button
            onClick={() => scrollToSection('download')}
            className="px-6 py-2 bg-gradient-to-r from-[#6C3BFF] to-[#FF2E88] text-white rounded-lg hover:shadow-[0_0_20px_rgba(108,59,255,0.6)] transition-all duration-200 active:scale-95"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('features')}
              className="text-left text-white/80 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left text-white/80 hover:text-white transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="text-left text-white/80 hover:text-white transition-colors"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="mt-2 px-6 py-3 bg-gradient-to-r from-[#6C3BFF] to-[#FF2E88] text-white rounded-lg hover:shadow-[0_0_20px_rgba(108,59,255,0.6)] transition-all duration-200 active:scale-95"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}