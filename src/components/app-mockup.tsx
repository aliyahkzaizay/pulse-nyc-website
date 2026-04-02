import { motion } from 'motion/react';
import { MapPin, Flame, Users, Clock, Star, Zap } from 'lucide-react';

export function AppMockup() {
  const mockVenues = [
    {
      name: 'Marquee',
      type: 'Club',
      distance: '0.3 mi',
      energy: 95,
      crowd: 88,
      waitTime: '20 min',
      cover: '$40',
      rating: 4.8,
    },
    {
      name: 'The Box',
      type: 'Lounge',
      distance: '0.5 mi',
      energy: 78,
      crowd: 65,
      waitTime: '10 min',
      cover: '$30',
      rating: 4.6,
    },
    {
      name: 'House of Yes',
      type: 'Venue',
      distance: '1.2 mi',
      energy: 92,
      crowd: 82,
      waitTime: '25 min',
      cover: '$25',
      rating: 4.9,
    },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="relative aspect-[9/19] bg-black rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900">
        {/* Screen */}
        <div className="relative w-full h-full bg-[#0B0B0F] rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/40 to-transparent z-20 flex items-center justify-between px-8 pt-2">
            <span className="text-white text-xs font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 border border-white rounded-sm" />
              <div className="w-1 h-3 bg-white rounded-sm" />
            </div>
          </div>

          {/* App content */}
          <div className="h-full overflow-hidden">
            {/* Header */}
            <div className="relative z-10 pt-14 pb-6 px-6 bg-gradient-to-b from-[#0B0B0F] to-transparent">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-white text-2xl font-bold">Tonight</h1>
                  <p className="text-white/60 text-sm">Manhattan · 9:41 PM</p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6C3BFF] to-[#FF2E88] flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              {/* Energy meter */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-xs">City Energy</span>
                  <span className="text-[#FF2E88] font-bold text-lg">87%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '87%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#6C3BFF] via-[#FF2E88] to-[#00E0FF]"
                  />
                </div>
              </div>
            </div>

            {/* Venue list */}
            <div className="px-4 space-y-3 pb-20">
              {mockVenues.map((venue, index) => (
                <motion.div
                  key={venue.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-[#1A1A24]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-[#1A1A24] transition-all"
                >
                  {/* Venue header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold">{venue.name}</h3>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <Flame className="w-4 h-4 text-[#FF2E88]" />
                        </motion.div>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-white/60">
                        <span>{venue.type}</span>
                        <span>•</span>
                        <span>{venue.distance}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{venue.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Energy bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/60 text-xs">Energy</span>
                      <span className="text-white font-bold text-sm">{venue.energy}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${venue.energy}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
                        className="h-full"
                        style={{
                          background:
                            venue.energy >= 85
                              ? 'linear-gradient(90deg, #FF2E88, #6C3BFF)'
                              : venue.energy >= 70
                              ? 'linear-gradient(90deg, #6C3BFF, #00E0FF)'
                              : '#00E0FF',
                        }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <Users className="w-3 h-3 text-[#00E0FF] mx-auto mb-1" />
                      <p className="text-white text-xs font-bold">{venue.crowd}%</p>
                      <p className="text-white/40 text-[10px]">Crowd</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <Clock className="w-3 h-3 text-[#6C3BFF] mx-auto mb-1" />
                      <p className="text-white text-xs font-bold">{venue.waitTime}</p>
                      <p className="text-white/40 text-[10px]">Wait</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <span className="text-xs mx-auto mb-1 block">💵</span>
                      <p className="text-white text-xs font-bold">{venue.cover}</p>
                      <p className="text-white/40 text-[10px]">Cover</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 px-8 py-4">
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-[#FF2E88] mx-auto mb-1" />
                  <span className="text-[10px] text-white">Map</span>
                </div>
                <div className="text-center">
                  <Flame className="w-6 h-6 text-white/40 mx-auto mb-1" />
                  <span className="text-[10px] text-white/40">Trending</span>
                </div>
                <div className="text-center">
                  <Star className="w-6 h-6 text-white/40 mx-auto mb-1" />
                  <span className="text-[10px] text-white/40">Saved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30" />
        </div>
      </div>

      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-b from-[#6C3BFF]/30 via-[#FF2E88]/20 to-[#00E0FF]/30 blur-3xl -z-10"
      />
    </div>
  );
}
