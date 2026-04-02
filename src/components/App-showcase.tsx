import { motion } from 'motion/react';
import { AppMockup } from './app-mockup'
import { Smartphone, Zap, MapPin, TrendingUp } from 'lucide-react';

export function AppShowcase() {
  return (
    <section id="how-it-works"className="relative py-32 overflow-hidden bg-gradient-to-b from-[#1A1A24] to-[#0B0B0F]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6C3BFF] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FF2E88] rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The App That Knows <span className="text-[#00E0FF]">Before You Go</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Get real-time insights on every venue. Energy levels, crowd size, wait times, and more—all at your fingertips.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* App mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >

            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/50 backdrop-blur-sm">
                Preview · design subject to change
            </div>
            <AppMockup />
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              {
                icon: Zap,
                color: '#FF2E88',
                title: 'Live Energy Tracking',
                description: 'See exactly how lit each venue is in real-time. No more showing up to a dead spot.',
              },
              {
                icon: MapPin,
                color: '#6C3BFF',
                title: 'Interactive Map',
                description: 'Browse venues on an interactive map. Filter by vibe, distance, and energy level.',
              },
              {
                icon: TrendingUp,
                color: '#00E0FF',
                title: 'Trend Predictions',
                description: 'AI-powered predictions show you which spots are heating up before they get packed.',
              },
              {
                icon: Smartphone,
                color: '#FFD700',
                title: 'Simple Interface',
                description: 'Clean, intuitive design that gets you the info you need in seconds. No clutter.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 group"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}40, ${feature.color}20)`,
                    border: `1px solid ${feature.color}40`,
                  }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E0FF] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
         
        </motion.div>
      </div>
    </section>
  );
}
