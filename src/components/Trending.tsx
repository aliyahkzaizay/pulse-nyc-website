// DO NOT INCLUDE (FUTURE SUGGESTION)

import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

const trendingSpots = [
  {
    name: 'Somewhere Nowhere',
    energy: 95,
    vibe: 'Rooftop',
    waitTime: '45 min',
    color: '#FF2E88',
  },
  {
    name: 'Kind Regards',
    energy: 88,
    vibe: 'Cocktail Bar',
    waitTime: '20 min',
    color: '#6C3BFF',
  },
  {
    name: 'The DL',
    energy: 91,
    vibe: 'Dance Club',
    waitTime: '30 min',
    color: '#00E0FF',
  },
  {
    name: 'House of Yes',
    energy: 89,
    vibe: 'Performance',
    waitTime: '25 min',
    color: '#FF2E88',
  },
  {
    name: 'Good Room',
    energy: 86,
    vibe: 'Electronic',
    waitTime: '15 min',
    color: '#6C3BFF',
  },
];

export function Trending() {
  return (
    <section className="relative py-32 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF2E88]/20 border border-[#FF2E88]/40 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-[#FF2E88]" />
            <span className="text-[#FF2E88] font-bold">Trending Tonight</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What's <span className="text-[#FF2E88]">LIT</span> Right Now
          </h2>
          <p className="text-xl text-white/60">
            Real people. Real energy. Real-time.
          </p>
        </motion.div>

        <div className="space-y-4">
          {trendingSpots.map((spot, index) => (
            <motion.div
              key={spot.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group bg-[#1A1A24] border border-white/10 rounded-xl p-6 hover:bg-[#232336] hover:border-[#FF2E88]/40 hover:shadow-[0_0_30px_rgba(255,46,136,0.2)] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  {/* Rank */}
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#6C3BFF] to-[#FF2E88] rounded-lg font-bold text-white">
                    #{index + 1}
                  </div>

                  {/* Spot info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white">
                        {spot.name}
                      </h3>
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: spot.color }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <span className="text-sm text-white/60">Live</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="px-3 py-1 bg-[#6C3BFF]/20 text-[#6C3BFF] rounded-full">
                        {spot.vibe}
                      </span>
                      <span>Wait: {spot.waitTime}</span>
                    </div>
                  </div>
                </div>

                {/* Energy meter */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white mb-1">
                      {spot.energy}%
                    </div>
                    <div className="text-xs text-white/60">Energy</div>
                  </div>

                  {/* Energy bar */}
                  <div className="w-32 h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${spot.energy}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${spot.color}, #6C3BFF)`,
                      }}
                    />
                  </div>

                  {/* Flame emoji */}
                  <motion.div
                    className="text-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    🔥
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border border-[#00E0FF] text-[#00E0FF] rounded-xl hover:bg-[#00E0FF]/10 hover:shadow-[0_0_20px_rgba(0,224,255,0.5)] transition-all duration-200 hover:scale-105 active:scale-95">
            See All Trending Spots
          </button>
        </motion.div>
      </div>
    </section>
  );
}
