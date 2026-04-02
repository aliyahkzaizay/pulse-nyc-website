import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, Zap, Users, Target, Heart } from 'lucide-react';

export function AboutsPage() {
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
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#6C3BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E0FF] rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white" style={{ fontSize: '72px', fontWeight: '700' }}>
              About <span className="bg-gradient-to-r from-[#6C3BFF] via-[#00E0FF] to-[#FF2E88] bg-clip-text text-transparent">PULSE-NYC</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto" style={{ fontSize: '20px' }}>
              We're revolutionizing how New Yorkers experience nightlife, one pulse at a time.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div className="relative p-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2E88] rounded-full blur-[100px] opacity-10" />
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontSize: '36px', fontWeight: '700' }}>Our Mission</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-4" style={{ fontSize: '18px' }}>
                PULSE-NYC was born from a simple frustration: finding the right spot at the right time in New York City's vast nightlife scene. We believe that every night out should be unforgettable, and the key to that is real-time, accurate information about what's happening right now.
              </p>
              <p className="text-lg text-white/70 leading-relaxed" style={{ fontSize: '18px' }}>
                Our mission is to create the ultimate nightlife companion that helps you feel the city's energy, discover hidden gems, and make every night legendary.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              {
                icon: Zap,
                title: 'Real-Time',
                description: 'Live data, instant updates. Feel the pulse of the city as it happens.',
                color: '#6C3BFF'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Built by night owls, for night owls. Your experience shapes the app.',
                color: '#00E0FF'
              },
              {
                icon: Target,
                title: 'Precision',
                description: 'Accurate energy tracking so you always find the perfect vibe.',
                color: '#FF2E88'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'We live and breathe NYC nightlife. This is personal for us.',
                color: '#6C3BFF'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    backgroundColor: `${value.color}20`,
                    boxShadow: `0 0 30px ${value.color}40`
                  }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontSize: '20px', fontWeight: '700' }}>
                  {value.title}
                </h3>
                <p className="text-white/60" style={{ fontSize: '14px' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E0FF] rounded-full blur-[100px] opacity-10" />
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontSize: '36px', fontWeight: '700' }}>Our Story</h2>
              <div className="space-y-4 text-lg text-white/70" style={{ fontSize: '18px' }}>
                <p>
                  It started with a group of friends tired of showing up to "hot spots" only to find them dead. We realized that the nightlife industry desperately needed real-time data.
                </p>
                <p>
                  After countless nights mapping out venues, talking to club owners, and perfecting our energy-tracking algorithm, PULSE-NYC was born. We're not just another app—we're your insider guide to the city that never sleeps.
                </p>
                <p>
                  Today, we're building a platform that combines cutting-edge technology with authentic street knowledge, creating something that's never existed before: a real-time pulse on NYC's nightlife.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
